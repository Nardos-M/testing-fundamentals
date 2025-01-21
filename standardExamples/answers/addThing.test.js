import add from "../addThing.js";

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
    const result = add(-1, -2);
    if (result !== -3) {
      console.error(`Test Failed: Expected -3, but got ${result}`);
    } else {
      console.log("Test Passed: add(-1, -2) = -3");
    }
  }

// Case 3: add(0, 0) should return 0
export function testZeros() {
    const result = add(0, 0);
    if (result !== 0) {
        console.error(`Test Failed: Expected 5, but got ${result}`);
    } else {
        console.log("Test Passed: add(0, 0) = 0");
    }
}
  
// Run the tests
testAdd();
testNegatives();
testZeros();