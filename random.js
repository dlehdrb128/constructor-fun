export default function random(arr) {
  let randomArr = [];

  for (let i = 0; i < 3; i++) {
    let saveData = arr[Math.floor(Math.random() * arr.length - 1) + 1];

    if (randomArr.indexOf(saveData) === -1) {
      randomArr.push(saveData);
    } else {
      i--;
    }
  }

  return randomArr;
}
