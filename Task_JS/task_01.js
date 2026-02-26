/*Grade Calculator:

Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:

A: 90-100

B: 80-89

C: 70-79

D: 60-69

F: 0-59*/

let score = 95;

if(score>=90){
    console.log("Grade: A");
} else if(score>=80){
    console.log("Grade: B");
} else if(score>=70){
    console.log("Grade: C");
} else if(score>=60){
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}