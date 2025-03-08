let name="tejas"
const name1="123"
//console.table([name1, name])
let fname= "rrr";
fname=2*3;
//console.log(fname);
console.log(typeof fname);

if ("") console.log("Falsy"); // Won't run
if (null) console.log("Falsy"); // Won't run
if (0) console.log("Falsy"); // Won't run

//if ("Hello") console.log("Truthy"); // Runs
//setInterval(() => console.log("hello"), 2000);
sayHello(); // ✅ Works: "Hello!"
function sayHello() { console.log("Hello!"); }
let str1=new String("tejas");
let str2=new String("tejas");
console.log(typeof str1);
console.log(str1 == str2);

let str3 = "hello";
let str4 = new String("hello");
console.log(str3 == str4);
