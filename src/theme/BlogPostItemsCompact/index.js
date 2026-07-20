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
 *
 * 구조화 데이터: 각 항목에 schema.org 마이크로데이터(Blog > BlogPosting)를
 * 부착한다. Docusaurus 3.x 는 /blog 목록에만 JSON-LD 를 넣고 태그/저자
 * 페이지에는 아무것도 넣지 않는데, JSON-LD 방식은 제목·날짜·설명을 통째로
 * 복제해 4,700개 목록 페이지 기준 +11~50MB 가 든다. 마이크로데이터는 이미
 * 렌더된 요소에 속성만 붙이므로 페이지당 ~1KB(전체 +5MB 미만)로 같은 정보를
 * 전달한다.
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
    <ul className={styles.list} itemScope itemType="https://schema.org/Blog">
      {items.map(({content: BlogPostContent}) => {
        const {permalink, title, date, description} = BlogPostContent.metadata;
        return (
          <li
            key={permalink}
            className={styles.item}
            itemProp="blogPost"
            itemScope
            itemType="https://schema.org/BlogPosting">
            <Heading as="h2" className={styles.title} itemProp="headline">
              {/* itemProp="url" 은 <a> 의 href 를 값으로 삼는다 */}
              <Link to={permalink} itemProp="url">
                {title}
              </Link>
            </Heading>
            <time dateTime={date} itemProp="datePublished" className={styles.date}>
              {dateTimeFormat.format(new Date(date))}
            </time>
            {description && (
              <p className={styles.description} itemProp="description">
                {description}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
