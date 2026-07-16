/**
 * rcloneview.com/support/* → R2 버킷(rcloneview-support) 정적 서빙 Worker.
 *
 * 규칙 (로컬 프리뷰 scripts/preview-server.mjs 와 동일):
 *   1. URL 에서 /support 프리픽스 제거 → R2 오브젝트 키
 *   2. 키가 그대로 존재하면 그 파일
 *   3. 없으면 <키>/index.html 시도 — ⚠️ 확장자처럼 보여도 반드시 시도할 것.
 *      /release-notes/v1.4 의 ".4" 를 확장자로 오인해 404 내는 결함을
 *      serve-handler 에서 실제로 겪었다 (2026-07). 점 유무로 분기하지 않는다.
 *   4. 둘 다 없으면 404.html (HTTP 404)
 *
 * 캐시 정책:
 *   - HTML: no-cache (항상 재검증 — 배포 즉시 반영)
 *   - 그 외(해시된 assets/js·css, 이미지 등): 1년 immutable
 *     (Docusaurus 가 파일명에 콘텐츠 해시를 넣으므로 안전)
 */

const MIME = {
  html: 'text/html; charset=utf-8',
  js: 'text/javascript',
  css: 'text/css',
  json: 'application/json',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  gif: 'image/gif',
  svg: 'image/svg+xml',
  ico: 'image/x-icon',
  webp: 'image/webp',
  mp4: 'video/mp4',
  woff: 'font/woff',
  woff2: 'font/woff2',
  xml: 'application/xml',
  xsl: 'application/xml',
  txt: 'text/plain; charset=utf-8',
  webmanifest: 'application/manifest+json',
};

function contentType(key) {
  const ext = key.split('.').pop().toLowerCase();
  return MIME[ext] ?? 'application/octet-stream';
}

function cacheControl(key) {
  return key.endsWith('.html')
    ? 'no-cache' // 재검증 후 서빙 — 배포가 즉시 보인다
    : 'public, max-age=31536000, immutable'; // 해시 자산: 1년
}

function respond(object, key, status = 200) {
  const headers = new Headers();
  headers.set('Content-Type', object.httpMetadata?.contentType || contentType(key));
  headers.set('Cache-Control', cacheControl(key));
  headers.set('ETag', object.httpEtag);
  return new Response(object.body, { status, headers });
}

export default {
  async fetch(request, env) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    const url = new URL(request.url);
    let path = decodeURIComponent(url.pathname);

    // /support 프리픽스 제거 (/support → /)
    if (path === '/support') {
      return Response.redirect(`${url.origin}/support/`, 301);
    }
    path = path.replace(/^\/support\//, '/');

    // 디렉터리 URL → index.html
    let key = path.endsWith('/') ? `${path}index.html` : path;
    key = key.replace(/^\/+/, '');
    if (key === '') key = 'index.html';

    // ① 정확한 키
    let object = await env.SUPPORT_BUCKET.get(key);

    // ② 없으면 디렉터리로 간주하고 index.html (점 포함 경로도 예외 없이)
    if (object === null && !key.endsWith('index.html')) {
      object = await env.SUPPORT_BUCKET.get(`${key}/index.html`);
      if (object !== null) key = `${key}/index.html`;
    }

    if (object !== null) {
      return respond(object, key);
    }

    // ③ 404 — 사이트의 404 페이지로
    const notFound = await env.SUPPORT_BUCKET.get('404.html');
    if (notFound !== null) {
      return respond(notFound, '404.html', 404);
    }
    return new Response('Not Found', { status: 404 });
  },
};
