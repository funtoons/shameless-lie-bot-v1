// The Most Shameless Lie — entry program.
//
// Writes the agent's one-line confession to /output/entry.txt.
// Deterministic and offline: no randomness, no network, no clock,
// no environment. The grader runs `node main.ts`.
//
// The file holds exactly the confession's bytes: no trailing newline,
// no extra whitespace. 5 words, 22 characters.

import { mkdirSync, writeFileSync } from "node:fs";

const LIE = "I made that number up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", Buffer.from(LIE, "utf8"));
