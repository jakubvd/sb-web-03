document.addEventListener("DOMContentLoaded", function () {
    // Ensure GSAP and ScrollToPlugin are loaded
    if (typeof gsap === "undefined" || typeof ScrollToPlugin === "undefined") {
        console.error("GSAP or ScrollToPlugin is not loaded.");
        return;
    }

    gsap.registerPlugin(ScrollToPlugin);

    // Get button and target section
    const buttonHero = document.getElementById("button-hero");
    const targetSection = document.getElementById("contact-scroll-to-wrap");

    if (!buttonHero || !targetSection) {
        console.error("Button or target section not found.");
        return;
    }

    // Function to scroll to the target with correct offset
    function scrollToContact() {
        let offsetTop = window.innerWidth >= 992 ? 80 : 60; // 100px for 992px+, 64px for 991px-
        let duration = window.innerWidth >= 992 ? 1.5 : 1; // 1.5s for 992px+, 1s for 991px-

        gsap.to(window, {
            duration: duration,
            scrollTo: {
                y: targetSection,
                offsetY: offsetTop,
            },
            ease: "power4.out",
        });
    }

    // Add click event to button
    buttonHero.addEventListener("click", scrollToContact);
});
