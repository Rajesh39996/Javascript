// let password="12345678"

// if (password.length>=8||password.includes("@")){
//     console.log("strong password")
// }else{
//     console.log("weak password")
// }

let pass="12345@9999999"

if (pass.length>=8 && pass.includes("@")){
    console.log("strong password")
}else if (pass.length>=5 && pass.length<=8){
    console.log("medium")
}else{
    console.log("weak")
}

let pas="12345678"
if (pas.length>=8 || pas.includes("@")){
    console.log("strong Password")
}else if(pas.length>=5 && pas.includes){
    console.log("medium password")
}else{
    console.log("")
}

let pa="12345677890"

if (pas.length>=12||pas.length>=8&&pas.includes("@")){
    console.log("strong password")
}else if(pas.length>=5&&pas.includes("@")){
    console.log("medium")
}else{
    console.log("weak")
}