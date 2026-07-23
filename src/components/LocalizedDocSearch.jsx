// 로케일 인지 DocSearch — 반드시 이 컴포넌트로 검색 버튼을 렌더할 것.
//
// 배경: 이 사이트는 테마 기본 SearchBar 대신 @docsearch/react 의 <DocSearch> 를
// 직접 렌더한다(커스텀 네비바·홈 히어로). 그런데 <DocSearch> 를 날것으로 쓰면
// docusaurus.config.js 의 `contextualSearch: true` 가 적용되지 않아, 영어 화면에서
// 중국어 문서가 검색되는 식으로 9개 로케일 결과가 전부 섞인다 (2026-07-23 Jay 리포트).
//
// 해결: 테마 SearchBar 가 내부에서 쓰는 것과 동일한 공개 훅으로 같은 facetFilters
// (`language:<locale>` AND (docusaurus_tag:... OR ...)) 를 만들어 넘긴다.
// appId/indexName/apiKey 도 themeConfig.algolia 단일 원천에서 읽는다 (하드코딩 중복 제거).
import React from "react";
import { DocSearch } from "@docsearch/react";
import {
  useAlgoliaThemeConfig,
  useAlgoliaContextualFacetFilters,
} from "@docusaurus/theme-search-algolia/client";
import "@docsearch/css";

export default function LocalizedDocSearch(props) {
  const { algolia } = useAlgoliaThemeConfig();
  // [ 'language:ko', ['docusaurus_tag:default', 'docusaurus_tag:docs-howto-current', ...] ]
  const [languageFilter, tagsFilter] = useAlgoliaContextualFacetFilters();
  return (
    <DocSearch
      appId={algolia.appId}
      indexName={algolia.indexName}
      apiKey={algolia.apiKey}
      searchParameters={{ facetFilters: [languageFilter, tagsFilter] }}
      {...props}
    />
  );
}
