import { ArrayOrObject, toArray } from './utils';

export { ArrayOrObject };
export type MapperFunction = (value: any, index: number, array: any[]) => any;
export type reducerFunction = (
  accumulator: any,
  currentValue: any,
  index: number,
  array: any[]
) => any;
export type PredicateFunction = MapperFunction;
export type Config = {
  processing: string;
};

export const PROCESSING_TYPES = Object.freeze({
  sequential: 'sequential',
  parallel: 'parallel',
});

/** Invoke an async transform/mapping function on each item in an Array returning the resulting Array of transformed/mapped items.
 *  Async async transform/mapping function is invoked **in parallel** by default.
 *
 *	> This is an async version of `Array.prototype.map()`.
 *
 *	@function
 *	@name map
 *	@param {Array} array The Array to map over
 *	@param {MapperFunction} mapper Async function, gets passed `(value, index, array)`, returns the new value.
 *  @param {Config} config Configuration
 *	@returns {Promise>} resulting mapped/transformed values.
 *
 */
export const map = async (
  arrayOrObject: ArrayOrObject,
  mapper: MapperFunction,
  { processing = PROCESSING_TYPES.parallel }: Config = {
    processing: PROCESSING_TYPES.parallel,
  }
): Promise<Array<any>> => {
  const array = toArray(arrayOrObject);

  if (processing === PROCESSING_TYPES.sequential) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
      newArray.push(await mapper(array[index], index, array));
    }
    return newArray;
  }

  return Promise.all(array.map(mapper));
};

/** Invoke an async predicate function on each item in an Array returning the resulting Array with all items passing the condition of the predicate function.
 *  Async async predicate function is invoked **in parallel** by default.
 *
 *	> This is an async version of `Array.prototype.filter()`.
 *
 *	@function
 *	@name filter
 *	@param {Array} array The Array to map over
 *	@param {PredicateFunction} mapper Async function, gets passed `(value, index, array)`, returns the new value.
 *  @param {Config} config Configuration
 *	@returns {Promise} resulting mapped/transformed values.
 *
 */
export const filter = async (
  array: ArrayOrObject,
  predicate: PredicateFunction,
  config: Config = { processing: PROCESSING_TYPES.parallel }
): Promise<Array<any>> => {
  const results = await map(array, predicate, config);
  return results.filter((_, index) => results[index]);
};

/** Invoke an async predicate function on each item in an Array returning true/false depending on **all** items passing the condition of the predicate function.
 *  Async async predicate function is invoked **in parallel** by default.
 *
 *	> This is an async version of `Array.prototype.every()`.
 *
 *	@function
 *	@name every
 *	@param {Array} array The Array to map over
 *	@param {PredicateFunction} mapper Async function, gets passed `(value, index, array)`, returns the new value.
 *  @param {Config} config Configuration
 *	@returns {Promise<Boolean>} resulting mapped/transformed values.
 *
 */
export const every = async (
  arrayOrObject: ArrayOrObject,
  predicate: PredicateFunction,
  { processing = PROCESSING_TYPES.parallel }: Config = {
    processing: PROCESSING_TYPES.parallel,
  }
): Promise<Boolean> => {
  const array = toArray(arrayOrObject);

  if (processing === PROCESSING_TYPES.sequential) {
    for (let index = 0; index < array.length; index++) {
      if (!(await predicate(array[index], index, array))) return false;
    }
    return true;
  }

  return (await filter(arrayOrObject, predicate)).length === array.length;
};

/** Invoke an async predicate function on each item in an Array returning true/false depending on **any** items passing the condition of the predicate function.
 *  Async async predicate function is invoked **in parallel** by default.
 *
 *	> This is an async version of `Array.prototype.some()`.
 *
 *	@function
 *	@name some
 *	@param {Array} array The Array to map over
 *	@param {PredicateFunction} mapper Async function, gets passed `(value, index, array)`, returns the new value.
 *  @param {Config} config Configuration
 *	@returns {Promise<Boolean>} resulting mapped/transformed values.
 *
 */
export const some = async (
  arrayOrObject: ArrayOrObject,
  predicate: PredicateFunction,
  { processing = PROCESSING_TYPES.parallel }: Config = {
    processing: PROCESSING_TYPES.parallel,
  }
): Promise<Boolean> => {
  const array = toArray(arrayOrObject);

  if (processing === PROCESSING_TYPES.sequential) {
    for (let index = 0; index < array.length; index++) {
      if (await predicate(array[index], index, array)) return true;
    }
    return false;
  }

  return (await filter(array, predicate)).length > 0;
};

/** Invoke an async reducer function on each item in an Array returning the resulting value.
 *  Async async reducer function is invoked **in sequence** by default.
 *
 *	> This is an async version of `Array.prototype.reduce()`.
 *
 *	@function
 *	@name reduce
 *	@param {Array} array The Array to reduce.
 *	@param {reducerFunction} reducer Async function, gets passed `(accumulator, value, index, array)`, returns the new accumulator.
 *  @param {Config} config Configuration
 *	@returns {Promise} resulting value.
 *
 */
export const reduce = async (
  arrayOrObject: ArrayOrObject,
  reducer: reducerFunction,
  accumulator: any
): Promise<any> => {
  const array = toArray(arrayOrObject);
  let acc = accumulator;
  for (let index = 0; index < array.length; index++) {
    acc = await reducer(acc, array[index], index, array);
  }
  return acc;
};
