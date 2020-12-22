import { map, PROCESSING_TYPES } from '../src';
import { sleep } from '../src/utils';

const mapper = async (value: number) => {
  await sleep();
  return value * 2;
};

describe('map', () => {
  it('maps over items in Array using mapper function in parallel', () => {
    expect(map([1, 2, 3], mapper)).resolves.toEqual([2, 4, 6]);
  });

  it('maps over items in Array using mapper function in sequence', () => {
    expect(
      map([1, 2, 3], mapper, { processing: PROCESSING_TYPES.sequential })
    ).resolves.toEqual([2, 4, 6]);
  });

  it('maps over object entries using mapper function in parallel', () => {
    expect(
      map(
        {
          foo: 1,
          bar: 2,
        },
        mapper
      )
    ).resolves.toEqual([2, 4]);
  });
});
