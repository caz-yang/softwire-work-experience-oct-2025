async function fetchScores(host) {
    let backendUrl = new URL(host);
    backendUrl.port = 3000;
    const res = await fetch(`${backendUrl.origin}/api/scores`);
    const leaderboard = await res.json();
    return leaderboard.data;
  }

async function leaderboard_scores () {
    let scores = await fetchScores("http://localhost");

    let leaderboard_table = `"<table id="leaderboard"><tr><th>RANK</th><th>PLAYER</th><th>SCORE</th></tr>"`;

    let index = 1;
    scores.map(user => {
        let tableRow = "<tr><td>" + index + "</td><td>" + user.player_name + "</td><td>" + user.score + "</td></tr>";
        leaderboard_table += tableRow;
        index++;
    });
    leaderboard_table += "</table>";
  
    let container = document.getElementById('leaderboard-container');
    container.innerHTML = leaderboard_table;
}

leaderboard_scores();
