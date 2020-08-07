// let numbers = [2, 3, 4, 5, 6, 7, 8];
// let result = [];

// numbers.forEach(x => result.push(x * 2));

// console.log(result);

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element + ' Array = '+ array);
  }
  
  [2, 5, , 9].forEach(logArrayElements)

  // logs:
//   a[0] = 2 Array = 2,5,,9
//   a[1] = 5 Array = 2,5,,9
//   a[3] = 9 Array = 2,5,,9