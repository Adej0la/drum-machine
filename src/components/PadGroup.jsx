import { Component } from "react";
import Button from "./Button";

class PadGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let padBank = this.props.isBankOne ? bankOne : bankTwo;

    return (
      <div className="grid">
        {padBank.map((pad) => {
          return (
            <Button
              pad={pad}
              isActive={this.props.isActive}
              key={pad.key}
              displayHandler={this.props.displayHandler}
              volume={this.props.volume}
            />
          );
        })}
      </div>
    );
  }
}

const bankTwo = [
  {
    key: "Q",
    keyCode: 81,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed Hi-Hat",
  },

  {
    key: "W",
    keyCode: 87,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    key: "E",
    keyCode: 69,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat",
  },
  {
    key: "A",
    keyCode: 65,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open Hi-Hat",
  },
  {
    key: "S",
    keyCode: 83,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    key: "D",
    keyCode: 68,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    key: "Z",
    keyCode: 90,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    key: "X",
    keyCode: 88,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    key: "C",
    keyCode: 67,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
];
const bankOne = [
  {
    key: "Q",
    keyCode: 81,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },

  {
    key: "W",
    keyCode: 87,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    key: "E",
    keyCode: 69,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    key: "A",
    keyCode: 65,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    key: "S",
    keyCode: 83,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    key: "D",
    keyCode: 68,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open Hi-Hat",
  },
  {
    key: "Z",
    keyCode: 90,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick-n'-Hat",
  },
  {
    key: "X",
    keyCode: 88,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    key: "C",
    keyCode: 67,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed Hi-Hat",
  },
];

export default PadGroup;
