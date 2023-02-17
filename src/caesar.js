const alpha = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

export default function caesar(string, shift) {
  string = removePunctuation(string);
  const arr = string.toLowerCase().split("");
  const shiftedLetters = [];

  arr.forEach((letter) => {
    const index = alpha[letter];
    let newIndex = index + shift;

    // loop back to beginning of alphabet
    if (index + shift > 26) newIndex = 0 + index + shift - 26;

    shiftedLetters.push(
      Object.keys(alpha).find((key) => alpha[key] === newIndex)
    );
  });

  return shiftedLetters.join("");
}

const removePunctuation = (string) => {
  return string.match(/([A-Z])/gi).join("");
};
