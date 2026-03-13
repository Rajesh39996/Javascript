// const students=["Rajesh","pratyusha","sujatha","swamy"]
// students.push("reddy")

// for (let student of students){
//     console.log(student)
// }

// for (let student in students){
//     console.log(student)
// }

// for (let index in students){
//     console.log(students[index]);
// }

const students1=["shubham","alex","mark","deepak"]
students1[6]="havey"
for (let index in students1){
    console.log(index);
}

for (let student of students1){
    console.log(student)
}

const student2={
    username:"rajesh",
    age:26
}
for (let key in student2){
    console.log(key);
}

for (let key in student2){
    console.log(student2[key])
}

for(let key in student2){
    console.log((key),student2[key])
}

const username="shubham";
for (let character of username){
    console.log(character)
}
