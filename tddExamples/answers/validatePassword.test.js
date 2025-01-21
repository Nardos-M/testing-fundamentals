import validatePassword from "./validatePassword.js";

// Test: validatePassword.test.js
function testValidatePassword() {
    // Test case 1: Valid password
    let result = validatePassword("StrongPass123");
    if (result !== "valid") {
      console.error(`Test Failed: Expected "valid", but got "${result}"`);
    } else {
      console.log("Test Passed: Valid password");
    }
  
    // Test case 2: Invalid password (too short)
    result = validatePassword("Short1");
    if (result !== "invalid") {
      console.error(`Test Failed: Expected "invalid", but got "${result}"`);
    } else {
      console.log("Test Passed: Password too short");
    }
  
    // Test case 3: Invalid password (missing number)
    result = validatePassword("NoNumbers");
    if (result !== "invalid") {
      console.error(`Test Failed: Expected "invalid", but got "${result}"`);
    } else {
      console.log("Test Passed: Missing number");
    }
  
    // Test case 4: Invalid input (not a string)
    result = validatePassword(12345678);
    if (result !== "invalid input") {
      console.error(`Test Failed: Expected "invalid input", but got "${result}"`);
    } else {
      console.log("Test Passed: Non-string input");
    }
  }
  
  // Run the test (this will fail because validatePassword is not defined yet)
  testValidatePassword();