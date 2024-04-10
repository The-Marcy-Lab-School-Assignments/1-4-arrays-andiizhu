const uppercaseAll = (...moreWords) => {
  return moreWords.map(words => words.toUpperCase())
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};
const result1 = destructureCoordinates([1, 2]);
const result2 = destructureCoordinates([3, 4]);
console.log(result1)
console.log(result2)

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
