const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const card = require('./src/cards'); 

const employees =[];

const profileQuestions = {
    manager: [
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager name? \n',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name.');
                    return false;
                }
            }
        }, 
        
        {
            type: 'number',
            name: 'id',
            message: "What is the employee's ID number? \n",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid ID number.');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the employees's email address? \n",
            validate: emailInput => {
                if (emailInput.includes('@') && emailInput.includes('.com')) {
                return true;
                } else {
                console.log('\n Please enter a valid email address.');
                return false;
                }
            }
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "\n What is the manager's office number:",
            validate: function (value) {
                let valid = !isNaN(parseFloat(value));
                return valid || "Please enter a valid office number.";
            },
            filter: Number
        }
    ],

    intern: [
        {
            type:'input',
            name: 'name',
            message: "What is the name of the employee? \n",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name.')
                }
            }
        },

        {
            type: 'number',
            name: 'id',
            message: "What is the employee's ID number? \n",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid ID number.')
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address? \n",
            validate: emailInput => {
                if (emailInput.includes('@') && emailInput.includes('.com')) {
                    return true;
                } else {
                    console.log('\n Please enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'schoolName',
            message: "\n What school does the intern attend?",
            validate: function (value) {
                if (value) {
                    return true;
                } else {
                    console.log("Please provide a valid school name.")
                }
            }
        }
    ],

    engineer: [
        {        
            type:'input',
            name: 'name',
            message: "What is the employee's name? \n",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid name.')
                }
            }
        },

        {
            type: 'number',
            name: 'id',
            message: "What is the employees's ID number? \n",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter a valid ID number.')
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineers's email address? \n",
            validate: emailInput => {
                if (emailInput.includes('@') && emailInput.includes('.com')) {
                    return true;
                } else {
                    console.log('\n Please enter a valid email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "\n What is the engineer's GitHub username?",
            validate: function (value) {
                if (value) {
                    return true;
                } else {
                    console.log('Please enter a valid GitHub username.');
                }
            }
        }
    ]
};

const addManager = () => {
    return inquirer
        .prompt(profileQuestions.manager)
        .then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employees.push(manager);
            addEmployee();
        });
};

const addEngineer = () => {
    return inquirer
        .prompt(profileQuestions.engineer)
        .then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
            addEmployee();
        });
};

const addIntern = () => {
    return inquirer
        .prompt(profileQuestions.intern)
        .then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.schoolName);
            employees.push(intern);
            addEmployee();
        });
};

const addEmployee = () => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'newEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'Team Profile Finished']
        })
        .then(answers => {
            switch (answers.newEmployee) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                case 'Team Profile Finished':
                    createProfile();
                    break;
            }
        });
};
const createProfile = (fileName) => {
    fileName = fs.writeFile('./dist/team.html', card(employees), (err => {
        if (err) {
            console.log('Error:' + err);
        } else {
            console.log('Team Profile Complete');
        }
    }));
};

addManager();