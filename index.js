const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'communication method',
    },
  ])
  .then((response) => {
    const jString = JSON.stringify(response);
    fs.writeFile('output.json', jString, (err) => {
        if (err) {
        console.error(err);
    } else {
      console.log("Responses saved to output.json");
    }  
    });
  });

