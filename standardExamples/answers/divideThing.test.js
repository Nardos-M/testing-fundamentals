import divide from "../divideThing.js";

// Test Cases

// Case 1: divide(4, 0) should throw an error
export function testFailDivide() {
    try {
        divide(4, 0);
        console.error("Test Failed: Expected an error but none was thrown");
    } catch (error) {
        if (error.message === "Cannot divide by zero") {
            console.log("Test Passed: Proper error thrown for divide by zero");
        } else {
            console.error(`Test Failed: Unexpected error message "${error.message}"`);
        }
    }
}

// Case 2: divide(4, 2) should return 2
export function testDivide() {
    const result = divide(4, 2);
    if (result !== 2) {
        console.error(`Test Failed: Expected 2, but got ${result}`);
    } else {
        console.log("Test Passed: add(2, 3) = 5");
    }
}
 
// Run the tests
testFailDivide();
testDivide()