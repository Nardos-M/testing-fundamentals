import reverseString from "../stringReverseThing.js";

// Test Cases

// Case 1: reverseString("") should return ""
export function testReverseString() {
    const result = reverseString("");
    const expected = "";

    if (result !== expected) {
        console.error(`Test Failed: Expected an empty string, but got "${result}"`);
    } else {
        console.log("Test Passed: reverseString('') returned an empty string");
    }
}

// Case 2: reverseString([1,2,3,4]) should result in an error
export function testArray() {
    try{
        const result = reverseString([1,2,3,4]);
        console.log("Test Failed");
    } catch {
        console.log("Test Passed");
    }
}

// Case 3: reverseString({name: "bob", age: 37}) should result in an error
export function testObject() {
    try{
        const result = reverseString({name: "bob", age: 37});
        console.log("Test Failed");
    } catch {
        console.log("Test Passed");
    }
}

// Case 2: everseString(42) should result in an error
export function testNumber() {
    try{
        const result = reverseString(42);
        console.log("Test Failed");
    } catch {
        console.log("Test Passed");
    }
}
 
// Run the tests
testReverseString();
testArray();
testObject();
testNumber();