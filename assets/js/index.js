'use srtict';


//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

const arr1 = [4, -2, 5, 19, -130, 0, 10];

function getMinAndMax() {
  let maxNum = arr1[0];
  let minNum = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] >= maxNum) {
      maxNum = arr1[i];
    };
    if (arr1[i] <= minNum) {
      minNum = arr1[i];
    };
  };
  return [maxNum, minNum];
};

console.log(getMinAndMax());



//Дан массив arr. Найдите среднее арифметическое его элементов. 
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const arr2 = [12, 15, 20, 25, 59, 79];

function getAverageValue() {
  let sum = 0;
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  };
  const averageValue = sum / arr2.length;
  return averageValue;
};

console.log(getAverageValue());


//=========(Math.random)==========
//Выведите на экран случайное целое число от 1 до 100.

function getRandomNum() {
  randomNum = Math.random;
  return randomNum;
};

console.log(getRandomNum());


//Заполните массив 10-ю случайными целыми числами. 

