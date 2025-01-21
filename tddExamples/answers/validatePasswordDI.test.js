//This set of examples is similar to the regular validatePassword.test.js,
//but incorporates dependency injection
import validatePasswordWithDependencyInjection from "./validatePasswordDI.js";

//Here are the checks we are going to inject into the password validator
const checks = {
  hasUppercase: (password) => {return /[A-Z]/.test(password)},
  hasLowercase: (password) => {return /[a-z]/.test(password)},
  hasNumber: (password) => {return /\d/.test(password)},
  isLongEnough: (password) => {return password.length >= 8}
}

// Test: validatePassword.test.js
function testValidatePasswordDI() {
    // Test case 1: Valid password
    //   See here how we include a second parameter "checks" as the injection
    let result = validatePasswordWithDependencyInjection("StrongPass123", checks);
    if (result !== "valid") {
      console.error(`Test Failed: Expected "valid", but got "${result}"`);
    } else {
      console.log("Test Passed: Valid password");
    }
  
    // Test case 2: Invalid password (too short)
    result = validatePasswordWithDependencyInjection("Short1", checks);
    if (result !== "invalid") {
      console.error(`Test Failed: Expected "invalid", but got "${result}"`);
    } else {
      console.log("Test Passed: Password too short");
    }
  
    // Test case 3: Invalid password (missing number)
    result = validatePasswordWithDependencyInjection("NoNumbers", checks);
    if (result !== "invalid") {
      console.error(`Test Failed: Expected "invalid", but got "${result}"`);
    } else {
      console.log("Test Passed: Missing number");
    }
  
    // Test case 4: Invalid input (not a string)
    result = validatePasswordWithDependencyInjection(12345678, checks);
    if (result !== "invalid input") {
      console.error(`Test Failed: Expected "invalid input", but got "${result}"`);
    } else {
      console.log("Test Passed: Non-string input");
    }
  }
  
  // Run the test (this will fail because validatePassword is not defined yet)
  testValidatePasswordDI();