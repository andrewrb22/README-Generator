const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdow = require("./utils/generateMarkdown")



inquirer.prompt([
    {
        type: "input",
        message: "Enter Project Title",
        name: "title"
    },
    {
        type: "input",
        message: "Enter Description",
        name: "description"
    },
   {
       type: "checkbox",
       name: "languages",
       message: "which Technologies were used on this project?",
       choices:[
           "HTML",
           "CSS",
           "JavaScript",
           "Node JS",
       ]
   },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
       type: "input",
       name: "usage",
       message: "Provide some instructions on how to use your app" 
    },

{
    type: "input",
    name: "Credist",
    message: "List your collaborators by adding their GitHbu URL"

},
{
    type: "checkbox",
    name: "license",
    message: "which license would you like?",
    choices: [
        "https://img.shields.io/aur/license/android-studio",
        "https://img.shields.io/apm/l/vim-mode?style=flat-square",
        "https://img.shields.io/eclipse-marketplace/l/notepad4e"

    ]
},
{
    type: "input",
    name:"phone",
    message: "What's your phone number?"
},
{
    type: "input",
    name:"email",
    message: "what's your email address?"
}






]).then(function (answer) {


    const generatedFile = generateMarkdow(answer)

  

    fs.writeFile('README.md', generatedFile, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Success!');
    });





});

