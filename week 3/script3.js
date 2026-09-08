// ===============================
// Mobile Navigation Menu
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }

});


// ===============================
// Dark Mode
// ===============================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// ===============================
// Learn More Button
// ===============================

const learnBtn = document.getElementById("learnBtn");
const message = document.getElementById("message");

learnBtn.addEventListener("click", function () {

    message.textContent =
        "JavaScript makes webpages interactive and dynamic!";

    learnBtn.textContent = "Thanks for Clicking!";

});


// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const userMessage =
        document.getElementById("messageInput").value.trim();

    const nameError =
        document.getElementById("nameError");

    const emailError =
        document.getElementById("emailError");

    const messageError =
        document.getElementById("messageError");

    const successMessage =
        document.getElementById("successMessage");


    // Clear previous messages

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";


    let isValid = true;


    // Name validation

    if (name === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;

    } else if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        isValid = false;
    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email.";

        isValid = false;
    }


    // Message validation

    if (userMessage === "") {

        messageError.textContent =
            "Please enter a message.";

        isValid = false;

    } else if (userMessage.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        isValid = false;
    }


    // Successful submission

    if (isValid) {

        successMessage.textContent =
            "Form submitted successfully!";

        contactForm.reset();

    }

});