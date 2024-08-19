const { increaseQuality } = require('./Quality');

function updateAgedBrie(item) {
  increaseQuality(item);
  item.sellIn -= 1;
  if (item.sellIn < 0) {
    increaseQuality(item);
  }
}

module.exports = updateAgedBrie;
