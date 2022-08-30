// Import stylesheets
import './style.css';

// 1. Get the Smallest Element of an Array
// *****************************************

const getSmallest = (arr) => {
  let smallest = Number.POSITIVE_INFINITY;

  for (const num of arr) {
    if (num < smallest) {
      smallest = num;
    }
  }

  return smallest;
};

const array1 = [13, 7, 11, 3, 9, 15, 17];
console.log(getSmallest(array1)); //3

//Alternative
const getSmallestValue = (arr) =>
  arr.reduce((smallest, num) => Math.min(smallest, num));

console.log(getSmallestValue(array1)); //3
