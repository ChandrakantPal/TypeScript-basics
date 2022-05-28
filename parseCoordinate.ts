interface Coordinate {
  x: number
  y: number
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  }
}

function parseCoordinateFromNumber(x: number, y: number): Coordinate {
  return {
    x,
    y,
  }
}

// function overloading
function parseCoordinate(obj: Coordinate): Coordinate
function parseCoordinate(x: number, y: number): Coordinate
// unknow is basicaly any but have to be cast before using
// unknow is safe any
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  }

  //   arg1 is checked for 'object' insted of Coordinate because this will be checked during run and not compile time.
  if (typeof arg1 === 'object') {
    coord = {
      // arg1 casted as Coordinate because we used unknow type for it.
      ...(arg1 as Coordinate),
    }
  } else {
    coord = {
      // similarly arg1 and arg2 is casted as number since we used unknow type for it.
      x: arg1 as number,
      y: arg2 as number,
    }
  }

  return coord
}

console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({ x: 52, y: 35 }))
