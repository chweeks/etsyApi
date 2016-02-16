describe('App', function() {
  const results = [ { price: 10, currency_code: 'USD', quantity: 15 },
                  { price: 20, currency_code: 'GBP', quantity: 10 },
                  { price: 30, currency_code: 'EUR', quantity: 5 }
                  ];

  describe('#averagePrice', function () {
    it('returns the averagePrice of listings', function() {
      var averagePrice = { average_price_in_USD: '24.17' };
      expect(app.averagePrice(results)).toEqual(averagePrice);
    });
  });

  describe('#averageQuantity', function () {
    it('returns the averagePrice of listings', function() {
      var averageQuantity = { average_quantity: 10 };
      expect(app.averageQuantity(results)).toEqual(averageQuantity);
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
      expect(app.minQuantityAndListing(results)).toEqual(minQuantityAndListing);
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
      expect(app.maxQuantityAndListing(results)).toEqual(maxQuantityAndListing);
    });
  });


});
