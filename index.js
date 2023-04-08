const express = require('express');

const app = express();

const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the project title',
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'Enter a description of the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter any installation information for the project',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter any relevant usage information for the project',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter a link to a screenshot of your project',
        name: 'screenshot'
    },
    {
        type: 'input',
        message: 'Enter the contributors to the project',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'Enter any languages used in this project',
        name: 'languages'
    },
    {
        type: 'input',
        message: 'Enter any frameworks used in this project',
        name: 'frameworks'
    },
    {
        type: 'input',
        message: 'Enter any libraries / packages used in this project',
        name: 'libraries'
    },
    {
        type: 'input',
        message: 'Enter any tests for the project',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter your GitHub username',
        name: 'githubUsername'
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'emailAddress'
    },
    {
        type: 'rawlist',
        message: 'Enter a license for this project',
        name: 'license',
        choices: [
            'MIT',
            'IBM',
            'ISC',
            'MOZILLA',
            'OPEN DATA COMMONS',
            'PERL',
            'SIL',
            'UNLICENSE',
            'ZLIB'
        ],
        filter: (input) => input.toUpperCase(),
    },
]

const init = () => {
    inquirer.prompt(questions)
    .then((response) => {
        const { 
            projectName,
            description, 
            usage, 
            screenshot,
            contributors,
            tests, 
            githubUsername, 
            languages, 
            frameworks, 
            libraries,
            emailAddress, 
            license  
        } = response
        
    const { licenseBadge, licenseLink } = renderLicenseData(license);
    const readme =  
`
# <${projectName}>

## Description
${description}

## Table of contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
- [license](#license)

## Usage
- ${usage}:

### Screenshot
![](${screenshot})

### Built with
- ${languages}
- ${frameworks}
- ${libraries}

## Contributing
- ${contributors}

## Tests
- ${tests}

## Questions

### links
- [GitHub Username](https://github.com/${githubUsername})

### Email
- For any further question relating to this project, please contact me via email.
[Email](${emailAddress})

## License
${licenseBadge}
${licenseLink}
`

writeToFile(readme)        
    });
};
   
const writeToFile = (readme) =>  {
    fs.writeFile('README.md', readme, (err) => {
        if(err) {
            console.error(err)
        } else {
            console.log('README generated');
        };
    });
};

const renderLicenseData = (license) => {
    let licenseLink = '';
    let licenseBadge = '';

    if(license === 'MIT') {
        licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
        licenseLink = '(https://opensource.org/licenses/MIT)';
    } else if (license === 'IBM') {
        licenseBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';
        licenseLink = '(https://opensource.org/licenses/IPL-1.0)';
    } else if (license === 'ISC') {
        licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]';
        licenseLink = '(https://opensource.org/licenses/ISC)';
    } else if (license === 'MOZILLA') {
        licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
        licenseLink = '(https://opensource.org/licenses/MPL-2.0)';
    } else if (license === 'OPEN DATA COMMONS') {
        licenseBadge = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)]';
        licenseLink = '(https://opendatacommons.org/licenses/by/)' ;
    } else if (license === 'PERL') {
        licenseBadge = '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]';
        licenseLink = '(https://opensource.org/licenses/Artistic-2.0)';
    }  else if (license === 'SIL') {
        licenseBadge = '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]';
        licenseLink = '(https://opensource.org/licenses/OFL-1.1)';
    } else if (license === 'UNLICENSE') {
        licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
        licenseLink = '(http://unlicense.org/)';
    } else if (license === 'ZLIB') {
        licenseBadge = '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)]';
        licenseLink = '(https://opensource.org/licenses/Zlib)';
    }
    return {licenseLink, licenseBadge};
};

init();
