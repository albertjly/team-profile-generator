const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jim', 23, 'gjeud@do.com');

    expect(employee.name).toBe('Jim');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(expect.any(String));
});