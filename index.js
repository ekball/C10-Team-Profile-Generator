const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

// function to ask the user questions about their team
const questionsAboutManager = () => {

    return inquirer.prompt([
    {
        type: 'input',
        name: 'managerName',
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
        name: 'managerId',
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
        name: 'managerEmail',
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
        name: 'managerOfficeNumber',
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
                type: 'list',
                name: 'memberType',
                message: 'Which type of team member would you like to add? (Required)',
                choices: ['Intern', 'Engineer']
            }
        ])
        .then(responses => {
            if (responses.memberType === "Intern"){
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'internName',
                            message: 'What is the name of the intern? (Required)',
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } 
                                else {
                                    console.log('You need to enter a name for the intern!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'internId',
                            message: 'What is the id of the intern? (Required)',
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } 
                                else {
                                    console.log('You need to enter an id for the intern!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'internEmail',
                            message: 'What is the email address of the intern? (Required)',
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } 
                                else {
                                    console.log('You need to enter an email address for the intern!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'internSchool',
                            message: 'What school does the intern attend? (Required)',
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } 
                                else {
                                    console.log("You need to enter the intern's school!");
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
                        // add the team member info to the array
                        teamData.info.push(teamData);
                        // if the user wants to add another member, restart the function
                        if (teamData.confirmAddMember) {
                            return questionsAboutTeam(teamData);
                        } 
                        // otherwise, end function and return the data of the array
                        else {
                            return teamData;
                        }
                    });
            }
            else if (responses.memberType === "Engineer") {
                return inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'engineerName',
                            message: 'What is the name of the engineer? (Required)',
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } 
                                else {
                                    console.log('You need to enter a name for the intern!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'engineerId',
                            message: 'What is the id of the engineer? (Required)',
                            validate: idInput => {
                                if (idInput) {
                                    return true;
                                } 
                                else {
                                    console.log('You need to enter an id for the engineer!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'engineerEmail',
                            message: 'What is the email address of the engineer? (Required)',
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } 
                                else {
                                    console.log('You need to enter an email address for the engineer!');
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'engineerGithub',
                            message: 'What is the Github username of the engineer? (Required)',
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } 
                                else {
                                    console.log("You need to enter the engineer's github username!");
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
                        // add the team member info to the array
                        teamData.info.push(teamData);
                        // if the user wants to add another member, restart the function
                        if (teamData.confirmAddMember) {
                            return questionsAboutTeam(teamData);
                        } 
                        // otherwise, end function and return the data of the array
                        else {
                            return teamData;
                        }
                    });
            }
})



            



            
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

    // ask the questions about the manager
    questionsAboutManager()
        // then ask the questions about the team
        .then(questionsAboutTeam)
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