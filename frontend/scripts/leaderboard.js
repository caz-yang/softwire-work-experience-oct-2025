async function fetchScores(host) {
    let backendUrl = new URL(host);
    backendUrl.port = 3000;
    const res = await fetch(`${backendUrl.origin}/api/scores`);
    const leaderboard = await res.json();
    return leaderboard.data;
  }

function leaderboard_scores () {
    let scores = fetchScores("http://localhost");
    console.log(scores);
    let top_five_scores = scores[0, 4];
    console.log(top_five_scores);
}

window.onload = function() {
    leaderboard_scores();
}
