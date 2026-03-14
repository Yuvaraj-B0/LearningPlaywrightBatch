//Build Test Users from Arrays
//Write a JavaScript function that receives two arrays: one with names and one with roles. Return a new array of user objects in the format `{ username, email, role }`. The username should be lowercase with spaces replaced by underscores, and the email should use the domain `@playwrightbatch.com`.

//Examples:
//Input:
//names = ["Amit Kumar", "Neha Singh"], roles = ["admin", "viewer"]
//Output:
//[{ username: "amit_kumar", email: "amit_kumar@playwrightbatch.com", role: "admin" }, { username: "neha_singh", email: "neha_singh@playwrightbatch.com", role: "viewer" }]

function buildTestUsers(names, roles) {
  if (names.length !== roles.length) {
    throw new Error("Names and roles arrays must be of the same length");
  }

  return names.map((name, index) => {
    const username = name.toLowerCase().replace(/\s+/g, "_");
    const email = `${username}@playwrightbatch.com`;
    const role = roles[index];
    return { username, email, role };
  });   
}
// Example usage:
const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];
const users = buildTestUsers(names, roles);
console.log(users);

