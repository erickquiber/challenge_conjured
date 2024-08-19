const Item = require('./Item');
const updateAgedBrie = require('./items/AgedBrie');
const updateBackstagePass = require('./items/BackstagePass');
const updateConjuredItem = require('./items/Conjurado');
const updateNormalItem = require('./items/NormalItem');
const updateSulfuras = require('./items/Sulfuras');

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      if (item.name === 'Aged Brie') {
        updateAgedBrie(item);
      } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
        updateBackstagePass(item);
      } else if (item.name.toLowerCase().includes('conjured')) {
        updateConjuredItem(item);
      } else if (item.name === 'Sulfuras, Hand of Ragnaros') {
        updateSulfuras(item);
      } else {
        updateNormalItem(item);
      }
    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};
