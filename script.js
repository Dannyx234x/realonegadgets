
// ===============================================
// REAL ONE GADGETS
// Main JavaScript
// ===============================================


// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    // Close menu when a navigation link is clicked
    const navLinks = navbar.querySelectorAll("a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


// ===============================================
// CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
// ===============================================

document.addEventListener("click", (event) => {

    if (!navbar || !menuBtn) return;

    const clickedNavbar = navbar.contains(event.target);
    const clickedButton = menuBtn.contains(event.target);

    if (
        !clickedNavbar &&
        !clickedButton &&
        navbar.classList.contains("active")
    ) {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// ===============================================
// CLOSE MENU AFTER SCREEN RESIZE
// ===============================================

window.addEventListener("resize", () => {

    if (!navbar || !menuBtn) return;

    if (window.innerWidth > 850) {

        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// ===============================================
// SMOOTH INTERNAL NAVIGATION
// ===============================================

const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetID = this.getAttribute("href");

        if (!targetID || targetID === "#") return;

        const targetSection = document.querySelector(targetID);

        if (!targetSection) return;

        event.preventDefault();

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// ===============================================
// HEADER SHADOW WHEN SCROLLING
// ===============================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 40) {

        header.style.boxShadow =
            "0 8px 30px rgba(36, 16, 79, 0.10)";

    } else {

        header.style.boxShadow = "none";

    }

});


// ===============================================
// PRODUCT ORDER BUTTONS
// ===============================================

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(button => {

    button.addEventListener("click", () => {

        console.log("Customer opened a product order.");

    });

});
