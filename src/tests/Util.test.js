import Util from "../Util";

it("test single item", () =>
    expect(Util.generateSequence(1)).toEqual([0])
);

it("test multiple items", () =>
    expect(Util.generateSequence(2)).toEqual([0,1])
);

it("test start from 1", () =>
    expect(Util.generateSequence(2, 1)).toEqual([1,2])
);

it("test start from -1", () =>
    expect(Util.generateSequence(2, -1)).toEqual([-1,0])
);

it("invalid argument length", () =>
    expect(() => Util.generateSequence(-1, 1)).toThrow()
);




it("test days valid", () =>
    expect(Util.getDayName(1)).toEqual('Monday')
);

it("test days invalid", () =>
    expect(() => Util.getDayName(0)).toThrow()
);


it("test pad 2 zeros", () =>
    expect(Util.pad(1, 3, '0')).toEqual('001')
);

it("test pad nothing", () =>
    expect(Util.pad(123, 3, '0')).toEqual('123')
);