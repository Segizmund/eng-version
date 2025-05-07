document.addEventListener('DOMContentLoaded', () => {
    let btn = document.getElementById('programmes-btn');
    let dropdown = document.querySelector('.dropdown-block');
    btn.addEventListener('click', (e) => {
        btn.classList.toggle('active');
        dropdown.classList.toggle('show');
    })
})