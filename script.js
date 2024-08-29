document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    
    // Change button content based on mode
    if (document.body.classList.contains('dark-mode')) {
        this.innerHTML = '<img src="https://img.icons8.com/ios/50/do-not-disturb-2.png" alt="Light Mode" height="20px" width="20px"/>';
    } else {
        this.innerHTML = '<img src="https://img.icons8.com/ios-filled/50/do-not-disturb-2.png" alt="Dark Mode" height="20px" width="20px"/>';
    }
});
