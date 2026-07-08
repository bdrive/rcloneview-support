---
sidebar_position: 2
description: Learn how to use RcloneView with Wasabi to browse, back up, sync, and migrate data between local storage and other clouds.
keywords:
  - rcloneview
  - wasabi
  - s3-compatible
  - cloud backup
  - cloud sync
  - cloud migration
  - file synchronization
  - gui
  - rclone gui
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - cloud-backup
  - Tutorial
  - wasabi
date: 2025-02-20
author: Jay
slug: /
---

# Use Wasabi with RcloneView (S3-Compatible)

RcloneView is a desktop application that gives you a visual, two‑pane Explorer for **rclone**. It lets you copy, sync, and migrate files between **Wasabi** and other cloud or local storage, without using the command line.

With RcloneView you can:

- Browse your Wasabi buckets like local folders  
- Drag & drop files between **local disk ↔ Wasabi** or **Wasabi ↔ other clouds**  
- Run one‑time transfers or schedule recurring sync jobs  

If you prefer to see it in action first, you can watch a short demo:

<iframe
  src="https://www.youtube.com/embed/yKc6qS2DG2A"
  title="Wasabi + RcloneView Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
  style={{aspectRatio: '16 / 9', width: '100%', maxWidth: '960px', height: 'auto', display: 'block', margin: '0 auto', border: 0}}
></iframe>

<br />

> For more about RcloneView, visit the official site: [https://rcloneview.com](https://rcloneview.com)  


---

## 1. Download and install RcloneView

RcloneView is available for **Windows, macOS, and Linux**.

1. Go to the download page: [https://rcloneview.com/src/download](https://rcloneview.com/src/download).  
2. Choose the installer for your OS (Windows, macOS, or Linux).  
3. Install and launch **RcloneView**.

---

## 2. Add Wasabi as a remote in RcloneView

RcloneView treats Wasabi as an **S3‑compatible** backend. You create a remote once and then reuse it for browsing, copy, sync, and scheduled jobs.

### 2.1 Prerequisites – Wasabi access keys and endpoint

To connect RcloneView to Wasabi, you need:

- **Access Key** / **Secret Key**  
- **Region / Endpoint URL** (for example region `ap-northeast-2` and endpoint `s3.ap-northeast-2.wasabisys.com`)  

Please follow Wasabi’s official documentation to create an access key and find your endpoint:

- Wasabi docs: [https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- Example: “[Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key)” or “[Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket)” (search within the Wasabi docs portal).

Once you have your **Access Key**, **Secret Key**, and **Endpoint**, return to RcloneView.

### 2.2 Open the “New Remote” wizard

1. Launch **RcloneView**.  
2. From the top menu, click **`Remote` → `+ New Remote`**.  
   - Or click the **`+`** tab in the Explorer pane and choose **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 Configure Wasabi as an S3‑compatible provider

1. In the **New Remote** dialog, search for `Wasabi`.  
2. Select the **Wasabi** provider tile.  
3. Configure the connection:
   - **Remote name**: enter a clear name, such as `MyWasabi`.  
   - **Access Key ID**: paste your Wasabi access key.  
   - **Secret Access Key**: paste your Wasabi secret key.  
   - **Endpoint**: enter the Wasabi S3 endpoint (for example `s3.ap-northeast-2.wasabisys.com`).  
4. Click **Add Remote**.

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 Verify the Wasabi remote

1. Open **`Remote → Remote Manager`**.  
2. Confirm that your Wasabi remote (for example `MyWasabi`) is listed and reachable.

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

For more details, see the general S3‑compatible guide:  
- [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)

---

## 3. Browse folders in Wasabi

Once the remote is created, you can browse buckets and objects inside RcloneView’s Explorer.

1. In the Explorer pane, click the **`+`** tab.  
2. In the “Open Remote” list, choose your **Wasabi** remote (e.g., `MyWasabi`).  
3. RcloneView opens the remote in a tab where buckets appear like top‑level folders.  
4. Double‑click a bucket to explore its contents.

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

For more general navigation tips, refer to:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. Manage files between Local Disk and Wasabi

This section shows practical ways to move data between your local computer and Wasabi using RcloneView.

You can open:

- **Left pane**: local disk (for example `C:\` or a specific folder)  
- **Right pane**: your Wasabi remote bucket  

Then use drag & drop, folder comparison, or sync jobs depending on your workflow.

---

### 4.1 Drag & drop between Local and Wasabi

Drag & drop is the simplest way to copy files.

1. In the left pane, open your **local folder** (e.g., `D:\Media`).  
2. In the right pane, open your **Wasabi bucket/folder**.  
3. Select files or folders on the left.  
4. Drag them to the right pane and drop into the desired location.  
5. RcloneView starts a transfer job; progress appears in the **Transfer** tab.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
For multi‑selection, right‑click actions, and more, see:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 Compare folders and copy changed files

If you want to see **differences** before copying, use the **Compare** function.

Typical use case: compare a local backup folder with a Wasabi backup folder.

1. In the left pane, open the **source folder** (e.g., local or another cloud).  
2. In the right pane, open the **Wasabi destination folder**.  
3. Click **`Compare`** in the top **Home** menu.  
4. RcloneView marks:
   - Files only on the left (source only)  
   - Files only on the right (destination only)  
   - Changed files (size, timestamp, or checksum differs)  
5. Select the items you want to move and click **Copy →** (or **← Copy** for the reverse direction).

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
Learn more:  
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 Sync jobs between Local Disk and Wasabi

For repeatable backups or mirroring, use **Sync**. Sync makes the destination match the source.

There are three common patterns:

- **Instant Sync** (run once immediately)  
- **Saved Sync Job** (re‑run when needed)  
- **Scheduled Sync Job** (run automatically on a schedule)  

> ⚠️ Sync updates the destination to match the source; files that only exist in the destination can be deleted. Review the sync settings carefully before running.

#### 4.3.1 Instant Sync (one‑time)

1. Open the **source folder** in the left pane (for example, a local folder).  
2. Open the **destination Wasabi folder** in the right pane.  
3. Click **`Sync`** on the **Home** menu.  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

Then, in the **Sync** dialog:

1. In **Configure Storage**, confirm the source and destination.  
2. Optionally adjust **Advanced Settings** or **Filtering Settings**.  
3. Run a **Dry Run** first if you want to preview changes.  
4. Click **Run** to start the sync.

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
After running Sync, you can monitor the progress of transferring file in real-time.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

Reference:  
- [Synchronize Remote Storages Instantly](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 Save a Sync Job for re‑use

If you will run the same local → Wasabi backup regularly:  
Configure a sync as above (source on the left, Wasabi destination on the right).    

1. In the Sync dialog, choose **Save to Jobs** instead of running immediately.  
2. Give the job a descriptive name like `SyncLocalToWasabi`.  
3. Later, open **Job Manager** and run the job manually whenever you need an updated backup.

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
On supported platforms (such as Windows), RcloneView can show a system notification when the job finishes.

Reference:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 Schedule automatic Wasabi backups (Job Scheduling)

To fully automate backups to Wasabi, schedule your sync job.

> 📌 **Job scheduling is a PLUS feature.** You need a [PLUS license](https://rcloneview.com/src/pricing.html) to enable scheduling.

Open **Job Manager** from the toolbar.    
1. Select your Wasabi sync job (for example `LocalToWasabi_DailyBackup`) and click **Edit Job**, or create a new job from your current Explorer selection.  
2. Go to **Step 4: Scheduling**.  
3. Enable **Run whenever time units ~** and set the schedule (for example, daily at 01:00).  
4. Use **Simulate** to preview upcoming run times.  
5. Save the job and keep RcloneView running; the job will execute automatically.

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


For deeper details:  
- [Job Scheduling and Automated Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 Use Mount to work with Wasabi in Windows Explorer

You can mount a Wasabi bucket as a **virtual drive or folder** on your system and then use Windows Explorer (or Finder on macOS) as usual.

Typical flow:

Make sure your Wasabi remote is configured and working.  
1. Choose the Wasabi folder you want to mount.  
2. Click the **Mount** icon in the upper‑right corner of the RcloneView Explorer.  
3. Click the **Save and mount** button to start the mount.  
4. After a few moments, a new drive or folder appears in your OS. Browsing that path reads and writes data directly from Wasabi through RcloneView/rclone.

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
More information:  
- [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. Where to get help

- RcloneView documentation and how‑to guides: [https://rcloneview.com/support](https://rcloneview.com/support)  
- Wasabi Documentation Portal: [https://docs.wasabi.com](https://docs.wasabi.com)  

By combining Wasabi’s S3‑compatible object storage with RcloneView’s visual job management, you can build reliable backup, sync, and migration workflows without having to learn rclone command‑line syntax.
