import React from "react";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "../css/footer.css";

// 언어 선택기는 상단 네비바(CustomNavbar)로 이동함 (2026-07, www 와 통일).
// 푸터에는 더 이상 두지 않는다.

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
          <div className="footerMobile" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", columnGap: "1rem", rowGap: "0.5rem" }}>
            {/* col-lg-* 고정폭 제거 — 긴 번역(독일어 등)이 col-lg-5(41%) 를 넘겨
                2줄로 접히던 문제 해소. space-between(footer.css) 로 좌/우 배치. */}
            <div className="text-lg-start" style={{ color: "#6c757d" }}>
              Copyright &copy; Bdrive lnc. All rights reserved.
            </div>
            <div className="text-lg-end">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
