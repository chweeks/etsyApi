var tags = require('../../../src/tags.js')

describe('Tags', function() {
  const results = [ { listing_id: '11111', materials: ['wool', 'cotton', 'paper', 'tin'],
                    tags: ['aaa', 'bbb', 'ccc', 'ddd', 'zzz'] },
                  { listing_id: '22222', materials: ['silver', 'twine', 'wood', 'cotton'],
                    tags: ['aaa', 'bbb', 'ccc', 'ddd', 'yyy'] },
                  { listing_id: '33333', materials: ['tin', 'vinyl', 'aluminium', 'twine'],
                    tags: ['www', 'bbb'] },
                  { listing_id: '44444', materials: ['cotton'],
                    tags: ['aaa', 'bbb', 'ccc', 'eee']  },
                  { listing_id: '55555', materials: ['bubblegum'],
                    tags: ['xxx', 'yyy']  },
                  { listing_id: '66666', materials: ['sugar', 'spice'],
                    tags: ['sss']  },
                  { listing_id: '77777', materials: ['cotton', 'tin'],
                    tags: ['ttt']  },
                  ];

  describe('#topFiveTags', function () {
    it('return the top five tags', function() {
      var topFiveTags = [ 'bbb', 'aaa', 'ccc', 'ddd', 'yyy' ];
      expect(tags.topFiveTags(results)).toEqual(topFiveTags);
    });
  });

  describe('#listingsWithCommonTags', function () {
    it('return the top five tags', function() {
      var topFiveTags = [ { listing_id : '11111', materials : [ 'wool', 'cotton', 'paper', 'tin' ],
                            tags : [ 'aaa', 'bbb', 'ccc', 'ddd', 'zzz' ] },
                          { listing_id : '22222', materials : [ 'silver', 'twine', 'wood', 'cotton' ],
                            tags : [ 'aaa', 'bbb', 'ccc', 'ddd', 'yyy' ] },
                          { listing_id : '33333', materials : [ 'tin', 'vinyl', 'aluminium', 'twine' ],
                            tags : [ 'www', 'bbb' ] },
                          { listing_id : '44444', materials : [ 'cotton' ],
                            tags : [ 'aaa', 'bbb', 'ccc', 'eee' ] },
                          { listing_id : '55555', materials : [ 'bubblegum' ],
                            tags : [ 'xxx', 'yyy' ] } ];
      expect(tags.listingsWithCommonTags(results)).toEqual(topFiveTags);
    });
  });

});
