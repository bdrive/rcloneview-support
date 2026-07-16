---
slug: dry-run-preview-cloud-sync-rcloneview
title: "Dry Run Preview — Test Cloud Sync Before Committing Changes in RcloneView"
authors:
  - tayson
description: "Use RcloneView's dry run mode to preview which files will be copied or deleted before any cloud sync runs — the essential safety check for large or sensitive transfers."
keywords:
  - dry run cloud sync
  - test sync before running
  - RcloneView dry run
  - preview cloud sync changes
  - simulate cloud backup
  - cloud sync safety check
  - rclone dry run GUI
  - avoid accidental file deletion
  - cloud sync simulation
  - verify sync before commit
tags:
  - feature
  - tips
  - troubleshooting
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Dry Run Preview — Test Cloud Sync Before Committing Changes in RcloneView

> Before syncing terabytes of data or deleting files from a destination, use RcloneView's dry run mode to preview every planned change — without moving a single file.

One of the most costly mistakes in cloud sync workflows is discovering that a job deleted important files, overwrote newer versions, or pulled in thousands of files that were never meant to be included — after the fact. RcloneView's built-in dry run feature removes this risk entirely. By simulating a sync operation before execution, you can review exactly which files would be copied and which would be deleted, giving you full confidence in the job configuration before any real transfer begins. This is especially valuable when setting up a new job for the first time or after adjusting filter rules on an existing one.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What a Dry Run Shows You

When you execute a dry run in RcloneView, the job engine runs its full sync logic against your configured source and destination but performs no actual file operations. The result is a detailed preview with two critical categories: **files that would be copied** from source to destination, and **files that would be deleted** from the destination to match the source. You can scroll through the complete operation list and verify each entry before approving anything.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing planned file operations in a dry run simulation in RcloneView" class="img-large img-center" />

This matters most in one-way sync jobs, where the destination is modified to exactly mirror the source. If a file was recently removed from the source folder but you still need it on the destination, the dry run reveals the planned deletion before it happens. A law firm backing up 500,000 case documents to Amazon S3, for example, benefits enormously from verifying each scheduled batch before execution, avoiding any accidental data loss.

## How to Run a Dry Run in RcloneView

Using dry run in RcloneView is straightforward. In the **Job Manager**, create or open a sync job and configure your source, destination, and any filtering options such as file type exclusions, maximum file size, or folder depth limits. When ready to test, select the **Dry Run** option rather than a regular execution. RcloneView performs the simulation and displays the full list of planned operations in the Transferring tab — no data is moved until you intentionally start a real run.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a dry run simulation for a cloud sync job in RcloneView" class="img-large img-center" />

After reviewing the dry run results, you can refine your filter settings and repeat the simulation as many times as needed. Only once the planned operation list matches your expectations exactly should you trigger the actual sync. This iterative approach is particularly useful when working with complex filter rules across large directory structures spanning multiple cloud providers.

## Checking Dry Run Results in Job History

RcloneView logs every dry run in the **Job History** view, clearly marked as a simulation execution alongside real job runs. You can review the simulated file count, total projected size, elapsed time, and any warnings or errors that surfaced — giving you a complete picture of the job's behavior before committing.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dry run simulation recorded in RcloneView job history with status details" class="img-large img-center" />

For teams running recurring scheduled backups, performing a dry run after any configuration change is a non-negotiable safety step. It costs nothing — no data is transferred, no storage is consumed — but it prevents hard-to-reverse mistakes that would otherwise only become visible after a sync completes.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open **Home tab > Sync** and configure a new sync job with your source and destination.
3. Select **Dry Run** mode in the Job Manager to preview all planned file operations.
4. Review the copy and delete lists, adjust filters if needed, then trigger the real sync with confidence.

Dry run is the simplest habit that separates cautious, reversible cloud operations from costly surprises.

---

**Related Guides:**

- [Filter Rules and Selective Sync with RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Checksum-Verified Cloud Migrations with RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
