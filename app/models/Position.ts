export type Position = {
  x: number;
  y: number;
};

export const comparePositions = (
  a: Position | undefined,
  b: Position | undefined
): number => {
  console.log('compare positions:', a, b);
  if (a === b) return 0; // 両方 undefined または等しい場合
  if (a === undefined) return -1; // a が undefined の場合、b が先
  if (b === undefined) return 1; // b が undefined の場合、a が先

  console.log(
    'compare results:',
    a.y !== b.y ? compare(a.y, b.y) : compare(a.x, b.x)
  );

  // a, b がともに Position の場合
  return a.y !== b.y ? compare(a.y, b.y) : compare(a.x, b.x);
};

const compare = (a: number, b: number): number => {
  return a < b ? -1 : a > b ? 1 : 0;
};
