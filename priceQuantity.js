// mock data

const currencyTable = { USD: 1.0, GBP: 0.69052, EUR: 0.89445, CAD: 1.3823, AUD: 1.3975 };

const results = [ { price: 10, currency_code: 'USD', quantity: 15 },
                  { price: 20, currency_code: 'GBP', quantity: 10 },
                  { price: 30, currency_code: 'EUR', quantity: 7 }
                ]

// helper functions

function convertToUSD(price, code) {
  return price / currencyTable[code];
}

function USDprice(listing) {
  return convertToUSD(listing.price, listing.currency_code);
}

function prices(listings) {
  return listings.map(USDprice);
}

function quants(listings) {
  return listings.map(listing => listing.quantity);
}

function averageValue(listings, valueFunc) {
  const sum = valueFunc(listings).reduce((a, b) => a + b);
  return sum / (listings.length);
}

function maxValueAndListing(listings, valueFunc) {
  return listings.reduce(((max, listing) =>
    valueFunc(listing) > valueFunc(max) ? listing : max
  ), listings[0]);
}

function minValueAndListing(listings, valueFunc) {
  return listings.reduce(((min, listing) =>
    valueFunc(listing) < valueFunc(min) ? listing : min
  ), listings[0]);
}

// top level functions

function averagePrice(listings) {
  return { average_price_in_USD: averageValue(listings, prices) };
}

function averageQuantity(listings) {
  return { average_quantity: averageValue(listings, quants) };
}

function maxPriceAndListing(listings) {
  const max = maxValueAndListing(listings, USDprice);
  return { max_price_in_USD: USDprice(max), listing: max };
}

function maxQuantityAndListing(listings) {
  const max = maxValueAndListing(listings, listing => listing.quantity);
  return { max_quantity: max.quantity, listing: max };
}

function minPriceAndListing(listings) {
  const min = minValueAndListing(listings, USDprice);
  return { min_price_in_USD: USDprice(min), listing: min };
}

function minQuantityAndListing(listings) {
  const min = minValueAndListing(listings, listing => listing.quantity);
  return { min_quantity: min.quantity, listing: min };
}

// spit out results

console.log(results);
console.log(averagePrice(results));
console.log(averageQuantity(results));
console.log(maxPriceAndListing(results));
console.log(maxQuantityAndListing(results));
console.log(minPriceAndListing(results));
console.log(minQuantityAndListing(results));
