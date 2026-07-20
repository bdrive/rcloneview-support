---
sidebar_position: 10
description: Learn how to migrate your data from Amazon S3 to Cloudflare R2 using RcloneView.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - aws s3
  - cloudflare r2
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';


# Migration from AWS S3 to Cloudflare R2 with RcloneView

In today’s cloud-driven landscape, organizations and developers often seek to optimize storage costs, avoid vendor lock-in, and improve data accessibility. **Amazon S3** has long been the industry standard for object storage, offering high durability and seamless integration with AWS services. However, as data transfer volumes grow, S3’s egress fees and complex billing can become a significant burden.

**Cloudflare R2** emerges as a compelling alternative—delivering S3-compatible storage with no egress fees, a transparent pricing model, and global performance through Cloudflare’s vast edge network. Migrating from S3 to R2 allows you to:

- **Eliminate egress fees** and reduce overall cloud storage costs
- **Avoid vendor lock-in** with S3 API compatibility and flexible multi-cloud setups
- **Leverage Cloudflare’s global edge** for faster, more reliable data access
- **Simplify billing** and management with a user-friendly dashboard

Manual migration between cloud platforms is tedious and error-prone. That’s where **RcloneView** makes a difference.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2.png" alt="transfer files between aws s3 and cloudflare r2" class="img-medium img-center" />

## Why Use RcloneView for S3 to R2 Migration?

RcloneView is a GUI-powered cloud storage manager built on top of Rclone. It supports **S3-compatible endpoints** like AWS S3 and Cloudflare R2 out of the box, with:

- Full support for **access key / secret key authentication**
- Ability to set custom endpoints (for R2)
- Dual-pane Explorer for drag-and-drop file migration
- Folder comparison and sync tools
- Scheduled jobs for bulk or incremental migrations
- Detailed progress logs and error handling

Whether you’re moving terabytes of data or just a few folders, RcloneView lets you migrate with confidence—no command-line skills needed.

## 🔄 Transfer Files from AWS S3 to Cloudflare R2

### Step 1: Add AWS S3 Remote

1. Launch **RcloneView**, go to the **`Remote`** tab, and click **`+ New Remote`**.
2. In the **`Provider`** tab, choose **Amazon S3**.
3. In the **`Options`** tab:
   - Set `provider` to `AWS`
   - Enter your **Access Key ID** and **Secret Access Key**
   - Region and endpoint can be left default unless customized
4. Click **Save** to complete the setup.

👉 Learn more:   
- [How to Add S3 Remote](/howto/remote-storage-connection-settings/s3)
- [How to get AWS S3 Access credential](/howto/cloud-storage-setting/aws-account-info)
### Step 2: Add Cloudflare R2 Remote

1. Again, click **`+ New Remote`** in the `Remote` tab.
2. In the **`Provider`** tab, select **S3** (yes, again—R2 uses the S3 protocol).
3. In the **`Options`** tab:
   - Set `provider` to `Cloudflare`
   - Enter your **Cloudflare R2 Access Key** and **Secret Key**
   - Set `endpoint` to `https://<accountid>.r2.cloudflarestorage.com`
1. Click **Save** to complete the R2 remote setup.

👉 Learn more:   
- [How to Add S3 Remote](/howto/remote-storage-connection-settings/s3)
- [How to get cloudflare R2 Access credential](/howto/cloud-storage-setting/cloudflare-r2-credential)

### Step 3: Open Remotes in Dual-Pane Explorer

1. Go to the **Browse** tab in RcloneView.
2. In the left pane, click `+` and select your **AWS S3** remote.
3. In the right pane, click `+` and select your **Cloudflare R2** remote.
4. You will now be able to view and manage both services side by side.

<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

---
## 📌 File Migration Methods

### 🖱️ Method 1: Drag & Drop Files

- Select files or folders from AWS S3 on the left.
- Drag and drop them into the Cloudflare R2 pane on the right.
- The transfer begins automatically, with progress shown in the **`Transfer`** tab.

👉 Learn more: [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 🔍 Method 2: Compare Folders and Transfer

1. In both panes, navigate to corresponding source (S3) and target (R2) folders.
2. Click **`Compare`** in the `Home` menu.
3. RcloneView will highlight:
   - Files only in S3
   - Files already in R2
   - Same files with different sizes or timestamps
4. Click **Copy →** to migrate selected files from S3 to R2.
5. Use **Delete** for cleanup if needed.

👉 Learn more: [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 🔁 Method 3: Use Sync or Job

1. In the Explorer pane, select the **Cloudflare R2** folder and the **AWS S3** folder you want to synchronize.
2. Click the **`Sync`** button in the `home` menu.
3. Choose sync options (one-way or two-way), preview actions, and confirm.
4. RcloneView runs the sync and displays progress in the **`transfer`** log tab.

- For repeated or scheduled transfers:
  1. Click **`Save to Jobs`** in the Sync modal, or open **`Job Manager`** → **`Add Job`**.
  2. Configure source, destination, and options.
  3. Save and run manually or set a schedule.

👉 Learn more:
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ Method 4: Schedule a Recurring Sync Job

1. In the Explorer pane, select the **Cloudflare R2** and **AWS S3** folders you want to keep in sync.
2. Open **`Job Manager`** from the **`Home`** or **`Remote`** menu, then click **`Add Job`**.
3. Confirm your source and destination.
4. Use the schedule editor to set when the job should run. Preview your schedule before saving.
5. Save and enable the scheduled job.

RcloneView will run the sync at your specified times. Check execution details and logs in **`Job History`** and receive notifications upon completion.

👉 Learn more: [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)


---

## ✅ Summary

Migrating from AWS S3 to Cloudflare R2 helps reduce egress costs and vendor lock-in—without sacrificing performance. With RcloneView, the transition is fast, safe, and entirely visual.

Try it today and future-proof your cloud storage setup with Cloudflare R2.

---

## 🔗 Related Guides

- [How to Add S3 Remote](/howto/remote-storage-connection-settings/s3)
- [How to get AWS S3 Access credential](/howto/cloud-storage-setting/aws-account-info)
- [How to get cloudflare R2 Access credential](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
