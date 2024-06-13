import * as scriptModule from '../src/script'; // Import the entire module

describe('Check if value is saved calculation is NOT called', () => {
    it('should return true', () => {
        // Spy on the calculate function to track calls
        const calculateSpy = jest.spyOn(scriptModule, 'calculate');

        scriptModule.calculateDouble(28); // First call
        scriptModule.calculateDouble(28); // Second call
        scriptModule.calculateDouble(28); // Third call

        expect(calculateSpy).toHaveBeenCalledTimes(1);

        // Restore the original function
        calculateSpy.mockRestore();
    });
});
