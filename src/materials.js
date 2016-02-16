materials = {};

materials.topFiveMaterials = function(listings) {
  return sortMaterials(listings).slice(0, 5).map(a => a[0]);
}

materials.listingsWithCommonMaterials = function(listings) {
  const materials = topFiveMaterials(listings);
  return materials.map(material => filterByMaterial(listings, material));
}

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

function filterByMaterial(listings, material) {
  return listings.filter(listing => listing.materials.indexOf(material) >= 0);
}

module.exports = materials;
