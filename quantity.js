var helpers = require('./helpers');
var quantity = {};

function quants (listings) {
  return listings.map(listing => listing.quantity);
}

quantity.averageQuantity = function (listings) {
  return helpers.averageValue(listings, quants);
}

quantity.maxQuantityAndListing = function (listings) {
  const max = helpers.maxValueAndListing(listings, listing => listing.quantity);
  return { max_quantity: max.quantity, listing: max };
}

quantity.minQuantityAndListing = function (listings) {
  const min = helpers.minValueAndListing(listings, listing => listing.quantity);
  return { min_quantity: min.quantity, listing: min };
}

module.exports = quantity;
