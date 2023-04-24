// per multiple web resources, the 5 most common licenses are: MIT, Apache 2.0, GNU GPL, BSD, & ISC. 
// thus, these are the ones I will offer to users



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""

  switch(license) {
    case "Apache 2.0":
      badge = "![License](https://img.shields.io/badge/License-Apache_2.0-red.svg)";
      break;

    case "BSD 3-Clause":
      badge = "![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)";
      break;

    case "GPL 3.0":
      badge = "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
      
    case "ISC":
      badge = "![License](https://img.shields.io/badge/License-ISC-yellow.svg)";
      break;
    
    case "MIT":
      badge = "![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)";
      break;

    default:
      badge = "";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ""
  switch(license) {
    case "Apache 2.0":
      link = "https://opensource.org/licenses/Apache-2.0";
      break;

    case "BSD 3-Clause":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;

    case "GPL 3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
      
    case "ISC":
      link = "https://opensource.org/licenses/ISC";
      break;
    
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;

    default:
      link = "";
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ""

  if (license != "N/A") {
    licenseSection = "## License " + renderLicenseBadge(license);
    licenseSection += "\nThis application is covered under the " + "[" + license + "](" + renderLicenseLink(license) + ") license.";
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Set any blank values to "N/A"
  for (const key in data) {
    if (!data[key]) {
      data[key] = "N/A";
    }
  }

  let tableOfContents = `
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
`

if (data.license !== "N/A"){
  tableOfContents += `* [License](#license)`;
}

tableOfContents += `
* [Features](#features)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
`;

return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents
${tableOfContents}

## Intallation 
${data.installation}

## Usage 
${data.usage}

## Credits 
${data.credits}

${renderLicenseSection(data.license)}

## Features 
${data.features}

## Contributing 
${data.contributing}

## Tests 
${data.tests}

## Questions 
* You can find me on GitHub at [${data.username}](github.com/${data.username}). 
* Please do not hesitate to reach out to me via my email: ${data.email}.
`;
}

module.exports = generateMarkdown;
