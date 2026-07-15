---
sidebar_position: 7
description: Learn how to run, monitor, and manage sync jobs using the RcloneView Job Manager, including dry run, job history, and notifications.
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - job manager
  - run sync job
  - dry run
  - job execution
  - Job Monitor
  - job history
  - scheduled jobs
  - rclone automation
tags:
  - RcloneView
  - Cloud
  - Sync
  - Job-Management
  - cloud-storage
  - job-history
  - job-monitoring
  - Remote-storage-managent
date: 2025-06-16
author: Jay
---
# Execute and Manage Job


Click the `Job Manager` toolbar from the main menu to open the Job Manager.  

Select the job you want to run, then click the **`Run`** button to execute it.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />


<details>
<summary>Field Descriptions </summary>

- `Job Name` : Name of the job. - > The icon visually represents the sync direction from source to destination. When the job involves multiple destinations, separate icons are shown for each target remote.  
- `Source` : The folder in the remote storage that serves as the source.  
- `Destination` : The folder in the remote storage that acts as the destination.   
- `Upcoming Schedule` : Shows the next scheduled time this job will run. If no schedule is set, it displays as **Unscheduled**.    
  ⚠️ _This feature is available only with a PLUS license._ See:: [How to configure Job Scheduling](/howto/rcloneview-advanced/job-scheduling-and-execution). 
- `Last execution` : The most recent time this job was automatically executed via the schedule.   
- `Created At` : The date and time the job was created.  
- `History` : Opens the execution history for this job. Clicking it will open the full history window.  

</details>

<details>
<summary>Toolbars for managing Jobs</summary>

Toolbars for managing Jobs

After selecting a job, you can manage it using the toolbar options below:

- **`Add Job`** : Creates and adds a new job. [See: How to create Job](/howto/rcloneview-basic/create-sync-jobs)  
- **`Edit Job`** : Edits the selected job.
- **`Duplicate`** : Creates a copy of the selected job. 
  The duplicated job is automatically named with a suffix such as (1), (2), …, (n).
  You can then use Edit Job to quickly customize it as a new job based on the original.  
- **`Delete`** : Deletes the selected job.

</details>


:::tip 💡 Export and Import Jobs
Click the **settings icon** <img src="/support/icons/setting-icon.png" alt="setting icon" class="inline-icon" /> at the top right of the **Job Manager** to export your current jobs or import previously saved ones. Jobs are exported and stored in a file named `rclone_jobs_~.json`    

:::
### Simulate: Run a dry run (optional)

You can run a **Dry run** to simulate the sync operation without making any actual changes.

Click the **`Dry run`** button to simulate the sync without making changes.

- This preview shows which files will be copied to the **Destination** and which files will be deleted.
- Click **`See details`** to view a full list of operations that would occur (e.g., copy, create, delete) in the destination.
- For jobs with multiple destinations, results are grouped by each destination, with separate **`See details`** for each.

<img src="/support/images/en/howto/rcloneview-basic/job-dry-run-result.png" alt="job dry run result" class="img-medium img-center" />

## Monitor Job run results

You can check the progress and results of sync operations in real time.

### Transfer status (in progress)

- During sync, open the **`Transfer`** tab to view real-time progress of each file.
- Click the **+** icon to expand and monitor individual file transfers.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### Completed jobs (after execution job)

- Once the sync is finished, go to the **`Completed`** tab to view the results.
- Click the **+** icon to see file-level details of each completed job.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip Quickly open synced remotes
In the **`Completed`** tab, you can double-click any completed job to open both the source and destination folders in the Explorer pane.  
This makes it easy to review the synced folders immediately.
:::

### Completion notification alarm (Windows)

After the sync is complete, a notification popup will appear in the Windows system tray, showing a summary of the sync operation.

  - You can click **`See details`** to view a full breakdown of the results.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip See the alarm messages on Windows notification
If you miss the popup, you can still check the sync alert by clicking the **notification icon** in the **Windows system tray**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::


## View Job History


From the **`Job Manage`r**, click the **`History`** icon <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> next to a job to view its execution log.

If a job was run with multiple destinations, each destination will be displayed as a separate tab in the history.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-medium img-center" />

<details>
<summary>Field Descriptions</summary>

Field Descriptions


- `Execution Type` : 
	- Manual :  Manually run by the user
	- Scheduled : -Automatically run by RcloneView 
- `Start Time` : When the job started   
- `Time Spent` : Total duration of the sync  
- `Status` : Execution result of the job  
	- Completed : Success   
	- Errored : Failed, with error messages available. 
- `Total Size` : Total data size transferred
- `Speed` : Average transfer speed. 
- `Files` : Number of transferred files. 
- `Job Type` : Currently Sync, future updates may include Copy, Purge, or Batch jobs   
- `Delete` : Removes the selected history entry. 

</details>


<details>
<summary>Toolbars for Filtering & Deleting History</summary>

Toolbars for Filtering & Deleting History

When a large number of history records accumulate, you can filter or delete them using the toolbar options.

- `From ~ To` : Select a custom date range using the calendar to display history within that period.  
- `Today` : Shows only the history entries from today.  
- `Yesterday` : Displays history entries from exactly one day ago.  
- `Last week` : Displays history from the past 7 days.
- `Last month` : Displays history from the past 30 days.
- `Delete all` : - Permanently deletes all history records.   ⚠️ _This action cannot be undone. Please proceed with caution._

</details>




