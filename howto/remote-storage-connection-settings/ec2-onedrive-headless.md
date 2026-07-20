---
sidebar_position: 12
description: Install and run Rclone on AWS EC2, connect to it from RcloneView on your PC, and add a OneDrive remote without using a browser on the server.
keywords:
  - rcloneview
  - rclone
  - onedrive
  - headless
  - external rclone
  - aws ec2
  - rclone rcd
  - remote storage
  - cloud migration
tags:
  - Remote-Storage
  - onedrive
  - external-rclone
  - aws-ec2
  - headless
date: 2025-07-15
author: Jay
---
# Add OneDrive to External Rclone on AWS EC2 (Headless)

:::info Related prerequisite
If you need a full EC2 setup walkthrough, see 👉 [How to Run Rclone Engine on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2).
:::

---

The process: generate a OneDrive OAuth token on a machine with a browser, then paste that token into the external Rclone running on EC2 via RcloneView.

---

## Step 1. Generate a OneDrive token (pick one method)

**Method A: `rclone authorize "onedrive"` (fastest)**

1. On a machine with a browser and the same rclone version, run:
   ```bash
   rclone authorize "onedrive"
   ```  
2. Complete the Microsoft login/consent in the browser.  
3. Copy the printed JSON token block (keep the whole JSON). You will paste this into EC2 in Step 3.

**Method B: Use RcloneView embedded remote and copy its token**

1. On your local PC, add OneDrive using the embedded Rclone (normal browser OAuth).  
2. Open **Remote Manager**, edit the OneDrive remote, click **Show advanced options**, and copy the **Token** field (JSON).

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-from-embedded-rclone.png" alt="copy onedrive oauth token from embedded rclone" class="img-medium img-center" />


👉 More about editing remotes: [Edit Remote Settings](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## Step 2. Connect to the External Rclone (EC2)

Open a **new window** or use your current session in RcloneView to connect to your EC2-hosted Rclone:

- Open `Settings` -> **`Connection Manager`** to either create a new connection to your EC2-hosted Rclone or connect to an existing one if already configured.

👉 Learn more: [Connect External Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 Learn more: [New Window Feature](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## Step 3. Add OneDrive remote to the external Rclone (paste your token)

1. In the EC2-connected window, go to the `Remote` menu and select **`+ New Remote`**.
2. Choose **OneDrive** as the provider.
3. Input **Remote Name** and click **Show advanced options**.
4. Paste the previously copied **OAuth Token** into the **Token** field.
5. Click **Add Remote** to complete the setup.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-to-external-rclone.png" alt="copy onedrive oauth token to external rclone" class="img-medium img-center" />
:::info **Ignore This Error Pop-up**
If RcloneView shows an error message like the one below, you can safely ignore it.
In most cases, the token configuration is completed successfully despite this message.
After closing the dialog, you should be able to access OneDrive normally.  
This is a known UI issue, and we will improve the user experience in the next release.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
Once configured, your EC2-based Rclone can now access OneDrive even without browser support. You can manage, sync, and transfer files using RcloneView as usual.

---

## Related links

- [How to Run Rclone Engine on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- [Connection Manager](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
- [Multi-Window Usage](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute and Manage Jobs](/howto/rcloneview-basic/execute-manage-job)  
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
