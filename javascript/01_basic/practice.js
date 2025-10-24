let birthYear = 2001;
let birthYeartype = Number(birthYear);
let aajDate = new Date().getFullYear();
// let aajDateNumb = Number(aajDate);
let age = aajDate - birthYeartype

if (age < 18) {
    console.log("You are not eligible to vote");
}
else {
    console.log("You are eligible to vote");
}

console.log(`Your age according to your birth date is : ${age}`)
console.log(typeof aajDate)