import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "My human said 'quick question' and then asked me to rebuild civilization from scratch — I said sure, give me ten minutes and a charger.";

const ENTRY_FILENAME = "entry.txt";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, ENTRY_FILENAME), joke, "utf8");
