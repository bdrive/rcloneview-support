import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './TopNavbar.module.css';

export default function TopNavbar() {
  return (
    <nav className={styles.topNavBar}>
      <div className={styles.topNavInner}>
        {/* 좌측 로고 영역: 로고 이미지 + 사이트명 링크 */}
        <a href="/index.html" className={styles.logoLink}>
          <img 
            src={useBaseUrl('/img/logo_allWhite.svg')} 
            alt="RcloneView logo" 
            className={styles.logoImage} 
          />
        </a>

        {/* 우측 메뉴 링크 목록 */}
        <ul className={styles.navItems}>
          <li><a href="/src/pricing.html" className={styles.navLink}>Plus</a></li>
          <li><a href="/src/download.html" className={styles.navLink}>Download</a></li>
          <li><Link to="/release-notes/" className={styles.navLink}>Release Notes</Link></li>
          <li><Link to="/" className={styles.navLink}>Support</Link></li>
          <li><a href="https://forum.rcloneview.com" className={styles.navLink} target="_blank" rel="noopener">Forum</a></li>
        </ul>
      </div>
    </nav>
  );
}