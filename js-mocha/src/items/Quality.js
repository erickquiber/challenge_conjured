function increaseQuality(item, amount = 1) {
    if (item.quality < 50) {
      item.quality = Math.min(50, item.quality + amount);
    }
} 
function decreaseQuality(item, amount = 1) {
    if (item.quality > 0) {
      item.quality = Math.max(0, item.quality - amount);
    }
}
module.exports = {
    increaseQuality,
    decreaseQuality
};
