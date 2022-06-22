import React from 'react';
import './App.css';


const sounds = {
  Q: {
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    name: "Heater-1"
  },
  W: {
    link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    name: "Heater-2"
  },
  E: {
    link: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    name: "Chord 1"
  },
  A: {
    link: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    name: "RP4 KICK 1"
  },
  S: {
    link: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    name: "Bld H1"
  },
  D: {
    link: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    name: "Side Stick 1"
  },
  Z: {
    link: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    name: "Brk Snr"
  },
  X: {
    link: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    name: "Give Us A Light"
  },
  C: {
    link: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    name: "Cev H2"
  }
};
function DrumMachine() {
  return (
    <div>
      <h1 id="title">
        Drum Machine
        <i className="fa-solid fa-drum"></i>
      </h1>
    </div>
  );
};

function playAudio(id) {
  const linkForThatBeat = sounds[id]["link"];
  const nameOfTheBeat = document.getElementById("name-of-beat");

  nameOfTheBeat.innerText = sounds[id]["name"];
  const audio = new Audio(linkForThatBeat);
  audio.play();
};

class Drumpad extends React.Component{
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress(e) {
    if (e.key === "q") {
      playAudio("Q");
    };
    if (e.key === "w") {
      playAudio("W");
    };
    if (e.key === "e") {
      playAudio("E");
    };
    if (e.key === "a") {
      playAudio("A");
    };
    if (e.key === "s") {
      playAudio("S");
    }
    if (e.key === "d") {
      playAudio("D");
    };
    if (e.key === "z") {
      playAudio("Z");
    };
    if (e.key === "x") {
      playAudio("X");
    };
    if (e.key === "c") {
      playAudio("C");
    };
  };

  render() {
    return (
      <div>
        <DrumMachine />
        <div id="display">
          <div id="name-of-beat">Click to play the beat</div>
          <div className="drum-pad">
            <button id="Q" onClick={() => playAudio("Q")}>
              Q<audio id="Q" className="clip" src={sounds["Q"]["link"]}></audio>
            </button>
            <button id="W" onClick={() => playAudio("W")}>
              W<audio id="W" className="clip" src={sounds["W"]["link"]}></audio>
            </button>
            <button id="E" onClick={() => playAudio("E")}>
              E<audio id="E" className="clip" src={sounds["E"]["link"]}></audio>
            </button>
            <button id="A" onClick={() => playAudio("A")}>
              A<audio id="A" className="clip" src={sounds["A"]["link"]}></audio>
            </button>
            <button id="S" onClick={() => playAudio("S")}>
              S<audio id="S" className="clip" src={sounds["S"]["link"]}></audio>
            </button>
            <button id="D" onClick={() => playAudio("D")}>
              D<audio id="D" className="clip" src={sounds["D"]["link"]}></audio>
            </button>
            <button id="Z" onClick={() => playAudio("Z")}>
              Z<audio id="Z" className="clip" src={sounds["Z"]["link"]}></audio>
            </button>
            <button id="X" onClick={() => playAudio("X")}>
              X<audio id="X" className="clip" src={sounds["X"]["link"]}></audio>
            </button>
            <button id="C" onClick={() => playAudio("C")}>
              C<audio id="C" className="clip" src={sounds["C"]["link"]}></audio>
            </button>
          </div>
        </div>
      </div>
    );
  };
};
export default Drumpad;
