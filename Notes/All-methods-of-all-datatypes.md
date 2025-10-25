Now I'll compile all this information into a comprehensive answer listing all the methods for both primitive and non-primitive data types in JavaScript.

## JavaScript Data Type Methods - Complete Reference

JavaScript has **8 data types** - 7 primitive types and 1 non-primitive (reference) type. Here's a comprehensive list of methods available for each data type.[1][2][3]

### **Primitive Data Types**

Primitive types don't inherently have methods, but JavaScript automatically wraps them in their corresponding wrapper objects (String, Number, Boolean, BigInt, Symbol) when you access properties or methods, allowing you to use methods on primitive values.[4][5][6][7][1]

#### **1. String**

String primitives have access to numerous methods through the String wrapper object:[8][9][10]

**Character Access & Extraction:**
- `charAt(index)` - Returns character at specified index
- `charCodeAt(index)` - Returns Unicode of character at index
- `codePointAt(index)` - Returns Unicode value at index
- `at(index)` - Returns indexed character (supports negative indexing)
- `slice(start, end)` - Extracts part of string
- `substring(start, end)` - Extracts characters between indices
- `substr(start, length)` - Returns substring from start position (deprecated)

**Search & Match:**
- `indexOf(searchValue)` - Returns index of first occurrence
- `lastIndexOf(searchValue)` - Returns index of last occurrence
- `includes(searchValue)` - Checks if string contains value
- `search(regex)` - Searches using regex, returns position
- `match(regex)` - Returns matches array
- `matchAll(regex)` - Returns iterator of all matches
- `startsWith(searchString)` - Checks if string starts with value
- `endsWith(searchString)` - Checks if string ends with value

**Modification:**
- `concat(str1, str2, ...)` - Joins strings together
- `replace(pattern, replacement)` - Replaces first match
- `replaceAll(pattern, replacement)` - Replaces all matches
- `split(separator)` - Splits string into array
- `repeat(count)` - Repeats string specified times
- `padStart(length, padString)` - Pads string from start
- `padEnd(length, padString)` - Pads string at end
- `trim()` - Removes whitespace from both ends
- `trimStart()` / `trimLeft()` - Removes whitespace from start
- `trimEnd()` / `trimRight()` - Removes whitespace from end

**Case Conversion:**
- `toLowerCase()` - Converts to lowercase
- `toUpperCase()` - Converts to uppercase
- `toLocaleLowerCase()` - Converts using locale
- `toLocaleUpperCase()` - Converts using locale

**Other Methods:**
- `toString()` - Returns string value
- `valueOf()` - Returns primitive value
- `localeCompare(compareString)` - Compares strings in locale
- `isWellFormed()` - Checks if string is well-formed
- `toWellFormed()` - Returns well-formed string
- `length` - Property returning string length

#### **2. Number**

Number primitives have access to these methods through the Number wrapper object:[11][12][13][14][15]

**Formatting:**
- `toFixed(digits)` - Formats number with fixed decimal places
- `toExponential(fractionDigits)` - Returns exponential notation
- `toPrecision(precision)` - Formats to specified significant digits
- `toString(radix)` - Converts to string (optional base/radix)
- `toLocaleString()` - Returns locale-formatted string

**Conversion:**
- `valueOf()` - Returns primitive number value

**Static Methods:**
- `Number.isFinite()` - Checks if value is finite
- `Number.isInteger()` - Checks if value is integer
- `Number.isNaN()` - Checks if value is NaN
- `Number.isSafeInteger()` - Checks if within safe integer range
- `Number.parseFloat()` - Parses string to float
- `Number.parseInt()` - Parses string to integer

#### **3. BigInt**

BigInt primitives have limited methods as they're for arbitrarily large integers:[16][17][18][19]

- `toString(radix)` - Converts to string representation
- `toLocaleString()` - Returns locale-formatted string
- `valueOf()` - Returns primitive BigInt value

**Note:** BigInt cannot use Math object methods and cannot be mixed with Number in operations.[20][16]

#### **4. Boolean**

Boolean primitives have minimal methods:[21][22]

- `toString()` - Returns "true" or "false" as string
- `valueOf()` - Returns primitive boolean value

#### **5. Symbol**

Symbol primitives have these methods:[23][24][25][26]

- `toString()` - Returns string representation
- `valueOf()` - Returns primitive symbol value
- `description` - Property returning symbol's description

#### **6. Null**

`null` has **no methods**. It represents intentional absence of value. Attempting to access methods on `null` throws a TypeError.[27][28][29][1]

#### **7. Undefined**

`undefined` has **no methods**. It represents uninitialized or absent values. Attempting to access methods on `undefined` throws a TypeError.[22][28][1][27]

***

### **Non-Primitive Data Types (Reference Types)**

#### **1. Object**

Objects have numerous built-in methods:[30][31][32][33]

**Property Management:**
- `hasOwnProperty(prop)` - Checks if property exists
- `propertyIsEnumerable(prop)` - Checks if property is enumerable

**Conversion:**
- `toString()` - Returns string representation
- `toLocaleString()` - Returns locale string
- `valueOf()` - Returns primitive value

**Static Methods:**
- `Object.assign(target, source)` - Copies properties
- `Object.create(proto)` - Creates object with prototype
- `Object.keys(obj)` - Returns array of keys
- `Object.values(obj)` - Returns array of values
- `Object.entries(obj)` - Returns key/value pairs array
- `Object.fromEntries(entries)` - Creates object from entries
- `Object.freeze(obj)` - Prevents modifications
- `Object.seal(obj)` - Prevents adding/removing properties
- `Object.getOwnPropertyNames(obj)` - Returns property names
- `Object.getOwnPropertyDescriptor(obj, prop)` - Returns property descriptor
- `Object.defineProperty(obj, prop, descriptor)` - Defines property
- `Object.is(value1, value2)` - Compares values
- `Object.groupBy(items, callback)` - Groups array elements

#### **2. Array**

Arrays have extensive methods for manipulation:[34][35][36][37][38]

**Adding/Removing:**
- `push(element)` - Adds to end
- `pop()` - Removes from end
- `unshift(element)` - Adds to beginning
- `shift()` - Removes from beginning
- `splice(start, deleteCount, items)` - Adds/removes elements
- `toSpliced()` - Non-mutating splice

**Iteration:**
- `forEach(callback)` - Executes function for each element
- `map(callback)` - Creates new array with results
- `filter(callback)` - Creates array with passing elements
- `reduce(callback, initialValue)` - Reduces to single value
- `reduceRight(callback, initialValue)` - Reduces right to left
- `every(callback)` - Tests if all pass
- `some(callback)` - Tests if any pass
- `find(callback)` - Returns first matching element
- `findIndex(callback)` - Returns index of first match
- `findLast(callback)` - Returns last matching element
- `findLastIndex(callback)` - Returns index of last match

**Search:**
- `indexOf(element)` - Returns first index
- `lastIndexOf(element)` - Returns last index
- `includes(element)` - Checks if contains element

**Transformation:**
- `concat(array)` - Joins arrays
- `slice(start, end)` - Returns portion
- `flat(depth)` - Flattens nested arrays
- `flatMap(callback)` - Maps then flattens
- `join(separator)` - Joins to string
- `toString()` - Converts to string
- `toLocaleString()` - Locale string
- `reverse()` - Reverses order
- `toReversed()` - Non-mutating reverse
- `sort(compareFunction)` - Sorts elements
- `toSorted()` - Non-mutating sort

**Other:**
- `fill(value, start, end)` - Fills with value
- `copyWithin(target, start, end)` - Copies within array
- `at(index)` - Returns element at index
- `entries()` - Returns iterator of key/value pairs
- `keys()` - Returns iterator of keys
- `values()` - Returns iterator of values
- `with(index, value)` - Returns new array with updated element
- `length` - Property for array length

**Static Methods:**
- `Array.isArray(value)` - Checks if value is array
- `Array.from(arrayLike)` - Creates array from iterable
- `Array.of(elements)` - Creates array from arguments

#### **3. Date**

Date objects have methods for date/time manipulation:[39][40][41][42][43]

**Get Methods:**
- `getDate()` - Day of month (1-31)
- `getDay()` - Day of week (0-6)
- `getMonth()` - Month (0-11)
- `getFullYear()` - Four-digit year
- `getHours()` - Hours (0-23)
- `getMinutes()` - Minutes (0-59)
- `getSeconds()` - Seconds (0-59)
- `getMilliseconds()` - Milliseconds (0-999)
- `getTime()` - Milliseconds since epoch
- `getTimezoneOffset()` - Timezone offset in minutes

**UTC Get Methods:**
- `getUTCDate()`, `getUTCDay()`, `getUTCMonth()`, `getUTCFullYear()`, `getUTCHours()`, `getUTCMinutes()`, `getUTCSeconds()`, `getUTCMilliseconds()`

**Set Methods:**
- `setDate(day)`, `setMonth(month)`, `setFullYear(year)`, `setHours(hours)`, `setMinutes(minutes)`, `setSeconds(seconds)`, `setMilliseconds(ms)`, `setTime(milliseconds)`

**UTC Set Methods:**
- `setUTCDate()`, `setUTCMonth()`, `setUTCFullYear()`, `setUTCHours()`, `setUTCMinutes()`, `setUTCSeconds()`, `setUTCMilliseconds()`

**Conversion:**
- `toString()` - Converts to string
- `toDateString()` - Date portion as string
- `toTimeString()` - Time portion as string
- `toISOString()` - ISO format string
- `toJSON()` - JSON format
- `toLocaleDateString()` - Locale date string
- `toLocaleTimeString()` - Locale time string
- `toLocaleString()` - Locale string
- `toUTCString()` - UTC string
- `valueOf()` - Primitive value (milliseconds)

**Static Methods:**
- `Date.now()` - Current timestamp
- `Date.parse(dateString)` - Parses date string
- `Date.UTC()` - Returns UTC milliseconds

#### **4. RegExp (Regular Expression)**

RegExp objects test and match patterns:[44][45][46][47][48][49]

- `test(string)` - Tests for match, returns boolean
- `exec(string)` - Executes search, returns result array or null
- `toString()` - Returns string representation
- `compile()` - Compiles regex (deprecated)

**Properties:**
- `source`, `flags`, `global`, `ignoreCase`, `multiline`, `sticky`, `unicode`, `lastIndex`

#### **5. Function**

Functions have methods for controlling execution context:[50][51][52][53][54]

- `call(thisArg, arg1, arg2, ...)` - Calls function with specified `this`
- `apply(thisArg, [argsArray])` - Calls with `this` and arguments array
- `bind(thisArg, arg1, arg2, ...)` - Creates bound function with `this`
- `toString()` - Returns function source code

#### **6. Map**

Map objects store key-value pairs:[55][56]

- `set(key, value)` - Adds/updates entry
- `get(key)` - Returns value for key
- `has(key)` - Checks if key exists
- `delete(key)` - Removes entry
- `clear()` - Removes all entries
- `forEach(callback)` - Executes function for each entry
- `keys()` - Returns iterator of keys
- `values()` - Returns iterator of values
- `entries()` - Returns iterator of [key, value] pairs
- `size` - Property returning number of entries

#### **7. Set**

Set objects store unique values:[56]

- `add(value)` - Adds value
- `has(value)` - Checks if value exists
- `delete(value)` - Removes value
- `clear()` - Removes all values
- `forEach(callback)` - Executes function for each value
- `keys()` - Returns iterator of values
- `values()` - Returns iterator of values
- `entries()` - Returns iterator of [value, value] pairs
- `size` - Property returning number of values

#### **8. WeakMap**

WeakMap holds weak references to object keys:[57][58][59][60]

- `set(key, value)` - Adds/updates entry (key must be object)
- `get(key)` - Returns value for key
- `has(key)` - Checks if key exists
- `delete(key)` - Removes entry

**Note:** No iteration methods or `size` property (not enumerable).[58][61]

#### **9. WeakSet**

WeakSet holds weak references to objects:[60][57][58]

- `add(value)` - Adds object (value must be object)
- `has(value)` - Checks if value exists
- `delete(value)` - Removes value

**Note:** No iteration methods or `size` property (not enumerable).[61][58]

#### **10. Promise**

Promise objects represent asynchronous operations:[62][63][64][65]

- `then(onFulfilled, onRejected)` - Handles resolved/rejected promise
- `catch(onRejected)` - Handles rejection
- `finally(onFinally)` - Executes when settled (fulfilled or rejected)

**Static Methods:**
- `Promise.all(promises)` - Waits for all to resolve
- `Promise.race(promises)` - Resolves/rejects with first settled
- `Promise.allSettled(promises)` - Waits for all to settle
- `Promise.any(promises)` - Resolves with first fulfilled
- `Promise.resolve(value)` - Returns resolved promise
- `Promise.reject(reason)` - Returns rejected promise

***

### **Key Concepts**

**Primitive Wrapper Objects:** JavaScript automatically wraps primitives (except `null` and `undefined`) in their corresponding wrapper objects (String, Number, Boolean, BigInt, Symbol) when you access methods, then discards the wrapper after execution.[6][7][66][4][1]

**Immutability:** All primitive values are immutable. Methods on primitives return new values rather than modifying the original.[67][68][69]

**Object Mutability:** Non-primitive types (objects, arrays, etc.) are mutable and can be modified directly.[70][71][67]

This comprehensive reference covers all major methods available across JavaScript's data types. For the most current and detailed information, always refer to the official MDN documentation.

[1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures)
[2](https://javascript.info/types)
[3](https://www.w3schools.com/js/js_datatypes.asp)
[4](https://dev.to/carlosrafael22/back-to-the-basics-primitive-and-object-types-in-javascript-18c2)
[5](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
[6](https://www.javascripttutorial.net/javascript-primitive-wrapper-types/)
[7](https://javascript.info/primitives-methods)
[8](https://www.programiz.com/javascript/string)
[9](https://www.w3schools.com/js/js_string_methods.asp)
[10](https://www.w3schools.com/jsref/jsref_obj_string.asp)
[11](https://www.geeksforgeeks.org/javascript/difference-between-tofixed-and-toprecision-in-javascript/)
[12](https://www.c-sharpcorner.com/blogs/difference-between-tofixed-and-toprecision-in-javascript1)
[13](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
[14](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)
[15](https://www.w3schools.com/js/js_number_methods.asp)
[16](https://web.dev/learn/javascript/data-types/bigint)
[17](https://dev.to/joanperamas/exploring-javascripts-modern-primitives-bigint-and-symbol-4607)
[18](https://www.geeksforgeeks.org/javascript/javascript-bigint-reference/)
[19](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
[20](https://stackoverflow.com/questions/61583163/javascript-data-type-bigint-vs-number)
[21](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
[22](https://study.com/academy/lesson/javascript-data-types-undefined-null-boolean.html)
[23](https://www.geeksforgeeks.org/javascript/javascript-symbol-valueof-method/)
[24](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf)
[25](https://www.geeksforgeeks.org/javascript/javascript-symbol-reference/)
[26](https://www.programiz.com/javascript/symbol)
[27](https://www.syncfusion.com/blogs/post/null-vs-undefined-in-javascript)
[28](https://www.programiz.com/javascript/null-undefined)
[29](https://web.dev/learn/javascript/data-types/null-undefined)
[30](https://www.programiz.com/javascript/object)
[31](https://www.w3schools.com/js/js_object_method.asp)
[32](https://www.w3schools.com/js/js_object_methods.asp)
[33](https://www.geeksforgeeks.org/javascript/javascript-object-methods/)
[34](https://dev.to/codewithtee/15-array-methods-in-javascript-1p1m)
[35](https://www.geeksforgeeks.org/javascript/javascript-array-methods/)
[36](https://www.w3schools.com/js/js_array_methods.asp)
[37](https://www.programiz.com/javascript/array)
[38](https://www.w3schools.com/jsref/jsref_obj_array.asp)
[39](https://www.geeksforgeeks.org/javascript/javascript-get-date-methods/)
[40](https://www.w3schools.com/js/js_date_methods.asp)
[41](https://www.tutorialsteacher.com/javascript/javascript-date-methods-reference)
[42](https://www.w3schools.com/jsref/jsref_obj_date.asp)
[43](https://javascript.info/date)
[44](https://www.geeksforgeeks.org/javascript/javascript-regexp-exec-method/)
[45](http://www.w3schools.com/JsrEF/jsref_regexp_exec.asp)
[46](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
[47](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
[48](https://javascript.info/regexp-methods)
[49](https://www.w3schools.com/jsref/jsref_regexp_test.asp)
[50](https://www.geekster.in/articles/call-apply-bind-methods-in-javascript/)
[51](https://www.linkedin.com/pulse/what-difference-between-call-apply-bind-muhammad-rizwan)
[52](https://dev.to/codecraftjs/understanding-call-apply-and-bind-essential-methods-in-javascript-d62)
[53](https://stackoverflow.com/questions/15455009/javascript-call-apply-vs-bind)
[54](https://www.geeksforgeeks.org/javascript/explain-call-apply-and-bind-methods-in-javascript/)
[55](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set)
[56](https://javascript.info/map-set)
[57](https://www.freecodecamp.org/news/weakmap-and-weakset-in-javascript/)
[58](https://playcode.io/javascript/weak-map-set)
[59](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
[60](https://www.geeksforgeeks.org/javascript/weakset-vs-weakmap-in-javascript/)
[61](https://javascript.info/weakmap-weakset)
[62](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)
[63](https://www.freecodecamp.org/news/javascript-promise-methods/)
[64](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
[65](https://javascript.info/promise-basics)
[66](https://library.fridoverweij.com/docs/jstutorial/primitive_wrapper_objects.html)
[67](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md)
[68](https://www.geeksforgeeks.org/javascript/primitive-and-non-primitive-data-types-in-javascript/)
[69](https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/)
[70](https://www.scaler.com/topics/non-primitive-data-types-in-javascript/)
[71](https://dev.to/mrizwanashiq/primitive-and-non-primitive-56n8)
[72](https://sentry.io/answers/how-can-i-convert-a-string-to-a-boolean-in-javascript/)
[73](https://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript/47583302)
[74](https://dev.to/imashwani/javascript-non-primitive-data-types-2mjp)
[75](https://www.freecodecamp.org/news/javascript-string-to-boolean/)
[76](https://en.wikipedia.org/wiki/JavaScript_syntax)
[77](https://www.shiksha.com/online-courses/articles/difference-between-primitive-and-non-primitive-data-structure-blogId-147489)
[78](https://devsnest.in/blogs/understanding-datatypes-in-javascript-primitive-and-non-primitive)
[79](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
[80](https://www.scholarhat.com/tutorial/javascript/data-types-in-javascript)
[81](https://www.tutorialspoint.com/javascript/javascript_document_object.htm)
[82](https://www.w3schools.com/js/js_date_methods_set.asp)
[83](https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy)
[84](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Representing_dates_times)
[85](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
[86](https://webreference.com/javascript/basics/object-methods/)
[87](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)
[88](https://javascript.info/array-methods)
[89](https://stackoverflow.com/questions/2257993/how-to-display-all-methods-of-an-object)
[90](https://www.geeksforgeeks.org/javascript/javascript-string-methods/)
[91](https://www.cybrosys.com/blog/15-javascript-string-methods-with-examples)
[92](https://stackoverflow.com/questions/58679199/comparing-null-and-undefined-with-booleans-in-javascript)
[93](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
[94](https://www.w3schools.com/js/js_bigint.asp)
[95](https://www.w3schools.com/js/js_booleans.asp)
[96](https://www.programiz.com/javascript/library/string)
[97](https://stackoverflow.com/questions/3337849/difference-between-tofixed-and-toprecision)
[98](https://www.w3schools.com/jsref/jsref_object_valueof.asp)
[99](https://www.w3schools.com/jsref/jsref_valueof_string.asp)
[100](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf)
[101](https://www.codeguage.com/v1/courses/js/numbers-number-methods)
[102](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
[103](https://www.w3schools.com/js/js_function_call.asp)
[104](https://www.youtube.com/watch?v=bLmHYji0Bxw)
[105](https://stackoverflow.com/questions/27753246/match-vs-exec-in-javascript)
[106](https://www.youtube.com/watch?v=75W8UPQ5l7k)
[107](https://dev.to/tapuchandramojumder/understanding-valueof-and-tostring-in-javascript-7ph)
[108](https://www.reddit.com/r/learnjavascript/comments/v9qgaa/everything_in_javascript_is_an_objectwhat_about/)
[109](https://www.geeksforgeeks.org/javascript/javascript-object-prototype-valueof-method/)
[110](https://dev.to/annarankin/finally-in-promises--trycatch-2c44)
[111](https://stackoverflow.com/questions/9108925/how-is-almost-everything-in-javascript-an-object)
[112](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf)
[113](https://www.w3schools.com/jsref/jsref_promise_finally.asp)
[114](https://js-compute-reference-docs.edgecompute.app/docs/globals/Object/prototype/toString)
[115](https://www.tutorialspoint.com/how-to-use-finally-on-promise-with-then-and-catch-in-javascript)
[116](https://dev.to/abdelrahmanahmed/javascript-s-primitive-wrapper-objects-4agb)
