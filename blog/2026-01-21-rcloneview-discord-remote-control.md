---
slug: rcloneview-discord-remote-control
title: "RcloneView Discord Remote Control: Manage Cloud Jobs from Discord"
authors:
  - steve
description: "Get job alerts and run RcloneView commands from Discord by using your own secure bot, Application ID, and Discord User ID."
keywords:
  - rcloneview discord
  - rclone discord bot
  - rclone remote control
  - rcloneview notifications
  - discord chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import RvCta from '../src/components/RvCta';

# RcloneView Discord Remote Control: Manage Cloud Jobs from Discord

> Turn RcloneView into a Discord chatops console: get job alerts, list jobs, and start or stop them from Discord without opening your PC.

With Discord Remote Control, RcloneView sends job start, complete, and error alerts to you and accepts simple commands to run or stop jobs. It is perfect for long backups, overnight syncs, or remote servers where you still want fast control via Discord on desktop or mobile.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What you can do from Discord

- **Real-time Notifications**: Get alerted immediately when a job starts, completes, or encounters an error.
- **List Jobs**: View all your registered RcloneView jobs in a clean list.
- **Remote Job Control**: Start jobs by name or by index (#N), or stop them instantly.
- **On-demand Status**: Check progress, transfer speed, and estimated time remaining anytime.

*Note: RcloneView must be running on your PC or server to process Discord commands.*

## Prerequisites

- RcloneView installed and running (Desktop or Headless).
- A Discord account.
- A Discord server where you can install a bot (Guild Install).
- Internet connectivity.

---

## Step 1: Create your Discord Application and Bot

For maximum security, RcloneView uses a “bring your own bot” approach. Your data goes straight between RcloneView and Discord—no third-party relay.

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and click **New Application**. Name it (e.g., `RcloneView`).
2. Open **Installation**, choose **Guild Install** as the Installation Context (turn off User Install if enabled), and save.
3. Go to the **Bot** tab, click **Add Bot**, then copy or reset to get your **Discord Bot Token**. Keep it secret.
4. If you plan to send plain text commands (not only slash commands), enable **MESSAGE CONTENT INTENT** in the Bot tab so RcloneView can read command text.

---

## Step 2: Create a Server and Install the Bot

To use the bot, you need a Discord server (also called a "Guild") where the bot can live. If you don't have a private server for your RcloneView logs, follow the steps below.

### Step 2-1 Create a New Discord Server

1. Open your **Discord app** (Desktop or Web).
2. Click the **plus (+) icon** (Add a Server) at the bottom of your server list on the left.
3. Select **Create My Own**.
4. Choose **For me and my friends**.
5. Give your server a name (e.g., `RcloneView Control Center`) and click **Create**.
   

### Step 2-2 Install the Bot to Your Server

1. Go back to the **Discord Developer Portal**.
2. Open **OAuth2 > URL Generator**.
3. Select scopes: **bot** and **applications.commands**.
4. In **Bot Permissions**, select **Send Messages**, **Use Slash Commands**, and **Attach Files** (if you want to receive log files).
5. Copy the generated URL at the bottom and paste it into your browser.
6. Select the server you just created (e.g., `RcloneView Control Center`) and click **Authorize**.

---

## Step 3: Collect the Values RcloneView Needs

- **Discord Bot Token**: From the **Bot** tab (Step 1-3).
- **Discord Application ID**: From **General Information** in the Developer Portal.
- **My Discord User ID (Snowflake)**: A long numeric ID that uniquely identifies you.

### How to get your Discord User ID

1. In Discord (Desktop or Web), open **User Settings** (⚙️).
2. Go to **Advanced** and toggle **Developer Mode** on.
3. Right-click your **profile picture** or **username** (bottom left or in a member list) and choose **Copy User ID**. Save the number (example: `123456789012345678`).

Why is this ID needed?

- **Security**: Only commands from your account are processed by the app.
- **Direct Notifications**: The bot knows exactly which user to DM when a job starts or fails.

---

## Step 4: Enable Discord Control in RcloneView

1. Open RcloneView and go to **Settings -> Interfaces & Notifications**.
2. Turn on the **Discord Remote Control** switch.
3. Enter your **Discord Bot Token**, **Discord Application ID**, and **My Discord User ID** in the fields.
4. Click **Send Test Message** to verify that you receive a DM from the bot.

---

## ⌨️ Command Guide (ChatOps)

Send commands to the bot (DM is recommended for privacy; channels also work if the bot has access):

- `/help` — Show all available commands.
- `/joblist` — List all registered jobs for the current connection.
- `/start <jobName>` — Start a job by its exact name.
- `/start #<number>` — Start a job using its index from `/joblist` (e.g., `/start #1`).
- `/stop <JobId>` — Stop a running job using its Job ID.
- `/jobstatus <JobId>` — Check real-time progress and statistics for a specific job.

---

## Security and Management Tips

- **User Identification**: Only the configured Discord User ID is authorized to execute commands.
- **Token Safety**: Treat your Bot Token and Application ID like passwords. Reset them if exposed.
- **Online Status**: If RcloneView is not running, the Discord bot will not respond to commands.

## Related Resources

- [RcloneView Basic Guide](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
- [Job Scheduling and Automation](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
- [Real-time Transfer Monitoring](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## Wrap-up

Discord turns RcloneView into a mobile command center: you stay notified, you can start or stop jobs instantly, and you respond faster to failures. Set it up once, keep the tokens safe, and manage your cloud automation with confidence even when you are away from your desk.

<CloudSupportGrid />
