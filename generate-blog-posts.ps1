###############################################################################
# RcloneView Blog Auto-Generation Script
# Usage: Run via Windows Task Scheduler daily
# Requires: Claude Code CLI (claude) installed and authenticated
###############################################################################

# Date variable — override with parameter or auto-detect
param(
    [string]$DATE = (Get-Date).ToString("yyyy-MM-dd")
)

$blogPath = "C:\Users\tsjeong\Documents\rcloneview-support\blog"

$prompt = @'
You are a professional SEO blog writer for RcloneView (https://rcloneview.com), a multi-cloud file management GUI built on top of rclone. Your task is to generate exactly 20 unique, high-quality blog posts for the date {DATE}.

═══════════════════════════════════════════════════════════════════
STEP 1: READ EXISTING FILES TO AVOID TOPIC DUPLICATION
═══════════════════════════════════════════════════════════════════

First, list all existing .md files in the blog directory to build a topic exclusion list:
```
ls C:\Users\tsjeong\Documents\rcloneview-support\blog\*.md
```
Parse every filename to extract the topic slug. You MUST NOT create any post whose topic overlaps with an existing file. This includes:
- Same remote/provider already covered as a standalone post
- Same migration pair (e.g., "migrate-X-to-Y" already exists)
- Same comparison pair (e.g., "rcloneview-vs-X" already exists)
- Same troubleshooting topic (e.g., "fix-slow-cloud-transfers" already exists)
- Same industry vertical (e.g., "cloud-storage-law-firms" already exists)
- Same platform (e.g., "rcloneview-arch-linux" already exists)
- Same feature deep-dive (e.g., "vfs-cache-mount-performance" already exists)

═══════════════════════════════════════════════════════════════════
STEP 2: READ tags.yml FOR VALID TAGS
═══════════════════════════════════════════════════════════════════

Read the tags file to get the list of valid tags:
```
cat C:\Users\tsjeong\Documents\rcloneview-support\blog\tags.yml
```
Every tag used in your posts MUST exist in this file. Use the EXACT key (left side before the colon). Common tags include: RcloneView, cloud-storage, cloud-sync, backup, guide, comparison, troubleshooting, tips, feature, industry, platform, migration, mount, performance, encryption, automation, linux, windows, macos, and provider-specific tags like google-drive, onedrive, dropbox, amazon-s3, azure, wasabi, backblaze-b2, etc.

═══════════════════════════════════════════════════════════════════
STEP 3: GENERATE 20 UNIQUE TOPICS (7-CATEGORY STRATEGY)
═══════════════════════════════════════════════════════════════════

Generate exactly 20 posts distributed across these 7 categories:

1. REMOTES (2 posts/day): Managing specific cloud storage providers with RcloneView
   - Format: "Manage {Provider} Storage — Sync and Backup Files with RcloneView"
   - Slug: manage-{provider}-cloud-sync-backup-rcloneview
   - Tags: RcloneView, {provider-tag}, cloud-storage, cloud-sync, backup

2. CROSS-PROVIDER TRANSFERS (2 posts/day): Migration/sync between two specific providers
   - Format: "Migrate {Source} to {Destination} — Transfer Files with RcloneView" OR "Sync {Source} to {Destination} — Cloud Backup with RcloneView"
   - Slug: migrate-{source}-to-{dest}-rcloneview OR sync-{source}-to-{dest}-rcloneview
   - Tags: RcloneView, {source-tag}, {dest-tag}, cloud-to-cloud, migration OR sync

3. PAIN POINTS / TROUBLESHOOTING (2 posts/day): Common cloud storage problems and solutions
   - Format: "Fix {Problem} — {Solution} with RcloneView" OR "{Problem} — How to Resolve with RcloneView"
   - Slug: fix-{problem-slug}-rcloneview
   - Tags: RcloneView, troubleshooting, tips, {relevant-tags}

4. INDUSTRY VERTICALS (1 post/day): Cloud storage solutions for specific industries
   - Format: "Cloud Storage for {Industry} — {Benefit} with RcloneView"
   - Slug: cloud-storage-{industry}-rcloneview
   - Tags: RcloneView, cloud-storage, industry, backup, guide

5. COMPARISON (1 post/day): RcloneView vs competitor tools
   - Format: "RcloneView vs {Competitor} — Cloud File Transfer Tool Comparison"
   - Slug: rcloneview-vs-{competitor}-comparison
   - Tags: RcloneView, comparison, cloud-storage

6. PLATFORM (1 post/day): Running RcloneView on specific OS/hardware
   - Format: "RcloneView on {Platform} — Cloud Storage Sync and Backup"
   - Slug: rcloneview-{platform}-cloud-sync
   - Tags: RcloneView, {platform-tag}, cloud-sync, installation

7. FEATURE DEEP-DIVE (1 post/day): Detailed guide on a specific RcloneView feature
   - Format: "{Feature} — {Benefit Description} in RcloneView"
   - Slug: {feature-slug}-rcloneview
   - Tags: RcloneView, feature, {relevant-tags}

Plus 10 additional posts distributed freely across these categories (prioritize categories 1-3).

═══════════════════════════════════════════════════════════════════
STEP 4: WRITE EACH POST WITH EXACT FORMAT
═══════════════════════════════════════════════════════════════════

Each post MUST follow this EXACT structure. Do NOT deviate:

```markdown
---
slug: {slug-without-date}
title: "{Title with — Em Dash Separator}"
authors:
  - tayson
description: "{SEO description 120-160 chars, include RcloneView and primary keyword}"
keywords:
  - {keyword 1}
  - {keyword 2}
  - {keyword 3}
  - {keyword 4}
  - {keyword 5}
  - {keyword 6}
  - {keyword 7}
  - {keyword 8}
  - {keyword 9 (optional)}
  - {keyword 10 (optional)}
tags:
  - RcloneView
  - {tag2}
  - {tag3}
  - {tag4}
  - {tag5 (optional)}
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# {Same Title as frontmatter title, without quotes}

> {One-sentence hook/summary that captures the post's value proposition}

{Introductory paragraph: 2-4 sentences explaining the problem or context. Mention RcloneView as the solution. Be specific and practical, not generic.}

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## {Section 1 Title — Descriptive, Not Generic}

{2-3 paragraphs of substantive content. Be specific about RcloneView features, workflows, or benefits. Include technical details where relevant.}

<img src="/support/images/en/blog/new-remote.png" alt="{descriptive alt text}" class="img-large img-center" />

{Optional additional paragraph after image}

## {Section 2 Title}

{2-3 paragraphs of content}

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="{descriptive alt text}" class="img-large img-center" />

## {Section 3 Title}

{2-3 paragraphs of content}

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="{descriptive alt text}" class="img-large img-center" />

## {Optional Section 4 — if content warrants it}

{Content}

<img src="{choose from available images}" alt="{descriptive alt text}" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. {Step 2 specific to this post's topic}
3. {Step 3 specific to this post's topic}
4. {Step 4 specific to this post's topic}

{Closing motivational sentence about the topic's benefit.}

---

**Related Guides:**

- [{Related Post Title 1}](https://rcloneview.com/support/blog/{related-slug-1})
- [{Related Post Title 2}](https://rcloneview.com/support/blog/{related-slug-2})
- [{Related Post Title 3}](https://rcloneview.com/support/blog/{related-slug-3})

<CloudSupportGrid />
```

═══════════════════════════════════════════════════════════════════
CRITICAL FORMAT RULES (DO NOT VIOLATE)
═══════════════════════════════════════════════════════════════════

1. FILE NAMING: {DATE}-{slug}.md — Example: {DATE}-manage-box-cloud-sync-backup-rcloneview.md
2. IMAGES: ALWAYS use HTML <img> tags, NEVER Markdown ![](). Images MUST use class="img-large img-center"
3. IMAGE PATHS: Only use these exact paths (rotate through them):
   - /support/images/en/blog/new-remote.png
   - /support/images/en/blog/cloud-to-cloud-transfer-default.png
   - /support/images/en/tutorials/wasabi-drag-and-drop.png
   - /support/images/en/howto/rcloneview-basic/compare-display-select.png
   - /support/images/en/howto/rcloneview-basic/job-run-click.png
   - /support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png
   - /support/images/en/howto/rcloneview-advanced/create-job-schedule.png
   - /support/images/en/howto/rcloneview-basic/job-history.png
   - /support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png
   - /support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png
   - /support/images/en/blog/synology-nas-autodection-and-connection.png
4. IMPORTS: Always include all three imports EXACTLY as shown (no @site/ prefix)
5. RvCta: Always include immediately after the intro paragraph
6. TRUNCATE: Always include <!-- truncate --> after RvCta
7. TAGS: Every tag MUST exist in tags.yml. Always include "RcloneView" as the first tag
8. WORD COUNT: Each post should be 400-600 words (excluding frontmatter and code)
9. EM DASH: Use — (em dash) in titles, not - (hyphen) for separators
10. RELATED GUIDES: Link to 3 existing blog posts that are topically related. Use actual slugs from existing posts
11. CLOSING: Always end with <CloudSupportGrid /> as the very last line
12. KEYWORDS: 8-10 SEO-optimized keywords per post, mix of short-tail and long-tail
13. NO EMPTY LINES between frontmatter fields
14. DESCRIPTION: Must be in double quotes in frontmatter
15. TITLE: Must be in double quotes in frontmatter
16. EACH POST: Must have 3-5 images distributed throughout the content sections
17. SLUG: Must NOT include the date prefix — only the topic slug
18. AUTHORS: Always exactly "- tayson" (indented with 2 spaces)

═══════════════════════════════════════════════════════════════════
STEP 5: WRITE FILES
═══════════════════════════════════════════════════════════════════

Write each file to: C:\Users\tsjeong\Documents\rcloneview-support\blog\{DATE}-{slug}.md

After writing all 20 files, output a numbered list of all created files with their full paths.

═══════════════════════════════════════════════════════════════════
CONTENT QUALITY GUIDELINES
═══════════════════════════════════════════════════════════════════

- Write as if you are an expert cloud infrastructure consultant
- Be specific: mention actual provider features, pricing tiers, API behaviors
- Include practical scenarios (e.g., "a photography studio with 2TB of RAW files")
- Avoid generic filler like "In today's digital world" or "Cloud storage is important"
- Each section should provide actionable information, not just describe features
- Use active voice and direct language
- Vary sentence structure and paragraph length for readability
- Related Guides should link to REAL existing posts (check filenames from Step 1)

═══════════════════════════════════════════════════════════════════
RCLONEVIEW PRODUCT KNOWLEDGE
═══════════════════════════════════════════════════════════════════

RcloneView is a cross-platform GUI (Windows, macOS, Linux) for rclone that provides:
- Remote Explorer: Browse and manage files across 70+ cloud storage providers
- Job Manager: Create, schedule, and monitor sync/copy/move operations
- Mount Manager: Mount cloud storage as local drives (virtual filesystem)
- Two-Pane Explorer: Drag-and-drop between local and remote, or remote-to-remote
- Job History: Detailed logs of all transfer operations
- Scheduler: Built-in cron-style job scheduling with retry logic
- Terminal: Embedded rclone CLI for advanced operations
- Compare Tool: Visual folder comparison across locations
- Multi-cloud Dashboard: Overview of all connected storage
- VFS Cache: Configurable caching for mounted drives
- Encryption: Client-side encryption via rclone crypt
- Filters: Include/exclude rules for selective sync
- Bandwidth Control: Throttle transfer speeds
- Chunker: Split large files across provider limits
- Telegram/Slack/Discord: Remote control and notifications
- App Lock: Password protection for the application

Supported providers include (but not limited to): Google Drive, OneDrive, Dropbox, AWS S3, Azure Blob, Backblaze B2, Wasabi, Cloudflare R2, Google Cloud Storage, DigitalOcean Spaces, Linode Object Storage, Oracle Cloud, Hetzner Storage Box, pCloud, MEGA, Proton Drive, Box, SharePoint, Nextcloud, Seafile, Storj, Sia, MinIO, OpenStack Swift, Tencent COS, Alibaba Cloud OSS, IDrive E2, Citrix ShareFile, Jottacloud, Koofr, HiDrive, OpenDrive, Yandex Disk, Mail.ru, PikPak, Put.io, Gofile, Terabox, Zoho WorkDrive, SFTP, FTP, WebDAV, SMB/CIFS, HTTP, and more.

Now execute all steps. Generate and write all 20 blog posts.
'@

# Replace {DATE} placeholder with actual date
$prompt = $prompt -replace '\{DATE\}', $DATE

Write-Host "=== RcloneView Blog Generator ===" -ForegroundColor Cyan
Write-Host "Date: $DATE" -ForegroundColor Yellow
Write-Host "Blog Path: $blogPath" -ForegroundColor Yellow
Write-Host "Generating 20 blog posts..." -ForegroundColor Green
Write-Host ""

# Run Claude Code in headless mode
$result = claude -p $prompt

# Output result
Write-Host $result

Write-Host ""
Write-Host "=== Generation Complete ===" -ForegroundColor Cyan

# Verify files were created
$newFiles = Get-ChildItem -Path $blogPath -Filter "$DATE-*.md"
Write-Host "Files created for $DATE`: $($newFiles.Count)" -ForegroundColor $(if ($newFiles.Count -eq 20) { "Green" } else { "Red" })

foreach ($file in $newFiles) {
    Write-Host "  - $($file.Name)" -ForegroundColor Gray
}
