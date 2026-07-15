// 프로덕션 빌드(build/) 로컬 프리뷰 서버.
//
// `docusaurus serve` 대체 — serve-handler 는 URL 경로에 점(.)이 있으면
// (예: /release-notes/v1.4) 확장자로 오인해 디렉터리의 index.html 을
// 찾지 않고 404 를 낸다. 이 서버는 실제 배포(nginx/Worker)와 같은
// 규칙으로 동작한다: baseUrl(/support) 제거 → 파일이면 그대로,
// 디렉터리면 index.html, 없으면 404.html.
//
//   node scripts/preview-server.mjs [port]   (기본 3001)
import { createServer } from 'node:http';
import { statSync, readFileSync, existsSync } from 'node:fs';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(import.meta.url), '..', '..', 'build');
const BASE = '/support';
const PORT = Number(process.argv[2]) || 3001;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.webp': 'image/webp', '.mp4': 'video/mp4',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json',
};

function resolve(urlPath) {
  let p = decodeURIComponent(urlPath.split('?')[0]);
  if (p === BASE) p = '/';
  else if (p.startsWith(BASE + '/')) p = p.slice(BASE.length);
  const fsPath = normalize(join(ROOT, p));
  if (!fsPath.startsWith(ROOT)) return null; // 경로 탈출 방지
  try {
    const st = statSync(fsPath);
    if (st.isDirectory()) {
      const idx = join(fsPath, 'index.html');
      return existsSync(idx) ? idx : null;
    }
    return fsPath;
  } catch {
    // /foo → /foo/index.html (trailing slash 없는 디렉터리 URL)
    const idx = join(fsPath, 'index.html');
    return existsSync(idx) ? idx : null;
  }
}

createServer((req, res) => {
  const file = resolve(req.url);
  if (file) {
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' });
    res.end(readFileSync(file));
  } else {
    const nf = join(ROOT, '404.html');
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(existsSync(nf) ? readFileSync(nf) : 'Not Found');
  }
}).listen(PORT, () => console.log(`preview: http://localhost:${PORT}${BASE}/ (root: ${ROOT})`));
