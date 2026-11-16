---
slug: cloud-storage-performing-arts-theaters-rcloneview
title: "Cloud Storage for Performing Arts Theaters — Protect Scripts, Cues, and Rehearsal Footage with RcloneView"
authors:
  - tayson
description: "Learn how theater companies use RcloneView to sync scripts, lighting and sound cue files, and rehearsal video across clouds and NAS with scheduled backups."
keywords:
  - cloud storage for theaters
  - theater production file backup
  - performing arts cloud storage
  - backup lighting and sound cue files
  - rehearsal video cloud backup
  - stage design file sync
  - theater archive NAS to cloud
  - RcloneView for theater companies
  - multi-cloud backup for arts organizations
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

# Cloud Storage for Performing Arts Theaters — Protect Scripts, Cues, and Rehearsal Footage with RcloneView

> Opening night depends on files: the right script revision, the final sound cues, and the lighting plot the designer signed off on.

A regional theater company juggles a surprising amount of data. Directors share script revisions in Google Drive, the sound designer delivers cue stacks over Dropbox, rehearsal video piles up on a Synology NAS in the booth, and the archive of past seasons sits on aging external drives. RcloneView brings all of these into one window so the production team can sync, compare, and back up every show folder without juggling separate apps.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Connect Every Storage Location the Production Uses

Each department tends to pick its own tool, so the first step is getting everything visible. In RcloneView, add Google Drive and Dropbox with a browser login, connect the booth NAS through Synology auto-detection, and add an object storage bucket such as Backblaze B2 or Wasabi for the long-term archive. Shared folders that outside designers send through Google Drive can be added as a Google Drive Shared with Me remote.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive, Dropbox, and Backblaze B2 remotes for a theater production in RcloneView" class="img-large img-center" />

With up to four explorer panels open side by side, a stage manager can drag the latest prompt book from Drive into the NAS show folder, or pull a designer's renderings from Dropbox into the archive bucket. Dragging between different remotes copies files, so the original stays where the designer left it.

## Keep Cue Files and Scripts Consistent Before Tech Week

The classic tech-week mistake is running the show from an outdated cue file. RcloneView's Folder Compare puts the sound designer's delivery folder next to the booth copy and highlights files that exist on one side only or differ in size. Copy the changed cue files across in one click, and they are marked as equal in the comparison view.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing sound cue folders between Dropbox and the booth NAS in RcloneView" class="img-large img-center" />

For the full show folder, a Sync job with Dry Run first shows exactly what will be copied or deleted, which matters when a director has quietly reorganized the script folder.

## Back Up Rehearsal Video to Two Destinations at Once

Rehearsal and archival recordings are large and irreplaceable. RcloneView's 1:N synchronization mirrors one source folder to several destinations in a single job, so the NAS video folder can go to both a B2 bucket and a second cloud. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing rehearsal video from a Synology NAS to two cloud destinations with RcloneView" class="img-large img-center" />

Actor contracts and payroll exports deserve extra care. Wrap a cloud folder in a Crypt remote so file names and contents are encrypted before they leave the office.

## Automate Nightly Backups Through the Run

With a PLUS license, the job wizard's crontab-style scheduler runs backups after each evening's performance, for example at 1:00 AM, and Simulate schedule previews the next run times. Job History records every run with status, size, and file count, giving the production manager a clear record if a question comes up mid-run.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly theater backup job in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add the remotes your departments already use: Google Drive, Dropbox, your NAS, and an archive bucket.
3. Use Folder Compare to confirm the booth copy of cue files matches the designer's latest delivery.
4. Create a 1:N Sync job for rehearsal video and schedule it nightly with PLUS.

When the files are protected, the crew can stay focused on the show.

---

**Related Guides:**

- [Best Cloud Storage Workflow for Video Production Teams — Sync Dailies, Proxies, and Finals with RcloneView](https://rcloneview.com/support/blog/cloud-storage-video-production-teams-rcloneview)
- [Cloud Storage for Music Production — Manage Sessions, Stems, and Backups with RcloneView](https://rcloneview.com/support/blog/cloud-storage-music-production-rcloneview)
- [1:N Synchronization — Sync One Source to Multiple Destinations in RcloneView](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
