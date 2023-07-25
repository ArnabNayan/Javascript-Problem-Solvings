function reverseString(string){
let reverseString='';

for(let i=string.length-1;i>=0;i--){
    reverseString+=string[i]
}
return reverseString;
}
let input='hello world';
let output=reverseString(input);
console.log(output)
