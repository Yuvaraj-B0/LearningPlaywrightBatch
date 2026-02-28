/*After a test suite runs, you receive an array of test results 
(strings: "pass", "fail", "skip"). Write a JavaScript program using a for loop that 
counts how many tests passed, failed, and were skipped. Print a test report with total 
tests, counts, pass rate percentage, and a verdict 
(all passed → ready for release, ≤2 failures → review, >2 failures → block release).*/

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCount = 0;
let failCount = 0;
let skipCount = 0;
for(let i=0; i<testResults.length; i++){
    if(testResults[i] == "pass"){
        passCount++;
    }

    else if(testResults[i] == "fail"){
        failCount++;
    }

    else if(testResults[i] == "skip"){
        skipCount++;
    }
}

let totalTests = testResults.length;
let passRate = (passCount / totalTests) * 100;
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Skipped: ${skipCount}`);
console.log(`Pass Rate: ${passRate.toFixed(2)}%`);
if(failCount == 0){
    console.log("Verdict: Ready for release");  
} else if(failCount <= 2){
    console.log("Minor failures. Review before release");
} else {
    console.log("Verdict: Block release");
}


