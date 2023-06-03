import { useState } from "react";

export type colors = "red" | "green" | "yellow";

export const FunctionalTrafficLight = (): JSX.Element => {
  const colors: colors[] = ["red", "green", "yellow"];
  const [activeColor, setActiveColor] = useState<colors>("red");

  const changeColor = () => {
    const currentIndex = colors.indexOf(activeColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    const nextColor = colors[nextIndex];
    setActiveColor(nextColor);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <div
          className={`circle ${activeColor === "red" ? "red" : "black"}`}
        ></div>
        <div
          className={`circle ${activeColor === "yellow" ? "yellow" : "black"}`}
        ></div>
        <div
          className={`circle ${activeColor === "green" ? "green" : "black"}`}
        ></div>
      </div>
      <button className="next-state-button" onClick={changeColor}>
        Next State
      </button>
    </div>
  );
};
