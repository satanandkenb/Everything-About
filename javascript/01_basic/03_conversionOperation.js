let score = "33"

// console.log(typeof(score))
// console.log(typeof score)

let isNumber = Number(score)

// console.log(isNumber)
// console.log(typeof isNumber)



// "33" => 33
// "33abc" => Nan
// true => 1; false => 0

// let isLoggedIn= ""
// let boolenIsLoggedIn = Boolean(isLoggedIn)
// console.log(boolenIsLoggedIn)

// Ouput :
// 1 => true; 0 => false
// "" => false
//"golu" => true

let someNumber = "Raju"
let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)
//output
// 33 => 33 but dataType is string
// "33" => 33 and the dataType will be same as previous which is String.
// "Raju" => Raju , DataType will be same.
let StrAsNumber = "Raju"
let conversationNumber = Number(StrAsNumber)
let a = 2

// console.log(a * conversationNumber)

// *******************| Operations |***************
let value = 3
let negValue = -value
// console.log(negValue)
// console.log(2+3) // addition
// console.log(2-3) // subtraction
// console.log(2*3) // multiplication
// console.log(2**3) // 2 to the power 3 output will be 8.
// console.log(2/3) // 2 divive 3 will be 0.6
// console.log(7%3) // this will give you the remainder.

let str1 = "Hi, "
let str2 = "Satanand"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 3)
// console.log(2+"1")
// console.log("1" + 2 + 3) 
// console.log(1 + 2 + "3")

// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter)

let gameCount = 100
let exP = ++gameCount;
// console.log(`gameCount : ${gameCount}, exP : ${exP}`)
//  prefix: first it increments and then return the value after incrementing

let gameCount1 = 100
let exP1 = gameCount++;
// console.log(`gameCount : ${gameCount1}, exP : ${exP1}`)
// postfix : it returns the previous value then it increments the value

// ********** | template literals with string interpolation | ***********
// Template literals are string literals that allow embedded expressions and multi-line strings. They are enclosed by backtick (`) characters instead of single or double quotes. This syntax enables more readable and concise string construction compared to traditional concatenation.
/*
String Interpolation

The ${variable} or ${expression} syntax inside a template literal allows direct insertion of variables and expressions into the string. In the given code, ${nameOf}, ${ageOf}, ${courseOf}, and ${collegeOf} are placeholders that get replaced with their respective variable values during runtime. This process is known as string interpolation. */

let nameOf = "Satanand"
let ageOf = 22
let classOf = "BCA"
let CollegeOf = "IGNOU"
 console.log(`Hi ${nameOf}, Welcome to this javascript notes castle, You are ${ageOf} years of old and you are currently pursuing ${classOf} from ${CollegeOf}.`)