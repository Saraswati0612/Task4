
const hamburger = document.querySelector('.hamburger');
const leftNav = document.querySelector('.left-nav');
const rightNav = document.querySelector('.right-nav');

hamburger.addEventListener('click', () => {
    leftNav.classList.toggle('active');
    rightNav.classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
         
            console.log('Form submitted');
        });
    });
});
