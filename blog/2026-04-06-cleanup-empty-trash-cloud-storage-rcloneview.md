---
slug: cleanup-empty-trash-cloud-storage-rcloneview
title: "Clean Up Cloud Storage: Empty Trash and Remove Old Versions with RcloneView"
authors:
  - tayson
description: "Free up cloud storage by emptying trash, removing old file versions, and cleaning up orphaned data across Google Drive, OneDrive, S3, and more using RcloneView."
keywords:
  - rclone cleanup cloud storage
  - empty google drive trash rclone
  - onedrive recycle bin cleanup
  - remove old versions s3
  - free cloud storage space
  - rcloneview cleanup feature
  - cloud storage versioning cleanup
  - rclone delete old versions
  - reclaim cloud quota
  - cloud storage trash management
tags:
  - feature
  - cleanup
  - tips
  - cost-optimization
  - file-management
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Clean Up Cloud Storage: Empty Trash and Remove Old Versions with RcloneView

> Deleted files and old versions silently consume your cloud quota. RcloneView makes it easy to clean them out and reclaim storage you are already paying for.

Every time you delete a file on Google Drive, it goes to trash. Every time OneDrive overwrites a document, it keeps the old version. Every time an S3 bucket with versioning enabled receives an update, the previous object stays. These invisible copies accumulate over months and years, consuming quota and inflating storage bills. Rclone's `cleanup` command removes this hidden bloat, and RcloneView lets you run it with a few clicks.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## How Trashed and Versioned Files Waste Quota

Most cloud providers count trashed and versioned files against your storage quota. The impact is often larger than expected:

| Provider | What Counts Against Quota | Auto-Purge Policy |
|----------|--------------------------|-------------------|
| **Google Drive** | Trashed files, all file versions | Trash auto-deletes after 30 days |
| **OneDrive** | Recycle bin items, version history | Recycle bin auto-purges after 93 days |
| **Dropbox** | Deleted files and previous versions | Kept for 30 days (Basic) or 180 days (Professional) |
| **Amazon S3** | All object versions (if versioning enabled) | No auto-purge; lifecycle rules required |
| **Backblaze B2** | All file versions | No auto-purge without lifecycle rules |
| **Google Cloud Storage** | Non-current object versions | Configurable via lifecycle policies |

A Google Drive account at 90% capacity may have 5-10% of its usage sitting in trash alone. On S3 buckets with versioning, old versions can double or triple actual storage consumption over time.

## Running Cleanup Per Provider

### Google Drive Trash

Google Drive's trash is the most common source of hidden usage. To empty it:

```bash
rclone cleanup gdrive:
```

This permanently deletes all files in the Google Drive trash. There is no undo -- make sure you do not need anything in the trash before running this.

In RcloneView, you can trigger cleanup from the UI without opening the terminal. Navigate to your Google Drive remote and use the cleanup action.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView showing Google Drive remote ready for cleanup" class="img-large img-center" />

### OneDrive Recycle Bin

OneDrive keeps deleted files in the recycle bin for up to 93 days:

```bash
rclone cleanup onedrive:
```

This empties the recycle bin. For OneDrive Business accounts with large recycle bins, this can free significant space immediately.

### S3 Versioned Objects

S3 buckets with versioning enabled accumulate old object versions. Rclone's cleanup removes non-current versions:

```bash
rclone cleanup s3-remote:my-bucket
```

For buckets with thousands of versioned objects, this operation may take time. You can target specific prefixes to clean up selectively:

```bash
rclone cleanup s3-remote:my-bucket/logs/
```

### Dropbox and Other Providers

Dropbox does not support the cleanup command directly through rclone. For Dropbox, manage deleted files and versions through the Dropbox web interface or API. Other providers like pCloud and Backblaze B2 support cleanup similarly to the examples above.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer showing storage before cleanup" class="img-large img-center" />

## Checking How Much Space Trash Consumes

Before running cleanup, check how much space you stand to reclaim:

```bash
rclone about gdrive:
```

The output includes a **Trashed** line showing exactly how much space is used by deleted files:

```
Total:   15 GiB
Used:    12.3 GiB
Free:    2.7 GiB
Trashed: 3.8 GiB
```

In this example, emptying the trash would instantly free 3.8 GiB -- more than doubling the available space.

## Removing Old File Versions Selectively

Some workflows require keeping the latest version but removing anything older. Rclone supports this with backend-specific commands:

For S3 with versioning:

```bash
rclone backend cleanup-hidden s3-remote:my-bucket
```

This removes only the hidden (non-current) versions while keeping the current version of every object intact.

For Google Drive, you can use `--drive-keep-revision-forever=false` in your remote configuration to prevent unlimited version retention going forward.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Execute cleanup job in RcloneView" class="img-large img-center" />

## Automating Cleanup with Scheduled Jobs

Manual cleanup works, but scheduled cleanup prevents the problem from recurring:

1. In RcloneView, create a new **Job** with the cleanup command for each remote.
2. Open the **Job Scheduler** and set a recurring schedule -- monthly is sufficient for most accounts.
3. Review the **Job History** after each run to confirm successful cleanup.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cleanup job in RcloneView" class="img-large img-center" />

A monthly cleanup schedule ensures trash and old versions never accumulate enough to cause quota issues or inflated bills.

## Safety Considerations

- **Cleanup is permanent** -- trashed files cannot be recovered after running `rclone cleanup`.
- **Audit trash first** -- browse your provider's trash through their web interface before purging.
- **S3 versioning serves a purpose** -- if you rely on versions for rollback, do not clean up indiscriminately. Consider lifecycle rules that keep the last N versions instead.
- **Test on a non-critical remote first** -- confirm the behavior matches your expectations before running cleanup on production data.
- **Dry run is not available** for cleanup -- unlike sync or copy, there is no `--dry-run` mode. Proceed with confidence only after reviewing what is in your trash.

## The Cost Impact

For pay-per-use providers, cleanup directly reduces your bill:

| Provider | Storage Cost | 100 GB of Old Versions/Trash |
|----------|-------------|------------------------------|
| Amazon S3 Standard | $0.023/GB/mo | $2.30/month saved |
| Backblaze B2 | $0.006/GB/mo | $0.60/month saved |
| Google Cloud Standard | $0.020/GB/mo | $2.00/month saved |
| Wasabi | $0.0069/GB/mo | $0.69/month saved |

For quota-based providers, cleanup avoids hitting limits that break syncs and backups.

---

**Related Guides:**

- [Analyze Cloud Storage Usage and Quotas](https://rcloneview.com/support/blog/rclone-about-storage-usage-analysis-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 Comparison](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Cloud-to-Cloud Transfers and Syncing](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
