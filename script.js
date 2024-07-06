// script.js

// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to contact form submit button
document.querySelector('#contact button').addEventListener('click', event => {
    event.preventDefault();
    const form = document.querySelector('#contact form');
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Send form data to server or perform other action
});
// Add event listener to hero section button
document.querySelector('#hero button').addEventListener('click', event => {
    event.preventDefault();
    const heroSection = document.querySelector('#hero');
    heroSection.classList.add('animate');
    setTimeout(() => {
        heroSection.classList.remove('animate');
    }, 2000);
});

// Add event listener to pricing section buttons
document.querySelectorAll('#pricing button').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();
        const pricingSection = document.querySelector('#pricing');
        pricingSection.classList.add('animate');
        setTimeout(() => {
            pricingSection.classList.remove('animate');
        }, 2000);
    });
});

// Add event listener to contact section button
document.querySelector('#contact button').addEventListener('click', event => {
    event.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection.classList.add('animate');
    setTimeout(() => {
        contactSection.classList.remove('animate');
    }, 2000);
});

// Add animation to hero section
document.querySelector('#hero').addEventListener('animationend', event => {
    if (event.animationName === 'animate') {
        const heroSection = document.querySelector('#hero');
        heroSection.classList.remove('animate');
    }
});

// Add animation to pricing section
document.querySelector('#pricing').addEventListener('animationend', event => {
    if (event.animationName === 'animate') {
        const pricingSection = document.querySelector('#pricing');
        pricingSection.classList.remove('animate');
    }
});

// Add animation to contact section
document.querySelector('#contact').addEventListener('animationend', event => {
    if (event.animationName === 'animate') {
        const contactSection = document.querySelector('#contact');
        contactSection.classList.remove('animate');
    }
});