function getNames(a, b, ...names){
    return names;
}

const res = getNames("divi", "tejas", "kushagra", "Taylor", "darwin");
console.log(res);
for(let i= 0; i< res.length; i++){
    let ch= res[i].charAt(0);
    if(ch == "T" || ch == "t"){
    console.log(ch);
    }
}

