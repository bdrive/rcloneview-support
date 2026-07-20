---
sidebar_position: 2
description: Learn how to automatically execute sync jobs in RcloneView using flexible scheduling options. Requires a Plus license.
keywords:
  - rcloneview
  - job scheduling
  - sync automation
  - scheduled sync
  - rclone
  - job manager
  - cloud sync
  - job scheduler
  - rclone automation
  - crontab
  - plus license
  - recurring sync
tags:
  - RcloneView
  - Job-Manager
  - Scheduling
  - Sync
  - PLUS-Feature
  - automation
date: 2025-05-23
author: Jay
---
# Job scheduling and Automated Execution

Job Scheduling allows you to run Sync Jobs automatically at specific times and intervals.


:::important YOU NEED PLUS LICENSE TO SCHEDULE JOBS
You will need to purchase a [**PLUS license**](https://rcloneview.com/src/pricing.html) to enable this functionality.
:::


## Set Up Job Scheduling

You can configure scheduling when:

- Creating a new job ([Step 4: Scheduling](/howto/rcloneview-basic/create-sync-jobs#step4-scheduling-available-with-plus-license))
- Editing an existing job to add a schedule

## Add or Edit a Job to Configure Scheduling


To open the **`Job Manager`**, click the toolbar icon in the Home menu.  
Then, click either **`Add Job`** or **`Edit Job`**, and go to **Step 4: Scheduling**.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-medium img-center" />
### **How to Schedule a Job**

1. Check the box labeled **`Run whenever time units ~`** to enable scheduling.
2. Set the desired repeat schedule using the Time and Date fields.
3. Click **`Simulate`** to preview when the job will run.
4. After confirming the schedule is correct, click **`Save`**.

  Once saved, click the calendar icon <img src="/support/icons/calendar-icon.png" alt="calendar icon" class="inline-icon" /> or  the **scheduled date** under **`Upcoming Schedule`** to visually review the configured execution times.

<img src="/support/images/en/howto/rcloneview-advanced/verify-job-schedule.png" alt="verify job schedule" class="img-medium img-center" />

<details>
<summary>Understanding Time and Date fields</summary>

Understanding Time and Date fields

**The schedule configuration supports Crontab-style values**, allowing for precise and flexible scheduling to meet a wide range of user needs.

| Field Name   | Allowed Values | Description                             |
| ------------ | -------------- | --------------------------------------- |
| Minute       | 0-59           | Minute of the hour                      |
| Hour         | 0-23           | Hour of the day                         |
| Day of Week  | 0-6            | 0 = Sunday, 1 = Monday, …, 6 = Saturday |
| Day of Month | 1-31           | Day of the month                                        |
| Month        | 1-12           | 1 is January, 2 if February, and so on. |

**Accepted Formats:**

- **Empty value** : Matches every unit (e.g., every minute if Minutes is blank).
- **n1, n2, ...** : List values (e.g., 1,3,5 for Monday, Wednesday, Friday).
- **n1-n2** : Range of values (e.g., 0-2 means 0, 1, 2).
- **n1-n2/n3**: Range with step (e.g., 6-12/3 means 6, 9, 12).

The fields — **Minute**, **Hour**, **Day of Week**, **Day of Month**, and **Month** — work together using a logical **AND** operation. This means the job will run only when **all** conditions are met.

📌 Example: **Running a sync job at 1:30 AM on the first Sunday of every month**. 
To achieve this schedule, configure the following fields:

- **Time (1:30 AM):**
    - **Minute:** 30
    - **Hour:** 1
    
- **Date (first Sunday of each month):**
    - **Day of Month:** 1-7 — matches the first seven days of the month
    - **Day of Week:** 0 — where 0 represents Sunday
    - **Month:** _Leave blank_ — applies to all months

✅ This combination ensures the job runs **only when the date is within the first week** and **falls on a Sunday**, effectively scheduling it for the first Sunday of each month at 1:30 AM.

<img src="/support/images/en/howto/rcloneview-advanced/example-of-job-schedule.png" alt="example of job schedule" class="img-medium img-center" />

</details>


:::caution RcloneView Must Be Running for Scheduled Jobs
For scheduled jobs to execute properly, **RcloneView must be running** in the background.  
If your job is configured to use an external `rclone` engine, ensure that the external `rclone` instance is also active and running at the scheduled time.  
:::

## Check Job Scheduling Results


### **View Execution History in the Job Manager**

  
You can verify both the most recent execution time (`Last execution`) and the next scheduled run (`Upcoming Schedule`) in the **Job Manager** window.

<img src="/support/images/en/howto/rcloneview-advanced/open-job-schedule-history.png" alt="open job schedule history" class="img-medium img-center" />
To view details of execution history of the job:

- Open the **Job Manager**.
- Click the **history icon** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" />to open the job execution history for the selected job.
  

In the **`Execution Type`** column, entries marked as `Scheduled` indicate that the job was triggered automatically by the scheduler.

<img src="/support/images/en/howto/rcloneview-advanced/view-history-of-scheduled-job.png" alt="view history of scheduled job" class="img-medium img-center" />


:::info Verify the Logs for Multiple Destinations  
If your job includes multiple destination remotes, click on each destination tab individually in the History view to review the log details for each target.
:::


### Completion notification alarm (Windows)

After the job is complete, a **notification popup** will appear in the Windows system tray, showing a summary of the sync operation.

  - You can click **`See details`** to view a full breakdown of the results.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip See the alarm messages on Windows notification
If you miss the popup, you can still check the sync alert by clicking the **notification icon** in the **Windows system tray**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::