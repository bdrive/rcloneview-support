# RcloneView Blog Fact-Check Guideline

> **Purpose:** Post-generation validation guideline to verify expressions, numbers, and terminology in auto-generated RcloneView blog posts.
> **Companion:** For feature details, refer to `RCLONEVIEW_FEATURE_SPEC.md`. This document focuses on **validation rules only**.
> **Sources:** Verified against `rcloneview-support/howto`, `rcloneview-support/docs` documentation + full `rclone-navigator` source code analysis.
> **Last Updated:** 2026-04-13
> **Guideline Version:** 1.1

---

## How to Use (2-Document System)

| Step | Document | Role |
|------|----------|------|
| 1 (Before writing) | `RCLONEVIEW_FEATURE_SPEC.md` | Reference feature spec to write with accurate information |
| 2 (After writing) | **This document** | Validate expressions, numbers, terminology, and prohibited claims |

---

## Verification Principles

> **Absence from this document does not mean something is wrong.**

1. **Feature existence:** This document is reference only. `RCLONEVIEW_FEATURE_SPEC.md`, source code, and official documentation are authoritative sources.
2. **Expressions/tone/terminology:** This document is the authoritative source. Follow these rules.
3. **Numbers/defaults:** Only cite verified numbers listed in this document. For other values, verify directly from source.
4. **Cloud providers:** New providers are added with rclone updates. A provider not listed here is still valid if rclone supports it.
5. **Preventing false negatives:** When a blog mentions a feature not in this document, do not immediately flag it as incorrect. Re-verify against the Feature Spec or source code first.

---

## Table of Contents

1. [Validation Rules](#1-validation-rules)
2. [Terminology & Naming](#2-terminology--naming)
3. [License & Pricing Facts](#3-license--pricing-facts)
4. [Verified Numbers & Defaults](#4-verified-numbers--defaults)
5. [URLs & Contact](#5-urls--contact)
6. [Unverified / Do Not Claim](#6-unverified--do-not-claim)
7. [Fact-Check Checklist](#7-fact-check-checklist)
8. [Safe Descriptions](#8-safe-descriptions)

---

## 1. Validation Rules

Rules that MUST be followed when auto-generating blog posts.

### 1.1 Absolute Prohibitions

| Rule | Reason |
|------|--------|
| Do not state specific prices (dollars/currency) | Prices change frequently. Direct to "see pricing page" instead |
| Do not cite exact cloud provider counts like "100+" | Count varies with rclone updates. Use "90+" or "dozens of" |
| No superlatives: "fastest", "only", "first" | Unverifiable comparative claims |
| Do not describe future features as confirmed | Includes unimplemented features like "Proxy settings (coming soon)" |
| Do not make specific security/encryption strength claims | "AES-256" etc. are rclone crypt implementations, not RcloneView features |
| No direct comparisons with other products | Legal risk and unverifiable claims |
| Do not describe rclone features as RcloneView-exclusive | RcloneView is a GUI frontend for rclone |
| Do not fabricate installation commands or package names | Only use methods from Feature Spec Section 18. See Section 1.5 below |
| Do not describe RcloneView as headless/CLI/server tool | It is a GUI-only app requiring a display server. See Section 1.6 below |
| Do not claim availability on unofficial package managers | AUR, Snap Store, Flathub, Homebrew — none are official channels |
| Do not cite specific performance numbers | Transfer speed, throughput etc. are environment-dependent and unverifiable |

### 1.2 Expression Guide

| Context | Correct | Incorrect |
|---------|---------|-----------|
| Cloud provider count | "Supports 90+ cloud storage services" | "Supports 100 cloud services" |
| rclone relationship | "GUI client built on rclone" | "A tool that replaces rclone" |
| Bidirectional sync | "Bidirectional sync (Beta)" | "Perfect bidirectional sync" |
| Encryption | "Encryption support via rclone Crypt" | "Military-grade encryption" |
| Free features | "Basic features available with FREE license" | "All features available for free" |
| Platform | "Supports Windows, macOS, and Linux" | "Supports all operating systems" |
| Mount | "Mount as a virtual drive" | "Works exactly like a local drive" |

### 1.3 Number/Value Citation Rules

- Use only values directly confirmed from documentation or code
- Express variable numbers (cloud count, versions) as ranges
- Show defaults in parenthetical format: "(default: X)"
- Never cite performance numbers (transfer speed, etc.) — they are environment-dependent

### 1.4 Screenshot/Image Reference Rules

- Screenshots in documentation may differ from the current version
- Do not describe version-specific screenshots as "current appearance"
- Describe UI by function, not by button placement

### 1.5 Installation & Distribution Claim Rules

These rules prevent the most common and damaging type of AI hallucination: fabricated installation methods that lead users to dead ends.

**Only these installation methods are valid:**

| Platform | Valid Method | Command/Action |
|----------|------------|----------------|
| Windows | Download .exe from rcloneview.com | Run `setup_rclone_view-{version}.exe` |
| macOS | Download .dmg from rcloneview.com | Open `RcloneView-{version}.dmg` |
| Linux | Download .AppImage from rcloneview.com | `chmod +x RcloneView-*.AppImage && ./RcloneView-*.AppImage` |
| Linux | Download .deb from rcloneview.com | `sudo dpkg -i rclone_view-*-linux-{arch}.deb` |
| Linux | Download .rpm from rcloneview.com | `sudo rpm -i rclone_view-*-linux-{arch}.rpm` |

**These installation methods are FABRICATED — never use them:**

| Fabricated Method | Why It's Wrong |
|-------------------|---------------|
| `yay -S rcloneview` | No AUR package exists |
| `pacman -S rcloneview` | Not in official Arch repos |
| `snap install rcloneview` | Not published to Snap Store |
| `flatpak install rcloneview` | Not published to Flathub |
| `brew install rcloneview` | No Homebrew formula exists |
| `apt install rcloneview` | No APT repository exists — use .deb direct download |
| `dnf install rcloneview` | No DNF repository exists — use .rpm direct download |
| `pip install rcloneview` | Not a Python package |
| `npm install rcloneview` | Not a Node.js package |
| `docker run rcloneview` | No Docker image exists |

**Architecture-specific rules:**
- Linux x86_64 and aarch64 (ARM64) builds both exist
- Windows is x86-64 ONLY (no ARM64 Windows build)
- macOS is Universal (Intel + Apple Silicon in one .dmg)
- No 32-bit builds exist for any platform

### 1.6 Platform & Headless Operation Rules

RcloneView is a **GUI desktop application**. Every blog post MUST respect these constraints:

| Rule | Details |
|------|---------|
| GUI is mandatory | RcloneView requires a display server (X11 or Wayland on Linux, native GUI on Windows/macOS) |
| Cannot run headless | No CLI-only mode, no headless mode, no server mode |
| Cannot be a systemd service | RcloneView itself cannot run as `/etc/systemd/system/rcloneview.service`. The documented systemd service is for `rclone rcd` (the rclone daemon), NOT RcloneView |
| Technology stack is Flutter | NOT Qt, NOT Electron, NOT GTK. It uses Flutter/Dart with GTK+3 as a Linux dependency |
| Remote desktop is an option | VNC, RDP, or X11 forwarding can provide a display for remote machines, but this must be stated explicitly |

**Platform-specific blog post requirements:**

| Post Topic | MUST Include | MUST NOT Claim |
|------------|-------------|----------------|
| Raspberry Pi / ARM SBC | Desktop environment + display server required; recommend rclone CLI for headless | Headless setup as primary use case |
| Arch Linux | Direct download from rcloneview.com (.AppImage or manual) | AUR package, Qt5 dependencies |
| Any Linux distro | GTK+3 and X11/Wayland requirement | Package manager installation (unless it's dpkg/rpm with downloaded file) |
| Server / NAS | Use Connection Manager to connect to remote rclone; don't install RcloneView on server | RcloneView as server software |
| Docker | Not applicable — use rclone CLI in Docker | Docker image for RcloneView |

---

## 2. Terminology & Naming

### 2.1 Product & Brand Names

| Correct | Incorrect |
|---------|-----------|
| RcloneView | Rclone View, rcloneview, RCloneView, Rclone-View |
| rclone | Rclone (mid-sentence), RCLONE |
| Rclone (sentence start only) | rClone |
| PLUS License | Plus license, plus License |
| FREE License | Free license |
| Lifetime License | lifetime license |

### 2.2 Feature Names

| Feature | Correct Name | Notes |
|---------|-------------|-------|
| File browser panels | File Explorer | Left/right panes |
| Folder comparison | Folder Compare | Compare button |
| Job management | Job Manager | Job Manager button |
| Mount management | Mount Manager | Remote tab |
| Connection management | Connect Manager / Connection Manager | Settings tab |
| Remote management | Remote Manager | Remote tab |
| Built-in rclone | Embedded Rclone | External: External Rclone |
| Virtual remotes | Virtual Remotes | Alias, Crypt, Cache, etc. |
| System tray | System Tray | Tray icon |
| Simulation mode | Dry Run | Sync simulation |
| Batch jobs | Batch Operations | Beta feature |

### 2.3 Cloud Service Names

| Correct | Incorrect |
|---------|-----------|
| Google Drive | Google drive, GDrive |
| OneDrive | One Drive, Onedrive |
| Dropbox | Drop Box, DropBox |
| Backblaze B2 | BackBlaze, Backblaze b2 |
| Cloudflare R2 | CloudFlare, cloudflare R2 |
| Amazon S3 | Amazon s3 (AWS S3 is acceptable informally) |
| pCloud | PCloud, Pcloud |
| Yandex Disk | Yandex disk, YandexDisk |
| Mega | MEGA (official is MEGA, but rclone uses Mega) |
| Proton Drive | ProtonDrive, proton drive |
| Azure File Storage | Azure file storage |
| Zoho WorkDrive | Zoho Workdrive |
| Citrix ShareFile | Citrix Sharefile |
| HiDrive | Hi Drive, Hidrive |
| iCloud Drive | icloud Drive, ICloud |

---

## 3. License & Pricing Facts

> For detailed feature comparison, see `RCLONEVIEW_FEATURE_SPEC.md` Section 16.

### 3.1 Verified License Structure

| Fact | Value | Source |
|------|-------|--------|
| License types | FREE, PLUS, Lifetime | Docs + Code |
| FREE requires no license key | Confirmed | Docs |
| PLUS requires license key | Confirmed | Docs + Code |
| Activation path | Help > Activate License | Docs |
| Discount coupons are one-time per email | Confirmed | Docs |

### 3.2 License-Related Claim Prohibitions

- Specific prices (frequently change)
- Price comparisons with competitors
- Subjective evaluations like "free is enough"
- Specific trial period duration (may change)

---

## 4. Verified Numbers & Defaults

Verified values that may be cited in blog posts.

| Item | Value | Source |
|------|-------|--------|
| Embedded Rclone default address | http://127.0.0.1:5582 | Docs + Code |
| External Rclone default port | 5572 | Docs + Code |
| Multi-thread transfers default | 4 | Docs |
| Equality checkers default | 8 | Docs |
| Sync retry default | 3 times | Docs |
| Supported UI languages | 9 | Code (arb files) |
| Explorer panel count | 1-4 | Code |
| macOS recommended file handles | 524288 | Docs |
| Cache mode default | writes | Docs |
| Minimum rclone version | v1.69.1 | Docs |
| SMTP default port | 587 | Code |
| Supported cloud count | 90+ | Code analysis |

### 4.1 Number Citation Cautions

- **Variable:** Cloud provider count, rclone version, app version
- **Environment-dependent:** Transfer speed, mount performance, cache efficiency
- **Never cite:** Specific prices, discount rates, trial periods

---

## 5. URLs & Contact

### 5.1 Official URLs (Verified)

| Purpose | URL |
|---------|-----|
| Official website | https://rcloneview.com |
| Download | https://rcloneview.com/src/download.html |
| Pricing & License | https://rcloneview.com/src/pricing.html |
| Rclone official | https://rclone.org |
| Update feed | https://rcloneview.com/appcast/ |
| macOS builds | https://downloads.bdrive.com/rclone_view/builds/ |

### 5.2 Support Channels (Verified)

| Channel | Contact |
|---------|---------|
| Email | rcloneview@bdrive.com |
| Forum | https://forum.rcloneview.com |

### 5.3 Reference Documentation (Verified)

| Document | URL |
|----------|-----|
| Rclone filtering | https://rclone.org/filtering/ |
| Rclone bisync | https://rclone.org/bisync/ |
| Rclone overview | https://rclone.org/overview/ |
| AWS S3 docs | https://docs.aws.amazon.com/general/latest/gr/s3.html |

### 5.4 URL Citation Rules

- Only URLs from the above lists may be included in blog posts
- Third-party service URLs (AWS Console, Cloudflare Dashboard, etc.) only in tutorial context
- Broken link warning: Verify link validity before publishing

---

## 6. Unverified / Do Not Claim

Items confirmed in only one source (docs or code), or insufficiently verified. **Do not state definitively in blog posts.**

### 6.1 Code-Only (Not Documented) — Possibly Internal/Unreleased

| Item | Status | Reason |
|------|--------|--------|
| Email Notifications | Code only | Not in docs, may be PLUS feature |
| Telegram Bot | Code only | Not in docs |
| Slack Integration | Code only | Not in docs |
| Discord Integration | Code only | Not in docs |
| Web Server Access | Code only | Not in docs |
| Application Lock | Code only | Not in docs |
| Batch Operations | Code only | Beta status, insufficient documentation |
| Thumbnail View | Code only | Image preview grid |
| Get Public Link | Code only | Provider-specific support unclear |
| iCloud Photos | Code only | Separate package, insufficient docs |
| Analytics/Telemetry | Code only | Not appropriate for public disclosure |

### 6.2 Unimplemented / Coming Soon

| Item | Status |
|------|--------|
| Proxy settings | Marked "coming soon" in docs |

### 6.3 Version-Dependent Facts

| Item | Caution |
|------|---------|
| App version number | Docs: 0.6.301~1.1.517 / Code: 1.4.1+1 — verify latest before publishing |
| rclone version | v1.69.1~v1.70.1 mentioned — verify latest |
| iCloud Drive support | Requires rclone v1.69+ — must state version requirement |

### 6.4 Subjective/Exaggeration Risk Expressions

When these expressions appear in generated blog posts, automatically remove or replace:

| Risky Expression | Replacement |
|-----------------|-------------|
| "perfect" | "comprehensive" or remove |
| "fastest" | Remove (no performance comparisons) |
| "only" / "unique" | "one of few" or remove |
| "revolutionary" / "innovative" | Remove |
| "unlimited" | "numerous" or cite specific numbers |
| "safe" / "highly secure" | "leverages rclone's encryption capabilities" |
| "easy" / "simple" | "GUI-based" |
| "all clouds" | "90+ cloud storage services" |
| "real-time" | "live transfer monitoring" |
| "automatically" | Describe the specific behavior |

---

## 7. Fact-Check Checklist

Final verification checklist before blog publication:

**Terminology & Expression:**
- [ ] Is the product name exactly "RcloneView"?
- [ ] Are rclone features clearly distinguished from RcloneView features?
- [ ] Is the FREE/PLUS license distinction accurate?
- [ ] Are there no specific prices mentioned?
- [ ] Are there no superlatives (fastest, only, first)?
- [ ] Are cloud service names spelled correctly?
- [ ] Are all cited URLs from the verified list?
- [ ] Are there no performance claims (speed, efficiency)?
- [ ] Are there no direct product comparisons?
- [ ] Is bidirectional sync marked as "Beta"?
- [ ] Are all cited numbers verified values? (See Section 4)

**Features & Status:**
- [ ] Are unimplemented (Coming Soon) features not described as confirmed?
- [ ] Are code-only features (Section 6.1) not described as official features?
- [ ] Is platform support stated as "Windows, macOS, Linux"?
- [ ] Is the technology stack described as Flutter/Dart (NOT Qt, NOT Electron)?

**Installation & Distribution (CRITICAL — most common failure point):**
- [ ] Are ALL installation commands valid per Section 1.5?
- [ ] Are there NO fabricated package manager commands (yay, snap, flatpak, brew, apt repo, dnf repo)?
- [ ] Does every install instruction start with "Download from rcloneview.com"?
- [ ] Are architecture references correct (x86_64, aarch64 for Linux; x86-64 only for Windows; Universal for macOS)?

**Platform & Headless (CRITICAL — caused real user complaints):**
- [ ] Is it clear that RcloneView is a GUI application requiring a display?
- [ ] Are there NO claims of headless/CLI/server operation?
- [ ] Is the systemd service clearly identified as `rclone rcd`, NOT RcloneView?
- [ ] For Raspberry Pi/ARM posts: Is desktop environment requirement stated?
- [ ] For Arch Linux posts: Is installation via direct download (NOT AUR)?
- [ ] For server/NAS posts: Is it clear to install rclone (not RcloneView) on the server?

---

## 8. Safe Descriptions

Pre-verified phrases that can be safely used in blog posts:

**Product Introduction:**
> RcloneView is a GUI client built on rclone that lets you manage 90+ cloud storage services from a single interface on Windows, macOS, and Linux.

**Core Value:**
> It provides a graphical interface for file browsing, synchronization, folder comparison, and virtual drive mounting — everything you need for cloud storage management.

**Free Usage:**
> Basic file management, sync, mount, and folder comparison features are available with the FREE license. Advanced features like scheduled sync and multi-window support require a PLUS license.

**rclone Relationship:**
> RcloneView is not the official rclone GUI — it is an independent GUI frontend that communicates via the rclone RC API. It ships with an embedded rclone binary and can also connect to external rclone instances.

**Mount Description:**
> Mount cloud storage as a local drive and access it directly from your file explorer. On Windows, assign a drive letter; on macOS and Linux, specify a mount point.

**Sync Description:**
> Use one-way sync to mirror source content to a destination, or bidirectional sync (Beta) to merge changes from both sides. 1:N sync lets you synchronize one source to multiple destinations simultaneously.
