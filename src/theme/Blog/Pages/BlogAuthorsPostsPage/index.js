/**
 * Swizzled Blog/Pages/BlogAuthorsPostsPage — 원본(@docusaurus/theme-classic)과
 * 동일하되, 항목 렌더러만 @theme/BlogPostItems → @theme/BlogPostItemsCompact 로 교체.
 * 태그 페이지(@theme/BlogTagsPostsPage)와 같은 이유·같은 방식이다.
 *
 * 원본은 저자 페이지마다 포스트 MDX 본문을 임베드해 페이지당 ~111KB,
 * 저자 페이지 66개 합계가 로케일당 7.1MB 였다.
 *
 * 저자 헤더/설명, View All Authors 링크, 글 없음 안내, 페이지네이션은 원본 그대로.
 *
 * 주의: 업스트림 경로가 BlogAuthorsPostsPage 가 아니라
 * Blog/Pages/BlogAuthorsPostsPage 다(Docusaurus 3.7 기준).
 */
import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  useBlogAuthorPageTitle,
  BlogAuthorsListViewAllLabel,
  BlogAuthorNoPostsLabel,
} from '@docusaurus/theme-common/internal';
import Link from '@docusaurus/Link';
import {useBlogMetadata} from '@docusaurus/plugin-content-blog/client';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItemsCompact from '@theme/BlogPostItemsCompact';
import Author from '@theme/Blog/Components/Author';
function Metadata({author}) {
  const title = useBlogAuthorPageTitle(author);
  return (
    <>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_authors_posts" />
    </>
  );
}
function ViewAllAuthorsLink() {
  const {authorsListPath} = useBlogMetadata();
  return (
    <Link href={authorsListPath}>
      <BlogAuthorsListViewAllLabel />
    </Link>
  );
}
function Content({author, items, sidebar, listMetadata}) {
  return (
    <BlogLayout sidebar={sidebar}>
      <header className="margin-bottom--xl">
        <Author as="h1" author={author} />
        {author.description && <p>{author.description}</p>}
        <ViewAllAuthorsLink />
      </header>
      {items.length === 0 ? (
        <p>
          <BlogAuthorNoPostsLabel />
        </p>
      ) : (
        <>
          <hr />
          {/* 커스텀: 미리보기 본문 대신 압축 항목 (BlogPostItemsCompact 주석 참고) */}
          <BlogPostItemsCompact items={items} />
          <BlogListPaginator metadata={listMetadata} />
        </>
      )}
    </BlogLayout>
  );
}
export default function BlogAuthorsPostsPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogAuthorsPostsPage,
      )}>
      <Metadata {...props} />
      <Content {...props} />
    </HtmlClassNameProvider>
  );
}
