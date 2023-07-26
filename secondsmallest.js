function secondSmallest(number){
    let smallest=number[0];
    let secondSmallest=number[0]
    for(let i=0;i<number.length;i++){
        if(number[i]<smallest){
            secondSmallest=smallest;
            smallest=number[i];
        }else if
            (number[i]<secondSmallest){
                secondSmallest=number[i]
            }
        }
        return secondSmallest;
    }
   

let input=[10,12,13,5,8,,7,20]
let output=secondSmallest(input)
console.log(output)