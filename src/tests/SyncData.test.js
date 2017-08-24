
import SyncData from "../SyncData";

it('test getValidHours', () => {
    expect(SyncData.getValidHours([false, false, true, false, true, false])).toEqual([2, 4])
});


it('test getIntervals empty', () => {
    expect(SyncData.getIntervals(0, [])).toEqual([])
});

it('test getIntervals one element', () => {
    expect(SyncData.getIntervals(0, [1])).toEqual([{day: 0, from: 1, to: 2}])
});

it('test getIntervals multiple', () => {
    expect(SyncData.getIntervals(0, [0,1,2,5,6])).toEqual([{day: 0, from: 0, to: 3}, {day: 0, from: 5, to: 7}])
});




it('test belongToInterval success', () => {
    expect(SyncData.belongToInterval({day: 0, from: 0, to: 2}, 2)).toBeTruthy()
});

it('test belongToInterval fail', () => {
    expect(SyncData.belongToInterval({day: 0, from: 0, to: 2}, 5)).toBeFalsy()
});