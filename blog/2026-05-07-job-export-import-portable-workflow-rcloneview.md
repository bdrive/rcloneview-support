---
slug: job-export-import-portable-workflow-rcloneview
title: "Job Export and Import — Portable Sync Workflows in RcloneView"
authors:
  - tayson
description: "Learn how to export and import sync jobs in RcloneView to share workflows across machines, standardize team configurations, and recover after a system migration."
keywords:
  - RcloneView job export
  - sync job import
  - portable sync workflow
  - job manager export
  - team sync configuration
  - backup sync jobs
  - migrate RcloneView jobs
  - job portability
tags:
  - RcloneView
  - feature
  - job-management
  - automation
  - backup
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Job Export and Import — Portable Sync Workflows in RcloneView

> RcloneView lets you export all your sync jobs to a JSON file and import them on any other machine — making your workflows truly portable and your team configurations consistent.

Setting up complex sync jobs takes time: choosing the right source and destination remotes, configuring filters, setting bandwidth limits, and tuning options for each job. The last thing you want is to repeat that work when you upgrade to a new computer, add a second workstation, or bring a new team member on board. RcloneView's job export and import feature solves this by capturing your entire job configuration in a portable JSON file that can be loaded on any RcloneView installation.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Exporting Your Sync Jobs

To export your jobs, open the **Job Manager** in RcloneView and look for the **Export** option in the toolbar or context menu. RcloneView exports all configured sync jobs — including their source/destination paths, filter rules, rclone flags, and scheduling information — into a single JSON file. You choose where to save this file.

It is good practice to export your jobs regularly as part of your broader backup strategy. Store the exported JSON in a cloud folder (for example, your Google Drive or Backblaze B2 backup bucket) so it is always accessible regardless of what happens to your local machine. Think of it as a backup of your backup configuration.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager in RcloneView showing export option" class="img-large img-center" />

## Importing Jobs on a New Machine

On the destination machine, install RcloneView from [rcloneview.com](https://rcloneview.com/src/download.html) and set up the required cloud remotes (the same remote names must exist for the imported jobs to work correctly). Then open the **Job Manager** and use the **Import** function to load your exported JSON file. All your sync jobs appear immediately, ready to run.

This workflow is particularly valuable after a computer migration. Instead of manually recreating a dozen sync jobs, the import takes seconds. The same process works for team standardization: a team lead creates and exports a canonical job configuration, then distributes the JSON file to all team members who import it to their own RcloneView installations.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Imported jobs visible in RcloneView Job Manager" class="img-large img-center" />

## Team Standardization and Disaster Recovery

For teams managing multiple cloud destinations, consistency in sync job configuration is critical. If each team member configures their own jobs manually, discrepancies in filter rules or destination paths can lead to missed files or unintended overwrites. By maintaining a master job export file and importing it to all team machines, you ensure everyone is running identical workflows.

The export/import feature also serves as a lightweight disaster recovery mechanism for your sync configuration. If RcloneView needs to be reinstalled or a machine is replaced, restoring your entire workflow is a two-step process: import the rclone remote configuration and import the job JSON. RcloneView's export/import is available in the free tier — no PLUS license is required for this feature.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Standardized sync jobs shared across team machines in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configure your sync jobs in the **Job Manager** on your primary machine.
3. Use **Export** in the Job Manager to save all jobs to a JSON file.
4. Store the export file in a cloud backup location for safekeeping.
5. On a new machine, install RcloneView, set up matching remote names, and **Import** the JSON to restore all jobs.

Job export and import makes RcloneView a genuinely portable sync platform — one where your workflow investment is never tied to a single machine.

---

**Related Guides:**

- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Backup and Migrate Rclone Config with RcloneView](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [Batch Operations in RcloneView](https://rcloneview.com/support/blog/batch-operations-rcloneview)

<CloudSupportGrid />
