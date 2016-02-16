materials = {};

materials.topFiveMaterials = function(listings) {
  return sortMaterials(listings).slice(0, 5).map(a => a[0]);
}

materials.listingsWithCommonMaterials = function(listings) {
  const materials = this.topFiveMaterials(listings);
  return listings.filter(listing => listingHasMaterials(listing, materials));
}

function getMaterials(listings) {
  return listings.reduce((materials, listing) => materials.concat(listing.materials), []);
}

function groupMaterials(listings) {
  const materials = getMaterials(listings);
  const tallies = {};
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

function listingHasMaterial(listing, material) {
  return listing.materials.indexOf(material) >= 0;
}

function listingHasMaterials(listing, materials) {
  const tests = materials.map(material => listingHasMaterial(listing, material));
  return tests.reduce((a, b) => a || b, false);
}

module.exports = materials;
