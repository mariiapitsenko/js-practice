describe("CoursesApp is defined", function() {
  it("should be defined", function() {
    expect(coursesApp).toBeDefined();
  });
});
describe("Get courses", function() {
  it("method getCourses should be defined", function() {
    expect(coursesApp.getCourses).toBeDefined();
  });
  it("courses should be empty", function() {
    expect(coursesApp.getCourses().length).toEqual(0);
  });
});

describe("Add course", function() {
  it("method addCourses should be defined", function() {
    expect(coursesApp.addCourse).toBeDefined();
  });
  it("addCourse 'javascript'", function() {
    coursesApp.addCourse({ name: "javascript", limit: "10" });
    expect(coursesApp.getCourses().length).toEqual(1);
    expect(coursesApp.getCourses()[0].name).toEqual("javascript");
  });
  it("addCourse 'javascript' - already exists ", function() {
    expect(coursesApp.addCourse({ name: "javascript" })).toEqual(
      "This course is ready exist in course list"
    );
    expect(coursesApp.getCourses().length).toEqual(1);
    expect(coursesApp.getCourses()[0].name).toEqual("javascript");
  });
});

describe("Delete course", function() {
  it("method deleteCourse should be defined", function() {
    expect(coursesApp.deleteCourse).toBeDefined();
  });
  it("delete course 'javascript'", function() {
    // coursesApp.addCourse({name: 'javascript'});
    coursesApp.deleteCourse("javascript");
    expect(coursesApp.getCourses().length).toEqual(0);
  });
  it("delete course 'javascript' is removed from the list", function() {
    // coursesApp.addCourse({name: 'javascript'});
    coursesApp.deleteCourse("javascript");
    expect(coursesApp.deleteCourse("javascript")).toEqual(
      "Course javascript is removed from the list"
    );
  });
});
describe("Get users", function() {
  it("method getUsers should be defined", function() {
    expect(coursesApp.getUsers).toBeDefined();
  });
  it("users list should be empty", function() {
    expect(coursesApp.getUsers().length).toEqual(0);
  });
});
describe("Add user", function() {
  it("method addUser should be defined", function() {
    expect(coursesApp.addUser).toBeDefined();
  });
  it("add user 'Jack Bob", function() {
    coursesApp.addUser({ firstName: "Jack", lastName: "Bob" });
    expect(coursesApp.getUsers().length).toEqual(1);
    expect(coursesApp.getUsers()[0].firstName).toEqual("Jack");
    expect(coursesApp.getUsers()[0].lastName).toEqual("Bob");
  });
  it("method addUser 'Jack' - is already exists", function() {
    expect(coursesApp.addUser({ firstName: "Jack", lastName: "Bob" })).toEqual(
      "This user is already exist in trainee list"
    );
    expect(coursesApp.getUsers().length).toEqual(1);
    expect(coursesApp.getUsers()[0].firstName).toEqual("Jack");
  });
});

describe("Delete user", function() {
  it("method deleteUser should be defined", function() {
    expect(coursesApp.deleteUser).toBeDefined();
  });
  it("delete user 'Jack Bob'", function() {
    coursesApp.deleteUser({ firstName: "Jack", lastName: "Bob" });
    expect(coursesApp.getUsers().length).toEqual(0);
  });
  it("delete user 'Jack' -  is removed from the list", function() {
    coursesApp.deleteUser({ firstName: "Jack", lastName: "Bob" });
    expect(
      coursesApp.deleteUser({ firstName: "Jack", lastName: "Bob" })
    ).toEqual("User Jack is removed from the traineelist");
  });
});
describe("Subscribe to the course", function() {
  it("method addSubscription should be defined", function() {
    expect(coursesApp.addSubscription).toBeDefined();
  });
  it("method addSubscription add subscribers to the course", function() {
    coursesApp.addCourse({ name: "javascript", limit: "10" });
    coursesApp.addUser({ firstName: "Jack", lastName: "Bob" });
    coursesApp.addSubscription(1, 1);
    expect(coursesApp.getCourses()[0].subscribers.length).toEqual(1);
  });
  it("method addSubscription add courses to the user's subscriptions", function() {
    expect(coursesApp.getUsers()[0].subscriptions.length).toEqual(1);
  });
});
describe("Unsubscribe from the course", function() {
  it("method deleteSubscription should be defined", function() {
    expect(coursesApp.deleteSubscription).toBeDefined();
  });
    it("method deleteSubscription should delete user from subscribers", function(){
     coursesApp.deleteSubscription(1,1);
     expect(coursesApp.getCourses()[0].subscribers.length).toEqual(0);
    });
    it("method deleteSubscription should delete course from subscription of the user", function(){
      coursesApp.addSubscription(1,1);
      coursesApp.deleteSubscription(1,1);
      expect(coursesApp.getUsers()[0].subscriptions.length).toEqual(0);
    })
  });
