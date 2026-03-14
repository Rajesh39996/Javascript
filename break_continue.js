let range=[1,3,5,0,6,7,9,10,2,3,4,6]
// for(let i=0;i<range.length;i++){
    // console.log(range[i]);
// }

// for (let i=0; i<range.length;i++){
//     if(range[i]==0){
//         console.log("skip")
//     }
//     console.log(`range:${range[i]}`)
// }


let rating=[1,2,3,4,5,0,5,9,10,12,7,8]
// for (let i=0; i<rating.length;i++){
//     if(rating[i]==0){
//         console.log(`rating:${rating[i]}-skip`)
//     }
//     if(rating[i]==10){
//         console.log(`rating:${rating[i]}-Must watch`)
//     }
//     console.log(`rating:${rating[i]}`)
// }

for (let i=0; i<rating.length;i++){
    if (rating[i]==0){
    console.log(`rating:${rating[i]}-skip`)
    continue
    //console.log(`rating:${rating[i]}`)
    }
    if (rating[i]==10){
        console.log(`rating:${rating[i]}-must watch`);
        break;
    }
    console.log(`rating:${rating[i]}`)

}
