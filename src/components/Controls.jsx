import { Component } from "react";
import PowerSwitch from "./PowerSwitch";
import Display from "./Display";
import VolumeControl from "./VolumeControl";
import BankSwitch from "./BankSwitch";

class Controls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <PowerSwitch handlePowerSwitch={this.props.handlePowerSwitch} />
        <Display display={this.props.display} />
        <VolumeControl />
        <BankSwitch handleBankSwitch={this.props.handleBankSwitch} />
      </div>
    );
  }
}

export default Controls;
