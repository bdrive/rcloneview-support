---
slug: secure-rcloneview-app-lock-password
title: "Lock Down RcloneView with App Lock: Protect Remotes, Jobs, and History"
authors:
  - tayson
description: "Add a password gate to RcloneView with App Lock so only authorized users can view remotes, transfer history, jobs, mounts, and the internal database—even on shared PCs."
keywords:
  - rcloneview security
  - rcloneview app lock
  - rclone password protect
  - secure rclone gui
  - protect rclone remotes
  - rclone_view.db
  - cloud automation security
  - shared pc security
  - job history protection
  - transfer history protection
tags:
  - security
  - job-management
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';


# Lock Down RcloneView with App Lock: Protect Remotes, Jobs, and History

> Shared or company PC? Turn on App Lock to require a password before anyone can open RcloneView, keeping remotes, jobs, and transfer history out of sight.

RcloneView’s App Lock adds a simple password screen at launch or when reopening the app. It protects the internal database (`rclone_view.db`), which holds your remotes, job definitions, mount settings, job history, and transfer logs—so sensitive automation stays private even if the workstation is shared.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## What App Lock protects

- Remote definitions and credentials stored in `rclone.conf` (access gated by the app)  
- Transfer history and logs  
- Job settings and schedules  
- Mount configurations and UI state  
- The SQLite database (`rclone_view.db`) that ties everything together

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## Who benefits

- Teams sharing one workstation or jump box  
- IT admins running scheduled sync/mount jobs who need tamper resistance  
- Users with sensitive cross-cloud workflows (backups, compliance archives)  
- Anyone who wants a quick security layer without OS-level changes

## How to turn on App Lock (takes a minute)

1) Open **Settings → General Settings** in the top menu.  
<img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open Settings menu" />

2) In **General**, check **Enable App Lock**, enter your password, and click **Close**.  
<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

That’s it. The next time RcloneView starts or its window is reopened, you’ll see the unlock prompt.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## Resetting when you forget the password

- On the unlock screen, click **Reset App**.  
- Confirm the reset to clear App Lock and all internal data (settings, jobs, transfer history, job history).  
- Your `rclone.conf` remains intact, so remote definitions stay available once you reopen.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

## Best practices for secure operations

- Use App Lock on shared PCs or in offices where multiple users can open your session.  
- Pair it with OS account passwords or disk encryption for layered protection.  
- Name jobs clearly but avoid embedding secrets in job names or notes.  
- Back up `rclone_view.db` to a secure, user-writable location (see [change the database location](/tutorials/change-rcloneview-database-location)).  
- Keep the scheduler enabled only for jobs you trust and monitor via Job History.

## Quick FAQ

**Does App Lock stop scheduled jobs?**  
No—jobs you’ve scheduled continue to run. App Lock restricts UI access so others can’t view or alter them.

**What if I reset App Lock?**  
Internal data clears, but `rclone.conf` persists, so remotes remain. Recreate jobs/history as needed.

**Can I still use the Terminal?**  
Yes. Once unlocked, the built-in Terminal works normally; App Lock only gates access at launch.

## Wrap-up

A password prompt may seem small, but it’s a powerful shield for remotes, automation, and history. Enable App Lock, keep your `rclone_view.db` in a secure location, and run your cloud workflows knowing they stay private—even on shared machines.

<CloudSupportGrid />