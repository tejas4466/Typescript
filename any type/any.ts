//don't use any in typescript
// let hero;
// function getHero(){
//     return "thor"
// }
// hero=getHero()

// console.log(hero)

// export{}

let hero:any="tejas"
console.log(hero);
hero = 16;
console.log(hero);

//you can use 'any' whenever you don’t want a particular value to cause typechecking errors
//it is not a good practise to use any in your code any you are disabling the strictness provided by javascript

// noImplicitAny
// When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.

// You usually want to avoid this, though, because any isn’t type-checked. Use the compiler flag noImplicitAny to flag any implicit any as an error.