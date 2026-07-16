/**
 * archive 라우트 props 슬림화 플러그인.
 *
 * 블로그 플러그인은 archive 라우트에 포스트 객체를 통째로 넘긴다
 * (plugin-content-blog/lib/routes.js: `archive: {blogPosts: listedBlogPosts}`).
 * 여기엔 각 글의 원본 마크다운 `content` 가 들어있어 ko 기준 청크가 8.8MB 였다 —
 * 아카이브 페이지 방문자는 이걸 전부 내려받는다.
 *
 * 정작 페이지가 읽는 필드는 4개뿐이므로, 기본 archive 라우트를 끄고
 * (docusaurus.config.js 의 `archiveBasePath: null`) 같은 경로·같은 컴포넌트를
 * 슬림한 props 로 다시 등록한다. 렌더 결과는 동일하다.
 *
 * toSlimPost 가 남기는 필드는 src/theme/BlogArchivePage 의 소비 필드와 1:1 이다:
 *   index.js      → metadata.permalink, metadata.date, metadata.title
 *   categories.js → metadata.permalink, metadata.tags[].label
 * 컴포넌트가 새 필드를 읽게 되면 toSlimPost 도 함께 넓혀야 한다.
 */

const {normalizeUrl} = require('@docusaurus/utils');

// 기본 블로그 플러그인이 만들던 것과 동일한 경로여야 한다. routes.js 는
// normalizeUrl([baseUrl, routeBasePath, archiveBasePath]) 를 쓰고, 두 값 모두
// 이 사이트에서는 기본값이다. baseUrl 은 context 에서 이미 로케일이 반영된
// 값(예: /support/ko/)이라 9개 로케일에 그대로 적용된다.
const ROUTE_BASE_PATH = 'blog';
const ARCHIVE_BASE_PATH = 'archive';

// blogUtils.shouldBeListed 와 같은 규칙 — unlisted 글은 아카이브에서 제외.
function shouldBeListed(post) {
  return !post.metadata.unlisted;
}

function toSlimPost({metadata}) {
  return {
    metadata: {
      permalink: metadata.permalink,
      date: metadata.date,
      title: metadata.title,
      tags: metadata.tags,
    },
  };
}

module.exports = function blogArchiveSlimPlugin(context) {
  return {
    // 라우트를 만든 플러그인의 이름이 그 페이지 <html> 의 클래스가 된다
    // (theme-common 의 pluginNameToClassName 이 `docusaurus-(plugin|theme)-(content-)?`
    // 를 떼어낸다). 이 이름이라야 기본 블로그 플러그인이 붙이던 `plugin-blog` 가
    // 그대로 유지된다 — 아카이브도 여전히 블로그 페이지이므로.
    // `docusaurus-plugin-content-blog` 로 지으면 안 된다: allContent 키가 블로그
    // 플러그인과 겹쳐 콘텐츠를 가린다.
    name: 'docusaurus-plugin-blog',

    async allContentLoaded({allContent, actions}) {
      const blogContent = allContent['docusaurus-plugin-content-blog']?.default;
      const listedBlogPosts = (blogContent?.blogPosts ?? []).filter(shouldBeListed);

      // 기본 플러그인도 글이 없으면 라우트를 만들지 않는다.
      if (listedBlogPosts.length === 0) {
        return;
      }

      actions.addRoute({
        path: normalizeUrl([context.baseUrl, ROUTE_BASE_PATH, ARCHIVE_BASE_PATH]),
        component: '@theme/BlogArchivePage',
        exact: true,
        props: {
          archive: {blogPosts: listedBlogPosts.map(toSlimPost)},
        },
      });
    },
  };
};
