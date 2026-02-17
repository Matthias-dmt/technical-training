export type Exercise = {
  load: () => Promise<any>;
  pick: (mod: any) => (input: any) => any;
};

export const EXERCISES: Record<string, Exercise> = {
  "smallest-missing-positive": {
    load: () => import("../algorithms/arrays/smallest-missing-positive/solution"),
    pick: (mod) => mod.smallestMissingPositive,
  },
};