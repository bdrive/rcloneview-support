---
slug: email-smtp-job-notifications-rcloneview
title: "Email SMTP Job Notifications — Stay Informed of Sync Status in RcloneView"
authors:
  - tayson
description: "Set up email SMTP notifications in RcloneView PLUS to receive sync job completion alerts, configure multiple recipients, and monitor unattended backup jobs by email."
keywords:
  - RcloneView email notifications
  - SMTP sync notification
  - cloud sync email alert
  - job notification SMTP
  - backup monitoring email
  - RcloneView PLUS notifications
  - sync completion alert
  - rclone email notification
tags:
  - feature
  - automation
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Email SMTP Job Notifications — Stay Informed of Sync Status in RcloneView

> RcloneView PLUS lets you configure direct SMTP email notifications for sync job completion, so your team always knows when a backup finishes — or fails — without checking manually.

Running cloud sync and backup jobs on a schedule is only half of the automation equation. The other half is knowing the outcome without having to open the application and check Job History manually. RcloneView PLUS supports email notifications via direct SMTP configuration, delivering sync status messages straight to your inbox the moment a job completes. This makes unattended backup monitoring practical for individuals and teams alike.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuring SMTP in RcloneView

To set up email notifications, open RcloneView's notification settings (available with a PLUS license). Enter your SMTP server details:

- **SMTP Host**: Your email provider's outgoing mail server (for example, `smtp.gmail.com` for Gmail or your organization's Exchange/SMTP server).
- **Port**: Typically port **587** for STARTTLS (recommended) or port 465 for SSL. Avoid port 25 in most consumer and cloud environments, as it is commonly blocked.
- **Authentication**: Enter your email username and password or app-specific password. For Gmail, use an App Password if 2FA is enabled on your account.
- **From Address**: The sender address that will appear on notification emails.

After entering the details, use the **Test** button to send a test email and confirm the SMTP connection works before relying on it for production notifications.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring SMTP email notification settings in RcloneView PLUS" class="img-large img-center" />

## Adding Recipients and Job-Level Settings

Once SMTP is configured globally, you can add notification recipients at the job level. Open a sync job's settings and enter one or more email addresses to notify when that job completes. Different jobs can notify different people — for example, a backup job for finance documents can notify the finance team, while a media sync job notifies the content team.

RcloneView also lets you set thresholds for notifications — for example, only send an email when a job transfers more than a configurable number of megabytes. This is useful for jobs that run frequently and often complete with no changes: you only receive a notification when something meaningful actually happened, reducing alert fatigue.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting email notification recipients on a sync job in RcloneView" class="img-large img-center" />

## Use Cases for Email Notifications

**Unattended backup monitoring** is the primary use case. If you schedule a nightly backup of your local files to Backblaze B2, configure an email notification to your personal address. If the job fails — due to a network outage, a credential issue, or a full disk — you receive a failure email in the morning rather than discovering the problem weeks later during a recovery attempt.

**Team awareness** is equally valuable. When a shared cloud sync job completes — for example, a weekly sync of a shared project folder to Amazon S3 — notifying the entire team confirms the sync is current without requiring anyone to log into RcloneView. You can configure different jobs to notify different recipients, so the right people are informed based on their area of responsibility.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and notification log in RcloneView PLUS" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html) and activate a PLUS license.
2. Open **Notification Settings** and enter your SMTP host, port 587, and authentication credentials.
3. Click **Test** to send a test email and verify the connection.
4. Open each sync job's settings and add the email addresses to notify.
5. Optionally set a transfer size threshold so notifications only fire when significant data is moved.

Email SMTP notifications in RcloneView PLUS close the loop on automated backup monitoring — giving you peace of mind that your cloud sync jobs are running successfully, or alerting you immediately when they are not.

---

**Related Guides:**

- [Notification Alerts for Sync Completion with RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [RcloneView Telegram Remote Control](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)

<CloudSupportGrid />
