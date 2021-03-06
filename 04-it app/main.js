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
            for (var i=0; i<courses.length; i++) {
                if(courses[i].name.toLowerCase() === options.name.toLowerCase()) {
                    console.log("This course is ready exist in course list");
                    return;
                }
            }
            options.courseID = courseCounter++;
            courses.push(options);
            
            console.log("Course" + " " + options.name + " " + "is added to the list");
        },
        deleteCourse: function (name) {
            for (var i = 0; i < courses.length; i++) {
                if (courses[i].name.toLowerCase() === name.toLowerCase()) {
                    courses.splice(i, 1);
                }
            }
            console.log("Course" + " " + name + " " + "is removed from the list");
        },
        getUsers: function () {
            return users;
        },
        addUser: function (person) {
            for(var i=0; i<users.length; i++) {
                if (users[i].firstName.toLowerCase() === person.firstName.toLowerCase() && users[i].lastName.toLowerCase() === person.lastName.toLowerCase()) {
                    console.log("This user is already exist in trainee list");
                    return;
                }
            }
            person.userID = userCounter++;
            users.push(person);
            
            console.log("User" + " " + person.firstName + " " + "is added to the traineelist")

        },
        deleteUser: function (person) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].firstName.toLowerCase() === person.firstName.toLowerCase() && users[i].lastName.toLowerCase() === person.lastName.toLowerCase()) {
                    users.splice(i, 1);
                    console.log("User" + " " + person.firstName + " " + "is removed from the traineelist")
                }

            }
        },
        addSubscription: function (courseID, userID) {
            for (var i = 0; i < courses.length; i++) {
                if (courses[i].courseID === courseID) {
                    if (courses[i].limit >= courses[i].subscribers.length + 1) {
                        for (var k = 0; k < users.length; k++) {
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
                    };

                    {

                        for (var b = 0; b < courses[i].subscribers.length; b++) {
                            if (courses[i].subscribers[b].userID === userID) {
                                courses[i].subscribers.splice(b, 1);

                                console.log("Subscription for the course" + " " + courses[i].name + " " + "is deleted");
                            }
                        }

                    };
                    for (var k = 0; k < users.length; k++) {
                        if (users[k].userID === userID) {
                            for (var t = 0; t < users[k].subscriptions.length; t++) {
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

app.addCourse({
    name: "React",
    duration: 1,
    limit: 1,
    subscribers: [],

});
app.addCourse({
    name: "gg",
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
app.addSubscription(1, 2);
app.addSubscription(1, 3);
app.addSubscription(2, 1);
app.addSubscription(2, 1);


// app.deleteSubscription(1,1);
app.deleteSubscription(1, 1);
// app.deleteSubscription(1,3);


app.addCourse({name: 'node js'});
