// Async Await code practice

const fetchData = () => {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
         resolve('Done!');
        },1500);
    });
    return promise;
}

setTimeout(() => {
   console.log('timer is done!!');
   fetchData().then(text=>{
    console.log(text);
   return fetchData();
   })
   .then(text2 =>{
        console.log(text2);
    });
}, 2000);

console.log('Hello there this is Typescript');
console.log('Hello there this is Node js');

console.log("Hello there we are now learning Async Await & Promise functionality 😊");

// Template literal in Node js Also in Javascript & Typescript
const eName = 'Jullie';
const jullieAge = 29;
const jobRoll = 'Software Developer';

console.log(`Hii there My Name is ${eName} And Iam ${jullieAge} years old And My Job Profile is ${jobRoll}`);