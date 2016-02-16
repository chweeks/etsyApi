const results = [ { listing_id: '11111', materials: ['wool', 'cotton', 'paper', 'tin'] },
                  { listing_id: '22222', materials: ['silver', 'twine', 'wood', 'cotton'] },
                  { listing_id: '33333', materials: ['tin', 'vinyl', 'aluminium', 'twine'] },
                  { listing_id: '44444', materials: ['cotton'] },
                  { listing_id: '55555', materials: ['cotton', 'tin'] },
                ]

function getMaterials(listings) {
  return listings.reduce((materials, listing) => materials.concat(listing.materials), []);
}


function groupMaterials(listings) {
  const materials = getMaterials(listings);
  const tallies = {}
  materials.forEach(material => {
    if (tallies[material]) {
      tallies[material] += 1;
    } else {
      tallies[material] = 1;
    }
  });
  return tallies
}

function arrayOfMaterials(listings) {
  const hash = groupMaterials(listings);
  return Object.keys(hash).map(key => [key, hash[key]]);
};

function sortMaterials(listings) {
  const array = arrayOfMaterials(listings);
  return array.sort((a, b) => b[1] - a[1]);
}

function topFiveMaterials(listings) {
  return sortMaterials(listings).slice(0, 5).map(a => a[0]);
}

function filterByMaterial(listings, material) {
  return listings.filter(listing => listing.materials.indexOf(material) >= 0);
}

function listingsWithCommonMaterials(listings) {
  const materials = topFiveMaterials(listings);
  return materials.map(material => filterByMaterial(listings, material));
}

console.log(getMaterials(results));
console.log(sortMaterials(results));
console.log(topFiveMaterials(results));
console.log(filterByMaterial(results, 'aluminium'))
console.log(listingsWithCommonMaterials(results))
