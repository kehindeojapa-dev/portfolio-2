// Builds the site, serves it, and prints /cv to public/cv/kehinde-ojapa-cv.pdf
// with headless Chrome. Run with: npm run cv:pdf
import { spawn, execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const PORT = 4329;
const OUT = resolve("public/cv/kehinde-ojapa-cv.pdf");
const CHROME =
  process.env.CHROME_PATH ??
  [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
  ].find((p) => existsSync(p));

if (!CHROME) {
  console.error("Chrome not found. Set CHROME_PATH to a Chrome or Chromium binary.");
  process.exit(1);
}

execFileSync("npx", ["astro", "build"], { stdio: "inherit" });

const server = spawn("npx", ["astro", "preview", "--port", String(PORT)], { stdio: "pipe" });
const stop = () => server.kill();
process.on("exit", stop);

await new Promise((ok, fail) => {
  const t = setTimeout(() => fail(new Error("preview server did not start")), 20000);
  server.stdout.on("data", (d) => {
    if (String(d).includes(String(PORT))) {
      clearTimeout(t);
      ok();
    }
  });
});

execFileSync(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=5000",
  `--print-to-pdf=${OUT}`,
  `http://localhost:${PORT}/cv/`,
]);
console.log(`Wrote ${OUT}`);
stop();
