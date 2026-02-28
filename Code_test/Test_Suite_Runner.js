/* 
Mini Test Suite Runner
Executes test cases and generates summary report.
Covers: var/let/const, if-else, switch, for, while, do...while,
===, !==, &&, ||, ??, ternary, typeof
*/


const testCases = [
  { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
  { name: "Loose equality check", actual: "10", expected: 10, type: "looseEqual" },
  { name: "Type check number", actual: "ABCD", expected: "number", type: "typeCheck" },
  { name: "Truthy validation", actual: "API Success", expected: true, type: "truthy" },
  { name: "Less than check", actual: 5, expected: 10, type: "lessThan" }
];


var passCount = 0;
var failCount = 0;
var errorCount = 0;


let results = [];

console.log(" Running Test Suite...\n");


for (let i = 0; i < testCases.length; i++) {

  const tc = testCases[i];
  const testName = tc.name ?? "Unnamed Test";
  let status = "";
  let message = "";

  try {

    
    if (!tc || typeof tc !== "object") {
      throw new Error("Invalid test case structure");
    }

    // SWITCH → comparison type
    switch (tc.type) {

      case "strictEqual":
        status = tc.actual === tc.expected ? "PASS" : "FAIL";
        message = `${tc.actual} === ${tc.expected}`;
        break;

      case "looseEqual":
        status = tc.actual == tc.expected ? "PASS" : "FAIL";
        message = `${tc.actual} == ${tc.expected}`;
        break;

      case "typeCheck":
        status = tc.actual === tc.expected ? "PASS" : "FAIL";
        message = `${tc.actual} === ${tc.expected}`;
        break;

      case "truthy":
        status = tc.actual ? "PASS" : "FAIL";
        message = `Boolean(${tc.actual}) is truthy`;
        break;

      case "lessThan":
        status = tc.actual < tc.expected ? "PASS" : "FAIL";
        message = `${tc.actual} < ${tc.expected}`;
        break;

      default:
        throw new Error("Unknown comparison type");
    }

    // Count results
    if (status === "PASS" && tc.actual !== null) {
      passCount++;
    } else {
      failCount++;
    }

  } catch (err) {
    status = "ERROR";
    message = err.message;
    errorCount++;
  }

  results.push(status);

  // Ternary operator for emoji
  const icon = status === "PASS" ? "✅" :
               status === "FAIL" ? "❌" : "⚠️";

  console.log(`${icon} TC-${String(i + 1).padStart(2, "0")}: ${testName} → ${status} (${message})`);
}

// WHILE LOOP → consecutive passes from start
let consecutivePasses = 0;
let index = 0;

while (index < results.length && results[index] === "PASS") {
  consecutivePasses++;
  index++;
}

// DO...WHILE → find first failure
let firstFailureIndex = -1;
let j = 0;

if (results.length > 0) {
  do {
    if (results[j] === "FAIL") {
      firstFailureIndex = j;
      break;
    }
    j++;
  } while (j < results.length);
}

// Summary Calculations
const totalTests = testCases.length;
const passRate = totalTests > 0
  ? ((passCount / totalTests) * 100).toFixed(2)
  : "0.00";

const overallStatus =
  failCount === 0 && errorCount === 0 ? "PASSED" : "FAILED";

// Final Report 
console.log("\n📊 ===== TEST SUMMARY =====");
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Consecutive Passes from Start: ${consecutivePasses}`);
console.log(
  `First Failure Index: ${firstFailureIndex !== -1 ? firstFailureIndex + 1 : "None"}`
);
console.log(`Pass Rate: ${passRate}%`);
console.log(`Overall: ${overallStatus === "PASSED" ? "✅ PASSED" : "❌ FAILED"}`);