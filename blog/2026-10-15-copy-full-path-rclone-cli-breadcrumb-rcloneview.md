---
slug: copy-full-path-rclone-cli-breadcrumb-rcloneview
title: "Copy Full Path with Remote — Bridge the GUI and rclone Commands in RcloneView"
authors:
  - kai
description: "Use RcloneView's breadcrumb Copy Full Path to grab remote:path strings and run them in the built-in rclone terminal. A practical GUI-to-CLI workflow."
keywords:
  - rclone remote path
  - copy full path rclone
  - RcloneView breadcrumb
  - rclone terminal GUI
  - rclone about command
  - remote:path syntax
  - rclone GUI workflow
  - rclone command helper
  - RcloneView feature
  - cloud path copy
tags:
  - RcloneView
  - feature
  - cli
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Copy Full Path with Remote — Bridge the GUI and rclone Commands in RcloneView

> One right-click turns a folder you are browsing into a ready-to-use rclone path.

Anyone who has typed an rclone command knows the pain of getting `remote:path` exactly right, especially with spaces and nested folders. RcloneView solves this with a breadcrumb menu option that copies the full path, including the remote name, straight to your clipboard.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Copy Full Path Does

Each Explorer panel has a breadcrumb path bar showing where you are. Right-click it and you will find Cut, Copy, Paste, Select All and **Copy Full Path (with Remote)**. The last option copies the location in the form `mygoogledrive:Meet recordings`, which is the exact syntax rclone expects.

<img src="/support/images/en/blog/new-remote.png" alt="Remotes listed in the RcloneView explorer" class="img-large img-center" />

Because the remote name is included, there is no guessing which of your many remotes a folder belongs to. That matters when you manage several accounts of the same provider.

## Paste It into the Built-in Terminal

RcloneView includes a Terminal tab in the bottom Info View with full terminal emulation. Type `rclone` followed by a space for command suggestions, then paste your copied path. For example, `rclone about "remote:"` reports storage usage for a remote, and `rclone listremotes` lists everything configured. Quote paths that contain spaces.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running jobs and commands inside RcloneView" class="img-large img-center" />

This GUI-to-CLI loop is useful when you want a one-off command the wizard does not expose, while still using the visual Explorer to find the right folder.

## Use Paths in Jobs and Documentation

Copied paths are also handy outside the terminal: pasting into a runbook, a support ticket, or a teammate's chat guarantees everyone refers to the same location. After a transfer, check the result in the Transferring tab or Job History, which records status, size and speed per run.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed transfers" class="img-large img-center" />

RcloneView is a GUI built on rclone, not a replacement for it, so the commands you run in the terminal use the same embedded engine as your jobs.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add a remote and browse to a folder in the Explorer.
3. Right-click the breadcrumb bar and choose **Copy Full Path (with Remote)**.
4. Open the Terminal tab, type `rclone about "` and paste the path.

Fewer typos, faster troubleshooting, and one tool for both clicking and typing.

---

**Related Guides:**

- [Rclone Terminal Inside RcloneView](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Terminal and GUI Workflow](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)
- [Alias Remote Shortcut Paths](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
