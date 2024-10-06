//usecases of objects => passing and returning value from function

// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isAvtive: true
// }


//function taking object paramenter
// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: "hitesh", isPaid: false, email: "h@h.com"}
// //here no error takes place as email is also passed so this is bad behaviour of typescript
// createUser(newUser)

// //bad behaviour of objects
// createUser({name:"Tejas",isPaid:true,email:"tejas@gmail.com"})



//function returning object
function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399}
}
let course=createCourse()
console.log(course.name)
// course=4;//as course is automatically detected as an object by typescript implicitely it is throwing an error



//type aliases in typescript
//reduces complexity while passing more object values in a function
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
//     //if this object has more than 3 values it will become complex while passing it in the function
// }


// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


//readonly and optional
type User = {
    readonly _id: string//won't be able to change it now
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number //optional
}


let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}


//here in this object as credCardDetails are not mentioned as they are optional it does not throws an error
let user:User={
    _id:"123456",
    name:"tejas",
    email:"tejas@gmail.com",
    isActive:true
}

myUser.email = "h@gmail.com"
// myUser._id = "asa" //throws error here because _id is assigned readonly





type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

//new type defined based on the previous types
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

//variable defined with cardDetails type which is a combination of three types
let card:cardDetails={
    cardnumber:"1234",
    cardDate:"12/34",
    cvv:456
}








export {}