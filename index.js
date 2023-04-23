// include fs to write files, inquirer to ask for user input, and generateMarkdown to create the README.md
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const licenseSelection = ["Apache 2.0", "BSD 3-Clause", "GPL 3.0", "ISC", "MIT", "N/A"];

function validateUserInput(input){
    if (input === "") {
        return 'Section input cannot be left blank. If section does not apply, please enter "N/A"';
    }
    else {
        return true;
    }
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter the title of your project:",
        validation: validateUserInput
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a descritpion for your project:",
        validation: validateUserInput
    },
    {
        type: "input",
        name: "installation",
        message: "Please describe any installation instructions associated with your project:",
        validation: validateUserInput
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how to use your project:",
        validation: validateUserInput
    },
    {
        type: "input",
        name: "credits",
        message: "List your collaborators and third-party assets you used, if any:",
        validation: validateUserInput
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license:",
        choices: licenseSelection,
        validation: validateUserInput
    },
    {
        type: "input",
        name: "features",
        message: "Please list and describe any noteworthy features of your project:",
        validation: validateUserInput
    },
    {
        type: "input",
        name: "contributing",
        message: "Please describe how users can contribute to your project:",
        validation: validateUserInput
    },
    {
        type: "input",
        name: "tests",
        message: "If you wrote any tests for your project, please describe them:",
        validation: validateUserInput
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address so users can contact you:",
        validation: validateUserInput
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your GitHub username so users can find you:",
        validation: validateUserInput
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const fileName = "./generated_README/README.md"

    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        err ? console.log(err) : console.log("Woot! " + fileName + " Successfully Generated!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then(data) (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
