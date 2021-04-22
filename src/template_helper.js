function generateCard(employee) {
    let special, role;
    switch (employee.getRole()) {
        case 'Manager':
            role = `<i class="fas fa-glasses"></i>`;
            special = `office No: ${employee.getOfficeNumber()}`;
            break;
        case 'Engineer':
            role = `<i class="fab fa-github"></i>`;
            special = `GitHub: ${employee.getGitHub()}`;
            break;
        case 'Intern':
            role = `<i class="far fa-id-card"></i>`;
            special = `School: ${employee.getSchool()}`;
            break;
    }

    return `<div class="col-4">
    <div class="top">
        <h2 class="name">${employee.getName()}</h2>
        <h3 class="role">${role}${employee.getRole()}</h3>
    </div>
    <ul class="detail">
        <li><p class="id">ID: ${employee.getId()}</p></li>
        <li><p class="email">Email: ${employee.getEmail()}</p></li>
        <li><p class="special">${special}</p></li>
    </ul>
</div>`
}

function getHtml (employeeArr) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>My Team</header>
        <div class="container">
            <div class="row">
                ${employeeArr.map(employee => generateCard(employee)).join('')}
            </div>
        </div>
    
    </body>
    
    </html>`
}


module.exports = getHtml;