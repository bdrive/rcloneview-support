---
sidebar_position: 10
description: Learn how to configure general preferences, interface layout, Notifications, and embedded Rclone settings in RcloneView.
keywords:
  - rcloneview
  - rclone
  - rcloneview settings
  - general preferences
  - dark mode
  - rclone log
  - rclone configurations
tags:
  - RcloneView
  - settings
  - configuration
  - preferences
date: 2025-06-22
author: Jay
---
# General Settings

RcloneView's **Settings** menu is divided into four tabs for better clarity and customization:

- **General**
- **Interfaces & Notifications**
- **Embedded Rclone**
- **Network & Misc.**

Each tab allows you to configure different parts of the application. Below is a breakdown of each section.

---

## 🛠 General

<img src="/support/images/en/howto/rcloneview-basic/general-settings.png" alt="general settings" class="img-medium img-center" />
### Language

- **Language**: Choose your preferred UI language from the dropdown.

### Startup Behavior

- **Launch at login**: Automatically starts RcloneView when you log into your system.

:::important Auto Start: Scheduling and Mounting

When **Launch at login** is enabled:  

- Any scheduled jobs defined in the [**Job Scheduler**](/howto/rcloneview-advanced/job-scheduling-and-execution) will automatically run upon login.  
- Any remotes configured for auto-mounting in the [**Mount Manager**](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer) will be mounted automatically when RcloneView starts.  
:::

- **Start minimized**: Launches RcloneView into the system tray.

- **Auto-detect Synology NAS**: Automatically scan the local network for Synology NAS devices.

### Reset

- **Restore Default Settings**: Resets all options to their original default values.

---

## 🎛  Interfaces & Notifications

<img src="/support/images/en/howto/rcloneview-basic/interface-settings.png" alt="interface settings" class="img-medium img-center" />
### UI Appearance

- **Dark mode**: Toggle between light and dark themes.
- **Theme color**: Choose from available accent colors.

### Drag and Drop

- **Confirm drag and drop**: Enables a confirmation popup when moving files via drag-and-drop.

### Show Job Types (Transfer Log Filters)

Select which types of jobs to display in the Transfer Log panel:
- **Download**
- **Upload**
- **Sync**

<img src="/support/images/en/howto/rcloneview-basic/notification-dialogs-settings.png" alt="notification dialogs settings" class="img-medium img-center" />
### Notification Dialogs

Decide which types of pop-up notifications you'd like to receive while using RcloneView:

- **Show job state log**: Display a detailed log dialog after each transfer job finishes.
- **Show comparison completed**: Notify when a folder comparison task has completed successfully.
- **Show confirmation before deleting files in compare**: Ask for confirmation before deleting any files during folder comparison.
- **Show sync completion notification**: Show a message when a sync operation finishes.
- **Show network error dialog**: Alert you immediately if a network connection error occurs during a job.

---

## ⚙️ Embedded Rclone

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-settings.png" alt="embedded rclone settings" class="img-medium img-center" />

### Embedded Lifecycle

- **Stop rclone on App Exit**: Automatically shuts down the embedded `rclone` process when RcloneView is closed.

:::caution Restart Required After Any Changes

After modifying any setting in the **Embedded Rclone** tab — including path configuration, global flags, or logging options — click **Restart Embedded Rclone** to apply the changes.  
This will restart the embedded Rclone process and may interrupt any currently running jobs.

:::
### Path Settings

- **Local Rclone location**: Absolute path to your `rclone` binary.
- **Local Rclone config location**: Path to your `rclone.conf` file (contains remote info).
- **Default download folder**: Directory where downloaded files will be saved.
- **Default upload folder**: Directory used as the source for upload jobs.

   <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-advanced-options-settings.png" alt="embedded rclone advanced options settings" class="img-medium img-center" />
### Advanced Options

- **Global Rclone Flags**: Additional flags to pass to rclone (e.g., `--s3-directory-markers`).
- **Config Password**: Password for encrypted rclone configurations. If you set this password, then rclone config files will be encrypted.

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-logging-configuration-settings.png" alt="embedded rclone logging configuration settings" class="img-medium img-center" />
### Logging Configuration

- **Enable rclone Logging**: Activate file-based logging for Rclone operations.
- **Log folder**: Directory to store log files.
- **Log file name**: Default filename for logs.
- **Log level**: Choose verbosity level (DEBUG, INFO, NOTICE, ERROR).

---

## 🌐 Network & Misc

<img src="/support/images/en/howto/rcloneview-basic/network-etc-settings.png" alt="network etc settings" class="img-medium img-center" />

### Network

- **Proxy settings**: Configure proxy (feature coming soon).
- **Rclone connection manager**: View or manage active Rclone connections.  
  → [Read more](/howto/rcloneview-basic/connection-manager)

### Diagnostics

- **Application Log**: Opens internal logs to aid troubleshooting or bug reporting.

---

## ✅ Summary

These settings allow you to fully control how RcloneView behaves at startup, how it interfaces with Rclone, and how it communicates job results or errors to you. Adjust them to match your workflow, whether you're scheduling syncs, automounting drives, or troubleshooting network issues.

