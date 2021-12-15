const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name = '') {

        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName () {}
    
    getId () {}
    
    getEmail () {}

    getRole () {
        return Manager;
    }

};

module.exports = Manager;