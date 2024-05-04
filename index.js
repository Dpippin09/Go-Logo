
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateSVG = require("./utils/generateSVG");

 const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter three characters"
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter Text Color"
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose a shape",
        choices: ["circle", "triangle", "square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter shape color"
    },
];
  


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    
}


function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log("Generated logo.svg");
        writeToFile('logo.svg', generateSVG({...answers}));
    });
   
}

// Function call to initialize app
init();
