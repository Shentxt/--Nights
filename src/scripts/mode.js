document.addEventListener('DOMContentLoaded', function () {
    let darkModeToggle = document.getElementById('dark-mode');
    let curtain = document.querySelector('.curtain');

    let darkModeState = localStorage.getItem('darkMode');
    if (darkModeState === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
        curtain.style.transform = 'scaleY(1)';
    } else {
        document.body.classList.remove('dark-mode');
        darkModeToggle.checked = false;
        curtain.style.transform = 'scaleY(0)'; 
    }

    darkModeToggle.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark-mode');
            curtain.style.transform = 'scaleY(1)';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark-mode');
            curtain.style.transform = 'scaleY(0)';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});