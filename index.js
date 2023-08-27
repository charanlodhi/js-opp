// let circle = {
//     radius:1,
//     location: {
//         x:1,
//         y:1
//     },
//     draw:function(){
//         console.log("draw")
//     }
// }
// console.log(circle.draw())

// factory Function(){

function createCircle(radius){
     return{
        radius,
        draw : function(){
            console.log("draw")
        }
     }
     
}
//const Circle = createCircle(1)
//console.log(Circle)

//Constractor Function
//  function Circle(radius){
//    this.radius = radius;
//    this.draw = function(){
//     console.log('draw')
//    }
//  }
// const another = new createCircle(1);

// another.city = {name:"gwalior"}
//  console.log(another)
// let start, stop, endTitme, running, duration = 0;
// console.log(endTitme)

// let array = ["gwalior", "pune"];
// let string = "this is my firts"
// string.search("pune")
// console.log(string)

// const employee = {
//     firstName:"Ravi",
//     lastName:"Lodhi",
//     get fullName(){
//         return this.firstName + " " + this.lastName;
//     },
//     set fullName(value){
//       let ouput = value.split(' ');
//       this.firstName = ouput[0]
//       this.lastName = ouput[1]
//     }
// }
// employee.fullName = "Charan Singh"
// console.log(employee.fullName)
// console.log(employee)

//String method
// const number = 123.34343
// const amount = 200000;
// console.log(number.toPrecision(5))
// console.log(amount.toLocaleString('US'))

// console.log(Math.abs(-10))
// console.log(Math.round(4.9))
// console.log(Math.ceil(4.7))
// console.log(Math.floor(4.9))
// console.log(Math.min(3,4,5,4,6,4,4))
// console.log(Math.max(3,4,5,4,6,4,4))
// console.log(Math.random() * 100 )
// console.log(Math.floor(Math.random() * 10000))

// date show and formating
// let newDate = new Date()

// console.log(newDate) 
// console.log(newDate.getDate()) 
// console.log(newDate.getDay()) 
// console.log(newDate.getFullYear()) 
// console.log(newDate.getMilliseconds()) 
// console.log(newDate.getMinutes()) 
// console.log(newDate.getMonth()) 
// console.log(newDate.getTime()) 
// console.log(newDate.getTimezoneOffset()) 
// console.log(newDate.toDateString()) 
// console.log(newDate.toISOString()) 
// console.log(newDate.toJSON()) 
// console.log(newDate.toLocaleDateString()) 
// console.log(newDate.toLocaleString()) 
// console.log(newDate.toLocaleTimeString()) 
// console.log(newDate.toString()) 
// console.log(newDate) 

//Array method

//let cities = ["Hydrabad", "pune", "banglore", "Ahmedabad", "Agra", "Udaipur"];
//let newArray = cities.slice(0, 4)
//let newArray2 = cities.splice(0, 4)
//console.log("orignal array", cities)
//console.log("Slice", newArray)
//console.log("Splice", newArray2)
// let newArray3 = cities.find("pune");
// console.log(newArray3)

// let name = "charan singh lodhi";
// let newName = Array.of(name)
// let newName2 = Array.from(name)
// console.log(newName)
// console.log(newName2)
// const number = [123,[3322,[24,44,54,4,5]],[454,454,454,333,33,33]]
// const secound = number.flat(Infinity)
// console.log(secound)
// const mergearray = [...number, ...newName2]
// console.log(mergearray)

//object details

//==============object litrals=================

const person = {
    name: "charan",
    age:30,
    detail:function (){
        return this.name + " " + this.age
    }
}

// //console.log(person.detail())

// person.greeting = function(){
//     console.log(`Welcome to our App ${this.name}`)
// }
// console.log(person.greeting())

//singleton object
const obj = {1:"a", 2:"b", 3:"c"}
//const obj1 = {1:"ram", 2:"Syam", 3:"Ravi"}
//const obj3 = Object.assign({}, obj, obj1)
//const obj3 = {...obj, ...obj1}
//console.log(obj3)

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// const combined = { ...obj1, ...obj2 };
// console.log(combined); // { a: 1, b: 3, c: 4 }

// const keys = Object.keys(obj1);
// const values = Object.values(obj1);
// console.log(keys, values)

// Object destruchuring
// const employee = {
//     name:"Ravindra",
//     age:30,
//     company:"Coforge"
// }
// const {name, age, company } = employee;
// console.log(name, age, company)

//functions

// function calc(x, y){
//     let sum = x * y
    
//     return sum;
// }
//  const result = calc(3, 5);
// console.log(result)

//IIFF
// (function charan(){
//     return console.log("Hello Mr.")
// })()

// (() =>{
//     console.log("hello")
// })()

let age = 20;
if(age != 20){
    console.log("your not yung")
}