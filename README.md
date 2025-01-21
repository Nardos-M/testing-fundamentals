## Goal: 
Introduce learners to the purpose and importance of software testing in development.

## Activity:
### Example 1 addThing.js:
What scenarios should you test? (e.g., positive, negative, zero, non-numbers).
How will you validate the results?
write tests to validate:
add(2, 3) returns 5.
add(-1, -2) returns -3.
Edge cases like add(0, 0).



### Example 2: Testing for Errors
```
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
```

What edge cases can cause errors?
How do you test that the error is thrown correctly?
write tests to:
Ensure divide(4, 0) throws an error.
Confirm divide(4, 2) returns 2.

### Example 3: Testing Arrays
```
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
```

What types of arrays should you test? (e.g., empty arrays, arrays with no evens).
How do you validate the output?
write tests for:
getEvenNumbers([1, 2, 3, 4, 5]) returns [2, 4].
getEvenNumbers([]) returns [].

### Example 4: Testing Asynchronous Code
```
function fetchData(callback) {
  setTimeout(() => {
    callback("data received");
  }, 1000);
}
```

How can you test asynchronous behavior?
What happens if the callback is not called correctly?
write tests to:
Ensure fetchData calls the callback with the correct value.
Test timeouts or delays in execution.


### Example 5: Edge Case Testing
```
function reverseString(str) {
  return str.split("").reverse().join("");
}
```

How can you test surprising input?
What happens if the input is empty or a different type is the input?
Learners write tests to:
Ensure reverseString deals with empty strings.
Ensure weird input is handled properly: [1,2,3,4], {name: "bob", age: 37}, 42 


### Example 6: Simple Test Runner
How can we run all the tests we created above at once?


## TDD Exercise: Validate a Password
### Request:
Write a JavaScript function that validates a password.
Acceptance Criteria:
Should return "valid" if the password meets all criteria:
At least 8 characters long.
Contains at least one uppercase letter.
Contains at least one lowercase letter.
Contains at least one number.
Should return "invalid" if the password does not meet any of the criteria.
Should return "invalid input" if the input is not a string.

TDD Steps
Step 1: Write the Test First (Red)
Define test cases that describe the requirements.

Step 2: Write the Minimal Code to Pass the Test (Green)

Step 3: Add Edge Case Tests and Refactor
Add additional edge cases to improve robustness.


## Reflection
### Discussion Points:
How the acceptance criteria guided the testing:
Clearly defined "valid," "invalid," and "invalid input" cases.
How TDD caught edge cases early:
Testing for empty strings and non-string inputs ensures robustness.
Improvement Areas:
Introduce TypeScript to enforce input types and reduce reliance on "invalid input" tests.


What patterns did you observe while testing?
How could some tests be avoided with better practices (e.g., type safety)?

## TypeScript Integration
Add Type Annotations to Examples
Rewrite the earlier functions in TypeScript with type annotations.
Example: Adding Types to add
```
function add(a: number, b: number): number {
  return a + b;
}
```

### Activity:
Show how TypeScript catches common issues during compilation:
Passing non-numeric arguments to add triggers a type error.
Compare the reduced need for tests:
No need to test invalid inputs like add("2", "3") because TypeScript enforces correct types.
TypeScript and Interfaces
```
interface User {
  name: string;
  age: number;
}

function createUser(name: string, age: number): User {
  return { name, age };
}
```



