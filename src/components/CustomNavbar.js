import React, { useState, useEffect, useRef } from "react"; // ✅ 꼭 포함할 것

import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate from "@docusaurus/Translate";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

import "../css/navbar.css";

// 표시 라벨. www 와 통일. 'Bahasa Indonesia' 는 폭이 넓어 'Indonesia' 로 축약.
const LANG_LABELS = {
  en: "English",
  ko: "한국어",
  ja: "日本語",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  de: "Deutsch",
  es: "Español",
  fr: "Français",
  id: "Indonesia",
};
const LANG_ORDER = ["en", "ko", "ja", "zh-Hans", "zh-Hant", "de", "es", "fr", "id"];

function GlobeIcon() {
  return (
    <svg className="lang-globe" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
function CaretIcon() {
  return (
    <svg className="lang-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// 상단 언어 드롭다운 (www 와 동일 UX·스타일). Docusaurus 로케일 전환 URL 을
// useAlternatePageUtils 로 계산하고, 선택 시 pref_lang 쿠키를 저장한다.
function LanguageDropdown({ currentLocale }) {
  const { createUrl } = useAlternatePageUtils();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Path=/ 라 www ↔ /support 가 쿠키를 공유한다 (미들웨어가 기억).
  function remember(code) {
    document.cookie = "pref_lang=" + code + "; path=/; max-age=31536000; samesite=lax";
  }

  return (
    <li className={"nav-item lang-nav-item" + (open ? " open" : "")} ref={ref}>
      <button type="button" className="lang-toggle" aria-haspopup="true"
        aria-expanded={open ? "true" : "false"} aria-label="Select language"
        onClick={(e) => { e.preventDefault(); setOpen(!open); }}>
        <GlobeIcon />
        <span className="lang-label">{LANG_LABELS[currentLocale] || currentLocale}</span>
        <CaretIcon />
      </button>
      <ul className="lang-menu">
        {LANG_ORDER.map((code) => (
          <li key={code}>
            <a href={createUrl({ locale: code, fullyQualified: false })} lang={code}
              className={code === currentLocale ? "active" : ""}
              onClick={() => remember(code)}>
              {LANG_LABELS[code]}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function CustomNavbar() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  // www(루트 사이트)도 /{locale}/ 미러 구조로 다국어화됨 — 로케일 유지 링크
  const wwwUrl = (p) => (currentLocale === "en" ? p : `/${currentLocale}${p}`);
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
                <a className="nav-link" href={wwwUrl("/src/pricing.html")}>
                  Plus
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={wwwUrl("/src/download.html")}>
                  <Translate id="navbar.download" description="Navbar label">
                    Download
                  </Translate>
                </a>
              </li>
              <li className="nav-item">
                {/* 로케일 인지 링크 — 하드코딩(/support/...)은 ko 등에서 en 으로 이탈 */}
                <a className="nav-link" href={useBaseUrl("/release-notes/")}>
                  <Translate id="navbar.releaseNotes" description="Navbar label">
                    Release Notes
                  </Translate>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={useBaseUrl("/")}>
                  <Translate id="navbar.support" description="Navbar label">
                    Support
                  </Translate>
                </a>
              </li>
              {/* Blog 는 상단 메뉴에서 제거(2026-07, 팀 결정: SEO 정제 전이라 상단 미노출).
                  블로그는 여전히 /blog 직접 URL·아카이브·푸터로 접근 가능. */}

              {/* 언어 선택 — 우상단 (www 와 동일 위치·스타일) */}
              <LanguageDropdown currentLocale={currentLocale} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
