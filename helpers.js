var helpers = {};

helpers.averageValue = function (listings, valueFunc) {
  const sum = valueFunc(listings).reduce((a, b) => a + b);
  return sum / (listings.length);
}

helpers.maxValueAndListing = function (listings, valueFunc) {
  return listings.reduce(((max, listing) =>
    valueFunc(listing) > valueFunc(max) ? listing : max
  ), listings[0]);
}

helpers.minValueAndListing = function (listings, valueFunc) {
  return listings.reduce(((min, listing) =>
    valueFunc(listing) < valueFunc(min) ? listing : min
  ), listings[0]);
}

module.exports = helpers;
