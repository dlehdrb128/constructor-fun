export default function obj(arr, keyArr) {
  let objectData = {};

  let ascendingArr = arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < ascendingArr.length; i++) {
    if (!objectData[keyArr[i]]) {
      objectData[keyArr[i]] = ascendingArr[i];
    }
  }

  objectData.length = ascendingArr.length;

  return objectData;
}
