/**
 * Swizzled BlogArchivePage — 카테고리/연도 뷰 토글 + 제목 필터.
 *
 * 원본: @docusaurus/theme-classic/lib/theme/BlogArchivePage (연도별 고정)
 * 변경: ① 카테고리별 뷰(기본) — 분류 규칙은 ./categories.js
 *       ② 연도별 뷰 토글 (같은 데이터의 다른 그룹핑)
 *       ③ 페이지 내 제목 필터 (전역 DocSearch 와 별개)
 * SSG 시 기본 상태(카테고리 뷰, 필터 없음)로 모든 글 링크가 HTML 에
 * 렌더되므로 내부 링크 SEO 는 유지된다.
 */
import React, {useMemo, useState} from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import {CATEGORY_ORDER, categorize} from './categories';
import styles from './styles.module.css';

const CATEGORY_LABELS = {
  migration: () =>
    translate({
      id: 'blog.archive.category.migration',
      message: 'Migration & Transfer',
      description: 'Archive category label',
    }),
  backup: () =>
    translate({
      id: 'blog.archive.category.backup',
      message: 'Backup & Recovery',
      description: 'Archive category label',
    }),
  sync: () =>
    translate({
      id: 'blog.archive.category.sync',
      message: 'Sync',
      description: 'Archive category label',
    }),
  providers: () =>
    translate({
      id: 'blog.archive.category.providers',
      message: 'Provider Guides',
      description: 'Archive category label',
    }),
  troubleshooting: () =>
    translate({
      id: 'blog.archive.category.troubleshooting',
      message: 'Troubleshooting',
      description: 'Archive category label',
    }),
  comparisons: () =>
    translate({
      id: 'blog.archive.category.comparisons',
      message: 'Comparisons',
      description: 'Archive category label',
    }),
  features: () =>
    translate({
      id: 'blog.archive.category.features',
      message: 'Features & Automation',
      description: 'Archive category label',
    }),
  usecases: () =>
    translate({
      id: 'blog.archive.category.usecases',
      message: 'Use Cases & Industries',
      description: 'Archive category label',
    }),
  platforms: () =>
    translate({
      id: 'blog.archive.category.platforms',
      message: 'Platforms & Tips',
      description: 'Archive category label',
    }),
};

function formatYearMonth(dateString) {
  return dateString.slice(0, 7); // YYYY-MM
}

function PostList({posts}) {
  return (
    <ul className={styles.postList}>
      {posts.map((post) => (
        <li key={post.metadata.permalink}>
          <Link to={post.metadata.permalink}>
            <span className={styles.postDate}>
              {formatYearMonth(post.metadata.date)}
            </span>
            {post.metadata.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function GroupSection({id, title, posts}) {
  return (
    <section className={styles.group}>
      <Heading as="h2" id={id} className={styles.groupTitle}>
        {title} <span className={styles.groupCount}>— {posts.length}</span>
      </Heading>
      <PostList posts={posts} />
    </section>
  );
}

function JumpNav({items}) {
  return (
    <nav className={styles.jumpNav} aria-label="Sections">
      {items.map(({id, label}) => (
        <a key={id} href={`#${id}`}>
          {label}
        </a>
      ))}
    </nav>
  );
}

export default function BlogArchive({archive}) {
  const title = translate({
    id: 'theme.blog.archive.title',
    message: 'Archive',
    description: 'The page & hero title of the blog archive page',
  });
  const description = translate({
    id: 'theme.blog.archive.description',
    message: 'Archive',
    description: 'The page & hero description of the blog archive page',
  });

  const [view, setView] = useState('category');
  const [query, setQuery] = useState('');

  const sortedPosts = useMemo(
    () =>
      [...archive.blogPosts].sort((a, b) =>
        b.metadata.date.localeCompare(a.metadata.date),
      ),
    [archive.blogPosts],
  );

  const byCategory = useMemo(() => {
    const map = new Map(CATEGORY_ORDER.map((c) => [c, []]));
    sortedPosts.forEach((post) => {
      map.get(categorize(post)).push(post);
    });
    return CATEGORY_ORDER.filter((c) => map.get(c).length > 0).map((c) => ({
      id: `cat-${c}`,
      label: CATEGORY_LABELS[c](),
      posts: map.get(c),
    }));
  }, [sortedPosts]);

  const byYear = useMemo(() => {
    const map = new Map();
    sortedPosts.forEach((post) => {
      const year = post.metadata.date.split('-')[0];
      if (!map.has(year)) {
        map.set(year, []);
      }
      map.get(year).push(post);
    });
    return [...map.entries()].map(([year, posts]) => ({
      id: `y-${year}`,
      label: year,
      posts,
    }));
  }, [sortedPosts]);

  const groups = view === 'category' ? byCategory : byYear;
  const q = query.trim().toLowerCase();
  const filteredGroups = q
    ? groups
        .map((g) => ({
          ...g,
          posts: g.posts.filter((p) =>
            p.metadata.title.toLowerCase().includes(q),
          ),
        }))
        .filter((g) => g.posts.length > 0)
    : groups;

  return (
    <>
      <PageMetadata title={title} description={description} />
      <Layout>
        <main className={`container ${styles.main}`}>
          {/* hero--primary(주황 밴드)는 주황 네비바와 붙어 보여 제거 —
              사이트의 다른 페이지들과 같은 플레인 헤더로 통일 */}
          <header className={styles.header}>
            <Heading as="h1" className={styles.pageTitle}>
              {title}
            </Heading>
            <p className={styles.pageSubtitle}>
              {archive.blogPosts.length} posts
            </p>
          </header>
          <div className={styles.controls}>
            <input
              type="search"
              className={styles.filterInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={translate({
                id: 'blog.archive.filterPlaceholder',
                message: 'Filter posts by title…',
                description: 'Placeholder of the archive title filter input',
              })}
              aria-label={translate({
                id: 'blog.archive.filterPlaceholder',
                message: 'Filter posts by title…',
                description: 'Placeholder of the archive title filter input',
              })}
            />
            <div
              className={styles.segmented}
              role="group"
              aria-label="View mode">
              <button
                type="button"
                aria-pressed={view === 'category'}
                onClick={() => setView('category')}>
                {translate({
                  id: 'blog.archive.viewByCategory',
                  message: 'By category',
                  description: 'Archive view toggle: group by category',
                })}
              </button>
              <button
                type="button"
                aria-pressed={view === 'year'}
                onClick={() => setView('year')}>
                {translate({
                  id: 'blog.archive.viewByYear',
                  message: 'By year',
                  description: 'Archive view toggle: group by year',
                })}
              </button>
            </div>
          </div>

          {!q && (
            <JumpNav items={filteredGroups.map(({id, label}) => ({id, label}))} />
          )}

          {filteredGroups.map((g) => (
            <GroupSection key={g.id} id={g.id} title={g.label} posts={g.posts} />
          ))}

          {filteredGroups.length === 0 && (
            <p className={styles.noResult}>
              {translate({
                id: 'blog.archive.noResult',
                message: 'No posts match your filter.',
                description: 'Shown when the archive title filter matches nothing',
              })}
            </p>
          )}
        </main>
      </Layout>
    </>
  );
}
