/* As a performance tester, you collect API response times in milliseconds.
 Write a JavaScript program using a while loop that analyzes an array of response times and prints
  a performance report with min, max, average, and how many 
responses breached the SLA threshold (> 500ms). Use comparison operators for min/max tracking. */

let responseTimes = [120, 230, 450, 510, 180, 620];
let minTime = responseTimes[0];
let maxTime = responseTimes[0];
let totalTime = 0;
let slaBreaches = 0;
let index = 0;
let SLA_LIMIT = 500;
while(index < responseTimes.length){
    let time = responseTimes[index];
    totalTime += time;
    if(time < minTime){
        minTime = time;
    }
    if(time > maxTime){
        maxTime = time;
    }
    if(time > SLA_LIMIT){
        slaBreaches++;
    }
    index++;
}
let totalRequests = responseTimes.length;
let breachPercentage = ((slaBreaches / totalRequests) * 100).toFixed(2);
let overallStatus = slaBreaches > 0 ? " SLA VIOLATED" : " SLA MET";


console.log(`Total Requests: ${totalRequests}`);
console.log(`Min Response: ${minTime}ms`);
console.log(`Max Response: ${maxTime}ms`);
console.log(`SLA Breaches: ${slaBreaches} (${breachPercentage}%)`);
console.log(`Overall Status: ${overallStatus}`);
