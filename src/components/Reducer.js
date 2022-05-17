// In this function we have an array of choices with rock, paper scissors
// we have a variable called randomNumber in which it will choose a random number from 1 to 3
import { toast } from 'react-toastify';
// we return choices index of randomNumber
function getCpuChoice() {
    const choices = ['rock', 'paper', 'scissors'];
   /* Generating a random number from 0 to 2. */
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
/* In this reducer function we take the score that has a value of 
      { userCore: 0,
        pcScore:0}
   and take the action 

   we declare a variable called cpuChoice to store the answer of the cpu calling the function getCpuChoice .
   we store the value of action.type that we got from the dispatch in a userChoice variable.
  */
const Reducer = (score, action) => {
   /* Getting the user choice and the cpu choice. */
    const cpuChoice = getCpuChoice();
    const userChoice = action.type;
   /**
    * When the user clicks the button, the function will display a toast message with the answer to the
    * question. who won?
    */
    const notify = () => toast(score.answer, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
     
    });
    // if the userChoice == clear the scores will return to 0
    if (userChoice === 'clear') {
      return {
        userScore: 0,
        pcScore: 0,
      };
    }
    // we take the userChoice and the cpuChoice and unite them as a single string and user it as our cases
    switch (userChoice + cpuChoice) {
      // if user wins userScore will increment by 1
      case 'rockscissors':
      case 'paperrock':
      case 'scissorspaper':
        score = {
           userScore: score.userScore + 1,
           pcScore: score.pcScore,
           answer: `You win, the pc choose ${cpuChoice}`,
          }
          notify()
        console.log(score)
        return   score
      // if the user loses pcScore will increment by 1
      case 'rockpaper':
      case 'paperscissors':
      case 'scissorsrock':
        score = {
          userScore: score.userScore, 
          pcScore: score.pcScore + 1,
          answer: `You lose, the pc choose ${cpuChoice}`,
        }
        notify()
        console.log(score)
        return score
      // if its a draw just let the user know its a draw
      case 'rockrock':
      case 'paperpaper':
      case 'scissorsscissors':
        console.log(score)
        score = {
          userScore: score.userScore, 
          pcScore: score.pcScore,
          answer: `Its a draw, the pc choose ${cpuChoice}`,
        }
       notify()
        return  score
      default: 
        console.log('lets play Rock Paper Scissors')
    }
  };

export default Reducer
