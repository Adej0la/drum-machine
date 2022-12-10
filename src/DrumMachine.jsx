import { Component } from "react";
import Controls from "./components/Controls";
import PadGroup from "./components/PadGroup";
import "./style.css";

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBankOne: true,
      isActive: true,
      display: String.fromCharCode(160),
      volume: 0.5,
    };
  }

  powerOnHandler(e) {
    this.setState({
      isActive: e.target.checked,
      display: e.target.checked ? "On" : "Off",
    });
  }

  soundBankHandler(e) {
    this.setState({
      isBankOne: e.target.checked,
      display: e.target.checked ? "Kit 2 loaded" : "Kit 1 loaded",
    });
  }

  displayHandler(string) {
    this.setState({
      display: string,
    });
  }

  volumeHandler(e) {
    this.setState({
      volume: e.target.value,
      display: 'Volume: ' + Math.floor(e.target.value * 100),
    });
  }
  render() {
    return (
      <main id={"drum-machine"}>
        <PadGroup
          isActive={this.state.isActive}
          isBankOne={this.state.isBankOne}
          displayHandler={this.displayHandler.bind(this)}
          volume={this.state.volume}
        />
        <Controls
          handlePowerSwitch={this.powerOnHandler.bind(this)}
          handleBankSwitch={this.soundBankHandler.bind(this)}
          handleVolume={this.volumeHandler.bind(this)}
          display={this.state.display}
          volume={this.state.volume}
          isActive={this.state.isActive}
          isBankOne={this.state.isBankOne}
        />
      </main>
    );
  }
}

export default DrumMachine;
