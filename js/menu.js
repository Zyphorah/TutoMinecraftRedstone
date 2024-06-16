window.onload = function() {
    const menuIcon = document.querySelector('#menu-icon');
    const menu = document.querySelector('#main-menu');
    
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            if (menu) {
                menu.classList.toggle('show');
            }
        });
    }
};