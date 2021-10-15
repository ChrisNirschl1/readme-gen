const inquirer = require('inquirer');
const fs = require('fs');
const genReamMe = require('./htmlgen.js');


const questionStart = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'motivate',
            message: 'What was your motivation?',
        },
        {
            type: 'input',
            name: 'Why',
            message: 'Why did you build this project?',
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does it solve?',
        },
        {
            type: 'input',
            name: 'Learn',
            message: 'What did you learn?',
        },
        {
            type: 'input',
            name: 'standout',
            message: 'What makes your project standout',
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
            type: 'input',
            name: 'License',
            message: 'Choose a license',
        },
    ])
.then((data) => {

        fs.writeFile('ReadMe.MD', genReadMe(data), (err) => {
            err ? console.log(err) : console.log('Success')
        })

    }
    )


  };

  questionStart();