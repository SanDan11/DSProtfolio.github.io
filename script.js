document.addEventListener("DOMContentLoaded", function() {
    const numStars = 200;
    const starsContainer = document.getElementById('stars');
    
    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        const x = randomInRange(0, window.innerWidth);
        const y = randomInRange(0, window.innerHeight);
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        starsContainer.appendChild(star);


        star.style.animationDelay = randomInRange(0, 5) + 's';
    }

    function generateStars() {
        starsContainer.innerHTML = '';
        for (let i = 0; i < numStars; i++) {
            createStar();
        }
    }

    generateStars();

    window.addEventListener('resize', generateStars);
});
