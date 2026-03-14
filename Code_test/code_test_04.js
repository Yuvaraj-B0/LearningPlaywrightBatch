//Browser Execution Planner
//You have an array of all supported browsers and another array of temporarily blocked browsers.
//  Write a function that returns the runnable browsers, the blocked browsers,
//  and a printable execution plan string such as `"Run on: chromium, webkit | Skip: firefox"`.

function planBrowser(allBrowsers, blockedBrowsers) {
    const runnableBrowsers = allBrowsers.filter(browser => !blockedBrowsers.includes(browser));
    const executionPlan = `Run on: ${runnableBrowsers.join(", ")} | Skip: ${blockedBrowsers.join(", ")}`;
    return {
        runnable: runnableBrowsers,
        blocked: blockedBrowsers,
        plan: executionPlan
    };
}

let allBrowsers = ["chromium", "firefox", "webkit"]
let blockedBrowsers = ["firefox"]

const result = planBrowser(allBrowsers, blockedBrowsers);
//console.log(result.runnable);
//console.log(result.blocked);
console.log(result.plan);

