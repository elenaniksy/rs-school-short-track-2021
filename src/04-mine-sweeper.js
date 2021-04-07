/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];

  for (let y = 0; y < matrix.length; y++) {
    const row = [];
    for (let x = 0; x < matrix[y].length; x++) {
      let minecount = 0;
      if (y !== 0 && matrix[y - 1][x] === true) { // строго над
        minecount++;
      }
      if (y !== (matrix.length - 1) && matrix[y + 1][x] === true) { // строго под
        minecount++;
      }
      if (x !== 0 && matrix[y][x - 1] === true) { // слева
        minecount++;
      }
      if (matrix[y][x + 1] === true) { // справа
        minecount++;
      }
      if (y !== 0 && x !== 0 && matrix[y - 1][x - 1] === true) { // по диагонали вверх влево
        minecount++;
      }
      if (y !== (matrix.length - 1) && x
        !== (matrix[0].length - 1) && matrix[y + 1][x + 1] === true) { // по диагонали вниз
        // вправо
        minecount++;
      }
      if (y !== 0 && matrix[y - 1][x + 1] === true) { // по диагонали вверх вправо
        minecount++;
      }
      if (y !== (matrix.length - 1) && x !== 0 && matrix[y + 1][x - 1] === true) { // по диагонали
        // вниз влево
        minecount++;
      }
      row.push(minecount);
    }
    result.push(row);
  }
  return result;
}

module.exports = minesweeper;
