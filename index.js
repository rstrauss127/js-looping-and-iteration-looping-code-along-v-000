function printBadges(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Welcome Joe! You are employee #1.`);
  }
  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function tailsNeverFails() {
  let sum = 0;
  while (maybeTrue()) {
    sum += 1;
  }
return  console.log(`You got ${sum} tails in a row!`);
}
