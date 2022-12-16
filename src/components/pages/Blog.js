import React from "react";
import "../../style.css";

const boxContainer = {
  paddingTop: "50px",
};

const box = {
  border: "black solid 2px",
  height: "400px",
};

const boxesGap = {
  gap: "20px",
};

export default function Blog() {
  return (
    <>
      <div class="container" style={boxContainer}>
        <div id="boxes" class="row" style={boxesGap}>
          <div id="box" class="col" style={box}>
            <p>box 1</p>
          </div>
          <div id="box" class="col" style={box}>
            <p>box 2</p>
          </div>
          <div id="box" class="col" style={box}>
            <p>box 3</p>
          </div>
          <div class="w-100"></div>
          <div id="box" class="col" style={box}>
            <p>box 4</p>
          </div>
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
