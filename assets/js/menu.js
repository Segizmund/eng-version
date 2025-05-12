document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.burger');
    const mainMenu = document.querySelector('.main-menu > nav');
    const burgerCheckbox = document.getElementById('burger-checkbox');
    const body = document.querySelector('body')

    const btn = document.getElementById('programmes-btn');
    const dropdown = document.querySelector('.dropdown-block');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        btn.classList.toggle('active');
        dropdown.classList.toggle('show');
    });

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mainMenu.classList.toggle('show');
        body.classList.toggle('no-scroll');
    });

    document.addEventListener('click', (e) => {
        if (dropdown && dropdown.classList.contains('show') && !dropdown.contains(e.target) && e.target !== btn) {
            dropdown.classList.remove('show');
            btn.classList.remove('active');
        }

        if (mainMenu && mainMenu.classList.contains('show') && e.target !== menuBtn && !mainMenu.contains(e.target) && e.target !== burgerCheckbox) {
            mainMenu.classList.remove('show');
            body.classList.remove('no-scroll');
            burgerCheckbox.checked = false;
        }
    });
});