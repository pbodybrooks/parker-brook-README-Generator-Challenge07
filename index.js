// include fs to write files, inquirer to ask for user input, and generateMarkdown to create the README.md
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const licenseSelection = ["Apache 2.0", "BSD 3-Clause", "GPL 3.0", "ISC", "MIT", "N/A"];

function validateUserInput(input){
    if (input != "") {
        return true;
    }
    else {
        return "Input cannot be left blank.";
    }
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project:",
        validate: validateUserInput
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a descritpion for your project:",
        validate: validateUserInput
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe any installation instructions associated with your project:",
        validate: validateUserInput
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how to use your project:",
        validate: validateUserInput
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators and third-party assets you used, if any:",
        validate: validateUserInput
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license:",
        choices: licenseSelection,
        validate: validateUserInput
    },
    {
        type: "input",
        name: "features",
        message: "Please list and describe any noteworthy features of your project:",
        validate: validateUserInput
    },
    {
        type: "input",
        name: "contributing",
        message: "Please describe how users can contribute to your project:",
        validate: validateUserInput
    },
    {
        type: "input",
        name: "tests",
        message: "If you wrote any tests for your project, please describe them:",
        validate: validateUserInput
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address so users can contact you:",
        validate: validateUserInput
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username so users can find you:",
        validate: validateUserInput
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const fileName = "./generated_README/README.md"

    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        err ? console.log(err) : console.log("Woot! " + fileName + " Successfully Generated!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => writeToFile(data))
}

// Function call to initialize app
init();
