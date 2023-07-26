function frequent(number){
    let mf=1;
    let count=0;
    let item;

    for(let i=0;i<number.length;i++){
        for(let j=i;j<number.length;j++){
            if(number[i]==number[j]){
                count++;
            }
            if(count>mf){
                mf=count;
                item=number[i];
            }
        }
        count=0;
    }
    return item;
}
let input=[3, 5, 2, 5, 3, 3, 1, 4, 5] ;
let output=frequent(input);
console.log(output);