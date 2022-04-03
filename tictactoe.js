function initGame() {

  const inputs = new Array(9);
  let player = 'X';
  let counter = 0;
  let winner = null;

  const playerCont = document.getElementById('player');
  const gameContainer = document.getElementById('game');
  const button = document.getElementById('startButton');

  playerCont.innerHTML = "Player " + player;
  gameContainer.innerHTML = "";
  button.innerHTML = 'RESET GAME';
  playerCont.style.color = 'black';
  gameContainer.style.backgroundColor = 'white';
  gameContainer.style.display = 'inline-block'

  for(let i = 0; i <inputs.length; i++) {
    const box = document.createElement("div");
    box.setAttribute('id', i);
    box.setAttribute('class', 'gameBox');
    box.addEventListener('click', ((k) => {
      return () => {
        gameLogic(k);
      }
    })(i), false);
    gameContainer.appendChild(box);
  }

  function gameLogic(id) {

    if(counter == 9 || winner || inputs[id]) {
      return;
    }

    const gameBox = document.getElementById(id);
    gameBox.innerHTML = player;
    inputs[id] = player;

    if(player === 'X') {
      player = 'O'
    } else if (player === 'O') {
      player = 'X'
    }
    playerCont.innerHTML = "Player " + player;
    counter++;
    winner = checkWinner();
    if(winner) {
      playerCont.innerHTML = "Player " + winner + " is Winner";
      playerCont.style.color = 'green';
      gameContainer.style.backgroundColor = '#eaeaea';
    }
  }

  function checkWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (inputs[a] && inputs[a] === inputs[b] && inputs[a] === inputs[c]) {
        for (var box of lines[i]) {
          const gameBox = document.getElementById(box);
          gameBox.style.color = 'green';
        }
        return inputs[a];
      }
    }
    return null;
  }
}
