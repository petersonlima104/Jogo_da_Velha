// Representação do tabuleiro
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// Jogador atual
let currentPlayer = "X";

// Elemento da mensagem
const messageElement = document.querySelector(".message");

// Função para fazer uma jogada
function makeMove(row, col) {
  if (board[row][col] === "") {
    board[row][col] = currentPlayer;
    event.target.innerText = currentPlayer;
    event.target.classList.add(currentPlayer === "X" ? "playerX" : "playerO");

    if (checkWin(currentPlayer)) {
      messageElement.innerText = `O jogador ${currentPlayer} venceu!`;
      disableBoard();
    } else if (checkDraw()) {
      messageElement.innerText = "Empate!";
      disableBoard();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      messageElement.innerText = `É a vez do jogador ${currentPlayer}`;
    }
  }
}

// Função para verificar se um jogador venceu
function checkWin(player) {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] === player &&
        board[i][1] === player &&
        board[i][2] === player) ||
      (board[0][i] === player &&
        board[1][i] === player &&
        board[2][i] === player)
    ) {
      return true;
    }
  }

  if (
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    return true;
  }

  return false;
}

// Função para verificar se o jogo terminou em empate
function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === "") {
        return false;
      }
    }
  }
  return true;
}

// Função para desabilitar o tabuleiro após o fim do jogo
function disableBoard() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.add("disabled");
    square.onclick = null;
  });
}

// Função para reiniciar o jogo
function resetGame() {
  window.location.href = "index.html";
}
