/**
 * Swizzled BlogTagsPostsPage — 원본(@docusaurus/theme-classic)과 동일하되,
 * 항목 렌더러만 @theme/BlogPostItems → @theme/BlogPostItemsCompact 로 교체.
 *
 * 원본은 태그 페이지마다 포스트 MDX 본문을 통째로 임베드해 페이지당 ~87KB,
 * 태그 페이지 459개 합계가 로케일당 39.2MB 였다 — 실제 포스트 HTML 합계보다
 * 크다. 압축 항목(제목·날짜·설명)으로 바꿔도 태그별 내부 링크는 그대로라
 * 색인 표면은 유지된다.
 *
 * 헤더("N posts tagged with…"), 태그 설명, View All Tags 링크, 페이지네이션은
 * 원본 그대로 둔다. /blog 메인 목록은 이 파일을 거치지 않으므로 미리보기 유지.
 */
import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {useBlogTagsPostsPageTitle} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItemsCompact from '@theme/BlogPostItemsCompact';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';
function BlogTagsPostsPageMetadata({tag}) {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <>
      <PageMetadata title={title} description={tag.description} />
      <SearchMetadata tag="blog_tags_posts" />
    </>
  );
}
function BlogTagsPostsPageContent({tag, items, sidebar, listMetadata}) {
  const title = useBlogTagsPostsPageTitle(tag);
  return (
    <BlogLayout sidebar={sidebar}>
      {tag.unlisted && <Unlisted />}
      <header className="margin-bottom--xl">
        <Heading as="h1">{title}</Heading>
        {tag.description && <p>{tag.description}</p>}
        <Link href={tag.allTagsPath}>
          <Translate
            id="theme.tags.tagsPageLink"
            description="The label of the link targeting the tag list page">
            View All Tags
          </Translate>
        </Link>
      </header>
      {/* 커스텀: 미리보기 본문 대신 압축 항목 (BlogPostItemsCompact 주석 참고) */}
      <BlogPostItemsCompact items={items} />
      <BlogListPaginator metadata={listMetadata} />
    </BlogLayout>
  );
}
export default function BlogTagsPostsPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagPostListPage,
      )}>
      <BlogTagsPostsPageMetadata {...props} />
      <BlogTagsPostsPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
