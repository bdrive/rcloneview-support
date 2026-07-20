import React from "react";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import "../css/footer.css";

// 언어 선택 — 푸터 하단 오른쪽 (netdrive.net 패턴). navbar 에서 이동.
function LocaleSelect() {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  if (locales.length <= 1) return null;
  return (
    <select
      value={currentLocale}
      aria-label="Select language"
      style={{ background: "transparent", border: "none", cursor: "pointer", color: "#6c757d", font: "inherit", marginLeft: "1rem" }}
      onChange={(e) => {
        window.location.href = alternatePageUtils.createUrl({ locale: e.target.value, fullyQualified: false });
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

export default function Footer() {
  const {
    i18n: { currentLocale },
  } = useDocusaurusContext();
  // www(루트 사이트)의 로케일 미러 경로 (about-us 등은 www 페이지)
  const wwwUrl = (path) => (currentLocale === "en" ? path : `/${currentLocale}${path}`);
  return (
    <>
      <footer className="footer py-4" style={{ background: "#fff", fontFamily: "Poppins", fontSize: "0.9rem" }}>
        <div className="container">
          <div className="footerMobile" style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            <div className="col-lg-6 text-lg-start" style={{ color: "#6c757d" }}>
              Copyright &copy; Bdrive lnc. All rights reserved.
            </div>
            <div className="col-lg-5 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href={wwwUrl("/src/about-us.html")} style={{ color: "#6c757d" }}>
                <Translate id="footer.aboutUs" description="Footer link">About Us</Translate>
              </a>
              <a className="link-dark text-decoration-none me-3" href="/src/privacy_policy.html" style={{ color: "#6c757d" }}>
                <Translate id="footer.privacyPolicy" description="Footer link">Privacy Policy</Translate>
              </a>
              <a className="link-dark text-decoration-none me-3" href="/src/eula.html" style={{ color: "#6c757d" }}>
                EULA
              </a>
              <a className="link-dark text-decoration-none me-3" href="https://forum.rclone.org/" target="_blank" style={{ color: "#6c757d" }}>
                <Translate id="footer.rcloneForum" description="Footer link">Rclone Forum</Translate>
              </a>
              <a className="link-dark text-decoration-none me-3" href={useBaseUrl("/blog/")} target="_blank" style={{ color: "#6c757d" }}>
                <Translate id="footer.blog" description="Footer link">Blog</Translate>
              </a>
              <a className="link-dark text-decoration-none" href="mailto:rcloneview@bdrive.com" style={{ color: "#6c757d" }}>
                <Translate id="footer.contactSupport" description="Footer link">Contact Support</Translate>
              </a>
              <LocaleSelect />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
