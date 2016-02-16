var helpers = {};

helpers.getValues = function(listings, key) {
  return listings.reduce((values, listing) => values.concat(listing[key]), []);
};

helpers.groupValues = function(listings, key) {
  const values = this.getValues(listings, key);
  const tallies = {}
  values.forEach(value => {
    if (tallies[value]) {
      tallies[value] += 1;
    } else {
      tallies[value] = 1;
    }
  });
  return tallies
};

helpers.arrayOfValues = function(listings, key) {
  const hash = this.groupValues(listings, key);
  return Object.keys(hash).map(key => [key, hash[key]]);
};

helpers.sortValues = function(listings, key) {
  const array = this.arrayOfValues(listings, key);
  return array.sort((a, b) => b[1] - a[1]);
};

helpers.listingHasValue = function(listing, key, value) {
  return listing[key].indexOf(value) >= 0;
};

helpers.listingHasValues = function(listing, key, values) {
  const tests = values.map(value => this.listingHasValue(listing, key, value));
  return tests.reduce((a, b) => a || b, false);
};

module.exports = helpers;
