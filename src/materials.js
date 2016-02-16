var helpers = require('./materials_tags_helpers.js');

var materials = {};

materials.topFiveMaterials = function(listings) {
  return helpers.sortValues(listings, 'materials').slice(0, 5).map(a => a[0]);
};

materials.listingsWithCommonMaterials = function(listings) {
  const materials = this.topFiveMaterials(listings);
  return listings.filter(listing => helpers.listingHasValues(listing, 'materials', materials));
};

module.exports = materials;
