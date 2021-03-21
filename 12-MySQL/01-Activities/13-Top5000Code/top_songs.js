const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.PASSWORD,
  database: 'top_songsDB',
});

const questions = () => {
    inquirer.prompt([
        {
        type: 'list',
        message: "How would you like to search?",
        name: 'search',
        choices: ["By Artist", "By Year", "By Song", "All Songs by One Artist"]
        }
    .then(answer => {
        console.log("selection: ", choices);
        switch(selection) {
            case "By Artist":
                console.log("selection ", selection);
                artist();
                break;
            case "By Year":
                console.log("selection", selection);
                year();
                break;
            case "By Song":
                console.log("selection", selection);
                song();
                break;
            case "All Songs by One Artist":
                console.log("selection", selection);
                artistSongs();
                break;
            default:
                console.log("try again");
                break;
        };
    })
])}


// const artist = () => {
//   console.log('Selecting all products...\n');
//   connection.query('SELECT * FROM products', (err, res) => {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// };

// const year = () => {
//   console.log('Deleting all strawberry icecream...\n');
//   connection.query(
//     'DELETE FROM products WHERE ?',
//     {
//       flavor: 'strawberry',
//     },
//     (err, res) => {
//       if (err) throw err;
//       console.log(`${res.affectedRows} products deleted!\n`);
//       // Call readProducts AFTER the DELETE completes
//       readProducts();
//     }
//   );
// };

// const song = () => {
//   console.log('Updating all Rocky Road quantities...\n');
//   const query = connection.query(
//     'UPDATE products SET ? WHERE ?',
//     [
//       {
//         quantity: 100,
//       },
//       {
//         flavor: 'Rocky Road',
//       },
//     ],
//     (err, res) => {
//       if (err) throw err;
//       console.log(`${res.affectedRows} products updated!\n`);
//       // Call deleteProduct AFTER the UPDATE completes
//       deleteProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// };

// const artistSongs = () => {
//   console.log('Inserting a new product...\n');
//   const query = connection.query(
//     'INSERT INTO products SET ?',
//     {
//       flavor: 'Rocky Road',
//       price: 3.0,
//       quantity: 50,
//     },
//     (err, res) => {
//       if (err) throw err;
//       console.log(`${res.affectedRows} product inserted!\n`);
//       // Call updateProduct AFTER the INSERT completes
//       updateProduct();
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// };

// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  questions();
});
