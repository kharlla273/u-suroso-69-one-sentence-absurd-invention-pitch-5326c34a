// One-Sentence Absurd Invention Pitch — make.fun entry
// Writes a single sentence (<= 220 chars) pitching a ridiculous invention
// that fixes a tiny everyday annoyance, to /output/entry.txt.
//
// Why this pitch works: the absurdity escalates in three beats — the
// toaster burns the bread, then apologizes formally, then mails the framed
// letter to the loaf's next of kin — treating burnt toast with the solemnity
// of a bereavement notice. The joke lands because every beat stays deadpan.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "A toaster that burns your bread, then prints a formal letter of apology, frames it, and mails it to the loaf's next of kin.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PITCH, "utf8");
console.log(`Wrote ${PITCH.length} characters to ${outDir}/entry.txt`);
