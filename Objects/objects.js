"use strict";
//usecases of objects => passing and returning value from function
Object.defineProperty(exports, "__esModule", { value: true });
// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }
//function taking object paramenter
// function createUser({name: string, isPaid: boolean}){}
// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}
// //here no error takes place as email is also passed
// createUser(newUser)
// //bad behaviour of objects
// createUser({name:"Tejas",isPaid:true,email:"tejas@gmail.com"})
//function returning object
function createCourse() {
    return { name: "reactjs", price: 399 };
}
var course = createCourse();
console.log(course.name);
