import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const eslint = resolve(root, "node_modules", "eslint", "bin", "eslint.js");
const result = spawnSync(process.execPath, [eslint, "src", "next.config.ts"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, ESLINT_USE_FLAT_CONFIG: "false" },
});

process.exit(result.status ?? 1);