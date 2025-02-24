// Create a program which takes user's name as input to show them a pre-defined greeting message

// // Type 1: Normal Method
//     const nameInput = prompt("Hi there! What's your name?");

//     // Non-hoisted
//     // const createGreeting = function(userName) {
//     //     return(`Welcome back ${userName}, how was your day!`)
//     // };

//     greetMessage = createGreeting(nameInput);
//     alert(greetMessage);

//     // Hoisted
//     function createGreeting(userName) {
//         return(`Welcome back ${userName}, how was your day!`)
//     };


// // Type 2: Using anonymous function (Less compact)
//     const nameInput = prompt("Authenticate yourself");

//     // Anonymous function. Non-hoisted
//     const createGreeting = nameInput => `Access granted to user ${nameInput}.`

//     const greetMessage = createGreeting(nameInput);
//     alert(greetMessage);


// // Type 3: Using anonymous function & IIFE (Immediately Invoked Function Execution) (More compact)
//     const nameInput = prompt("May I know your name?");

//     // IIFE: Anon func immediately called just after declaring
//     greetMessage = (userName => `Hey ${nameInput}, how are you?`)(nameInput);
//     alert(greetMessage);


// The Ultimate One liner
alert( ((userName) => `Hey ${userName}! Glad to see you back.`) (prompt('Please tell me your name!')) );
