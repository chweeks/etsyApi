var app = {};

const currencyTable = { USD: 1.0, GBP: 0.69052, EUR: 0.89445, CAD: 1.3823, AUD: 1.3975 };


function convertToUSD (price, code) {
  return price / currencyTable[code];
}

function USDprice (listing) {
  return convertToUSD(listing.price, listing.currency_code);
}

function prices (listings) {
  return listings.map(USDprice);
}

function quants (listings) {
  return listings.map(listing => listing.quantity);
}

function averageValue (listings, valueFunc) {
  const sum = valueFunc(listings).reduce((a, b) => a + b);
  return sum / (listings.length);
}

function maxValueAndListing (listings, valueFunc) {
  return listings.reduce(((max, listing) =>
    valueFunc(listing) > valueFunc(max) ? listing : max
  ), listings[0]);
}

function minValueAndListing (listings, valueFunc) {
  return listings.reduce(((min, listing) =>
    valueFunc(listing) < valueFunc(min) ? listing : min
  ), listings[0]);
}

// top level functions

app.averagePrice = function (listings) {
  return averageValue(listings, prices).toFixed(2);
}

app.averageQuantity = function (listings) {
  return averageValue(listings, quants);
}

app.maxPriceAndListing = function (listings) {
  const max = maxValueAndListing(listings, USDprice);
  return { price_USD: USDprice(max), listing: max };
}

app.maxQuantityAndListing = function (listings) {
  const max = maxValueAndListing(listings, listing => listing.quantity);
  return { max_quantity: max.quantity, listing: max };
}

app.minPriceAndListing = function (listings) {
  const min = minValueAndListing(listings, USDprice);
  return { price_USD: USDprice(min), listing: min };
}

app.minQuantityAndListing = function (listings) {
  const min = minValueAndListing(listings, listing => listing.quantity);
  return { min_quantity: min.quantity, listing: min };
}

module.exports = app;
