var categories = require('../../../src/categories.js')
var mockData = require('./mockData.js');

describe('Materials', function() {

  describe('#categoryFrequencies', function () {
    it('return the category frequencies', function() {
      var categoryFrequencies = [ { category_path : 'Supplies', frequency : 2 }, { category_path : 'Art', frequency : 1 }, { category_path : 'Printmaking', frequency : 1 }, { category_path : 'Accessories', frequency : 1 }, { category_path : 'Scarf', frequency : 1 }, { category_path : 'Commercial', frequency : 1 }, { category_path : 'Jewelry', frequency : 1 }, { category_path : 'Necklace', frequency : 1 } ];
      expect(categories.categoryFrequencies(mockData)).toEqual(categoryFrequencies);
    });
  });
});
