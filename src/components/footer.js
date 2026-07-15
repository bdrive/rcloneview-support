import React from "react";
import Translate from "@docusaurus/Translate";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "../css/footer.css";

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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
