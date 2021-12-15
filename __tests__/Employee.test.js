const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('John');
  
    expect(employee.name).toBe('John');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

