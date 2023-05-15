// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is Your Name?',
        name: 'name',
    },
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
        message: 'Installation Instuctions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage Information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License Used:',
        name: 'license',
        choices: [
            {
                name: 'MIT', 
                value: 'MIT'
            },
            {
                name: 'ISC', 
                value: 'ISC'
            },
            {   
                name: 'APACHE 2.0',
                value: 'apache'
            }
        ]
    },
    {
        type: 'input',
        message: 'Screenshot URL(optional):',
        name: 'screenshot',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Testing Instructions:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What Email Should be Used for Questions?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is Your Github address?',
        name: 'github',
    }
];

// TODO: Create a function to write README file
const fs = require('fs');
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
};

// TODO: Create a function to initialize app
const generateReadMe = require('./generateMarkdown');
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        const page = generateReadMe(response);
        console.log(page);
        writeToFile('README.md', page);
    }
  );
};

// Function call to initialize app
init();
