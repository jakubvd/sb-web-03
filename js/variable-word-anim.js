// Description: Variable word animation for the footer.
document.addEventListener('DOMContentLoaded', function () {
  // Get the variable words
  const variableWords = document.querySelectorAll('.variable-word');

  // Set the initial index
  let index = 0;

  // Function to animate the words
  function animateWords() {
    // Get the current word
    const currentWord = variableWords[index];

    // Hide the current word
    currentWord.style.display = 'none';

    // Get the next word
    const nextIndex = (index + 1) % variableWords.length;
    const nextWord = variableWords[nextIndex];

    // Show the next word
    nextWord.style.display = 'block';

    // Animate the next word in
    gsap.from(nextWord, {
      y: 88,
      duration: 0.5,
      ease: 'sine.inOut',
      onComplete: () => {
        // Update the index
        index = nextIndex;
      }
    });
  }

  // Create an observer to start the animation when the element comes into view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      // Loop the animation 3 times (9 slides)
      let loopCount = 0;
      const intervalId = setInterval(() => {
        animateWords();
        loopCount++;
        if (loopCount >= 9) {
          // Keep the last word visible
          variableWords[variableWords.length - 1].style.display = 'block';
          variableWords[0].style.display = 'none'; // Hide the first word
          clearInterval(intervalId);
        }
      }, 4000);
      observer.unobserve(entries[0].target);
    }
  }, { threshold: 0.5 });

  // Observe the element
  observer.observe(document.querySelector('.variable-words-wrap'));
});
