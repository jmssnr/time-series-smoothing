import { matrix, identity, transpose, multiply, add, inv, Matrix } from 'mathjs';

export function smoothing(
  y: number[],
  lambda: number = 1000,
  p: number = 2
): number[] {
  const n = y.length;
  if (n === 0) return [];

  const m = n - p;
  if (m <= 0) {
     return [...y];
  }

  const Ddata: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
  const coeffs = finiteDifferenceCoefficients(p);
  for (let i = 0; i < m; i++) {
    for (let k = 0; k <= p; k++) {
      Ddata[i][i + k] = coeffs[k];
    }
  }
  const D: Matrix = matrix(Ddata);
  const DT: Matrix = transpose(D);
  const DTD: Matrix = multiply(DT, D) as Matrix;

  const I: Matrix = identity(n) as Matrix;
  const M: Matrix = add(I, multiply(DTD, lambda)) as Matrix;

  const invM: Matrix = inv(M) as Matrix;
  const yVec: Matrix = matrix(y);
  const xHatMat: Matrix = multiply(invM, yVec) as Matrix;

  const xHat: number[] = xHatMat.toArray() as number[];

  return xHat;
}

function finiteDifferenceCoefficients(p: number): number[] {
  const coeffs: number[] = [];
  for (let k = 0; k <= p; k++) {
    const comb = binomial(p, k);
    coeffs[k] = ((k % 2) === 0 ? 1 : -1) * comb;
  }
  return coeffs;
}

function binomial(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result = result * (n - (k - i)) / i;
  }
  return result;
}
