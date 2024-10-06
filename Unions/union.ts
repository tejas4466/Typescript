//union allows you to be in the situation where you are not sure what kind of data is going to come
//insted of using 'any' union is preferred
//union is a combination of two or more types of data   

// let score:number|string=33;

// score=44;
// console.log(score);

// score="66"
// console.log(score);



type User={
    name:string;
    id:number
}

type Admin={
    username:string;
    id:number
}

let tejas:User|Admin={
    name:"tejas",
    id:336
}
//not giving error
tejas={
    username:"tejas4433",
    id:44
}




// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }
getDbId(3)
getDbId("3")

function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
  
}



//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]
const data4:string[] | number[] =[1,2,3] //array of number or string

let seatAllotment: "aisle" | "middle" | "window" //seatAllotment can be given only three values
//more secure
seatAllotment = "aisle"
// seatAllotment = "crew" //throws error

let pi:3.14=3.14; //very strict case