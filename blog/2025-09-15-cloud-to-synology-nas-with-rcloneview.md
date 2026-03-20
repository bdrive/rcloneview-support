---
slug: cloud-to-synology-nas-with-rcloneview
title: "Cloud-to-NAS Bridge: Back Up Google Drive & OneDrive to Synology with RcloneView"
authors:
  - jay
description: Move and synchronize files from cloud drives (e.g., Google Drive, OneDrive) to your Synology NAS using RcloneView’s click-first workflow—drag-and-drop transfers, visual compare, and scheduled syncs with no CLI.
keywords:
  - rcloneview
  - synology nas
  - google drive backup
  - onedrive backup
  - cloud to nas
  - webdav
  - sftp
  - rclone GUI
  - scheduled sync
tags:
  - RcloneView
  - synology
  - google-drive
  - onedrive
  - cloud-file-transfer
  - backup
---



import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Cloud-to-NAS Bridge: Back Up Google Drive & OneDrive to Synology with RcloneView

> Keep a local safety copy and take control of your data. Mirror your **cloud drives** to a **Synology NAS** with a clean, point-and-click workflow—no command line required.

## Cloud to NAS, the smart way—why it matters

Cloud storage is convenient for collaboration and access anywhere. But keeping a **second, on-premises copy** on a Synology NAS gives you versioned backups, LAN-speed restores, and independence from any single provider. With **RcloneView**, you can connect popular cloud services (e.g., **Google Drive**, **OneDrive**, and more supported by rclone) and your NAS, then **preview, copy, and schedule** jobs from one screen.

<!-- truncate -->

**Understanding cloud drives (at a glance)**  
- Great for real-time collaboration and sharing.  
- Provider-side limits/quotas may affect large migrations (plan in batches).  

**Understanding Synology NAS (at a glance)**  
- Your always-on storage hub at home or in the office.  
- Accessible via **SMB/NFS** (mounted as local folders), or network protocols like **WebDAV** and **SFTP**.  
- Ideal for centralized backup, media hosting, and long-term archiving.

**Why bring cloud → NAS?**  
- **Resilience**: keep an offline-capable copy you control.  
- **Speed**: restore large folders over LAN without waiting on internet bandwidth.  
- **Governance**: unify retention, access, and audit locally.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## Step 1 – Preparation

Before you begin:

1. **Choose your scope** — which Google Drive/OneDrive folders should the NAS retain?  
2. **Confirm NAS capacity** — ensure enough free space and target share/folder ready.  
3. **Pick a connection method for your NAS**  

   - **WebDAV**: enable Synology **WebDAV Server**, then connect via WebDAV in RcloneView.  
   - **SMB**: enable Synology **SMB**, then connect via SMB in RcloneView.  
   - **SFTP**: enable SSH/SFTP on Synology and connect via **SFTP**.  
4. **Plan your cadence** — one-time migration, periodic sync, or nightly scheduled jobs.  
5. **Mind provider limits** — large moves may require breaking into batches; consider a test run first.

🔍 Helpful tutorial: 

- [Synology NAS Integration with RcloneView](/support/tutorials/synology-nas-cloud-transfer)

## Step 2 – Wire up the connections in RcloneView

RcloneView wraps rclone’s configuration in a guided, click-through flow.

1. Open **RcloneView** → click **`+ New Remote`**  
2. Add your **cloud drive**  
   - **Google Drive**: OAuth sign-in → name it (e.g., `MyGoogleDrive`)  
   - **OneDrive**: OAuth sign-in → name it (e.g., `MyOneDrive`)  
   - (Others supported by rclone can be added similarly)  
3. Add your **Synology NAS target** using **one** of the following:  
   - **WebDAV**: endpoint from Synology WebDAV Server, credentials → name it (e.g., `MyNAS-WebDAV`)  
   - **SMB**: NAS hostIP, port, account → name it (e.g., `MyNAS-SMB`)  
   - **SFTP**: NAS hostname/IP, port, account → name it (e.g., `MyNAS-SFTP`)  
4. Confirm both appear side-by-side in the Explorer pane.

🔍 Helpful guides:  
- [Synology NAS Integration with RcloneView](/support/tutorials/synology-nas-cloud-transfer)
- [How to Add Google Drive Remote](https://rcloneview.com/support/howto/intro#step-2-adding-remote-storage-google-drive-example)  
- [Quick OAuth Setup (OneDrive/Google)](/support/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)


<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## Step 3 – Run the backup/sync jobs

RcloneView offers three practical methods. Start small, then scale.

### A) Drag & Drop (manual copy)
- Open **Google Drive/OneDrive** on one side and your **NAS** target on the other, then **drag folders/files across**.  
- Great for selective moves and quick wins.  

👉 See more: [Copying Files using Drag and Drop](/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Compare & Copy (preview changes)
- Run **Compare** to see what’s new/changed on the cloud vs. your NAS.  
- Copy only what changed—reduce surprises and time.  

👉 See more: [Compare and Manage Files](/support/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) Sync & Scheduled Jobs (automate)
- Use **Sync** to mirror selected cloud folders into your NAS share.  
- **Dry-run** first, then save as a reusable **Job** and add a schedule (nightly/weekly).  

👉 See more:
- [Synchronize Remote Storages](/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling and Execution](/support/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

## Conclusion — Key takeaways & extra tips

- **Why do this**: a second copy under your control, faster restores over LAN, and unified retention.  
- **How it works**: RcloneView lets you connect cloud drives and your Synology NAS, then **Drag & Drop**, **Compare**, or **Sync**—with **scheduling** for hands-off backups.  
- **Scale safely**: pilot first, respect provider quotas, and monitor job logs for a clean audit trail.

## FAQs

**Q. Can RcloneView run recurring backups automatically?**  
**A.** Yes—save your Sync as a **Job** and schedule it (e.g., nightly). You’ll see history and status in the Job Manager.

**Q. What about iCloud?**  
**A.** Rclone supports many providers. For services without a direct backend, consider exporting data locally first, then use RcloneView to move it to your NAS.


**Ready to keep a local, reliable copy of your cloud life?**  


<!-- Obsidian note: Download 컴포넌트 -->
<CloudSupportGrid />