import R from 'ramda';
import TimeInterval from "./entities/TimeInterval";

class SyncData {

    /**
     *
     * @param {Array} matrix
     * @returns {Array}
     */
    static getIntervalsFromMatrix(matrix) {
        let mapIndexed = R.addIndex(R.map);

        return mapIndexed((val, idx) => SyncData.getIntervalsForDay(idx, val), matrix);
    }

    /**
     *
     * @param {int} day
     * @param {Array} row
     * @returns {Array}
     */
    static getIntervalsForDay(day, row) {
        return R.compose(
            R.curry(SyncData.getIntervals)(day),
            SyncData.getValidHours
        )(row);
    }

    /**
     *
     * @param {Array} row
     * @returns {Array}
     */
    static getValidHours(row) {
        let assignIndexesToValidEntries = R.addIndex(R.map())((val, idx) => val === true ? idx : false);

        return R.compose(R.filter((val) => val !== false), assignIndexesToValidEntries)(row);
    }

    /**
     *
     * @param {int} day
     * @param {Array} validHours
     * @returns {Array}
     */
    static getIntervals(day, validHours) {
        if (!validHours.length) {
            return [];
        }

        let initializeInterval = (day, value) => {
            let interval = new TimeInterval(day);
            interval.from = value;
            interval.to = value + 1;

            return interval;
        };
        let initIntervalForDay = R.curry(initializeInterval)(day);
        let initialValue = [initIntervalForDay(validHours.shift())];

        return validHours.reduce((intervals, nextValue) => {
            let currentInterval = intervals.pop();
            if (SyncData.belongToInterval(currentInterval, nextValue)) {
                currentInterval.to = nextValue + 1;
                intervals.push(currentInterval);
            } else {
                intervals.push(currentInterval);
                intervals.push(initIntervalForDay(nextValue));
            }

            return intervals;
        }, initialValue)
    }

    /**
     *
     * @param {TimeInterval} interval
     * @param {int} value
     */
    static belongToInterval(interval, value) {
        return interval.to === value;
    }

}

export default SyncData