//Installs inquirer and file system 
const inquirer = require('inquirer');
const fs = require('fs');

// const genReamMe = require('./htmlgen.js');

//Wraps inquirer prompt in a function to run
const questionStart = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide examples of use.',
        },
        {
            type: 'input',
            name: 'describe',
            message: 'Describe this project',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.',
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the installation steps??',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Include collaborators, tutorials, third party assets, etc...',
        },
       
        {
            type: 'list',
            message: 'Choose a license for your application:',
            name: 'license',
            choices: ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)', '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)', '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'],//creates a badge near the top of the readme file
        },
    ])
};
//Creates ReadMe template and where to place 
const generateFile = ({ title, usage, describe, github, install, credits, license}) =>
`
Project Title: 
${title}


 ## Description
 
 ${describe}
   
 ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contributing](#contributing)
 * [Credits](#credits)
 * [License](#license)
 


   ## Installation
   ${install}
    
   ## Usage

   ${usage}


    
       
   ## Credits
   ${credits}
    
   ## License

   ${license}
    
   ---

   Github Portfolio: ${github}


   `;
//Function to run everything
const runtime = () => {

//starts inquierer prompt 
questionStart() 

.then((data) => {

        fs.writeFile('ReadMe.MD', generateFile(data), (err) => {
            err ? console.log(err) : console.log('Success')
        })

    }
    )
}

runtime()