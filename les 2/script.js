let aVarriable = 3;
let anotherVariable = 5;

aVarriable = anotherVariable +1;

console.log(aVarriable);

function sum (a, b){
    return a + b;
}
aVarriable = sum(5, 6);
console.log(aVarriable);

let newVar = 5;
let otherNewVar = 5;

console.log(++newVar);
console.log(otherNewVar++);

let a = 10 + 10;
if(a){
    console.log('ik ben true');
} else{
    console.log('ik ben false')
}

if(true && true){
    console.log('alletwee true');
}
if(true || false ){
    console.log('eentje is genoeg');
}
