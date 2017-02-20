BTC Price
=========

Yet another tiny library that fetches latest BTC prices in different currencies.

## Installation

  `npm install btc-price -g`

## Usage

  In your shell: `btc-price`

## Data Source

  Pulling the price thanks to [CoinDesk.com's](http://www.coindesk.com/) [free API](http://www.coindesk.com/api/). Big shoutout to them!

## Options

 - `default` Will display price in United States Dollars
 - `-g` Display price in Great British Pounds
 - `-e` Display price in Euro's
 - `-r` Display price in Russian Rubles
 - `-j` Display price in Japanese Yen
 - `-y` Display price in Chinese Yuan
 - `-i` Display price in Indian Rupee
 - `-c` Display price in Canadian Dollar
 - `-V` Display current version
  
## Website

[btc-price on CodingPepe.com](http://www.codingpepe.com/2017/02/10/created-my-first-node-js-module-for-displaying-bitcoin-price-in-your-terminal/)

## Testing

To run the `mocha` test suite use `npm test`

Currently the testing is a placeholder :)

## Contributing

  Please feel free to go nuts; open a PR, Issue or Fork!

## Verion History  

 - `0.3.0` Encapsulating our script in a function, testing framework skeleton
 - `0.2.3` Adding CAD
 - `0.2.2` Adding INR
 - `0.2.1` Adding JPY & CNY
 - `0.2.0` Added a shoutout to CoinDesk, RUB support, upcoming currencies
 - `0.1.6` Adding website, fixing styling
 - `0.1.5` Proper commander versioning
 - `0.1.4` Removing text prefix & README
 - `0.1.3` Version update & tagging
 - `0.1.2` Moving script
 - `0.1.0` Add color, error handling & currency options
 - `0.0.2` Tagging & minor error fixes
 - `0.0.1` Initial release

## TO-DO's:

 - Add better error handling
 - Testing (Mocha, Sinon)
