/**
 * BlogPostItemsCompact — 태그/저자 목록 페이지 전용 압축 항목 리스트.
 *
 * 업스트림 컴포넌트가 아니다. @theme/ArchiveLink 처럼 이 저장소가 추가한
 * 커스텀 컴포넌트다.
 *
 * 배경: @theme/BlogPostItems 는 항목마다 MDX 본문(<BlogPostContent />)을
 * 통째로 렌더한다. 그래서 태그 페이지가 페이지당 ~87KB 로 불어나 태그/저자
 * 목록 HTML 합계가 실제 포스트 HTML 합계보다 커졌다. 여기서는 본문 대신
 * 제목·날짜·frontmatter description 만 렌더한다 — 제목만 남기는 archive
 * 페이지와 본문 전체를 임베드하는 미리보기 사이의 절충이다.
 *
 * 범위: /blog 메인 목록과 /blog/page/N 은 블로그의 정문이라 미리보기를
 * 유지한다. 그쪽은 여전히 @theme/BlogPostItems 를 쓰며 이 컴포넌트를
 * 거치지 않는다.
 *
 * 시각 언어는 @theme/BlogArchivePage 의 목록을 따른다.
 */
import React from 'react';
import Link from '@docusaurus/Link';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function BlogPostItemsCompact({items}) {
  // 업스트림 BlogPostItem/Header/Info 와 동일한 포맷 — 로케일별 날짜 표기를 따른다.
  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <ul className={styles.list}>
      {items.map(({content: BlogPostContent}) => {
        const {permalink, title, date, description} = BlogPostContent.metadata;
        return (
          <li key={permalink} className={styles.item}>
            <Heading as="h2" className={styles.title}>
              <Link to={permalink}>{title}</Link>
            </Heading>
            <time dateTime={date} className={styles.date}>
              {dateTimeFormat.format(new Date(date))}
            </time>
            {description && <p className={styles.description}>{description}</p>}
          </li>
        );
      })}
    </ul>
  );
}
