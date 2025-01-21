import getEvenNumbers from "../arrayThing.js";

// Test Cases

// Case 1: getEvenNumbers([1, 2, 3, 4, 5]) should return [2,4]
export function testGetEvenNumbers() {
    const result = getEvenNumbers([1, 2, 3, 4, 5]);
    const expected = [2, 4];

    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        console.error(`Test Failed: Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}`);
    } else {
        console.log("Test Passed: getEvenNumbers([1, 2, 3, 4, 5]) = [2, 4]");
    }
}

// Case 2: testEmpty([]) should return []
export function testEmpty() {
    const result = getEvenNumbers([]);
    const expected = [];

    if (JSON.stringify(result) !== JSON.stringify(expected)) {
        console.error(`Test Failed: Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(result)}`);
    } else {
        console.log("Test Passed: getEvenNumbers([]) = []");
    }
}
 
// Run the tests
testGetEvenNumbers();
testEmpty()