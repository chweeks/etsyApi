var categories = {};

categories.categoryFrequencies = function(listings) {
  return sortCategories(listings).map(frequencyObject);
};

function getCategories(listings) {
  return listings.reduce((categories, listing) => categories.concat(listing.category_path), []);
};

function groupCategories(listings) {
  const categories = getCategories(listings);
  const tallies = {}
  categories.forEach(category => {
    if (tallies[category]) {
      tallies[category] += 1;
    } else {
      tallies[category] = 1;
    }
  });
  return tallies
};

function arrayOfCategories(listings) {
  const hash = groupCategories(listings);
  return Object.keys(hash).map(key => [key, hash[key]]);
};

function sortCategories(listings) {
  const array = arrayOfCategories(listings);
  return array.sort((a, b) => b[1] - a[1]);
};

function frequencyObject(array) {
  return { 'category_path': array[0], 'frequency': array[1] };
};

module.exports = categories;
