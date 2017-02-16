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
  .version('0.2.1')
  .option('-e, --euro', 'Show price in Euros')
  .option('-g, --great-british-pound', 'Show price in Great British Pound')
  .option('-r, --ruble', 'Show price in Rubles')
  .option('-j, --jpy', 'Show price in Japanese Yen')
  .option('-y, --yuan', 'Show price in Chinese Yuan')
  .parse(process.argv);

let currency;
let symbol;

if(program.euro) {
  currency = 'EUR';
  symbol = '€';
} else if(program.greatBritishPound) {
  currency = 'GBP';
  symbol = '£';
} else if(program.ruble) {
  currency = 'RUB';
  symbol = '₽';
} else if(program.jpy) {
  currency = 'JPY';
  symbol = '¥';
} else if(program.yuan) {
  currency = 'CNY';
  symbol = '¥';
} else {
  currency = 'USD';
  symbol = '$';
}

http.get({
    host: 'api.coindesk.com',
    path: '/v1/bpi/currentprice/' + currency + '.json'
  },
  function(response) {
    var body = '';
    response.on('data', function(d) { body += d; });
    response.on('end', function() {
      // console.log(JSON.parse(body))
      // console.log('-------------');
      // console.log(chalk.bgGreen.bold(JSON.parse(body).bpi[currency].rate));

      if (response.statusCode == 200) {
        console.log(
          chalk.bgGreen.bold(symbol) +
          chalk.bgGreen.bold(JSON.parse(body).bpi[currency].rate)
        );
      } else {
        console.log(chalk.red("Error retrieving prices from api.coindesk.com."));
      }
    });
  }
);
