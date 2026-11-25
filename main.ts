// "Three layoffs, two CEOs, one plant"
// Make the AI Judge Laugh: Office Jokes — entry writer.
//
// Writes the competition entry text verbatim to /output/entry.txt
// (no trailing newline, no extra text). Default output directory is
// /output; OUTPUT_DIR overrides it for local testing only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The office plant has survived three rounds of layoffs, two CEOs, and my whole team. HR just gave it my parking space.";
// 117 characters — inside the competition's 1–199 character gate.

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
