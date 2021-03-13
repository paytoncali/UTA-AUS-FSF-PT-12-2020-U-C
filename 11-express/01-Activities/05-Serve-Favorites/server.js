const http = require('http');
const fs = require('fs');

// Set our port to 8080
const PORT = 8080;

const displayHome = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>My Home Page</h1>
        <a href='/favfoods'>Fav Foods</a>
        <a href='/favmovies'>Fav Movies</a>
        <a href='/favcss'>Fav CSS Frameworks</a>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
  };
  
  // When someone visits the "http://localhost:8080/" path, this function is run.
  const displayFavFoods = (res) => {
    const myHTML2 = `
    <html>
      <body>
        <h1>My Fav Foods</h1>
        <ul>
        <li>Pizza</li>
        <li>Pasta</li>
        <li>Pretzels</li>
        </ul>
        <a href='/'>Home</a>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML2);
  };
  
  const displayFavMovies = (res) => {
    const myHTML3 = `
    <html>
      <body>
        <h1>Fav Foods</h1>
        <ul>
        <li>How to Lose a Guy in Ten Days</li>
        <li>Another One</li>
        <a href='/'>Home</a>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML3);
  };

  const displayCSS = (res) => {
    const myHTML4 = `
    <html>
      <body>
        <h1>Fav CSS Frameword</h1>
        <h4>Bootstrap</h4>
        <a href='/'>Home</a>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML4);
  };
  // When someone visits any path that is not specifically defined, this function is run.
  const display404 = (url, res) => {
    const myHTML5 = `
    <html>
      <body>
        <h1>404 Not Found </h1>
        <p>The page you were looking for: ${url} can not be found</p>
      </body>
    </html>`;
  
    // Configure the response to return a status code of 404 (meaning the page/resource asked for couldn't be found), and to be an HTML document
    res.writeHead(404, { 'Content-Type': 'text/html' });
  
    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML5);
  };
  
  // Create a function which handles incoming requests and sends responses
  
  const handleRequest = (req, res) => {
    // Capture the url the request is made to
    const path = req.url;
  
    // Depending on the URL, display a different HTML file.
    switch (path) {
      case '/':
        return displayHome(res);
  
      case '/favfoods':
        return displayFavFoods(res);
      case '/favmovies':
          return displayFavMovies(res);
      case '/favcss':
          return displayCSS(res);
      default:
        return display404(path, res);
    }
  };
  
  // Assign our createServer method to a variable called "server"
  const server = http.createServer(handleRequest);
  
  // Start our server
  server.listen(PORT, () => {
    // Callback triggered when server is successfully listening. Hurray!
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
  