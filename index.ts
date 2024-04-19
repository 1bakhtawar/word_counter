#! /usr/bin/env node

//This line is called a shang. It tells the OS to run it with nodejs

import inquirer from "inquirer";
import chalk from "chalk";

//Declare a constant "answer" and assign it to the result of inquirer.prompt function

console.log(chalk.bold.cyanBright("\n \t \t Start the word count "));
console.log("=".repeat(60));

const answer : {
    sentence: string
} = await inquirer.prompt([
        {
            name: "sentence",
            type: "input",
            message: chalk.bold.blue("Ënter your sentence to count the word")
        }
])
const word = answer.sentence.trim().split(" ")



console.log("=".repeat(60));
console.log(chalk.bold(" Sentence word "));
//print the array of words to the console

console.log(word)
console.log("=".repeat(60));

const myName = "    Muhammad Ali    "

// print the word count of the sentence to the console
console.log(chalk.bold.blue`Your sentence word count is ${word.length}`);
