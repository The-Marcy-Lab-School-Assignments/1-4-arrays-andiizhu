const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront === true){
    arr.unshift(value)
  } else if (isFront === false){
    arr.push(value)
  }
};

const reverseString = (string) => {
  let splitString = string.split("")
  let reverseLetters = splitString.reverse()
  return reverseLetters.join("")
  
};
// console.log(reverseString("Hello World"))

const newArrayFullOf = (value, numOfValue) => {
  return new Array(numOfValue).fill(value)
  // let newArray = []
  // for (let i = 0; i < numOfValue; i++){
  //     newArray.push(value)
  // } return newArray
};
// console.log(newArrayFullOf(1, 5))

const insertIntoMiddle = (arr, value) => {
  arr.splice(Math.floor(arr.length/2), 0, value)
};

const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length/2), 1, )
};

const isRightIndex = (arr, value, index) => {
  if (arr[index] === value){
    return true
  } else false
};

const roundAllNumsDown = (arr) => {
  return arr.map(value => Math.floor(value))
};

const getAllYCoordinates = (arrOfCoords) => {
  return arrOfCoords.map(value => value[1])
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
