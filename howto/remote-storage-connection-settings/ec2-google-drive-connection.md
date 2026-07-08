---
sidebar_position: 11
description: Learn how to add a Google Drive remote to an external Rclone running on AWS EC2 without using a web browser, using OAuth tokens generated locally.
keywords:
  - rcloneview
  - rclone
  - google drive
  - OAuth
  - token
  - ec2
  - external rclone
  - no browser login
  - headless
  - cloud storage
  - Remote Connection
  - remote storage
tags:
  - Remote-Storage
  - google-drive
  - external-rclone
  - aws-ec2
  - remote-connection
  - cloud-storage
date: 2025-07-07
author: Jay
---
# Add Google Drive to External Rclone on AWS EC2 (Without Web Browser)

This guide explains how to add a **Google Drive remote** to an **external Rclone instance** running on a system where a web browser is not available, such as an **AWS EC2 Ubuntu server**.

In such environments, completing the standard OAuth login flow via browser is not possible. Instead, you can use a local RcloneView installation to obtain the required **OAuth token**, and then reuse it on the external Rclone running on EC2.

:::info Run Rclone Daemon on EC2
For instructions on how to install and run Rclone on an EC2 instance, 

see: 👉 [How to Run Rclone Engine on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

:::

The process: generate a Google Drive OAuth token on a machine with a browser, then paste that token into the external Rclone running on EC2 via RcloneView.

---
## ✅ Step 1: Generate a Google Drive token (pick one method)

**Method A: `rclone authorize "drive"` (fastest)**

1. On a machine with a browser and the same rclone version, run:
   ```bash
   rclone authorize "drive"
   ```
2. Complete Google login/consent in the browser.
3. Copy the printed JSON token block (keep the whole JSON). You will paste this into EC2 in Step 3.

**Method B: Use RcloneView embedded remote and copy its token**

1. On your local PC, add Google Drive using the embedded Rclone (normal browser OAuth).  
   👉 [Quick Guide: Add Google Drive Remote](../#step-2-adding-remote-storage-google-drive-example)
2. Open **Remote Manager**, edit the Google Drive remote, click **Show advanced options**, and copy the **Token** field (JSON).

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-from-embedded-rclone.png" alt="copy google oauth token from embedded rclone" class="img-medium img-center" />

👉 More about editing remotes: [Edit Remote Settings](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## ✅ Step 2: Connect to the External Rclone (EC2)

Open a **`new window`** or use your current session in RcloneView to connect to your EC2-hosted Rclone:

- Open `Settings` -> **`Connection Manager`** to either create a new connection to your EC2-hosted Rclone or connect to an existing one if already configured.

👉 Learn more: [Connect External Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 Learn more: [New Window Feature](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## ✅ Step 3: Add Google Drive remote to the external Rclone (paste your token)

1. In the EC2-connected window, go to the `Remote` menu and select **`+ New Remote`**.
2. Choose **Google Drive** as the provider.
3. Input **`Remote Name`** and click **`Show advanced options`**.
4. Paste the previously copied **OAuth Token** into the **`Token`** field.
5. Click **`Add Remote`** button to complete the setup as usual.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-to-external-rclone.png" alt="copy google oauth token to external rclone" class="img-medium img-center" />

:::info **Ignore This Error Pop-up**
**If RcloneView shows an error message like the one below, you can safely ignore it.**
In most cases, the token configuration is completed successfully despite this message.
After closing the dialog, you should be able to access Google Drive normally.  
This is a known UI issue, and we will improve the user experience in the next release.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
Once configured, your EC2-based Rclone can now access Google Drive even without browser support. You can manage, sync, and transfer files using RcloneView as usual.

---

## 🔗 Related Guides

- [How to Run Rclone Engine on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Add Google Drive Remote](/howto/#step-2-adding-remote-storage-google-drive-example)
- [Edit Remote Settings](/howto/rcloneview-basic/remote-manager#edit-remote-settings)
- [Connect External Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [Multi-Window Usage](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)
