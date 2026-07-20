/**
 * Wrapper swizzle — 기본 prev/next 페이지네이터 아래에 아카이브 진입
 * 링크(All posts →)를 추가한다. 검색으로 글에 착지한 방문자가 글을 다
 * 읽은 시점에 전체 목록으로 갈 수 있게.
 */
import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import ArchiveLink from '@theme/ArchiveLink';

export default function BlogPostPaginatorWrapper(props) {
  return (
    <>
      <BlogPostPaginator {...props} />
      <ArchiveLink />
    </>
  );
}
