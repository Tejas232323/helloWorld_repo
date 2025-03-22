const ob1=new Object();
ob1.id=1;
ob1.age=24;
ob1.name="tejas";
const ob4=ob1;

console.log(ob1);
const ob2={
    id: 1,
    age: 24,
    name: "tejas"
}
const ob3={
    id: 1,
    age: 24,
    name: "tejas"
}
console.log(ob2);
console.log(ob1 === ob4);
console.log(ob3 === ob4);


