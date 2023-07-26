function passwordGenerator(length,number,uppercase,lowercase,symbols){
    let characters='';
if(number){
    characters+='123456789';
}
if(uppercase){
    characters+='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
}
if(lowercase){
    characters+='abcdefghijklmnopqrstuvwxyz'
}
if(symbols){
    characters+='!@#$%^&*()-_=+[]{}|;:,.<>?'
}
let arrayPassword=[];
while(arrayPassword.length<length){
    const character=characters[Math.floor(Math.random()*characters.length)]
    arrayPassword.push(character)
}
return arrayPassword.join('');
}

const randomNumber=12;
const randomPassword=passwordGenerator(randomNumber,true,true,true,true);
console.log(randomPassword)
