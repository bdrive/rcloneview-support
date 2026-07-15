// i18n 번역본(블로그 + docs) MDX 컴파일 일괄 검사.
// Docusaurus 빌드 전에 깨진 파일을 빠르게 찾는다.
//   node scripts/mdx_check.mjs
import { compile } from '@mdx-js/mdx';
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

const locales = ['ko', 'ja', 'zh-Hans', 'zh-Hant', 'de', 'es', 'fr', 'id'];
const PLUGIN_DIRS = [
  'docusaurus-plugin-content-blog',
  'docusaurus-plugin-content-docs-howto/current',
  'docusaurus-plugin-content-docs-tutorials/current',
  'docusaurus-plugin-content-docs-release-notes/current',
];

function* mdFiles(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* mdFiles(p);
    else if (e.name.endsWith('.md') || e.name.endsWith('.mdx')) yield p;
  }
}

let bad = 0;
let total = 0;
for (const loc of locales) {
  for (const plugin of PLUGIN_DIRS) {
    const dir = `i18n/${loc}/${plugin}`;
    if (!existsSync(dir)) continue;
    for (const p of mdFiles(dir)) {
      total++;
      let text = readFileSync(p, 'utf8');
      // frontmatter와 HTML 주석(truncate 마커 등)은 Docusaurus가 MDX 전에 처리
      text = text.replace(/^---\n[\s\S]*?\n---\n/, '');
      text = text.replace(/<!--[\s\S]*?-->/g, '');
      try {
        await compile(text, { format: 'mdx' });
      } catch (e) {
        bad++;
        console.log(`${p}: ${e.reason || e.message} (line ${e.line ?? '?'})`);
      }
    }
  }
}
console.log(`검사 ${total} / 실패 ${bad}`);
