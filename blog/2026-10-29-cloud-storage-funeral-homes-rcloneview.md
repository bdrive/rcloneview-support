---
slug: cloud-storage-funeral-homes-rcloneview
title: "Cloud Storage for Funeral Homes — Protect Family Records with RcloneView"
authors:
  - alex
description: "Funeral homes can back up service records, contracts, photos and memorial videos across clouds with RcloneView: scheduled sync, encryption, and Folder Compare."
keywords:
  - cloud storage for funeral homes
  - funeral home file backup
  - funeral home document storage
  - memorial video backup
  - encrypted cloud backup
  - small business cloud backup
  - rcloneview funeral home
  - multi-cloud backup
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

# Cloud Storage for Funeral Homes — Protect Family Records with RcloneView

> Keep arrangement contracts, tribute photos, and memorial videos safely backed up in more than one place.

A funeral home holds records families expect to exist for decades: signed contracts, obituaries, preneed paperwork, photo slideshows, and recorded services that can reach several gigabytes. These often sit on one office PC or a single cloud account. RcloneView gives a small staff a visual way to copy that data to a second and third location without scripting.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why One Copy Is Not Enough

Consider a home with 15 years of case folders on a shared drive plus a Dropbox account for family-submitted photos. A failed disk, an accidental deletion, or a compromised login affects every case at once. A sound pattern is a primary copy, an offsite cloud copy, and an independent second cloud or local drive.

RcloneView connects 90+ providers, including Google Drive, OneDrive, Dropbox, Backblaze B2, Wasabi, and local or external disks. Pairing a business drive with an object storage bucket keeps the backup in a different account and provider from the original.

<img src="/support/images/en/blog/new-remote.png" alt="Adding cloud and local remotes for funeral home backups in RcloneView" class="img-large img-center" />

## Build a Repeatable Backup Job

Create a **Sync** or **Copy** job from the 4-step wizard: source is the case-records folder, destination is the backup remote. Use Copy if you never want a deletion at the source to propagate. Run a **Dry Run** first to see what will be copied or removed.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying case folders to a backup cloud in RcloneView" class="img-large img-center" />

With a PLUS license, the final wizard step adds crontab-style scheduling, so a nightly job can run after the office closes. Job History records each run's status, size, and file count, which is useful evidence that backups happen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly backup job in RcloneView" class="img-large img-center" />

## Protect Sensitive Records

Family and financial details deserve encryption. Create a **Crypt** virtual remote on top of the backup destination and RcloneView encrypts file names, folder names, and contents before they leave the machine. Keep the crypt password somewhere separate from the office computer; without it the data cannot be decrypted.

Use **Folder Compare** periodically to confirm the backup matches the source. Left-only files show anything that has not yet been copied, and different-size files flag partial uploads.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying a funeral home backup" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your primary storage and a backup destination with **New Remote**.
3. Wrap the destination in a Crypt remote for sensitive case files.
4. Create a Copy job, Dry Run it, then schedule it (PLUS) or run it after each service.

Records that outlive their creators deserve a backup plan that outlives any single account.

---

**Related Guides:**

- [Cloud Storage for Law Firms — Secure Client Files with RcloneView](https://rcloneview.com/support/blog/cloud-storage-law-firms-rcloneview)
- [Cloud Storage for Tax Preparers](https://rcloneview.com/support/blog/cloud-storage-tax-preparers-rcloneview)
- [Encrypt Cloud Backups with a Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
