// The Painfully Honest Out-of-Office — make.fun
// u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
//
// One out-of-office auto-reply, 154 characters, written to entry.txt with
// no trailing newline. Judge's order: (1) an out-of-office auto-reply that
// is painfully honest and still polite; (2) admits something true about
// absence/workload/inbox a real employee would only say privately;
// (3) warm, professional tone a manager would not object to; (4) one
// sentence of at most 200 characters without cramming; (5) a quotable
// turn of phrase, not a list of complaints.
//
// Why this line: the private truth is conduct, not the inbox count —
// "I am not behind on email, I am simply not reading it" denies, then
// confesses in one breath, which is the most painful honesty in the
// brief: a real employee would only say that privately. It is bookended
// by politeness ("Thank you for writing" ... "I will catch up then"),
// so a manager reading it sees a courteous reply that happens to tell
// the truth, not rudeness. No unread-count number (the field's most
// flooded lane: 26 of 62 visible texts), no "until Monday" pile-up
// beyond the one return date the reply needs, no colleague to dump on,
// no "thank you for your patience" (8 visible uses). First person, one
// sentence, no joke, no slogan, no metaphor. Tournament winner — see
// DESIGN.md.
//
// Determinism: the line is a constant; no clock, no random source, no
// network; only MAKEFUN_OUTPUT_DIR is read. Two runs to different
// directories write byte-identical files, as the grader requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 154 characters, no trailing newline: the gate counts characters (1-200),
// and the judge is shown the text exactly as submitted.
const LINE =
  "Thank you for writing; I am away until Monday, and the honest truth is that I am not behind on email, I am simply not reading it, so I will catch up then.";

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox; locally it
// is unset, so fall back to /output as the competition rules state.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(LINE, "utf8"));
