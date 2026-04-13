---
slug: fix-google-shared-drive-permission-errors-rcloneview
title: "Fix Google Shared Drive Permission Errors — Resolve Access Issues with RcloneView"
authors:
  - tayson
description: "Resolve Google Shared Drive permission errors in RcloneView. Fix files not visible, insufficient access, and Shared Drive configuration settings for Team Drives."
keywords:
  - Google Shared Drive permission error RcloneView
  - Team Drive access fix rclone
  - Google Drive permission denied RcloneView
  - Shared Drive files not visible rclone
  - fix Google Drive Team Drive error
  - RcloneView Google Workspace Drive
  - rclone shared with me drive
  - Google Drive access troubleshooting
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Google Shared Drive Permission Errors — Resolve Access Issues with RcloneView

> Google Shared Drives require specific remote configuration in RcloneView — files not appearing or access denied errors almost always stem from incorrect drive root settings.

Google Workspace users frequently encounter a frustrating situation: they connect Google Drive in RcloneView, but Shared Drive content (also called Team Drives) doesn't appear, or operations fail with permission errors. Unlike personal My Drive, Shared Drives have their own root and access rules. Getting RcloneView configured correctly for Shared Drives requires understanding a few specific settings.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Shared Drives Behave Differently

Google Drive distinguishes between:

- **My Drive**: your personal storage space, owned by your account
- **Shared Drives** (Team Drives): collaborative storage spaces owned by the organization, not by individuals
- **Shared with me**: files from others' drives shared directly with you

By default, a Google Drive remote in rclone accesses My Drive. Shared Drive content lives at a different root and requires either a dedicated remote pointing to the specific Shared Drive, or using the `--drive-shared-with-me` flag for files shared directly with your account.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a Google Shared Drive remote in RcloneView" class="img-large img-center" />

## Accessing a Shared Drive in RcloneView

To access a specific Shared Drive, create a dedicated remote for it in RcloneView. Go to **Remote Manager**, click **New Remote**, and select **Google Drive**. Complete the OAuth authorization. After the remote is created, edit its advanced settings and specify the **Team Drive ID**.

To find the Team Drive ID: open Google Drive in your browser, navigate to the Shared Drive, and copy the ID from the URL (`https://drive.google.com/drive/u/0/folders/{DRIVE_ID}`). Enter this ID in the remote's **Team Drive** field in RcloneView. The remote will then show only that Shared Drive's content.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing a Google Shared Drive in RcloneView after correct configuration" class="img-large img-center" />

## Accessing Files Shared with You

For files that others have shared directly with your Google account (appearing in "Shared with me"), create a Google Drive remote and enable the **Shared with me** option in the advanced remote settings. This uses the `--drive-shared-with-me` behavior and makes those shared files visible in the explorer.

Note that "Shared with me" files are owned by other users — write operations may be restricted depending on the sharing permissions set by the file owner.

## Common Permission Error Scenarios

**Error: `googleapi: Error 403: The user does not have sufficient permissions`**
This usually means the authenticated account lacks the required access level on the Shared Drive. Check in Google Drive settings whether you have Viewer, Commenter, or Editor access. Write operations require Editor or higher. Your Google Workspace admin may need to adjust your membership level.

**Error: Files not visible at all**
The remote is pointing to My Drive instead of the Shared Drive. Follow the Team Drive ID steps above to redirect the remote.

**Error: `File not found` for known files**
The file may be in Shared with me or in a Shared Drive that requires a different remote configuration. Verify where the file actually lives in the Google Drive web interface.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking Google Drive permission errors in RcloneView logs" class="img-large img-center" />

## Checking with Google Admin

For Google Workspace environments, Google Workspace admins can restrict which external applications can access Drive via OAuth. If RcloneView's OAuth app is blocked by your organization's admin console, the remote will authenticate successfully but fail with permission errors during file operations. Ask your Google Workspace admin to allow third-party app access or add RcloneView's OAuth client ID to the allowlist.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. In **Remote Manager**, create a Google Drive remote and authorize via OAuth.
3. Edit the remote's advanced settings and enter your Shared Drive's Team Drive ID.
4. If accessing "Shared with me" files, enable the corresponding option in the remote's advanced settings.

Proper Team Drive ID configuration resolves the vast majority of Google Shared Drive visibility and permission errors in RcloneView.

---

**Related Guides:**

- [Fix Google Drive 403 Rate Limit Errors](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors)
- [Fix Google Drive Quota and Rate Limit API Errors](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Troubleshoot rclone Errors with RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
