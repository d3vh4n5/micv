const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
});