class Util {

    /**
     * @param {number} length
     * @param {number} start
     */
    static generateSequence(length, start = 0) {
        if (length < 0) {
            throw new Error("invalid argument 'length'");
        }
        return Array.apply(null, {length: length}).map(Number.call, Number).map((num) => num + start);
    }

    /**
     * @param {number} index
     * @returns {string}
     */
    static getDayName(index) {
        if (index < 1 || index > 7) {
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
        ][index-1];
    }

    /**
     * @param {string} n
     * @param {number} width
     * @param {string} z
     * @returns {string}
     */
    static pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }
}

export default Util;