let secretNumber;
let attempts = 0;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = 'Tentativas: 0';
    document.getElementById('resetBtn').style.display = 'none';
    document.getElementById('guessInput').value = '';
}

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        return;
    }

    attempts++;
    document.getElementById('attempts').textContent = 'Tentativas: ' + attempts;

    if (guess < secretNumber) {
        document.getElementById('message').textContent = 'Tente um número maior!';
    } else if (guess > secretNumber) {
        document.getElementById('message').textContent = 'Tente um número menor!';
    } else {
        document.getElementById('message').textContent = 'Parabéns! Você acertou o número!';
        document.getElementById('resetBtn').style.display = 'block';
    }
}

function resetGame() {
    startGame();
}

// Iniciar o jogo automaticamente ao carregar a página
startGame();