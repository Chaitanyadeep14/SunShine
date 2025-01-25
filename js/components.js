// Function to dynamically load components (Navbar and Footer)
async function loadComponent(selector, filePath) {
    const container = document.querySelector(selector);
    if (container) {
        const response = await fetch(filePath);
        if (response.ok) {
            const html = await response.text();
            container.innerHTML = html;

            // Attach event listeners after the component is loaded
            if (selector === "#navbar-container") {
                setupHamburgerMenu();
            }

            // Adjust content padding after components are loaded
            adjustContentPadding();
        } else {
            console.error(`Failed to load ${filePath}: ${response.status}`);
        }
    }
}

// Set up the hamburger menu functionality
function setupHamburgerMenu() {
    const hamburger = document.getElementById("hamburger");
    const navbarLinks = document.querySelector("nav");

    if (hamburger && navbarLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("open"); // Toggle hamburger icon
            navbarLinks.classList.toggle("active"); // Toggle visibility of links
        });
    }
}

// Adjust padding to prevent content overlap with fixed navbar and footer
function adjustContentPadding() {
    const navbar = document.querySelector("header");
    const footer = document.querySelector("footer");
    const main = document.querySelector("main");

    if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        main.style.paddingTop = `${navbarHeight}px`;
    }

    if (footer) {
        const footerHeight = footer.offsetHeight;
        main.style.paddingBottom = `${footerHeight}px`;
    }
}

// Load Navbar and Footer components
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("#navbar-container", "components/navbar.html");
    loadComponent("#footer-container", "components/footer.html");
});
