/**
 * 첫번째 사례
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 */

function returnFirestValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirestValue([0, 1, 2]);
let str = returnFirestValue([1, "hello", "mynameis"]);

/**
 * 3번째 사례
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3, 4]);

let var2 = getLength("12345");

let var3 = getLength({ length: 10 });

// let var4 = getLength(10);
