// The intent of this file is to reverse
// the string using built in functions.
const reverse = (str) => {
  const str1 = str.split('');
  const str2 = str1.reverse();
  const revStr = str2.join('');
  return revStr;
};
module.exports = reverse;
