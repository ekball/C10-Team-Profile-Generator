const generatePage = () => {
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

module.exports = generatePage;