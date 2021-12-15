const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

// function to ask the user questions about their team
const questionsAboutManager = () => {

    return inquirer.prompt([
    {
        type: 'input',
        name: 'manager-name',
        message: "What is the team manager's name? (Required)",
        // force user to input name or enter loop re-asking question
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter the name of the team manager!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'manager-id',
        message: "What is the team manager's id? (Required)",
        // force user to input id or enter loop re-asking question
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter the id of the team manager!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'manager-email',
        message: "What is the team manager's email address? (Required)",
        // force user to input email or enter loop re-asking question
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter the email address of the team manager!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'manager-office-number',
        message: "What is the team manager's office number? (Required)",
        // force user to input office number or enter loop re-asking question
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log('Please enter the office number of the team manager!');
            return false;
          }
        }
      }
    ])
};

const questionsAboutTeam = teamData => {
    console.log(`
=====================
Add a New Team Member
=====================
    `);
  
    // if there is no team data, create an array to hold more than one instance of the data entered from the questions
    if (!teamData.info) {
        teamData.info = [];
    }

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your project? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } 
                    else {
                        console.log('You need to enter a project name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Provide a description of the project (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } 
                    else {
                        console.log('You need to enter a project description!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'link',
                message: 'Enter the GitHub link to your project. (Required)',
                validate: linkInput => {
                    if (linkInput) {
                        return true;
                    } else {
                        console.log('You need to enter a project GitHub link!');
                        return false;
                    }
                }
            },
            {
            type: 'confirm',
            name: 'confirmAddMember',
            message: 'Would you like to add another team member?',
            default: false
            }
        ])
        .then(teamData => {
            teamData.info.push(teamData);
            if (teamData.confirmAddMember) {
            return questionsAboutTeam(teamData);
            } else {
            return teamData;
            }
        });
};

const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Generator</title>
    </head>
  
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        <section>
            <h2>Member 1</h2>

            <h2>Member 2</h2>

            <h2>Member 3</h2>

            <h2>Member 4</h2>

            <h2>Member 5</h2>
        </section>

    </body>
    </html>
    `;
  };

// write new file in a specified folder using the data from the questions
function writeToFile(fileName, data) {

    return new Promise((resolve, reject) => {

        fs.writeFile(fileName, data, err => {
            // if something goes wrong, let the user know with an error statement
            if (err) {
                reject(err);
                return;
            }
            
            // if successful, print success statement
            resolve({
                ok: true,
                message: 'HTML file created!'
            });
        });
    });
  };

function init() {

    // ask the questions
    questions()
        // add .then statements here
        // then create the html
        .then( html => {
            generatePage(html);
        })
        // then create the css
        .then( css => {
            generatePage(css);
        })
        // then write the html file into the dist/ folder
        .then(writeHtml => {
            return writeToFile('./dist/index.html', writeHtml);
        })
        // then write the css file into the dist/ folder
        .then(writeCss => {
            return writeToFile('./dist/style.css', writeCss);
        })
        // if something goes wrong, let user know with error statement
        .catch(err => {
            console.log(err);
        });
}