import add from "./addThing.js";

// Test Cases

// Case 1: add(2, 3) should return 5
export function testAdd() {
    const result = add(2, 3);
    if (result !== 5) {
        console.error(`Test Failed: Expected 5, but got ${result}`);
    } else {
        console.log("Test Passed: add(2, 3) = 5");
    }
}

// Case 2: add(-1, -2) should return -3
export function testNegatives() {
    //Write code here
}

// Case 3: add(0, 0) should return 0
export function testZeros() {
    //Write code here
}
  
// Run the tests
testAdd();
// testNegatives();
// testZeros();