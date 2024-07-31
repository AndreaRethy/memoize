import * as scriptModule from '../src/script';

describe('Check if calculation function is called once', () => {
    it('should return true', () => {
        const memoizedCalculate = scriptModule.memoize(scriptModule.calculateDouble);

        memoizedCalculate(28);
        memoizedCalculate(28);
        memoizedCalculate(28);

        expect(scriptModule.currentCount()).toBe(1);

    });
});
