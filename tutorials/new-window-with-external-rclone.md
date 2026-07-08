---
sidebar_position: 5
description: Learn how to sync Google Drive and AWS S3 directly in the cloud using RcloneView connected to an external Rclone instance running on AWS EC2.
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - google drive
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - aws-ec2
  - google-drive
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - cloud-to-cloud
  - aws-s3
date: 2025-06-19
author: Jay
---
import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';

# Sync AWS S3 and Google Drive via External Rclone on EC2

Synchronizing data between cloud storage services (e.g., Google Drive ↔ AWS S3) using **RcloneView** is simple thanks to its built-in **Embedded Rclone**. When you install RcloneView, this embedded engine is automatically included and is typically used to manage file transfers from your **local PC**.

However, using the Embedded Rclone means that **all transfer traffic flows through your local computer**. This can slow things down significantly—especially when syncing large datasets or operating over a slower network.

For example, syncing files from **Google Drive to AWS S3** using Embedded Rclone involves downloading files to your local machine and then uploading them to S3. This double-transfer not only adds latency but also consumes your local bandwidth.

<img src="/support/images/en/tutorials/sync-aws-s3-and-google-drive-via-ec2.png" alt="sync aws s3 and google drive via ec2" class="img-medium img-center" />
A better solution in this case is to **run Rclone directly on a cloud instance**—like **an AWS EC2 server**. By connecting RcloneView to that **External Rclone running on EC2**, you can:

- Avoid routing traffic through your local PC  
- Perform cloud-to-cloud transfers directly within the cloud (Google → EC2 → S3)  
- Take advantage of higher-speed cloud network infrastructure    

This architecture significantly improves performance and reduces the load on your local device.

In this tutorial, we’ll walk you through how to use **RcloneView’s New Window feature** to connect to an **External Rclone on EC2**, then sync files between **Google Drive** and **AWS S3** entirely from the cloud.

:::caution AWS EC2 and Network Transfer Fees May Apply  

Running Rclone on an EC2 instance can lead to faster transfers, but note that **AWS may charge for compute usage and outbound data transfer to other services**.  

See: [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)

:::
  
This guide walks you through how to:

1. Launch and configure **Rclone** on an AWS EC2 instance  
2. Open a new RcloneView window  
3. Connect to the **External Rclone** on EC2  
4. Add **Google Drive** and **AWS S3** remotes  
5. Synchronize files directly between them with improved performance

---

## Part 1: Deploy Rclone on EC2 (External Rclone)

Follow the AWS EC2 guide to launch Ubuntu, open port 5572, install Rclone, and run the `rcd` daemon  

👉 See: [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
 
**Key points**:

- `rclone rcd` is running with `--rc-addr=0.0.0.0:5572`  
- Open port `5572` in your EC2 Security Group
- HTTP Basic auth is set (`--rc-user`, `--rc-pass`)  
- Run the daemon with:

 ```bash
   rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

- You verify access via:

```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"

```



---

## Part 2: Open a New RcloneView Window

To keep connections organized, RcloneView allows each window to operate with its own Rclone engine.

1. Launch **RcloneView**
    
2. Click the **`New Window`** button from the `Home` menu
    
3. A new application window will open. This instance is independent of the main window and will maintain its own connection context.
    

  📌 _You’ll connect this window to your External Rclone (EC2) in the next step._

  
👉 Learn more: [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)

---

## Part 3: Connect EC2-hosted External Rclone

In the **newly opened window**, follow these steps to connect to your EC2-hosted External Rclone:

1. Open **`Connection Manager`** from the `Settings` menu.

2. Click **`New Connection`** to create a new Rclone connection profile.

3. Fill in the required fields:

    - **Display Name**: `ec2-rclone` (or any name you prefer)

    - **Remote Address**: `http://<EC2-PUBLIC-IP-or-DNS-NAME>:5572`

    - **Username / Password**: Use the values you set in Part 1 when starting the Rclone daemon  
      (e.g., `--rc-user=admin`, `--rc-pass=admin`)

4. Click **`Test Connection`** to verify the setup.  
   You should see a successful connection response.

5. If the test passes, click **`Save`**, then **`Connect`**.

6. You are now connected to your **External Rclone instance running on EC2**, and the connection status should appear at the top of the window.

<div class="img-grid-2">
<img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="new connection to ec2 rclone" class="img-medium img-center" />
<img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="connected to ec2 rclone" class="img-medium img-center" />
</div>

👉 Learn more: [Add a New External Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)


---

## Part 4: Add AWS S3 & Google Drive Remotes (via External Rclone)

  
Still in the EC2-connected RcloneView window:

### ➕ Add AWS S3 Remote

1. Click **`+ New Remote`** in `Remote` menu
    
2. In the **Provider** tab, search for and select S3
    
3. In the **`Options`** tab:
    
    - Set **`Provider`** to AWS
        
    - Enter your AWS **`Access Key ID`** and **`Secret Access Key`**
        
    - Set **`Region`** and optionally set **Endpoint** for S3-compatible services
        
    
4. Click **Save**, name it (e.g., ec2-s3)
    
👉 Learn more: [Add AWS S3 Remote](/howto/remote-storage-connection-settings/s3)

### ➕ Add Google Drive Remote (Using OAuth Access Token)

Instead of completing a new browser-based login flow, you can follow the steps in the guide below to use the **OAuth Access Token** obtained earlier:

👉 See: [Set Up Google Drive on External Rclone Without Browser](/howto/remote-storage-connection-settings/ec2-google-drive-connection)

1. Go to **`+ New Remote`** from the `Remote` menu
2. Select **Google Drive** as the provider
3. In the **Options** tab, scroll down and click **Show advanced options**
4. Paste the previously copied token into the **`token`** field
5. Name the remote (e.g., `ec2-gdrive`) and save

  <img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />


---

## Part 5: Sync Files Between AWS S3 and Google Drive

 You can now transfer files between Google Drive and S3 via your EC2 Rclone instance.

  ### **📁 Method A: Compare and Sync On Demand**

1. Go to the **Browse** tab
    
2. Load **Google Drive remote** in the left pane (ec2-gdrive:)
    
3. Load **AWS S3 remote** in the right pane (ec2-s3:)
    
4. Click **Compare** in the top menu
    
5. Review differences:
    
    - Files on one side only
        
    - Different sizes
        
    - Identical matches
        
    
6. Use **Copy →**, **← Copy**, or **Delete** to sync
    

💡 Progress is shown in the status bar and transfer log tab.

  👉 Learn more: [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### **🕒 Method B: Set Up a Scheduled Sync Job**

1. Go to **Home → Job Manager**, then click **Add Job**
    
2. Select **Sync**
    
    - Source: ec2-gdrive:folder
        
    - Destination: ec2-s3:folder
        
    
3. Configure:
    
    - Sync direction
        
    - Filtering rules (optional)
        
    
4. (Optional) Enable **Scheduling**
    
    - Set time pattern
        
    - Preview the schedule with the built-in simulator
        
    
5. Click **Save & Enable**
    

  Once scheduled, RcloneView will execute syncs automatically using your EC2-hosted Rclone backend.

👉 Learn more:
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
  
---

## Final Check

- Confirm your sync completed successfully via **Transfer Log** or **Job History** pane
    
- Run periodic checks on EC2 to confirm it remains connected and responsive
    

---

## 🔗 Related Guides

- [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)
- [Add a New External Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [Add AWS S3 Remote](/howto/remote-storage-connection-settings/s3)
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)
-  [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)



<CloudSupportGrid />
