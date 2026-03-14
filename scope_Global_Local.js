let score=70;
// if (score<80){
//     console.log("inside<80block");
//     if (score>65){
//         console.log("indise>65block")
//     }
// }
console.log("inside Globel Block")

if (score<80){
    var in80=80;
    console.log("Inside <80 Block",score,in80);
        if(score>65){
            let in65=65;
        console.log("inside>65 Block",score,in65);
            if (score>=70){
                console.log(in80,in65)
            }
        }
}
console.log("insideglobalblock",score,in80)
