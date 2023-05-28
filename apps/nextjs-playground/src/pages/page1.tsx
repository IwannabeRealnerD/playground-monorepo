export default function Test1() {
  const testObj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10 };
  const testObj2 = structuredClone(testObj);
  return <h1>Test1 page{JSON.stringify(testObj2)}</h1>;
}
