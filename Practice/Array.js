const arr1=new Array();
//console.log(arr1);
//console.log(typeof arr1);

const obj1=new Object();
let temp= typeof obj1;
let temp2= new String();
console.log(typeof temp);
console.log(temp2);

for(let i=0; i< 5; i++){
   if((typeof obj1) === "object"){
      let ob = new Object();
      ob.id=i;
      arr1.push(ob);
   }
}
console.log(arr1);