// blocked scope variables
// using const

const isLoggedIn = true;

if (isLoggedIn == true) { 
    const statusMessage = 'User is logged in.’;
}

console.log(statusMessage);

// Uncaught ReferenceError: statusMessage is not defined
