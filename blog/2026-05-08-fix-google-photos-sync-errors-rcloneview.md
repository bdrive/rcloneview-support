---
slug: fix-google-photos-sync-errors-rcloneview
title: "Fix Google Photos Sync Errors — Empty Library, 403 Forbidden, and Read-Only Issues in RcloneView"
authors:
  - steve
description: "Troubleshoot common Google Photos errors in RcloneView — a remote that looks empty or reports no changes, 403 Forbidden from a retired client ID or rate limits, read-only destination errors, and missing files after upload."
keywords:
  - Google Photos sync errors RcloneView
  - Google Photos empty folder rclone
  - Google Photos 403 client ID
  - fix Google Photos backup issues
  - Google Photos rclone errors
  - Google Photos API quota error
  - RcloneView Google Photos troubleshoot
  - Google Photos upload problems
  - Google Photos backup fix
tags:
  - RcloneView
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Google Photos Sync Errors — Empty Library, 403 Forbidden, and Read-Only Issues in RcloneView

> Google Photos has API constraints that no other cloud drive has. Most "errors" people hit in RcloneView are Google's rules at work — here is what each one means and what to do.

Google Photos is popular for personal photo storage, but its rclone backend behaves very differently from a standard cloud drive. Since March 31, 2025 the Google Photos API shows a third-party app only the media that app uploaded itself; existing media cannot be modified or deleted through the API; and rate limits are stricter than Google Drive's. Understanding these constraints is the first step to resolving errors when working with Google Photos in RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## The Remote Looks Empty — "No Changes Detected" or 0 Files Copied

By far the most common report: you add a Google Photos remote, open it in the Explorer, and find almost nothing there — or a Copy job to your NAS finishes in seconds with zero files transferred. Nothing is broken. On March 31, 2025 Google removed the API scopes that let third-party apps read a user's whole library. In Google's words, apps "can now only list, search, and retrieve albums and media items that were created by your app." RcloneView therefore sees only the photos that were uploaded through RcloneView or rclone; phone and web uploads are invisible, and shared albums return `403 PERMISSION_DENIED`.

RcloneView 1.6 and later explains this restriction inside the app when you open a Google Photos remote, so it no longer looks like an empty account.

What to do: use **Google Takeout** to export your existing library — ideally delivered to Google Drive — and let RcloneView copy the export to your external drive, NAS, or another cloud. The full walkthrough is in [How to Back Up Google Photos to an External Drive or NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview).

## Error: "403 Forbidden" — Retired Client ID or Rate Limit

A `403` from Google Photos has two different causes. Check RcloneView's **Log tab** to tell them apart.

**403 while connecting or listing — the shared client ID.** rclone's built-in Google Photos client ID is being retired during 2026, and Google now requires each user to connect with their own OAuth client ID. If the remote fails to connect or every request is refused, this is the cause. RcloneView 1.6 and later walks you through creating your own client ID in the connection wizard when a connection cannot be made; rclone's [Google Photos documentation](https://rclone.org/googlephotos/#making-your-own-client-id) describes the same steps in the Google Cloud Console.

**403 with `userRateLimitExceeded` during uploads — the write quota.** Google imposes per-user daily limits on photo uploads through the API, and bulk-uploading thousands of photos can hit them mid-transfer. Reduce transfer concurrency — go to your job's Advanced Settings and set the number of file transfers to 2 or 3 — and enable **Retry on failure** (5 retries or more) so RcloneView re-attempts throttled uploads instead of failing the whole job. Spread very large uploads across several days if necessary.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos upload rate in RcloneView" class="img-large img-center" />

## Error: "Can't Copy — Destination is Read Only"

If you see errors about a read-only destination, you are trying to sync bidirectionally or overwrite photos that already exist in Google Photos. The Google Photos API does not permit modifying or deleting existing media through rclone, and RcloneView respects this limitation.

The solution is to configure the job as a one-way **Copy** (not Sync) from your source into Google Photos. This uploads new files without attempting to delete or overwrite anything on the Google Photos side. If you need to delete photos, do it in the Google Photos web app or mobile app.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring a Copy job to Google Photos in RcloneView" class="img-large img-center" />

## Missing Files After Upload

Google Photos organizes media by album and creation date, not by your original folder structure. When you copy a folder hierarchy into Google Photos, the files land in the library but do not keep the folders you expected — the API does not preserve folder structure. Note also that photos downloaded back through the API are not at original resolution and lose EXIF location data.

To keep your folder organization, copy to Google Drive instead, where subdirectories are preserved exactly as on your source. For a true photo archive, Backblaze B2 or Amazon S3 with a copy of your original folder tree is the more reliable long-term choice.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Google Photos job" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. If the remote looks empty, that is Google's API restriction — export your existing library with Google Takeout and copy the export with RcloneView.
3. For 403 on connect, create your own OAuth client ID; for `userRateLimitExceeded`, reduce concurrency to 2–3 and increase the retry count.
4. Use the **Copy** job type, not Sync, when uploading into Google Photos.

Knowing which of Google's rules you have hit lets you configure RcloneView correctly the first time and avoid frustrating retry cycles.

---

**Related Guides:**

- [How to Back Up Google Photos to an External Drive or NAS — Google Takeout + RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Fix Google Drive Quota and Rate Limit Errors](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Add Remote via Browse-based Log-in (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
