const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Jim', 23, 'gjeud@do.com');
    employee.name = 'Albert';

    expect(employee.name).toBe('Albert');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
    expect(employee.getRole()).toEqual('Employee');
});

test('Can set name via constructor arguments', ()=>{
    const employee = new Employee('Jim', 23, 'gjeud@do.com');
    employee.name = 'Albert';
    expect(employee.name).toBe('Albert');
});

test('Can set id via constructor argument', ()=>{
    const employee = new Employee('Jim', 23, 'gjeud@do.com');
    employee.id = 56;
    expect(employee.id).toBe(56);
});

test('Can set email via constructor argument', ()=>{
    const employee = new Employee('Jim', 23, 'gjeud@do.com');
    employee.email = 'ggggg@gmail.com';
    expect(employee.email).toBe('ggggg@gmail.com');
});

test('Can get name via getName()', () => {
    const employee = new Employee('Jim', 23, 'gjeud@do.com');
    expect(employee.getName()).toBe('Jim');
});

test('Can get id via getId()', () => {
    const employee = new Employee('Jim', 23, 'gjeud@do.com');
    expect(employee.getId()).toBe(23);
});

test('Can get email via getEmail()', () => {
    const employee = new Employee('Jim', 23, 'gjeud@do.com');
    expect(employee.getEmail()).toBe('gjeud@do.com');
});

test('getRole() should return "Employee"', ()=>{
    const employee = new Employee('Jim', 23, 'gjeud@do.com');
    expect(employee.getRole()).toBe('Employee');
});
