const name='tejas';
console.log(Number(name));
const age=34;
console.log(String(age));
console.log(typeof age,typeof String(age))
console.log('b'- 'a'); // NaN, strings can't be subtracted on the basis of Ascii value in js 
console.log('5' - '2'); // String to number conversion works because it's numeric
 console.log('b'.charCodeAt(0) - 'a'.charCodeAt(0));
