const Engineer = require('../lib/Engineer');

test('Can set GitHub account via constructor', ()=>{
    const engineer = new Engineer('Tom', 44, 'tom@gmail.com');
    engineer.gitHub = 'tomandjerry';

    expect(engineer.gitHub).toBe('tomandjerry');
});

test('Can get GitHub account via getGitHub()', ()=>{
    const engineer = new Engineer('Tom', 44, 'tom@gmail.com');
    engineer.gitHub = 'tomandjerry';

    expect(engineer.getGitHub()).toEqual(engineer.gitHub);
});

test('getRole() should return "Engineer"', ()=>{
    const engineer = new Engineer('Tom', 44, 'tom@gmail.com');
    expect(engineer.getRole()).toBe('Engineer');
});
