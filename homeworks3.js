/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function (l1, l2) { 
      const result = l1 * l2
      return result
}
console.log(area(11,10))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function(x,y) { 
    x!==y ?  result = (x + y) :  result = (x + y)*3
    return result
}
console.log(crazySum(7,7))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function(x){ 
 x>19 ? result = (x-19)*3 :  result = (x-19)
 return result
}
console.log(crazyDiff(15))

 /* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */
const boundary = function(x){ 
   if (20<=x && x<=100||x===400){ 
   result = "true"
}
   return result
} 
console.log(boundary(235))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */
const strivify = function(str){
    if(str.startsWith("Strive")){
        result = str
    }
    else {
        result = ( str+ " " + "Strive")
    }
    return result

}
console.log(strivify("hello"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
const check3and7 = function(x){
    if( x%3 === 0){ 
        if( x%7 === 0) {
            result = `${x} is a multiple of 3 and 7` }
            else
        result = `${x} is a multiple of 3 `
    }else { 
        if ( x%7 === 0){
            result = `${x} is a multiple of 7`
         }
    }
    return result
 }

console.log(check3and7(14))

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
const reverseString = function(z){
    const splitString = z.split("")
    const reverseArray = splitString.reverse()
    const joinArray = reverseArray.join("")
    return joinArray
    return result
 }

 console.log(reverseString("ciao"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */
const upperFirst = function(Maiusc){ 
    const nString = Maiusc.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    return nString
}
console.log(upperFirst("ciao casa"))




/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
const cutString = function(tri){ 
const dividia = tri.split("")
dividia.shift()
dividia.pop()
const riunisci = dividia.join("")
return riunisci
return result
}
console.log(cutString("banana"))
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

let array = []
function giveMeRandom(n) {
    for (let i = 0; i < n; i++) {
       array.push
        
    }
}
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/