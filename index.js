// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of Your Application?',
        name: 'title',
      },
    {
        type: 'input',
        message: 'What is the Description of Your Application?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'contents',
    },
    {
        type: 'input',
        message: 'Installation Instuctions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage Information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'License Used',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'Testing Instructions',
        name: 'tests',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        const page = generateReadMe(response);
        console.log(page);
        writeToFile('README.md', page);
    }
  );
};

// Function call to initialize app
init();
