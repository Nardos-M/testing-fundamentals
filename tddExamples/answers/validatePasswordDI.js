// similar to validatePassword.js, but with dependency injection
// Notice the second argument "checks"
export default function validatePasswordWithDependencyInjection(password, checks) {
    if (typeof password !== "string") return "invalid input";  

    // Loop through all the functions in `checks` and execute them
    const results = Object.values(checks).map((check) => check(password));

    // Return "valid" only if all checks return true
    return results.every((result) => result) ? "valid" : "invalid";
}