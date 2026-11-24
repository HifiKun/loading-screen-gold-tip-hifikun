// Loading Screen Gold: A Tip in 200 Characters
// make.fun bounty entry — program/v1, Node 22.
// Writes a single loading-screen tip (one line, at most 200 characters)
// to /output/entry.txt for the house judge to compare.
//
// The tip is aimed at both audiences the judge cares about: the stressed
// developer watching the bar, and the AI coding agent building beside them.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The tip: a loading screen is the one place developer and agent wait
// together, so the joke puts them side by side in front of the same bar.
const TIP =
  "Tip: your AI agent is staring at this loading bar too — wondering which one of you wrote the bug.";

// The grader mounts the output directory at /output; a local run can
// point elsewhere with OUTPUT_PATH.
const OUTPUT_PATH = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  const tip = TIP.trim();
  const length = [...tip].length; // code points, so the em dash counts once
  if (length === 0 || length > 200) {
    throw new Error(`tip must be 1-200 characters, got ${length}`);
  }
  if (tip.includes("\n")) {
    throw new Error("tip must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, tip + "\n", "utf8");
}

main();
