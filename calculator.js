function calculator(num1,operator,num2){
    switch(operator){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            if(num2===0){
                return 'cannot divided by zero'
            }
            else{
                return num1/num2;
            }
            default:
                return 'Invalid Operator';
    }
}
console.log(calculator(5,'+',2))
console.log(calculator(5,'-',2))
console.log(calculator(5,'*',2))
console.log(calculator(6,'/',2))
console.log(calculator(5,'/',0))
