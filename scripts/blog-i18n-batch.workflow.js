// 블로그 번역 배치 — Claude Code Workflow 도구용 스크립트.
// (node로 직접 실행하는 파일이 아님. Claude Code 세션에서 Workflow 도구에
//  scriptPath로 이 파일을 전달해 실행한다.)
//
// args:
//   posts: ["파일명.md", ...]   (필수) 번역할 blog/ 원문 파일명들
//   root:  "<저장소 절대경로>"    (선택) 미지정 시 로컬 기본 경로.
//          루틴 컨테이너에서는 반드시 넘길 것 — Fact-checker 가 `pwd` 결과 주입.
//
// 용도 2가지:
//   ① 소급 번역(로컬): {"posts": [...]}  — root 생략, 기본 경로 사용
//   ② 신규 글 발행(Fact-checker STEP 4.7): {"posts": [...], "root": "<pwd>"}
//
// 동작: posts × 8로케일 쌍마다 Sonnet 에이전트가 blog/ 원문을 읽어 번역하고
//       i18n/{locale}/docusaurus-plugin-content-blog/ 에 직접 파일을 쓴다.
// 실행 후 반드시 I18N_RUNBOOK_ko.md 2장 ③의 검증 단계를 거칠 것.

export const meta = {
  name: 'blog-i18n-batch',
  description: '블로그 소급 번역 배치 (Sonnet, 미번역 쌍만)',
  phases: [{ title: 'Translate', detail: 'posts × locales, sonnet, skip-existing' }],
}

// ROOT: 루틴의 클라우드 컨테이너에선 클론 경로가 로컬과 다르므로 args.root 로
// 주입한다(예: Fact-checker 가 `pwd` 결과를 넘김). 로컬에서 소급 번역할 때는
// root 를 생략하면 아래 기본 경로를 쓴다.
const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
const ROOT = A.root || '/Users/tsjeong/workspace/bdrive/source/rcloneview-support'
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
    post: { type: 'string' },
    locale: { type: 'string' },
    written: { type: 'boolean' },
    notes: { type: 'string' },
  },
  required: ['post', 'locale', 'written'],
}

function prompt(post, loc) {
  const L = GLOSSARY[loc]
  return `You are a professional technical translator for RcloneView, a GUI for the rclone cloud-sync tool.

TASK: Read the Docusaurus blog post at:
  ${ROOT}/blog/${post}
Translate it from English to ${L.name}, then Write the full translated file to:
  ${ROOT}/i18n/${loc}/docusaurus-plugin-content-blog/${post}

STRICT RULES — output must remain a valid, buildable Docusaurus post:
1. The written file must contain ONLY the translated Markdown. No commentary.
2. Frontmatter (between the first pair of --- lines): translate ONLY the values of "title" and "description" (and human-readable strings inside "keywords" if present). Keep every other key/value byte-identical: slug, date, authors, tags, image. Keep YAML quoting valid.
3. NEVER translate or alter: code blocks and inline code, URLs and link targets, image paths, product names (RcloneView, rclone, NetDrive...), cloud provider names, CLI commands/flags, HTML tags.
4. MDX import lines: rewrite paths '../src/...' to '@site/src/...' (e.g. import RvCta from '@site/src/components/RvCta';). Keep everything else in the import identical.
5. Preserve Markdown structure exactly: heading hierarchy, lists, tables, admonitions (:::tip etc.), the <!-- truncate --> marker, and the SAME number of code blocks.
6. Translate link TEXT (including "Related Guides" item titles) but never link URLs. Internal links (/howto/..., /blog/..., relative) unchanged.
7. Terminology (use consistently): ${L.gl}
8. Tone: clear, natural technical writing for ${L.name} readers. Do not add or remove content.

After writing the file, return JSON: post="${post}", locale="${loc}", written, notes (one line, only if something was unusual — otherwise empty string).`
}

phase('Translate')
const LOCALES = Object.keys(GLOSSARY)
const pairs = []
for (const post of A.posts) for (const loc of LOCALES) pairs.push({ post, loc })
log(`번역 대상 ${pairs.length}건 시작 (${A.posts.length}포스트 × ${LOCALES.length}로케일)`)

const results = await parallel(pairs.map(({ post, loc }) => () =>
  agent(prompt(post, loc), {
    label: `${loc}:${post.slice(0, 28)}`,
    phase: 'Translate',
    model: 'sonnet',
    effort: 'low',
    schema: SCHEMA,
  })
))

const done = results.filter(Boolean)
const written = done.filter(r => r.written).length
const failed = pairs.length - written
const flagged = done.filter(r => r.notes && r.notes.length > 3).map(r => `${r.locale}/${r.post}: ${r.notes}`)
log(`완료 ${written}/${pairs.length}, 실패 ${failed}`)
return { total: pairs.length, written, failed, flagged: flagged.slice(0, 30) }
