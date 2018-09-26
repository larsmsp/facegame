import React from "react";
import css from "styled-jsx/css";

const CSS = css`    
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width:100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      text-align: center;
      color: white;
    }

    .modal-main {
      position:fixed;
      background: white;
      width: 80%;
      height: auto;
      top:50%;
      left:50%;
      transform: translate(-50%,-50%);
    }

    .display-block {
      display: block;
    }

    .display-none {
      display: none;
    }
    
    .avatar {
        width: 16vh;
        height: 16vh;
    }
`;

class Winner extends React.Component {
  ////////////////////////////////////////////////////////////////////////////
  // Lifecycle
  ////////////////////////////////////////////////////////////////////////////

  componentWillMount() {
    // this._updateScoreboard();
  }

  ////////////////////////////////////////////////////////////////////////////
  // Rendering
  ////////////////////////////////////////////////////////////////////////////

  render() {
    return (
        <div className={this.props.winner ? 'modal display-block' : 'modal display-none'}>
          <style jsx>{CSS}</style>
          <h2>Congratulations!</h2>
          {this.props.winner ? (
              <div>
                <img className="avatar" src={this.props.winner.playerImageUrl} />
                <h3>Level: {" " + this.props.winner.levelNo}</h3>
                <h3>Points: {this.props.winner.points + " "}</h3>
              </div>
          ) : null}
          {this.props.onDeleteHighscore ? (
              <button onClick={() => {
                        this.props.onDeleteHighscore(this.props.winner.id);
                      }}>
                Continue
              </button>
          ) : null}
        </div>
    );
  }
}

export default Winner;
