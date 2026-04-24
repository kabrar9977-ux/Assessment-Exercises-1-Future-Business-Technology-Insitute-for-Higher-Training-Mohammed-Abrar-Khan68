let correctColor;
let lives;
let score;

function startGame() {
    lives = 3;
    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("lives").innerText = lives;
    document.getElementById("message").innerText = "";
    generateRound();
}

function generateRound() {
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    let colors = [];

    // Generate 3 random colors
    for (let i = 0; i < 3; i++) {
        colors.push(randomColor());
    }

    // Pick correct answer
    correctColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("rgbValue").innerText = correctColor;

    colors.forEach(color => {
        let box = document.createElement("div");
        box.classList.add("color-box");
        box.style.backgroundColor = color;

        box.addEventListener("click", function () {
            checkAnswer(color);
        });

        optionsDiv.appendChild(box);
    });
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function checkAnswer(selected) {
    if (selected === correctColor) {
        score++;
        document.getElementById("message").innerText = "Correct!";
    } else {
        lives--;
        document.getElementById("message").innerText = "Wrong!";
    }

    document.getElementById("score").innerText = score;
    document.getElementById("lives").innerText = lives;

    if (lives === 0) {
        document.getElementById("message").innerText =
            "Game Over! Final Score: " + score;
    } else {
        generateRound();
    }
}

// Start game on load
startGame();