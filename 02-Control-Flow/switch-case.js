console.log("Basic Calculator");
console.log("[1] Add");
console.log("[2] Divide");
console.log("[3] Minus");

let num1 = parseInt(prompt(`Enter first number: `));
let num2 = parseInt(prompt(`Enter second number: `));
let choice = parseInt(prompt(`Enter your choice`));

switch(choice){
    case 1:
       let add = num1 + num2;
       console.log(`Answer:${add}`);
       break;
    case 2: 
       let divide = num1 / num2;
       console.log(`Answer:${divide}`);
       break;   
    case 3: 
       let minus = num1 - num2; 
       console.log(`Answer:${minus}`);
       break;
    default: 
       console.log("Choice is invalid.");        
}