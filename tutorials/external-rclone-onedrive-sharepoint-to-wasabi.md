---
sidebar_position: 12
description: Move files from OneDrive to Wasabi at high speed by running an external Rclone daemon and controlling it with RcloneView.
keywords:
  - rcloneview
  - rclone
  - external rclone
  - onedrive
  - wasabi
  - s3 compatible
  - cloud migration
  - cloud sync
  - cloud transfer
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - wasabi
date: 2025-07-15
author: Jay
---
import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';

# Move OneDrive to Wasabi via External Rclone

When Microsoft 365 data sets are large, moving them through a laptop can be slow and unreliable. Running **Rclone** on a cloud VM (EC2, GCE, or any Linux host) and driving it from **RcloneView** keeps traffic in the data center, avoids home-network bottlenecks, and makes browser-less auth possible.

You will:

1. Run **rclone rcd** on a remote server as an external engine.
2. Open a **new RcloneView window** that connects to that external Rclone.
3. Add **OneDrive** and **Wasabi** remotes (including headless/CLI-only auth paths).
4. Copy, sync, or schedule jobs from OneDrive to Wasabi without touching local bandwidth.

## Part 1. Deploy Rclone on a Server (External Rclone)

1. Launch a small Linux VM (for example, `t3.medium` on AWS or equivalent).  
2. Open TCP **5572** to your IP or tunnel over SSH.  
3. Install Rclone:
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. Start the remote-control daemon with auth:
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
5. From your laptop, confirm it is reachable:
```bash
curl -u admin:admin -X POST "http://<SERVER-IP>:5572/rc/noop"
```
   A `{}` response means the daemon is ready for RcloneView.

👉 Need a refresher? See [Run Rclone on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2).

## Part 2. Open a New RcloneView Window

Each RcloneView window can pair with a different Rclone instance.

1. Launch **RcloneView**.  
2. Click **`New Window`** from the **Home** menu.  
3. A second window opens; this one will connect to the external Rclone you just launched.

👉 Learn more: [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window).

## Part 3. Connect RcloneView to the External Rclone

In the new window:

1. Open **Settings -> Connection Manager** -> **New Connection**.  
2. Fill in:

| Field          | Value                              |
| -------------- | ---------------------------------- |
| Display Name   | `external-rclone`                  |
| Remote Address | `http://<SERVER-IP>:5572`          |
| Username       | `admin`                            |
| Password       | `admin`                            |

3. Click **Test Connection** -> **Save** -> **Connect**. The status bar should show you are connected to the external daemon.

## Part 4. Add Wasabi and OneDrive Remotes (Inside the External Rclone)

All remotes you create now live inside the external Rclone process and are shared by the connected RcloneView window.

### ➕ Add Wasabi (S3-Compatible)

1. Go to the **Remote** tab -> **`+ New Remote`**.  
2. Choose **S3 / Wasabi**.  
3. Enter **Access Key**, **Secret Key**, and the **endpoint** for your region (for example `s3.ap-northeast-2.wasabisys.com`).  
4. Save the remote (e.g., name it `wasabi-prod`).

👉 Details: [How to Add Wasabi Remote](/tutorials/#2-add-wasabi-as-a-remote-in-rcloneview).

### ➕ Add OneDrive (Works Without a Local Browser)

1. Click **`+ New Remote`** again and select **OneDrive**.  
2. If the server has a browser, complete the standard OAuth flow in RcloneView.  
3. If the server is headless or cannot open a browser, follow the headless/CLI method: generate the token on a device with a browser and paste it into the server-side config.  

👉 Step-by-step headless flow: [Add Microsoft remotes from EC2/headless](/howto/remote-storage-connection-settings/ec2-onedrive-headless).
After saving, you should see two remotes listed in the Explorer: **OneDrive** and **Wasabi**.

## Part 5. Transfer or Sync to Wasabi

### Method A: One-Time Copy/Sync

1. In the Explorer, open **OneDrive** on one side and **Wasabi** on the other.  
2. Select the source folder on OneDrive and the destination bucket/folder on Wasabi.  
3. Click **`Sync`** (makes destination match source) or use **Copy ->** for a simple copy.  
4. Optionally run **Dry Run** first, then **Run** to start. Progress appears in the **Transfer** tab.

### Method B: Save or Schedule Jobs

1. Configure a copy/sync as above, then choose **Save to Jobs** in the dialog.  
2. Open **Job Manager** to re-run the saved job anytime.  
3. To automate, enable **Schedule** in Job Manager (PLUS feature) and set the desired cadence.  
4. Check **Job History** for logs and outcomes.

👉 More on jobs and scheduling:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)  
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Quick Tips for Faster Wasabi Uploads

- Keep the external VM in the same region as Wasabi when possible to reduce latency.  
- For large objects, higher `--transfers` and `--s3-upload-concurrency` values can improve throughput; adjust gradually based on CPU and network.  
- Use **Dry Run** before destructive syncs to confirm what will change.

## ✅ Wrap-Up

By hosting Rclone as a remote daemon and steering it from a dedicated RcloneView window, you get reliable OneDrive -> Wasabi migrations without local bottlenecks. Headless auth flows keep you covered when no browser is available, and jobs/schedules make repeat runs effortless.

## 🔗 Related Guides

- **Auth & Remotes**  
  - [Add Microsoft remotes from EC2/headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)  
  - [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)  
- **External Rclone & Windows**  
  - [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)  
  - [Run Rclone on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- **Transfers & Automation**  
  - [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)  
  - [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
  - [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
