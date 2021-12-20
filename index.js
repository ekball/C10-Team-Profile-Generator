const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');


// function to ask the user questions about their team
const questionsAboutManager = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
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
            name: 'id',
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
            name: 'email',
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
            name: 'officeNumber',
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

const questionsAboutTeam = member => {
    console.log(`
=====================
Add a New Team Member
=====================
    `);

    // if there is no team data, create an array to hold more than one instance of the objects created during the functions
    if (!member.info) {
        member.info = [];
    }

    // ask the user which kind of member they want to add
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'memberType',
                message: 'Which type of team member would you like to add? (Required)',
                choices: ['Intern', 'Engineer']
            }
        ])
        .then(response => {
            // if the user chooses intern, ask the intern series of questions, then push the newly created member to the member array
            if (response.memberType === "Intern"){
                questionsAboutIntern(member);
                // member.info.push(member);
            }
            // if the user chooses engineer, ask the engineer series of questions, then push the newly created member to the member array
            else if (response.memberType === "Engineer") {
                questionsAboutEngineer(member);
                // member.info.push(member);
            }
        })
};

const questionsAboutIntern = internData => {

    // if there is no intern data, create an array to hold more than one instance of the data entered from the questions
    if (!member.info.internData) {
        member.info.internData = [];
    }

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
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
                name: 'id',
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
                name: 'email',
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
                name: 'school',
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
        .then(newInternData => {
            // add the team member info to the array
            internData.push(newInternData);

            // create a new intern object using the current responses to the questions
            const intern = new Intern(internData);

            // if the user wants to add another member, restart the function
            if (newInternData.confirmAddMember) {
                return questionsAboutTeam(intern);
            } 
            // otherwise, end function and return the data of the array
            else {
                return internData;
            }
        });
}

const questionsAboutEngineer = engineerData => {

    // if there is no team data, create an array to hold more than one instance of the data entered from the questions
    if (!member.info.engineerData) {
        member.info.engineerData = [];
    }

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
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
                name: 'id',
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
                name: 'email',
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
                name: 'github',
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
        .then(newEngineerData => {
            // add the team member info to the array
            engineerData.push(newEngineerData);

            // create a new engineer object using the current responses to the questions
            const engineer = new Engineer(engineerData);

            // if the user wants to add another member, restart the function
            if (newEngineerData.confirmAddMember) {
                return questionsAboutTeam(engineer);
            } 
            // otherwise, end function and return the data of the array
            else {
                return engineerData;
            }
        });
}

const createObjects = members => {

    // create a new manager object with answers from questions
    const manager = new Manager
        (
            members.name,
            members.id, 
            members.email, 
            members.officeNumber
        );

    // create array to hold multiple interns
    const internArray = [];

    // if there is data in the 'internData' array
    if (members.info.internData){

        // create a new intern object with answers from questions
            // then loop through until end of array is reached
        for ( i = 0; i<members.info.internData.length; i++ ){
            const intern = new Intern
                (
                    members.info[i].internData.name,
                    members.info[i].internData.id,
                    members.info[i].internData.email,
                    members.info[i].internData.school,
                );
            internArray.push(intern);
        }
    }

    // create array to hold multiple engineers
    const engineerArray = [];

    // if there is data in the 'engineerData' array
    if (members.info.engineerData){
        
        // create a new intern object with answers from questions
            // then loop through until end of array is reached
        for ( i = 0; i<members.info.internData.length; i++ ){
            const engineer = new Engineer
                (
                    members.info[i].engineerData.name,
                    members.info[i].engineerData.id,
                    members.info[i].engineerData.email,
                    members.info[i].engineerData.school,
                );
            engineerArray.push(engineer);
        }
    }
}

// writing HTML file
const writeHtml = fileContent => {
    return new Promise((resolve, reject) => {

        // write new file in a specified folder using the data from the questions
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if something goes wrong, let the user know with an error statement

            if (err) {
                reject(err);
                return;
            }
    
            // if successful, print success statement
            resolve({
                ok: true,
                message: 'HTML File created!'
            });
        });
    });
};

function init() {

    // ask the questions about the manager
    questionsAboutManager()
        // then ask the questions about the team
        .then(questionsAboutTeam())
        // then create objects out of the answers from the questions
        .then(createObjects())
        // then create the html
        .then(html => {
            generatePage(html);
        })
        // then write the html file into the dist/ folder
        .then(writeHtmlFile => {
            return writeHtml(generatePage(), writeHtmlFile);
        })
        // if something goes wrong, let user know with error statement
        .catch(err => {
            console.log(err);
        });
}

init();