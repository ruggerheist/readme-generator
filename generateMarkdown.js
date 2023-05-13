// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
//if else if

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
//if else if

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
//if else if


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //template for readme goes inside return function
  return `# ${data.title}
## Description
  - ${data.description}
## Table of Contents
  - [Installation](#installation)
  - [Usage Information](#usage)
  - [Contribution Guidelines](#contribution)
  - [Testing Instructions](#tests)
## Installation
  - ${data.installation}
## Usage
  - ${data.usage}  
## License
  - ${data.license}
## Testing Instructions
  - ${data.tests}
### Questions
  - Please direct questions about this program to ${data.name} at ${data.email}
`;
}

module.exports = generateMarkdown;
