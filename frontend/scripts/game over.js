// new page for game over

//<button onclick = > Back to Game Page </button>
//<button onclick = >Home Page</button>
//<button onclick = > Credits Page</button>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../styles/credits.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <title>Credits</title>
</head>

<body>
    <h1>"Game Over"</h1>
    <h2> "Score:"</h2>
    <h2></h2>

    <button id="CreditsButton">Credits</button>
    document.getElementById("creditsButton").addEventListener("click", function() {
        window.location.href = "credits.html";
    });

    <button id="HomeButton">HomePage</button>
    document.getElementById("HomeButton").addEventListener("click",function(){
        window.location.href = "index.html";
    });

    <button id="GameButton">GamePage</button>
    document.getElementById("gameButton").addEventListener("click", function() {
        window.location.href = "game.html";
    });
</body>

