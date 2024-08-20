// Que 1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.
// The inner function should access both the parameter of outerFunction and a variable declared within
// outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these
// variables even after outerFunction has finished executing.

// Sol: 

    function outerFunction(param) {
    let outerVariable = "I am outside!";

    function innerFunction() {
    console.log("Parameter: " + param);
    console.log("Outer variable: " + outerVariable);
    }

    return innerFunction;
    }

    const inner = outerFunction("Hello, world!");
    inner();

// Explanation:
//     outerFunction takes a parameter and has a variable inside it.

//     innerFunction can access both the parameter and the variable from outerFunction.

//     Even after outerFunction finishes, innerFunction still remembers those variables, thanks to lexical scoping.
    
//     When we call inner(), it prints both the parameter and the variable.

