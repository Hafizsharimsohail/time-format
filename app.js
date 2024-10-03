function greetBasedOnTime(time) {
    let hour = parseInt(time.slice(0, 2));  // Extract hour from input

    // invalid time input
    if (hour < 0 || hour > 23) {
        document.write("Invalid time input");
        return;
    }

    // Checking time 
    if (hour >= 6 && hour < 12) {
        document.write("Good Morning!");
    } else if (hour >= 12 && hour < 4) {
        document.write("Good Afternoon!");
    } else if (hour >= 4 && hour < 7) {
        document.write("Good Evening!");
    } else {
        document.write("Good Night!");
    }
}

// Taking time input 
let userInput = prompt("Enter time in 24-hour format (e.g., 1900):");
greetBasedOnTime(userInput);