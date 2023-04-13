
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
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter any relevant usage information for the project',
        name: 'usage'
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
        message: 'Enter any programming languages used in this project',
        name: 'languages',
        filter: ((input) => {
           return input.split(' ').map((language) => language + '\n-').join(' ');
        }),
    },
    {
        type: 'input',
        message: 'Enter any frameworks used in this project',
        name: 'frameworks',
        filter: ((input) => {
            return input.split(' ').map((language) => language + '\n-').join(' ');
         }),
    },
    {
        type: 'input',
        message: 'Enter any libraries / packages used in this project',
        name: 'libraries',
        filter: ((input) => {
            return input.split(' ').map((language) => language + '\n-').join(' ');
         }),
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
            'ZLIB',
            'GNU',
            'ECLIPSE',
            'CREATIVE COMMONS',
            'BOOST',
            'BSD',
            'APACHE',
            'The ORGANIZATION FOR ETHICAL SOURCE',
        ],
        filter: (rawlist => rawlist.toUpperCase()),
    }   
]

module.exports = questions;


