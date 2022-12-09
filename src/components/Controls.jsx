import { Component } from "react";
import PowerSwitch from "./PowerSwitch";
import Display from "./Display";
import VolumeControl from "./VolumeControl";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <PowerSwitch />
        <Display />
        <VolumeControl />
        {/* <BankSwitch /> */}
      </div>
    );
  }
}

export default Controls;
