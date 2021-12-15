const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

// // function to ask the user questions about their team
// const questions = () => {

//     return inquirer.prompt([
//     {
//         type: 'input',
//         name: 'title',
//         message: 'What is the title of your project? (Required)',
//         validate: titleInput => {
//           if (titleInput) {
//             return true;
//           } else {
//             console.log('Please enter the title of your project!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'input',
//         name: 'description',
//         message: 'Please describe your project. (Required)',
//         validate: descriptionInput => {
//           if (descriptionInput) {
//             return true;
//           } else {
//             console.log('Please enter the description of your project!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'input',
//         name: 'test',
//         message: 'Enter examples for running tests (Optional)',
//       },
//       {
//         type: 'input',
//         name: 'github',
//         message: 'What is your github username?',
//         validate: githubInput => {
//           if (githubInput) {
//             return true;
//           } else {
//             console.log('Please enter your github username!');
//             return false;
//           }
//         }
//       },
//       {
//         type: 'input',
//         name: 'email',
//         message: 'What is your email address?',
//         validate: emailInput => {
//           if (emailInput) {
//             return true;
//           } else {
//             console.log('Please enter your email address!');
//             return false;
//           }
//         }
//       },
//     ])
// };

// function init() {

//     // ask the questions, then generate the site from answers
//     questions()
//         // add .then statements here

//         // if something goes wrong, let user know with error statement
//         .catch(err => {
//             console.log(err);
//         });
// }