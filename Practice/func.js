// function getNames(a, b, ...names){
//     return names;
// }

// const res = getNames("divi", "tejas", "kushagra", "Taylor", "darwin");
// console.log(res);
// for(let i= 0; i< res.length; i++){
//     let ch= res[i].charAt(0);
//     if(ch == "T" || ch == "t"){
//     console.log(ch);
//     }
// }

function calcPrime(n){
    let count=0;
    for(let i=2 ; i<n ;i++){
        let isPrime=true;
       for(j=2; j*j<=i ;j++){
             if(i%j===0){
                isPrime=false;
                break;
             }
       }
       if(isPrime){
        count++;
       }
    }
    return count;
}
console.log(calcPrime(100));