// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure the request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

// Define a function to handle the response
xhr.onload = function() {
    if (xhr.status === 200) {
        // Parse the JSON response
        const users = JSON.parse(xhr.responseText);
        
        // Extract user names and log them to the console
        console.log("User Names:");
        users.forEach(user => {
            console.log(user.name);
        });
        
        // Output to browser console
        const consoleOutput = users.map(user => user.name).join(", ");
        console.log(consoleOutput);
    } else {
        console.error('Request failed. Status:', xhr.status);
    }
};

// Send the request
xhr.send();
