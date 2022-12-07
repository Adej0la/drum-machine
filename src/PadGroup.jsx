import { Component } from "react";

class PadGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let soundBank = this.props.isBankOne ? soundBankOne : soundBankTwo;

    return (
      <div className="grid">
        {drumPads.map((drumPad, index) => {
          return (
            <button className="drum-pad" key={drumPad}>
              <audio src={soundBank[index]} className="clip" id={drumPad}>
                {drumPad}
              </audio>
            </button>
          );
        })}
      </div>
    );
  }
}

const soundBankOne = [
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
];

const soundBankTwo = [
  "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
];

const drumPads = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

export default PadGroup;
