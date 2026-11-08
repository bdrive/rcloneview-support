---
slug: migrate-zoho-workdrive-to-wasabi-rcloneview
title: "Migrate Zoho WorkDrive to Wasabi — Transfer Files with RcloneView"
authors:
  - morgan
description: "Migrate Zoho WorkDrive to Wasabi object storage with RcloneView: connect both remotes, dry run, copy cloud to cloud, and verify with Folder Compare."
keywords:
  - migrate Zoho WorkDrive to Wasabi
  - Zoho WorkDrive to Wasabi
  - Zoho WorkDrive export
  - Wasabi object storage migration
  - Zoho WorkDrive backup
  - cloud to cloud transfer
  - rclone GUI migration
  - RcloneView Wasabi
tags:
  - RcloneView
  - zoho
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Zoho WorkDrive to Wasabi — Transfer Files with RcloneView

> Archive a Zoho WorkDrive team folder into Wasabi buckets without staging anything on your own disk.

Teams move out of Zoho WorkDrive when a project closes, a department switches tools, or finance wants a cheaper long-term archive. Wasabi is an S3-compatible target that suits that archive role, but moving thousands of files by hand is slow. RcloneView connects both services in one window and copies cloud to cloud, with a dry run beforehand and a comparison afterwards. Connect S3-compatible storage such as Wasabi with full read/write on the FREE license.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Zoho WorkDrive and Wasabi

Open the Remote tab and choose New Remote. Zoho WorkDrive needs a region selection during setup, so pick the data center that matches your Zoho account. Wasabi is added as an S3-compatible remote: enter the Access Key, Secret Key, and the endpoint for your bucket's region.

When both appear in Remote Manager, open them in two Explorer panels. Browse the team folders on the left and the bucket on the right before you move anything.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Zoho WorkDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## Plan the Copy and Run a Dry Run

Decide what belongs in the archive. In Step 3 of the job wizard you can set a max file age, a max file size, or a folder depth limit, and add custom rules such as excluding `.git/` folders. Choose a Copy job rather than a mirroring sync so nothing at the destination is removed.

Then run Dry Run. It lists every file that would be copied or deleted without changing either side, which is the cheapest moment to catch a wrong folder or filter.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud transfer from Zoho WorkDrive to Wasabi" class="img-large img-center" />

## Run the Transfer and Monitor It

Start the job and follow it in the Transferring tab, which shows progress, speed, and file counts. In Step 2 you can raise the number of file transfers for a large archive; keep the equality checkers modest if the Zoho side responds slowly. "Retry entire sync if fails" defaults to 3, which covers transient network errors.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Zoho WorkDrive to Wasabi transfer" class="img-large img-center" />

## Verify With Folder Compare and Job History

When the job finishes, open Compare with Zoho WorkDrive on one side and the Wasabi bucket on the other. The left-only, right-only, and different-file filters show what is still missing, and the copy action transfers any leftovers. Job History records the status, size, and file count of each run, which doubles as a migration record.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Zoho WorkDrive and Wasabi after migration" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add Zoho WorkDrive (with its region) and Wasabi as remotes.
3. Create a Copy job with filters and run a Dry Run.
4. Run the job, then confirm with Folder Compare before retiring the source.

Keep the Zoho data in place until Compare shows both sides match.

---

**Related Guides:**

- [Manage Zoho WorkDrive Storage with RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Migrate Zoho WorkDrive to Backblaze B2 with RcloneView](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-backblaze-b2-rcloneview)
- [Manage Wasabi Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
