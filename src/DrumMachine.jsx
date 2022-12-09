import { Component } from "react";
import Controls from "./components/Controls";
import PadGroup from "./components/PadGroup";
import "./style.css";

class DrumMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <main id={"drum-machine"}>
        <PadGroup />
        <Controls />
      </main>
    );
  }
}

export default DrumMachine;
