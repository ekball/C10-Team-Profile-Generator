const generateIntern = internInfo => {

    if (!internInfo){
        return '';
    }

    return `
      <section>
        <h2 class="name" >Name: ${member.internName}</h2>
        <h2 class="title" >Name</h2>

            <div>

                <h2 class="id" >ID: ${member.internId}</h2>

                <h2 class="email" >Email: ${member.internEmail}</h2>
                
                <h2 class="school" >School: ${member.internSchool}</h2>

            </div>

        </section>    

    `;
};

const generateEngineer = engineerInfo => {

    if (!engineerInfo){
        return '';
    }

    return `
      <section>
        <h2 class="name" >Name: ${member.engineerName}</h2>
        <h2 class="title" >Name</h2>

            <div>

                <h2 class="id" >ID: ${member.engineerId}</h2>

                <h2 class="email" >Email: ${member.engineerEmail}</h2>
                
                <h2 class="school" >School: ${member.engineerGithub}</h2>

            </div>

        </section>    
  
    `;
};

const generateManager = () => {

    // if (!managerInfo){
    //     return '';
    // }

    return `
      <section>

        <h2 class="name">${managerName}</h2>
        <h2 class="title">Manager</h2>
            
            <div>

                <h3 class="id" >ID: ${managerId}</h2>

                <h3 class="email" >Email: ${managerEmail}</h2>
                
                <h3 class="office" >Office Number: ${managerOfficeNumber}</h2>

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
