const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }
    else {
      return `${userInput} is an invalid choice`;
    }
  
  };
  
  const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3);
  
    switch(num) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2: 
        return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
  
    if(userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return 'Computer won!';
      }
    }
  
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'Computer won!';
      }
      else {
        return 'You won!';
      }
    }
  
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'Computer won!';
      }
      else {
        return 'You won!';
      }
    }
    
  };
  
  const playGame = () => {
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
  
    console.log(`You: ${userChoice}`);
    console.log(`Comp: ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  