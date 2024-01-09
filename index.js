//ARRAYS
//Arrays are used to store multiple values in a single variable.
//An array is a special variable, which can hold more than one value at a time.
//If you have a list of items (a list of NUMBERS, for example), storing the cars in single variables could look like this:
//let car1 = "Saab";
//let car2 = "Volvo";
//let car3 = "BMW";
//However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?
//The solution is an array!
//An array can hold many values under a single name, and you can access the values by referring to an index number.
//You access an array element by referring to the index number.

let arr = [1, 2, 4, 5, 6, 7];

console.log(arr);
console.log(arr[1]);
console.log(typeof arr);
//Javascript arrays are objects
console.log(Array.isArray(arr));
//join in arrays
console.log(arr.join(" and "));
//pop in array
console.log(arr.pop(3));
console.log(arr);
//delete in array
delete arr[0];
console.log(arr);

//concat in array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));

//sort in array
let arr3 = [1, 5, 3, 4, 2, 6];
console.log(arr3.sort());

//reverse in array
console.log(arr3.reverse());

//for loop in array
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

//for each loop in array
arr3.forEach((element) => {
  console.log(element);
});

//map in arrays
let arr4 = arr3.map((element) => {
  return element * 2;
});
console.log(arr4);

//filter in arrays
let arr5 = arr3.filter((element) => {
  return element > 3;
});
console.log(arr5);

//reduce in arrays
//Factorial can also be calculated using reduce
let arr6 = arr3.reduce((accumulator, element) => {
  return accumulator * element;
});
console.log(arr6);

//find in arrays
let arr7 = arr3.find((element) => {
  return element > 3;
});
console.log(arr7);
