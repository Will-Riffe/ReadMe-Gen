const inquirer = require('inquirer');
const fs = require('fs');

inquirer
.prompt([
  {
      type: 'input',
      name: 'title',
      message: 'What is the Title of your project?'
  },
  {
      type: 'input',
      name: 'description',
      message: 'Please provide a Description of your project:'
  },
  {
      type: 'input',
      name: 'installation',
      message: 'Enter any installation instructions here:'
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Usage information for your project goes here:'
  },
  {
      type: 'input',
      name: 'contribution',
      message: 'Enter contribution guidelines here:'
  },
  {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions for your project here:'
  },
  {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
  },
  {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
  }
]).then((data) => {

  // Code generating the README file (the magic happens here)

  const readme = `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ![${data.license} License](https://img.shields.io/badge/License-${data.license}-blue.svg)
  This project is covered under the ${data.license} License.

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  For questions or comments about this project, please contact me via [GitHub](https://github.com/${data.github}) or email at ${data.email}.
  `;

  // Code for writing the README file to disk
  fs.writeFile('README.md', readme, (err) => {
      if (err) {
          console.log(err);
      } else {
          console.log('README.md file created successfully!');
      }
  });
}).catch((err) => {
  console.log(err);
});