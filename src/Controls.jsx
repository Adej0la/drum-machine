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
      <>
        <PowerSwitch />
        <Display />
        <VolumeControl />
        {/* <BankSwitch /> */}
      </>
    );
  }
}

export default Controls;
