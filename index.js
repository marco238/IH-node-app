const http = require('http');
const chalk = require('chalk');

// import name and lastName from user.js file using destructuring
const { name, lastName } = require('./user');

const server = http.createServer((req, res) => {
  console.log(`Someone has requested ${req.url}`);

  if (req.url === '/') {
    res.write('<h1>Hello, world!</h1>');
    res.end();
  } else if (req.url === '/about') {
    res.write(`My name is ${name} ${lastName}`);
    res.end();
  } else {
    res.statusCode = 404;
    res.write('404 Page');
    res.end();
  }
});

server.listen(3000).on('listening', () => {
  console.log(chalk.green('Server is listening on port 3000'));
});
