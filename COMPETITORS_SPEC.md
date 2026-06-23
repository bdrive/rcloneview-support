# RcloneView Competitor Specification

> **Purpose:** The SINGLE authoritative source of facts for any RcloneView blog post that
> compares RcloneView to another product (Category 5 — COMPARISON, "alternatives" listicles,
> and the soft one-line differentiators woven into everyday posts).
> **Companion:** Product facts live in `RCLONEVIEW_FEATURE_SPEC.md`. Validation tone/rules live
> in `BLOG_FACTCHECK_GUIDELINE.md` (Section 9). This file holds COMPETITOR facts only.
> **Last Verified:** 2026-06-23
> **Verification cadence:** Re-verify all pricing/feature rows EVERY QUARTER. Pricing changes
> frequently — every competitor claim in a post MUST be phrased "as of {Month Year}".

---

## 0. Golden Rules for Comparison Content (read first)

1. **Facts only from this file.** If a competitor fact is not in this document, do NOT state it.
   Re-verify on the competitor's official site and add it here first.
2. **Honest, not disparaging.** State what we genuinely win on. Never insult a competitor, never
   call them "bad", never claim they are "broken". Let the factual table do the persuading.
3. **No superlatives** — the existing ban on "fastest / only / first / perfect" STILL APPLIES,
   even in comparison posts. "RcloneView syncs for free; RaiDrive does not sync" is a fact.
   "RcloneView is the only tool that syncs" is a banned superlative (and false).
4. **Always date-stamp.** Pricing and tier structures change. Use "As of {Month Year}, …".
5. **Acknowledge a competitor strength** in every head-to-head post (builds trust + reads as
   balanced to both readers and Google's helpful-content system).
6. **NetDrive is OFF-LIMITS.** NetDrive (netdrive.net) is a Bdrive sister product, NOT a
   competitor. Never position against it. Never write "RcloneView vs NetDrive".
7. **rclone is the engine, not a competitor.** RcloneView is a GUI built on rclone. Never frame
   rclone as a rival; frame RcloneView as "the GUI that makes rclone approachable."

---

## 1. RcloneView — Our Positioning Facts (the "win" column)

All verified against `RCLONEVIEW_FEATURE_SPEC.md`. These are the differentiators safe to lead with:

| Strength | Fact |
|----------|------|
| Cross-platform | Windows, macOS, AND Linux (native builds for each) |
| Free mount | Mounting cloud storage as a local/virtual drive works on the FREE license |
| Free sync | One-way sync and folder compare work on the FREE license |
| Provider breadth | 90+ cloud providers (via rclone engine), including S3/Azure/B2/Wasabi with write access |
| No ads | The FREE license shows no advertisements |
| Open engine | Built on rclone (mature, open-source, widely audited transfer engine) |
| Multi-panel | 1–4 Explorer panels; multiple accounts of the same provider can be open at once |
| What is PLUS-only | Scheduled sync, multi-window, batch operations (Beta) — everything else is FREE |

**One-line soft differentiators (Layer B — for everyday posts, NO competitor name):**
- "Unlike mount-only tools, RcloneView also syncs — on the FREE license, across Windows, macOS, and Linux."
- "RcloneView mounts AND syncs 90+ providers from one window — no per-service upgrade ladder."
- "Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license."

---

## 2. RaiDrive (primary target — high search volume)

> Official: https://www.raidrive.com · Pricing: https://www.raidrive.com/pricing
> Vendor: OpenBoxLab Inc. · Pricing page confirmed verbatim 2026-06-23.

| Attribute | Fact (as of June 2026) | Source |
|-----------|------------------------|--------|
| Core function | **Mount only** — maps cloud/NAS as a network drive. **No sync feature.** | raidrive.com |
| Platform | **Windows-focused; no macOS app.** ("Connect without Windows sign-in" feature confirms Windows orientation.) | pricing page, cloudmounter.net compare |
| Free tier ("Standard") | Has **advertisements**; limited to **8 drives**; Forum support only | raidrive.com/pricing |
| Free tier write access | Writable: Google Drive, OneDrive, Dropbox, **Naver MYBOX**, WebDAV, SFTP, FTP. **Everything else read-only** (incl. MEGA, pCloud, Box, SharePoint, AWS S3, Azure, Backblaze B2, Cloudflare R2, Wasabi, MinIO, Storj, etc.) | raidrive.com/pricing |
| Pricing model | **5-tier ladder** (Standard / Starter / Individual / Team / Essential). Write access unlocks in **three groups**, each at a higher tier | raidrive.com/pricing |
| Group 1 — consumer write | Google Drive/OneDrive/Dropbox/MEGA/pCloud/Yandex etc. writable from **Starter (≈ $1.84/mo)** | raidrive.com/pricing |
| Group 2 — business write | Google Workspace, OneDrive Business, SharePoint, Box etc. writable from **Individual (≈ $2.84/mo)**. At Individual, object storage is STILL read-only | raidrive.com/pricing |
| Group 3 — object storage write | **AWS S3, Azure, Backblaze B2, Cloudflare R2, Wasabi, MinIO, Storj etc. require Team (≈ $4.84/mo)** — or a paid **add-on** on the Essential tier | raidrive.com/pricing |
| Essential tier ($2.17/mo) | Cheaper, but business + object-storage write are **paid add-ons** (Writable Addon), and Local Disk / File Lock are add-ons too | raidrive.com/pricing |
| Local Disk / File Lock | Local Disk mount = Individual+; File Lock = Team+ (add-ons on Essential) | raidrive.com/pricing |
| Displayed prices | "**Per month on a 3-year commitment**" — month-to-month is higher; auto-charged after 14-day trial | raidrive.com/pricing |
| Multiple accounts | **Cannot open multiple accounts of the same provider simultaneously** | cloudmounter.net compare |
| CLI / automation | **No command-line control** | cloudmounter.net compare |
| Genuine strength (acknowledge) | Strong media streaming from cloud without downloading first; broad provider catalog | cloudwards / PCWorld |

**RcloneView vs RaiDrive — honest angle:**
> RaiDrive is a capable Windows mount tool with a broad provider catalog. RcloneView differs in
> three concrete ways. First, it runs on macOS and Linux as well as Windows. Second, it adds
> folder sync and compare on top of mounting — RaiDrive mounts only. Third, where RaiDrive unlocks
> write access in stages (consumer services at Starter, business services at Individual, and
> object storage like Amazon S3, Azure, and Backblaze B2 only at the Team tier — all as of June
> 2026), RcloneView provides read/write to those services on its FREE license. If you only mount
> consumer drives on Windows, RaiDrive's free tier works; if you also sync, write to S3/Azure/B2,
> or use a Mac, RcloneView covers more without climbing a tier ladder.

---

## 3. CloudMounter (secondary target)

> Official: https://cloudmounter.net

| Attribute | Fact (as of June 2026) | Source |
|-----------|------------------------|--------|
| Core function | **Mount only** (cloud/FTP/WebDAV as local drive). No dedicated sync/scheduler. | cloudmounter.net |
| Platform | macOS and Windows (Mac free version is notably better) | cloudwards |
| Pricing | Personal ≈ **$29.99/yr per 1 Mac**; Team ≈ **$99.99** (5 devices); lifetime available | Capterra / cloudwards |
| Free version | Yes, limited | cloudwards |
| Strength (acknowledge) | Strong client-side AES-256 encryption; clean Mac UX | cloudwards |

**Angle:** RcloneView adds true sync + compare and free S3/Azure/B2 write, across all three OSes.

---

## 4. Mountain Duck (secondary target)

> Official: https://mountainduck.io

| Attribute | Fact (as of June 2026) | Source |
|-----------|------------------------|--------|
| Core function | **Mount only** (Cyberduck's mounting sibling) | mountainduck.io |
| Platform | macOS and Windows | mountainduck.io |
| Pricing | Paid one-time license per major version (verify exact figure before citing); 30% switch discount | mountainduck.io |
| Strength (acknowledge) | Mature, lightweight, deep protocol support via Cyberduck lineage | mountainduck.io |

**Angle:** RcloneView adds sync + compare + scheduling and is free to mount; Mountain Duck is mount-only and paid.

---

## 5. ExpanDrive (secondary target — note: now free for personal)

> Official: https://www.expandrive.com

| Attribute | Fact (as of June 2026) | Source |
|-----------|------------------------|--------|
| Core function | Mount + some sync flexibility | cloudwards |
| Pricing | **Personal now free**; Server edition ≈ $99 | cloudwards |
| Platform | macOS, Windows, Linux | cloudwards |
| Strength (acknowledge) | Free personal tier; fast multi-threaded engine | cloudwards |

**Angle (careful — ExpanDrive personal is also free):** Lead on provider breadth (90+ via rclone),
folder compare, and the open rclone engine rather than on price here.

---

## 6. Air Explorer / Air Live Drive (tertiary)

> Official: https://www.airexplorer.net · https://www.airlivedrive.com

| Attribute | Fact (as of June 2026) | Source |
|-----------|------------------------|--------|
| Air Explorer | File-transfer manager across clouds; freemium (Pro paid) | airexplorer.net |
| Air Live Drive | Mount clouds as drives; freemium | airlivedrive.com |
| Platform | Windows-centric (Air Explorer has macOS) | vendor sites |

**Angle:** RcloneView unifies mount + sync + compare in one app on all three OSes with 90+ providers.

---

## 7. odrive (tertiary)

| Attribute | Fact (as of June 2026) |
|-----------|------------------------|
| Core function | Sync/"infinite sync" placeholder model; consumer-oriented |
| Pricing | Freemium; Premium subscription for advanced sync |
| Note | Different model (placeholder sync); compare cautiously, lead on RcloneView's GUI + rclone breadth |

---

## 8. DO-NOT-TARGET list

| Name | Why excluded |
|------|--------------|
| **NetDrive** | Bdrive sister product — never position against it |
| **rclone (CLI)** | The engine RcloneView is built on — frame as "we add a GUI", not as a rival |

---

## 9. High-intent target keywords (for slugs/titles)

These capture users already shopping for a competitor — the highest-converting traffic:

- `rcloneview-vs-raidrive` — "RcloneView vs RaiDrive — Mount and Sync Cloud Storage Compared"
- `best-raidrive-alternatives-rcloneview` — listicle capturing "RaiDrive alternative" searches
- `rcloneview-vs-cloudmounter`
- `rcloneview-vs-mountain-duck`
- `raidrive-no-sync-use-rcloneview` (pain-point framing, no head-to-head)
- `mount-and-sync-cloud-free-rcloneview` (soft, no competitor name)

> Listicle "best {competitor} alternatives" pages typically absorb the most competitor-brand
> search volume and should be refreshed (not duplicated) each quarter.
