/**
 * "All posts →" — 블로그 아카이브(/blog/archive) 진입 링크.
 * 사용처: ① BlogListPage (블로그 인덱스 상단) ② BlogPostPaginator (글 하단)
 *        ③ TOC 상단 (글 상세 우측 레일, variant="toc")
 * 네비바의 "Blog" 는 블로그 인덱스로 가고, 전체 목록(Archive)은 이 링크로 진입.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import styles from './styles.module.css';

export default function ArchiveLink({variant = 'pill'}) {
  const label = translate({
    id: 'blog.archive.allPostsLink',
    message: 'All posts →',
    description: 'Link to the blog archive (All Posts) page',
  });
  const to = useBaseUrl('/blog/archive');

  if (variant === 'toc') {
    return (
      <div className={styles.tocRow}>
        <Link to={to} className={styles.tocLink}>
          {label}
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.row}>
      <Link to={to} className={styles.link}>
        {label}
      </Link>
    </div>
  );
}
