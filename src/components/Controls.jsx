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
        <PowerSwitch handlePowerSwitch={this.props.handlePowerSwitch} isActive={this.props.isActive} />
        <Display display={this.props.display} />
        <VolumeControl volume={this.props.volume} handleVolume={this.props.handleVolume} />
        <BankSwitch handleBankSwitch={this.props.handleBankSwitch} isBankOne={this.props.isBankOne}/>
      </div>
    );
  }
}

export default Controls;
