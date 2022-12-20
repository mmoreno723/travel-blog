import React from "react";
import "../../style.css";

const boxContainer = {
  paddingTop: "50px",
};

const box = {
  border: "black solid 2px",
  height: "450px",
};

const boxesGap = {
  gap: "55px",
};

export default function Blog() {
  return (
    <>
      <div class="container" style={boxContainer}>
        <div id="boxes" class="row" style={boxesGap}>
          <div id="box" class="col" style={box}>
            <img
              id="boxImage"
              src="empire-state-building.png"
              alt="empire-state-building"
            />
          </div>
          <div id="box" class="col" style={box}>
            <img
              id="boxImage"
              src="manhattan-bridge.jpeg"
              alt="manhattan-bridge"
            />
          </div>
          <div id="box" class="col" style={box}>
            <img id="boxImage" src="brooklyn.jpg" alt="brooklyn" />
          </div>
          <div class="w-100"></div>
          <div id="box" class="col" style={box}></div>
          <div id="box" class="col" style={box}>
            <p>box 5</p>
          </div>
          <div id="box" class="col" style={box}>
            <p>box 6</p>
          </div>
          <div class="w-100"></div>
          <div id="box" class="col" style={box}>
            <p>box 7</p>
          </div>
          <div id="box" class="col" style={box}>
            <p>box 8</p>
          </div>
          <div id="box" class="col" style={box}>
            <p>box 9</p>
          </div>
        </div>
      </div>
    </>
  );
}
