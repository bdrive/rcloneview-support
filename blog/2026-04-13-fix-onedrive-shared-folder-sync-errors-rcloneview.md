---
slug: fix-onedrive-shared-folder-sync-errors-rcloneview
title: "Fix OneDrive Shared Folder Sync Errors — Resolve with RcloneView"
authors:
  - tayson
description: "Troubleshoot OneDrive shared folder sync failures in RcloneView. Fix permission errors, missing shared drives, and access issues when syncing shared OneDrive content."
keywords:
  - OneDrive shared folder sync error
  - OneDrive sync fix
  - OneDrive shared drive RcloneView
  - fix OneDrive permissions
  - OneDrive shared folder access
  - Microsoft OneDrive troubleshooting
  - OneDrive sync problem
  - RcloneView OneDrive error
  - OneDrive for Business sync
  - cloud sync troubleshooting
tags:
  - onedrive
  - troubleshooting
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix OneDrive Shared Folder Sync Errors — Resolve with RcloneView

> Diagnose and fix OneDrive shared folder sync failures in RcloneView — from permission errors and missing shortcuts to organizational OneDrive for Business access issues.

OneDrive's shared folder system has nuances that trip up many sync tools. Folders shared with you by colleagues don't behave the same as your own OneDrive storage — they appear differently in the API and require specific configuration to access with rclone. When RcloneView can't see or sync a shared folder, the root cause is almost always one of a few well-understood issues. This guide covers the most common shared folder sync failures and how to resolve them.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Shared Folders Are Not Visible in RcloneView

OneDrive presents shared folders differently from your own storage. Folders shared from another user's OneDrive appear under the "Shared" section in the web interface, but they are not automatically part of your root folder in the API unless you have added them as a Shortcut to your OneDrive.

**Fix:** In the OneDrive web interface, find the shared folder you need to sync and click "Add shortcut to My files." This creates a shortcut in your own OneDrive root that is accessible via the standard API — and therefore visible and syncable in RcloneView. After adding the shortcut, refresh the RcloneView File Explorer by pressing F5 or clicking Reload.

<img src="/support/images/en/blog/new-remote.png" alt="OneDrive shared folder access configuration in RcloneView" class="img-large img-center" />

## Permission Errors When Syncing Shared Folders

A 403 Forbidden or "access denied" error when syncing a shared OneDrive folder typically indicates one of three situations:

1. **Read-only sharing:** The folder owner shared it with view-only permissions. You cannot write to it or delete from it. If you are trying to sync in a direction that requires write access, confirm with the folder owner that you have Edit permissions.

2. **Guest access limitations:** External (guest) accounts on OneDrive for Business have restricted API access. Some sync operations are blocked by the organization's sharing policy.

3. **Conditional Access policies:** Corporate Microsoft 365 tenants may enforce Conditional Access policies that restrict API access from non-compliant devices or applications. Contact your IT administrator if you receive recurring authentication failures even after successfully logging in.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Diagnosing OneDrive shared folder permission errors in RcloneView" class="img-large img-center" />

## OneDrive for Business Shared Library Issues

SharePoint-backed libraries (including SharePoint document libraries exposed as OneDrive folders) require a separate remote setup in RcloneView. Rather than using the personal OneDrive remote, add a SharePoint remote pointing to the site's URL, or use OneDrive for Business with the appropriate SharePoint site configuration.

For teams that frequently encounter path length errors on OneDrive for Business, rclone's `--onedrive-no-versions` flag can reduce API overhead for sync operations. Add custom flags via Settings > Embedded Rclone > Global Rclone Flags in RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing OneDrive sync job history and error logs in RcloneView" class="img-large img-center" />

## Re-authenticating a Stale Token

OneDrive OAuth tokens can expire or become invalidated — particularly after a password change, multi-factor authentication update, or account security event. A stale token manifests as repeated 401 Unauthorized errors during sync.

To re-authenticate, open the Remote Manager in RcloneView's Remote tab, select your OneDrive remote, and edit it. The edit workflow prompts you to re-run the OAuth flow, opening a browser window for fresh authentication. After completing the new login, save the updated remote and retry the sync job.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. For shared folders, add them as "Shortcuts to My files" in the OneDrive web interface first.
3. Confirm you have the correct permissions (Edit, not just View) for the folders you need to sync.
4. Re-authenticate your OneDrive remote if you encounter repeated 401 errors.

Most OneDrive shared folder issues come down to Microsoft's API-level distinctions between owned, shared, and shortcut folders — understanding this makes troubleshooting much more direct.

---

**Related Guides:**

- [Manage OneDrive Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Fix OneDrive Sync Errors: Delta Token and Path Length with RcloneView](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)
- [Fix OAuth Token Expired Cloud Sync Errors with RcloneView](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
