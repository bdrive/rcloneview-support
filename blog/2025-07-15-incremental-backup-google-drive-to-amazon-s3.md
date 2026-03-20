---
slug: backup-google-drive-to-amazon-s3
title: Backup Google Drive to Amazon S3 with RcloneView
authors:
  - jay
description: Copy Google Drive folders to Amazon S3 with RcloneView’s point-and-click tools—connect once, run a backup, and keep extra copies for peace of mind.
keywords:
  - rcloneview
  - google drive
  - amazon s3
  - cloud backup
  - cloud sync
  - rclone gui
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - cloud-backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Backup Google Drive to Amazon S3 with RcloneView

> Keep teamwork humming in Google Drive and store a safety copy in Amazon S3. With RcloneView you click through the whole backup—no scripts, no command line.

## What makes this combo useful?

- **Google Drive** is where your docs, sheets, and shared folders live day-to-day.  
- **Amazon S3** keeps copies for years with versioning, lifecycle policies, and low-cost archive tiers.  
- **RcloneView** links them with a dual-pane explorer, compare previews, and scheduled jobs so you always know what’s moving.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Before you start

1. **Pick the folders that matter** – review project spaces, Shared drives, and any handoff folders. Skip cache or temp folders you do not need.  
2. **Create or choose an S3 bucket** – decide on region, bucket name, and default encryption (SSE-S3 or SSE-KMS). [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)  
3. **Check provider limits** – Google caps Drive API transfers at **750 GB per user per day** and files up to **5 TB**. Plan large moves across a couple of days. [Google for Developers](https://developers.google.com/drive/api/guides/limits) [Google Help](https://support.google.com/drive/answer/37603)  
4. **Map your folder structure** – S3 prefixes like `drive-backup/marketing/2025/` keep snapshots easy to browse later.  
5. **See it once in the app** – skim the explorer screenshots in [Browse & manage remote storage](/support/howto/rcloneview-basic/browse-and-manage-remote-storage) so the layout feels familiar.

## Step 1 — Connect both services in RcloneView

1. Open **RcloneView** → press **`+ New Remote`**.  
2. Choose **Google Drive**, sign in, and give the remote a clear name such as `Drive-Main`. If you back up Shared drives, enable them during setup.  
3. Add another remote for **Amazon S3**. Paste your access key/secret (or assume an IAM role), choose the target bucket, and name it `S3-Backup`.  
4. Confirm both remotes appear side by side in the explorer. The [Remote Manager guide](/support/howto/rcloneview-basic/remote-manager) has extra screenshots if you need a refresher.

<img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />

## Step 2 — Plan the backup job

- **Dry run a folder**: Open `Drive-Main` on the left and `S3-Backup` on the right. Drag a small test folder across to see the transfer dialog.  
- **Use Compare**: The Compare tool highlights new and changed files before you copy. It’s the same view shown in [Compare folder contents](/support/howto/rcloneview-basic/compare-folder-contents).  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare view in RcloneView before copying Google Drive files" class="img-medium img-center" />

## Step 3 — Run the first backup

1. In the toolbar choose **Copy** (one-time) or **Sync (copy direction)** if you want the destination to mirror Drive without deleting data on Drive.  
2. Add filtering rules if you want to skip folders like `/Personal/`.  
3. Run a **Dry Run** first. You’ll see a clean summary of pending transfers.  
4. Click **Start**. Watch progress in the Job Monitor—bytes transferred, file counts, and any warnings all land here.

## Step 4 — Schedule follow-up copies

Once the first run looks good:

1. Save it as a **Job** straight from the completion dialog.  
2. Open **Job Manager** → set a daily or weekly schedule. This follows the same pattern as the [Job scheduling guide](/support/howto/rcloneview-advanced/job-scheduling-and-execution).  
3. Check the calendar preview to confirm times, then let RcloneView take it from here.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Scheduling a backup job in RcloneView" class="img-medium img-center" />

## Keep the S3 copy tidy

- **Lifecycle policies**: Move backups older than 90 days into Glacier Instant Retrieval or Deep Archive to reduce cost. [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)  
- **Bucket versioning**: Turn it on if you want every overwrite preserved. Each RcloneView run then becomes a restore point.  
- **Tags**: Add tags like `Team=Finance` or `Compliance=SOC2` to objects so billing and audits stay simple.

Our blog on [RcloneView cloud-to-cloud transfers](/support/blog/Effortless-Cloud-to-Cloud-Transfers-&-Syncing) covers more ideas for filtering and organizing cloud copies.

## Monitor and restore with confidence

- **Job History**: Every run logs bytes, duration, and error messages. Export a log right from the UI when auditors ask.  
- **Cloud dashboards**: Use S3 Storage Lens or CloudWatch to watch bucket growth. [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens.html)  
- **Restore steps**: Pick the needed snapshot in S3, then copy back into Drive or to another bucket using the same RcloneView job template.  

## Related guides & resources

- [Google OAuth quick setup in RcloneView](/support/howto/remote-storage-connection-settings/add-oath-online-login)  
- [Amazon S3 remote setup](/support/howto/remote-storage-connection-settings/s3) — step-by-step credential screenshots.  
- [Real-time transfer monitoring](/support/howto/rcloneview-basic/real-time-transfer-monitoring) — see how to read job progress charts.

## FAQs

**Do Google Docs, Sheets, and Slides come across?**  
Yes. RcloneView exports them in the formats you choose (DOCX, XLSX, etc.) when the backup runs.

**What if I hit the 750 GB daily limit?**  
RcloneView pauses with a clear message. Wait 24 hours or switch to another Google service account, then restart the job—it resumes where it left off.

**Can I use Wasabi or Cloudflare R2 instead of AWS S3?**  
Absolutely. Set up an S3-compatible remote in RcloneView and point it to the provider’s endpoint.

**Ready to keep your Google Drive files safe and searchable for the long haul?**

<CloudSupportGrid />
