---
slug: sync-copy-move-difference-explained-rcloneview
title: "Sync vs Copy vs Move — Which Cloud Transfer Operation Should You Use?"
authors:
  - tayson
description: "Confused about when to use Sync, Copy, or Move for cloud transfers? This guide explains the differences and when each is the right choice in RcloneView."
keywords:
  - rclone sync vs copy
  - cloud sync vs copy difference
  - when to use sync or copy
  - rclone move command
  - cloud transfer operations
  - sync copy move explained
  - rclone operations guide
  - cloud file operations
  - which cloud sync type
  - safe cloud transfer method
tags:
  - RcloneView
  - sync
  - copy
  - move
  - guide
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Sync vs Copy vs Move — Which Cloud Transfer Operation Should You Use?

> You want to transfer files between clouds. RcloneView offers Sync, Copy, and Move. They sound similar, but choosing the wrong one can delete files you didn't intend to lose. Here's how each works and when to use it.

This is one of the most important decisions in cloud file management. Each operation has different behavior around what happens to files that exist at the destination but not at the source. Understanding this prevents accidental data loss.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## The Three Operations

### Copy

**What it does**: Copies files from source to destination. If a file already exists at the destination and is identical, it's skipped. If it exists but is different, it's overwritten.

**What it doesn't do**: Delete anything from the destination. Ever.

```
Source:      A, B, C
Destination: B, D
After Copy:  B, D, A, C  (D is untouched, A and C are added)
```

### Sync

**What it does**: Makes the destination identical to the source. Copies new and changed files. **Deletes files from the destination that don't exist in the source.**

```
Source:      A, B, C
Destination: B, D
After Sync:  A, B, C  (D is deleted! A and C are added)
```

### Move

**What it does**: Like Copy, but **deletes files from the source** after they're successfully transferred.

```
Source:      A, B, C
Destination: B, D
After Move:
  Source: (empty)
  Destination: B, D, A, C
```

## Quick Reference

| Behavior | Copy | Sync | Move |
|----------|:----:|:----:|:----:|
| Adds new files to destination | ✅ | ✅ | ✅ |
| Updates changed files | ✅ | ✅ | ✅ |
| Deletes from destination | ❌ | ✅ | ❌ |
| Deletes from source | ❌ | ❌ | ✅ |
| Safe for backups | ✅ | ⚠️ | ❌ |
| Creates exact mirror | ❌ | ✅ | ❌ |

## When to Use Each

### Use Copy when:

- **Backing up** — You want a safety net. Copy never deletes from the destination, so even if you delete a file from the source, the backup retains it.
- **Initial migration** — Moving data to a new cloud for the first time.
- **Adding files** — You want to add new content without affecting existing files.
- **You're unsure** — Copy is the safest default. It can't lose data at the destination.

**Examples:**
- Daily backup: Google Drive → Backblaze B2.
- Initial migration: OneDrive → Google Drive.
- Client delivery: Copy finished files to client's Dropbox.

### Use Sync when:

- **Mirroring** — The destination should be an exact copy of the source at all times.
- **Active working folders** — You want the destination to reflect all changes, including deletions.
- **Storage cleanup** — Files removed from the source should also be removed from the mirror.

**Examples:**
- Keep a NAS mirror on S3 (exact replica).
- Mirror a project folder between two team members.
- Keep a staging server in sync with a production asset folder.

**Warning**: Sync deletes files. Always run a **dry run** first to preview what will be deleted.

### Use Move when:

- **Archiving** — Move old files to cheap storage and remove them from the expensive source.
- **Processing pipeline** — Files arrive in an inbox, get processed, then moved to an archive.
- **Freeing space** — Move files off a full drive to cloud storage, removing the local copies.

**Examples:**
- Move files older than 90 days from Google Drive to S3 Glacier.
- Move processed uploads from a staging bucket to an archive bucket.
- Move photos from a full phone backup to cloud archive.

## The Dry Run Safety Net

Before running any operation (especially Sync), use **dry run** to preview exactly what will happen:

- Which files will be copied.
- Which files will be deleted (Sync only).
- Which files will be moved (Move only).

This preview costs nothing and prevents surprises.

## Folder Comparison First

Before any transfer, use Folder Comparison to understand the current state:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before transferring" class="img-large img-center" />

This shows:
- Files that exist in both locations (and whether they match).
- Files unique to the source.
- Files unique to the destination.

## Common Mistakes

### Using Sync for backups

```
Day 1: Sync Google Drive → S3  (all files backed up)
Day 2: Accidentally delete a folder from Google Drive
Day 3: Sync Google Drive → S3  (folder deleted from S3 too!)
```

Use **Copy** for backups to prevent this.

### Using Copy when you want a mirror

```
Day 1: Copy Source → Dest  (files transferred)
Day 2: Delete old files from Source
Day 3: Copy Source → Dest  (old files still on Dest, taking up space)
```

If you want the destination to stay clean, use **Sync**.

### Using Move when you want both copies

Move deletes the source. If you need files in both locations, use **Copy**.

## Decision Flowchart

1. **Do you need files in both locations?**
   - Yes → Copy or Sync.
   - No (remove from source) → Move.

2. **Should the destination match the source exactly?**
   - Yes (including deletions) → Sync.
   - No (just add new files) → Copy.

3. **Is this a backup?**
   - Yes → Almost always Copy.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Compare folders** to understand current state.
3. **Choose the right operation** based on your goal.
4. **Dry run first** to preview changes.
5. **Execute** with confidence.

The right operation for the right job. Don't guess — understand.

---

**Related Guides:**

- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rclone Filter Rules](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
