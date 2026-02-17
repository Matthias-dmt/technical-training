export function generateNoisyArrayWithMissingPositive(n: number) {
  const arr: number[] = [];
  const missing = Math.max(1, Math.floor(n * 0.7));

  // 1..n sauf missing
  for (let i = 1; i <= n; i++) {
    if (i !== missing) arr.push(i);
  }

  // duplicats
  for (let i = 0; i < n / 2; i++) {
    arr.push(Math.floor(Math.random() * n) + 1);
  }

  // bruit négatif / zero
  for (let i = 0; i < n / 2; i++) {
    const r = Math.random();
    arr.push(r < 0.33 ? 0 : -Math.floor(Math.random() * 1_000_000));
  }

  // shuffle Fisher–Yates
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return { input: arr, expected: missing };
}