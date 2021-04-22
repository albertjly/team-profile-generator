const Intern = require('../lib/Intern');

test('Can set school via constructor', ()=>{
    const intern = new Intern('Jerry', 22, 'jerry@gmail.com');
    intern.school = 'UCLA';

    expect(intern.school).toBe('UCLA');
});

test('Can get school via getGitHub()', ()=>{
    const intern = new Intern('Jerry', 22, 'jerry@gmail.com');
    intern.school = 123;

    expect(intern.getSchool()).toEqual(intern.school);
});

test('getRole() should return "Intern"', ()=>{
    const intern = new Intern('Jerry', 22, 'jerry@gmail.com');
    expect(intern.getRole()).toBe('Intern');
});
