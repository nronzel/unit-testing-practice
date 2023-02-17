export default function analyzeArray(array) {
  return {
    average: array.reduce((result, x) => (result += x)) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}
