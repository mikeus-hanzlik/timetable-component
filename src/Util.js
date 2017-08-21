class Util {

    /**
     * @param length
     * @param start
     */
    static generateSequence(length, start = 0) {
        if (length < 0) {
            throw new Error("invalid argument 'length'");
        }
        return Array.apply(null, {length: length}).map(Number.call, Number).map((num) => num + start);
    }
}

export default Util;