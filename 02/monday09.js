//1. Write a function that takes two arguments (number) and returns the result of dividing.
console.log( "------ 1 ------")

function divide(a, b) {
  return a / b;
}
console.log(divide(10,2));
//2. Write a function that takes a single argument (a string) and returns the string reversed.
console.log( "------ 2 ------")

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
//3. Write a function that takes an array of numbers and returns the minimum value
console.log( "------ 3 ------")

function findMinValue(values) {
  return Math.min.apply(Math, values);
}
console.log(findMinValue([-1,23,4]));

//4. Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
console.log( "------ 4 ------")

function findDistinctValues(values) {
    return values.filter(function(a, b){
        return values.indexOf(a) === b
    })
}
console.log(findDistinctValues([1,2,2,3,4, 6,6,7]));


//5. Write a function that logs the numbers from 1 to 100 to the console.
//- For multiples of three print "Fizz" instead of the number.
//- For multiples of five print "Buzz".
//- For numbers which are multiples of both three and five print "FizzBuzz".
console.log( "------ 5 ------")


function doFizzBuzz() {
    for (var i = 1; i<=100; i++) {
        if ((i % 3 == 0) && (i%5 ==0)) {
            console.log( "FizzBuzz");
        } else if ( i % 3 == 0) {
            console.log ("Fizz");
        } else if (i%5 == 0) {
            console.log("Buzz");
        }
        else console.log(i);
    }
    return true;
}
console.log(doFizzBuzz());

//6. You have a master array of strings, where each element is a fruit name.
//You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
//For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
//Write the function that will remove the values contained in fruitsToRemove from the array fruits.
console.log( "------ 6 ------")
function removeFruits (fruits,fruitsToRemove) {
    var
      newFruits = [],
      fruitsToRemoveHash = {}
    ;
    for (var fruitNo = fruitsToRemove.length - 1; fruitNo >= 0; fruitNo--) {
      fruitsToRemoveHash [fruitsToRemove [fruitNo]] = 1;
    }
    for (var fruitNo = -1; ++fruitNo < fruits.length;) {
      var fruit = fruits [fruitNo];
      if (!fruitsToRemoveHash [fruit]) newFruits.push (fruit);
    }
    return newFruits;
  }
console.log(removeFruits(["orange", "pineapple", "banana"], ["pineapple", "apple"]));


// 7. Write a function to push either a simple value or an array of values onto a specified array.
// For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
// If toPush is a simple value, it should be pushed onto array as an element.
// If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
console.log( "------ 7 ------")


function pushOntoArray(array, toPush) {
  if (typeof toPush === "object" && toPush instanceof Array) {
    array = array.concat(toPush);
  } else {
    array.push(toPush);
  }return array;
} 


console.log(pushOntoArray([1], [2,6,10]));
  
//doesnt work. return only the length of arrays....

//8. Given a string, sourceStr, write some code that will split this string using comma as your delimiter, 
//and producing an empty array if the string is empty.
console.log( "------ 8 ------")
function splitListStrUsingComma(sourceStr) {
    newStr = [];
    if ((sourceStr !== "") && (sourceStr !== null) && (sourceStr !== undefined)) {
        newStr = sourceStr.split(" ");
        return newStr;
    }
    else {
        return newStr;
    }
}
console.log(splitListStrUsingComma("The split method is used to split a string into an array of substrings and returns a new array"));
//9. Write a function that will take any number of arguments and return their sum
console.log( "------ 9 ------")

function sum() {
    var sum = 0;
    for (k = 0; k< arguments.length; k++) {
        sum = sum + arguments[k]
    }
    return sum;
}

 console.log(sum(1,10,45));


//10. Write a function that will return true if a specified string consists of only whitespace.
console.log( "------ 10 ------")
function isOnlyWhitespace(sourceStr) {
    if (sourceStr.indexOf(" ") >=0) {
        return true;
    } 
    else {
        return false;
    }
}
console.log(isOnlyWhitespace("h"));
console.log(isOnlyWhitespace(" "));