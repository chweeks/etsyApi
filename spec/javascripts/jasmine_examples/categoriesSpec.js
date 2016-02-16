var categories = require('../../../src/categories.js')

describe('Materials', function() {
  const results = [ { 'listing_id': '11111', 'category_path': ['jewelry', 'cotten', 'paper', 'tin'] },
                    { 'listing_id': '22222', 'category_path': ['silver', 'twine', 'wood', 'cotton'] },
                    { 'listing_id': '33333', 'category_path': ['tin', 'vinyl', 'aluminium', 'twine'] },
                    { 'listing_id': '44444', 'category_path': ['cotton'] },
                    { 'listing_id': '55555', 'category_path': ['cotton', 'tin'] },
                  ];

  describe('#categoryFrequencies', function () {
    it('return the category frequencies', function() {
      var categoryFrequencies = [ { category_path : 'tin', frequency : 3 }, { category_path : 'cotton', frequency : 3 }, { category_path : 'twine', frequency : 2 }, { category_path : 'jewelry', frequency : 1 }, { category_path : 'cotten', frequency : 1 }, { category_path : 'paper', frequency : 1 }, { category_path : 'silver', frequency : 1 }, { category_path : 'wood', frequency : 1 }, { category_path : 'vinyl', frequency : 1 }, { category_path : 'aluminium', frequency : 1 } ];
      expect(categories.categoryFrequencies(results)).toEqual(categoryFrequencies);
    });
  });
});
