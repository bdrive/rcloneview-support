import React from "react"; // ✅ 꼭 포함할 것

import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

import "../css/navbar.css";

// 언어 스위처 — 공식 LocaleDropdownNavbarItem과 같은 useAlternatePageUtils로
// 현재 페이지의 로케일별 URL(/support/ko/... 등)로 이동한다.
function LocaleSelect() {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();

  if (locales.length <= 1) {
    return null;
  }

  return (
    <select
      className="nav-link"
      value={currentLocale}
      aria-label="Select language"
      style={{
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: "inherit",
        font: "inherit",
      }}
      onChange={(e) => {
        window.location.href = alternatePageUtils.createUrl({
          locale: e.target.value,
          fullyQualified: false,
        });
      }}
    >
      {locales.map((locale) => (
        <option key={locale} value={locale} style={{ color: "#333" }}>
          {localeConfigs[locale].label}
        </option>
      ))}
    </select>
  );
}

export default function CustomNavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" id="mainNav">
        <div className="newNav_container">
          {/* Logo */}
          <a href="/index.html" className="navbar-brand" style={{ display: "flex", alignItems: "center" }}>
            <img alt="RcloneView Logo" src={useBaseUrl("/img/logo_allWhite.svg")} className="logo_white" />
          </a>

          {/* 🔍 DocSearch 모바일용 – MENU 버튼 왼쪽           */}
          <div className="mr-2" id="mobile-docsearch">
            <DocSearch
              appId="UGRR3WR5TO"
              indexName="rcloneview-support"
              apiKey="1bb2a6e53b0388ab8305806bd89350e2"
              placeholder=""
              translations={{
                button: {
                  buttonText: '',
                  buttonAriaLabel: 'Search',
                },
              }}
            />
          </div>


          {/* Toggle Button for mobile */}
          <button className="navbar-toggler" aria-label="Toggle navigation">
            <div style={{ display: "flex", alignItems: "center" }}>
              Menu
              <i className="fas fa-bars text-[26px] ml-2" />
            </div>
          </button>

          {/* Navigation Links */}
          <div className="navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-md-0">
              {/* 🔍 DocSearch 버튼 – Plus 앞에 위치 */}
              <li className="nav-item">
                <div className="docsearch-desktop-only">
                  <DocSearch appId="UGRR3WR5TO" indexName="rcloneview-support" apiKey="1bb2a6e53b0388ab8305806bd89350e2" />
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/src/pricing.html">
                  Plus
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/src/download.html">
                  Download
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/support/release-notes/">
                  Release Notes
                </a>
              </li>
              <li className="nav-item">
                {/* 블로그 전체 글 목록 (카테고리/연도 뷰) — 로케일 인지 링크 */}
                <a className="nav-link" href={useBaseUrl("/blog/archive")}>
                  All Posts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/support/">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <LocaleSelect />
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="https://forum.rcloneview.com/" target="_blank">
                  Forum
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
