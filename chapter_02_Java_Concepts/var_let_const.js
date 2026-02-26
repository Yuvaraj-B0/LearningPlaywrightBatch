// var - Function Scoped

console.log("Var Example");
 var a = 10; // Global Scope
 console.log(a);

// // Defination of the function
 function printHello(){
         console.log("Hello TheTestingAcademy!");
        var a = 20; // Local Scope
        console.log(a);
        if(true){
            var a = 30;
            console.log(a); // 30
        }
         console.log("F ->",a);
 }

printHello();

// let - Block Scoped
console.log("Let Example");

let b = 10; // Global Scope
console.log(b); 
function printHelloLet(){
    console.log("Hello TheTestingAcademy!");
   let b = 20; // Local Scope
   console.log(b);  
    if(true){
        let b = 30;
        console.log(b); // 30
    }
     console.log("F ->",b);
}   
printHelloLet();

// const - Block Scoped and cannot be re-assigned  
console.log("Const Example");
 
const c = 10;
// c = 20; // This will throw an error because const cannot be reassigned
console.log(c);
function printHelloConst(){
    console.log("Hello TheTestingAcademy!");
    const c = 20; // Local Scope
    console.log(c);
    if(true){
        const c = 30;
        console.log(c); // 30
    }
        console.log("F ->",c);
}
printHelloConst();
