import { every } from '../src';
import { sleep } from '../src/utils';

describe('every', () => {
  it('checks if every item in Array passes test set by the predicate function in parallel', () => {
    const predicate = async (value: number) => {
      await sleep();
      return value > 0;
    };

    expect(every([1, 2, 3], predicate)).resolves.toBeTruthy();
    expect(every([-1, 2, 3], predicate)).resolves.toBeFalsy();
  });
});
