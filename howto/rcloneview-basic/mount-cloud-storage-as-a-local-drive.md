---
sidebar_position: 8
description: Learn how to mount remote cloud storage as a virtual drive using RcloneView, including configuration via Remote Explorer, Mount Manager, and system tray access.
keywords:
  - rcloneview
  - rclone
  - mount
  - mount manager
  - cloud drive
  - virtual drive
  - rclone mount
  - local drive
  - remote explorer
  - remote storage management
tags:
  - RcloneView
  - mount
  - local-drive
  - virtual-drive
  - cloud-storage
  - Remote-storage-managent
date: 2025-06-19
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Mount Cloud Storage as a Local Drive

:::important Preconditons for Mounting
Before mounting, make sure the target remote has already been added to RcloneView.   
See: [Add a New Remote](/howto/rcloneview-basic/remote-manager#add-a-new-remote)
:::

## Mount Remote Storage in RcloneView

RcloneView allows you to mount remote storage as a virtual drive for easier access and management.  
This guide explains how to mount remote storage using two methods and manage mount configurations.

### Method 1: Mount from Remote Explorer

You can mount a remote folder directly while browsing its contents.

1. In the **Remote Explorer** pane, select the remote folder you want to mount. 
2. Click the **Mount icon** (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />) at the top corner of the Remote Explorer pane.
3. The **Mount** dialog will open with the selected remote path automatically filled in.
4. Configure the mount settings:
   - **Target**: Choose `Auto` or manually assign a driver letter manually from the list.
   - (optional) check "Mount to local path" to specify a custom mount location.
   - Enable **Auto mount** to automatically mount this remote when RcloneView starts.
5. Click **Save and mount** to apply the settings and mount immediately.
   - Alternatively, click **Save** to just save the mount configuration and mount it later.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-medium img-center" />

<details>
<summary>Advanced Mount Options</summary>

Advanced Mount Options

| Field                        | Description                                                                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Volume name**    | (Optional) Set a custom name for the mounted volume. This may be shown in your file manager or system UI.                                                                                                                                                        |
| **Mount type**     | Select the mount backend: <br /> - `cmount` (default for Windows):  Uses Rclone's internal C-based FUSE-like mount engine with high compatibility  <br />- `nfsmount` (alternative, mostly for Linux/macOS environments).  Uses the NFS protocol to mount the remote |
| **Network drive**  | Check this box to mark the mount as a network drive. This may affect how the OS treats the mounted folder.                                                                                                                                                       |
| **Read only**      | Enables read-only mode, preventing write operations to the remote.                                                                                                                                                                                               |
| **Allow other**    | Allow access to the mounted filesystem by users other than the one who mounted it (mostly used in Linux).                                                                                                                                                        |
| **Cache mode**     | Controls the caching behavior. Options include:  <br />- `off`  <br />- `minimal`  <br />- `writes`  <br />- `full`  <br />The default `writes` mode caches write operations.                                                                                              |
| **Cache max size** | Maximum allowed cache size in bytes.  <br />Example: 1073741824 = 1GB.  <br />Set to `-1` for no limit.                                                                                                                                                            |
| **Cache max age**  | How long cached data can stay valid.  Time unit is in **nanoseconds**.  Example: 3600000000000 = 1 hour.                                                                                                                                               |
| **Dir cache time** | Directory cache validity time.  Time unit is in **nanoseconds**.  Example: 300000000000 = 5 minutes.                                                                                                                                                   |

💡 Use these options only if you are familiar with mount settings. The default values work well for most users.

</details>
### Method 2: Mount via Mount Manager

You can also configure and mount storage using the **Mount Manager**.

1. Click the **`Mount Manager`** button under the **`Remote`** tab in the top menu bar.  
2. Click **`New mount`** to create a new mount configuration.  
3. Select the remote and optionally specify a subdirectory to mount.  
4. Configure the mount options:  
   - **Target**: Choose `Auto` or manually assign a drive letter from the list.  
   - (Optional) Enable **Mount to local path** to specify a custom mount path.  
   - Enable **Auto mount** to automatically mount this remote when RcloneView starts.  
1. Click **`Save`** to store the mount configuration without mounting immediately.  
   - To save and mount the remote right away, click **`Save and mount`**.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-medium img-center" />
## View and Manage Mounted Drives

To view or manage your mount configurations, open the **Mount Manager** dialog by clicking the **`Mount Manager`** button under the **`Remote`** tab in the main menu.

All saved mount configurations will be listed in the Mount Manager window.  
Each configuration is categorized based on its current **status**:
- **Mounted**: The remote is currently mounted and active.
- **Unmounted**: The mount is saved but not currently mounted.
  <img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="mount manager status" class="img-medium img-center" />
You can perform the following actions depending on the status:


<Tabs>
<TabItem value="Status: mounted" label="🟢 Status: mounted">

- <img src="/support/icons/unmount-icon.png" alt="unmount icon" class="inline-icon" /> : **Unmount** — Click to unmount the currently mounted remote.
- <img src="/support/icons/disabled-edit-mount.png" alt="disabled edit mount" class="inline-icon" /> : (Disabled)Edit
- <img src="/support/icons/open-mount-folder.png" alt="open mount folder" class="inline-icon" /> : **Open** — Click to open the mounted folder in your file explorer.
- <img src="/support/icons/disabled-delete-mount-configuration.png" alt="disabled delete mount configuration" class="inline-icon" /> : (Disabled)Delete
</TabItem>



<TabItem value="Status: Configured" label="🟠 Status: Unmounted">

- <img src="/support/icons/mount-run-icon.png" alt="mount run icon" class="inline-icon" /> : **Mount** — Click to manually mount the selected remote.
- <img src="/support/icons/edit-mount-configuration.png" alt="edit mount configuration" class="inline-icon" /> : **Edit** — Click to modify the mount settings.
- <img src="/support/icons/disabled-open-mount-folder.png" alt="disabled open mount folder" class="inline-icon" /> : (Disabled)Open
- <img src="/support/icons/delete-mount-configuration.png" alt="delete mount configuration" class="inline-icon" /> : **Delete** — Click to remove the mount configuration.
</TabItem>

</Tabs>


<br />
<br />

:::tip Quick Mount from System Tray
You can also manage mounts quickly via the system tray icon.

1. Right-click the **RcloneView icon** in the system tray.
2. Hover over the **Mount** menu.
3. You can:
   - View currently mounted drives and mount or unmount the drive
   - Unmount all
   - Start a new mount
<img src="/support/images/en/howto/rcloneview-basic/mount-from-system-tray.png" alt="mount from system tray" class="img-small img-left" />

:::


