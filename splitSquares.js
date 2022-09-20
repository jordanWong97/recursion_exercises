
function dump(squares) {

  for (let square of squares) {

    if (Array.isArray(square)) {
      dump(square);

    } else {
      console.log(square);
    }
  }
}

function validate(squares) {
  // 0 or 1 only to valid
  // 4 squares total in orig squares arr

  if (!Array.isArray(squares)) {
    if (squares !== 0 && squares !== 1) {
      return false;
    }
    else {
      return true;
    }
  }

  if (squares.length !== 4) {
    return false;
  }

  for (let square of squares) {

    if (!validate(square)) {
      return false;
    }

  }
  return true;
}

//simplify([1, 0, [1, [0, 0, 0, 0], 1, [1, 1, 1, 1]], 1])

function simplify(squares) {
  //array.every(i => i===1 || i ===0)
  //if array, if square.every is square[0] return square[0]
  for (let square of squares) {



    if (Array.isArray(square)) {
      if (!square.every(i => i === square[0])) {
        return false;
      } else {
        return square[0];
      }
    }
    //simplify(square);
  }
  return squares;
}