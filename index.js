const inquirer = require('inquirer');
const fs = require('fs');

// const genReamMe = require('./htmlgen.js');


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
            message: 'Enter your GitHub username.',//creates link to profile
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

const generateFile = ({ title, usage, describe, github, install, credits, license}) =>
`
Project Title: 
${title}


 ## Description
 
 ${describe}
   
  ## Table of Contents (Optional)
   
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [License](#license)


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

const runtime = () => {

questionStart() 

.then((data) => {

        fs.writeFile('ReadMe.MD', generateFile(data), (err) => {
            err ? console.log(err) : console.log('Success')
        })

    }
    )
}

runtime()