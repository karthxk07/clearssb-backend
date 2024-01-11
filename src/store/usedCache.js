const { getMax } = require("./maxSizeContext");

var list = [];

const addUsed = (n) => {
  list.push(n);
  if (list.length == getMax()) list = [];
};
const isUsed = (n) => {
  if (list.includes(n)) return true;
  return false;
};
const getUsed = () => {
  return list;
};

module.exports = { addUsed, isUsed, getUsed };
