// per multiple web resources, the 5 most common licenses are: MIT, Apache 2.0, GNU GPL, BSD, & ISC. 
// thus, these are the ones I will offer to users



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = ""
  switch(license) {
    case "Apache 2.0":
      badge = "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
      break;

    case "BSD":
      badge = "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
      break;

    case "GPL":
      badge = "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
      
    case "ISC":
      badge = "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
      break;
    
    case "MIT":
      badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
