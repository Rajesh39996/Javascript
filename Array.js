let products=["bread","butter","salt","jam"];
console.log(products);
console.log(products[0]);
console.log(products.join("-"));
console.log(products.join(" "));
console.log(products.join(", "));
products[3]="Pizza";
console.log(products);
let random="xyz";
random[1]="q";
console.log(random);

let items=["bread","butter","salt","jam"];
let update=["water","pizza"];
itemsMethod=items.join(", ");
console.log(itemsMethod)

itemsitems=items.concat(update)
console.log(itemsitems)

itemsadding=items.concat(["tissues","coke"]);
console.log(itemsadding);

let a=["bread","butter","salt","jam",20]
amethod=a.indexOf(20);
console.log(amethod)

let things=["bread","butter","salt","jam"];
thingsmethod=things.push("water");
console.log(thingsmethod)
console.log(things)

thingsmethods1=things.pop("water");
console.log(thingsmethods1)
console.log(things)