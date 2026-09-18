---
slug: fix-email-smtp-notifications-not-sending-rcloneview
title: "Fix Email SMTP Notifications Not Sending — Troubleshooting Guide for RcloneView"
authors:
  - morgan
description: "Fix RcloneView email SMTP notifications that fail to send. Resolve port blocking, authentication errors, and threshold misconfiguration for job alerts."
keywords:
  - fix RcloneView email notifications
  - SMTP notification not sending
  - RcloneView email alert error
  - SMTP authentication failed
  - sync job notification troubleshooting
  - port 587 blocked SMTP
  - backup alert not received
  - RcloneView PLUS notifications
tags:
  - RcloneView
  - troubleshooting
  - automation
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Email SMTP Notifications Not Sending — Troubleshooting Guide for RcloneView

> When RcloneView's email notifications stop arriving, the cause is almost always SMTP configuration, port blocking, or a transfer threshold set too high — here's how to diagnose and fix each one.

Email alerts are only useful if they actually arrive. When a scheduled backup silently fails and the notification never reaches your inbox, you lose the entire point of unattended monitoring. RcloneView's SMTP notification system depends on a handful of settings that are easy to get wrong, and this guide walks through the most common failure points so your job alerts start working reliably again.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Authentication and Host Errors

The most frequent cause of silent notification failures is incorrect SMTP authentication. If your email provider requires an app-specific password (common with Gmail and Microsoft 365 accounts that have two-factor authentication enabled), entering your regular account password will fail the connection even though the field accepts it without an obvious error. Generate an app password from your provider's security settings and use that instead.

Double-check the **SMTP Host** field as well — a typo like `smtp.gmial.com` or using your provider's IMAP host instead of the SMTP host will cause the connection to fail. After correcting credentials, always use the **Test** button before relying on the configuration for real jobs; it isolates authentication problems from job-level configuration problems.

<img src="/support/images/en/blog/new-remote.png" alt="Testing SMTP authentication settings in RcloneView notification configuration" class="img-large img-center" />

## Port Blocking and Network Issues

RcloneView recommends **port 587** with STARTTLS for SMTP delivery. If you're running RcloneView on a network with restrictive outbound firewall rules — common on corporate networks, some VPS providers, and certain residential ISPs — port 587 (and especially port 25) may be blocked entirely, causing the test email to time out rather than fail with a clear error.

If the test consistently times out rather than returning an authentication error, the issue is almost certainly network-level, not credential-level. Try switching to port 465 (SSL) if your provider supports it, or verify with your network administrator that outbound SMTP traffic is permitted. If you're connecting to an external rclone instance on a remote server or Docker container, confirm that server's outbound rules allow SMTP traffic as well, since the connection originates from wherever rclone is actually running.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Reviewing job notification settings after an SMTP connection failure" class="img-large img-center" />

## Threshold and Recipient Misconfiguration

If SMTP connects and tests successfully but notifications for actual jobs never arrive, check the job-level notification threshold. RcloneView lets you set a minimum transfer size (in MB or GB) before a notification is sent — this is useful for reducing alert fatigue on jobs that run frequently with little or no data movement, but it also means a job that transfers only a few files may fall below the threshold and produce no email at all. Lower or remove the threshold temporarily to confirm this isn't the cause.

Also verify that recipient addresses are entered correctly at the job level, not just in the global SMTP settings — RcloneView requires notification recipients to be configured per job, so a globally working SMTP connection with no recipients assigned to a specific job will never send an alert for that job. Unlike mount-only tools, RcloneView also syncs and compares folders — on the FREE license — so notifications are one part of a much broader monitoring picture available even without PLUS.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history and notification recipients for a completed sync job" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html) if you haven't already, and open Notification Settings.
2. Re-enter SMTP credentials using an app-specific password if your provider requires one, then click **Test**.
3. If the test times out, switch from port 587 to port 465 or check firewall rules blocking outbound SMTP.
4. Review each job's notification threshold and recipient list to confirm they're configured as expected.

With SMTP credentials, network access, and job-level settings all verified, email notifications become a dependable safety net for every scheduled sync running in the background.

---

**Related Guides:**

- [Email SMTP Job Notifications — Stay Informed of Sync Status in RcloneView](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)
- [Notification Alerts for Sync Completion with RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Fix Scheduled Sync Not Running with RcloneView](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
