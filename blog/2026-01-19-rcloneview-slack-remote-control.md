---
slug: rcloneview-slack-remote-control
title: "RcloneView Slack Remote Control: Manage Cloud Jobs from Your Phone"
authors:
  - steve
description: "Get instant job alerts and start, stop, or check RcloneView jobs directly from Slack with a secure app and simple slash commands."
keywords:
  - rcloneview slack
  - rclone slack bot
  - rclone remote control
  - rcloneview notifications
  - slack chatops
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

# RcloneView Slack Remote Control: Manage Cloud Jobs from Your Phone

> Turn RcloneView into a chatops console: get job alerts, list jobs, and start or stop them from Slack, even when you are away from your PC.

With Slack Remote Control, RcloneView sends job start, complete, and error alerts to your phone and accepts simple slash commands to run or stop jobs. It is perfect for long backups, overnight syncs, or remote servers where you still want quick control via mobile.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What you can do from Slack

- **Real-time Notifications**: Get alerted immediately when a job starts, completes, or encounters an error.
- **List Jobs**: View all your registered RcloneView jobs in a clean list.
- **Remote Job Control**: Start jobs by name or by index (#N), or stop them instantly.
- **On-demand Status**: Check progress, transfer speed, and estimated time remaining anytime.

*Note: RcloneView must be running on your PC or server to process Slack commands.*

## Prerequisites

- RcloneView installed and running (Desktop or Headless).
- A Slack account and your own workspace.
- Internet connectivity.

---

## Step 1: Create your Slack App (Using Manifest)

For maximum security, RcloneView uses a "private app" approach where you create your own bot. This ensures your data never passes through any third-party servers—it goes directly from your PC to Slack.

1. Go to the [Slack API Dashboard](https://api.slack.com/apps) and click **[Create New App]**.
   
2. Select **[From a manifest]**.
   
3. Select the **Workspace** where you want to install the app and click **[Next]**.
4. Select the **[JSON]** tab, delete the existing content, and paste the code below:

```json
{
    "display_information": {
        "name": "RcloneView",
        "description": "Effortlessly browse, organize, transfer files across your cloud storages.",
        "background_color": "#3f2f3f"
    },
    "features": {
        "bot_user": {
            "display_name": "RcloneView",
            "always_online": false
        },
        "slash_commands": [
            {
                "command": "/help",
                "description": "Show all commands",
                "should_escape": false
            },
            {
                "command": "/joblist",
                "description": "List jobs",
                "should_escape": false
            },
            {
                "command": "/start",
                "description": "Start a job (Enter number or name)",
                "usage_hint": "<#number> or <jobName>",
                "should_escape": false
            },
            {
                "command": "/stop",
                "description": "Stop a running job by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            },
            {
                "command": "/jobstatus",
                "description": "Check status by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            }
        ]
    },
    "oauth_config": {
        "scopes": {
            "bot": [
                "commands",
                "chat:write",
                "chat:write.public",
                "im:write",
                "app_mentions:read",
                "files:write"
            ]
        }
    },
    "settings": {
        "interactivity": {
            "is_enabled": true
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": true,
        "token_rotation_enabled": false
    }
}

```

5. Click **[Next]**, then click **[Create]** to finish creating your app.

---

## Step 2: Get your Tokens

You need two types of tokens for RcloneView setup. **Treat these like passwords and never share them with others.**

### ① Get the App Token (For Socket Mode)

1. In the left menu, go to **[Basic Information]**.
2. Scroll down to the **[App-Level Tokens]** section and click **[Generate Token and Scopes]**.
3. Set the name to `RcloneView`, click **[Add Scope]**, select `connections:write`, and then click **[Generate]**.
4. Copy the token starting with `xapp-...` and save it.

### ② Get the Bot Token (For Messaging)

1. In the left menu, go to **[Install App]**.
2. Click the green **[Install to Workspace]** button and click **[Allow]**.
3. Copy the **Bot User OAuth Token** starting with `xoxb-...` and save it.

---

### Step 3: Enable Messages Tab

1. Click **App Home** in the left menu.
2. Turn on `Messages Tab`
3. Check `Allow users to send Slash commands and messages from the messages tab`

This will allow you to send slash commands to your bot directly.

---

## Step 4: Find your Member ID

The bot needs your unique ID to know which user to send notifications (DM) to.

1. Open your Slack app, click your profile picture, and select **[Profile]**.
2. Click the **[More (···)]** button.
3. Select **[Copy member ID]** at the bottom of the menu. (Example: `U1234567890`)
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />


---

## Step 5: Enable Slack Control in RcloneView

1. Open RcloneView and go to **Settings -> Interfaces & Notifications**.
2. Turn on the **Slack Remote Control** switch.
3. Enter your **App Token**, **Bot Token**, and **Member ID** in the respective fields.
4. Click **[Send Test Message]** to verify that you receive a message on your phone.

---

## ⌨️ Command Guide (ChatOps)

Type these commands in any chat where the bot is present:

* `/help` - Show all available commands.
* `/joblist` - List all registered jobs for the current connection.
* `/start <jobName>` - Start a job by its exact name.
* `/start #<number>` - Start a job using its index from `/joblist` (e.g., `/start #1`).
* `/stop <JobId>` - Stop a running job using its Job ID.
* `/jobstatus <JobId>` - Check real-time progress and statistics for a specific job.

---

## Security and Management Tips

* **User Identification**: Only the configured Member ID is authorized to execute commands.
* **Token Rotation**: If your tokens are ever exposed, go to the Slack API page and click `Regenerate` immediately.
* **Offline Status**: If RcloneView is not running, the Slack bot will not respond to commands.

## Related Resources

* [RcloneView Basic Guide](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
* [Job Scheduling and Automation](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
* [Real-time Transfer Monitoring](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## Wrap-up

Telegram turns RcloneView into a mobile command center: you stay notified, you can start or stop jobs instantly, and you respond faster to failures. Set it up once, keep the tokens safe, and manage your cloud automation with confidence even when you are away from your desk.

<CloudSupportGrid />
