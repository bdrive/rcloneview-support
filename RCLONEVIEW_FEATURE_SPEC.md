# RcloneView Feature Specification

> **Purpose:** Official feature specification for writing RcloneView blog posts. All content verified against source code (`rclone-navigator`) + official documentation (`rcloneview-support/howto`, `docs`).
> **Last Updated:** 2026-04-13
> **App Version:** 1.4.1+1
> **Framework:** Flutter (Dart 3.2.6+)

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [File Explorer](#2-file-explorer)
3. [File Operations](#3-file-operations)
4. [Sync & Job Management](#4-sync--job-management)
5. [Folder Compare](#5-folder-compare)
6. [Mount & Virtual Drive](#6-mount--virtual-drive)
7. [Rclone Terminal](#7-rclone-terminal)
8. [Remote Management](#8-remote-management)
9. [Connection Management](#9-connection-management)
10. [Supported Cloud Providers](#10-supported-cloud-providers)
11. [Virtual Remotes](#11-virtual-remotes)
12. [Settings & Preferences](#12-settings--preferences)
13. [Notification & Remote Control](#13-notification--remote-control)
14. [Multi-Window & System Tray](#14-multi-window--system-tray)
15. [Platform Support](#15-platform-support)
16. [License Structure](#16-license-structure)
17. [Batch Operations (Beta)](#17-batch-operations-beta)

---

## 1. Product Overview

### 1.1 What is RcloneView

RcloneView is a cross-platform GUI client built on rclone. It runs on Windows, macOS, and Linux, managing 90+ cloud storage services from a single interface.

**Architecture:**
- RcloneView communicates with rclone via the rclone RC (Remote Control) API
- Ships with an Embedded Rclone binary — no separate installation required
- Can also connect to external rclone instances (local, remote server, Docker)
- It is an independent GUI frontend that leverages rclone, not a replacement for rclone

**Embedded Rclone:**
- Default API address: `http://127.0.0.1:5582` (localhost loopback)
- Minimum supported rclone version: v1.69.1+
- Option to auto-terminate rclone on app exit
- In-app rclone Self Update capability

### 1.2 Main UI Layout

The RcloneView main screen consists of 4 areas:

**1) Menu Bar (top)**
- **Home tab:** Sync, Compare, Job Manager, New Window buttons
- **Remote tab:** New Remote, Remote Manager, Mount Manager, Job Manager buttons
- **Settings tab:** Connect Manager, General, Layout, View count
- **Help tab:** Check for Updates, Feedback, Homepage, Register License Key

**2) Explorer Panels (center)**
- 1 to 4 panels displayed simultaneously (horizontal/vertical split)
- Each panel: Tab Bar + Breadcrumb Path Bar + Folder Tree + File List
- Panel toolbar: Create Alias (favorite), Mount folder, Edit remote settings, Refresh

**3) Info View (bottom tabs)**
- **Transferring tab:** Monitor active jobs (progress, speed, file count)
- **Terminal tab:** Built-in rclone CLI terminal
- **Log tab:** Timestamped log entries
- **Features tab:** Upcoming features preview

**4) Footer (bottom bar)**
- App version info
- License info (FREE License / PLUS License)
- Rclone connection info (version, server address, OS)

---

## 2. File Explorer

### 2.1 Explorer Components

Each Explorer panel is a file manager for browsing cloud or local storage.

**Tab Bar:**
- Displays the currently connected remote
- Switch between remotes via tabs

**Breadcrumb Path Bar:**
- Shows folder path hierarchically
- Auto-complete suggestions
- Right-click menu: Cut, Copy, Paste, Copy Full Path (with Remote), Select All
- Copy Full Path: Copies in `mygoogledrive:Meet recordings` format for direct rclone CLI use

**Folder Tree:**
- Collapsible left-side folder tree navigator
- Expand/collapse folders to browse hierarchy

**File List:**
- Columns: Name, Type, Modified date, Size
- Thumbnail view support (image file preview grid)
- Footer summary: Total files/folders count and total file size

### 2.2 View Modes

| View Mode | Description |
|-----------|-------------|
| List View | Detailed file information (name, size, date, type) |
| Tree View | Folder hierarchy navigation |
| Thumbnail View | Image file preview grid |

### 2.3 Layout Settings

- **Horizontal split:** Panels arranged side by side
- **Vertical split:** Panels stacked top to bottom
- **Panel count:** 1 to 4 panels simultaneously
- Changed via Settings tab > Layout / View count

---

## 3. File Operations

### 3.1 Basic File Operations

All operations are performed via right-click context menu or keyboard shortcuts.

| Operation | Method | Shortcut | Description |
|-----------|--------|----------|-------------|
| Copy | Right-click > Copy | Ctrl+C / Cmd+C | Copy files/folders |
| Cut | Right-click > Cut | Ctrl+X / Cmd+X | Cut files/folders (move) |
| Paste | Right-click > Paste | Ctrl+V / Cmd+V | Paste copied/cut items |
| Delete | Right-click > Delete | - | Delete files/folders (with confirmation dialog) |
| Rename | Right-click > Rename | - | Rename files/folders (inline editing) |
| New Folder | Right-click > New Folder | - | Create new folder at current location |
| Download | Right-click > Download | - | Cloud to local download |
| Upload | Right-click > Upload | - | Local to cloud upload |
| Reload | Right-click > Reload | F5 / Cmd+R | Refresh folder contents |
| Get Size | Right-click > Get Size | - | Calculate total size of selected items |
| Get Public Link | Right-click > Get Public Link | - | Generate shareable public link (provider-specific) |
| Open in Explorer | Right-click > Open in Explorer | - | Open in native file manager |

### 3.2 Multi-Selection

| Method | Behavior |
|--------|----------|
| Ctrl + Click | Toggle individual file selection |
| Shift + Click | Select range (all files between first and last click) |

### 3.3 Drag & Drop

| Scenario | Behavior |
|----------|----------|
| Within same remote | **Move** |
| Between different remotes | **Copy** |
| Windows Explorer to RcloneView | **Upload** (to cloud) |

- Drag and drop confirmation popup can be toggled in Settings

---

## 4. Sync & Job Management

### 4.1 Sync Configuration (4 Steps)

Sync jobs are configured via a 4-step wizard:

**Step 1: Configure Storage**
- Select source remote + folder
- Select destination remote + folder
- Enter job name (allowed characters: a-z, A-Z, 0-9, -, _)
- 1:N sync: Add multiple destinations
- Sync direction:
  - **One-way** "Modifying destination only" — modifies destination only (stable, official)
  - **Bidirectional** "Bidirection" — merges changes from both sides (Beta, experimental)
- Create empty directories option

**Step 2: Advanced Settings**
- **Number of file transfers:** Concurrent file transfer count
- **Number of multi-thread transfers:** Default 4, set 0 to disable
- **Number of equality checkers:** Default 8, recommend 4 or less for slow backends
- **Enable checksum:** Compare files by hash + size
- **Retry entire sync if fails:** Default 3, set 1 to disable retry

**Step 3: Filtering Settings**
- **Max file size:** In MB (exclude files exceeding this)
- **Max file age:** Units: y (year), d (day), h (hour), m (minute), s (second)
- **Max folder depth:** Limit folder hierarchy levels
- **Predefined filters:** Music, Video, Image, Document, Google Docs, Box Docs
- **Custom filters:** File type, folder, path exclusion rules
  - Examples: `.iso` (exclude extension), `/.git/*` (exclude root .git files), `.git/` (exclude all .git folders)

**Step 4: Scheduling — PLUS License Only**
- Crontab-style scheduling
- Fields: Minute (0-59), Hour (0-23), Day of Week (0-6), Day of Month (1-31), Month (1-12)
- Supported formats: empty (every), lists (1,3,5), ranges (0-2), steps (6-12/3)
- Simulate schedule: Preview next execution times

### 4.2 Dry Run (Simulation)

Simulates sync without making actual changes:
- Shows list of files to be copied
- Shows list of files to be deleted
- Preview detailed operation list
- Recommended before actual sync to prevent mistakes

### 4.3 Job Manager

Central management interface for creating, editing, executing, and monitoring jobs.

**Job Management:**
- Add Job: Create new job
- Edit Job: Modify existing job
- Duplicate: Clone a job
- Delete: Remove job
- Export: Save job settings as `rclone_jobs_~.json` file
- Import: Load jobs from JSON file

**Job Types:**
- Sync: Source to destination synchronization
- Copy: Copy files/folders
- Move: Move files/folders
- Delete: Remove files/folders
- Download: Cloud to local
- Upload: Local to cloud

**Execution Modes:**
- One-time: Execute immediately (not saved)
- Add: Create and save job
- Edit: Modify existing job

### 4.4 Job History

Detailed tracking of each job's execution history.

**History Fields:**
| Field | Description |
|-------|-------------|
| Execution Type | Manual or Scheduled |
| Start Time | Execution start time |
| Time Spent | Duration |
| Status | Completed / Errored / Canceled |
| Total Size | Total transferred size |
| Speed | Transfer speed |
| Files | Number of files transferred |
| Job Type | Sync/Copy/Move/Delete/Download/Upload |

**History Filters:**
- From ~ To (date range)
- Today, Yesterday, Last week, Last month
- Delete all

### 4.5 1:N Synchronization

Synchronize one source to multiple destinations simultaneously.
- Add multiple destination folders in Step 1
- Same source content is mirrored to each destination
- Available with FREE license

### 4.6 Transfer Monitoring

Monitor active jobs in the Transferring tab of the bottom Info View:
- Progress percentage display
- Transfer speed
- File count and size transferred
- Cancel running jobs

Bottom tab filters: Show/hide by Download, Upload, Sync job types

---

## 5. Folder Compare

### 5.1 Overview

Visually compare two folders (local/cloud) side by side, showing differences.

Launched via the **Compare** button in the Home tab.

### 5.2 Comparison Result Filters

| Filter | Description |
|--------|-------------|
| Show left-only files | Files existing only on the left |
| Show right-only files | Files existing only on the right |
| Show same files | Identical files on both sides |
| Show different files | Files with different sizes |
| Show errored files | Error/conflict files |

### 5.3 Comparison View Actions

**Navigation:**
- Navigate to upper folder
- Navigate to lower folder

**File Operations:**
- Copy right: Copy files from left to right
- Copy left: Copy files from right to left
- Delete: Delete selected files

**Size Change Discovery:**
- Find folders by file count change
- Find folders by size change
- Find folder with largest change
- Find folder with next large change
- Find folder with smallest change
- Find folder with next smaller change

**Copy Behavior:**
- Copies only when file doesn't exist on target side OR has different size
- After copying, files are marked as "equal" in comparison view

### 5.4 Folder Compare with Filter — PLUS License Only

Restrict comparison targets with custom filter rules:
- Filter by folder name and file type
- Examples: `.iso` (exclude), `/.git/*` (root .git files), `/.git/` (root .git folder), `.git/` (all .git folders)

---

## 6. Mount & Virtual Drive

### 6.1 Overview

Mount cloud storage as a local drive and access it directly from your file explorer.

### 6.2 Mount Methods

**Method 1: From Remote Explorer**
1. Select the remote folder to mount in the explorer
2. Click the Mount icon in the panel toolbar
3. Configure mount settings
4. Click "Save and mount" or "Save"

**Method 2: From Mount Manager**
1. Click Mount Manager button in Remote tab
2. Click New mount
3. Select remote and subdirectory
4. Configure options
5. Click Save or Save and mount

### 6.3 Mount Configuration Options

| Setting | Default/Options | Description |
|---------|----------------|-------------|
| Target | Auto / manual drive letter | Windows: Drive letter assignment |
| Mount to local path | - | Custom mount location (macOS/Linux) |
| Auto mount | Off | Auto-mount on startup (PLUS) |
| Volume name | - | Displayed volume name |
| Mount type | cmount (Windows) / nfsmount (Linux/macOS) | Mount method |
| Network drive | Off | Show as network drive (Windows) |
| Read only | Off | Read-only mode |
| Allow other | Off | Allow other users to access (Linux) |
| Cache mode | off / minimal / **writes** (default) / full | VFS cache mode |
| Cache max size | -1 (unlimited) | Maximum cache size (bytes) |
| Cache max age | - | Cache data validity period (nanoseconds) |
| Dir cache time | - | Directory cache validity period (nanoseconds) |

### 6.4 Mount Manager

Management by mount status:

| Status | Available Actions |
|--------|-------------------|
| Mounted | Unmount, Open (open in file explorer) |
| Unmounted | Mount, Edit, Delete |

**Constraints:**
- Edit/Delete disabled while mounted
- Open disabled while unmounted

### 6.5 Mount Management from System Tray

- Right-click RcloneView tray icon
- View mounted drives in Mount menu
- Toggle mount/unmount
- Start new mount

---

## 7. Rclone Terminal

### 7.1 Overview

Built-in terminal in RcloneView for executing rclone CLI commands directly. Located in the Terminal tab of the bottom Info View.

### 7.2 Features

- Full terminal emulation based on xterm.dart
- PTY (pseudo-terminal) support
- Rclone command auto-complete: type `rclone` + space for command suggestions
- Shell environment: Windows CMD/PowerShell, Linux bash, macOS zsh

**Common Commands:**
| Command | Description |
|---------|-------------|
| `rclone listremotes` | List configured remotes |
| `rclone about "remote:"` | Get remote storage usage |
| `rclone config create <name> <type>` | Create remote via CLI |

### 7.3 View Management

- **Expand:** Full-screen terminal
- **Shrink:** Return to default layout

### 7.4 Output Handling

- Text selection supported
- Right-click menu: Copy, Paste, Copy All

---

## 8. Remote Management

### 8.1 Remote Setup Methods

Adding cloud storage connections (remotes) in RcloneView varies by provider.

**OAuth-Based (Browser Login):**
Browser opens for account authentication, then auto-connects. No separate API key needed.
- Google Drive, Dropbox, Google Photos, OneDrive, Box, pCloud, Yandex Disk, premiumize.me, put.io, HiDrive

**Credential Entry:**
Directly enter Access Key, Token, or account credentials.
- Amazon S3 (Access Key ID + Secret Access Key + Region)
- Cloudflare R2 (API Token + Account ID + Endpoint)
- Mega (Email + Password)
- Backblaze B2 (Application Key ID + Application Key)
- Proton Drive (Email + Password, optional 2FA)
- Gofile (Access Token)
- Azure File Storage (Account Name + Shared Key + Share Name)
- iCloud Drive (requires rclone v1.69+)
- SFTP (Host + SSH authentication)

**Additional Configuration Required:**

| Provider | Additional Setting |
|----------|-------------------|
| Zoho WorkDrive | Region selection |
| Google Cloud Storage | Project Number |
| Citrix ShareFile | Root Folder ID |
| Google Drive Shared with Me | `shared_with_me = true` |
| Box for Business | `box_sub_type = enterprise` |
| Dropbox for Business | `dropbox_business = true` |
| Google Drive Computers | `root_folder_id = computer ID` |

### 8.2 Remote Manager

Access via Remote tab > Remote Manager button.
- Display all registered remotes
- Edit/delete per remote
- View remote configuration

---

## 9. Connection Management

### 9.1 Connection Types

**Embedded Rclone (Built-in):**
- Included by default, no separate installation needed
- Address: `http://127.0.0.1:5582`
- Shares lifecycle with app (option to terminate on app exit)
- Displays rclone version, supports Self Update

**External Rclone:**
- Connect to a separately running rclone instance
- Runs on: local machine, remote server, Docker container
- Default port: 5572
- Launch command: `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`

### 9.2 Adding External Connection

Settings tab > Connect Manager > New Connection:
1. Enter Display Name
2. Enter Remote Address (`http://<host>:5572`)
3. Enter Username / Password
4. Option to disable SSL certificate verification (for self-signed certificates)
5. Test Connection to verify
6. Save

### 9.3 AWS EC2 Integration

Scenario: Run external rclone on AWS EC2 for remote connection.

**Recommended Setup:**
- AMI: Ubuntu Server 22.04 LTS or 20.04 LTS
- Instance: t2.micro (Free Tier eligible)
- Storage: Minimum 8 GB
- Security Group: SSH (port 22, IP-restricted) + Custom TCP (port 5572)

**Installation:**
```bash
curl https://rclone.org/install.sh | sudo bash
rclone version
```

**Daemon Launch:**
```bash
rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

**systemd Service:**
- File path: `/etc/systemd/system/rclone-rcd.service`
- Run user: Ubuntu
- Key flags: `--rc-user`, `--rc-pass`, `--rc-addr`, `--rc-web-gui` (optional), `--log-file`, `--log-level`

**Health Check:**
```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP>:5572/rc/noop"
```

---

## 10. Supported Cloud Providers

### 10.1 OAuth Direct Login

| Provider | Auth Method |
|----------|------------|
| Google Drive | OAuth (browser) |
| Dropbox | OAuth (browser) |
| Google Photos | OAuth (browser) |
| Microsoft OneDrive | OAuth (browser) |
| Box | OAuth (browser) |
| pCloud | OAuth (browser) |
| Yandex Disk | OAuth (browser) |
| premiumize.me | OAuth (browser) |
| put.io | OAuth (browser) |
| HiDrive | OAuth (browser) |

### 10.2 Personal/Business Cloud

| Provider | Notes |
|----------|-------|
| Google Drive Shared with Me | Requires shared_with_me setting |
| Google Drive Computers | Requires root_folder_id setting |
| Dropbox for Business | Requires dropbox_business setting |
| Box for Business | box_sub_type = enterprise |
| Mega | Email + Password |
| Proton Drive | Requires rclone v1.69+ |
| Backblaze B2 | Application Key ID + Key |
| Gofile | Access Token |
| iCloud Drive | Requires rclone v1.69+ |
| iCloud Photos | Separate package (code-verified) |
| Zoho WorkDrive | Requires Region selection |
| Citrix ShareFile | Requires Root Folder ID |
| Google Cloud Storage | Requires Project Number |
| Azure File Storage | Account + Key + Share Name |
| Koofr | - |
| Jottacloud | - |
| Mail.ru Cloud | - |
| Seafile | - |
| Storj | - |
| OpenDrive | - |
| PikPak | - |
| SugarSync | - |
| Files.com | - |
| Enterprise File Fabric | - |
| Cloudinary | - |
| Internet Archive | - |
| ImageKit | - |
| Linkbox | - |
| Pixeldrain | - |
| Uptobox | - |
| Uloz.to | - |

### 10.3 S3-Compatible Providers

Services accessed via rclone's S3 protocol. Requires Access Key + Secret Key + Endpoint.

| Provider | | Provider | | Provider |
|----------|---|----------|---|----------|
| Amazon S3 | | Cloudflare R2 | | Wasabi |
| IDrive e2 | | MinIO | | DigitalOcean Spaces |
| Linode Object Storage | | Google Cloud Storage (S3) | | IBM COS |
| Tencent COS | | Alibaba OSS | | Huawei OBS |
| IONOS | | Ceph | | StackPath |
| Synology C2 | | Seagate Lyve | | Arvan Cloud |
| Scaleway | | Selectel | | Storj S3 |
| Outscale | | Magalu | | Leviia |
| Liara | | RackCorp | | SeaweedFS |
| Dreamhost | | Petabox | | China Mobile |
| Qiniu | | Netease | | Hetzner |
| OVHcloud | | Cubbit DS3 | | Rclone S3 |

> **Note:** S3-compatible providers may be added or changed with rclone version updates. Prefer "numerous S3-compatible services" over citing specific counts.

### 10.4 Protocol-Based Storage

| Protocol | Description |
|----------|-------------|
| SFTP | SSH File Transfer Protocol (port 22) |
| FTP | File Transfer Protocol |
| WebDAV | Web Distributed Authoring and Versioning |
| SMB/CIFS | Server Message Block (network file sharing) |
| HTTP | Read-only HTTP access |
| HDFS | Hadoop Distributed File System |

### 10.5 Local Storage

| Type | Description |
|------|-------------|
| Local disk | Windows/Mac/Linux internal disks |
| External drives | SSD, USB, etc. |
| Synology NAS | Auto-detection support (toggle in Settings) |

---

## 11. Virtual Remotes

Wrappers that add functionality to existing remotes using rclone's virtual remote system.

| Remote | Purpose | Example Use Case |
|--------|---------|-----------------|
| **Alias** | Shortcut to a specific cloud folder | Assign a short name to a deeply nested path |
| **Crypt** | Encrypt file names, contents, folder names | Store sensitive data encrypted in the cloud |
| **Memory** | RAM-based temporary storage | Testing and temporary operations |
| **Cache** | Accelerate slow remotes via caching | Includes Plex media server integration |
| **Chunker** | Split large files into chunks | Store large files on providers with size limits |
| **Combine** | Merge multiple folders as subfolders | Multiple clouds as one virtual tree |
| **Union** | Merge multiple folders into one view | Unified view across multiple storages |
| **Hasher** | Add hashing for integrity checks | Add checksums to remotes that don't support them |
| **Compress** | Compress files before upload | Save storage capacity |

---

## 12. Settings & Preferences

### 12.1 General

| Setting | Description |
|---------|-------------|
| Language | UI language selection (9 languages) |
| Launch at login | Auto-start on system login |
| Start minimized | Launch into system tray |
| Quit on close | Close button behavior (quit vs. background) |
| Auto-detect Synology NAS | Auto-detect NAS on local network |
| Show local cloud folders | Display local cloud folders |
| Check for updates | Automatic update checking |
| Restore Default Settings | Reset all settings |

### 12.2 Interfaces & Notifications

| Setting | Description |
|---------|-------------|
| Dark mode | Light / Dark / System theme |
| Theme color | Accent color selection |
| Confirm drag and drop | Confirmation popup for drag operations |
| Show Job Types | Transfer log filter (Download/Upload/Sync) |
| Show job state log | Show detailed log after transfers |
| Show comparison completed | Folder comparison completion notification |
| Show confirmation before deleting files in compare | Delete confirmation in compare view |
| Show sync completion notification | Sync completion notification |
| Show network error dialog | Network error alert |

### 12.3 Embedded Rclone

| Setting | Description |
|---------|-------------|
| Stop rclone on App Exit | Terminate rclone process on app close |
| Local Rclone location | rclone binary path (embedded or custom) |
| Local Rclone config location | rclone.conf file path |
| Default download folder | Default download destination |
| Default upload folder | Default upload source |
| Global Rclone Flags | Additional rclone flags (e.g., `--no-check-certificate`) |
| Config Password | Password for encrypted rclone config |
| Enable rclone Logging | Activate file-based logging |
| Log folder | Log file storage directory |
| Log file name | Default log filename |
| Log level | DEBUG / INFO / NOTICE / ERROR |

### 12.4 Supported UI Languages

| Language | Notes |
|----------|-------|
| English | Default |
| Korean | - |
| French | - |
| German | - |
| Chinese Simplified | - |
| Chinese Traditional | - |
| Japanese | - |
| Spanish | - |
| Indonesian | - |

Includes Noto Sans fonts (KR, SC, TC, JP variants) for CJK character support.

---

## 13. Notification & Remote Control

> **Note:** Features in this section are confirmed in source code but not yet documented in official docs. Presumed to be PLUS license features.

### 13.1 Email Notifications

Email alerts on job completion.
- Direct SMTP server configuration (host, port 587, authentication)
- RcloneView Relay service option
- Multiple recipient support
- Job size threshold (MB/GB units, notify only for jobs exceeding threshold)

### 13.2 Telegram Bot

- Telegram Bot Token + Chat ID configuration
- Job status notifications

### 13.3 Slack Integration

- App Token + Bot Token configuration
- User ID specification
- Job status notifications

### 13.4 Discord Integration

- Bot Token + User/Application ID configuration
- DM-based job status notifications

### 13.5 Application Lock

- Password-protect app access
- Password stored in encrypted secure storage

---

## 14. Multi-Window & System Tray

### 14.1 Multi-Window — PLUS License Only

- Create new window via Home tab > New Window button
- Each window maintains independent state
- Inter-window communication via IPC
- Window position/size auto-saved

### 14.2 System Tray

Available with all license types.

**Tray Menu:**
- View list of mounted drives
- Toggle mount/unmount
- Start new mount
- Open/close app

**Background Behavior:**
- Minimizes to system tray (depending on settings)
- Jobs continue running in background
- Notification popup on job completion

---

## 15. Platform Support

### 15.1 Windows

| Feature | Description |
|---------|-------------|
| Mount type | cmount (default) |
| Drive letter | Auto or manual assignment |
| Network drive | Option to show as network drive |
| System tray | Tray icon and context menu |
| Startup | Launch at login support |
| Desktop notifications | Job completion alerts |

### 15.2 macOS

| Feature | Description |
|---------|-------------|
| Mount type | nfsmount (default) |
| Mount point | Custom path specification |
| File access permissions | Privacy & Security > Files & Folders or Full Disk Access |
| File handle limit | Default 256-1024, recommended 524288 |
| Supported versions | Ventura, Sonoma, Sequoia confirmed |
| Dock integration | Window management via Dock icon click |

**macOS File Handle Configuration:**
- Create LaunchDaemon plist: `/Library/LaunchDaemons/limit.maxfiles.plist`
- Set both soft/hard limits to 524288
- Reboot required

**macOS Known Issues:**
- Desktop/Documents/Downloads folders may appear empty — grant Privacy & Security permissions
- External SSD not accessible — browse `/Volumes`, create Alias remote as workaround

### 15.3 Linux

| Feature | Description |
|---------|-------------|
| Mount type | nfsmount |
| GUI compatibility | GTK/Wayland |
| System integration | D-Bus, AppIndicator |
| Service | systemd user service |
| Allow other | Option to allow other users to access mounts |

### 15.4 Network Ports

| Port | Purpose |
|------|---------|
| 5582 | Embedded Rclone API (default) |
| 5572 | External Rclone API (default) |
| 22 | SFTP |
| 80/443 | HTTP/HTTPS (WebDAV, OAuth) |
| 587 | SMTP (email notifications) |

---

## 16. License Structure

### 16.1 License Types

| Type | Description |
|------|-------------|
| FREE | Basic features, no license key required |
| PLUS (Subscription) | Subscription-based, time-limited |
| Lifetime | One-time purchase, permanent use |

### 16.2 License Activation

- Path: Help > Activate License
- Enter email address + license key
- Discount coupons: One-time use per email address

### 16.3 FREE vs PLUS Feature Comparison

| Feature | FREE | PLUS |
|---------|:----:|:----:|
| Mount/Unmount | O | O |
| File Explorer (browse/copy/delete) | O | O |
| Folder Compare (basic) | O | O |
| Sync & Job Management | O | O |
| 1:N Synchronization | O | O |
| Job History & Logs | O | O |
| System Tray | O | O |
| Rclone Terminal | O | O |
| Dry Run | O | O |
| Export/Import Jobs | O | O |
| Folder Compare with Filter | X | O |
| Schedule-Based Sync | X | O |
| Auto Start Schedule on Startup | X | O |
| Auto Mount on Startup | X | O |
| Multi-Window | X | O |

---

## 17. Batch Operations (Beta)

> **Status:** Beta feature. Confirmed in source code but stability is not fully verified.

### 17.1 Overview

Automation feature that chains multiple operations for sequential execution.

### 17.2 Supported Step Types

| Step | Description |
|------|-------------|
| mkdir | Create folder |
| copyFolder | Copy folder (uses sync) |
| copyFile | Copy single file |
| sync | Synchronize folders |
| check | Verify/compare folders |
| move | Move files/folders |
| rename | Rename files |
| delete | Filter-based deletion |
| deleteFile | Delete single file |
| purge | Remove directory |
| rmdirs | Remove empty directories |
| filelist | Generate file listing |
| sleep | Pause execution |

### 17.3 Batch Features

- Variable piping between steps
- Dry-run preview
- Step-by-step progress tracking
- Execution monitoring

---

## 18. Distribution & Installation

### 18.1 Official Download Formats

All downloads available at https://rcloneview.com/src/download.html

| Platform | Format | Architectures | File Name Pattern |
|----------|--------|--------------|-------------------|
| Windows | .exe (Inno Setup installer) | x86-64 only | `setup_rclone_view-{version}.exe` |
| macOS | .dmg (Disk Image) | Universal (x86-64 + ARM64 Apple Silicon) | `RcloneView-{version}.dmg` |
| Linux | .AppImage | x86_64, aarch64 (ARM64) | `RcloneView-{version}-{arch}.AppImage` |
| Linux | .deb (Debian/Ubuntu) | x86_64, aarch64 (ARM64) | `rclone_view-{version}-linux-{arch}.deb` |
| Linux | .rpm (Fedora/RHEL) | x86_64, aarch64 (ARM64) | `rclone_view-{version}-linux-{arch}.rpm` |

### 18.2 Official Distribution Channels

| Channel | Status | Notes |
|---------|--------|-------|
| rcloneview.com download page | **Official** | Only official distribution channel |
| macOS auto-updater (Sparkle) | **Official** | In-app update via appcast feed |

### 18.3 NOT Official Distribution Channels

These channels do **NOT** have official RcloneView packages. Blog posts MUST NOT instruct users to install from these sources:

| Channel | Status | Notes |
|---------|--------|-------|
| AUR (Arch User Repository) | **NOT available** | No official AUR package exists |
| Snap Store | **NOT available** | Config exists in source but not actively published |
| Flathub / Flatpak | **NOT available** | Config exists in source but not actively published |
| Homebrew (macOS) | **NOT available** | No formula/cask exists |
| APT repository | **NOT available** | No PPA or apt repo — use .deb direct download |
| RPM repository (dnf/yum) | **NOT available** | No repo — use .rpm direct download |
| pip / npm / any package manager | **NOT available** | Not applicable |
| Any third-party mirror | **Unofficial** | Not endorsed or maintained |

### 18.4 System Requirements

**All platforms — GUI is REQUIRED:**
- RcloneView is a **GUI desktop application** built with Flutter
- It **cannot run headless** (without a display server)
- It **cannot run as a systemd/Windows service** by itself
- For headless/server scenarios, use rclone CLI directly (`rclone rcd`)

**Windows:**
- Architecture: x86-64 only (no ARM64 Windows build)
- Requires VC++ 2015-2022 Redistributable
- Minimum: Windows Vista or later

**macOS:**
- Architecture: Universal binary (Intel x86-64 + Apple Silicon ARM64)
- Minimum: macOS 12.7 (Monterey)
- Notarized and code-signed

**Linux:**
- Architecture: x86_64 and aarch64 (ARM64)
- Desktop environment required: X11 or Wayland display server
- Required dependency: GTK+ 3.0
- Required dependency: libayatana-appindicator3-1 or libappindicator3-1 (system tray)
- Tested base: Ubuntu 22.04 LTS (Jammy)
- FUSE required for mount functionality (fuse3 recommended)

### 18.5 Linux ARM64 Notes (Raspberry Pi, etc.)

ARM64 builds (.deb, .rpm, .AppImage) are provided for Linux. However:

- **A graphical desktop environment IS REQUIRED** — RcloneView cannot run on a headless system
- For Raspberry Pi or similar ARM64 SBCs, a desktop environment (e.g., Raspberry Pi Desktop with X11/Wayland) must be installed and running
- Alternatively, remote desktop (VNC/RDP) or X11 forwarding can be used to display the GUI on another machine
- For truly headless operation (no display at all), use rclone CLI directly — RcloneView adds no value without a screen
- Performance on ARM64 SBCs varies significantly — do not cite specific speed numbers

### 18.6 Technology Stack

| Component | Technology | Notes |
|-----------|-----------|-------|
| GUI Framework | **Flutter** (Dart 3.2.6+) | NOT Qt, NOT Electron, NOT GTK app |
| Terminal | xterm.dart | Built-in terminal emulation |
| State management | Riverpod | flutter_riverpod |
| Database | SQLite (sqflite_common_ffi) | Local storage |
| Secure storage | flutter_secure_storage | Credentials |
| Build system | CMake (Linux/Windows), Xcode (macOS) | Platform-specific |
| Linux packaging | flutter_distributor, appimage-builder | .deb, .rpm, .AppImage |
| Windows packaging | Inno Setup | .exe installer |
| macOS packaging | appdmg | .dmg with notarization |

---

## 19. Limitations & Negative Facts

This section explicitly states what RcloneView **does NOT** support, **cannot** do, or **does NOT** provide. Blog posts MUST NOT claim or imply otherwise.

### 19.1 RcloneView is NOT...

| Claim | Reality |
|-------|---------|
| A headless/CLI tool | It is a GUI-only application. For CLI, use rclone directly |
| A replacement for rclone | It is a frontend that depends on rclone |
| The official rclone GUI | It is an independent third-party GUI for rclone |
| A web application | It is a native desktop app (no browser-based interface for end users) |
| A mobile app | No iOS or Android builds are distributed |
| A Qt application | It is built with Flutter/Dart |
| An Electron application | It is built with Flutter/Dart |
| A cloud service | It runs entirely on the user's local machine |
| Available on package managers | Only distributed via direct download from rcloneview.com |

### 19.2 RcloneView CANNOT...

| Claim | Reality |
|-------|---------|
| Run without a display server | Requires X11 or Wayland on Linux, GUI on all platforms |
| Run as a background daemon/service | The app itself cannot be a systemd service. (rclone rcd CAN, but that's rclone, not RcloneView) |
| Run on 32-bit systems | Only 64-bit (x86-64, ARM64) builds exist |
| Run on Windows ARM | No Windows ARM64 build provided |
| Sync without rclone | Depends entirely on rclone for all storage operations |
| Work offline | Requires network access to reach cloud storage |
| Auto-update on Linux | Auto-update only available on macOS (Sparkle). Linux/Windows users must download manually |

### 19.3 RcloneView DOES NOT provide...

| Claim | Reality |
|-------|---------|
| AUR package | Not published to Arch User Repository |
| Snap package | Snapcraft config exists but not published to Snap Store |
| Flatpak package | Flatpak manifest exists but not published to Flathub |
| Homebrew formula/cask | Not available via Homebrew |
| APT/YUM/DNF repository | No package repository — .deb and .rpm are direct downloads |
| Docker image | Not containerized |
| iOS/Android app | Mobile builds not distributed |
| 32-bit builds | No x86 (32-bit) or armv7 builds |

### 19.4 Blog-Specific Platform Warnings

When writing blog posts about RcloneView on specific platforms, these facts MUST be included:

**Raspberry Pi / ARM64 SBC posts:**
- MUST state that a desktop environment with display server is required
- MUST NOT describe headless setup as a primary use case
- MUST mention VNC/X11 forwarding as alternative if running remotely
- SHOULD recommend rclone CLI for truly headless scenarios

**Arch Linux posts:**
- MUST NOT reference `yay -S rcloneview` or any AUR installation
- MUST use direct .AppImage, .rpm, or manual binary installation from rcloneview.com
- MUST NOT claim Qt5 dependencies — RcloneView uses Flutter/GTK+3

**Any Linux distro posts:**
- MUST state GTK+3 and display server (X11/Wayland) requirement
- MUST NOT describe RcloneView as a systemd service
- The systemd service documented in official docs is for `rclone rcd`, NOT for RcloneView itself

**Server/NAS posts:**
- MUST clarify that RcloneView is a GUI tool, not a server application
- For server use: connect to external rclone via Connection Manager, don't install RcloneView on the server

---

## Appendix: Credential Guides

### AWS S3
- AWS Management Console: `https://aws.amazon.com/console`
- Generate Access Key in IAM Console
- Required: Access Key ID, Secret Access Key, Region code (e.g., ap-northeast-2)

### Cloudflare R2
- Dashboard: `https://dash.cloudflare.com`
- Create R2 Bucket, then generate API Token
- Requires Admin Read & Write permissions
- Endpoint: `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`

### Backblaze B2
- Key management: `https://secure.backblaze.com/b2_buckets.htm`
- Required: Application Key ID, Application Key

### Proton Drive
- Login: `https://drive.proton.me/`
- Required: Email, Password, optional 2FA
- 2FA setup: `https://proton.me/support/two-factor-authentication`

### Gofile
- Token: `https://gofile.io/myprofile`
- Found in Account API Token field

### Azure File Storage
- Azure Portal > Storage Account > Access keys
- Required: Storage Account Name, Shared Key, Share Name

### Mega
- Login: `https://mega.nz/login`
- Required: Email, Password

---

## Appendix: Troubleshooting Reference

### macOS: Desktop/Documents/Downloads Folders Appear Empty
- **Cause:** macOS Catalina+ privacy permissions not granted
- **Fix 1:** Grant permissions in System Settings > Privacy & Security > Files & Folders
- **Fix 2:** Add RcloneView to Full Disk Access
- **Required:** Restart RcloneView after permission changes

### macOS: Too Many Open Files Error
- **Cause:** macOS file descriptor default limit (256-1024)
- **Fix:** Create `/Library/LaunchDaemons/limit.maxfiles.plist`, set soft/hard to 524288
- **Required:** Reboot

### macOS: External SSD Not Accessible
- **Fix:** Browse `/Volumes` to find SSD, then create an Alias remote

### Log Collection
1. Settings > Embedded Rclone > Enable rclone Logging checkbox
2. Log level: DEBUG (most verbose)
3. Click Restart Embedded Rclone
4. Reproduce the issue
5. Send log file to rcloneview@bdrive.com
