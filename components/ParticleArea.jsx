import React from "react";

class ParticleArea extends React.Component {
    ////////////////////////////////////////////////////////////////////////////
    // Public functions
    ////////////////////////////////////////////////////////////////////////////

    createExplosion(x, y, heavyGravity = false) {
        // Transform coordinate system
        x = this.refs.container.clientWidth / 2 + x + 20;
        y = this.refs.container.clientHeight / 2 + y + 20;
        _createExplosion(x, y, heavyGravity);
    }

    ////////////////////////////////////////////////////////////////////////////
    // Component lifecycle
    ////////////////////////////////////////////////////////////////////////////

    componentDidMount() {
        // Only include client side
        initializeProton(this.refs.container, this.refs.particles);

        this._enableEmitter();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.effect === this.props.effect) return;

        switch (prevProps.effect) {
            case "bubbles":
                disableEmitter(BUBBLES);
                break;
            case "fireworks":
                disableEmitter(FIREWORKS);
                break;
            case "branding":
                disableEmitter(BRANDING);
                break;

            default:
                break;
        }

        this._enableEmitter();
    }

    componentWillUnmount() {
        destroy(this.refs.particles);
    }

    ////////////////////////////////////////////////////////////////////////////
    // render
    ////////////////////////////////////////////////////////////////////////////

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
                <canvas ref="particles" />
            </div>
        );
    }

    ////////////////////////////////////////////////////////////////////////////
    // Private functions
    ////////////////////////////////////////////////////////////////////////////

    _enableEmitter() {
        switch (this.props.effect) {
            case "bubbles":
                enableEmitter(BUBBLES);
                break;
            case "fireworks":
                enableEmitter(FIREWORKS);
                break;
            case "branding":
                enableEmitter(BRANDING);
                break;

            default:
                break;
        }
    }
}

const BUBBLES = "BUBBLES";
const FIREWORKS = "FIREWORKS";
const BRANDING = "BRANDING";

var _allEmitters = {};
var _proton = null;
const bubbleColors = ["#529B88", "#CDD180", "#FFFA32", "#FB6255", "#FB4A53", "#FF4E50", "#F9D423"];

var initializeProton = null;
var enableEmitter = null;
var disableEmitter = null;
var _createExplosion = null;
var _brandingImageData = null;
var _brandingImageRect = null;

if (process.browser) {
    class ProtonTag extends Proton.Initialize {
        constructor(tag) {
            super();

            this.tag = tag;
        }

        initialize(particle) {
            particle.tag = this.tag;
        }
    }

    class ProtonLifeAlpha extends Proton.Behaviour {
        constructor() {
            super();
        }

        applyBehaviour(particle, time, index) {
            this.calculate(particle, time, index);

            particle.alpha = particle.energy;
            if (particle.alpha < 0.001) particle.alpha = 0;
        }
    }

    initializeProton = function(container, canvas3d) {
        canvas3d.width = container.clientWidth;
        canvas3d.height = container.clientHeight;

        loadBrandingImage(canvas3d);

        createProtonRenderer(canvas3d);

        tick();
    };

    function loadBrandingImage(canvas3d) {
        var brandingImage = new Image();
        brandingImage.onload = e => {
            // Buffer to render the logo mask on
            const canvas2d = document.createElement("canvas");
            canvas2d.width = 1200;
            canvas2d.height = 500;
            let ctx = canvas2d.getContext("2d");

            const rect = new Proton.Rectangle(
                (canvas2d.width - e.target.width) / 2,
                (canvas2d.height - e.target.height) / 2,
                e.target.width,
                e.target.height
            );
            ctx.drawImage(e.target, rect.x, rect.y);
            const brandingImageData = ctx.getImageData(rect.x, rect.y, rect.width, rect.height);

            _registerEmitter(BRANDING, createBrandingEmitter(canvas3d, brandingImageData, rect));
        };

        brandingImage.src = "/static/image/logo-mask.png";
    }

    function destroy() {
        _proton.destroy();
    }

    function createBrandingEmitter(canvas3d, brandingImageData, rect) {
        let emitter = new Proton.Emitter();

        // Emission rate
        emitter.rate = new Proton.Rate(new Proton.Span(11, 15), new Proton.Span(0.04));

        // initializers
        emitter.addInitialize(new Proton.Position(new Proton.PointZone(0, 0)));
        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.Radius(3, 6));
        emitter.addInitialize(new Proton.Life(2));
        emitter.addInitialize(
            new Proton.P(
                new Proton.ImageZone(
                    brandingImageData,
                    canvas3d.width / 2 - rect.width / 2,
                    canvas3d.height / 2 - rect.height / 1.5
                )
            )
        );

        // behaviors
        emitter.addBehaviour({
            initialize: particle => {
                particle.oldRadius = particle.radius;
                particle.scale = 0;
            },
            applyBehaviour: particle => {
                if (particle.energy >= 2 / 3) {
                    particle.scale = (1 - particle.energy) * 3;
                } else if (particle.energy <= 1 / 3) {
                    particle.scale = particle.energy * 3;
                }
                particle.radius = particle.oldRadius * particle.scale;
                if (particle.scale > 3 || particle.oldRadius > 6) {
                    debugger;
                }
            }
        });
        emitter.addBehaviour(new Proton.RandomDrift(2, 2, 0.2));
        emitter.addBehaviour(new Proton.Color(["#00aeff", "#0044cc", "#1266aa", "#0022ff"]));
        const gravity = new Proton.Gravity(0);
        emitter.addBehaviour(gravity);

        return {
            emitter: emitter,
            onEnable: proton => {
                gravity.reset(0);
            },
            onDisable: proton => {
                gravity.reset(1.5);
            }
        };
    }

    function createBubbleEmitter(width, height) {
        let emitter = new Proton.Emitter();
        emitter.rate = new Proton.Rate(new Proton.Span(2, 8), new Proton.Span(0.05, 0.2));

        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.Radius(20, 200));
        emitter.addInitialize(new Proton.Life(2, 4));
        emitter.addInitialize(new Proton.Position(new Proton.RectZone(0, 0, width, height)));
        emitter.addInitialize(new Proton.Body(["/static/image/logo.png"], 128));

        emitter.addBehaviour(new Proton.Alpha(0.2, 0.8, Infinity, Proton.easeOutCubic));
        emitter.addBehaviour(new Proton.Scale(1, 0, Infinity, Proton.easeOutCubic));
        emitter.addBehaviour(new Proton.Rotate(0, new Proton.Span(-4, 4), "to", Infinity, Proton.easeOutCubic));
        emitter.addBehaviour(new Proton.Color(bubbleColors, "random"));

        return {
            emitter: emitter
        };
    }

    function createFireworksExplosionEmitter(x, y, particleCount, particleEffect) {
        let emitter = new Proton.Emitter();
        emitter.rate = new Proton.Rate(particleCount, 1);
        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.Radius(3, 7));
        emitter.addInitialize(new Proton.Life(1, 2));
        const direction = particleEffect === "heavy" ? new Proton.Span(130, 220) : new Proton.Span(0, 360);
        emitter.addInitialize(new Proton.V(new Proton.Span(5, 8), direction, "polar"));

        emitter.addBehaviour(new Proton.RandomDrift(10, 10, 0.05));
        emitter.addBehaviour(new ProtonLifeAlpha());
        emitter.addBehaviour(new Proton.Gravity(5));
        var color = Math.random() > 0.3 ? Proton.MathUtils.randomColor() : "random";
        emitter.addBehaviour(new Proton.Color(color));

        emitter.p.x = x;
        emitter.p.y = y;
        emitter.emit("once", 5);

        return emitter;
    }

    function onParticleDeadMakeFireworks(particle) {
        if (particle.tag === "firework") {
            _proton.addEmitter(createFireworksExplosionEmitter(particle.p.x, particle.p.y, new Proton.Span(150, 200)));
        }
    }

    function createFireworksEmitter(width, height) {
        let emitter = new Proton.Emitter();
        emitter.rate = new Proton.Rate(new Proton.Span(1, 3), 0.8);

        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.Radius(3, 7));
        emitter.addInitialize(new Proton.P(new Proton.LineZone(10, height, width - 10, height)));
        emitter.addInitialize(new Proton.Life(0.75, 1.2));
        emitter.addInitialize(new Proton.V(new Proton.Span(4, 15), new Proton.Span(2, 5, true), "polar"));
        emitter.addInitialize(new ProtonTag("firework"));

        emitter.addBehaviour(new Proton.Gravity(1));
        emitter.addBehaviour(new Proton.Color("#ff0000", "random"));

        return {
            emitter: emitter,
            onEnable: proton => {
                proton.addEventListener(Proton.PARTICLE_DEAD, onParticleDeadMakeFireworks);
            },
            onDisable: proton => {
                proton.removeEventListener(Proton.PARTICLE_DEAD, onParticleDeadMakeFireworks);
            }
        };
    }

    function createProtonRenderer(canvas) {
        _proton = new Proton();

        _registerEmitter(BUBBLES, createBubbleEmitter(canvas.width, canvas.height));
        _registerEmitter(FIREWORKS, createFireworksEmitter(canvas.width, canvas.height));

        let renderer = new Proton.WebGLRenderer(canvas);
        renderer.onProtonUpdate = function() {
            this.gl.clearColor(0, 0, 0, 0.2);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        };
        _proton.addRenderer(renderer);
    }

    function _registerEmitter(name, emitter) {
        _allEmitters[name] = emitter;
        _proton.addEmitter(emitter.emitter);
    }

    enableEmitter = function(name) {
        const emitter = _allEmitters[name];

        if (emitter.onEnable) emitter.onEnable(_proton);

        emitter.emitter.emit();
        // _proton.addEmitter(emitter.emitter);
    };

    disableEmitter = function(name) {
        const emitter = _allEmitters[name];
        emitter.emitter.stop();
        // _proton.removeEmitter(emitter.emitter)

        if (emitter.onDisable) emitter.onDisable(_proton);
    };

    _createExplosion = function(x, y, particleEffect) {
        console.log("Create " + particleEffect + " explosion at " + x + "/" + y);
        _proton.addEmitter(createFireworksExplosionEmitter(x, y, new Proton.Span(30, 40), particleEffect));
    };

    function tick() {
        _proton.update();
        requestAnimationFrame(tick);
    }
}

export default ParticleArea;
