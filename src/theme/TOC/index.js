/**
 * Wrapper swizzle — 블로그 글 상세 페이지의 우측 TOC 레일 상단에
 * 아카이브 진입 링크(All posts →)를 추가한다.
 * TOC 는 docs(howto/tutorials/release-notes)와 공유되므로 경로가
 * /blog/ 일 때만 표시한다. 모바일(접이식 TOC)은 글 하단 링크가 커버.
 */
import React from 'react';
import TOC from '@theme-original/TOC';
import {useLocation} from '@docusaurus/router';
import ArchiveLink from '@theme/ArchiveLink';

export default function TOCWrapper(props) {
  const {pathname} = useLocation();
  const isBlogPost = pathname.includes('/blog/');
  return (
    <>
      {isBlogPost && <ArchiveLink variant="toc" />}
      <TOC {...props} />
    </>
  );
}
