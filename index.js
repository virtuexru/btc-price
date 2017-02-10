#!/usr/bin/env node
var http = require('http');

http.get({
    host: 'api.coindesk.com',
    path: '/v1/bpi/currentprice.json'
  },
  function(response) {
    var body = '';
    response.on('data', function(d) { body += d; });
    response.on('end', function() {
      // console.log(JSON.parse(body));
      console.log("Latest BTC price: $" + JSON.parse(body).bpi.USD.rate);
    });
  }
);
