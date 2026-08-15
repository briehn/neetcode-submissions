class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        /*
            iterate through columns i, add each value, if not '.' add to set
            iterate through rows j, add each value, if not . add to set
            iterate through sub-boxes (r/3 / c/3), add each value
         */

        const rowMap = new Map();
        const colMap = new Map();
        const boxMap = new Map();

        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                let box = Math.floor(Math.floor(row / 3) * 3 +  Math.floor(col / 3));
                let val = board[col][row]; 
                if (!rowMap[row]) rowMap[row] = new Set();
                if (!colMap[col]) colMap[col] = new Set();
                if (!boxMap[box]) boxMap[box] = new Set();

                if (rowMap[row].has(val) || colMap[col].has(val) || boxMap[box].has(val)) {
                    return false;
                }
                if (val != ".") {
                    rowMap[row].add(val);
                    colMap[col].add(val);
                    boxMap[box].add(val);
                }
            }
        }

        return true;
    }
}
