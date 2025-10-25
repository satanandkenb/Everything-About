// Different types of variables in JavaScript and their pros and cons

// var: function-scoped variable
// Pros:
//  - Can be re-assigned and re-declared
//  - Available before declaration due to hoisting (but initialized as undefined)
// Cons:
//  - Function scope causes confusion; not block-scoped
//  - Hoisting can lead to bugs
//  - Can accidentally overwrite variables
var exampleVar = 10;

// let: block-scoped variable
// Pros:
//  - Block-scoped, preventing issues with var
//  - Can be re-assigned but not re-declared in the same scope
//  - Helps avoid hoisting bugs
// Cons:
//  - Cannot be re-declared in the same scope
let exampleLet = 20;

// const: block-scoped constant
// Pros:
//  - Block-scoped and immutable binding
//  - Prevents re-assignment which avoids accidental changes
//  - Good for values that should not change
// Cons:
//  - Must be initialized at declaration
//  - Cannot be re-assigned
//  - For objects/arrays, contents can still be mutated
const exampleConst = 30;

// Choosing the best variable type depends on use case:
// - Use 'const' by default for all variables that should not change
// - Use 'let' if variable needs to be reassigned
// - Avoid 'var' in modern JavaScript because of scoping and hoisting issues
