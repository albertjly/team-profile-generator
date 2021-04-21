const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const fs = require('fs');
const path = require('path');
const getHtml = require('./src/template_helper');
const employeeArr = [];

const questionManagerArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team manager's id?",
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s address?',
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team manager\'s office number?',
        validate: input => !!input
    }
];

const questionEngineerArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's id?",
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your engineer\'s address?',
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your engineer\'s GitHub account?',
        validate: input => !!input
    }
];

const questionInternArr = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern's id?",
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your intern\'s address?',
        validate: input => !!input
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is your intern\'s school?',
        validate: input => !!input
    }
];

const roleArr = [
    {
        type: 'list',
        name: 'role',
        message: 'Which type of team member would you like to add?',
        choices: [
            'Manager',
            'Engineer',
            'Intern',
            'I don\'t want to add any more team members'
        ],
    }
];
console.log('Please build your team.');

function init() {
    inquirer
        .prompt(roleArr)
        .then(
            data => {questionLoop(data)}
        );
}

function questionLoop(data) {
    if (data.role === 'Manager'){
        return inquirer
            .prompt(questionManagerArr)
            .then(({name, id, email, officeNumber}) => {
                // data.role = 'Manager';
                const employee = new Manager(name, id, email, officeNumber);
                pushAndLoop(employee)
            });
    }else if (data.role === 'Engineer'){
        return inquirer
            .prompt(questionEngineerArr)
            .then(({name, id, email, gitHub}) => {
                // data.role = 'Manager';
                const employee = new Engineer(name, id, email, gitHub);
                pushAndLoop(employee)
            });
    }else if (data.role === 'Intern') {
        return inquirer
            .prompt(questionInternArr)
            .then(({name, id, email, school}) => {
                // data.role = 'Manager';
                const employee = new Intern(name, id, email, school);
                pushAndLoop(employee)
            });
    }else {
        // console.log(employeeArr);
        const htmlData = getHtml(employeeArr);
        fs.writeFile(path.join(__dirname, './dist/index.html'), htmlData, err => {
            if (err) throw new Error(err);
            console.log('Done!');
        });
    }
}

function pushAndLoop(data) {
    // console.log(data);
    // writeToFile(`${data.role}-${data.name}.json`, JSON.stringify(data));
    employeeArr.push(data);
    init();
}

init();
