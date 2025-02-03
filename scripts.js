// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const leftNav = document.querySelector('.left-nav');
const rightNav = document.querySelector('.right-nav');

hamburger.addEventListener('click', () => {
    leftNav.classList.toggle('active');
    rightNav.classList.toggle('active');
});

// Form validation
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    });
});