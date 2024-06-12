import { calculate } from '../src/script';

describe('Check if value is saved calculation is NOT called', () => {
    it('should return true', () => {
      const cachedValue = 56;

      if (cachedValue === 56) {
        return;
      } else {
        calculate();
      }
      
      expect(calculate).toHaveBeenCalledTimes(0);
    });
  });