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
      display: "",
    };
  }

  powerOnHandler() {
    this.setState({
      isActive: !this.state.isActive,
        display: this.state.isActive ? 'On' : 'Off'
    });
  }

  soundBankHandler() {
    this.setState({
      isBankOne: !this.state.isBankOne,
    });
  }

  displayHandler(string) {
    this.setState({
      display: string,
    });
  }
  render() {
    return (
      <main id={"drum-machine"}>
        <PadGroup
          isActive={this.state.isActive}
          isBankOne={this.state.isBankOne}
          displayHandler={this.displayHandler.bind(this)}
        />
        <Controls
          handlePowerSwitch={this.powerOnHandler.bind(this)}
          handleBankSwitch={this.soundBankHandler.bind(this)}
          display={this.state.display}
        />
      </main>
    );
  }
}

export default DrumMachine;
