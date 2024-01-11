const { getMax } = require("../store/maxSizeContext");
const { addUsed, isUsed, getUsed } = require("../store/usedCache");

const getRndArray = (n) => {
  var list = [];
  console.log(n);
  while (n > 0) {
    let rnd = ((Math.random() * getMax()) | 0) + 1;
    console.log(getUsed());
    while (isUsed(rnd) || list.includes(rnd)) {
      rnd = ((Math.random() * getMax()) | 0) + 1;
    }
    list.push(rnd);
    addUsed(rnd);
    n--;
  }
  return list;
};

module.exports = { getRndArray };
