var quantity = require('../../../src/quantity.js');

describe('Price', function() {
  const results = [ { price: 10, currency_code: 'USD', quantity: 15 },
                  { price: 20, currency_code: 'GBP', quantity: 10 },
                  { price: 30, currency_code: 'EUR', quantity: 5 }
                  ];

  describe('#averageQuantity', function () {
    it('returns the averagePrice of listings', function() {
      var averageQuantity = 10;
      expect(quantity.averageQuantity(results)).toEqual(averageQuantity);
    });
  });

  describe('#minQuantityAndListing', function () {
    it('returns the minimum quantity and its listing', function() {
      var minQuantityAndListing = { min_quantity: 5,
                                    listing:
                                      { price: 30,
                                        currency_code: 'EUR',
                                        quantity: 5
                                      }
                                  };
      expect(quantity.minQuantityAndListing(results)).toEqual(minQuantityAndListing);
    });
  });

  describe('#maxQuantityAndListing', function () {
    it('returns the max quantity and its listing', function() {
      var maxQuantityAndListing = { max_quantity: 15,
                                    listing:
                                      { price: 10,
                                        currency_code: 'USD',
                                        quantity: 15
                                      }
                                  };
      expect(quantity.maxQuantityAndListing(results)).toEqual(maxQuantityAndListing);
    });
  });

});
