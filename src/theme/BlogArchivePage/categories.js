/**
 * 블로그 아카이브 카테고리 분류 규칙.
 *
 * 규칙 설계 근거와 갱신 방법: 저장소 루트의 BLOG_ARCHIVE_CATEGORIES.md 참조.
 * 판정 순서: ① 슬러그 동사 프리픽스 → ② 태그(우선순위순) → ③ 프로바이더 태그
 * → ④ 폴백(platforms). 순서가 분포를 결정하므로 임의로 바꾸지 말 것.
 */

// 표시 순서 (글 수 기준 내림차순에 가깝게)
export const CATEGORY_ORDER = [
  'migration',
  'backup',
  'sync',
  'providers',
  'troubleshooting',
  'comparisons',
  'features',
  'usecases',
  'platforms',
];

// ① 슬러그 프리픽스 규칙 — 우선순위순
const SLUG_RULES = [
  ['troubleshooting', /^(?:fix|troubleshoot|repair|recover|resolve)-|-errors?-|-error$/],
  ['comparisons', /^(?:compare|comparison)-|-vs-|-comparison$/],
  ['migration', /^(?:migrate|move|transfer|copy)-|-to-.*(?:migration|rcloneview)$/],
  ['sync', /^(?:sync|synchronize)-/],
  ['backup', /^back-?up-|-backup-/],
  ['providers', /^(?:manage|connect|set-?up|use|access|mount)-/],
];

// ② 태그 규칙 — 우선순위순 (Use Cases 를 작업 태그보다 먼저 검사해야
//    산업/유즈케이스 글이 backup/sync 에 흡수되지 않는다)
const TAG_RULES = [
  ['troubleshooting', ['troubleshooting', 'data-loss', 'data-recovery', 'ransomware']],
  ['comparisons', ['comparison', 'compare', 'storage-comparison', 'pricing']],
  ['usecases', [
    'industry', 'business', 'enterprise', 'education', 'healthcare', 'hipaa',
    'photography', 'media', 'dam', 'video-production', 'nonprofit', 'university',
    'cad', 'accounting', 'finance', 'cctv', 'ai', 'plex', 'data-pipeline',
    'huggingface', 'remote-work', 'architecture', 'engineering', 'compliance',
  ]],
  ['migration', [
    'migration', 'cloud-migration', 'cloud-to-cloud', 'cloud-file-transfer',
    'copy', 'move',
  ]],
  ['backup', [
    'backup', 'cloud-backup', 'hard-drive-backup', 'disaster-recovery',
    'archive', 'digital-preservation',
  ]],
  ['sync', [
    'sync', 'cloud-sync', 'offline-sync', 'google-drive-sync', 'onedrive-sync',
    'cloud-storage-synchronization',
  ]],
  ['features', [
    'feature', 'automation', 'mount', 'job-management', 'encryption', 'security',
    'performance', 'filters', 'vfs', 'monitoring', 'cli', 'crypt', 'rclone-crypt',
    'dashboard', 'job-history', 'history', 'duplicates', 'folder-comparison',
    'cleanup', 'organization', 'cost-optimization', 'optimization',
    'drag-and-drop', 'installation', 'api', 'docker', 'workspace',
  ]],
];

// ③ 프로바이더 태그 — 위 어디에도 안 걸렸을 때 providers 로
const PROVIDER_TAGS = new Set([
  'google-drive', 'onedrive', 'dropbox', 'amazon-s3', 's3', 'aws-s3',
  's3-compatible', 'wasabi', 'backblaze-b2', 'backblaze', 'pcloud',
  'cloudflare-r2', 'r2', 'azure', 'azure-files', 'mega', 'webdav', 'sftp',
  'ftp', 'smb', 'box', 'proton-drive', 'nextcloud', 'sharepoint',
  'google-photos', 'storj', 'koofr', 'jottacloud', 'google-cloud-storage',
  'hetzner', 'digitalocean-spaces', 'hidrive', 'yandex-disk', 'yandex',
  'seafile', 'tencent-cos', 'sharefile', 'idrive-e2', 'internet-archive',
  'pikpak', 'linode', 'minio', '1fichier', 'putio', 'glacier', 'mailru',
  'oracle-cloud', 'zoho', 'sugarsync', 'terabox', 'gofile', 'opendrive',
  'microsoft-365', 'alibaba-cloud', 'openstack', 'swift', 'sia', 'quatrix',
  'hubic', 'nas', 'synology', 'qnap', 'self-hosted', 'external-drive',
  'hard-drive', 'object-storage', 'decentralized-storage', 'european-cloud',
  'multi-cloud', 'hybrid-cloud',
]);

const TAG_RULE_SETS = TAG_RULES.map(([cat, tags]) => [cat, new Set(tags)]);

function slugOfPermalink(permalink) {
  const idx = permalink.indexOf('/blog/');
  const slug = idx >= 0 ? permalink.slice(idx + '/blog/'.length) : permalink;
  return slug.replace(/\/+$/, '').toLowerCase();
}

export function categorize(post) {
  const slug = slugOfPermalink(post.metadata.permalink);
  for (const [cat, re] of SLUG_RULES) {
    if (re.test(slug)) {
      return cat;
    }
  }
  const tags = (post.metadata.tags ?? []).map((t) => t.label.toLowerCase());
  for (const [cat, set] of TAG_RULE_SETS) {
    if (tags.some((t) => set.has(t))) {
      return cat;
    }
  }
  if (tags.some((t) => PROVIDER_TAGS.has(t))) {
    return 'providers';
  }
  return 'platforms';
}
