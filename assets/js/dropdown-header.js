document.addEventListener('DOMContentLoaded', () => {
    const  btn = document.getElementById('programmes-btn');
    const  dropdown = document.querySelector('.dropdown-block');
    btn.addEventListener('click', (e) => {
        btn.classList.toggle('active');
        dropdown.classList.toggle('show');
        e.stopPropagation();
    });

    document.addEventListener('click',(e) => {
        if (dropdown && dropdown.classList.contains('show') && !e.target.closest('.dropdown-block')) {
            dropdown.classList.remove('show');
            btn.classList.remove('active');
        }
    });
})