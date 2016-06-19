var pckgJson = require('./package.json');
var chalk = require('chalk');

if (pckgJson.name === 'angular2-lib-starter') {
  console.log(chalk.red('Please change the name in package.json'));
  process.exit(1);
}


var ENV = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = require('./config/webpack.' + ENV); 
