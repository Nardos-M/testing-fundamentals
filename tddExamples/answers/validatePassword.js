export default function validatePassword(password) {
    if (typeof password !== "string") return "invalid input";
  
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isLongEnough = password.length >= 8;
  
    return hasUppercase && hasLowercase && hasNumber && isLongEnough ? "valid" : "invalid";
}