const Manager = require('../lib/Manager');

test('Can set office number via constructor', ()=>{
    const manager = new Manager('Jerry', 22, 'jerry@gmail.com');
    manager.officeNumber = 123;

    expect(manager.officeNumber).toBe(123);
});

test('Can get office number via getOfficeNumber()', ()=>{
    const manager = new Manager('Jerry', 22, 'jerry@gmail.com');
    manager.officeNumber = 123;

    expect(manager.getOfficeNumber()).toEqual(manager.officeNumber);
});

test('getRole() should return "Manager"', ()=>{
    const manager = new Manager('Jerry', 22, 'jerry@gmail.com');
    expect(manager.getRole()).toBe('Manager');
});
