// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT')
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  else if (license === 'ISC')
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  else return `![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT')
    return `[License: MIT](https://opensource.org/licenses/MIT)`
  else if (license === 'ISC')
    return `[License: ISC](https://opensource.org/licenses/ISC)`
  else return `[License: Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
};
  
function renderScreenshot(data){
  if (data.screenshot)
  return `![Screenshot](${data.screenshot})`
  else return ``
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  return `# ${data.title} ${renderLicenseBadge(data.license)}
## Description
  - ${data.description}
## Table of Contents
  - [Installation](#installation-instructions)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Testing Instructions](#testing-instructions)
  - [Questions](#questions)
${renderScreenshot(data)}
## Installation Instructions
  - ${data.installation}
## Usage Information
  - ${data.usage}  
## License
  - ${renderLicenseLink(data.license)}
## Contribution Guidelines
  - ${data.contribution}
## Testing Instructions
  - ${data.tests}
### Questions
  - Please direct questions about this program to ${data.name} at ${data.email}. Questions can also be directed to my Github: ${data.github}
#### Citations
  - Used for License Badges https://github.com/badges/shields
`;
};

module.exports = generateMarkdown;

