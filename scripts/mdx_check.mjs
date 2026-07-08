// i18n 블로그 번역본 MDX 컴파일 일괄 검사.
// Docusaurus 빌드 전에 깨진 파일을 빠르게 찾는다.
//   node scripts/mdx_check.mjs
import { compile } from '@mdx-js/mdx';
import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const locales = ['ko', 'ja', 'zh-Hans', 'zh-Hant', 'de', 'es', 'fr', 'id'];
let bad = 0;
let total = 0;
for (const loc of locales) {
  const dir = `i18n/${loc}/docusaurus-plugin-content-blog`;
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.md'))) {
    total++;
    let text = readFileSync(join(dir, f), 'utf8');
    // frontmatter와 HTML 주석(truncate 마커 등)은 Docusaurus가 MDX 전에 처리
    text = text.replace(/^---\n[\s\S]*?\n---\n/, '');
    text = text.replace(/<!--[\s\S]*?-->/g, '');
    try {
      await compile(text, { format: 'mdx' });
    } catch (e) {
      bad++;
      console.log(`${loc}/${f}: ${e.reason || e.message} (line ${e.line ?? '?'})`);
    }
  }
}
console.log(`검사 ${total} / 실패 ${bad}`);
