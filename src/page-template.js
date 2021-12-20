const Intern = require('../lib/Intern.js');
const Engineer = require('../lib/Engineer.js');
const Manager = require('../lib/Manager.js');

// function to generate an HTML section for intern
const generateIntern = (internInfo) => {

    // if there are no interns, return empty string
    if (!internInfo){
        return '';
    }

    // otherwise, create an HTML section for each of the interns
    internInfo.forEach(intern => {

    return `
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
    .join('');

};

// function to generate an HTML section for engineer
const generateEngineer = (engineerInfo) => {

    // if there are no engineers, return empty string
    if (!engineerInfo){
        return '';
    }

    // otherwise, create an HTML section for each of the interns
    engineerInfo.forEach(engineer => {

    return `
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
    .join('');

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

module.exports = templateData => {

    // destructure page data by section
    // this will create 3 variables based on info in templateData
    const { managerInfo, engineerInfo, internInfo } = templateData;

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
        <h1>My Team</h1>
    </header>

    <main>
    
        ${generateManager(managerInfo)}
        ${generateIntern(internInfo)}
        ${generateIntern(engineerInfo)}

        <h2>Member 3</h2>

        <h2>Member 4</h2>

        <h2>Member 5</h2>
    </main>

</body>
</html>

    `;
};
