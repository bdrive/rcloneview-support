// File: src/components/RvCta.jsx
// Docusaurus MDX에서 불러 쓰는 CTA 컴포넌트 (JSX)

import React, { useMemo } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { translate } from '@docusaurus/Translate';

const styles = `
:root{
  --rv-bg:#0b1020; --rv-card:#0f1428; --rv-text:#e9eefb; --rv-muted:#9fb0d1;
  --rv-accent:#7cc3ff; --rv-accent-2:#a8ffcf; --rv-ring:rgba(124,195,255,.4);
}
@media (prefers-color-scheme: light){
  :root{
    --rv-bg:#f7f9fe; --rv-card:#fff; --rv-text:#1a2234; --rv-muted:#5a6b89;
    --rv-accent:#0d6efd; --rv-accent-2:#22c55e; --rv-ring:rgba(13,110,253,.25);
  }
}
.rv-cta{margin:2.5rem auto; padding:clamp(1rem,2vw,1.25rem); max-width:1000px;
  background:
    radial-gradient(1200px 300px at 20% -20%, rgba(124,195,255,.15), transparent 60%),
    radial-gradient(800px 250px at 90% 120%, rgba(168,255,207,.12), transparent 60%);
  border-radius:1.25rem;}
.rv-cta__card{display:grid; grid-template-columns:1.1fr 1fr; gap:1.5rem;
  padding:clamp(1rem,2.5vw,1.5rem); background:var(--rv-card);
  border:1px solid rgba(124,195,255,.18); border-radius:1.25rem;
  box-shadow:0 10px 30px rgba(0,0,0,.18), inset 0 0 0 1px rgba(255,255,255,.02);
  color:var(--rv-text);}
@media (max-width:860px){.rv-cta__card{grid-template-columns:1fr;}}
.rv-cta__media{border-radius:1rem; overflow:hidden;
  background:linear-gradient(180deg, rgba(124,195,255,.15), rgba(168,255,207,.1));
  display:flex; align-items:center; justify-content:center;}
.rv-cta__media img{
  max-width:97%;
  height:auto;
  display:block;
  object-fit:contain; /* 수정됨: cover → contain */
}
.rv-cta__body h2{margin:0 0 .5rem 0; font-size:clamp(1.4rem,2.4vw,2rem); line-height:1.2; letter-spacing:-.01em;}
.rv-cta__subtitle{margin:0 0 .9rem 0; color:var(--rv-muted); font-size:clamp(.96rem,1.2vw,1.02rem);}
.rv-cta__bullets{margin:.6rem 0 1rem 0; padding-left:1.1rem;}
.rv-cta__bullets li{margin:.25rem 0;}
.rv-cta__badges{display:flex; gap:.5rem; flex-wrap:wrap; margin:.8rem 0 1rem 0;}
.rv-badge{font-size:.82rem; padding:.3rem .55rem; border-radius:999px;
  background:rgba(124,195,255,.15); border:1px solid rgba(124,195,255,.35); color:var(--rv-text);}
.rv-button{display:inline-flex; align-items:center; justify-content:center; gap:.5rem;
  padding:.75rem 1.05rem; border-radius:.8rem;
  background:linear-gradient(92deg, var(--rv-accent), var(--rv-accent-2)); color:#0b1020;
  font-weight:700; text-decoration:none; box-shadow:0 8px 24px var(--rv-ring);
  transform:translateZ(0); transition:transform .15s ease, box-shadow .15s ease, opacity .2s ease;}
.rv-button:hover{transform:translateY(-1px); box-shadow:0 12px 28px var(--rv-ring);}
.rv-cta__fineprint{margin:.6rem 0 0 0; font-size:.82rem; color:var(--rv-muted);}
.rv-logos{display:grid; grid-template-columns:repeat(5, minmax(0,1fr)); gap:.5rem;}
@media (max-width:720px){.rv-logos{grid-template-columns:repeat(3, minmax(0,1fr));}}
.rv-logo{display:inline-flex; align-items:center; justify-content:center;
  padding:.55rem .6rem; border-radius:.6rem; background:rgba(124,195,255,.10);
  border:1px dashed rgba(124,195,255,.25); color:var(--rv-text); font-size:.82rem; white-space:nowrap;}
`;

export default function RvCta({
  title,
  subtitle,
  bullets,
  imageSrc = '/img/rcloneview-preview.png',
  imageAlt,
  downloadUrl = '/download',
  badges = ['Windows', 'macOS', 'Linux'],
  className,
}) {
  // 기본 문구는 로케일별로 번역 (i18n/{locale}/code.json).
  // MDX에서 prop으로 넘기면 그 값이 우선한다.
  const resolvedTitle =
    title ??
    translate({
      id: 'rvCta.title',
      message: 'Manage & Sync All Clouds in One Place',
      description: 'Blog CTA title',
    });
  const resolvedSubtitle =
    subtitle ??
    translate({
      id: 'rvCta.subtitle',
      message:
        'RcloneView is a cross-platform GUI for rclone. Compare folders, transfer or sync files, and automate multi-cloud workflows with a clean, visual interface.',
      description: 'Blog CTA subtitle',
    });
  const resolvedBullets = bullets ?? [
    translate({
      id: 'rvCta.bullet.jobs',
      message: 'One-click jobs: Copy · Sync · Compare',
      description: 'Blog CTA bullet 1',
    }),
    translate({
      id: 'rvCta.bullet.schedulers',
      message: 'Schedulers & history for reliable automation',
      description: 'Blog CTA bullet 2',
    }),
    translate({
      id: 'rvCta.bullet.providers',
      message:
        'Works with Google Drive, OneDrive, Dropbox, S3, WebDAV, SFTP and more',
      description: 'Blog CTA bullet 3',
    }),
  ];
  const resolvedImageAlt =
    imageAlt ??
    translate({
      id: 'rvCta.imageAlt',
      message: 'RcloneView app preview',
      description: 'Blog CTA image alt text',
    });

  const resolvedImage = useBaseUrl(imageSrc);

  const resolvedDownload = useMemo(() => {
    if (typeof window === 'undefined') return downloadUrl;
    try {
      const base = new URL(downloadUrl, window.location.origin);
      const src = new URL(window.location.href);
      if (!base.searchParams.get('utm_source')) base.searchParams.set('utm_source', 'blog');
      if (!base.searchParams.get('utm_medium')) base.searchParams.set('utm_medium', 'cta');
      const pageTitle = (document.title || 'post').slice(0, 60);
      if (!base.searchParams.get('utm_campaign')) base.searchParams.set('utm_campaign', pageTitle);
      ['utm_source','utm_medium','utm_campaign','utm_content'].forEach(k => {
        const v = src.searchParams.get(k);
        if (v) base.searchParams.set(k, v);
      });
      return base.toString();
    } catch {
      return downloadUrl;
    }
  }, [downloadUrl]);

  return (
    <section className={`rv-cta ${className || ''}`} aria-labelledby="rv-cta-title">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="rv-cta__card">
        <div className="rv-cta__media">
          <img src={resolvedImage} alt={resolvedImageAlt} loading="lazy" />
        </div>
        <div className="rv-cta__body">
          <h2 id="rv-cta-title">{resolvedTitle}</h2>
          <p className="rv-cta__subtitle">{resolvedSubtitle}</p>

          {resolvedBullets?.length > 0 && (
            <ul className="rv-cta__bullets" role="list">
              {resolvedBullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          )}

          {badges?.length > 0 && (
            <div className="rv-cta__badges" aria-label="Supported platforms">
              {badges.map((b, i) => <span className="rv-badge" key={i}>{b}</span>)}
            </div>
          )}

          <Link
            className="rv-button"
            to={resolvedDownload}
            target={resolvedDownload.startsWith('http') ? '_blank' : undefined}
            rel={resolvedDownload.startsWith('http') ? 'noopener' : undefined}
            aria-label={translate({
              id: 'rvCta.button.ariaLabel',
              message: 'Download RcloneView',
              description: 'Blog CTA button aria-label',
            })}
          >
            {translate({
              id: 'rvCta.button',
              message: 'Get Started Free →',
              description: 'Blog CTA button text',
            })}
          </Link>

          <p className="rv-cta__fineprint">
            {translate({
              id: 'rvCta.fineprint',
              message: 'Free core features. Plus automations available.',
              description: 'Blog CTA fine print',
            })}
          </p>
        </div>
      </div>


    </section>
  );
}