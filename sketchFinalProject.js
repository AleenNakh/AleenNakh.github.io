//I used the code from this website as my base https://www.geeksforgeeks.org/whack-a-mole-game-using-html-css-and-javascript/
//I examined the code from this link to get a better idea of negative vs postiive action in the game: https://github.com/ImKennyYip/whac-a-mole/blob/master/mole.js

document.addEventListener("DOMContentLoaded", function () {
    const holes = document.querySelectorAll(".hole");
    const startButton = document.getElementById("startButton");
    const endButton = document.getElementById("endButton");
    const scoreDisplay = document.getElementById("score");
    const timerDisplay = document.getElementById("timer");

    let timer;
    let score = 0;
    let countdown;
    let moleInterval;
    let gameOver = true;

    function comeout() {
        holes.forEach(hole => {
            hole.classList.remove('happy-cat', 'angry-cat');
            hole.removeEventListener('click', handleCatClick);
        });

        let random = holes[Math.floor(Math.random() * 9)];
        // Randomly decide if it's a happy or angry cat
        let isHappyCat = Math.random() > 0.3; 
        
        if (isHappyCat) {
            random.classList.add('happy-cat');
            random.dataset.catType = 'happy';
        } else {
            random.classList.add('angry-cat');
            random.dataset.catType = 'angry';
        }
        
        random.addEventListener('click', handleCatClick);
    }

    function handleCatClick() {
        if (!gameOver) {
            if (this.dataset.catType === 'happy') {
                score += 10;
            } else {
                score = Math.max(0, score - 5); // Prevent negative scores
            }
            scoreDisplay.textContent = `Score: ${score}`;
        }
        this.classList.remove('happy-cat', 'angry-cat');
    }

   
    function startGame() {
        if (!gameOver) return;
        
        gameOver = false;
        score = 0;
        scoreDisplay.textContent = `Score: ${score}`;
        timer = 60;
        timerDisplay.textContent = `Time: ${timer}s`;

        startButton.disabled = true;
        endButton.disabled = false;

        countdown = setInterval(() => {
            timer--;
            timerDisplay.textContent = `Time: ${timer}s`;

            if (timer <= 0) {
                clearInterval(countdown);
                gameOver = true;
                alert(`Game Over!\nYour final score: ${score}`);
                startButton.disabled = false;
                endButton.disabled = true;
            }
        }, 1000);

        moleInterval = setInterval(() => {
            if (!gameOver) comeout();
        }, 1000);
    }

    function endGame() {
        clearInterval(countdown);
        clearInterval(moleInterval);
        gameOver = true;
        alert(`Game Ended!\nYour final score: ${score}`);
        score = 0;
        timer = 60;
        scoreDisplay.textContent = `Score: ${score}`;
        timerDisplay.textContent = `Time: ${timer}s`;
        startButton.disabled = false;
        endButton.disabled = true;
        
        // Clear any remaining cats
        holes.forEach(hole => {
            hole.classList.remove('happy-cat', 'angry-cat');
        });
    }

    startButton.addEventListener("click", startGame);
    endButton.addEventListener("click", endGame);
});


