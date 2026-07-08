---
sidebar_position: 3
description: Learn how to manage both embedded and external Rclone instances in parallel using RcloneView's New Window feature.
keywords:
  - rcloneview
  - new window
  - multi-connection
  - external rclone
  - embedded rclone
  - multiple rclone
tags:
  - RcloneView
  - new-window
  - multi-connection
  - external-rclone
  - embedded-rclone
  - multi-windows
date: 2025-06-22
author: Jay
---
# Using Multiple Rclone Connections with New Window

RcloneView provides a flexible interface to manage multiple Rclone instances simultaneously. This is particularly useful when working with both embedded and external Rclone setups.

## Embedded Rclone Architecture

In the default configuration, RcloneView includes a built-in Rclone binary (Embedded Rclone). This instance allows users to manage cloud remotes through an easy-to-use GUI interface.

### 🔹 Embedded Model

- RcloneView includes Rclone and communicates with it via API.
- Files are accessed and managed directly through Rclone.
- Suitable for most local desktop usage scenarios.

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-medium img-center" />
## External Rclone Architecture

For more advanced use cases, such as managing remotes on remote servers or cloud instances, RcloneView can connect to an external Rclone instance running elsewhere.

### 🔹 External Model

- RcloneView connects to a remote Rclone server (via Rclone RC).
- Remote Rclone is responsible for accessing and syncing cloud storage.
- Useful for managing cloud-hosted Rclone environments (e.g., AWS EC2, Linux servers).

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-medium img-center" />
## New Window Feature: Managing Both Models

To support both embedded and external Rclone instances simultaneously, RcloneView includes a **New Window** feature. This allows users to launch multiple GUI instances of RcloneView, each connected to a different Rclone backend.

### ✅ Key Benefits

- Each window can connect to a unique Rclone instance.
- Manage local and remote environments in parallel.
- Compare, sync, and copy between different clouds or environments seamlessly.

### 🔸 Example: Home Window (Embedded Rclone)

This window is connected to the built-in Rclone included with RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-home-window.png" alt="rcloneview home window" class="img-medium img-center" />
:::important Home Icon for the Main Window
The main RcloneView window (connected to the embedded Rclone) can be identified by the **home icon** <img src="/support/icons/home-icon.png" alt="home icon" class="inline-icon" /> located next to the RcloneView logo in the top-right corner.

:::
### 🔸 Example: New Window (External Rclone)

This window is connected to an external Rclone running on an AWS Linux server.

:::info How to Run the Rclone Engine on AWS EC2  
To learn how to deploy and manage Rclone’s API daemon (`rcd`) on an Ubuntu-based EC2 instance, see: [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
:::
<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="rcloneview new window" class="img-medium img-center" />
## 🚩Comparison: Embedded Rclone vs. External Rclone

| Feature                               | Embedded Rclone                      | External Rclone                             |
| ------------------------------------- | ------------------------------------ | ------------------------------------------- |
| Runs on Local Machine                 | ✅ Yes                                | ❌ No (Runs on remote server)                |
| Access to Local Disk                  | Yes — Local PC where RcloneView runs | Yes — Server where external Rclone runs     |
| Uses Built-in Rclone Binary           | ✅ Included by default                | ❌ Requires separate installation            |
| Configurable in `Settings > Location` | ✅ Supported                          | ❌ Not applicable                            |
| Requires Network Configuration        | ❌ No                                 | ✅ Yes (Host, Port, Authentication required) |
| Network Performance                   | Depends on local/home network        | Depends on server/cloud network             |

 💡 Use the **New Window** feature to manage multiple Rclone instances in parallel — for example, connect one window to the embedded Rclone for local tasks, and another to an external Rclone for cloud-side operations.
