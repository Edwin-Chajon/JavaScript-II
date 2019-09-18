// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  return cb(arr)
}
const length=(a)=>a.length;
console.log (getLength(items,length))

function last(arr, cb) {
  return arr[cb]
}
const lastItem= (a)=>items.length-1;
console.log(last(items,lastItem()))


function sumNums(x, y, cb) {
  return cb(x,y);
}
const sum = (x,y) =>x+y;
console.log(sumNums(2,5,sum))


function multiplyNums(x, y, cb) {
  return cb(x,y);
}
const multiply = (x,y) =>x*y;
console.log(multiplyNums(2,5,multiply))

function contains(item, list, cb) {
  return cb(item, list);
}


function contains(item, list, cb) {
  return cb(item, list);
}
function check(item, list){
  if(list.includes(item)){
    return true;
  } else{return false;}
}
console.log(contains("Pencil",items,check));
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
