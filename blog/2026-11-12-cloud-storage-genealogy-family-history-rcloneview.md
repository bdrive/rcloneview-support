---
slug: cloud-storage-genealogy-family-history-rcloneview
title: "Cloud Storage for Genealogy Researchers — Preserve Family History Archives with RcloneView"
authors:
  - tayson
description: "Protect scanned records, family tree files, and oral history recordings with RcloneView: multi-cloud backup, encryption, and verification for genealogy archives."
keywords:
  - cloud storage for genealogy
  - family history backup
  - genealogy archive backup
  - back up family tree files
  - scanned family documents cloud
  - oral history recording backup
  - genealogy society file storage
  - preserve family photos multiple clouds
  - encrypted DNA data backup
  - RcloneView genealogy
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Cloud Storage for Genealogy Researchers — Preserve Family History Archives with RcloneView

> Decades of research can sit on one laptop drive. RcloneView copies it to several clouds and checks that every copy matches.

Genealogy archives grow in odd shapes. A family historian might hold 40,000 TIFF scans of parish registers, a few GEDCOM exports of the family tree, hours of WAV interviews with elderly relatives, and raw DNA data files. Volunteer genealogy societies keep the same mix on shared drives and spare USB disks. RcloneView gives both groups one desktop app for copying that archive to the cloud storage they already use and keeping the copies current.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Put Every Archive Location in One Window

Most researchers spread material across services: a Google Drive folder shared with cousins, a Dropbox link from a distant archive, and an external drive of master scans. In RcloneView you add each one as a remote. Google Drive, Dropbox, OneDrive, and pCloud connect through a browser login. Backblaze B2 needs an Application Key ID and key. A Synology NAS can be detected on the local network.

Open up to four Explorer panels side by side and drag a folder of scans from the external drive to a cloud remote. Dragging between different remotes copies, so the originals stay where they are.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud storage remote in RcloneView for a genealogy archive" class="img-large img-center" />

## Keep More Than One Copy of Irreplaceable Scans

A rescanned census page is an inconvenience. A lost recording of a grandparent's voice is gone for good. Use 1:N synchronization to send one source folder to several destinations in one job, for example a master scans folder to both pCloud and a Backblaze B2 bucket. Connect S3, Azure, or Backblaze B2 with full read/write on the FREE license.

Before the first run, use Dry Run to list what will be copied and deleted. One-way sync changes only the destination, so the master folder on your drive is never touched.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying family history scans between cloud remotes in RcloneView" class="img-large img-center" />

## Protect DNA Data and Living Relatives' Records

Raw DNA files and records about living people need more care than a 19th-century marriage register. Wrap a cloud folder in a **Crypt** remote and RcloneView encrypts file names, folder names, and contents before upload. The provider stores only encrypted data, and you browse it decrypted in RcloneView as usual. Keep the Crypt password somewhere safe: without it, the files cannot be decrypted.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView showing differences between archive copies" class="img-large img-center" />

## Verify Copies and Automate Updates

Use Folder Compare to check the local master against each cloud copy. Filters show files that exist on only one side or differ in size, and Copy right or Copy left fixes a gap in one click. With a PLUS license, a crontab-style schedule can run the sync every Sunday night, and Job History records each run's status, size, and file count.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a weekly family archive backup job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your external drive or NAS and two cloud remotes, such as pCloud and Backblaze B2.
3. Create a sync job from your master archive folder with both clouds as destinations, then run a Dry Run.
4. Add a Crypt remote for DNA files and records of living people, and check the copies with Folder Compare.

With two verified copies off-site, your research outlives any single drive.

---

**Related Guides:**

- [Cloud Storage for Museums and Archives](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [One-to-Many Sync to Multiple Destinations](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)
- [Encrypt Cloud Backups with a Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
