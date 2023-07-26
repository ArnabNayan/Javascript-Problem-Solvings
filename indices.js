function indices(number,value){
    
    for(let i=0;i<number.length-1;i++){
       for(let j=i+1;j<number.length;j++){
        let sum=number[i]+number[j];
        if(sum===value){
            return [i+1,j-1]
        }
       } 
    }
    return [];
}

const input=[1, 3,6, 8, 11, 15];
const target=9;
const output=indices(input,target);
console.log(output)

