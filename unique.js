function checkIfArrayIsUnique(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    for (var j = 0; j < myArray.length; j++) {
      if (i != j) {
        if (myArray[i] == myArray[j]) {
          return false; // means there are duplicate values
        }
      }
    }
  }
  return true; // means there are no duplicate values.
}
const arrOne = [1, 4, 6, 2, 1];
const arrTwo = [1, 4, 6, 2, 3];
console.log(checkIfArrayIsUnique(arrTwo));
console.log(checkIfArrayIsUnique(arrOne));
