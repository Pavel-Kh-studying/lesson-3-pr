'use srtict';

const arr = [4, -2, 5, 19, -130, 0, 10];

function getMinAndMax() {
  let maxNum = arr[0];
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= maxNum) {
      maxNum = arr[i];
    };
    if (arr[i] <= minNum) {
      minNum = arr[i];
    };
  };
  return [maxNum, minNum];
};

console.log(getMinAndMax());
