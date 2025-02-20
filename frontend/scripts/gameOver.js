// gameOver.js
window.onload = function() {
    // Get score from URL
    const queryParams = new URLSearchParams(window.location.search);
    const score = queryParams.get("score");

    // Display score if available
    if (score) {
        document.getElementById("scoreDisplay").textContent = `Your Score: ${score}`;
    }
};

// this verifies whether the isgameOver() method in game correctly detects when the gme ends


// gameOver.js

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get score from URL query parameter
    const params = new URLSearchParams(window.location.search);
    const score = params.get("score");

    // Display the score if available
    if (score != null) {
        document.getElementById("score").textContent = score;
    }
});
