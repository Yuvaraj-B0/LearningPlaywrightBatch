//Normalize Locator Error Messages
//Given a raw Playwright error message string, write a function that trims extra spaces, converts the message to lowercase, collapses multiple spaces into a single space, and prints a category. Use `TIMEOUT` if the normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.

//Examples:
//Input:
//rawMessage = " Locator not found after TIMEOUT "
//Output:
//Normalized: locator not found after timeout Category: TIMEOUT
// Explanation:After normalization, the message contains both "locator" and "timeout", but TIMEOUT takes priority.

function categorizeErrorMessage(rawMessage) {
  const normalizedMessage = rawMessage.trim().toLowerCase().replace(/\s+/g, " ");
  let category = "GENERAL";
    if (normalizedMessage.includes("timeout")) {
      category = "TIMEOUT";
    } else if (normalizedMessage.includes("locator")) {
      category = "LOCATOR";
    }
  console.log(`Normalized: ${normalizedMessage} Category: ${category}`);
}
// Example usage:
const rawMessage = " Locator not found after   TIMEOUT ";
categorizeErrorMessage(rawMessage);
