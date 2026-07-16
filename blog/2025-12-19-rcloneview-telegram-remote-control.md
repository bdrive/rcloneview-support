---
slug: rcloneview-telegram-remote-control
title: "RcloneView Telegram Remote Control: Manage Cloud Jobs from Your Phone"
authors:
  - tayson
description: "Get instant job alerts and start, stop, or check RcloneView jobs directly from Telegram with a secure bot and a few simple commands."
keywords:
  - rcloneview telegram
  - rclone telegram bot
  - rclone remote control
  - rcloneview notifications
  - mobile job control
  - rclone chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
  - rclone cli telegram
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---


import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# RcloneView Telegram Remote Control: Manage Cloud Jobs from Your Phone

> Turn RcloneView into a chatops console: get job alerts, list jobs, and start or stop them from Telegram, even when you are away from your PC.

With Telegram Remote Control, RcloneView sends job start, complete, and error alerts to your phone and accepts simple chat commands to run or stop jobs. It is perfect for long backups, overnight syncs, or headless servers where you still want quick control.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## What you can do from Telegram

- Receive notifications: job started, job completed, job error.
- List available jobs.
- Start jobs by name or by index.
- Stop running jobs.
- Check job progress and status on demand.

RcloneView must be running (desktop or headless) to process Telegram commands.

## Prerequisites

- RcloneView installed and running.
- Telegram account.
- Internet connectivity.
- Permission to create a Telegram bot (via BotFather).

## Create your Telegram bot (BotFather)

1. Open Telegram and search for **BotFather**, then open the chat.  
   <img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

2. Create the bot: set a **Bot Name** and a **Bot Username** ending with `bot`.  
   Example: `RcloneView_test_bot` / `rcloneview_test_bot`.  
   <img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

3. Copy the **Bot Token** shown by BotFather. Keep it secret-RcloneView needs it for setup.  
   <img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

## Start your bot (important)

You must start the bot once so Telegram can return your chat updates.

1. Search your bot by name or username and open the chat.  
   <img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

2. Tap **Start** (or send `/start`), then send one more message (for example, `hi`).  
   <img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

## Find your Telegram Chat ID

1. In a browser, open:  
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

2. In the JSON response, note the number in `chat.id` (example: `987654321`). That is your Chat ID.  
   <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

:::caution Keep tokens private
Treat the Bot Token and Chat ID like passwords. Only the configured Chat ID is allowed to control jobs.
:::

## Enable Telegram Remote Control in RcloneView

1. Open **Settings -> Interfaces & Notifications**.
2. Turn on **Telegram Remote Control**.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

3. Enter your **Bot Token** and **Chat ID**.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

4. Click **Send Test Message**. You should receive: `RcloneView Telegram Test Message`.  
   <img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

## Command guide (chatops for jobs)

Use these in the bot chat:

- `/help` - Show all commands.  
  <img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

- `/listjobs` - List jobs for the current connection.  
  <img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

- `/start <jobName>` - Start a job by its exact name.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

- `/start #<n>` (recommended) - Start by list index from the latest `/listjobs`.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

- `/stop <jobId>` - Stop a running job.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

- `/status <jobId>` - Check progress and transferred size.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

## Why it matters for automation

- Overnight or long transfers: get alerted and restart or stop without VPNing into the box.
- Scheduled backups: confirm success or failure immediately and rerun from your phone.
- Multi-cloud jobs: keep a unified control tower even when you are not at the console.
- Faster incident response: stop runaway jobs, reschedule, or switch to another preset quickly.

## Security tips

- Only the configured Chat ID can run commands.
- Rotate your Bot Token if it is ever exposed.
- Disable Telegram Remote Control in settings if you do not need remote commands temporarily.

## Related resources

- [How to use Telegram Remote Control (tutorial)](https://rcloneview.com/support/tutorials/telegram-remote-control)
- [Create and manage jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Execute and manage jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Job scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Real-time transfer monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Use the built-in Terminal](https://rcloneview.com/support/tutorials/rcloneview-terminal-rclone-cli-inside-gui) <!-- replace with actual link if different -->

## Wrap-up

Telegram turns RcloneView into a mobile command center: you stay notified, you can start or stop jobs instantly, and you respond faster to failures. Set it up once, keep the token safe, and run your cloud automations with confidence even when you are away from your desk.

<CloudSupportGrid />
