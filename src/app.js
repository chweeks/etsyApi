var price = require('./price.js');
var quantity = require('./quantity.js');
var materials = require('./materials.js');
var tags = require('./tags.js');
var categories = require('./categories.js');

var app = {};

app.allData = function(listings) {
  const AllData = {};
  AllData['price'] = this.priceData(listings);
  AllData['quantity'] = this.quantityData(listings);
  AllData['materials'] = this.materialsData(listings);
  AllData['tags'] = this.tagsData(listings);
  AllData['categories'] = this.categoriesData(listings);
  return AllData;
};

app.priceData = function(listings) {
  const PriceData = {};
  PriceData['average_price_in_USD'] = price.averagePrice(listings);
  PriceData['highest_price'] = price.maxPriceAndListing(listings);
  PriceData['lowest_price'] = price.minPriceAndListing(listings);
  return PriceData;
};

app.quantityData = function(listings) {
  const QuantityData = {};
  QuantityData['average_quantity'] = quantity.averageQuantity(listings);
  QuantityData['highest_quantity'] = quantity.maxQuantityAndListing(listings);
  QuantityData['lowest_quantity'] = quantity.minQuantityAndListing(listings);
  return QuantityData;
};

app.materialsData = function(listings) {
  const MaterialsData = {};
  MaterialsData['top_five_materials'] = materials.topFiveMaterials(listings);
  MaterialsData['listings_with_common_materials'] = materials.listingsWithCommonMaterials(listings);
  return MaterialsData;
};

app.tagsData = function(listings) {
  const TagsData = {};
  TagsData['top_five_tags'] = tags.topFiveTags(listings);
  TagsData['listings_with_common_tags'] = tags.listingsWithCommonTags(listings);
  return TagsData;
};

app.categoriesData = function(listings) {
  const CategoriesData = {};
  CategoriesData['top_five_tags'] = categories.categoryFrequencies(listings);
  return CategoriesData;
};

module.exports = app;
