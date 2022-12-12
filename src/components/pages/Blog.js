import React from "react";
import "../../style.css";

const boxContainer = {
  // border: "black 2px solid",
  paddingTop: "50px",
};

const box = {
  border: "blue solid 2px",
  height: "400px",
  width: "800px",
};

export default function Blog() {
  return (
    <>
      <div id="boxContainer" class="container" style={boxContainer}>
        <div class="row">
          <div id="box" class="col-4" style={box}>
            <p>box 1</p>
          </div>
          <div id="box" class="col-4" style={box}>
            <p>box 2</p>
          </div>
          <div id="box" class="col-4" style={box}>
            <p>box 3</p>
          </div>
          <div id="box" class="col-4" style={box}>
            <p>box 4</p>
          </div>
          <div id="box" class="col-4" style={box}>
            <p>box 5</p>
          </div>
          <div id="box" class="col-4" style={box}>
            <p>box 6</p>
          </div>
          <div id="box" class="col-4" style={box}>
            <p>box 7</p>
          </div>
          <div id="box" class="col-4" style={box}>
            <p>box 8</p>
          </div>
          <div id="box" class="col-4" style={box}>
            <p>box 9</p>
          </div>
        </div>
      </div>
    </>
  );
}
