function printBadges(a) {
  for (let i = 0; i < a.length; i++) {
    console.log(`Welcome ${a[i]}! You are employee #${i}.`);
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
