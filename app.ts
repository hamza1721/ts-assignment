
import inquirer from "inquirer";

const response = await inquirer.prompt([
    {
        name: "total_words",
        type: "input",
        message: "Write something...",
    },
]);

let wordModi1 = response.total_words.trim(); // remove all extra spaces from the starting of the string.
console.log(wordModi1);
if (wordModi1 === "") {
    console.log("Opp's! You didn't right character");
} else {
    let wordModi2 = wordModi1.replace(/ +/g, " "); // remove extra spaces from whole string.
    console.log(wordModi2);
    let split_WORDS = wordModi2.split(" "); // split the string from single whitespace and returns an array.
    console.log(`The length is ${split_WORDS}`);
    let sentenceLength = split_WORDS.length;
    console.log(`The length is ${sentenceLength}`);
}

