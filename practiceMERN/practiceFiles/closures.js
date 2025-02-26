// What is a closure
// Ans. A closure is a function which have access to it's parent function's property even after the parent function has completed it's execution.


// Sample code example that demonstrates a closure

// function counter() {
//     let count = 0;
//     return {
//         increment: (add) => {
//             count += add;
//         },
//         getCount: () => count
//     }
// }

// let addCounter = counter();

// console.log(addCounter.getCount());
// addCounter.increment(5);
// console.log(addCounter.getCount());

/* Explanation:
Outer function: counter()
Inner function: increment() and getCount()
Working: Once the counter() function runs, the count property is retained in the memory 
    and as long as addCounter variable exist, its reference is not lost. That is how,
    inner function retains access to outer function variables.
    This retention will only be lost if addCounter is assigned another value.
*/

/* Use Cases:
    Use case 1 - When we want to create private variables which can't be accessed 
        or modified directly. Only through the functions provided.
    Use case 2 - I can't think of other use case. You tell me.
*/

/* Common Mistakes:
    1. Declaring the functions outside the return statement and calling those functions in return statement
    2. In loop, the looping parameter which we initiate and goes untill the condition is met can't be executed again
        if the loop exist in the outer function, we will have to insert the loop mechanism in inner function
    3. You tell me more mistakes
*/

/*
Exercise 2: Logging Function with Threshold

Task: Create a function called createLogger that takes a threshold value as an argument. 
    The createLogger function should return a function that takes a message and a priority level as arguments.
    The returned function should only log the message to the console 
    if the priority level is greater than or equal to the threshold.

Goal: Use closures to store the threshold value and use it to filter the log messages.
*/

function createLogger(threshold) {
    const thresValue = threshold;
    return (message, priorityLvl) => {
        if (priorityLvl > thresValue) {
            console.log(message);
        }
    }
}

const isEmergency = createLogger(5000);
isEmergency(`There is a emergency`, 500);
isEmergency(`There is a emergency`, 5050);