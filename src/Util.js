import R from 'ramda';

class Util {

    /**
     * @param {int} length
     * @param {int} start
     */
    static generateSequence(length, start = 0) {
        if (length < 0) {
            throw new Error("invalid argument 'length'");
        }
        return Array.apply(null, {length: length}).map(Number.call, Number).map((num) => num + start);
    }

    /**
     * @param {int} index
     * @returns {string}
     */
    static getDayName(index) {
        if (index < 0 || index > 6) {
            throw new RangeError("invalid argument 'index'");
        }

        return [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ][index];
    }

    /**
     * @param {string} n
     * @param {int} width
     * @param {string} z
     * @returns {string}
     */
    static pad(n, width, z = '0') {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    /**
     * @param {int} width
     * @param {int} height
     * @param {*} defaultValue
     * @returns {Array}
     */
    static generateMatrix(width, height, defaultValue = false) {
        let matrix = [];

        for (let i = 0; i < width; i++) {
            let row = [];
            for (let j = 0; j < height; j++) {
                row.push(defaultValue);
            }
            matrix.push(row);
        }

        return matrix;
    }

    /**
     * @param {Array} matrix
     * @param {int} rowIndex
     * @param {int} columnIndex
     * @param {function} fn
     * @returns {Array}
     */
    static updateMatrixCell(matrix, rowIndex, columnIndex, fn) {
        let updatedMatrix = R.clone(matrix);

        updatedMatrix[rowIndex][columnIndex] = fn(updatedMatrix[rowIndex][columnIndex]);

        return updatedMatrix;
    }

    /**
     * @param {Array} matrix
     * @param {int} rowIndex
     * @param {function} fn
     * @returns {Array}
     */
    static updateMatrixRow(matrix, rowIndex, fn) {
        let updatedMatrix = R.clone(matrix);

        updatedMatrix[rowIndex] = updatedMatrix[rowIndex].map((entry) => fn(entry));

        return updatedMatrix;
    }

    /**
     * @param {Array} matrix
     * @param {int} columnIndex
     * @param {function} fn
     * @returns {Array}
     */
    static updateMatrixColumn(matrix, columnIndex, fn) {
        let updatedMatrix = R.clone(matrix);
        let invertRowEntry = R.curry(Util.editRowEntry)(fn, columnIndex);

        updatedMatrix = updatedMatrix.map((row) => invertRowEntry(row));

        return updatedMatrix;
    }

    /**
     *
     * @param {function} fn
     * @param {int} columnIndex
     * @param {Array} row
     * @returns {Array}
     */
    static editRowEntry(fn, columnIndex, row) {
        let newRow = R.clone(row);

        newRow[columnIndex] = fn(row[columnIndex]);
        return newRow;
    }

    /**
     *
     * @param {Array} array
     * @returns {*}
     */
    static getLastItemOfArray(array) {
        return array.slice(-1)[0];
    }
}

export default Util;