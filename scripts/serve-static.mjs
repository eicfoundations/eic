import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";
import { createServer } from "node:http";

const root = resolve(process.cwd(), "out");
const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT || 3000);

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "application/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".ico", "image/x-icon"],
  [".txt", "text/plain; charset=utf-8"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

function resolvePath(urlPath) {
  const pathname = decodeURIComponent((urlPath || "/").split("?")[0]);
  const cleanPath = pathname === "/" ? "/index.html" : pathname;
  const candidate = normalize(join(root, cleanPath));

  if (!candidate.startsWith(root)) {
    return null;
  }

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    return candidate;
  }

  const htmlCandidate = `${candidate}.html`;
  if (existsSync(htmlCandidate) && statSync(htmlCandidate).isFile()) {
    return htmlCandidate;
  }

  const indexCandidate = join(candidate, "index.html");
  if (existsSync(indexCandidate) && statSync(indexCandidate).isFile()) {
    return indexCandidate;
  }

  return null;
}

const server = createServer((req, res) => {
  const filePath = resolvePath(req.url);

  if (!filePath) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
    return;
  }

  const contentType =
    contentTypes.get(extname(filePath).toLowerCase()) ||
    "application/octet-stream";

  res.writeHead(200, { "Content-Type": contentType });
  createReadStream(filePath).pipe(res);
});

server.listen(port, host, () => {
  console.log(`Static site available at http://${host}:${port}`);
});
