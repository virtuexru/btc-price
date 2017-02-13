#!/usr/bin/env node

/**
 * Module dependencies.
 */
var http = require('http');
var program = require('commander');
var chalk = require('chalk');

/**
 * Main
 */
program
  .version('0.0.3')
  .option('-g, --great-british-pound', 'Show price in Great British Pound')
  .option('-e, --euro', 'Show price in Euro')
  .parse(process.argv);

http.get({
    host: 'api.coindesk.com',
    path: '/v1/bpi/currentprice.json'
  },
  function(response) {
    var currency;
    var symbol;

    if(program.euro) {
      currency = 'EUR';
      symbol = '€';
    } else if(program.greatBritishPound) {
      currency = 'GBP';
      symbol = '£';
    } else {
      currency = 'USD';
      symbol = '$';
    }

    var body = '';
    response.on('data', function(d) { body += d; });
    response.on('end', function() {
      if (response.statusCode == 200) {
        console.log("Latest BTC price: " + 
          chalk.bgGreen.bold(symbol) +
          chalk.bgGreen.bold(JSON.parse(body).bpi[currency].rate)
        );
      } else {
        console.log(chalk.red("Error retrieving prices from api.coindesk.com :("));
      }
    });
  }
);
