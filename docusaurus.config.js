// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RcloneView Support Center',
  tagline: 'Support Center for RcloneView — Cloud Sync & Backup Made Easy',
  favicon: 'img/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://rcloneview.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/support/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'RcloneView', // Usually your GitHub org/user name.
  // projectName: 'support', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // tailwindcss 설정 - jay
  plugins: [
    async function myTailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'howto',                         // 고유 ID
        path: 'howto',                       // 폴더 경로 (Help Guides 콘텐츠)
        routeBasePath: 'howto',              // URL 경로
        sidebarPath: require.resolve('./sidebarsHowto.js'),
        // ... (기타 옵션 필요 시 지정)

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        routeBasePath: 'tutorials',
        sidebarPath: require.resolve('./sidebarsTutorials.js'),
        // ... (기타 옵션 필요 시 지정)

      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'release-notes',
        path: 'release-notes',
        routeBasePath: 'release-notes',
        sidebarPath: require.resolve('./sidebarsReleaseNotes.js'),
      },
    ],
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // 문서 기능 비활성화
        /*
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        */
       /* blog: false,  */
        
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },

          // ✅ 추가
          blogSidebarTitle: 'Recent posts',
          blogSidebarCount: 'ALL', // 또는 충분히 큰 숫자(예: 100)

          /*
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          */
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        

        theme: {
          customCss: [
            './src/css/custom.css',
            './src/css/obsidian-docusaurus-theme.css',  
          ],
        },

        sitemap: {
        filename: 'support-sitemap.xml',
        changefreq: 'weekly',
        priority: 0.8, // ← SEO 중요도 높이면 0.8~1.0 추천
        ignorePatterns: ['**/tags/**'], //tags 는 미 포함...
        }

      }),
    ],
  ],

// image zoom-in을 위한 javascript 설정 - jay
  scripts: [

      // src: '/support/js/image-zoom.js',
      // async: true,

    // Google tag (gtag.js)
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=AW-11506583647',
      async: true,
    },

    // Plausible via Cloudflare Worker Proxy
    {
      src: 'https://round-breeze-3e9d.jay-e45.workers.dev/workshop/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js?v=20250331',
      defer: true,
      'data-domain': 'rcloneview.com',
      'data-api': 'https://round-breeze-3e9d.jay-e45.workers.dev/calendar/event',
    },
  
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      algolia: {
      appId: 'UGRR3WR5TO',
      apiKey: '1bb2a6e53b0388ab8305806bd89350e2',
      indexName: 'rcloneview-support',
      contextualSearch: true, // 필요시 옵션
      },

  // 목차 깊이를 위한 themeConfig 설정 추가
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4, // ← 여기서 4로 설정하여 ####까지 목차 표시
      },

      metadata: [
        { name: 'keywords', content: 'rclone, cloud storage, sync, backup, support, rcloneview, multicloud' },
        { name: 'author', content: 'RcloneView Team' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#2563eb' },
      ],
      headTags: [
        { tagName: 'meta', attributes: { property: 'og:type', content: 'website' } },
        { tagName: 'meta', attributes: { property: 'og:title', content: 'RcloneView Support - Help Center & Tutorials' } },
        { tagName: 'meta', attributes: { property: 'og:description', content: 'Browse RcloneView help guides, tutorials, and FAQs. Easily sync and manage your cloud storage with our powerful GUI.' } },
        { tagName: 'meta', attributes: { property: 'og:url', content: 'https://rcloneview.com/support/' } },
        { tagName: 'meta', attributes: { property: 'og:image', content: 'https://rcloneview.com/support/img/og-image.png' } },
  
        { tagName: 'meta', attributes: { name: 'twitter:card', content: 'summary_large_image' } },
        { tagName: 'meta', attributes: { name: 'twitter:title', content: 'RcloneView Support - Help Center' } },
        { tagName: 'meta', attributes: { name: 'twitter:description', content: 'Need help with RcloneView? Find guides and answers in our Support Center.' } },
        { tagName: 'meta', attributes: { name: 'twitter:image', content: 'https://rcloneview.com/support/img/og-image.png' } },
  
        { tagName: 'link', attributes: { rel: 'canonical', href: 'https://rcloneview.com/support/' } },
  
        {
          tagName: 'script',
          attributes: { type: 'application/ld+json' },
          innerHTML: `
          {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://rcloneview.com/support/"
            },
            "headline": "RcloneView Support Center",
            "description": "Support documentation and tutorials for RcloneView, a GUI for managing cloud sync and backup.",
            "image": "https://rcloneview.com/support/img/og-image.png",
            "author": {
              "@type": "Organization",
              "name": "RcloneView"
            },
            "publisher": {
              "@type": "Organization",
              "name": "RcloneView",
              "logo": {
                "@type": "ImageObject",
                "url": "https://rcloneview.com/support/img/logo-white.svg"
              }
            },
            "datePublished": "2025-05-15"
          }`
        },

       {
          tagName: 'script',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11506583647');
          `,
        }
      ],

      // Replace with your project's social card
      /*
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      */
    }),
};

export default config;
