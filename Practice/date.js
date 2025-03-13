let date=new Date();
console.log(date.toDateString());
date.toLocaleString('default', {
     weekday: "long",
     minute: "numeric"
})
