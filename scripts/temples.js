// temples.js

// Dynamic Copyright Year
const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Dynamic Last Modified Date
const lastModifiedParagraph = document.getElementById('lastModified');
const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate.toLocaleDateString('en-US', options)}`;

// Hamburger Menu Functionality
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    if (navigation.classList.contains('open')) {
        hamButton.textContent = 'X';
    } else {
        hamButton.textContent = '☰';
    }  
});

// Set initial hamburger button text
hamButton.textContent = '☰';