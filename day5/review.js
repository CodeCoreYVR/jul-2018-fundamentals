// javascript review
// hash
// mix
// dictionary
// word - definition
// pulp - wet mass of paper
// ficiton - a literary work that is false or made up

// word is the key
// key are unique

// postal codes

// elections!!!
// T = Trump
// C = Clinton

let votes = ["T", "T", "T", "C", "C"];

for (let i=0; i<1000000; i++) {
  if (Math.random() > 0.5) {
    votes.push("T");
  } else {
    votes.push("C");
  }
}

// Trump is winner

// T | C
// -----
// ||| ||

// step 1. iteration
// if we are iterating over an array, we use for..of
let trump = 0;
let clinton = 0;

for (let vote of votes) {
  // console.log(vote);
  if (vote === "T") {
    trump++;
  } else if (vote === "C") {
    clinton++;
  }
}

if (trump > clinton) {
  document.write("The winner is Trump!");
} else {
  document.write("The winner is Clinton!");
}

(trump > clinton) ? document.write("The winner is Trump!") : document.write("The winner is Clinton!");
// (condition) ? true : false;



//
