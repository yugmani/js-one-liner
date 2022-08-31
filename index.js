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

// 2. Get the Largest Element of an Array
// ***************************************

const getLargest = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;

  for (const num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
};

console.log(getLargest(array1)); // 17

//Alternative
const getLargestValue = (arr) =>
  arr.reduce((largest, num) => Math.max(largest, num));

console.log(getLargestValue(array1)); //17

// 3. Shuffle an Array
// **************************************

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

const array2 = [1, 2, 3, 4, 5];
console.log(shuffleArray(array2));
// [3, 2, 5, 4, 1]

//Alternative
const shuffleArrayBySort = (arr) => arr.sort(() => Math.random() - 0.5);

console.log(shuffleArrayBySort(array2));
// [3, 2, 5, 4, 1]

// 4. Group an Array By an Object Property
const groupByProperty = (arr, groupFn) => {
  const grouped = {};

  for (const obj of arr) {
    const groupName = groupFn(obj);

    if (!grouped[groupName]) {
      grouped[groupName] = [];
    }

    grouped[groupName].push(obj);
  }

  return grouped;
};

const people = [
  { name: 'Matt' },
  { name: 'Sam' },
  { name: 'John' },
  { name: 'Mac' },
];

const utility = (person) => person.name.length;

const groupByLength = groupByProperty(people, utility);

console.log(groupByLength);
//{3: Array[2], 4: Array[2]}
/*
{
  '3': [ { name: 'Sam' }, { name: 'Mac' } ],
  '4': [ { name: 'Matt' }, { name: 'John' } ]
}
 */

//Alternative

const groupBy = (arr, groupFn) => {
  return arr.reduce(
    (grouped, obj) => ({
      ...grouped,
      [groupFn(obj)]: [...(grouped[groupFn(obj)] || []), obj],
    }),
    {}
  );
};

console.log(groupBy(people, (person) => person.name.length));
// {3: Array[2], 4: Array[2]}

//Group by Age
const users = [
  { name: 'Matt', age: 63 },
  { name: 'Sam', age: 29 },
  { name: 'John', age: 54 },
  { name: 'Mac', age: 17 },
];

const groupByAge = (arr, groupFn) => {
  const grouped = {};
  let groupName = '';

  for (const obj of arr) {
    let name = groupFn(obj);
    if (name) {
      groupName = 'Old';
    } else {
      groupName = 'Young';
    }

    if (!grouped[groupName]) {
      grouped[groupName] = [];
    }

    grouped[groupName].push(obj);
  }

  return grouped;
};

const ageBy = (boy) => boy.age > 50;

console.log(groupByAge(users, ageBy));
//{Old: Array[2], Young: Array[2]}
{
  Old: [
    { name: 'Matt', age: 63 },
    { name: 'John', age: 54 },
  ];
  Young: [
    { name: 'Sam', age: 29 },
    { name: 'Mac', age: 17 },
  ];
}
