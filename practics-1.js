import random from "./random.js";
import average from "./average.js";
import obj from "./obj.js";

let Number = Array(20)
  .fill()
  .map((_, i) => i + 1);

let randomValue = random(Number); // a
// console.log(randomValue);
average(randomValue); // Question 1;

let objectData = obj(randomValue, ["first", "second", "third"]);
