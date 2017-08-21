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