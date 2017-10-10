let person = {
  firstName: "Ivan",
  lastName: "Petrov",
  birthDate: "2/12/1990",
  majorSkill: "qa"
};
// 2.
//without function
var fullName = 0;
console.log(
  person.firstName +
  " " +
  person.lastName +
  " " +
  person.birthDate +
  " " +
  person.majorSkill
);
//with function

function getFullName() {
  return person.firstName + " " + person.lastName;
}
console.log(getFullName());

//3. Write a function that logs a weekday of your birthday

function getWeekDay(date) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return days[date.getDay()];
}

var date = new Date("10/2/2017"); // 02 October 2017
console.log(getWeekDay(date)); // Monday

// 4. simple calculator
var actions = {
  addition: function (x, y) {
    return x + y;
  },
  subtracting: function (x, y) {
    return x - y;
  },
  multiplication: function (x, y) {
    return x * y;
  },
  division: function (x, y) {
    return x / y;
  },
  pow: function (x, y) {
    return Math.pow(x, y);
  },

  factorial: function (x) {
    if (x == 0) {
      return 1;
    } else if (x < 0) {
      return "Enter a positive number";
    } else {
      return x * this.factorial(x - 1);
    }
  }
};

function simpleCalculation(action, operand1, operand2) {
  // debugger;
  if (arguments.length === 0) {
    console.error('No params');
    return;
  }

  if (typeof operand1 !== "number") {
    return "Its error" + " " + operand1 + " " + "is a" + " " + typeof operand1;
  }
  if (typeof operand2 !== "number") {
    if (action !== "factorial") {
      return (
        "Its error" + " " + operand2 + " " + "is a" + " " + typeof operand2
      );
    }
  }

  if (typeof actions[action] === "function") {
    return actions[action](operand1, operand2);
  } else {
    console.log("Not possible action");
  }
}




var f = simpleCalculation("addition", 2, 4);
console.log(f);
var g = simpleCalculation("division", 10, 5);
console.log(g);
var j = simpleCalculation("division", 2, "hghgh");
console.log(j);
var k = simpleCalculation("def", 10, 4);
console.log(k);
var powCalc = simpleCalculation("pow", 12, 2);
console.log(powCalc);
var factCalc = simpleCalculation("factorial", 0);
console.log(factCalc);


console.log('Set of arguments');
var arrCalc = [
  ["addition", 10, 5],
  ["pow", 2, 2],
  [],
  ["factorial", 5],
  ["pow", 6],
  ["factorial", -5]
];

for (var i = 0; i < arrCalc.length; i++) {
  console.log(arrCalc[i][0], simpleCalculation.apply(window, arrCalc[i]));
}

//5. Shopping list
var shoppingList = {
  apple: 1,
  orange: 3,
  tomato: 10,
  butter: 1,
  bread: 2
};


var warehouse = {
  apple: 10,
  orange: 2,
  tomato: 25,
  bread: 4,
  banana: 3
};


var cart = [];
// console.log(cart);
console.log('--------------');
addToCart(shoppingList);



function addToCart(list) {
  for (var prop in list) {
    if (warehouse.hasOwnProperty(prop)) {
      if (warehouse[prop] > 0) {
        if (warehouse[prop] < list[prop]) {
          list[prop] = list[prop] - warehouse[prop];
          warehouse[prop] = 0;
        } else { 
          warehouse[prop] = warehouse[prop] - list[prop];
          list[prop] = 0;
          }
        
      }   
    }else {
      console.log('Warehouse has no', prop);
    }
  }
  if(isShoppingDone(list)){
    console.log('Shopping done');
  } else {
    console.log('Shopping is not done', list);
   //просто выводит массив оставшихся продуктов из списка
   for (var prop in list ) {
     if (list[prop] > 0) {
     console.log ("Left to buy:" + prop + " " + list[prop]);
     }
   }
   for (var prop in warehouse) {
    console.log ("Left items in store:" + " " + prop + " " + warehouse[prop]);
}
    }

   };


function isShoppingDone (list) {
  for (var prop in list) {
    if (list[prop] > 0) {
      return false
      
    }
  } 
  return true
}