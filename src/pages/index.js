// 파일: src/pages/index.js (혹은 SupportPage.js)
import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import "../css/search.css";
import LocalizedDocSearch from "../components/LocalizedDocSearch";
// import styles from './Support.module.css';  // CSS 모듈 또는 custom.css에서 클래스 정의

export default function SupportPage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={translate({ id: "home.title", message: "RcloneView Support Center", description: "Support home title" })}
      description={translate({ id: "home.description", message: "Find guides, tutorials, and help for RcloneView.", description: "Support home meta description" })}>
      <main className="px-0 mt-0 bg-white" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {/* 메인 배경 흰색 */}
        {/* 검색창 영역 (흰색 배경) */}
        <div
          className="bg-white w-screen"
          style={{ height: 270, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
        >
          <article>
            <h1 className="text-center mb-6 text-gray-900 titleMobile" style={{ color: "#555", fontFamily: "Poppins", fontWeight: 600 }}>
              <Translate id="home.heading" description="Support home hero heading">RcloneView Support Center</Translate>
            </h1>
            <div className={styles.buttons}>
              <div className="docsearch-desktop-only">
                <LocalizedDocSearch />
              </div>
              {/* <Link className="button button--secondary button--lg" to="/howto/intro/" style={{ fontFamily: "Poppins" }}>
                Quick Start Guide - 3min ⏱️
              </Link> */}
            </div>
          </article>
        </div>
        {/* Tutorials 버튼부터 하단 영역까지 전체 회색 배경 */}
        <div className="bg-gray-100 w-full py-12" style={{ flex: 1 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            <Link
              to="/tutorials/"
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 text-center hover:no-underline"
            >
              <div className="text-5xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "Poppins" }}>
                <Translate id="home.tutorials" description="Card title">Tutorials</Translate>
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Poppins" }}>
                <Translate id="home.tutorialsDesc" description="Card description">Step-by-step guides to master RcloneView.</Translate>
              </p>
            </Link>

            <Link
              to="/howto/"
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 text-center hover:no-underline"
            >
              <div className="text-5xl mb-4 text-red-600">❓</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "Poppins" }}>
                <Translate id="home.helpGuides" description="Card title">Help Guides</Translate>
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Poppins" }}>
                <Translate id="home.helpGuidesDesc" description="Card description">Learn how to use RcloneView.</Translate>
              </p>
            </Link>

            <a
              href="https://forum.rcloneview.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition duration-300 text-center hover:no-underline "
            >
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: "Poppins" }}>
                <Translate id="home.community" description="Card title">Community</Translate>
              </h3>
              <p className="text-gray-600" style={{ fontFamily: "Poppins" }}>
                <Translate id="home.communityDesc" description="Card description">Join discussions and share your ideas.</Translate>
              </p>
            </a>
          </div>
        </div>
        {/* 푸터 추가. /support 에서만 */}
      </main>
    </Layout>
  );
}
