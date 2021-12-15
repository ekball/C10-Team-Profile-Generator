const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee();
  
    expect(employee.name).toBe(expect.any(String));
    expect(employee.value).toEqual(expect.any(Number));
});