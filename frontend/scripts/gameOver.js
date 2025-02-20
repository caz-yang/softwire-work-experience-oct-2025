document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const score = params.get("score");

    if (score != null) {
        document.getElementById("score").textContent = score;
    }
});
