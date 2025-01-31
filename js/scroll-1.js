document.addEventListener("DOMContentLoaded", function () {
    if (typeof gsap === "undefined" || typeof ScrollToPlugin === "undefined") {
        console.error("GSAP or ScrollToPlugin is not loaded. Ensure gsap.min.js and ScrollToPlugin.min.js are included.");
        return;
    }
    
    // Select button and target section
    const button = document.querySelector("#button-hero");
    const targetSection = document.querySelector("#contact-scroll-to-wrap");
    
    if (!button || !targetSection) {
        console.error("Required elements not found: #button-hero or #contact-scroll-to-wrap");
        return;
    }
    
    button.addEventListener("click", function () {
        // Check screen width to determine offset
        let offset = window.innerWidth >= 992 ? 100 : 64;
        
        gsap.to(window, {
            duration: 1.2,  // Adjust scroll duration
            ease: "power2.out",  // Smooth easing
            scrollTo: {
                y: "#contact-scroll-to-wrap",
                offsetY: offset,
            }
        });
    });
});
