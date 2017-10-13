var courses = [
    {
     name: 'Native JS',
     duration: 16,
     limit: 4
    },
    {
     name: 'Angular JS',
     duration: 9,
     limit: 3
    },
    {
     name: 'Node JS',
     duration: 6,
     limit: 2
    },
    {
     name: 'jQuery advanced',
     duration: 6,
     limit: 4
    },
    {
     name: 'Unit testing',
     duration: 2,
     limit: 2
    },
    {
     name: 'Performance and Optimization',
     duration: 3,
     limit: 2
    }
   ]



var users = [
    {
     firstName: 'John',
     lastName: 'Doe',
     email: 'jdoe@mail.com',
     age: 30,
     sex: 'Male',
     phone: 123456789
    },
    {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        email: 'ivanov@mail.com',
        age: 25,
        sex: 'Male',
        phone: 555666443  
    },
    {
        firstName: 'Ann',
        lastName: 'Mai',
        email: 'amai@mail.com',
        age: 26,
        sex: 'Female',
        phone: 123678999  
    }
   
   ]
 
//created a fucntion which add a new course ( a new object to array Courses)
   function addCourse(name, duration, limit) {
       this.name = name;
       this.duration = duration;
       this.limit = limit;
       return courses.push({name, duration, limit});
   }

addCourse("React", 20, 10);

//need to create a functionn which will be deleting course from an array courses

function deleteCourses (name) {
    this.name = name;
    return courses.push({name});
}
deleteCourses("Ddd");