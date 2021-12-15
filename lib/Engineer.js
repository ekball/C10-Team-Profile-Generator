const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name = '') {

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;

    }

    getName () {}
    
    getId () {}
    
    getEmail () {}

    getGithub () {}

    getRole () {
        return Engineer;
    }

};



module.exports = Engineer;