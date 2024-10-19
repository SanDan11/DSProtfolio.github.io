document.addEventListener("DOMContentLoaded", function() {
    const numStars = 200; // Adjust the number of stars as needed
    const starsContainer = document.getElementById('stars');

    // Function to generate a random number within a range
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to create a star
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        const x = randomInRange(0, window.innerWidth); // Random horizontal position
        const y = randomInRange(0, window.innerHeight); // Random vertical position
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        starsContainer.appendChild(star);
        // Randomly adjust the animation delay for each star
        star.style.animationDelay = randomInRange(0, 5) + 's'; // Adjust the range of delay as needed
    }

    // Create stars
    for (let i = 0; i < numStars; i++) {
        createStar();
    }
});
