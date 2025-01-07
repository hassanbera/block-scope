//Global scope

const globalVariable = 'global var';

if(true){
    //Block scope
    const blockVariable = 'block var';
    console.log(blockVariable);
    console.log(globalVariable);
}

console.log(globalVariable);
console.log(blockVariable);
