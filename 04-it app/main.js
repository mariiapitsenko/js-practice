// var courses = [{
//         name: 'Native JS',
//         duration: 16,
//         limit: 4,
//         subscribers: []
//     },
//     {
//         name: 'Angular JS',
//         duration: 9,
//         limit: 3,
//         subscribers: []
//     },
//     {
//         name: 'Node JS',
//         duration: 6,
//         limit: 2,
//         subscribers: []
//     },
//     {
//         name: 'jQuery advanced',
//         duration: 6,
//         limit: 4,
//         subscribers: []
//     },
//     {
//         name: 'Unit testing',
//         duration: 2,
//         limit: 2,
//         subscribers: []
//     },
//     {
//         name: 'Performance and Optimization',
//         duration: 3,
//         limit: 2,
//         subscribers: []
//     }
// ]



// var users = [{
//         firstName: 'John',
//         lastName: 'Doe',
//         email: 'jdoe@mail.com',
//         age: 30,
//         sex: 'Male',
//         phone: 123456789,
//         id: 1
//     },
//     {
//         firstName: 'Ivan',
//         lastName: 'Ivanov',
//         email: 'ivanov@mail.com',
//         age: 25,
//         sex: 'Male',
//         phone: 555666443,
//         id: 2
//     },
//     {
//         firstName: 'Ann',
//         lastName: 'Mai',
//         email: 'amai@mail.com',
//         age: 26,
//         sex: 'Female',
//         phone: 123678999,
//         id: 3
//     }

// ]

// //created a fucntion which add a new course ( a new object to array Courses)
// function addCourse(name, duration, limit, subscribers) {
//     return courses.push({
//         name,
//         duration,
//         limit,
//         subscribers: []
//     });
// }

// addCourse("React", 20, 1);

// //need to create a function which will be deleting course from an array courses

// function deleteCourse(arr, name) {
//     for (var i = 0; i < arr.length; i++) {

//         if (arr[i].name === name) {
//             arr.splice(i, 1);
//         }
//         // else {
//         //   console.log("no")
//         // }

//     }
//     console.log("The" + " " + name + " " + "course was removed from list")
// }

// //   deleteCourse(courses, 'Node JS');
// //   deleteCourse(courses, 'React');


// //function getting all list of trainees
// function getTraineeList() {
//     return users;
// }
// console.log(getTraineeList());



// //function - getting all list of courses
// function getCourseList() {
//     return courses;

// }
// console.log(getCourseList());



// // function "adding new trainee"
// function addTrainee(firstName, lastName, email, age, sex, phone) {
//     console.log("The user" + " " + firstName + " " + lastName + " " + "was added for the Trainee list");
//     return users.push({
//         firstName,
//         lastName,
//         email,
//         age,
//         sex,
//         phone,

//     });

// }


// // addTrainee("Ann", "Foo", "hfhfhf@jjsjjs.ru", 23, "female", 55544400);


// // function addTr (options) {
// //     console.log(options.name);
// //     console.log(options.duration);
// //     courses.push(options);
// // };

// // addTr ({name: "React", duration: 20})
// //function "deleting trainee from course"


// function deleteTrainee(arr, firstName, lastName) {
//     for (var i = 0; i < arr.length; i++) {

//         if (arr[i].firstName === firstName && arr[i].lastName === lastName) {
//             arr.splice(i, 1);
//         }
//         // else {
//         //   console.log("no")
//         // }

//     }
//     console.log('User' + " " + firstName + " " + lastName + " " + "was removed from trainee list")
// }

// deleteTrainee(users, "John", "Doe");


// //function subscribe to course




// // function addSubscribers(courseName, firstName, lastName) {
// //     for (i = 0; i < courses.length; i++) {
// //         if (courses[i].name === courseName) {

// //             return courses[i].subscribers.push(firstName + " " + lastName);
// //         }
// //     }
// // }



// function addSubs(courseName, firstName, lastName) {
//     for (i = 0; i < courses.length; i++) {
//         if (courses[i].name === courseName) {

//             if (courses[i].limit >= courses[i].subscribers.length + 1) {
//                 // for (b = 0; b < courses[i].subscribers.length; b++) {
//                 //     if (subscribers[b].firstName === firstName && subscribers[b].lastName === lastName) {
//                         courses[i].subscribers.push({
//                             firstName,
//                             lastName
//                         });

//                     }else console.log("Limit of course" + " " + courseName + " " + "is exceed");
//                 }
//             } 
//         }
// //     }
// // }
// addSubs("React", "John", "Doe");
// addSubs("Native JS", "ggg", "ggg");
// addSubs("Native JS", "ggg", "kkk");
// addSubs("React", "John", "ggg");

var courses = [{
        name: 'Native JS',
        duration: 16,
        limit: 4,
        subscribers: []
    },
    {
        name: 'Angular JS',
        duration: 9,
        limit: 3,
        subscribers: []
    },
    {
        name: 'Node JS',
        duration: 6,
        limit: 1,
        subscribers: []
    },
    {
        name: 'jQuery advanced',
        duration: 6,
        limit: 4,
        subscribers: []
    },
    {
        name: 'Unit testing',
        duration: 2,
        limit: 2,
        subscribers: []
    },
    {
        name: 'Performance and Optimization',
        duration: 3,
        limit: 2,
        subscribers: []

    }
];
var users = [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@mail.com',
        age: 30,
        sex: 'Male',
        phone: 123456789,
        subscriptions: []
    },
    {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        email: 'ivanov@mail.com',
        age: 25,
        sex: 'Male',
        phone: 555666443,
        subscriptions: []
    },
    {
        firstName: 'Ann',
        lastName: 'Mai',
        email: 'amai@mail.com',
        age: 26,
        sex: 'Female',
        phone: 123678999,
        subscriptions: []
    }

]

var app = (function () {


    var courseCounter = 0;
    var courses = [];
    var users = [];
    var userCounter = 0;


    return {
        getCourses: function () {
            return courses;

        },
        addCourse: function (options) {
            courses.push(options);
            options.courseID = courseCounter++
                console.log("Course" + " " + options.name + " " + "is added to the list")

        },
        deleteCourse: function (name) {
            for (var i = 0; i < courses.length; i++) {
                if (courses[i].name === name) {
                    courses.splice(i, 1);
                }
            }
            console.log("Course" + " " + name + " " + "is removed from the list");
        },
        getUsers: function () {
            return users;
        },
        addUser: function (person) {
            users.push(person);
            person.userID = userCounter++;
            console.log("User" + " " + person.firstName + " " + "is added to the traineelist")

        },
        deleteUser: function (person) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].firstName === person.firstName && users[i].lastName === person.lastName) {
                    users.splice(i, 1);
                    console.log("User" + " " + person.firstName + " " + "is removed from the traineelist")
                }

            }
        },
        addSubscription: function (courseID, userID) {
            for (var i = 0; i < courses.length; i++) {
                if (courses[i].courseID === courseID) {
                    if (courses[i].limit >= courses[i].subscribers.length + 1) {
                        for (k = 0; k < users.length; k++) {
                            if (users[k].userID === userID) {
                                courses[i].subscribers.push(users[k]);
                                if (!users[k].subscriptions) {
                                    users[k].subscriptions = [];
                                }
                                users[k].subscriptions.push(courses[i]);

                                console.log("Subscriber" + " " + users[k].firstName + " " + users[k].lastName + " " + "has been subscribed to" + " " + courses[i].name + " " + "course")

                            }
                        }
                    } else console.log("Limit of course" + " " + courses[i].name + " " + "is exceed");
                }
            }
        },
        deleteSubscription: function (courseID, userID) {
            for (var i = 0; i < courses.length; i++) {
                if (courses[i].courseID === courseID) {
                        if (courses[i].subscribers.length === 0) {
                            console.log("There are no subscribers at course" + " " + courses[i].name);
                            return;
                        }
                        for (var b = 0; b < courses[i].subscribers.length; b++) {

                            courses[i].subscribers.splice(b, 1);
                            console.log("Subscription for the course" + " " + courses[i].name + " " + "is deleted");
                
                            // }   
                            // for (var f=0; f<users.length; f++) {
                            //     for (var j = 0; j<users[f].subscriptions.length; j++ ){
                            //     users[f].subscriptions.splice(i,1);
                            //     }
                            // }
                        }
                        for (var k = 0; k<users.length; k++){
                            
                                  for (var t=0; t<users[k].subscriptions; t++) {
                                      if (users[k].subscriptions.userID === userID){
                                      users[k].subscriptions.splice(t, 1);
                                      }
                                  }  
                          }
                    }
                    }
                   
            }
 
    }

})();



for (var i = 0; i < courses.length; i++) {
    app.addCourse(courses[i]);
}
for (var j = 0; j < users.length; j++) {
    app.addUser(users[j]);
}

//examples of addind\deleting and so on...
app.addCourse({
    name: "React",
    duration: 1,
    limit: 1,
    subscribers: [],

});


app.deleteCourse("Native JS");

app.addUser({
    firstName: "Bob",
    lastName: "Dilan",
    email: "fffs@jfjfj,ru",
    age: 23,
    sex: "male",
    phone: 333444
});


app.deleteUser({
    firstName: "John",
    lastName: "Doe"
});

app.addSubscription(1, 1);
app.deleteSubscription(1,1);


