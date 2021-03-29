const viewAllEmployeesbyDepartment = () => {
    connection.query("SELECT * FROM departments", (err, res) => {
    inquirer 
        .prompt({
            name: 'department',
            type: "list",
            message: "Which Department?",
            choices: ["Sales", "Engineering", "Finance", "Legal"]
    })
    .then((answer) => {
                let query = 'SELECT employee.id, employee.first_name, employee.last_name, roles.title,'
                query += 'FROM roles INNER JOIN employee ON employee.role_id = roles.id RIGHT JOIN department ON departments.id = roles.department_id WHERE ?'
                query += 'WHERE department_name = "Sales"'
            connection.query(query, {department_name: answer.department}, (err, res) => {
            const peopleArray = []
            res.forEach(( { id, first_name, last_name, title, }, ) => {
              const peopleObject = {
                "ID ": id, 
                "First Name":  first_name, 
                "Last Name": last_name,
                "Title": title,             
              }
              peopleArray.push(peopleObject);
            });
            console.table(peopleArray);
            questions();
        });
       });