// Entry for make.fun — "The Word You'd Delete From the Dictionary"
// (competition: u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2)
//
// The program writes exactly one word to /output/entry.txt: the single word
// it would erase from the dictionary forever.
//
// The pick: "awkward".
//   - A real, instantly recognised word, spelled correctly, nothing added.
//   - The joke lands at first sight: erase the word and awkwardness itself
//     has no name left — no more awkward silences, awkward first dates,
//     awkward elevator rides. The feeling goes with the word.
//   - The humour comes from the word itself — its meaning IS the discomfort
//     it names — not from shock value.
//   - Fresh: the field will reach first for "moist", "the" or "literally".
//     Nobody's first instinct is to delete awkwardness itself.
//
// Deterministic: no model calls, no network, no randomness, no clock.
// The same bytes are written on every run, so the replay matches live.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "awkward";

// Gate check, kept in code for clarity: 1–77 UTF-8 characters, not blank.
if (WORD.length < 1 || WORD.length > 77 || WORD.trim() === "") {
  throw new Error("word fails the entry gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
