/*As an SDET, you frequently need to generate test data for form testing.
Write a JavaScript program that generates test user data using a for loop. 
Each user should have a unique ID (USR-0001 format), name, email,
 and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing).
  Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).*/


const roles = ["admin", "editor", "viewer", "tester", "manager"];
var userCount = 8;
for(let i=1; i<=userCount; i++){
    let userId = `USR-${i.toString().padStart(4, '0')}`;
    let userName = `TestUser${i}`;
    let userEmail = `TestUser_${i}@testingacademy.com`;
    let userRole = roles[(i-1)%roles.length];
    let isActive = (i % 3 !== 0); // Every 3rd user is inactive

    console.log(`User ID: ${userId} | Name: ${userName} | Email: ${userEmail} | Role: ${userRole} | Active: ${isActive}`);
}
