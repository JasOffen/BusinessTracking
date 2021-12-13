const inquirer = require('inquirer')
const jest = require('jest')

let test;


function askQuestions() {

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
                departmentAdd();
            } else if (answers.adding_type == 'Add Role') {
                console.log('Were adding a role');
                roleAdd();
            } else if (answers.adding_type == 'Add Employee') {
                console.log('Were adding an employee');
                employeeUpdate();
            } else {

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
                let test = answers.department_name
                module.exports = {
                    departmentName: test,
                    askQuestions
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
                console.log('added the ' + answers.role_name + ' department to the database')
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
}