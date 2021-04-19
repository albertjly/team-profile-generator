const inquirer = require('inquirer');
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const fs = require('fs');

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
            .then(data => {
                data.role = 'Manager';
                pushAndLoop(data)
            });
    }else if (data.role === 'Engineer'){
        return inquirer
            .prompt(questionEngineerArr)
            .then(data => {
                data.role = 'Engineer';
                pushAndLoop(data)
            });
    }else if (data.role === 'Intern') {
        return inquirer
            .prompt(questionInternArr)
            .then(data => {
                data.role = 'Intern';
                pushAndLoop(data)
            });
    }else {
        // console.log(employeeArr.array);
        return false;
    }
}

function pushAndLoop(data) {
    // console.log(data);
    writeToFile(`${data.role}-${data.name}.json`, JSON.stringify(data));
    init();
}

function writeToFile(filename, data) {
    fs.writeFileSync(`./src/${filename}`, data, err => {
        if (err) throw new Error(err);
        console.log('Done!');
    });
}

// console.log(employeeArr.array);
module.exports = init();
// exports.employee = employeeArr;