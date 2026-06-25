import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="footer py-4" style={{ background: "#fff", fontFamily: "Poppins", fontSize: "0.9rem" }}>
        <div className="container">
          <div className="footerMobile" style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
            <div className="col-lg-6 text-lg-start" style={{ color: "#6c757d" }}>
              Copyright &copy; Bdrive lnc. All rights reserved.
            </div>
            <div className="col-lg-5 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="/src/about-us.html" style={{ color: "#6c757d" }}>
                About Us
              </a>
              <a className="link-dark text-decoration-none me-3" href="/src/privacy_policy.html" style={{ color: "#6c757d" }}>
                Privacy Policy
              </a>
              <a className="link-dark text-decoration-none me-3" href="/src/eula.html" style={{ color: "#6c757d" }}>
                EULA
              </a>
              <a className="link-dark text-decoration-none me-3" href="https://forum.rclone.org/" target="_blank" style={{ color: "#6c757d" }}>
                Rclone Forum
              </a>
              <a className="link-dark text-decoration-none me-3" href="/support/blog/" target="_blank" style={{ color: "#6c757d" }}>
                Blog
              </a>
              <a className="link-dark text-decoration-none" href="mailto:rcloneview@bdrive.com" style={{ color: "#6c757d" }}>
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
