const hasName = "Atmaram bhide";
let age = 40;
const hasHobby = true;

// hasName = "Tarak Mehta";
age = 45;

// changing to function Declaration to Arrow function
/*
const gokuldhamSociety = (userName, userAge, userHobby) => {
 return (
    'my name is ' + userName + ' and i am ' + userAge + ' year old ' + userHobby + ' i like to teach my student '
 );
}
*/


// Arrow function.........................................................................................
/*
const add = (a, b, c) => a+b-c;
const numbers = () => 55+66;
console.log(numbers());
console.log(add(11,10,10));
console.log(gokuldhamSociety(hasName, age, hasHobby));
*/

// Objects ....Working on Objects........................................................................
const person = {
   name: 'John',
   age: 39,
   greet: () => {
      console.log(' Hii I Am ' + this.name);
   }
}

// person.greet();
// console.log(person);

const coppiedPerson = {...person};

// Arryas.... Working on Arrays
const hobbies = ['coding', 'cooking', 'gym'];
// for(let hobby of hobbies){
//    console.log(hobby);
// }


console.log(hobbies);

// Understanding Spread Operators & Rest Operators.......................................................
hobbies.push('Hiking');
console.log(hobbies.map(hobby=>{
   return 'Hobby: ' + hobby;
}));
console.log(hobbies);

const coppiedHobby = [...hobbies];
console.log(coppiedHobby);
console.log(coppiedPerson);

const addNumber = (...arg) => {
  return arg;
}

console.log(addNumber(1,2,3,4));


// Destructuring..........................................................................................

const replicant = {
   name: 'Dr.K',
   age: 40,
   greet(){
      console.log('Hii there this is me ' + this.name);
      
   }
}

const printName = ({ name, age }) => {
   console.log(name, age);
   
}
printName(replicant);

const { name , age: number } = replicant;
console.log(name, age);

const hobbies2 = ['coding', 'driving', 'cooking'];

const [hobby1, hobby2] = hobbies2;
console.log(hobby1, hobby2);
