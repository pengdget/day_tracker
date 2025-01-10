// Initialize the counter and last reset date
let lastReset = localStorage.getItem('lastReset') || new Date().toISOString();

// Update the counter on the page every second
function updateCounter() {
    const now = new Date();
    const lastResetDate = new Date(lastReset);

    // Calculate the time difference in seconds
    const timeDifference = Math.floor((now - lastResetDate) / 1000);

    // Convert seconds to days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (24 * 3600));
    const hours = Math.floor((timeDifference % (24 * 3600)) / 3600);
    const minutes = Math.floor((timeDifference % 3600) / 60);
    const seconds = timeDifference % 60;

    // Update the counter display
    document.getElementById('counter').textContent = 
        `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

// Reset the counter and update local storage
function resetCounter() {
    lastReset = new Date().toISOString();
    localStorage.setItem('lastReset', lastReset);
    updateCounter();
}

// Run the update function on page load and every second
updateCounter();
setInterval(updateCounter, 1000);
