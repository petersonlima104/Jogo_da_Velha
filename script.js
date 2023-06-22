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
