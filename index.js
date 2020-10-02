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
    // {
    // type: "checkbox",
    //name: "table",
    //message: "select to create table of contents ",
    //  choices:[
    
//"(#installation)",
//"(#usage)",
//"(#credits),"
//"(#license)""
    // ]
    //  },
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
    message: "List your collaborators by addinf their GitHbu URL"

},
{
    type: "checkbox",
    name: "license",
    message: "which license would you like?",
    choices: [
        "apache-2.0",
        "MIT",
        "GPL"

    ]
}






]).then(function (answers) {


    const generatedFile = generateMarkdow(answers)

    console.log(generatedFile);

})