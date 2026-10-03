const app = document.getElementById("app");

const routes = {
    home: `
        <section class="page hero">
            <h1>Welcome to <span>My SPA</span></h1>
            <p>
                This is a Single Page Application simulation developed
                using HTML, CSS and JavaScript.
            </p>
            <a href="/services" class="btn" data-route="services">
                Explore Services
            </a>
        </section>
    `,

    about: `
        <section class="page">
            <h1>About Us</h1>
            <p>
                This project demonstrates how a Single Page Application
                works without completely reloading the browser page.
            </p>

            <div class="cards">
                <div class="card">
                    <h3>Fast</h3>
                    <p>Content changes dynamically without page reload.</p>
                </div>

                <div class="card">
                    <h3>Interactive</h3>
                    <p>JavaScript manages navigation and user interaction.</p>
                </div>

                <div class="card">
                    <h3>Responsive</h3>
                    <p>The interface works on desktop and mobile screens.</p>
                </div>
            </div>
        </section>
    `,

    services: `
        <section class="page">
            <h1>Our Services</h1>
            <p>Explore the services provided by our application.</p>

            <div class="cards">
                <div class="card">
                    <h3>Web Development</h3>
                    <p>Modern and responsive websites using frontend technologies.</p>
                </div>

                <div class="card">
                    <h3>UI Design</h3>
                    <p>Clean and user-friendly interfaces for web applications.</p>
                </div>

                <div class="card">
                    <h3>JavaScript</h3>
                    <p>Interactive features and dynamic content management.</p>
                </div>
            </div>
        </section>
    `,

    contact: `
        <section class="page">
            <h1>Contact Us</h1>
            <p>Send us a message using the form below.</p>

            <form class="contact-form" id="contactForm">
                <input type="text" placeholder="Your Name" required>
                <input type="email" placeholder="Your Email" required>
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </section>
    `
};

function getRoute() {
    const path = window.location.pathname;

    if (path === "/" || path === "/index.html") {
        return "home";
    }

    const route = path.substring(1);

    return routes[route] ? route : "error";
}

function render(route) {
    if (route === "error") {
        app.innerHTML = `
            <section class="page error">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <a href="/" class="btn" data-route="home">Go Home</a>
            </section>
        `;
    } else {
        app.innerHTML = routes[route];
    }

    updateActiveLink(route);

    if (route === "contact") {
        setupContactForm();
    }
}

function navigate(route) {
    const url = route === "home" ? "/" : "/" + route;

    history.pushState({ route: route }, "", url);

    render(route);
}

function updateActiveLink(route) {
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.classList.remove("active");

        if (link.dataset.route === route) {
            link.classList.add("active");
        }
    });
}

document.addEventListener("click", function (event) {
    const link = event.target.closest("[data-route]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const route = link.dataset.route;

    navigate(route);
});

window.addEventListener("popstate", function () {
    render(getRoute());
});

function setupContactForm() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        alert("Thank you! Your message has been submitted.");

        form.reset();
    });
}

render(getRoute());