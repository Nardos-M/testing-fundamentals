//import all the test functions
import { testAdd, testNegatives, testZeros } from './addThing.test.js'
import { testDivide, testFailDivide } from './divideThing.test.js'
import { testGetEvenNumbers, testEmpty } from './arrayThing.test.js';
import { testFetchData } from './fetchThing.test.js';
import { testReverseString, testArray, testObject, testNumber } from './stringReverseThing.test.js';

//define test loop
function runTests(tests) {
    tests.forEach(test => {
        try {
          test();
        } catch (error) {
          console.error(`Test Failed: ${error.message}`);
        }
    });
}

// Run all the tests
runTests([
    testAdd, 
    testNegatives, 
    testZeros,
    testDivide,
    testFailDivide,
    testGetEvenNumbers,
    testEmpty,
    testFetchData,
    testReverseString,
    testArray,
    testObject,
    testNumber
]);
