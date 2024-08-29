document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    
    // Change button content based on mode
    if (document.body.classList.contains('dark-mode')) {
        this.innerHTML = '<img src="https://img.icons8.com/ios/50/do-not-disturb-2.png" alt="Light Mode" height="20px" width="20px"/>';
    } else {
        this.innerHTML = '<img src="https://img.icons8.com/ios-filled/50/do-not-disturb-2.png" alt="Dark Mode" height="20px" width="20px"/>';
    }
});

// Array of colors to cycle through
const colors = ["#ff6347", "#4682b4", "#32cd32", "#ff1493", "#ffa500"]; 

// Select the navbar brand element
const navbarBrand = document.getElementById("navbarBrand");

let colorIndex = 0;

// Function to change color
function changeColor() {
    navbarBrand.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
}

// Change color every 1 second (1000ms)
setInterval(changeColor, 1000);
