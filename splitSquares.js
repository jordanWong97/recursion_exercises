
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
  // Try to go to the last most square and simplify it if possible
  // Then work backwards and simplify every other square that can be simplified
  // check if an array has all of the same values

  if (!Array.isArray(squares)) return squares;

  function _simplify(squares) {
    // for(let square of squares) {

    for (let miniSquare of squares) {
      if (Array.isArray(miniSquare)) {
        _simplify(miniSquare)
      }
    }

    if (squares.every(i => i === squares[0])) {
        console.log('3', squares, squares[0])
        squares = squares[0];
      
        console.log('gets here 2', squares);
      }
      // const smallerSquareIndex = squares.findLastIndex(square => Array.isArray(square));

    }
  _simplify(squares);

  // console.log('updated', squares);

  return squares;
}

// if(smallerSquareIndex !== -1) {
//   console.log('gets here', squares[smallerSquareIndex]);
//   _simplify(squares[smallerSquareIndex]);

// if(squares.every(square => square === squares[0])) {
//   squares = squares[0];
//   console.log('gets here 2', squares)
// }