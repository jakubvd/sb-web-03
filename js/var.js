// Ensure GSAP plugins are registered
if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
} else {
    console.error("GSAP is not loaded. Make sure gsap.min.js is included before this script.");
}

// Run the script only after DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get all variable words
    const variableWords = document.querySelectorAll(".variable-word");
    if (variableWords.length === 0) {
        console.error("No elements with class .variable-word found.");
        return;
    }

    // Set the initial index
    let index = 0;

    // Function to animate words
    function animateWords() {
        if (!variableWords[index]) return;

        // Hide the current word
        variableWords[index].style.display = "none";

        // Get the next word
        const nextIndex = (index + 1) % variableWords.length;
        const nextWord = variableWords[nextIndex];

        // Show the next word
        nextWord.style.display = "block";

        // Animate the next word using GSAP
        gsap.from(nextWord, {
            y: 88,
            duration: 0.5,
            ease: "sine.inOut",
            onComplete: () => {
                // Update the index
                index = nextIndex;
            }
        });
    }

    // Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            let loopCount = 0;
            const intervalId = setInterval(() => {
                animateWords();
                loopCount++;
                if (loopCount >= 9) {
                    // Keep the last word visible
                    variableWords[variableWords.length - 1].style.display = "block";
                    variableWords[0].style.display = "none"; // Hide the first word
                    clearInterval(intervalId);
                }
            }, 4000);

            observer.unobserve(entries[0].target);
        }
    }, { threshold: 0.5 });

    // Start observing the element
    const targetElement = document.querySelector(".variable-words-wrap");
    if (targetElement) {
        observer.observe(targetElement);
    } else {
        console.error("Element .variable-words-wrap not found.");
    }
});