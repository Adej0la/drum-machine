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
            return(
          <Button
            pad={pad}
            isActive={this.props.isActive}
            key={pad.key}
          />);
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
  },

  {
    key: "W",
    keyCode: 87,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "E",
    keyCode: 69,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "A",
    keyCode: 65,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "S",
    keyCode: 83,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    keyCode: 68,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "Z",
    keyCode: 90,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "X",
    keyCode: 88,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "C",
    keyCode: 67,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
];
const bankOne = [
  {
    key: "Q",
    keyCode: 81,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },

  {
    key: "W",
    keyCode: 87,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    keyCode: 69,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    keyCode: 65,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    keyCode: 83,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    keyCode: 68,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    keyCode: 90,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    keyCode: 88,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    keyCode: 67,
    clip: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

export default PadGroup;
