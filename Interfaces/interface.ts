interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail: () => string
  startTrail(): string; //method returning string
  getCoupon(couponname: string, value: number): number;
}

// hitesh.email = "h@hc.com" =>can be changed
// hitesh.dbId = 33 =>cannot be changed

// const hitesh: User = { dbId: 22, email: "h@h.com", userId: 2211,
//     role: "admin",
//     githubToken: "github",
//     startTrail: () => {
//         return "trail started"
//     },
//     getCoupon: (name: "hitesh10", off: 10) => {
//         return 10
//     }
//     }

//re-opening of the interface and inject value in it
//while in case of types they cannot be changed like interfaces => difference between type and interface

interface User {
  githubToken: string;
}

//inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const hitesh: Admin = {
  dbId: 22,
  email: "h@h.com",
  userId: 2211,
  role: "admin",
  githubToken: "github",
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "hitesh10", off: 10) => {
    return 10;
  },
};
