import { Component } from "react";
import { colors } from "./FunctionalTrafficLight";

interface State {
  colors: colors[];
  activeColor: colors;
}
export class ClassTrafficLight extends Component {
  state: State = {
    colors: ["red", "green", "yellow"] as colors[],
    activeColor: "red" as colors,
  };

  changeColor = (): void => {
    const { colors, activeColor } = this.state;
    const currentIndex = colors.indexOf(activeColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    const nextColor = colors[nextIndex];
    this.setState({ activeColor: nextColor });
  };

  render(): JSX.Element {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div
            className={`circle ${
              this.state.activeColor === "red" ? "red" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.activeColor === "yellow" ? "yellow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.activeColor === "green" ? "green" : "black"
            }`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.changeColor}>
          Next State
        </button>
      </div>
    );
  }
}
