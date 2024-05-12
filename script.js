let length = 5;
let width = 5;
let area = length * width;
//console.log("Area = ",area)

let pi = 3.14;
let radius = 5;
let areaOfCircle = 2 * pi * radius;
//console.log("Area of Cicle: ",areaOfCircle);

let a = 5;
let cube = 6 * a ** a; //Error is here
//console.log("Area of Cube: ",cube);

//percentage
let totalMarks = 1100;
let obtainedMarks = 1082;
let percentage = (obtainedMarks / totalMarks) * 100;
//console.log("Percentage: ",percentage);

//Increment Operator
a = 2;
let b = ++a * 2;
//console.log("B",b);
let x = 5;
y = x-- + 2;
// console.log("Y",y);

x = 3;
y = ++x + x++ + ++x;
// console.log("Y",y);
let m = 2;
let n = ++m * m++ * --m;
//console.log("N ",n);

a = 3;
b = 5;
let result = ++a + b-- - a++ + --b;
//console.log("Result: ",result);

m = 2;
n = 4;
let p = m++ + ++n - --m + n--;
// console.log("P ", p);

a=5;
b=3;
c=2;
d=7;
result = ++a *(b-- + c)/--d;
// console.log("A ",a);
// console.log("B ",b);
// console.log("C ",c);
// console.log("D ",d);
// console.log("Result: ",result);

m=2;
n=3;
o=4;
result= m++ * (--n + m )/(o-- - n);
console.log("M ",m);
console.log("O ",o);
console.log("N ",n);
console.log("Result: ",result);