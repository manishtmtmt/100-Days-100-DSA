const scoreCard = [
  ["rancho", 45],
  ["chatur", 32], // i
  ["raju", 30],
  ["farhan", 28],
  ["virus", 32],
  ["joy", 45], // j, min
];

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

// const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

const makeALeaderboard = (scoreCard) => {
  for (let i = 0; i < scoreCard.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < scoreCard.length; j++) {
      if (scoreCard[j][1] > scoreCard[min][1]) {
        min = j;
      }
    }
    swap(scoreCard, i, min);
  }

  for (let i = 0; i < scoreCard.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < scoreCard.length; j++) {
      if (scoreCard[j][1] === scoreCard[min][1] && scoreCard[j][0] < scoreCard[min][0]) {
        min = j;
      }
    }
    swap(scoreCard, i, min)
  }

  let rank = 1;
  let currRank = 1;

  console.log(`${rank} ${scoreCard[0][0]}`);
  for (let i = 1; i < scoreCard.length; i++) {
    currRank++;
    if (scoreCard[i][1] === scoreCard[i - 1][1]) {
      console.log(`${rank} ${scoreCard[i][0]}`);
    } else {
      rank = currRank;
      console.log(`${rank} ${scoreCard[i][0]}`);
    }
  }
};

makeALeaderboard(scoreCard);
