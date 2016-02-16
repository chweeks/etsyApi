var helpers = require('./price_quantity_helpers.js');
var price = {};

const currencyTable = { USD: 1.0, GBP: 0.69052, EUR: 0.89445, CAD: 1.3823, AUD: 1.3975 };

function convertToUSD (price, code) {
  return price / currencyTable[code];
};

function USDprice (listing) {
  return convertToUSD(listing.price, listing.currency_code);
}

function prices (listings) {
  return listings.map(USDprice);
};

price.averagePrice = function (listings) {
  return helpers.averageValue(listings, prices).toFixed(2);
};

price.maxPriceAndListing = function (listings) {
  const max = helpers.maxValueAndListing(listings, USDprice);
  return { price_USD: USDprice(max), listing: max };
};

price.minPriceAndListing = function (listings) {
  const min = helpers.minValueAndListing(listings, USDprice);
  return { price_USD: USDprice(min), listing: min };
};

module.exports = price;
