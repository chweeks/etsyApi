var price = require('../../../src/price.js'),
    quantity = require('../../../src/quantity.js');

describe('App', function() {
  const results = [ { price: 10, currency_code: 'USD', quantity: 15 },
                  { price: 20, currency_code: 'GBP', quantity: 10 },
                  { price: 30, currency_code: 'EUR', quantity: 5 }
                  ];

  describe('#averagePrice', function () {
    it('returns the averagePrice of listings', function() {
      var averagePrice = '24.17';
      expect(price.averagePrice(results)).toEqual(averagePrice);
    });
  });

  describe('#minPriceAndListing', function () {
    it('returns the minimum price and its listing', function() {
      var minPriceAndListing = { price_USD: 10,
                                 listing:
                                  { price: 10,
                                    currency_code: 'USD',
                                    quantity: 15
                                  }
                                };
      expect(price.minPriceAndListing(results)).toEqual(minPriceAndListing);
    });
  });

  describe('#maxPriceAndListing', function () {
    it('returns the max price and its listing', function() {
      var maxPriceAndListing = { price_USD: 33.5401643468053,
                                 listing:
                                 { price: 30,
                                   currency_code: 'EUR',
                                   quantity: 5
                                  }
                               };
      expect(price.maxPriceAndListing(results)).toEqual(maxPriceAndListing);
    });
  });

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
