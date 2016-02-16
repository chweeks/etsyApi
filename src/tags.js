var helpers = require('./materials_tags_helpers.js');

var tags = {};

tags.topFiveTags = function(listings) {
  return helpers.sortValues(listings, 'tags').slice(0, 5).map(a => a[0]);
};

tags.listingsWithCommonTags = function(listings) {
  const tags = this.topFiveTags(listings);
  return listings.filter(listing => helpers.listingHasValues(listing, 'tags', tags));
};

module.exports = tags;
