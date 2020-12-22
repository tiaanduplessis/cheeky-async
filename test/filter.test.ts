import { filter } from '../src';
import { sleep } from '../src/utils';

describe('filter', () => {
  it('filter items in Array based on predicate function in parallel', () => {
    const predicate = async (value: number) => {
      await sleep();
      return value > 2;
    };
    expect(filter([1, 2, 3], predicate)).resolves.toEqual([3]);
  });
});
