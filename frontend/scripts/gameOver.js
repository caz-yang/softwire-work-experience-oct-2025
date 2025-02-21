document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const score = params.get("score");

    if (score != null) {
        document.getElementById("score").textContent = score;
    }
});

document.getElementById("save-score-button").addEventListener("click", () => {
    let name = document.getElementById("name-input").value;
    let score = Number.parseInt(document.getElementById("score").textContent);

    if (name == "") {
        alert("cannot have an empty name");
        return;
    }

    let data = {
        "name": name,
        "score": score
    }

    fetch("http://localhost:3000/api/save-score", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).then( _ => {
        let button = document.getElementById("save-score-button");
        button.disabled = true;
        button.textContent = "score saved"
    });

})