---
slug: fix-cloud-oauth-token-expired-refresh-rcloneview
title: "Fix Expired OAuth Tokens for Cloud Storage — Reconnect with RcloneView"
authors:
  - tayson
description: "Learn how to diagnose and fix expired OAuth token errors in RcloneView for Google Drive, Dropbox, OneDrive, and other OAuth-based cloud providers."
keywords:
  - expired OAuth token cloud storage
  - fix rclone OAuth token expired
  - Google Drive token expired RcloneView
  - Dropbox authorization token error
  - OneDrive token refresh rclone
  - cloud storage authentication error
  - rclone reconnect cloud provider
  - fix cloud login expired RcloneView
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Expired OAuth Tokens for Cloud Storage — Reconnect with RcloneView

> OAuth tokens for Google Drive, Dropbox, OneDrive, and other providers expire periodically. Here's how to recognize the error in RcloneView and re-authenticate without losing your remote configuration.

OAuth-based cloud providers — Google Drive, Dropbox, Microsoft OneDrive, Box, pCloud, Yandex Disk, and others — grant access through tokens rather than passwords. These tokens have expiration policies: some refresh automatically for as long as the app remains active, while others expire after 90–180 days of inactivity or when the provider's security system detects unusual access patterns. When a token expires, RcloneView's sync jobs start failing with authentication errors that look alarming but are easy to fix.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Recognizing Expired Token Errors

Expired OAuth token errors appear in RcloneView's **Log tab** with messages like:

- Google Drive: `oauth2: cannot fetch token: 401 Unauthorized` or `Token has been expired or revoked`
- Dropbox: `invalid_grant` or `Token is expired`
- OneDrive: `AADSTS70008: The refresh token has expired`
- Box: `401 Unauthorized: The access token provided has expired`

The Transferring tab shows jobs failing immediately at 0% with no files transferred. The remote may also show as unreachable in the Explorer panel — browsing the remote returns an error instead of the folder listing.

<img src="/support/images/en/blog/new-remote.png" alt="Viewing remote configuration in RcloneView to fix token errors" class="img-large img-center" />

## Re-Authenticating Through Remote Manager

To refresh an expired OAuth token, go to **Remote tab → Remote Manager**, select the affected remote, and click **Edit**. In the remote configuration screen, locate the OAuth token section and click the re-authentication button (or clear the existing token). RcloneView opens the provider's OAuth authorization page in your browser.

Log in with your cloud account credentials, re-grant access to RcloneView (via rclone), and the new token is saved automatically. Close the browser tab and return to RcloneView — the remote should now connect successfully. Test it by browsing the remote in the Explorer panel.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring reconnected cloud remote transfer in RcloneView" class="img-large img-center" />

## Providers with Stricter Token Policies

**Google Drive** refresh tokens remain valid indefinitely if the app is authorized by the account owner and the rclone app has not been revoked in Google's security settings. If you revoked access in Google Account → Third-party apps, you'll need to re-authorize from scratch.

**Microsoft OneDrive** tokens expire after 90 days of inactivity. If you haven't synced in three months, expect to re-authenticate. OneDrive for Business tokens may also expire sooner due to organizational policies set by the Azure AD administrator.

**Box** and **Dropbox** tokens are generally long-lived but expire if you change your account password, enable two-factor authentication for the first time, or if the provider detects a security event.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing failed jobs due to token expiry in RcloneView job history" class="img-large img-center" />

## Preventing Future Disruptions

Schedule at least one small sync job for each OAuth remote to run weekly, even if it transfers nothing. Active token usage prevents inactivity-triggered expiration for providers like OneDrive. Check the Job History tab regularly so that job failures are caught promptly rather than going unnoticed for days.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Check the Log tab for OAuth expiry error messages after a sync job failure.
3. Open Remote Manager, select the affected remote, and click Edit to re-authenticate.
4. Test the connection in the Explorer panel before re-running failed jobs.

OAuth token renewal takes under two minutes in RcloneView — once re-authenticated, all previously configured sync jobs resume working without any other changes.

---

**Related Guides:**

- [Fix Google Drive Quota and Rate Limit Errors with RcloneView](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Troubleshoot Rclone Errors with RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Notification Alerts for Sync Completion with RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)

<CloudSupportGrid />
