// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (str) => {
  let output = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    output += str[i];
  }
  return output;
};
module.exports = reverse;
