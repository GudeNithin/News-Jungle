// Toggle dark mode and change button icon
document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        this.innerHTML = '<img src="https://img.icons8.com/ios/50/do-not-disturb-2.png" alt="Light Mode" height="20px" width="20px"/>';
    } else {
        this.innerHTML = '<img src="https://img.icons8.com/ios-filled/50/do-not-disturb-2.png" alt="Dark Mode" height="20px" width="20px"/>';
    }
});

// Color changing effect for the navbar brand
const colors = ["#ff6347", "#4682b4", "#32cd32", "#ff1493", "#ffa500"];
const navbarBrand = document.getElementById("navbarBrand");
let colorIndex = 0;

function changeColor() {
    navbarBrand.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeColor, 1000);

