// Display the initial message
console.log("Welcome to Holberton School, what is your name?");

// Setup stdin to read user input
process.stdin.setEncoding('utf8');

/**
 * Listen for user input on stdin.
 * When user enters their name, it displays the name and then exits the process.
 * @param {string} input - The user input from stdin.
 */
process.stdin.on('data', (input) => {
    // Trim the input to remove any extra newlines or spaces
    const name = input.trim();
    // Display the user's name
    console.log(`Your name is: ${name}`);
    // Display the closing message and exit the process
    console.log("This important software is now closing");
    process.exit();
});
