---
slug: backup-migrate-rclone-config-rcloneview
title: "How to Backup, Migrate, and Manage Your Rclone Config with RcloneView"
authors:
  - tayson
description: "Learn how to back up, restore, and migrate your rclone configuration file — including encrypted remotes — using RcloneView. Keep your cloud connections portable and protected."
keywords:
  - backup rclone config
  - migrate rclone configuration
  - rclone config file location
  - rcloneview config backup
  - rclone config portable
  - export rclone remotes
  - rclone config file backup
  - move rclone to new computer
  - rclone config migration
  - rcloneview configuration management
tags:
  - feature
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# How to Backup, Migrate, and Manage Your Rclone Config with RcloneView

> Your rclone config file contains all your cloud remote configurations — connection details, authentication tokens, encryption keys, and custom settings. Losing it means reconfiguring every remote from scratch. Here's how to back it up, migrate it, and keep it portable.

After spending time configuring dozens of cloud remotes in RcloneView — OAuth flows, API keys, encryption passphrases, custom endpoints — the last thing you want is to lose that work to a disk failure, OS reinstall, or machine upgrade. The rclone config file is a single text file that encodes all of that setup. Understanding where it lives and how to protect it is essential maintenance for any serious RcloneView user.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Where Is the Rclone Config File?

The config file location depends on your operating system:

| OS | Default Location |
|----|----------------|
| **Windows** | `%APPDATA%\rclone\rclone.conf` |
| **macOS** | `~/.config/rclone/rclone.conf` |
| **Linux** | `~/.config/rclone/rclone.conf` |

You can verify the location in RcloneView's **Terminal**:

```bash
rclone config file
```

This prints the exact path being used on your system.

## What's Inside the Config File

The config file is a plain text INI-format file. Each section represents one remote:

```ini
[my-google-drive]
type = drive
client_id =
client_secret =
token = {"access_token":"ya29...","expiry":"2026-05-01T..."}

[s3-backup]
type = s3
provider = AWS
access_key_id = AKIA...
secret_access_key = abc123...
region = us-east-1

[encrypted-drive]
type = crypt
remote = my-google-drive:encrypted/
password = *** ENCRYPTED ***
password2 = *** ENCRYPTED ***
```

**Important:** OAuth tokens (for Google Drive, OneDrive, Dropbox) are stored in the config file. These tokens expire and get refreshed automatically during use. Back up the config regularly to capture the latest valid tokens.

## Backing Up the Config File

### Manual backup

Copy the config file to a secure location:

**Windows:**
```
copy %APPDATA%\rclone\rclone.conf C:\Backups\rclone-config-backup.conf
```

**macOS/Linux:**
```bash
cp ~/.config/rclone/rclone.conf ~/backups/rclone-config-$(date +%Y%m%d).conf
```

### Automated backup with RcloneView

Set up a job in RcloneView to back up the config file itself to cloud storage:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule config file backup in RcloneView" class="img-large img-center" />

1. Create a new **Copy** job.
2. Source: the config file location (`~/.config/rclone/`)
3. Destination: a cloud folder (`s3-backup:system-configs/rclone/`)
4. Schedule: weekly or after major changes.

**Security note:** The config file contains credentials. Only back it up to encrypted storage or an encrypted cloud folder (e.g., a Crypt remote).

## Encrypting the Config File at Rest

Rclone can encrypt the entire config file with a password. Enable this from RcloneView's terminal:

```bash
rclone config
# Choose: s - Set configuration password
```

After setting a password, the config file is encrypted on disk. You'll need the password each time RcloneView starts or when running rclone commands. This protects credentials even if the config file is stolen.

<img src="/support/images/en/blog/new-remote.png" alt="Set config password in RcloneView terminal" class="img-large img-center" />

## Migrating to a New Machine

### Method 1 — Direct copy

The simplest migration:

1. Copy `rclone.conf` from your old machine to the same path on the new machine.
2. Install RcloneView on the new machine.
3. Open RcloneView — all your remotes appear immediately.

No re-authentication needed for most remotes (S3, WebDAV, FTP, etc.). OAuth remotes (Google Drive, OneDrive, Dropbox) will use the stored tokens, which are valid until they expire (typically 60–90 days from last use).

### Method 2 — Re-authenticate OAuth remotes

If OAuth tokens have expired, re-authorize each affected remote:

1. Open **Remotes** in RcloneView.
2. Select the remote and choose **Edit**.
3. Click **Re-authorize** to generate fresh tokens.

Only remotes with expired OAuth tokens need this step.

### Method 3 — Use the `--config` flag

If you keep the config in a non-standard location (e.g., Dropbox for portability), use:

```bash
rclone --config /path/to/rclone.conf <command>
```

Or set the `RCLONE_CONFIG` environment variable to make this the default for all rclone operations on that machine.

## Viewing and Editing the Config in RcloneView

RcloneView's remote management interface provides a GUI for adding and editing remotes — but for power users who prefer direct access, the config file is always a valid way to make changes. After manually editing the config file, restart RcloneView to pick up the changes.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Manage remotes in RcloneView" class="img-large img-center" />

## Best Practices

| Practice | Why |
|----------|-----|
| Back up config weekly | OAuth tokens get refreshed; capture the latest valid state |
| Encrypt backup location | Config contains credentials and tokens |
| Use a config password for sensitive installs | Extra protection if the machine is compromised |
| Don't commit config to public Git repos | Access keys and tokens would be exposed |
| Test restore periodically | Verify your backup is actually usable |

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Find your config file** using `rclone config file` in RcloneView's terminal.
3. **Set up an automated backup job** to copy the config to encrypted cloud storage.
4. **Store the config password** (if set) in a password manager — losing it means losing access to the config.

Your rclone config is the single most important file in your RcloneView setup. Protect it accordingly.

---

**Related Guides:**

- [Encrypt Cloud Backups with Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [RcloneView Terminal: CLI Inside the GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Secure RcloneView with App Lock](https://rcloneview.com/support/blog/secure-rcloneview-app-lock-password)

<CloudSupportGrid />
