const { decreaseQuality } = require('./Quality');

function updateConjuradoItem(item) {
  decreaseQuality(item, 2);
  item.sellIn -= 1;
  if (item.sellIn < 0) {
    decreaseQuality(item, 2);
  }
}

module.exports = updateConjuradoItem;
