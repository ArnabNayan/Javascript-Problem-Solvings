function calculator(num1,operator,num2){
    if(operator=='+'){
        return num1+num2;
    }
    else if(operator=='-'){
        return num1-num2;
    }
    else if(operator=='*'){
        return num1*num2;
    }
   else if(operator=='/'){
       if(num2==0){
        return 'math error'
       }
       else{
        return num1/num2;
       }
    }
  
}
console.log(calculator(5,'+',2))
console.log(calculator(5,'-',2))
console.log(calculator(5,'*',2))
console.log(calculator(6,'/',2))
console.log(calculator(5,'/',0))
