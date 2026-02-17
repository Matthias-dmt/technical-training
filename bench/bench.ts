import { performance } from "node:perf_hooks";
import { EXERCISES } from "./exercises";
import { generateNoisyArrayWithMissingPositive } from "./datasets";

function timeOnce<T, R>(fn: (x: T) => R, input: T) {
  const t0 = performance.now();
  const result = fn(input);
  const t1 = performance.now();
  return { result, ms: t1 - t0 };
}

async function main() {
  const key = process.argv[2];
  const n = Number(process.argv[3] ?? 100_000);

  if (!key || !(key in EXERCISES)) {
    console.log("Usage: pnpm bench <exercise> [n]");
    console.log("Exercises:", Object.keys(EXERCISES).join(", "));
    process.exit(1);
  }

  const ex = EXERCISES[key];
  const mod = await ex.load();
  const fn = ex.pick(mod);

  if (typeof fn !== "function") {
    throw new Error(`Exercise "${key}" does not export the expected function.`);
  }

  // dataset (séparé)
  const { input, expected } = generateNoisyArrayWithMissingPositive(n);

  // IMPORTANT: copier l’input si ta fonction mute (sort / swaps)
  const warmups = 3;
  for (let i = 0; i < warmups; i++) fn([...input]);

  const { result, ms } = timeOnce(fn, [...input]);

  console.log(
    JSON.stringify(
      {
        exercise: key,
        n,
        inputSize: input.length,
        expected,
        result,
        ms: Number(ms.toFixed(2)),
      },
      null,
      2
    )
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});