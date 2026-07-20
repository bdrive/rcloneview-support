---
sidebar_position: 2
description: Learn how to configure Google Shared Drive as a remote in Rclone using the CLI on Windows and manage it through RcloneView.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - google drive
  - shared drive
  - team drive
  - rclone cli
  - remote storage
  - cloud storage
  - windows
  - Remote Connection
tags:
  - google-drive
  - shared-drive
  - team-drive
  - cli
  - cloud-storage
  - Remote-Storage
  - remote-connection
date: 2025-05-22
author: Jay
---
# Google Shared Drive (formerly Team Drive)

## How to Add Google Shared Drive using Rclone CLI (Windows)

### Step 1: Open Command Prompt
  
- Press Win + R, type cmd, and press Enter.  

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />
#### Step 2: Start Rclone Configuration

Open the Command Prompt and initiate the Rclone configuration process:

```windows
rclone config
```

You’ll see a menu:

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

Type n and press Enter to create a new remote.

### Step 3: Set Up the Google Shared Drive

Follow these prompts:

- **Name**: Assign a name to your new remote (e.g., mySharedDrive).

```windows
Enter name for new remote.
name> mySharedDrive
```

- **Storage**: Select Google Drive by typing `drive` or its corresponding number (usually `20`) from the list of storage options.

```
Storage> 20
```

- **client_id and client_secret**: Leave these blank unless you have specific credentials.

```
client_id> (press Enter)
client_secret> (press Enter)
```

- **Scope**: Enter `1` to grant full access to your Google Drive.

```
scope> 1
```

- **Service Account Credentials**: Leave this blank unless specifically needed.
```
service_account_file> (press Enter)
```

- **Advanced Config**: Skip advanced configuration unless required.

```
Edit advanced config? (y/n)
y/n> n
```

- **Auto Config**: Use auto configuration for easier setup.

```
If not sure try Y. If Y failed, try N.
y) Yes (default)
n) No
y/n> y
```

A browser window will open automatically. [Log in with your Google account and grant the requested permissions.](/howto/#step-3-connecting-your-remote-storage-googledrive-single-sign-on)


### Step 4: Configure Shared Drive

After completing Google authentication:

- You’ll see a prompt: "Configure this as a Shared Drive?" Type `y` to confirm.

```
Configure this as a Shared Drive (Team Drive)?
y) Yes
n) No (default)
y/n> y
```

- Rclone will show a list of your Shared Drives. Enter the corresponding number of the Shared Drive you want to add.

```
Choose a number from below, or type in your own value of type string.
Press Enter for the default (0APnCeqmeA1p1Uk9PVA).
 1 / Team shared drive
   \ (0APnCeqmeA1p1Uk9PVA)
config_team_drive> 1
```

- Review the displayed configuration details and confirm.

```
Keep this "mySharedDrive" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

- Exit the Rclone configuration interface.

```
Current remotes:

Name                 Type
====                 ====
mySharedDrive        drive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```

**Done!** Your Google Shared Drive is now successfully configured and ready for use with Rclone.

### Step 5: Test the Connection

Verify your configuration by listing the contents of your Google Shared Drive:

```
rclone ls mySharedDrive:
```

You should see a list of files from your Shared Drive if everything is correctly set up.

#### Step 5: Verify the Added iCloud Drive in RcloneView

Launch **RcloneView**.

1. From the menu bar, click **Remote Manager** under the **Remote** tab.
2. Verify that your **Google Shared Drive** appears in the **Remote Manager** window.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-google-shared-drive.png" alt="add google shared drive - team drive" class="img-medium img-center" />
</div>
