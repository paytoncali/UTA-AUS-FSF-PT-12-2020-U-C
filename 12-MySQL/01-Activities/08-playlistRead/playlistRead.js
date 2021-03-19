const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: process.env.PASSWORD,
    database: 'playlistDB',
  });
  
  const afterConnection = () => {
    connection.query('SELECT * FROM songs', (err, res) => {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
  };
  
  const queryAllSongs = () => {
      connection.query("SELECT * FROM songs", (err, res) => {
          if (err) throw err;
          res.forEach(({ id, title, artist, genre}) => {
              console.log(`id: ${id} title: ${title}, artist: ${artist} genre: ${genre}`)
          });
      });
  };

  const queryPopSongs = () => {
      connection.query("SELECT * FROM songs WHERE genre=?", ["Pop"], (err, res) => {
          if (err) throw err;
          res.forEach(({ id, title, artist, genre}) => {
            console.log(`id: ${id} title: ${title}, artist: ${artist} genre: ${genre}`)
        });
      });
  };
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(connection.threadId);
    queryAllSongs();
    queryPopSongs();
  });