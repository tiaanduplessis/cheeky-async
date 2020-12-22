export type ArrayOrObject = Array<any> | Object;

export const toArray = (arrayLike: ArrayOrObject) =>
  Array.isArray(arrayLike) ? arrayLike : Object.entries(arrayLike);

export const sleep = (ms: number = 50) =>
  new Promise(resolve => setTimeout(resolve, ms));
