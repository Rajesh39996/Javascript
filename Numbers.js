//14.Numbers
let radius=15;
let pi=3.14;
//addition of two Numbers
let result= radius+pi;
console.log(result);
//Subration of two Numbers
let result1= radius-pi;
console.log(result1);
//Mulitiplitions of two numbers
let result2=radius*pi;
console.log(result2);

let result3=radius**pi;
console.log(result3)

let result4=radius/pi;
console.log(result4)
//area
let area=pi+radius**2;
console.log(area);

let area1=3.14+15**2;
console.log(area1);

let a= 15*(20-18)**3;
console.log(a);

radius++;
console.log(radius);

radius--;
console.log(radius);

radius=radius+1
console.log(radius);

radius=radius-1;
console.log(radius);

radius +=5;
console.log(radius);

radius-=5;
console.log(radius);

let random="xyz";
let result_r=radius/random;
console.log(result_r);

let new_result= random+radius
console.log(new_result);

let result_1="my radius is"+radius +" "+"and value of pi is"+pi;
console.log(result_1);

//15.Template Literals
let firstName="Rajesh Kumar";
let lastName="Reddy";
let videos=10;
let subcribers=4500;

let n_result= "youtube channel"+" "+firstName+" "+ lastName+" "+"has"+" "+videos+" "+"videos and"+" "+subcribers+" "+"subcribers";
console.log(n_result);

let newresult=`youtube channel ${firstName} ${lastName} has ${videos} videos and ${subcribers} subcribers`
console.log(newresult)

let htmlTempleate=`<h1>${firstName}${lastName}</h1>
<p>videos:${videos}</p>
<p>subcribers:${subcribers}</p>`
console.log(htmlTempleate)
