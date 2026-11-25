import fs from "fs";
import path from "path";

const walk = (dir) =>
  fs.existsSync(dir)
    ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        const p = path.join(dir, e.name);
        return e.isDirectory() ? walk(p) : [p];
      })
    : [];

const rules = [
  [/delayChildren:\s*2\.\d+/g, "delayChildren: 0.1"],
  [/delay:\s*2\.\d+/g, "delay: 0.1"],
  [/first \? 2\.\d+ :/g, "first ? 0.1 :"],
  [/delay=\{2\}/g, "delay={0.3}"],
];

const files = [...walk("app"), ...walk("components")].filter((f) =>
  /\.(jsx|js|tsx|ts)$/.test(f),
);

for (const file of files) {
  const before = fs.readFileSync(file, "utf8");
  let after = before;
  for (const [re, to] of rules) after = after.replace(re, to);
  if (after !== before) {
    fs.writeFileSync(file, after);
    console.log("updated:", file);
  }
}