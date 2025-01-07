//Global scope

const globalVariable = 'global var';
let globalLet = 'global let';

if(true){
    //Block scope
    const blockVar1=("ben block scope 1deyim");
    let blockLet1=("ben block scope 1deyim");

    console.log(blockVar1);
    console.log(blockLet1);
}

if(true){
    //Block scope 2
    const blockVar2=("ben block scope 2deyim");
    let blockLet2=("ben block scope 2deyim");
    var blockVar3=("ben block scope tanımam");

    console.log(blockVar2);
    console.log(blockLet2);
}

console.log(globalVariable);
console.log(globalLet);
console.log(blockVar3);
