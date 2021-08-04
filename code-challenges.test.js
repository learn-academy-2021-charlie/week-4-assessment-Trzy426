// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { truncate } = require("fs")

// const { cloneWithoutLoc } = require("@babel/types")
// const { max } = require("lodash")
// const { array } = require("prop-types")
// const { string } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// a) Create a test with an expect statement using the variable provided.
describe("rmv1AndScramble", () => {
    test("Array that takes in an array removes index[0] and shuffles the other index's", () =>{
        // One issue with this is it runs the function twice causing it to splice twice. Even when assigning the array to a completely different variable this happens. 
        expect(rmv1AndScramble(colors1)).toHaveLength(4)
        expect(rmv1AndScramble(colors1)).not.toBe(["blue", "green", "yellow", "pink"])
    
        expect(rmv1AndScramble(colors2)).toHaveLength(5)
        expect(rmv1AndScramble(colors2)).not.toBe(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"])       
    })
})
var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// create a function call rmv1AndScramble
// takes in a parameter of strings in an array
// remove the first string
// shuffle the rest of the the array randomly by getting a random index .math random? and decrement in the loop to move backwards in the index using what is left.
//

// b) Create the function that makes the test pass.
const rmv1AndScramble = (array) => {
    stringArray = array
    stringArray.splice(0,1)  
    for (let index = stringArray.length - 1; index > 0; index--) {
        let newIndex = Math.floor(Math.random() * (index + 1));
        let temp = stringArray[index] // stores the next index to be "shuffled"
        stringArray[index] = stringArray[newIndex]  // act of shuffling
        stringArray[newIndex] = temp // "stores to prepare for the next "shuffle" 
    }
    return stringArray
}

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.
describe("rtnLeastAndGreatest", () => {
    test("takes in 2 arrays and gives the lowest and highest numbers", () =>{
        expect(rtnLeastAndGreatest(nums1)).toEqual([-8, 90])
        expect(rtnLeastAndGreatest(nums2)).toEqual([5, 109])
    })
})
var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]


//create a function: rtnLeastAndGreatest 
//pass in an array
//sort the array least to greatest
// take the first and last indexes
// push them into a sep array and return that array
// b) Create the function that makes the test pass.
// this can also been done with filter
const rtnLeastAndGreatest = (array) => {
    completeList = []
    sortedArr = array.sort((a,b) => a - b)
    minInt = sortedArr.shift()
    maxInt = sortedArr.pop()
    completeList.push(minInt,maxInt)
    return(completeList)
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
describe("", () => {
    test("takes in 2 arrays and gives the lowest and highest numbers", () =>{
        expect(noRepeat(testArray1,testArray2)).toEqual(expect.arrayContaining([3, 7, 10, 5, 4, 8, 2, 1]))
    })
})
var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
// create an array
// concat both arrays together
// check using filter if the array has index of a number using that as the return
// now trying to loop through each value to differentiate them.
// first if statement will be to get all of the non repeated numbers seperated
// second will use
// never mind filter does work i wasnt searching through the correct variable 
// so return based on the comparison of a numbers first index vs its other indexes does work

// b) Create the function that makes the test pass.
const noRepeat = (testArrat1, testArray2) => {
    array = testArrat1.concat(testArray2)
    sortedArray = array.sort((a, b) => a - b)
    const result = sortedArray.filter((value,index,array) =>
        {return array.indexOf(value) === index})
        return result
    // console.log(result)
    // for (let index = 0; index < array.length; index++) {
    //     let noRepeat = []
    //     if (array.indexOf(value) === array.lastIndexOf(value)){
    //         noRepeat.push()
    //     }
    //     else if (value === value[index + 1]) {
    //         console.log(value)
    //     }
        
    // }
}