import * as scriptModule from '../src/script';

describe('Check if calculation function is called once', () => {
    it('should return true', () => {

        scriptModule.calculateDouble(28);
        scriptModule.calculateDouble(28);
        scriptModule.calculateDouble(28);

        expect(scriptModule.currentCount()).toBe(1);

    });
});
