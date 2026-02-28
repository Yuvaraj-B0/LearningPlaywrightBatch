/* Write a JavaScript program that simulates a login system with brute-force detection.
   The system should lock the account after 3 consecutive failed attempts.
   Use a do...while loop to process login attempts from an array.
   Demonstrate var (global counter), let (loop variables), and const (credentials and threshold).
   Validate using strict equality (===) and logical operators (&&).
*/

const correctUsername = "admin@testingacademy.com";
const correctPassword = "Test@1234";
const MAX_ATTEMPTS = 3; // Lock after 3 failed attempts

var failedAttempts = 0; // global counter

let loginAttempts = [
    { username: "admin@testingacademy.com", password: "wrongpassword" },
    { username: "admin@testingacademy.com", password: "wrongpassword2" },
    { username: "admin@testingacademy.com", password: "wrongpassword3" },
    { username: "admin@testingacademy.com", password: "Test@1234" }
];

let attemptIndex = 0;
let isLocked = false;

do {
    let attempt = loginAttempts[attemptIndex];

    // If account is already locked
    if (isLocked) {
        console.log(`Attempt ${attemptIndex + 1}:  ACCOUNT LOCKED - Rejected`);
    }
    else if (
        attempt.username === correctUsername &&
        attempt.password === correctPassword
    ) {
        console.log(`Attempt ${attemptIndex + 1}:  SUCCESS - Logged in`);
    }
    else {
        failedAttempts++;
        console.log(
            `Attempt ${attemptIndex + 1}:  FAILED - Strike ${failedAttempts}/${MAX_ATTEMPTS}`
        );

        if (failedAttempts === MAX_ATTEMPTS) {
            console.log(" ACCOUNT LOCKED");
            isLocked = true;
        }
    }

    attemptIndex++;

} while (attemptIndex < loginAttempts.length);