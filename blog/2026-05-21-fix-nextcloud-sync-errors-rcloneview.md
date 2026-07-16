---
slug: fix-nextcloud-sync-errors-rcloneview
title: "Fix Nextcloud Sync Errors — Resolve WebDAV and Authentication Issues with RcloneView"
authors:
  - morgan
description: "Troubleshoot Nextcloud sync errors in RcloneView — fix WebDAV authentication failures, 423 file lock conflicts, SSL errors, and slow transfer timeouts."
keywords:
  - fix Nextcloud sync errors
  - Nextcloud WebDAV authentication error
  - Nextcloud 423 locked fix
  - Nextcloud connection timeout RcloneView
  - Nextcloud SSL certificate error rclone
  - RcloneView Nextcloud troubleshooting
  - Nextcloud backup not working
  - WebDAV sync errors fix
  - rclone Nextcloud 401 error
  - Nextcloud file lock conflict resolution
tags:
  - troubleshooting
  - nextcloud
  - tips
  - webdav
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Nextcloud Sync Errors — Resolve WebDAV and Authentication Issues with RcloneView

> Nextcloud sync failures in RcloneView almost always trace back to one of four root causes — and each has a concrete, reproducible fix.

Nextcloud is the most widely deployed self-hosted cloud platform, but its WebDAV interface introduces a distinct class of sync problems. When RcloneView syncs to or from a Nextcloud server, errors show up as 401 authentication failures, 423 file lock responses, SSL certificate rejections, or transfers that stall mid-run. Each error code tells you exactly where to look — and the fix is usually a single configuration change in RcloneView or on the Nextcloud server itself.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Authentication Failures (401 Unauthorized)

A 401 error in the RcloneView **Log tab** means Nextcloud rejected the credentials in your WebDAV remote. The most common cause is using your regular account password instead of a Nextcloud app password. When two-factor authentication is enabled on your Nextcloud account, the standard password will never work for API access — you must generate an app-specific password.

Log into your Nextcloud web interface, go to **Settings > Security > App Passwords**, create a new app password with a recognizable label like "RcloneView", and copy it immediately. Then in RcloneView, open **Remote tab > Remote Manager**, select your Nextcloud remote, click **Edit**, replace the password with the new app password, and save. Re-run the failed sync job and watch the Log tab — the 401 should not reappear.

If you are not using two-factor authentication and still seeing 401 errors, verify that the WebDAV URL format is correct. Nextcloud's standard WebDAV path is `https://your-server.com/remote.php/dav/files/your-username/` — a missing trailing slash or incorrect username in the path produces authentication-looking errors even with valid credentials.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Nextcloud WebDAV credentials in RcloneView Remote Manager" class="img-large img-center" />

## File Lock Conflicts (423 Locked)

Nextcloud uses server-side file locking to prevent concurrent modifications, and RcloneView can hit 423 Locked responses when syncing files that are held open by an active Nextcloud desktop client or a web browser session. This is most common during business hours when team members are actively editing files while a scheduled backup job is also running.

The most reliable fix is timing: schedule RcloneView sync jobs for off-peak hours — overnight or during predictable low-activity windows — using the PLUS license scheduler. In the job's **Advanced Settings**, reduce the number of simultaneous file transfers. Fewer parallel transfers means fewer concurrent lock requests, and transient locks clear faster when RcloneView is not hammering the server from every direction at once.

RcloneView retries failed operations up to your configured retry count (default: 3). After a job completes, check **Job History** to see whether any files show an Errored status. If the error count is small, a manual re-run of the sync job will resolve remaining lock conflicts once the affected files are closed.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Nextcloud sync job history and error details in RcloneView" class="img-large img-center" />

## SSL Certificate Errors

Self-hosted Nextcloud installations frequently use self-signed SSL certificates, which rclone rejects by default. The failure appears in the Log tab as a certificate verification error. To bypass this, open **Settings tab > Embedded Rclone** and add `--no-check-certificate` to the **Global Rclone Flags** field. This applies globally to all remotes, so if some remotes use valid certificates you care about verifying, consider instead adding the self-signed certificate to your operating system's trusted certificate store.

For Nextcloud servers behind a reverse proxy, confirm that the proxy is forwarding the correct headers. A misconfigured proxy can cause redirect loops that surface as SSL or connection errors even when the certificate itself is valid.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active Nextcloud sync progress in RcloneView Transferring tab" class="img-large img-center" />

## Slow Transfers and Mid-Job Timeouts

Nextcloud's WebDAV layer is slower than S3-compatible backends for directories with many small files. If a sync job times out or stalls on large folders, start with a **Dry Run** to count the total files involved. For directories with tens of thousands of small files, reduce the number of simultaneous transfers in **Advanced Settings** and increase the **retry count** to give the server more recovery time between batches.

Apply file size and age filters in Step 3 of the sync wizard to split large jobs into smaller batches: sync files modified in the last 30 days first, then run older files separately. This keeps each run within a manageable scope and reduces the chance of a single timeout aborting an hours-long transfer.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Nextcloud sync job after adjusting transfer settings in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. After any failed Nextcloud sync, open the **Log tab** and note the HTTP error code before changing anything.
3. For 401 errors: regenerate an app password in Nextcloud Settings and update your remote's credentials.
4. For 423 errors: reschedule the job to off-peak hours and reduce parallel transfers in Advanced Settings.

Reading the error code first turns Nextcloud troubleshooting from guesswork into a predictable, five-minute fix.

---

**Related Guides:**

- [Manage Nextcloud — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Sync Nextcloud to Google Drive with RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-google-drive-rcloneview)
- [Fix WebDAV Connection and Authentication Errors with RcloneView](https://rcloneview.com/support/blog/fix-webdav-connection-authentication-errors-rcloneview)

<CloudSupportGrid />
