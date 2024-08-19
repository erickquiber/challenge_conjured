const { decreaseQuality } = require('./Quality');

function updateNormalItem(item) {
  decreaseQuality(item);
  item.sellIn -= 1;
  if (item.sellIn < 0) {
    decreaseQuality(item);
  }
}

module.exports = updateNormalItem;
