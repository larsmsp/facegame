import React from 'react'

class ParticleArea extends React.Component
{
    componentDidMount() {
        // Only include client side
        initializeProton(this.refs.container, this.refs.particles);

        this._enableEmitter()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.effect === this.props.effect)
            return

        switch (prevProps.effect) {
            case 'bubbles':
                disableEmitter(BUBBLES)
                break
            case 'fireworks':
                disableEmitter(FIREWORKS)
                break
            default:
                break
        }

        this._enableEmitter()
    }

    _enableEmitter() {
        switch (this.props.effect) {
            case 'bubbles':
                enableEmitter(BUBBLES)
                break
            case 'fireworks':
                enableEmitter(FIREWORKS)
                break
            default:
                break
        }
    }

    createExplosion(x, y) {
        // Transform coordinate system
        x = (x / 100 + 0.5) * this.refs.container.clientWidth
        y = (y / 100 + 0.5) * this.refs.container.clientHeight
        _createExplosion(x, y)
    }

    componentWillUnmount() {
        destroy(this.refs.particles)
    }
    
    render() {
        return (
            <div ref="container" className="background">
                <style jsx>{`
                div {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    top: 0;
                    z-index: -1;
                }
                `}</style>
                <canvas ref="particles"></canvas>
            </div>
        )
    }
}

const BUBBLES = 'BUBBLES'
const FIREWORKS = 'FIREWORKS'

var _allEmitters = {};
var _proton = null;
const bubbleColors = ['#529B88', '#CDD180', '#FFFA32', '#FB6255', '#FB4A53', '#FF4E50', '#F9D423'];

var initializeProton = null;
var enableEmitter = null;
var disableEmitter = null;
var _createExplosion = null; 

if (process.browser) {
    class ProtonTag extends Proton.Initialize {

        constructor(tag) {
            super()

            this.tag = tag
        }

        initialize(particle) {
            particle.tag = this.tag
        }
    }

    class ProtonLifeAlpha extends Proton.Behaviour {

        constructor() {
            super()
        }

        applyBehaviour(particle, time, index) {
            this.calculate(particle, time, index);
            
            particle.alpha = particle.energy;
            if (particle.alpha < 0.001) particle.alpha = 0;
        }
    }

    initializeProton = function(container, canvas) {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        let ctx = canvas.getContext('webgl', { antialias: true, stencil: false, depth: false, preserveDrawingBuffer: true });
        ctx.globalCompositeOperation = "darker";

        createProton(canvas);
        tick();
    }
    
    function destroy() {
        _proton.destroy()
    }
    
    function createBubbleEmitter(width, height) {
        let emitter = new Proton.Emitter();
        emitter.rate = new Proton.Rate(new Proton.Span(2, 8), new Proton.Span(.05, .2));
    
        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.Radius(20, 200));
        emitter.addInitialize(new Proton.Life(2, 4));
        emitter.addInitialize(new Proton.Position(new Proton.RectZone(0, 0, width, height)));
        emitter.addInitialize(new Proton.Body(['/static/image/logo.png'], 128));
    
        emitter.addBehaviour(new Proton.Alpha(0.2, 0.8, Infinity, Proton.easeOutCubic));
        emitter.addBehaviour(new Proton.Scale(1, 0, Infinity, Proton.easeOutCubic));
        emitter.addBehaviour(new Proton.Rotate(0, new Proton.Span(-4, 4), 'to', Infinity, Proton.easeOutCubic));
        emitter.addBehaviour(new Proton.Color(bubbleColors, 'random'));
    
        return {
            emitter: emitter
        }
    }
    
    function createFireworksExplosionEmitter(x, y, particleCount) {
        let emitter = new Proton.Emitter();
        emitter.rate = new Proton.Rate(particleCount, 1);
        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.Radius(3, 7));
        emitter.addInitialize(new Proton.Life(1, 2));
        emitter.addInitialize(new Proton.V(new Proton.Span(5, 8), new Proton.Span(0, 360), 'polar'));

        emitter.addBehaviour(new Proton.RandomDrift(10, 10, .05));
        emitter.addBehaviour(new ProtonLifeAlpha());
        emitter.addBehaviour(new Proton.Gravity(5));
        var color = Math.random() > .3 ? Proton.MathUtils.randomColor() : 'random';
        emitter.addBehaviour(new Proton.Color(color));
        
        emitter.p.x = x;
        emitter.p.y = y;
        emitter.emit('once', 5);
    
        return emitter
    }
    
    function onParticleDeadMakeFireworks(particle) {
        if (particle.tag === 'firework') {
            _proton.addEmitter(createFireworksExplosionEmitter(particle.p.x, particle.p.y, new Proton.Span(150, 200)))
        }
    }

    function createFireworksEmitter(width, height) {
        let emitter = new Proton.Emitter();
        emitter.rate = new Proton.Rate(new Proton.Span(1, 3), 0.8);
        
        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.Radius(3, 7));
        emitter.addInitialize(new Proton.P(new Proton.LineZone(10, height, width - 10, height)));
        emitter.addInitialize(new Proton.Life(0.75, 1.2));
        emitter.addInitialize(new Proton.V(new Proton.Span(4, 15), new Proton.Span(2, 5, true), 'polar'));
        emitter.addInitialize(new ProtonTag('firework'))
    
        emitter.addBehaviour(new Proton.Gravity(1));
        emitter.addBehaviour(new Proton.Color('#ff0000', 'random'));
        
        return {
            emitter: emitter,
            onEnable: (proton) => {
                proton.addEventListener(Proton.PARTICLE_DEAD, onParticleDeadMakeFireworks);
            },
            onDisable: (proton) => {
                proton.removeEventListener(Proton.PARTICLE_DEAD, onParticleDeadMakeFireworks)
            },
        }
    }
    
    function createProton(canvas) {
        _proton = new Proton;
        
        _allEmitters[BUBBLES] = createBubbleEmitter(canvas.width, canvas.height)
        _allEmitters[FIREWORKS] = createFireworksEmitter(canvas.width, canvas.height)
    
        let renderer = new Proton.WebGLRenderer(canvas);
        renderer.onProtonUpdate = function() {
            this.gl.clearColor(0, 0, 0, 0.2)
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT)
        };
        _proton.addRenderer(renderer);
    }
    
    enableEmitter = function(name) {
        const emitter = _allEmitters[name]
        
        if (emitter.onEnable)
            emitter.onEnable(_proton)

        emitter.emitter.emit()
        _proton.addEmitter(emitter.emitter);
    }
    
    disableEmitter = function(name) {
        const emitter = _allEmitters[name]
        emitter.emitter.stop()
        _proton.removeEmitter(emitter.emitter)

        if (emitter.onDisable)
            emitter.onDisable(_proton)
    }

    _createExplosion = function(x, y) {
        _proton.addEmitter(createFireworksExplosionEmitter(x, y, new Proton.Span(50, 80)))
    }
    
    function tick() {
        requestAnimationFrame(tick)
        
        
        _proton.update()
    }
    
}

export default ParticleArea