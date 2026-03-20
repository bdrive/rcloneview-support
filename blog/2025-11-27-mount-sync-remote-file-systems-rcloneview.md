---
slug: mount-sync-remote-file-systems-rcloneview
title: "Mount, Sync, and Manage Remote File Systems Easily with RcloneView"
authors:
  - tayson
description: "Connect SFTP, SMB, WebDAV, and cloud storage in one GUI. Mount, sync, and automate remote file systems with RcloneView’s two-pane Explorer, Compare, Jobs, and mount manager."
keywords:
  - rcloneview
  - sftp
  - smb
  - webdav
  - mount remote drive
  - cloud file system
  - rclone gui
  - nas backup
  - remote explorer
  - sync automation
tags:
  - RcloneView
  - cloud
  - sync
  - mount
  - nas
  - sftp
  - webdav
  - SMB
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Mount, Sync, and Manage Remote File Systems Easily with RcloneView

> File-system remotes like **SFTP**, **SMB**, and **WebDAV** deserve the same comfort as cloud drives. RcloneView gives you a two-pane Explorer, Compare, Sync, and a mount manager so you can treat remote servers and NAS boxes like local disks-without memorizing rclone flags.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


<!-- Image verified: /images/en/howto/rcloneview-basic/rcloneview-user-interface.png exists -->

## Local FS vs. Remote FS: why it matters

- **Local FS:** instant latency, native permissions, no network hops. Great for editing but not always redundant.
- **Remote FS (SFTP/SMB/WebDAV):** adds network latency and auth, but enables central NAS, off-site servers, and collaboration.
- **Cloud object storage:** cheap and durable, but not POSIX; mounting improves workflows for apps expecting a filesystem.
- **Goal:** unify them in one UI so you can browse, mount, sync, and automate without switching tools.

## Connect SFTP and WebDAV in minutes

RcloneView wraps the rclone backend list (100+ providers) in a simple remote wizard. For most FS-style remotes, you just pick the provider and fill host/credentials.

<!-- Image verified: /images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-large img-center" />

👉 Remote guide: [Remote Manager](https://rcloneview.com/support/howto/rcloneview-basic/remote-manager/)

### SFTP remote

1. Open **Remote -> + New Remote** (or the **+** in Explorer).
2. Choose **SFTP**.
3. Enter `host`, `port`, `user`, and either a password or key file.
4. Save-your SFTP server appears in Remote Manager.

### WebDAV remote

1. Select **WebDAV** in the provider list.
2. Enter the **WebDAV URL**, username, and password/token.
3. Save and test browsing in the two-pane Explorer.

### SMB / NAS share

1. Choose **SMB** (Samba/CIFS).
2. Provide the server address and share name; add domain if required.
3. Save and open it like any other remote.

### Cloud + FS together

You can mix SFTP, SMB, WebDAV, and cloud remotes (Google Drive, Dropbox, Mega, S3) in the same Explorer session and copy between them directly.

## Two-pane Explorer for fast housekeeping

Remote file systems feel local when you can see them side-by-side.

<!-- Image: two-pane explorer -->
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
   
- Open the **server** (SFTP/SMB/WebDAV) on the left and a **cloud/NAS** destination on the right.
- Drag & drop to copy; progress appears in **Transfer**.
- Right-click for `**Copy ->**`/ `**<- Copy**`, **Delete**, or **Mount** actions.
- Use filters to hide cache/temp folders before syncing.

👉 Explorer basics: 
 - [Browse & Manage Remotes](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)  
  - [Drag & Drop files](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

## Mount remote file systems like local drives

Need your SFTP or WebDAV share as a drive letter or Finder mount? Use the built-in mount manager.

<!-- Image verified: /images/en/howto/rcloneview-basic/mount-from-remote-explorer.png -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />
  
- Click **Mount** from the toolbar or remote card.
- Pick mount type (drive letter/path) and set cache/buffer options.
- Monitor status in **Mount Manager**; stop/restart without CLI.
- Great for apps that only understand local paths (NLEs, DAWs, CAD tools).

👉 Mount guide: [Mount Cloud Storage as a Local Drive](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## Compare before syncing

Remote FS copies should be deliberate. Use **Compare** to avoid overwriting newer edits.

<!-- Image: compare before copy -->
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare folders" class="img-large img-center" />

- Highlights **missing**, **different size**, and **matching** files.
- Copy only what changed from NAS -> cloud, or from cloud -> NAS.
- Ideal for staging edits from local SSD to remote SFTP without surprises.

👉 Compare guide: [Compare folder contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

## Solve permission issues quickly

- **SFTP:** ensure correct UID/GID on the server; if writes fail, check directory ownership and `chmod` on the host.
- **SMB:** match domain/workgroup; set “Allow guest/NTLMv2” as required on the server; verify share permissions separate from filesystem ACLs.
- **WebDAV:** some hosts block MOVE/DELETE-use COPY then DELETE; watch for read-only mounts.
- **Local mounts:** if apps can’t write, remount with the proper user or adjust mount options in the mount dialog.
- Use **Logs** tab to see HTTP/SFTP errors (401/403/550) and adjust credentials or paths accordingly.

<!-- Image verified: /images/en/howto/rcloneview-basic/log-tab.png -->
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
   
## Backup and automation examples

### Example 1: NAS -> S3 (nightly)

1. Source: **SMB** share; Destination: **S3** bucket.
2. Click **Sync** and choose **one-way** (NAS -> S3).
3. Enable **checksum** (if supported) and exclude temp/cache folders.
4. **Save to Jobs** (e.g., `nas-to-s3-nightly`).
5. Open **Job Manager -> Add Job**, schedule **02:00 daily**.

<!-- Image: job scheduling -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

👉 Job guides: [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Execute & Manage Jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

### Example 2: SFTP editing share -> Google Drive (work-in-progress)

1. Left pane: **SFTP** project folder; Right pane: **Google Drive** team space.
2. Use **Compare** to sync only new renders.
3. Save as a reusable Job for daily backups at 03:00.
4. Keep a second job for **EXPORT** only, so review links stay current.

### Example 3: WebDAV CMS -> Local SSD (mount + copy)

1. Mount the WebDAV site via **Mount Manager** for app compatibility.
2. Copy site assets to a local SSD folder; run **Compare** weekly to fetch deltas.
3. If deletes are blocked, use copy-only and prune manually after verifying.

## Speed and stability tips for remote FS

- Use **bandwidth limits** during office hours; raise concurrency after-hours.
- Prefer **resume** for large uploads; RcloneView handles retries automatically.
- For long-haul SFTP, enable compression only if CPU headroom exists.
- On SMB, avoid double-mounting the same share on unstable networks-keep one mount alive.
- For WebDAV hosts with rate limits, reduce parallel transfers in the sync dialog.

## Organize NAS and Cloud folders cleanly

- Keep a shared folder template (e.g., `Project/RAW`, `EDIT`, `EXPORT`, `ARCHIVE`) stored on both NAS and cloud; copy it before each project.
- Use **Compare** weekly: NAS vs. cloud archive to ensure cold storage is current.
- Maintain **one-way copy** for archives (avoid delete propagation).
- Store **proxies** on cloud for collaboration; keep **RAW** on NAS/S3 for safety.

## When to mount vs. when to sync

- **Mount** when applications need file handles (NLEs, asset browsers).
- **Sync/Copy** for bulk moves, off-site backups, or when network links are lossy.
- Combine both: mount for daily edits, then run a scheduled sync to archive.

## Logging and recovery

- Use **Job History** to see which files failed and why; rerun to pick up only missing items.
- For permission errors, re-authenticate the remote or adjust server ACLs before retrying.
- Keep **Log tab** open during first runs to spot 401/403/550/429 codes early.
- If a mount stalls, stop/restart from **Mount Manager** instead of rebooting.

## Quick start checklist

1. Add SFTP/SMB/WebDAV remotes in Remote Manager.
2. Open two-pane Explorer and verify listing.
3. Run **Compare** on a small folder; confirm copy directions.
4. Mount if your app needs a drive letter/path.
5. Save Sync/Copy as Jobs; schedule off-hours.
6. Review logs after the first full run; enable checksum where supported.

## Summary

RcloneView turns remote file systems into first-class citizens. Connect SFTP, SMB, WebDAV, NAS, and cloud remotes, mount them like local drives, compare before syncing, and automate backups with Jobs and schedules-all from a GUI built on rclone’s engine. Treat every storage endpoint the same way: visible, verifiable, and automated.

<CloudSupportGrid />
