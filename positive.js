function positive(number){
 
    let sum=0;
    for(let i=0;i<number.length;i++){
        if(number[i]>0){
         sum=sum+number[i]
        }
   
    }
    return sum;

}

let input=[2,-5,10,-3,7];
let output=positive(input)

console.log(output)

