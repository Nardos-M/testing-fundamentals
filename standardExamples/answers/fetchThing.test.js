import fetchData from "../fetchThing.js";

// Test Cases

// Case 1: Ensure fetchData calls the callback with the correct value
export function testFetchData() {
    fetchData(data => {
        if (data === "data received") {
          console.log("Test Passed: fetchData returned the expected data");
        } else {
          console.error(`Test Failed: Expected "data received", but got "${data}"`);
        }
    });
}

// Run the tests
testFetchData();