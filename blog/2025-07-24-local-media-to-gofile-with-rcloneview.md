---
slug: local-media-to-gofile-with-rcloneview
title: Move & Sync Local Media to Gofile with RcloneView (No CLI Required)
authors:
  - jay
description: Upload, sync, and manage large media libraries from your hard drive to Gofile using RcloneView’s friendly GUI—plus tips for links, dedupe, and scheduling.
keywords:
  - rcloneview
  - gofile
  - media upload
  - hard drive to cloud
  - cloud file transfer
  - scheduled sync
  - rclone GUI
  - public links
tags:
  - RcloneView
  - gofile
  - media
  - cloud-file-transfer
  - sync
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Move & Sync Local Media to Gofile with RcloneView (No CLI Required)

> Publish and protect your media library by moving it from your **hard drive** to **Gofile**—all with clicks, not commands.

## Introduction — Why host your local media on Gofile?

If your video edits, raw photos, and audio masters live only on a single drive, they’re one spill or disk error away from disappearing. Moving media to **Gofile** gives you cloud reach, easy sharing, and space relief on your workstation. With **RcloneView**, you get the power of rclone in a friendly GUI: connect, preview, copy, and schedule—no terminal needed.

<!-- truncate -->
### Understanding Gofile (at a glance)
- Gofile is a content storage & distribution platform with a documented REST API. You can create public links and automate uploads via API tokens.  [gofile.io](https://gofile.io/api)  
- rclone has a dedicated **Gofile** backend: once configured with your **Account API token**, you can list, copy, and even make public links via `rclone link`. *(Note: rclone’s Gofile backend requires a **premium** Gofile account.)*  [Rclone](https://rclone.org/gofile/)

### Understanding your local media library
- Media projects are **big** (multi-GB), nested, and often duplicated across versions.  
- Good tooling matters: previews, selective copy, and resume-friendly transfers are essential for smooth migrations.

### Why move from hard drive → Gofile?
- **Shareability**: generate public links for clients & collaborators.
- **Offload & backup**: free local space while keeping an online copy.  
- **Workflow control**: schedule pushes after renders, keep folders in sync.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Step 1 — Preparation

Before you upload:

1. **Organize folders** (e.g., `Footage/`, `Stills/`, `Masters/`) to keep jobs clear and repeatable.  
2. **Decide your mode**: one-time copy of an archive, ongoing sync of an active project, or a nightly schedule.  


## Step 2 — Connect Gofile in RcloneView

RcloneView wraps rclone’s configuration into a guided flow.

1. Open **RcloneView** → click **`+ New Remote`**  
2. Select **Gofile**, then paste your **Account API token** from Gofile **My Profile**. *(Premium required for rclone connections.)* 
3. Name it (e.g., `MyGofile`) and save.  

🔍 Helpful guide: (Add Gofile Remote)[/support/howto/remote-storage-connection-settings/gofile] 

<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />

## Step 3 — Run the transfer

RcloneView offers three clear ways to move and maintain your media. Start small, then scale.

### A) Drag & Drop (manual, ad-hoc)
- Open your **Local** media on the left, **Gofile** on the right, then **drag folders/files across**—simple and visual.  

👉 See more: [Copying Files using Drag and Drop](/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Compare & Copy (preview changes)
- Use **Compare** to see what’s new or changed before copying, reducing surprises and retries.  

👉 See more: [Compare and Manage Files](/support/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results in RcloneView showing changed files" class="img-medium img-center" />

### C) Sync & Scheduled Jobs (automate)
- Mirror your local **Projects** folder into Gofile with **Sync**.  
- **Dry-run** first, then save as a reusable job and set a schedule (e.g., nightly).  

👉 See more:
- [Synchronize Remote Storages](/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling and Execution](/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved job in RcloneView" class="img-medium img-center" />

**Pro tips**
- If Gofile detects **duplicate names** in a folder, syncing can be noisy—use rclone’s **dedupe** after upload to clean conflicts. 
- Need **share links**? rclone’s `link` can create public links programmatically (advanced/CLI). 

---

## Conclusion — Recap & extra pointers

- **What you gain**: safer storage, easier sharing, and less clutter on your local drives.  
- **How you do it**: RcloneView configures **Gofile** via API token, then lets you **Drag & Drop**, **Compare**, or **Sync**—with **scheduling** for hands-off upkeep. 

## FAQs

**Q. Do I need a Gofile premium account to use rclone/RcloneView?**  
**A.** Yes—rclone’s Gofile backend requires a **premium** Gofile account and an **Account API token** from **My Profile**. 

**Q. Can I generate public share links for my uploads?**  
**A.** Yes. RcloneView nsupports `link` to create public links (file or folder; folders can download as ZIP; expiry supported on some backends).


**Ready to put your media library online—your way?**  

<CloudSupportGrid />


