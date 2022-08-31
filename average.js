export default function average(arr) {
  let add = arr.reduce((acc, el) => {
    return acc + el;
  }, 0);
  let average = add / arr.length;

  if (average >= 10) {
    console.log("over");
  } else if (average < 10) {
    console.log("under");
  }

  return add;
}
