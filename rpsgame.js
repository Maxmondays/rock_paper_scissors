function computerPlay() {
    var randomNum = Math.floor(Math.random() * Math.floor(3));
    if (randomNum === 0) return 'rock';
    if (randomNum === 1) return 'paper';
    if (randomNum === 2) return 'scissors';
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
      return 'It\s a tie! The computer also chose ' + computerSelection + '!';
    }
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
      return 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
      return 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
      return 'You win! ' + playerSelection + ' beats ' + computerSelection + '!';
    } else {
      return 'You lose! ' + computerSelection + ' beats ' + playerSelection + '!';
    }
  }
  
  function playGame(playerSelection) {
    for (i = 0; i < 5; i++) {
      const computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
    }
  }
  
  const playerSelection = prompt('Rock, Paper, or Sciccors?')
  
  playGame(playerSelection)