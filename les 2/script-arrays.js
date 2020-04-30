let anArray = [4, 7, 3];
console.log(anArray);

console.log(anArray[1]);

let anotherArray = new Array(9, 2, 5);
console.log(anotherArray);

console.log(anArray.join(' - '));

anArray.push(2);
console.log(anArray);

anArray.pop();
console.log(anArray);

anArray.unshift(69, 420);
console.log(anArray.join(' - '));
anArray.shift();

let concatArray = anArray.concat(anotherArray);
console.log(concatArray);

let subArray = concatArray.slice(2);
console.log(subArray);

let splicedArray = concatArray.splice(2, 3, 11, 12, 13);
console.log(concatArray);
console.log(splicedArray);