---
slug: hybrid-cloud-file-transfer-nas-public-cloud-rcloneview
title: "Hybrid Cloud File Transfer Between On-Prem NAS and Public Cloud Using RcloneView"
authors:
  - tayson
description: "Mount, sync, and automate transfers between on-prem NAS (SMB/SFTP) and public clouds like S3, Wasabi, Google Drive, and Dropbox using RcloneView’s two-pane Explorer, Compare, Sync, and scheduled Jobs."
keywords:
  - rcloneview
  - hybrid cloud
  - nas backup
  - smb sftp
  - webdav
  - s3 transfer
  - google drive sync
  - wasabi backup
  - mount remote drive
  - rclone gui
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - mount
  - hybrid-cloud
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Hybrid Cloud File Transfer Between On-Prem NAS and Public Cloud Using RcloneView

> Bridge on-prem NAS and public clouds without CLI gymnastics. RcloneView lets you add SMB/SFTP/WebDAV, open clouds side-by-side, Compare changes, mount drives, and schedule nightly syncs?so hybrid storage stays tidy and predictable.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="RcloneView user interface overview" class="img-medium img-center" />

## Why hybrid cloud is hard (and worth it)

- On-prem NAS gives fast LAN access for editors and render nodes, but lacks off-site resilience.  
- Public cloud (S3/Wasabi/Drive/Dropbox) adds durability and global sharing, but bandwidth and costs matter.  
- Teams juggle mixed permissions (ACLs on NAS vs. OAuth/cloud RBAC) and different folder conventions.  
- Copying manually risks overwrites, missing versions, and late-night scrambles.  
- A GUI that unifies both sides cuts cognitive load and lets you automate confidently.

## Local FS vs. remote FS in one pane

- **Local/NAS (SMB/SFTP/WebDAV):** POSIX-like, permission-sensitive, low latency on LAN.  
- **Cloud:** object storage (S3/Wasabi) or drive-style (Google Drive/Dropbox); needs OAuth or keys.  
- RcloneView treats each as a remote you can open, compare, mount, and sync in a single interface.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="Two-pane Explorer layout" class="img-medium img-center" />

## Add your on-prem NAS remote (SMB/SFTP/WebDAV)

1. Click **Remote → + New Remote** or the **+** button in Explorer.  
2. Choose **SMB** (for Windows/NAS share) or **SFTP** (Linux/UNIX servers).  
3. Enter server address, share/path, and credentials (add domain if SMB needs it).  
4. Save and test browsing in the two-pane Explorer.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-medium img-center" />

## Add your public cloud remotes

- **S3/Wasabi/B2/R2:** use access/secret keys; pick region and bucket.  
- **Google Drive/Dropbox:** click **Connect** to finish OAuth; no tokens to paste.  
- **WebDAV endpoints:** paste the URL and auth.  
- Keep both NAS and cloud remotes saved in **Remote Manager** for reuse.

## Mount remote file systems like local drives

Mounts help apps that insist on local paths (NLEs, DAWs, CAD). RcloneView’s mount manager keeps you away from CLI flags.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-medium img-center" />

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="Mount manager status view" class="img-medium img-center" />

- Mount from the remote card or toolbar, choose drive letter/path, and set cache/buffer.  
- Start/stop mounts in **Mount Manager** without rebooting.  
- Ideal for editing directly from SFTP/SMB or exposing S3 as a folder for light tasks.

## Compare before you copy

Hybrid moves can get messy; Compare makes deltas obvious.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison results" class="img-medium img-center" />

- Open NAS on the left, cloud bucket on the right, then hit **Compare**.  
- Highlights **missing**, **size-different**, and **matching** files.  
- Copy only the delta from NAS → cloud (or reverse) to avoid overwriting newer edits.

## Sync and copy flows that fit hybrid cloud

- **One-way copy** for backups/archives; do not delete at destination.  
- **One-way sync with delete** when you intentionally mirror NAS to cloud.  
- **Two-way sync** sparingly (only if both sides actively change).  
- Use **include/exclude filters** to skip cache, proxies, and temp renders.

## Handle permissions without drama

- **SMB:** align domain/workgroup; ensure share ACLs and filesystem ACLs allow writes.  
- **SFTP:** verify UID/GID and folder ownership on the server; adjust `chmod` server-side if needed.  
- **WebDAV:** some hosts block MOVE/DELETE; use copy-only if unsure.  
- If a mount is read-only, remount with proper user or adjust mount options in the dialog.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="Log tab showing transfer details" class="img-medium img-center" />

- Check **Logs** for 401/403/550/permission-denied clues and retry after fixes.

## Performance tips for NAS ↔ cloud

- Schedule large jobs off-hours; cap bandwidth during business hours.  
- For S3/Wasabi, keep concurrency moderate to avoid throttling; enable **checksum** when supported.  
- For SFTP over WAN, reduce parallel transfers if packet loss appears; consider compression only if CPU allows.  
- Avoid double-mounting the same SMB share on shaky networks.

## Automate with Jobs and schedules

- Save any Sync/Copy as a **Job** (e.g., `nas-to-s3-nightly`).  
- Open **Job Manager → Add Job**, pick the saved job, and schedule **02:00 daily**.  
- Stagger multiple jobs (NAS → S3, NAS → Drive, Drive → NAS) to minimize contention.

<!-- Image verified: exists and path corrected with /support -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-medium img-center" />

### Example job set

- **NAS (SMB) → Wasabi (one-way copy)**: weekly archive of RAW/PROJECT.  
- **NAS (SFTP) → Google Drive Shared Drive (one-way sync)**: daily EDIT/EXPORT for collaboration.  
- **S3 → NAS (one-way copy)**: pull cold archive slices for local restore tests monthly.

### Dry-run and verification

- Run **dry-run** on first execution to confirm what will move.  
- After sync, re-open **Compare**; only expected differences should remain.  
- For S3/Wasabi, keep versioning + lifecycle rules to control cost and retain history.

## Organize your hybrid folder strategy

- Standardize a template (e.g., `Project/RAW`, `EDIT`, `EXPORT`, `ARCHIVE`) on both NAS and cloud.  
- Keep proxies on cloud for quick sharing; keep RAW on NAS/S3 for fidelity.  
- Use **Copy** for archives, **Sync** for active workspaces, **Mount** for app compatibility.  
- Document which remote is the “source of truth” per folder to avoid accidental deletes.

## Real-world workflow (step-by-step)

1. **Connect remotes:** add SMB/SFTP for NAS, add S3/Wasabi and Google Drive.  
2. **Open two panes:** NAS left, cloud right; confirm listings.  
3. **Compare small pilot folder:** ensure deltas look right.  
4. **Run one-way copy to cloud:** start with non-destructive backup.  
5. **Save as Job + schedule:** nightly 02:00 for deltas only.  
6. **Mount for apps:** mount NAS or S3 when editors need path-based access.  
7. **Log review:** check retries, throttling messages, or permissions in Logs.  
8. **Periodic restore test:** copy back from cloud to a scratch NAS folder to verify integrity.  
9. **Refine filters:** exclude caches/renders; include only masters and project files for archives.  
10. **Team handoff:** share the folder template and job schedule so everyone follows the same map.

## Troubleshooting quick list

- Seeing 403/550? Re-check credentials, share ACLs, or bucket policies.  
- Slow WAN? Lower concurrency and enable bandwidth limits; schedule overnight.  
- Mount not writing? Remount with correct user or adjust SMB permissions.  
- WebDAV deletes failing? Copy then prune manually; some hosts block MOVE/DELETE.  
- Duplicate copies? Use Compare to prune safely; avoid two-way sync unless required.

## Checklist to go live

- [ ] NAS remote (SMB/SFTP/WebDAV) added and browsable.  
- [ ] Cloud remote (S3/Wasabi/Drive/Dropbox) added and authenticated.  
- [ ] Folder template mirrored on both sides.  
- [ ] Pilot Compare and dry-run completed.  
- [ ] Job saved and scheduled (02:00 suggested).  
- [ ] Checksums enabled where supported; logs monitored.  
- [ ] Restore test performed and documented.

## Summary

RcloneView turns hybrid cloud work into a repeatable workflow: add NAS and cloud remotes, compare before copying, mount when apps demand local paths, and automate backups with Jobs and schedules. With visible logs, retries, and checksum support, you can keep on-prem performance and cloud resilience without touching the CLI.

<CloudSupportGrid />
