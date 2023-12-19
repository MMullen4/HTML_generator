const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown=require("./Utils/generateMarkdown")

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
                {
            type: 'input',
            message: 'What is the name or title of your project?',
            name: 'proj_name',
        },
        {
            type: 'input',
            message: 'Please describe your project -',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter a table of contents for your project -',
            name: 'tableOC',
        },
        {
            type: 'input',
            message: 'Describe how your project is installed -',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Describe how to use your project -',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'Where can users reach support for your project -',
            name: 'support',
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contrib',
        },
        {
            type: 'input',
            message: 'Please enter any test instructions required - ',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Enter any licence info for your application -',
            name: 'license',
            choices: [
                "MIT",
                "Apache",
                "GNU",
                "none",
    ]},
        {
            type: 'input',
            message: 'Please note any questions you might have here - ',
            name:'questions',
        }
    ])
    .then((response) => {
        console.log(response);
        const filename = `./Utils/README.md`

        fs.writeFile(filename, generateMarkdown (response), (err) => // executes genmrkdwn within fs.writefile
            err ? console.error(err) : console.log('Success!'))

    });
