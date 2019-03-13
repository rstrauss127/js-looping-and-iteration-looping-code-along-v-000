function printBadges(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
}
function maybeTrue() {
  return ;
}

function tailsNeverFails() {
  let sum = 0;


  while (Math.random() >= 0.5) {
    sum += 1;
  }
return  console.log(`You got ${sum} tails in a row!`);
}
