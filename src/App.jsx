import { Component } from "react";
import Controls from "./Controls";
import PadGroup from "./PadGroup";
import "./App.css";

class App extends Component {
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

export default App;
