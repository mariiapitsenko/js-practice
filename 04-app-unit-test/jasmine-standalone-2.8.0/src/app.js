var coursesApp = (function() {
  var courseCounter = 0;
  var courses = [];
  var users = [];
  var userCounter = 0;

  return {
    getCourses: function() {
      return courses;
    },
    addCourse: function(options) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].name.toLowerCase() === options.name.toLowerCase()) {
          return "This course is ready exist in course list";
        }
      }

      options.courseID = courseCounter++;

      courses.push(options);
      if (!courses[i].subscribers) {
        courses[i].subscribers = [];
      }
      return "Course" + " " + options.name + " " + "is added to the list";
    },
    deleteCourse: function(name) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].name.toLowerCase() === name.toLowerCase()) {
          courses.splice(i, 1);
        }
      }
      return "Course" + " " + name + " " + "is removed from the list";
    },
    getUsers: function() {
      return users;
    },
    addUser: function(person) {
      for (var i = 0; i < users.length; i++) {
        if (
          users[i].firstName.toLowerCase() === person.firstName.toLowerCase() &&
          users[i].lastName.toLowerCase() === person.lastName.toLowerCase()
        ) {
          return "This user is already exist in trainee list";
        }
      }
      person.userID = userCounter++;
      users.push(person);
      if (!users[i].subscriptions) {
        users[i].subscriptions = [];
      }

     return
        "User" + " " + person.firstName + " " + "is added to the traineelist"
      ;
    },
    deleteUser: function(person) {
      for (var i = 0; i < users.length; i++) {
        if (
          users[i].firstName.toLowerCase() === person.firstName.toLowerCase() &&
          users[i].lastName.toLowerCase() === person.lastName.toLowerCase()
        ) {
          users.splice(i, 1);
        }
      }
      return
        "User" +
        " " +
        person.firstName +
        " " +
        "is removed from the traineelist"
      ;
    },
    addSubscription: function(courseID, userID) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].courseID === courseID) {
          if (courses[i].limit >= courses[i].subscribers.length + 1) {
            for (var k = 0; k < users.length; k++) {
              if (users[k].userID === userID) {
                courses[i].subscribers.push(users[k]);
                users[k].subscriptions.push(courses[i]);

                return
                  "Subscriber" +
                  " " +
                  users[k].firstName +
                  " " +
                  users[k].lastName +
                  " " +
                  "has been subscribed to" +
                  " " +
                  courses[i].name +
                  " " +
                  "course"
                ;
              }
            }
          } else
            return
              "Limit of course" + " " + courses[i].name + " " + "is exceed"
            ;
        }
      }
    },
    deleteSubscription: function(courseID, userID) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].courseID === courseID) {
          if (courses[i].subscribers.length === 0) {
            return 
              "There are no subscribers at course" + " " + courses[i].name
            ;
            return;
          }

          {
            for (var b = 0; b < courses[i].subscribers.length; b++) {
              if (courses[i].subscribers[b].userID === userID) {
                courses[i].subscribers.splice(b, 1);


              }
            }
          }
          for (var k = 0; k < users.length; k++) {
            if (users[k].userID === userID) {
              for (var t = 0; t < users[k].subscriptions.length; t++) {
                users[k].subscriptions.splice(t, 1);
              }
            }
          }
        }
      }
      return 
      "Subscription for the course" +
        " " +
        courses[i].name +
        " " +
        "is deleted";
    }
  };
})();
