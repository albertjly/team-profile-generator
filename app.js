const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const templateHelper = require('./src/template_helper');
const fs = require('fs');
let manager = new Manager('Albert', 5, 'eee@lll.com', 555);
let managerCard = `<div class="col-4">
            <div class="top">
                <h2 class="name">${manager.getName()}</h2>
                <h3 class="title"><i class="far fa-id-card"></i>${manager.getRole()}</h3>
            </div>
            <ul class="detail">
                <li><p class="id">ID: ${manager.getId()}</p></li>
                <li><p class="email">Email: ${manager.getEmail()}</p></li>
                <li><p class="role">office No.:${manager.getOfficeNumber()}</p></li>
            </ul>
        </div>`;
let htmlData = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        ul, ol{
            list-style: none;
        }
        body{
            font-family: Arial, Helvetica, sans-serif;
        }
        a{
            color: rgb(122, 93, 19);
            font-weight: bold;
            text-decoration: none;
        }
        header{
            height: 200px;
            background-color: #e9b651;
            color: white;
            line-height: 200px;
            text-align: center;
            font-size: 6vh;
        }
        .container{
            height: 1000px;
            margin-top: 20px;
        }
        .row{
            margin: 0 auto;
            width: 70%;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }
        .col-4{
            width: 260px;
            height: 320px;
            background-color: #fff;
            margin: 10px;
            border-radius: 5px;
            box-shadow: 3px 3px 8px black;
            overflow: hidden;
        }
        .col-4:hover{
            transform: scale(1.01);
            cursor: pointer;
        }
        .top{
            height: 35%;
            background-color: #c57c1d;
            color: #eee;
            display: flex;
            padding-left: 10%;
            flex-direction: column;
            justify-content: center;
        }
        .name{
            font-size: 3vh;
        }
        .title{
            margin-top: 2%;
            font-size: 2.3vh;
            opacity: .9;
        }
        .title i{
            margin-right: 6px;
        }
        .detail{
            margin-top: 38px;
        }
        .detail li{
            margin: 0 auto;
            width: 86%;
            /*background-color: #eee;*/
            border-top: 1px solid #bbb;
            border-left: 1px solid #bbb;
            border-right: 1px solid #bbb;
            height: 5vh;
        }
        .detail li:first-child{
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        .detail li:last-child{
            border-bottom: 1px solid #bbb;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
        }
        .detail li p{
            line-height: 5vh;
            padding-left: 10px;
        }
    </style>
</head>
<body>
<header>My Team</header>
<div class="container">
    <div class="row">
        <div class="col-4">
            <div class="top">
                <h2 class="name">${manager.name}</h2>
                <h3 class="title"><i class="fab fa-github"></i>Engineer</h3>
            </div>
            <ul class="detail">
                <li><p class="id">ID: 1</p></li>
                <li><p class="email">Email: ddd_ddd@gggg.com</p></li>
                <li><p class="role">GitHub: <a href="https://github.com/nicolasawesome">nicolasawesome</a></p></li>
            </ul>
        </div>
        ${managerCard}
        <div class="col-4">
            <div class="top">
                <h2 class="name">Rocket Man</h2>
                <h3 class="title"><i class="fas fa-rocket"></i>Intern</h3>
            </div>
            <ul class="detail">
                <li><p class="id">333</p></li>
                <li><p class="email">333</p></li>
                <li><p class="role">333</p></li>
            </ul>
        </div>
        <div class="col-4">
            <div class="top">
                <h2 class="name">Elizabeth</h2>
                <h3 class="title"><i class="far fa-id-card"></i>Employee</h3>
            </div>
            <ul class="detail">
                <li><p class="id">333</p></li>
                <li><p class="email">333</p></li>
                <li><p class="role">333</p></li>
            </ul>
        </div>
    </div>
</div>

</body>
</html>`;

fs.writeFile('./dist/index.html', htmlData, err => {
    if (err) throw new Error(err);
    console.log('Done!');
});

readFile(`${manager.getRole()}-${manager.getName()}`);

function readFile(fileName) {
    fs.readFile(`./src/${fileName}.json`, 'utf-8',(err, data) => {
        if (err) throw new Error(err);
        console.log(data);
    });

}
