
"use strict";

// 1. Select the theme button
const themeButton = document.getElementById("themeButton");

// 2. Change the theme when the button is clicked
themeButton.addEventListener("click", function () {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    if (isDarkMode) {
        themeButton.textContent = "☀️ Theme";
        themeButton.setAttribute("aria-pressed", "true");
        themeButton.setAttribute("aria-label", "Switch to light theme");
    } else {
        themeButton.textContent = "🌙 Theme";
        themeButton.setAttribute("aria-pressed", "false");
        themeButton.setAttribute("aria-label", "Switch to dark theme");
    }
});

// 3. Select the contact form and its message area
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// 4. Handle form submission
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent =
        "Thank you! The form was checked, but no message was sent.";

    contactForm.reset();
});

// 5. Display the current year in the footer
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();

