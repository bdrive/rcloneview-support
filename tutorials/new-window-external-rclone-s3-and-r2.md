---
sidebar_position: 11
description: Learn how to transfer large files from AWS S3 to Cloudflare R2 at high speed using an external Rclone daemon on EC2, fully managed with RcloneView.
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - cloudflare r2
  - cloudflare s3 api
  - cloudflare r2 rclone
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
  - aws-ec2
date: 2025-07-13
author: Jay
---
import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';

# High-Performance File Transfers Between AWS S3 and Cloudflare R2 via External Rclone on EC2

Modern teams often juggle multiple object-storage platforms and quickly discover that bandwidth, latency, and egress fees become critical roadblocks when large datasets travel through a local desktop. Running **Rclone** directly on a cloud instance—then controlling it through **RcloneView**—pushes the heavy traffic into the cloud’s high-speed backbone and keeps your laptop out of the data path.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" alt="transfer files between aws s3 and cloudflare r2 with external rclone" class="img-medium img-center" />

The walkthrough below adapts the layout of the “Sync AWS S3 and Google Drive via EC2” guide and extends it to the S3 ↔ R2 scenario. You will:

1. Spin up Rclone as a remote-control daemon (**rcd**) on an AWS EC2 server.
2. Open a separate RcloneView window and connect to that external Rclone.
3. Add AWS S3 and Cloudflare R2 remotes inside the EC2-hosted Rclone.
4. Transfer, sync, or schedule jobs—entirely cloud-to-cloud—without local bandwidth constraints.

:::danger AWS Data-Transfer Fees
Intra-region traffic within the same Availability Zone is free, but cross-AZ and Internet egress incur costs (typically $0.02/GB AZ-to-AZ; $0.09/GB to the Internet). 
See: [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
:::

## **Why Use an External Rclone?**

| Local Embedded Rclone                                                                  | External Rclone on EC2                                                                    |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Traffic path: **S3 → local PC → R2** — double hop and throttled by home upload speeds. | Traffic path: **S3 → EC2 → R2** — single hop in the cloud’s backbone, often 10-25 Gbit/s. |
| Home ISP caps or asymmetrical bandwidth slow large migrations.                         | Vastly higher throughput; no local caps.                                                  |
| Local CPU and RAM must hash every byte.                                                | Off-loads CPU to a cloud VM; you can pick larger instance sizes on demand.                |
| Possible NAT/firewall issues.                                                          | Public IP with open port 5572 (or tunnel via SSH).                                        |

## Part 1. Deploy Rclone on EC2 (External Rclone)

1. **Launch an Ubuntu EC2 instance** (t3.medium or larger for multi-threaded uploads).
2. **Open TCP 5572** in the Security Group (or use an SSH tunnel).
3. **Install Rclone**:
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. **Run the rcd daemon** with basic auth:
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
    The `--rc-addr` flag exposes HTTP endpoints for RcloneView to call.
    
5. **Health-check** from your laptop:
```bash
   curl -u admin:admin -X POST "http://<EC2-IP or DNS-NAME>:5572/rc/noop"
```
    A JSON `{}` response confirms the daemon is listening.

👉 Learn more:  [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

## Part 2. Open a New RcloneView Window

To keep connections organized, RcloneView allows each window to operate with its own Rclone engine.

1. Launch **RcloneView**  
2. Click the **`New Window`** button from the `Home` menu. 
3. A new application window will open. This instance is independent of the main window and will maintain its own connection context.  

  📌 _You’ll connect this window to your External Rclone (EC2) in the next step..  

👉 Learn more: [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window).

## Part 3. Connect to the EC2-Hosted Rclone

In the **newly opened window**, follow these steps to connect to your EC2-hosted External Rclone:

1. In the new window, open **Settings → Connection Manager**.
2. Click **New Connection** and fill the form:

| Field          | Value                              |
| -------------- | ---------------------------------- |
| Display Name   | `ec2-rclone`                       |
| Remote Address | `http://<EC2-IP or DNS-NAME>:5572` |
| Username       | `admin`                            |
| Password       | `admin`                            |

4. Click **`Test Connection`** to verify the setup.  
   You should see a successful connection response.  
5. If the test passes, click **`Save`**, then **`Connect`.  
6. You are now connected to your **External Rclone instance running on EC2**, and the connection status should appear at the top of the window.   

<div class="img-grid-2"> <img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="Create EC2 connection" class="img-medium img-center" /> <img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="Connected to EC2" class="img-medium img-center" /> </div>

## Part 4. Add AWS S3 & Cloudflare R2 Remotes (via External Rclone)


### ➕ Add AWS S3 Remote

1. Go to the **`Remote`** tab, and click **`+ New Remote`**.
2. In the **`Provider`** tab, choose **Amazon S3**.
3. In the **`Options`** tab:
   - Set `provider` to `AWS`
   - Enter your **Access Key ID** and **Secret Access Key**
   - Region and endpoint can be left default unless customized
4. Click **Save** to complete the setup.

👉 Learn more:   
- [How to Add S3 Remote](/howto/remote-storage-connection-settings/s3)
- [How to get AWS S3 Access credential](/howto/cloud-storage-setting/aws-account-info)
    
### ➕ Add Cloudflare R2 Remote

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
    
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

## Part 5. Sync Files Between AWS S3 and Cloudflare R2

### 🔁 Method A: Use Sync or Job

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

### ⏰ Method B: Schedule a Recurring Sync Job

1. In the Explorer pane, select the **Cloudflare R2** and **AWS S3** folders you want to keep in sync.
2. Open **`Job Manager`** from the **`Home`** or **`Remote`** menu, then click **`Add Job`**.
3. Confirm your source and destination.
4. Use the schedule editor to set when the job should run. Preview your schedule before saving.
5. Save and enable the scheduled job.

RcloneView will run the sync at your specified times. Check execution details and logs in **`Job History`** and receive notifications upon completion.

👉 Learn more: [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

##  ⚡ Performance Tuning Cheat-Sheet

| Parameter                 | Recommended Value                                    | Impact Level | Rationale                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--s3-chunk-size`         | `50M`                                                | *****        | Larger parts reduce Class-A ops on R2 and improve speed[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).   |
| `--s3-upload-concurrency` | `32–64`                                              | ***          | Increases multipart threads for R2.                                                                                                                                               |
| `--transfers`             | `32–64`                                              | *            | Parallel object uploads boost throughput on 10 Gbit links[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311). |
| `--s3-disable-checksum`   | Add only when reconciling <br />checksums externally | ****         | Skips per-part hashing bottleneck—use with caution[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).        |
## 📈 Real‑World Tuning Results

To maximize performance during cloud-to-cloud transfers, we fine-tuned the **Cloudflare R2 remote** configuration as described below.

:::caution Experimental Results Only

RcloneView is a GUI frontend for Rclone. The performance tuning tips and benchmarks shared here are based on experimental testing inspired by community posts ( [How to Maximize Multipart Upload Speed to Cloudflare R2](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)) and may vary depending on your specific cloud environment, region, network conditions, and use case.

These results are **not guaranteed** and should be used as a reference only.
:::

### 🔧 How to Update R2 Remote Settings

To change the configuration of the target R2 remote:

1. In the **Explorer** pane, click the gear icon next to your Cloudflare R2 remote, or go to **Remote Manager → Edit**.
2. In the **`Options`** tab, click **`Show advanced options`**.
3. Set the following values:
   - `chunk_size = 50Mi`
   - `upload_concurrency = 32`
4. Save your changes.

The `disable_checksum` option can also have a significant impact on transfer speed. However, for this test, we left it at the default value (`false`) to preserve integrity checks during file transfer.
<img src="/support/images/en/tutorials/chunk-size-and-upload-concurrency-settings.png" alt="chunk size and upload concurrency settings" class="img-medium img-center" />
### 📉 Baseline: Default Performance

When using **default settings**:

```text
- chunk_size = 5Mi 
- upload_concurrency = 4. 
```

we observed transfer speeds of approximately **114 MB/s** when moving large files from **AWS S3** to **Cloudflare R2** via **EC2-hosted Rclone**.
<img src="/support/images/en/tutorials/transfer-speed-with-default-options.png" alt="transfer speed with default options" class="img-medium img-center" />

### 🚀 After Tuning: 4× Performance Boost

By updating the Cloudflare R2 remote with optimized settings:

```text
- chunk_size = 50Mi 
- upload_concurrency = 32

```

and keeping `disable_checksum = false`, we achieved speeds of around **440 MB/s**—a **4× improvement** over the default.

<img src="/support/images/en/tutorials/high-transfer-speed-with-chunk-size-and-upload-concurrency.png" alt="high transfer speed with chunk size and upload concurrency" class="img-medium img-center" />
## ✅ Summary

Cloud-to-cloud transfers no longer need to crawl through your laptop. By off-loading the heavy lifting to an external Rclone daemon on EC2, you unlock near-line-rate migration speeds, dodge AWS egress surprises, and keep your workflow fully visual inside RcloneView. Start your next S3 ↔ R2 move with confidence—and wave goodbye to local bottlenecks.

---

## 🔗 Related Guides

- **Storage Setup**
	- [How to Add S3-Compatible Remotes](/howto/remote-storage-connection-settings/s3)
	- [How to Get AWS S3 Access Credentials](/howto/cloud-storage-setting/aws-account-info)
	- [How to Get Cloudflare R2 Access Credentials](/howto/cloud-storage-setting/cloudflare-r2-credential)
- **EC2 & Remote Rclone**
	- [How to Run Rclone on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- **Window & Connection Management**
	- [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)
	- [Manage Multiple RcloneView Windows](https://www.perplexity.ai/support/howto/rcloneview-advanced/multi-window) <!-- external duplicate, optional to keep -->
- **Synchronization and Job Control**
	- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
	- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
	- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
	- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
- **Cost Considerations**
	- [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
- **Performance Optimization**
	- [How to Maximize Multipart Upload Speed to Cloudflare R2](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)

<CloudSupportGrid />
