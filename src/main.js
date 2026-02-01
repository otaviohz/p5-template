/**
 * @typedef {import("p5")} p5
 */

import p5 from "p5";

/** @param {p5} p */
const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(20);
    p.fill(255);
    p.circle(p.width / 2, p.height / 2, 100);
  };
};

new p5(sketch);

