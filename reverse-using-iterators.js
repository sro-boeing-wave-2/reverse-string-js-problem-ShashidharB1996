// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (str) => {
  let out = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    out += str[i];
  }
  return out;
};
module.exports = reverse;
