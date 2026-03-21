function welcome(name){
    console.log("Welcome")
}
welcome("Rajesh")

function welcome1(name){
    console.log(name)
}
welcome1("Rajesh")

function welcome3(name){
    console.log(`welcome ${name}`)
}
welcome3("rajesh kumar")

function addition(numone, numtwo){
    let result= numone+numtwo
    console.log(result)
}
addition(1,2)

function add(numone,numtwo=0){
    let r=numone+numtwo
    console.log(r)
}
add(1)
add()
add(1,2)

function fullname(firstname,lastname){
    console.log(`welcome ${firstname} ${lastname}`)
}
fullname("rajesh", "reddy")

function iname(firstname,secondname=""){
    console.log(`welcome${firstname}${secondname}`)
}
iname("rajesh","reddy")
iname("rajesh")


function myname(firstname,lastname="reddy"){
    console.log(`welcome ${firstname} kumar ${lastname}`)
}
myname("rajesh")