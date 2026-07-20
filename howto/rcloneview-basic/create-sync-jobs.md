---
sidebar_position: 6
description: Learn how to create and manage sync jobs in RcloneView for repeated or scheduled synchronization of remote folders.
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync job
  - job manager
  - scheduled sync
  - create sync
  - rclone automation
  - plus license
  - cloud storage
  - remote storage
tags:
  - RcloneView
  - Cloud
  - Sync
  - job-scheduler
  - create-job
  - Job-Management
date: 2025-06-04
author: Jay
---
# Create Sync jobs

You can create frequently used Sync tasks as **Jobs**, allowing you to run them repeatedly with just a few clicks.  

There are two main ways to create a Job:  
- Create a Job directly from a Sync task (Instant Sync). 
- Use the **Job Manager** to configure and save Jobs manually. 

## Create a Job from Instant Sync

You can create a Job by configuring your Sync task and clicking **Save to Jobs** in the Sync window.  

👉 See:  [Instantly Create a Job from Sync](/howto/rcloneview-basic/synchronize-remote-storages#save-sync-operation-as-a-job)

You can view and run saved jobs by clicking the **`Job Manager`** toolbar in the Home menu.

## Create a Job via Job Manager


### (Optional) Select Source and Destination Folders

You can optionally specify the source and destination folders before creating a Job using the **Job Manager**.  

This is helpful if you want to preassign folders when adding a new job later.  

Alternatively, you can configure the source and destination folders directly within the **Add Job** window in the **Job Manager**.  

To open the Job Manager, click the **Job Manager** button from the Home toolbar.

<img src="/support/images/en/howto/rcloneview-basic/create-job-using-job-manager.png" alt="create job using job manager" class="img-medium img-center" />

### Add a New Job

To add a new job, click **`Add Job`** in the **Job Manager**(=`Jobs`) modal window.  

#### Step 0: Open Job Manager and Click `Add Job`

  You will see the following `Jobs` window. Click the **Add Job** button to open the job creation wizard.

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add job in job manager" class="img-medium img-center" />
  The job wizard guides you through three steps:

1. **Configure Storage** – Choose source and destination folders  
2. **Advanced Settings (optional)** – Set sync behavior  
3. **Filtering Settings (optional)** – Define filters for file types or folders
<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="add job configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-advnaced-settings.png" alt="add job advnaced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-filtering-settings.png" alt="add job filtering settings" class="img-medium img-center" />
</div>
#### Step 1: Configure Storage

- In the **`Configure Storage`** step, review the selected source and destination folders.
- Enter **`Job Name`**  ( ❗Allowed characters: `a–z`, `A–Z`, `0–9`, `-`, `_` )
- To sync one source with multiple destinations, click **Add Destination** to add additional remote folders.  
  This allows for **1:N (one-to-many)** synchronization.  
- Make sure all folders are correctly set before clicking **Next**.

:::caution How sync works
RcloneView Sync make source and dest identical.  
This means **`modifying destination only`**.  
- The contents of the **source** folder are mirrored to the **destination**.  
- Any existing files in the destination that do not exist in the source will be **deleted**.  

👍 **Important:** Rclone officially supports **one-directional sync** only.  
⚠️ **Bidirectional sync (=Bidirection)** is available as a **beta feature** and is not officially supported.  It may cause unexpected behavior or errors, so it is **not recommended for production use**.
:::

<details>
<summary>Configure Storage Details</summary>

<img src="/support/images/en/howto/rcloneview-basic/job-config-storage-details.png" alt="job config storage details" class="img-medium img-center" />

1. **`Job Name`**. 
 - ❗Allowed characters: `a–z`, `A–Z`, `0–9`, `-`, `_` 
2. **Select the source folder**.   
 - Click the folder icon in the left pane to choose the source.  
1. **Select the destination folder**. 
- Click the folder icon in the right pane to choose the destination.  
1. **Add additional destinations** (optional). 
- Click the **Add Destination** button to sync to multiple destinations at once.  You can configure **1:N sync** if needed.  
5. **Choose the sync direction**. 
 - **Modifying destination only**: Syncs from source to destination. Updates or deletes destination content to match the source.  
 - **Bidirection** (Beta): Compares both folders and syncs changes in both directions.  
⚠️ This mode may overwrite new files unintentionally, so use with caution.  
6. **Create empty directories (optional)**.   
- If enabled, any source directories that contain no files will be recreated as empty folders in the destination.  

:::caution Using Bidirectional Sync in RcloneView
RcloneView uses `bisync` (a beta command in rclone) to perform bidirectional sync.    
Since this feature is still **experimental**, we recommend reviewing the official [user manual](https://rclone.org/bisync/) — especially the [Limitations](https://rclone.org/bisync/#limitations) section — before enabling it.

Using bisync incorrectly may result in data loss. Please use with caution.
:::


</details>

#### Step 2: Advanced Settings (optional)

  - Advanced Settings include options for:
	  - Transfer performance
	  - Connection method
	  - Error handling behavior

> 💡 We recommend using the default values unless you need custom behavior.

<details>
<summary>Advanced Settings Details</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**Performance :**

1. **`Number of file transfers`**:   
   The number of file transfers to run in parallel. It can sometimes be useful to set this to a smaller number if the remote is giving a lot of timeouts or bigger if you have lots of bandwidth and a fast remote.  
2. **`Number of multi thread transfers`**:  
   When using multi thread transfers this sets the number of streams to use. Set to `0` to disable multi thread transfers (Default 4). When transferring files above 256MB to capable backends, rclone will use multiple threads to transfer the file.  
3. **`Number of equaility checkers`**:  
   checkers do the equality checking of files during a sync. For some storage systems (e.g. S3, Swift, Dropbox) this can take a significant amount of time so they are run in parallel. The default is to run 8 checkers in parallel. However, in case of slow-reacting backends you may need to lower (rather than increase) this default by setting `--checkers` to 4 or less threads.  


**Safety and Integrity :**

5. **` Enable checksum to compare files`** :  
   Normally rclone will look at modification time and size of files to see if they are equal. If you set this flag then rclone will check the file hash and size to determine if files are equal.This is very useful when transferring between remotes which store the same hash type on the object, e.g. Drive and Swift. For details of which remotes support which hash type see the table in the [overview section](https://rclone.org/overview/).  


**Error control :**

5. **`Retry the entire sync if it fails this many times`**:  
   Retry the entire sync if it fails this many times it fails (default 3). Some remotes can be unreliable and a few retries help pick up the files which didn't get transferred because of errors. Disable retries with `1`.  

</details>



#### Step 3: Filtering Settings (optional)

- RcloneView applies basic filters by default for services like Google Docs or Box Docs.
- You can add more file types or folders to exclude from the sync.

<details>
<summary>Filering Settings Details</summary>


<img src="/support/images/en/howto/rcloneview-basic/jobs-filtering-setttings-details.png" alt="jobs filtering setttings details" class="img-medium img-center" />
1. **`Don't sync files over`** :  
   Controls the **maximum file size** allowed for sync.  
   Default unit is MB.  
2. **`Don't sync files older than this`** :    
   Controls the **maximum file age** allowed for sync.  
   This applies to **files only**, not directories.  
   Use the following units:  
   `y` = years, `d` = days, `h` = hours, `m` = minutes, `s` = seconds  (Example: 2y30d12h30m45s)  
3. **`Don't sync folders over this depth`** :   
   If set, Rclone will only sync folders within the specified depth.  
   For example, setting this to `1` will only sync files in the top-level directory.  
   Setting it to `2` will sync files within the first two folder levels, and so on.
4. **Predefined Filters**.   
   You can quickly apply built-in filters for common file types such as:  
   - Music, Video, Image, Document, Google Docs, Box Docs  
     These filters are available as predefined options in the filter list.
1. **Others (= Custom Filters)**.  
   You can define custom rules to exclude or include specific file types, folders, or paths.  
   Here are some common examples:  
   **`.iso`** : Exclude all .iso files.  
   **`/.git/*`** : Exclude only files inside the .git folder in the root, not subfolders.  
   **`/.git/`** :  Exclude the entire .git folder in the root, including everything inside it.   
   **`.git/`** : Exclude all .git folders and everything inside them, regardless of location.   
   
   🔗 For more advanced examples and syntax, refer to the [Rclone Filtering Guide](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>


#### Step4: Scheduling (Available with PLUS License)

Job scheduling allows you to automatically run jobs at specified intervals or times.   

💡 This feature is available exclusively with the [**PLUS license**](https://rcloneview.com/src/pricing.html).  

For more details, refer to [Setting Up a Job Schedule](/howto/rcloneview-advanced/job-scheduling-and-execution).   

Finally, review the job you’ve created in the list to ensure everything is set correctly.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="add job scheduling" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-completed.png" alt="add job completed" class="img-medium img-center" />
</div>

  









