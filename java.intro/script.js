let age = 19;
let name = "Esya";
let isStudent = true;
let scores = [99, 100, 100];
let person = {
    height: 157,
    weight: 52
};

function checkEligibility(age, isStudent) {
    let eligible = age >= 18 && isStudent;
    console.log(eligible);
}

function averageScore(scores) {
    let sum = scores[0] + scores[1] + scores[2];
    let average = sum / 3;
    console.log(average);
}

checkEligibility(age, isStudent);
if (age >= 18 && isStudent) {
    console.log("You qualify!");
} else {
    console.log("You do not qualify.");
}

averageScore(scores);