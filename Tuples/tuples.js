//tuples are specialized arrays which typescript has given with some restrictions on it
//here value and order of array matters
//tuples are nothing with array with restrictions
var newUser = [112, "example@google.com"];
newUser[1] = "hc.com";
newUser.push("hello"); //not giving error which is a bug in typescript
console.log(newUser);
