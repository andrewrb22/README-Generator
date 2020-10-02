// function to generate markdown for README
function generateMarkdown(answer) {
  return `
  # ${answer.title}

## Description 
${answer.description}


## Table of Contents


${answer.table}


## Installation

${answer.installation}

## Usage 

${answer.usage}

## Credits




## License

${answer.license}



`;
}

module.exports = generateMarkdown;
