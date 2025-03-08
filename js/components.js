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


document.addEventListener("DOMContentLoaded", function () {
    // Wait for the navbar to load dynamically
    const checkNavbarLoaded = setInterval(() => {
        const navLinks = document.querySelectorAll("#navbar-container nav ul li a");

        if (navLinks.length > 0) { // Ensure navbar is loaded
            clearInterval(checkNavbarLoaded);

            const currentPage = window.location.pathname.split("/").pop() || "index.html";

            navLinks.forEach(link => {
                const linkHref = link.getAttribute("href").split("/").pop();

                if (linkHref === currentPage || (currentPage === "" && linkHref === "index.html")) {
                    link.classList.add("active");
                    console.log("Active link applied:", linkHref); // Debugging
                }
            });
        }
    }, 100); // Check every 100ms until navbar is loaded
});




//read more link 
function toggleReadMore(contentId, linkElement) {
    var content = document.getElementById(contentId);
    
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "inline";
        linkElement.textContent = "Read Less";
    } else {
        content.style.display = "none";
        linkElement.textContent = "Read More";
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");

    function handleScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on page load
});


