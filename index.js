const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./utils/questions');

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
`# ${projectName}

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
- ${usage}

### Screenshot
![](${screenshot})

## Built with

### Programming Languages
- ${languages}
### Frameworks
- ${frameworks}
### Libraries / Packages
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
 - ${licenseLink}`

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
    } else if (license === 'APACHE') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
        licenseLink = '(https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'BOOST') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
        licenseLink = '(https://www.boost.org/LICENSE_1_0.txt)';
    } else if (license === 'BSD') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
        licenseLink = '(https://opensource.org/licenses/BSD-3-Clause)';
    } else if (license === 'CREATIVE COMMONS') {
        licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]';
        licenseLink = '(http://creativecommons.org/publicdomain/zero/1.0/)';
    } else if (license === 'ECLIPSE') {
        licenseBadge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]';
        licenseLink = '(https://opensource.org/licenses/EPL-1.0)';
    } else if (license === 'GNU') {
        licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
        licenseLink = '(https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license === 'THE ORGANIZATION FOR ETHICAL SOURCE') {
        licenseBadge = '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]';
        licenseLink = '(https://firstdonoharm.dev)';
    }

    return { licenseLink, licenseBadge };
};

init();
