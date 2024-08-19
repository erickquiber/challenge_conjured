const { increaseQuality } = require('./Quality');

function updateBackstagePass(item) {
  increaseQuality(item);
  if (item.sellIn < 11) {
    increaseQuality(item);
  }
  if (item.sellIn < 6) {
    increaseQuality(item);
  }
  item.sellIn -= 1;
  if (item.sellIn < 0) {
    item.quality = 0;
  }
}

module.exports = updateBackstagePass;
