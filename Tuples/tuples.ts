//tuples are specialized arrays which typescript has given with some restrictions on it
//here value and order of array matters
//tuples are nothing with array with restrictions


// const user: (string | number)[] = [1, "hc"]
// let tUser: [string, number, boolean]

// tUser = ["hc", 131, true]

// let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"
newUser.push("hello")//not giving error which is a bug in typescript
console.log(newUser);
//output=>
// [ 112, 'hc.com', 'hello' ]

