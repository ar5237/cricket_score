let Scores;
let strScores = localStorage.getItem("Scores");
resetScore(strScores);
function resetScore(strScores) {
  Scores = strScores
    ? JSON.parse(strScores)
    : {
        win: 0,
        lost: 0,
        tie: 0,
      };

  Scores.displayScore = function () {
    return `Won:${Scores.win} Lost:${Scores.lost} Tie:${Scores.tie}`;
  };
  showResult();
}
// if (strScores !== undefined){
//     Scores = JSON.parse(strScores);
// }else{
//     Scores ={
//     win:0,
//     lost:0,
//     tie:0,
//     };
// }

function generateComputerChoice() {
  let randomNo = Math.random() * 3;
  if (randomNo > 0 && randomNo <= 1) {
    return "Bat";
  } else if (randomNo > 1 && randomNo <= 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove == "Ball") {
      Scores.win++;
      return "User has won";
    } else if (computerMove == "Stump") {
      Scores.lost++;
      return "Computer has won";
    } else {
      Scores.tie++;
      return "Draw";
    }
  } else if (userMove === "Ball") {
    if (computerMove == "Stump") {
      Scores.win++;
      return "User won";
    } else if (computerMove == "Bat") {
      Scores.lost++;
      return "Computer won";
    } else {
      Scores.tie++;
      return "Draw";
    }
  } else {
    if (computerMove == "Bat") {
      Scores.win++;
      return "User won";
    } else if (computerMove == "Ball") {
      Scores.lost++;
      return "Computer won";
    } else {
      Scores.tie++;
      return "Draw";
    }
  }
}

function showResult(userMove, computerMove, resultMsg) {
  localStorage.setItem("Scores", JSON.stringify(Scores));
  document.querySelector("#user-move").innerText =
    userMove !== undefined ? `User choose ${userMove}` : "";
  document.querySelector("#computer-move").innerText = computerMove
    ? `Computer Choose ${computerMove}`
    : ""; //computerMove !== undefined? `Computer Choose ${computerMove}`:''
  document.querySelector("#result").innerText = resultMsg || " "; //resultMsg !==undefined ? resultMsg:""
  document.querySelector(
    "#Score-update"
  ).innerText = `Score: ${Scores.displayScore()}`;
}