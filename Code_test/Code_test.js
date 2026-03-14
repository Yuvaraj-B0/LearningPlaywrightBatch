//You receive an array of Playwright step result objects in the format
//  `{ name, status, durationMs }`, where status can be `"passed"`, `"failed"`, or `"skipped"`. 
// Write a JavaScript function that prints a summary report with total steps, passed count, failed count, skipped count, 
// total duration, and a comma-separated list of failed step names.

//Examples:
//Input:
//results = [{ name: "open login", status: "passed", durationMs: 400 }, { name: "fill form", status: "failed", durationMs: 700 }, { name: "submit", status: "skipped", durationMs: 0 }]

//Output:Total Steps: 3 Passed: 1 Failed: 1 Skipped: 1 Total Duration: 1100ms Failed Steps: fill form

function summarizeTestResults(results) {
  let totalSteps = results.length;
  let passedCount = 0;
  let failedCount = 0;
  let skippedCount = 0;
  let totalDuration = 0;
  let failedSteps = [];     

  results.forEach(result => { 
      totalDuration += result.durationMs;
      if (result.status === "passed") {
          passedCount++;
      } else if (result.status === "failed") {
          failedCount++;
          failedSteps.push(result.name);
      } else if (result.status === "skipped") {
          skippedCount++;
      }
  });

  console.log(`Total Steps: ${totalSteps}`);
  console.log(`Passed: ${passedCount}`);
  console.log(`Failed: ${failedCount}`);
  console.log(`Skipped: ${skippedCount}`);
  console.log(`Total Duration: ${totalDuration}ms`);
  console.log(`Failed Steps: ${failedSteps.join(", ")}`);
}   
// Example usage:
const results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];  
summarizeTestResults(results);
    
