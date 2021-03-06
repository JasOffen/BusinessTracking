const inquirer = require('inquirer');
const mysql = require('mysql2');
const env = require('dotenv').config();
const cTable = require('console.table');
//const db = require('./config/connection');


const askQuestions = async () => {
    inquirer
        .prompt([
            {
                name: 'adding_type',
                type: 'list',
                message: 'What would you like to do?',
                choices: ['Add Department', 'Add Role', 'Add Employee']
            },
        ])
        .then((answers) => {
            if (answers.adding_type == 'Add Department') {
                console.log('Were adding a department');
                departmentAdd()
            } else if (answers.adding_type == 'Add Role') {
                console.log('Were adding a role');
                roleAdd();
            } else if (answers.adding_type == 'Add Employee') {
                console.log('Were adding an employee');
                employeeAdd()
            } else {
                console.log('Seems there was an error')
                addAnother();
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

    function departmentAdd() {
        inquirer
            .prompt([
                {
                    name: 'department_name',
                    type: 'input',
                    message: 'What is the name of the department?'
                },
            ])
            .then((answers) => {
                console.log('added the ' + answers.department_name + ' department to the database')
                addAnother()
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
    }
    function roleAdd() {
        inquirer
            .prompt([
                {
                    name: 'role_name',
                    type: 'input',
                    message: 'What is the name of the role?'
                },
                {
                    name: 'role_salary',
                    type: 'input',
                    message: 'What is the salary of this role?'
                }
            ])
            .then((answers) => {
                console.log('added the ' + answers.role_name + ' role to the database')
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
    }
    function employeeAdd() {
        inquirer
            .prompt([
                {
                    name: 'employee_f_name',
                    type: 'input',
                    message: 'What is the first name of your employee?'
                },
                {
                    name: 'employee_l_name',
                    type: 'input',
                    message: 'What is the last name of your employee?'
                },
                {
                    name: 'employee_role',
                    type: 'input',
                    message: 'What is your Emploees Role?'
                },
                {
                    name: 'employee_manager',
                    type: 'input',
                    message: 'Who is this Employees Manager?'
                }
            ])
            .then((answers) => {
                console.log(`added ${answers.employee_f_name}  ${answers.employee_l_name} as a ${answers.employee_role} under ${answers.employee_manager}`)
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
    }
    function employeeUpdate() {
        inquirer
            .prompt([
                {
                    name: 'employee_f_name',
                    type: 'input',
                    message: 'What is the first name of your employee?'
                },
                {
                    name: 'employee_l_name',
                    type: 'input',
                    message: 'What is the last name of your employee?'
                }
            ])
            .then((answers) => {
                console.log('added the ' + answers.employee_f_name + ' department to the database')
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
    }
    function addAnother() {
        inquirer
            .prompt([
                {
                    name: 'add_another',
                    type: 'list',
                    message: 'Would you like to add another?',
                    choices: ['Yes', 'No']
                }
            ])
            .then((answers) => {
                connect()
                if (answers.add_another == 'Yes') {
                    askQuestions();
                } else {
                    console.log('Closing Application...')
                }
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
    }

}

const connect = async () => {
    const db = mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
        console.log('Connected to the employee database')
    );
    console.table(['role', 'employee'], [])
}

askQuestions()