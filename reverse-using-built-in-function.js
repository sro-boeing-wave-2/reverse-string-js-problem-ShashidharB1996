// The intent of this file is to reverse
// the string using built in functions.
const reverse = (str) => {
  // Use the split() method to return a new array
  const splitString = str.split('');

  // Use the reverse() method to reverse the new created array
  const reverseArray = splitString.reverse();

  // Use the join() method to join all elements of the array into a string
  const joinArray = reverseArray.join('');

  // Return the reversed string
  return joinArray;
};

module.exports = reverse;
