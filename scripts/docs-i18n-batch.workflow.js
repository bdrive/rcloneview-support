// docs(howto/tutorials/release-notes) 소급 번역 배치 — Claude Code Workflow 도구용.
// blog-i18n-batch.workflow.js 의 docs 변형. 실행 방법은 동일하되 args 가 다르다:
//   args: {"docs": ["howto/FAQ/x.md", "tutorials/y.md", "release-notes/z.md", ...]}
//   (저장소 루트 기준 상대 경로. 첫 세그먼트가 플러그인을 결정한다)
//
// 산출 위치: i18n/{locale}/docusaurus-plugin-content-docs-{plugin}/current/{나머지 경로}
// 실행 후 검증: validate_i18n.py + mdx_check.mjs (docs 확장판) + 전체 빌드.
// 사이드바 카테고리 라벨은 md 가 아니라 i18n/{loc}/.../current.json 에서 번역한다 (별도).

export const meta = {
  name: 'docs-i18n-batch',
  description: 'docs 소급 번역 배치 (Sonnet, howto/tutorials/release-notes)',
  phases: [{ title: 'Translate', detail: 'docs × locales, sonnet' }],
}

const ROOT = '/Users/tsjeong/workspace/bdrive/source/rcloneview-support'
const GLOSSARY = {
  'ko': { name: 'Korean', gl: 'remote→리모트, mount→마운트, sync→동기화, backup→백업, transfer→전송, cloud storage→클라우드 스토리지' },
  'ja': { name: 'Japanese', gl: 'remote→リモート, mount→マウント, sync→同期, backup→バックアップ, transfer→転送, cloud storage→クラウドストレージ' },
  'zh-Hans': { name: 'Simplified Chinese', gl: 'remote→远程, mount→挂载, sync→同步, backup→备份, transfer→传输, cloud storage→云存储' },
  'zh-Hant': { name: 'Traditional Chinese', gl: 'remote→遠端, mount→掛載, sync→同步, backup→備份, transfer→傳輸, cloud storage→雲端儲存' },
  'de': { name: 'German', gl: 'remote→Remote, mount→einbinden(mount), sync→Synchronisation, backup→Backup, transfer→Übertragung, cloud storage→Cloud-Speicher' },
  'es': { name: 'Spanish', gl: 'remote→remoto, mount→montar, sync→sincronización, backup→copia de seguridad, transfer→transferencia, cloud storage→almacenamiento en la nube' },
  'fr': { name: 'French', gl: 'remote→distant, mount→monter, sync→synchronisation, backup→sauvegarde, transfer→transfert, cloud storage→stockage cloud' },
  'id': { name: 'Indonesian', gl: 'remote→remote, mount→mount, sync→sinkronisasi, backup→pencadangan, transfer→transfer, cloud storage→penyimpanan cloud' },
}

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    doc: { type: 'string' },
    locale: { type: 'string' },
    written: { type: 'boolean' },
    notes: { type: 'string' },
  },
  required: ['doc', 'locale', 'written'],
}

function targetPath(doc, loc) {
  const seg = doc.split('/')
  const plugin = seg[0] // howto | tutorials | release-notes
  const rest = seg.slice(1).join('/')
  return `${ROOT}/i18n/${loc}/docusaurus-plugin-content-docs-${plugin}/current/${rest}`
}

function prompt(doc, loc) {
  const L = GLOSSARY[loc]
  return `You are a professional technical translator for RcloneView, a GUI for the rclone cloud-sync tool.

TASK: Read the Docusaurus docs page at:
  ${ROOT}/${doc}
Translate it from English to ${L.name}, then Write the full translated file to:
  ${targetPath(doc, loc)}

STRICT RULES — output must remain a valid, buildable Docusaurus doc:
1. The written file must contain ONLY the translated Markdown. No commentary, no tool syntax.
2. Frontmatter (between the first pair of --- lines): translate ONLY the values of "title", "description", "sidebar_label" (and human-readable strings inside "keywords" if present). Keep every other key/value byte-identical: sidebar_position, slug, id, image. Keep YAML quoting valid (quote values containing ":").
3. NEVER translate or alter: code blocks and inline code, URLs and link targets, image paths, product names (RcloneView, rclone, NetDrive...), cloud provider names, CLI commands/flags, HTML tags, heading anchor ids like {#custom-anchor}.
4. Import lines: rewrite relative src paths ('../src/...', '../../src/...') to '@site/src/...'. Keep '@theme/...' imports and everything else in the import identical.
5. JSX components: keep tags and props identical, EXCEPT translate human-visible text: children text, and the label="..." prop of <TabItem>. NEVER change the value="..." prop.
6. Preserve Markdown structure exactly: heading hierarchy, lists, tables, admonitions (:::tip etc.), and the SAME number of code blocks.
7. Translate link TEXT but never link URLs. Internal links (/howto/..., /blog/..., relative .md links) unchanged.
8. Terminology (use consistently): ${L.gl}
9. Tone: clear, natural technical writing for ${L.name} readers. Do not add or remove content.

After writing the file, return JSON: doc="${doc}", locale="${loc}", written, notes (one line, only if something was unusual — otherwise empty string).`
}

phase('Translate')
const A = typeof args === 'string' ? JSON.parse(args) : args
const LOCALES = Object.keys(GLOSSARY)
const pairs = []
for (const doc of A.docs) for (const loc of LOCALES) pairs.push({ doc, loc })
log(`번역 대상 ${pairs.length}건 시작 (${A.docs.length}문서 × ${LOCALES.length}로케일)`)

const results = await parallel(pairs.map(({ doc, loc }) => () =>
  agent(prompt(doc, loc), {
    label: `${loc}:${doc.slice(0, 32)}`,
    phase: 'Translate',
    model: 'sonnet',
    effort: 'low',
    schema: SCHEMA,
  })
))

const done = results.filter(Boolean)
const written = done.filter(r => r.written).length
const failed = pairs.length - written
const flagged = done.filter(r => r.notes && r.notes.length > 3).map(r => `${r.locale}/${r.doc}: ${r.notes}`)
log(`완료 ${written}/${pairs.length}, 실패 ${failed}`)
return { total: pairs.length, written, failed, flagged: flagged.slice(0, 30) }
