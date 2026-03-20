---
sidebar_position: 3
description: Learn how to automatically detect Synology NAS on your local network, connect it to RcloneView using WebDAV, SMB, or SFTP.
keywords:
  - rcloneview
  - Synology NAS
  - auto detection
  - NAS to cloud transfer
  - SMB
  - WebDAV
  - SFTP
  - Synology integration
  - cloud storage sync
  - cloud backup
  - google drive
  - onedrive
  - drag and drop
  - job scheduler
  - multi-cloud management
tags:
  - RcloneView
  - Tutorial
  - synology
  - NAS
  - auto-detection
  - cloud-file-transfer
  - webdav
  - sftp
  - cloud-migration
  - multi-cloud
  - sync
  - job
  - drag-and-drop
date: 2025-09-11
author: Jay
---
import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';

# Effortless Synology NAS Integration with RcloneView: Auto-Detection, Setup & File Transfer

Easily connect your Synology NAS to cloud services like Google Drive, OneDrive, or iCloud using **RcloneView**. With auto-detection, built-in support for SMB, WebDAV, and SFTP, and no complex setup required, you can transfer, sync, or schedule jobs between your NAS and cloud drives—all from a user-friendly GUI.

## **✅ Why Use RcloneView for NAS-to-Cloud Transfers?**

If you’re using Synology NAS as your home server, office backup, or media vault, chances are you’ve also got cloud storage accounts. With RcloneView, you don’t need to rely on downloading files manually or learning command-line tools.

Instead, you get:

- 🚀 Auto-detection of NAS devices in your local network
    
- 🔄 Sync & transfer jobs between NAS and cloud storage
    
- 👨‍💻 GUI-based setup for WebDAV, SMB, FTP, and SFTP
    
- 📅 Schedule automated backup jobs from NAS to cloud
    
- ✅ Compare folder contents before syncing
    
- 🧠 No command-line skills required
  

Whether you’re a beginner or a system administrator, **RcloneView makes NAS-to-cloud management simple**.

## **🧰 Step 1: Detect Your NAS on Local Network**
  

RcloneView automatically scans your local network for Synology NAS devices.

<img src="/support/images/en/tutorials/synology-nas-auto-detect.png" alt="synology nas auto detect" class="img-medium img-center" />


- Make sure your NAS and computer are on the **same local network**.
    
- NAS devices detected will appear in a list showing:
    
    - Device name, IP, MAC address, DSM port
        
    - Link to open **DSM (DiskStation Manager)**


:::info NAS Auto-Detection Not Working on VLAN
If you're using a VLAN (Virtual Local Area Network), RcloneView may not be able to auto-detect your Synology NAS.  

This is because the auto-discovery feature relies on multicast or broadcast protocols, which are typically restricted or blocked between VLANs for security and traffic isolation reasons.
:::

  
### Select a Connection Method

  From the dropdown, choose how to connect:

- **WebDAV** (default and recommended)
- **SMB**
- **FTP**
- **SFTP**

**🔗 Need to configure these on Synology first?**

Refer to the official DSM setup guides:

- [Set up WebDAV on Synology](https://kb.synology.com/en-global/DSM/help/WebDAVServer/webdav_server)
- [Enable SMB on Synology](https://kb.synology.com/en-global/DSM/help/SMBService/smbservice_smb_settings)
- [Set up FTP on Synology](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_setting) 
- [Set up SFTP on Synology](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_sftp) 

:::important Port Forwarding & DDNS Configuration

If your NAS is behind a router or operating in a NAT (Network Address Translation) environment, you must **configure port forwarding** on your router after enabling WebDAV, SMB, FTP, or SFTP in DSM.

📘 Learn more: [Synology Port Forwarding Guide](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id5)

Additionally, to access your NAS over the internet using **domain-based access instead of IP address**, you can configure Synology’s **DDNS (Dynamic DNS)** service.

🌐 Learn more: [Synology DDNS Setup Guide](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id3)

:::


## **🔗 Step 2: Add Synology NAS as a Remote**

After selecting your NAS and connection method, RcloneView will automatically guide you through the **`+ New Remote`** wizard:

- **Provider** is automatically selected based on your chosen connection method (e.g., WebDAV, SMB, SFTP).
- **Remote Name** is auto-filled (e.g., `Synology-28`) — but you can change it if you'd like.
- **URL & Port**:  
  - For **WebDAV**, enter the full URL (e.g., `https://abc.synology.me:5006`)  
  - For **SMB / FTP / SFTP**, enter the **host** (e.g., `192.168.1.100`) and appropriate **port**:
    - `445` for SMB  
    - `21` for FTP  
    - `22` for SFTP
- **Username and Password**: Enter the NAS account credentials you use to access shared folders.

<div class="img-grid-3">
<img src="/support/images/en/tutorials/add-synology-webdav-remote.png" alt="add synology webdav remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-smb-remote.png" alt="add synology smb remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-sftp-remote.png" alt="add synology sftp remote" class="img-medium img-center" />
</div>

📌 **Need more help with each method?**  
Here are detailed setup guides:

- 👉 [How to Add SFTP Remote](/support/howto/remote-storage-connection-settings/sftp)
- 👉 [How to Add WebDAV Remote](/support/howto/remote-storage-connection-settings/webdav)



✅ Once added, your NAS remote will appear in the Remote List.  
You can then open it in the **Explorer** panel to browse files or start transfers.

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## **💽 Step 2.5: Mount NAS as a Local Drive (Explorer/Finder)**

Mount any NAS folder as a local drive on Windows (e.g., `W:`) or as a location in macOS Finder. Use the Mount button in the Explorer toolbar.

### How to Mount

1. In RcloneView **Browse/Explorer**, open your NAS remote and navigate to the folder you want to mount.
2. Click the **Mount (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />)** icon on the top toolbar.
3. Configure options:
   - Windows: choose a drive letter (Auto or pick one)
   - macOS: confirm the mount folder name (default like `~/homefolder/<Remote name>`),
4. Click **Save and mount**. The folder appears as a local disk:
   - Windows: under “This PC”, e.g., `synology-28-webdav … (W:)`
   - macOS: under Finder “Locations”

<img src="/support/images/en/tutorials/mount-synology-nas-as-local-drive.png" alt="mount synology nas as local drive" class="img-medium img-center" />
                
:::tip Unmount
To unmount, click **Unmount** in RcloneView or eject the drive from the OS.
:::

:::note Prerequisites
Mounting via `rclone mount` may require an OS filesystem driver. If not installed, follow the links below:
- Windows: [WinFsp](https://winfsp.dev/)
- macOS: [macFUSE](https://osxfuse.github.io/)

For performance, RcloneView enables a **VFS cache** during heavy operations. Initial metadata load may take a moment depending on network conditions.
:::

For full details and additional methods, see:

- [Method 1: Mount from Remote Explorer](/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- [Method 2: Mount via Mount Manager](/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)
- [View and Manage Mounted Drives](/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)
- [Quick Mount from System Tray](/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)

## **🚚 Step 3: Transfer or Sync Files**

  
Once your NAS is connected as a Remote, RcloneView gives you **4 powerful ways to manage files** between it and your cloud storage.

  
### **🖱️ Method 1: Drag & Drop**

1. Open the **Browse** tab.
    
2. Load your **NAS** remote in one pane, and your cloud remote (e.g. Google Drive) in the other.
    
3. Simply drag files from one pane and drop into the other.
    
4. Transfer starts instantly. You can monitor it in the **Transfer Logs** tab.
    
<img src="/support/images/en/tutorials/synology-nas-to-google-drag-and-drop.png" alt="synology nas to google drag and drop" class="img-medium img-center" />

  👉 Learn more: [Browse Remote Storage](/support/howto/rcloneview-basic/browse-and-manage-remote-storage)


### **🔍 Method 2: Compare Folder Contents**

1. Open both NAS and cloud folders in the Explorer panes.
    
2. Click **Compare** on the **Home** tab in the top menu.
    
3. RcloneView will highlight:
    
    - Files only on one side
        
    - Files with size or checksum conflicts
        
    - Identical files
        
    
4. Use **Copy →**, **← Copy**, or **Delete** to act on files.
    
<img src="/support/images/en/tutorials/compare-synology-nas-and-google-drive.png" alt="compare synology nas and google drive" class="img-medium img-center" />

  👉 Learn more: [Compare Folders](/support/howto/rcloneview-basic/compare-folder-contents)


### **🔁 Method 3: Sync or One-Time Job**

1. Select source (NAS) and destination (cloud).
    
2. Click **Sync** to open sync options.
    
3. Choose direction, dry-run, filters, etc.
    
4. Run the sync immediately or click **Save to Jobs**.
    

  <img src="/support/images/en/tutorials/sync-job-synology-to-google-drive.png" alt="sync job synology to google drive" class="img-medium img-center" />
  

👉 Learn more:

- [Synchronize Remote Storages](/support/howto/rcloneview-basic/synchronize-remote-storages)
    
- [Create Sync Jobs](/support/howto/rcloneview-basic/create-sync-jobs)
    


### **⏰ Method 4: Schedule a Recurring Job**

1. Go to **Job Manager** → click **Add Job**.
    
2. Select your NAS and cloud folders.
    
3. Define schedule (daily, weekly, cron).
    
4. Save and enable the job.
    

  ✅ Jobs will run automatically in background at the scheduled time.
 

👉 Learn more: [Job Scheduling and Execution](/support/howto/rcloneview-advanced/job-scheduling-and-execution)



## **🧾 Summary**

  

With RcloneView’s Synology NAS integration, you can:

- Detect and connect to NAS without technical setup
    
- Use SMB, SFTP, FTP, or WebDAV easily
    
- Transfer, sync, or schedule backup jobs to any cloud
    
  
No command line. No scripts. Just fast, powerful, and flexible cloud file management.

  
## **🔗 Related Guides**

- [How to Add SFTP Remote](/support/howto/remote-storage-connection-settings/sftp)
- [How to Add WebDAV Remote](/support/howto/remote-storage-connection-settings/webdav)
- [Compare Folder Contents](/support/howto/rcloneview-basic/compare-folder-contents)
- [Browse & Manage Remote Storage](/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Synchronize Remote Storages](/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/support/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/support/howto/rcloneview-basic/execute-manage-job)
- [Job Scheduling and Execution](/support/howto/rcloneview-advanced/job-scheduling-and-execution)

🧠 **Start connecting your NAS to the cloud today with RcloneView.**

<CloudSupportGrid />
