const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const { rejects } = require('assert');


// function to ask the user questions about their team
const questionsAboutManager = manager => {

    return inquirer
        .prompt([
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
        .then(info => {
            questionsAboutTeam(info);
        })
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
                message: 'Which type of team member would you like to add? Or would you like to stop adding members? (Required)',
                choices: ['Intern', 'Engineer', 'Finished adding']
            }
        ])
        .then(response => {
            // if the user chooses intern, ask the intern series of questions, then push the newly created member to the member array
            if (response.memberType === "Intern"){
                questionsAboutIntern(member);
            }
            // if the user chooses engineer, ask the engineer series of questions, then push the newly created member to the member array
            else if (response.memberType === "Engineer") {
                questionsAboutEngineer(member);
            }
            else {
                createObjects(member);
            }
        })
};

const questionsAboutIntern = internData => {

    // if there is no intern data, create an array to hold more than one instance of the data entered from the questions
    if (!internData.info) {
        internData.info = [];
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
            internData.info.push(newInternData);

            // if the user wants to add another member, restart the function
            if (newInternData.confirmAddMember) {
                return questionsAboutTeam(internData);
            } 
            // otherwise, end function and return the data of the array
            else {
                return internData;
            }
        });
}

const questionsAboutEngineer = engineerData => {

    // if there is no team data, create an array to hold more than one instance of the data entered from the questions
    if (!engineerData.info) {
        engineerData.info = [];
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
            engineerData.info.push(newEngineerData);

            // if the user wants to add another member, restart the function
            if (newEngineerData.confirmAddMember) {
                return questionsAboutTeam(engineerData);
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

    // create html document from the objects created in members
    const template = generatePage(manager, internArray, engineerArray);
    
    // if html exists, writes html to /dist/index
    if (template) {
        fs.writeFileSync('./dist/index.html', template, err => {
            if (err) {
                reject(err)
                return
            }

            resolve({
                ok: true, 
                message: 'Succesfully created team profile!'
            })
        })
        console.log("Html page was created!")
    }
}

// destructure page data by section
// this will combine all 3 variables from the team sections into the complete doc
function generatePage(managerInfo, engineerInfo, internInfo) {

    return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="./dist/style.css" />
            <title>Team Generator</title>
        </head>
          
        <body>
            <header>
                <h1 class="header">My Team</h1>
            </header>
        
            <main>
            
                ${generateManager(managerInfo)}
                ${generateIntern(internInfo)}
                ${generateIntern(engineerInfo)}
        
            </main>
        
        </body>
        </html>
        
            `;
};
        

// function to generate an HTML section for intern
const generateIntern = (internInfo) => {
    
    // if there are no interns, return empty string
    if (internInfo.length>0){
        
    // create an HTML section for each of the interns
            
    // empty variable to store the created htmls
    storeInternHtml = '';
            
    internInfo.forEach(intern => {
        
    storeEngineerHtml += `
            <section>
                <h2 class="name" >Name: ${intern.getName()}</h2>
                <h2 class="title" >${intern.getRole()}</h2>
        
                    <div>
        
                        <h2 class="id" >ID: ${intern.getId()}</h2>
        
                        <h2 class="email" >Email: ${intern.getEmail()}</h2>
                        
                        <h2 class="school" >School: ${intern.getSchool()}</h2>
        
                    </div>
        
                </section>    
        
            `;
        })    
        return storeInternHtml;
    }
    else {
        return '';
    }
};
    
    // function to generate an HTML section for engineer
    const generateEngineer = (engineerInfo) => {
    
        // if there are engineers...
        if (engineerInfo.length>0){

            // create an HTML section for each of the engineeers

            // empty variable to store the created htmls
            storeEngineerHtml = '';

            engineerInfo.forEach(engineer => {
        
            storeEngineerHtml += `
            <section>
                <h2 class="name" >Name: ${engineer.getName()}</h2>
                <h2 class="title" >${engineer.getRole()}</h2>
        
                    <div>
        
                        <h2 class="id" >ID: ${engineer.getId()}</h2>
        
                        <h2 class="email" >Email: ${engineer.getEmail()}</h2>
                        
                        <h2 class="school" >School: ${engineer.getGithub()}</h2>
        
                    </div>
        
                </section>    
        
            `;
            })    
            return storeEngineerHtml;
        }   

        else{
            return '';
        }
    };
    
    // function to generate an HTML section for manager
    const generateManager = (managerInfo) => {
    
        return `
          <section>
    
            <h2 class="name">${Manager.getName()}</h2>
            <h2 class="title">${Manager.getRole()}</h2>
                
                <div>
    
                    <h3 class="id" >ID: ${Manager.getId()}</h2>
    
                    <h3 class="email" >Email: ${Manager.getEmail()}</h2>
                    
                    <h3 class="office" >Office Number: ${Manager.getOfficeNumber()}</h2>
    
                </div>
    
            </section>    
    
        `;
    };

questionsAboutManager();