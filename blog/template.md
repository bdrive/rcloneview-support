---
slug: reference-rcloneview-content-style
title: "Reference: RcloneView Blog/Tutorial Content Style Guide"
unlisted: true
description: Internal reference for generating RcloneView blog/tutorial articles with consistent CTA imports, imagery, and helpful links.
authors:
  - jay
tags:
  - reference
  - RcloneView
  - content-style
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Reference: RcloneView Blog/Tutorial Content Style Guide

Use this when generating new RcloneView articles. Keep CTAs, imports, imagery, and links consistent.

## Writing Tips

- Always follow the `CTA & Component Template (required)` rules (imports, RvCta block, `<CloudSupportGrid />`).
- From the GUI Image Reference list, place the image link that best matches the section you’re writing.
- Add related guide links from the How-to list that match the topic you’re covering.
- For existing documents, replace images with the closest matches from the image list.
- For existing documents, add or swap guide links using the closest matches from the How-to list.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## CTA & Component Template (required)

- Place imports immediately after front-matter, with exactly one blank line after the front-matter block, and do not duplicate them:  
  `import CloudSupportGrid from '../src/components/CloudSupportGrid';`  
  `import cloudIcons from '../src/contexts/cloudIcons';`  
  `import RvCta from '../src/components/RvCta';`
- After `<!-- truncate -->`, insert the RvCta block above.
- End the document with `<CloudSupportGrid />` on its own line.

## RcloneView GUI Image References

Use these to show the actual UI (sourced from Jay-authored posts). Copy-paste the HTML image tags:

- **New Remote screen**:

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

- **Two-pane Explorer (remotes open)**:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

- **Drag & Drop in Explorer**:  
  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

- **Compare folders and copy**:  
  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

- **Job Management, Job Execution**
  <img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

- **Job execution monitoring**:  
  <img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

- **Job scheduling & automation setup**:  
  <img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

- Job History

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

- **Create Mount**

  - Directly mount from opened remote/folder
    <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

  - Mount with Mount Manager
    <img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

- RcloneView Connecting with Embedded Rclone

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />

- RcloneView Connecting with External Rclone

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />
- Synology NAS Connection. 
<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="synology nas autodection and connection" class="img-large img-center" />

## Core How-to Links (use descriptive link text)

- Remote setup

  - [Add Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example) d
  - [Add Remote via Browse-based Log-in(OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
  - [Add OneDrive headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)
  - [Add AWS S3 and S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
  - [Add WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)

- Explorer basics

  - [Browse & Manage Remotes](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
  - [Drag & Drop files](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

- Compare & Copy

  - [Compare folder contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

- Instant Sync
- [Synchronize Remote Storages Instantly](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

- Jobs & Scheduling

  - [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
  - [Execute & Manage Jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
  - [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
  - [Real-time Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
  - [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

- Mount cloud storage as local drive.

  - [Mount Cloud Storage as a Local Drive](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

- Adding Auto-login remote with External Rclone on Headless system (without web browser).

  - [External rclone example (GoogleDrive → AWS S3)](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)
  - [Headless Google Drive](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)

- App security

  - [Enable App Lock](https://rcloneview.com/support/tutorials/enable-app-lock)

- Synology Nas Connection Guide
  - [Synology NAS Auto Detection and Connection](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

## RcloneView GUI Image References

Use these to show the actual UI. Copy-paste the HTML image tags:

### Icons

- alias icon
  <img src="/support/icons/alias-icon.png" alt="alias-icon.png" />
- calendar icon
  <img src="/support/icons/calendar-icon.png" alt="calendar-icon.png" />
- compare display icon
  <img src="/support/icons/compare-display-icon.png" alt="compare-display-icon.png" />
- copy icon
  <img src="/support/icons/copy icon.png" alt="copy icon.png" />
- copy file to right
  <img src="/support/icons/copy-file-to-right.png" alt="copy-file-to-right.png" />
- copy files to left
  <img src="/support/icons/copy-files-to-left.png" alt="copy-files-to-left.png" />
- cut icon
  <img src="/support/icons/cut-icon.png" alt="cut-icon.png" />
- delete files
  <img src="/support/icons/delete-files.png" alt="delete-files.png" />
- delete icon
  <img src="/support/icons/delete-icon.png" alt="delete-icon.png" />
- delete mount configuration
  <img src="/support/icons/delete-mount-configuration.png" alt="delete-mount-configuration.png" />
- disabled delete mount configuration
  <img src="/support/icons/disabled-delete-mount-configuration.png" alt="disabled-delete-mount-configuration.png" />
- disabled edit mount
  <img src="/support/icons/disabled-edit-mount.png" alt="disabled-edit-mount.png" />
- disabled open mount folder
  <img src="/support/icons/disabled-open-mount-folder.png" alt="disabled-open-mount-folder.png" />
- download icon
  <img src="/support/icons/download-icon.png" alt="download-icon.png" />
- edit mount configuration
  <img src="/support/icons/edit-mount-configuration.png" alt="edit-mount-configuration.png" />
- equal icon
  <img src="/support/icons/equal-icon.png" alt="equal-icon.png" />
- filter run icon
  <img src="/support/icons/filter-run-icon.png" alt="filter-run-icon.png" />
- find folder by count
  <img src="/support/icons/find-folder-by-count.png" alt="find-folder-by-count.png" />
- find folder by size
  <img src="/support/icons/find-folder-by-size.png" alt="find-folder-by-size.png" />
- find folder with largest change
  <img src="/support/icons/find-folder-with-largest-change.png" alt="find-folder-with-largest-change.png" />
- find folder with next large change
  <img src="/support/icons/find-folder-with-next-large-change.png" alt="find-folder-with-next-large-change.png" />
- find folder with next smaller change
  <img src="/support/icons/find-folder-with-next-smaller-change.png" alt="find-folder-with-next-smaller-change.png" />
- find folder with smallest change
  <img src="/support/icons/find-folder-with-smallest-change.png" alt="find-folder-with-smallest-change.png" />
- history icon
  <img src="/support/icons/history-icon.png" alt="history-icon.png" />
- home icon
  <img src="/support/icons/home-icon.png" alt="home-icon.png" />
- mount icon
  <img src="/support/icons/mount-icon.png" alt="mount-icon.png" />
- mount run icon
  <img src="/support/icons/mount-run-icon.png" alt="mount-run-icon.png" />
- navigate to lower folder
  <img src="/support/icons/navigate-to-lower-folder.png" alt="navigate-to-lower-folder.png" />
- navigate to upper folder
  <img src="/support/icons/navigate-to-upper-folder.png" alt="navigate-to-upper-folder.png" />
- new folder icon
  <img src="/support/icons/new-folder-icon.png" alt="new-folder-icon.png" />
- open mount folder
  <img src="/support/icons/open-mount-folder.png" alt="open-mount-folder.png" />
- paste icon
  <img src="/support/icons/paste-icon.png" alt="paste-icon.png" />
- refresh icon
  <img src="/support/icons/refresh-icon.png" alt="refresh-icon.png" />
- rename icon
  <img src="/support/icons/rename-icon.png" alt="rename-icon.png" />
- same file icon
  <img src="/support/icons/same-file-icon.png" alt="same-file-icon.png" />
- setting icon
  <img src="/support/icons/setting-icon.png" alt="setting-icon.png" />
- settings icon
  <img src="/support/icons/settings-icon.png" alt="settings-icon.png" />
- show different files
  <img src="/support/icons/show-different-files.png" alt="show-different-files.png" />
- show errored files
  <img src="/support/icons/show-errored-files.png" alt="show-errored-files.png" />
- show left only files
  <img src="/support/icons/show-left-only-files.png" alt="show-left-only-files.png" />
- unmount icon
  <img src="/support/icons/unmount-icon.png" alt="unmount-icon.png" />
- upload icon
  <img src="/support/icons/upload-icon.png" alt="upload-icon.png" />

### Cloud Icons

- alibaba oss
  <img src="/support/icons/cloud-icons/alibaba-oss.png" alt="alibaba-oss.png" />
- aws s3
  <img src="/support/icons/cloud-icons/aws-s3.png" alt="aws-s3.png" />
- backblaze
  <img src="/support/icons/cloud-icons/backblaze.png" alt="backblaze.png" />
- box
  <img src="/support/icons/cloud-icons/box.png" alt="box.png" />
- ceph
  <img src="/support/icons/cloud-icons/ceph.png" alt="ceph.png" />
- cloudflare r2
  <img src="/support/icons/cloud-icons/cloudflare-r2.png" alt="cloudflare-r2.png" />
- digital ocean
  <img src="/support/icons/cloud-icons/digital-ocean.png" alt="digital-ocean.png" />
- dropbox
  <img src="/support/icons/cloud-icons/dropbox.png" alt="dropbox.png" />
- ftp
  <img src="/support/icons/cloud-icons/ftp.png" alt="ftp.png" />
- google cloud storage
  <img src="/support/icons/cloud-icons/google-cloud-storage.png" alt="google-cloud-storage.png" />
- google drive
  <img src="/support/icons/cloud-icons/google-drive.png" alt="google-drive.png" />
- google photo
  <img src="/support/icons/cloud-icons/google-photo.png" alt="google-photo.png" />
- http
  <img src="/support/icons/cloud-icons/http.png" alt="http.png" />
- ibm object storage
  <img src="/support/icons/cloud-icons/ibm-object-storage.png" alt="ibm-object-storage.png" />
- idrive e2
  <img src="/support/icons/cloud-icons/idrive-e2.png" alt="idrive-e2.png" />
- local files
  <img src="/support/icons/cloud-icons/local-files.png" alt="local-files.png" />
- mega
  <img src="/support/icons/cloud-icons/mega.png" alt="mega.png" />
- minio
  <img src="/support/icons/cloud-icons/minio.png" alt="minio.png" />
- ms blob storage
  <img src="/support/icons/cloud-icons/ms-blob-storage.png" alt="ms-blob-storage.png" />
- ms file storage
  <img src="/support/icons/cloud-icons/ms-file-storage.png" alt="ms-file-storage.png" />
- onedrive
  <img src="/support/icons/cloud-icons/onedrive.png" alt="onedrive.png" />
- oracle object storage
  <img src="/support/icons/cloud-icons/oracle-object-storage.png" alt="oracle-object-storage.png" />
- pcloud
  <img src="/support/icons/cloud-icons/pcloud.png" alt="pcloud.png" />
- s3 compatible
  <img src="/support/icons/cloud-icons/s3-compatible.png" alt="s3-compatible.png" />
- sftp
  <img src="/support/icons/cloud-icons/sftp.png" alt="sftp.png" />
- smb cifs
  <img src="/support/icons/cloud-icons/smb-cifs.png" alt="smb-cifs.png" />
- storj
  <img src="/support/icons/cloud-icons/storj.png" alt="storj.png" />
- sugarsync
  <img src="/support/icons/cloud-icons/sugarsync.png" alt="sugarsync.png" />
- swift
  <img src="/support/icons/cloud-icons/swift.png" alt="swift.png" />
- wasabi
  <img src="/support/icons/cloud-icons/wasabi.png" alt="wasabi.png" />
- webdav
  <img src="/support/icons/cloud-icons/webdav.png" alt="webdav.png" />

### Images (English / blog)

- add crypt remote 1
  <img src="/support/images/en/blog/add-crypt-remote-1.png" alt="add-crypt-remote-1.png" class="img-large img-center" />
- add crypt remote 2
  <img src="/support/images/en/blog/add-crypt-remote-2.png" alt="add-crypt-remote-2.png" class="img-large img-center" />
- add sftp remote
  <img src="/support/images/en/blog/add-sftp-remote.png" alt="add-sftp-remote.png" class="img-large img-center" />
- cloud to cloud transfer default
  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud-to-cloud-transfer-default.png" class="img-large img-center" />
- mount advanced
  <img src="/support/images/en/blog/mount-advanced.png" alt="mount-advanced.png" class="img-large img-center" />
- mount sftp
  <img src="/support/images/en/blog/mount-sftp.png" alt="mount-sftp.png" class="img-large img-center" />
- new remote
  <img src="/support/images/en/blog/new-remote.png" alt="new-remote.png" class="img-large img-center" />
- open backblaze b2 and dropbox remote
  <img src="/support/images/en/blog/open-backblaze-b2-and-dropbox-remote.png" alt="open-backblaze-b2-and-dropbox-remote.png" class="img-large img-center" />
- open local disk and proton drive
  <img src="/support/images/en/blog/open-local-disk-and-proton-drive.png" alt="open-local-disk-and-proton-drive.png" class="img-large img-center" />
- open local hard drive and mega
  <img src="/support/images/en/blog/open-local-hard-drive-and-mega.png" alt="open-local-hard-drive-and-mega.png" class="img-large img-center" />
- open mega and onedrive remote
  <img src="/support/images/en/blog/open-mega-and-onedrive-remote.png" alt="open-mega-and-onedrive-remote.png" class="img-large img-center" />
- open multiple google drive remotes
  <img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="open-multiple-google-drive-remotes.png" class="img-large img-center" />
- open proton drive and google drive
  <img src="/support/images/en/blog/open-proton-drive-and-google-drive.png" alt="open-proton-drive-and-google-drive.png" class="img-large img-center" />
- remote manager 1
  <img src="/support/images/en/blog/remote-manager-1.png" alt="remote-manager-1.png" class="img-large img-center" />
- remote manager
  <img src="/support/images/en/blog/remote-manager.png" alt="remote-manager.png" class="img-large img-center" />
- synology nas autodection and connection
  <img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="synology-nas-autodection-and-connection.png" class="img-large img-center" />

### Images (English / howto ? FAQ)

- browse volumes in mac system
  <img src="/support/images/en/howto/FAQ/browse-volumes-in-mac-system.png" alt="browse-volumes-in-mac-system.png" class="img-large img-center" />
- change setting for accessing to files and folders
  <img src="/support/images/en/howto/FAQ/change-setting-for-accessing-to-files-and-folders.png" alt="change-setting-for-accessing-to-files-and-folders.png" class="img-large img-center" />
- creat alias remote for external hdd
  <img src="/support/images/en/howto/FAQ/creat-alias-remote-for-external-hdd.png" alt="creat-alias-remote-for-external-hdd.png" class="img-large img-center" />
- empth folder by dont allow
  <img src="/support/images/en/howto/FAQ/empth-folder-by-dont-allow.png" alt="empth-folder-by-dont-allow.png" class="img-large img-center" />
- mac allow access to folder and files1
  <img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files1.png" alt="mac-allow-access-to-folder-and-files1.png" class="img-large img-center" />
- mac allow access to folder and files2
  <img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files2.png" alt="mac-allow-access-to-folder-and-files2.png" class="img-large img-center" />
- mac allow full disk access
  <img src="/support/images/en/howto/FAQ/mac-allow-full-disk-access.png" alt="mac-allow-full-disk-access.png" class="img-large img-center" />
- open alias remote for external ssd
  <img src="/support/images/en/howto/FAQ/open-alias-remote-for-external-ssd.png" alt="open-alias-remote-for-external-ssd.png" class="img-large img-center" />
- setting for collecting log file
  <img src="/support/images/en/howto/FAQ/setting-for-collecting-log-file.png" alt="setting-for-collecting-log-file.png" class="img-large img-center" />

### Images (English / howto ? core)

- add remote step2
  <img src="/support/images/en/howto/add-remote-step2.png" alt="add-remote-step2.png" class="img-large img-center" />
- google auth enter email address
  <img src="/support/images/en/howto/google-auth-enter-email-address.png" alt="google-auth-enter-email-address.png" class="img-large img-center" />
- goole auth use another account
  <img src="/support/images/en/howto/goole-auth-use-another-account.png" alt="goole-auth-use-another-account.png" class="img-large img-center" />
- new remote step1
  <img src="/support/images/en/howto/new-remote-step1.png" alt="new-remote-step1.png" class="img-large img-center" />

### Images (English / howto ? rcloneview-advanced)

- create job schedule
  <img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create-job-schedule.png" class="img-large img-center" />
- embedded rclone model
  <img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded-rclone-model.png" class="img-large img-center" />
- example of job schedule
  <img src="/support/images/en/howto/rcloneview-advanced/example-of-job-schedule.png" alt="example-of-job-schedule.png" class="img-large img-center" />
- external rclone model
  <img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external-rclone-model.png" class="img-large img-center" />
- open job schedule history
  <img src="/support/images/en/howto/rcloneview-advanced/open-job-schedule-history.png" alt="open-job-schedule-history.png" class="img-large img-center" />
- rcloneview home window
  <img src="/support/images/en/howto/rcloneview-advanced/rcloneview-home-window.png" alt="rcloneview-home-window.png" class="img-large img-center" />
- rcloneview new window
  <img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="rcloneview-new-window.png" class="img-large img-center" />
- verify job schedule
  <img src="/support/images/en/howto/rcloneview-advanced/verify-job-schedule.png" alt="verify-job-schedule.png" class="img-large img-center" />
- view history of scheduled job
  <img src="/support/images/en/howto/rcloneview-advanced/view-history-of-scheduled-job.png" alt="view-history-of-scheduled-job.png" class="img-large img-center" />

### Images (English / howto ? rcloneview-basic)

- add custom filter rule
  <img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="add-custom-filter-rule.png" class="img-large img-center" />
- add job advnaced settings
  <img src="/support/images/en/howto/rcloneview-basic/add-job-advnaced-settings.png" alt="add-job-advnaced-settings.png" class="img-large img-center" />
- add job completed
  <img src="/support/images/en/howto/rcloneview-basic/add-job-completed.png" alt="add-job-completed.png" class="img-large img-center" />
- add job configure storage
  <img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="add-job-configure-storage.png" class="img-large img-center" />
- add job filtering settings
  <img src="/support/images/en/howto/rcloneview-basic/add-job-filtering-settings.png" alt="add-job-filtering-settings.png" class="img-large img-center" />
- add job in job manager
  <img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add-job-in-job-manager.png" class="img-large img-center" />
- add job scheduling
  <img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="add-job-scheduling.png" class="img-large img-center" />
- addjust custom filter rule
  <img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="addjust-custom-filter-rule.png" class="img-large img-center" />
- click windows alarm notification
  <img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click-windows-alarm-notification.png" class="img-large img-center" />
- compare copy operation completed
  <img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation-completed.png" alt="compare-copy-operation-completed.png" class="img-large img-center" />
- compare copy operation
  <img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation.png" alt="compare-copy-operation.png" class="img-large img-center" />
- compare display select
  <img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare-display-select.png" class="img-large img-center" />
- completed log
  <img src="/support/images/en/howto/rcloneview-basic/completed-log.png" alt="completed-log.png" class="img-large img-center" />
- connection manager with embedded rclone only
  <img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="connection-manager-with-embedded-rclone-only.png" class="img-large img-center" />
- create job using job manager
  <img src="/support/images/en/howto/rcloneview-basic/create-job-using-job-manager.png" alt="create-job-using-job-manager.png" class="img-large img-center" />
- create remote by plus button
  <img src="/support/images/en/howto/rcloneview-basic/create-remote-by-plus-button.png" alt="create-remote-by-plus-button.png" class="img-large img-center" />
- create remote by remote manager
  <img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="create-remote-by-remote-manager.png" class="img-large img-center" />
- create remote top remote menu
  <img src="/support/images/en/howto/rcloneview-basic/create-remote-top-remote-menu.png" alt="create-remote-top-remote-menu.png" class="img-large img-center" />
- delete remote
  <img src="/support/images/en/howto/rcloneview-basic/delete-remote.png" alt="delete-remote.png" class="img-large img-center" />
- edit remote from explorer panel
  <img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-explorer-panel.png" alt="edit-remote-from-explorer-panel.png" class="img-large img-center" />
- edit remote from remote manager
  <img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-remote-manager.png" alt="edit-remote-from-remote-manager.png" class="img-large img-center" />
- embedded rclone advanced options settings
  <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-advanced-options-settings.png" alt="embedded-rclone-advanced-options-settings.png" class="img-large img-center" />
- embedded rclone logging configuration settings
  <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-logging-configuration-settings.png" alt="embedded-rclone-logging-configuration-settings.png" class="img-large img-center" />
- embedded rclone settings
  <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-settings.png" alt="embedded-rclone-settings.png" class="img-large img-center" />
- explorer view layout
  <img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="explorer-view-layout.png" class="img-large img-center" />
- external rclone added
  <img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="external-rclone-added.png" class="img-large img-center" />
- external rclone selected
  <img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="external-rclone-selected.png" class="img-large img-center" />
- file explorer open remote
  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-open-remote.png" alt="file-explorer-open-remote.png" class="img-large img-center" />
- file explorer pannel layout
  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-pannel-layout.png" alt="file-explorer-pannel-layout.png" class="img-large img-center" />
- file explorer remote open complete
  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-remote-open-complete.png" alt="file-explorer-remote-open-complete.png" class="img-large img-center" />
- folder comparison completed
  <img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="folder-comparison-completed.png" class="img-large img-center" />
- general settings
  <img src="/support/images/en/howto/rcloneview-basic/general-settings.png" alt="general-settings.png" class="img-large img-center" />
- help menu toolbar
  <img src="/support/images/en/howto/rcloneview-basic/help-menu-toolbar.png" alt="help-menu-toolbar.png" class="img-large img-center" />
- interface settings
  <img src="/support/images/en/howto/rcloneview-basic/interface-settings.png" alt="interface-settings.png" class="img-large img-center" />
- job config storage details
  <img src="/support/images/en/howto/rcloneview-basic/job-config-storage-details.png" alt="job-config-storage-details.png" class="img-large img-center" />
- job dry run result
  <img src="/support/images/en/howto/rcloneview-basic/job-dry-run-result.png" alt="job-dry-run-result.png" class="img-large img-center" />
- job history
  <img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job-history.png" class="img-large img-center" />
- job run click
  <img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job-run-click.png" class="img-large img-center" />
- jobs advanced settings details
  <img src="/support/images/en/howto/rcloneview-basic/jobs-advanced-settings-details.png" alt="jobs-advanced-settings-details.png" class="img-large img-center" />
- jobs filtering setttings details
  <img src="/support/images/en/howto/rcloneview-basic/jobs-filtering-setttings-details.png" alt="jobs-filtering-setttings-details.png" class="img-large img-center" />
- log tab
  <img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="log-tab.png" class="img-large img-center" />
- mount from mount manager
  <img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount-from-mount-manager.png" class="img-large img-center" />
- mount from remote explorer
  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount-from-remote-explorer.png" class="img-large img-center" />
- mount from system tray
  <img src="/support/images/en/howto/rcloneview-basic/mount-from-system-tray.png" alt="mount-from-system-tray.png" class="img-large img-center" />
- mount manager status
  <img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="mount-manager-status.png" class="img-large img-center" />
- mouse right click command
  <img src="/support/images/en/howto/rcloneview-basic/mouse-right-click-command.png" alt="mouse-right-click-command.png" class="img-large img-center" />
- network etc settings
  <img src="/support/images/en/howto/rcloneview-basic/network-etc-settings.png" alt="network-etc-settings.png" class="img-large img-center" />
- new connection form
  <img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="new-connection-form.png" class="img-large img-center" />
- notification dialogs settings
  <img src="/support/images/en/howto/rcloneview-basic/notification-dialogs-settings.png" alt="notification-dialogs-settings.png" class="img-large img-center" />
- open remote by plus button
  <img src="/support/images/en/howto/rcloneview-basic/open-remote-by-plus-button.png" alt="open-remote-by-plus-button.png" class="img-large img-center" />
- open remote by remote card
  <img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-card.png" alt="open-remote-by-remote-card.png" class="img-large img-center" />
- open remote by remote manager
  <img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-manager.png" alt="open-remote-by-remote-manager.png" class="img-large img-center" />
- open remote via system tray
  <img src="/support/images/en/howto/rcloneview-basic/open-remote-via-system-tray.png" alt="open-remote-via-system-tray.png" class="img-large img-center" />
- rcloneview user interface
  <img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="rcloneview-user-interface.png" class="img-large img-center" />
- remote tab toolbar
  <img src="/support/images/en/howto/rcloneview-basic/remote-tab-toolbar.png" alt="remote-tab-toolbar.png" class="img-large img-center" />
- save sync to jobs
  <img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="save-sync-to-jobs.png" class="img-large img-center" />
- select compare folder
  <img src="/support/images/en/howto/rcloneview-basic/select-compare-folder.png" alt="select-compare-folder.png" class="img-large img-center" />
- settings menu toolbar
  <img src="/support/images/en/howto/rcloneview-basic/settings-menu-toolbar.png" alt="settings-menu-toolbar.png" class="img-large img-center" />
- sync advanced settings details
  <img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync-advanced-settings-details.png" class="img-large img-center" />
- sync advanced settings
  <img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="sync-advanced-settings.png" class="img-large img-center" />
- sync completed window
  <img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync-completed-window.png" class="img-large img-center" />
- sync completed windows alarm
  <img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync-completed-windows-alarm.png" class="img-large img-center" />
- sync config storage details
  <img src="/support/images/en/howto/rcloneview-basic/sync-config-storage-details.png" alt="sync-config-storage-details.png" class="img-large img-center" />
- sync configure storage
  <img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="sync-configure-storage.png" class="img-large img-center" />
- sync dry run details
  <img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="sync-dry-run-details.png" class="img-large img-center" />
- sync dry run
  <img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="sync-dry-run.png" class="img-large img-center" />
- sync filtering settings details
  <img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings-details.png" alt="sync-filtering-settings-details.png" class="img-large img-center" />
- sync filtering settings
  <img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="sync-filtering-settings.png" class="img-large img-center" />
- sync remote folder select
  <img src="/support/images/en/howto/rcloneview-basic/sync-remote-folder-select.png" alt="sync-remote-folder-select.png" class="img-large img-center" />
- sync tab
  <img src="/support/images/en/howto/rcloneview-basic/sync-tab.png" alt="sync-tab.png" class="img-large img-center" />
- system tray right click menu
  <img src="/support/images/en/howto/rcloneview-basic/system-tray-right-click-menu.png" alt="system-tray-right-click-menu.png" class="img-large img-center" />
- wizard external rclone installation
  <img src="/support/images/en/howto/rcloneview-basic/wizard-external-rclone-installation.png" alt="wizard-external-rclone-installation.png" class="img-large img-center" />

### Images (English / howto ? cloud-storage-setting)

- cloudflare create user api token
  <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-create-user-api-token.png" alt="cloudflare-create-user-api-token.png" class="img-large img-center" />
- cloudflare manage r2 api token
  <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-manage-r2-api-token.png" alt="cloudflare-manage-r2-api-token.png" class="img-large img-center" />
- cloudflare r2 s3 api endpoint
  <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-r2-s3-api-endpoint.png" alt="cloudflare-r2-s3-api-endpoint.png" class="img-large img-center" />
- google console new project
  <img src="/support/images/en/howto/cloud-storage-setting/google-console-new-project.png" alt="google-console-new-project.png" class="img-large img-center" />

### Images (English / howto ? remote-storage-connection-settings ? root)

- add azure blob storage
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-azure-blob-storage.png" alt="add-azure-blob-storage.png" class="img-large img-center" />
- add box remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-box-remote.png" alt="add-box-remote.png" class="img-large img-center" />
- add dropbox remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-dropbox-remote.png" alt="add-dropbox-remote.png" class="img-large img-center" />
- add google drive remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-remote.png" alt="add-google-drive-remote.png" class="img-large img-center" />
- add google drive shared drive
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-shared-drive.png" alt="add-google-drive-shared-drive.png" class="img-large img-center" />
- add google drive with team drive
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-with-team-drive.png" alt="add-google-drive-with-team-drive.png" class="img-large img-center" />
- add mega remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-mega-remote.png" alt="add-mega-remote.png" class="img-large img-center" />
- add onedrive remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-onedrive-remote.png" alt="add-onedrive-remote.png" class="img-large img-center" />
- add pcloud remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-pcloud-remote.png" alt="add-pcloud-remote.png" class="img-large img-center" />
- add proton remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-proton-remote.png" alt="add-proton-remote.png" class="img-large img-center" />
- add remote for wasabi
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-remote-for-wasabi.png" alt="add-remote-for-wasabi.png" class="img-large img-center" />
- add r2 remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-r2-remote.png" alt="add-r2-remote.png" class="img-large img-center" />
- add rclone remote for aws s3
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-rclone-remote-for-aws-s3.png" alt="add-rclone-remote-for-aws-s3.png" class="img-large img-center" />
- add rclone remote for idrive e2
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-rclone-remote-for-idrive-e2.png" alt="add-rclone-remote-for-idrive-e2.png" class="img-large img-center" />
- add rclone remote for r2
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-rclone-remote-for-r2.png" alt="add-rclone-remote-for-r2.png" class="img-large img-center" />
- add rclone remote for s3 compatible storage
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-rclone-remote-for-s3-compatible-storage.png" alt="add-rclone-remote-for-s3-compatible-storage.png" class="img-large img-center" />
- add s3 compatible remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-s3-compatible-remote.png" alt="add-s3-compatible-remote.png" class="img-large img-center" />
- add s3 remote for aws
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-s3-remote-for-aws.png" alt="add-s3-remote-for-aws.png" class="img-large img-center" />
- add s3 remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-s3-remote.png" alt="add-s3-remote.png" class="img-large img-center" />
- add sftp remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote.png" alt="add-sftp-remote.png" class="img-large img-center" />
- add storj remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-storj-remote.png" alt="add-storj-remote.png" class="img-large img-center" />
- add union remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-union-remote.png" alt="add-union-remote.png" class="img-large img-center" />
- add webdav remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote.png" alt="add-webdav-remote.png" class="img-large img-center" />
- add webdav remote2
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote2.png" alt="add-webdav-remote2.png" class="img-large img-center" />
- add webdav remote3
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote3.png" alt="add-webdav-remote3.png" class="img-large img-center" />
- add webdav remote4
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote4.png" alt="add-webdav-remote4.png" class="img-large img-center" />
- added webdav remote on system tray
  <img src="/support/images/en/howto/remote-storage-connection-settings/added-webdav-remote-on-system-tray.png" alt="added-webdav-remote-on-system-tray.png" class="img-large img-center" />
- added webdav remote on system tray2
  <img src="/support/images/en/howto/remote-storage-connection-settings/added-webdav-remote-on-system-tray2.png" alt="added-webdav-remote-on-system-tray2.png" class="img-large img-center" />
- added webdav remote on system tray3
  <img src="/support/images/en/howto/remote-storage-connection-settings/added-webdav-remote-on-system-tray3.png" alt="added-webdav-remote-on-system-tray3.png" class="img-large img-center" />
- copy google drive client id
  <img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-drive-client-id.png" alt="copy-google-drive-client-id.png" class="img-large img-center" />
- copy google drive client id2
  <img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-drive-client-id2.png" alt="copy-google-drive-client-id2.png" class="img-large img-center" />
- copy onedrive client id
  <img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-client-id.png" alt="copy-onedrive-client-id.png" class="img-large img-center" />
- copy onedrive client id2
  <img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-client-id2.png" alt="copy-onedrive-client-id2.png" class="img-large img-center" />
- google drive shared with me options
  <img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-shared-with-me-options.png" alt="google-drive-shared-with-me-options.png" class="img-large img-center" />
- on home quick access wizard for storj
  <img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-storj.png" alt="on-home-quick-access-wizard-for-storj.png" class="img-large img-center" />
- on home quick access wizard for wasabi
  <img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-wasabi.png" alt="on-home-quick-access-wizard-for-wasabi.png" class="img-large img-center" />
- on home quick access wizard
  <img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard.png" alt="on-home-quick-access-wizard.png" class="img-large img-center" />
- pcloud brandkit examples
  <img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-brandkit-examples.png" alt="pcloud-brandkit-examples.png" class="img-large img-center" />
- pcloud first in explorer
  <img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="pcloud-first-in-explorer.png" class="img-large img-center" />
- pcloud first in management dialog
  <img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-management-dialog.png" alt="pcloud-first-in-management-dialog.png" class="img-large img-center" />
- pcloud panel pinned on re launch
  <img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-panel-pinned-on-re-launch.png" alt="pcloud-panel-pinned-on-re-launch.png" class="img-large img-center" />
- post install pcloud remote wizard
  <img src="/support/images/en/howto/remote-storage-connection-settings/post-install-pcloud-remote-wizard.png" alt="post-install-pcloud-remote-wizard.png" class="img-large img-center" />
- post install storj remote wizard
  <img src="/support/images/en/howto/remote-storage-connection-settings/post-install-storj-remote-wizard.png" alt="post-install-storj-remote-wizard.png" class="img-large img-center" />
- post install wasabi remote wizard
  <img src="/support/images/en/howto/remote-storage-connection-settings/post-install-wasabi-remote-wizard.png" alt="post-install-wasabi-remote-wizard.png" class="img-large img-center" />
- remote configure backblaze b2
  <img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-backblaze-b2.png" alt="remote-configure-backblaze-b2.png" class="img-large img-center" />
- remote configure mega
  <img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-mega.png" alt="remote-configure-mega.png" class="img-large img-center" />
- remote configure proton
  <img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-proton.png" alt="remote-configure-proton.png" class="img-large img-center" />
- remote manager backblaze view
  <img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-backblaze-view.png" alt="remote-manager-backblaze-view.png" class="img-large img-center" />
- remote manager mega view
  <img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="remote-manager-mega-view.png" class="img-large img-center" />
- remote manager proton view
  <img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-proton-view.png" alt="remote-manager-proton-view.png" class="img-large img-center" />
- select mega to add remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/select-mega-to-add-remote.png" alt="select-mega-to-add-remote.png" class="img-large img-center" />
- select proton drive remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/select-proton-drive-remote.png" alt="select-proton-drive-remote.png" class="img-large img-center" />
- storj brandkit example
  <img src="/support/images/en/howto/remote-storage-connection-settings/storj-brandkit-example.png" alt="storj-brandkit-example.png" class="img-large img-center" />
- storj first in management dialog
  <img src="/support/images/en/howto/remote-storage-connection-settings/storj-first-in-management-dialog.png" alt="storj-first-in-management-dialog.png" class="img-large img-center" />
- storj panel pinned on re launch
  <img src="/support/images/en/howto/remote-storage-connection-settings/storj-panel-pinned-on-re-launch.png" alt="storj-panel-pinned-on-re-launch.png" class="img-large img-center" />
- token input error message
  <img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token-input-error-message.png" class="img-large img-center" />
- wasabi brandkit example
  <img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-brandkit-example.png" alt="wasabi-brandkit-example.png" class="img-large img-center" />
- wasabi first in management dialog
  <img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-first-in-management-dialog.png" alt="wasabi-first-in-management-dialog.png" class="img-large img-center" />
- wasabi panel pinned on re launch
  <img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-panel-pinned-on-re-launch.png" alt="wasabi-panel-pinned-on-re-launch.png" class="img-large img-center" />

### Images (English / howto ? remote-storage-connection-settings ? alias)

- new remote add alias
  <img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="new-remote-add-alias.png" class="img-large img-center" />
- virtual add alias input
  <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias-input.png" alt="virtual-add-alias-input.png" class="img-large img-center" />
- virtual add alias
  <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias.png" alt="virtual-add-alias.png" class="img-large img-center" />
- virtual add select remote and folder
  <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-select-remote-and-folder.png" alt="virtual-add-select-remote-and-folder.png" class="img-large img-center" />
- virtual alias file browser
  <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="virtual-alias-file-browser.png" class="img-large img-center" />
- virtual remote manager alias
  <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-remote-manager-alias.png" alt="virtual-remote-manager-alias.png" class="img-large img-center" />
- virtual select new remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-select-new-remote.png" alt="virtual-select-new-remote.png" class="img-large img-center" />

### Images (English / howto ? remote-storage-connection-settings ? azure-file-storage)

- azure file new remote settings
  <img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote-settings.png" alt="azure-file-new-remote-settings.png" class="img-large img-center" />
- azure file new remote
  <img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote.png" alt="azure-file-new-remote.png" class="img-large img-center" />
- azure file remote manager
  <img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-remote-manager.png" alt="azure-file-remote-manager.png" class="img-large img-center" />
- azure file share account key
  <img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-account-key.png" alt="azure-file-share-account-key.png" class="img-large img-center" />
- azure file share name
  <img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-name.png" alt="azure-file-share-name.png" class="img-large img-center" />

### Images (English / howto ? remote-storage-connection-settings ? combine)

- combine check folder 1
  <img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="combine-check-folder-1.png" class="img-large img-center" />
- combine check folder 2
  <img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-2.png" alt="combine-check-folder-2.png" class="img-large img-center" />
- combine select folder 1
  <img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-1.png" alt="combine-select-folder-1.png" class="img-large img-center" />
- combine select folder 2
  <img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-2.png" alt="combine-select-folder-2.png" class="img-large img-center" />
- new remote add combine
  <img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="new-remote-add-combine.png" class="img-large img-center" />
- virtual add combine input
  <img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-add-combine-input.png" alt="virtual-add-combine-input.png" class="img-large img-center" />
- virtual remote manager combine
  <img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-remote-manager-combine.png" alt="virtual-remote-manager-combine.png" class="img-large img-center" />

### Images (English / howto ? remote-storage-connection-settings ? connect-using-cli)

- add sharepoint for ms365
  <img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-ms365.png" alt="add-sharepoint-for-ms365.png" class="img-large img-center" />
- windows command prompt
  <img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows-command-prompt.png" class="img-large img-center" />

### Images (English / howto ? remote-storage-connection-settings ? crypt)

- crypt upload file compare
  <img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="crypt-upload-file-compare.png" class="img-large img-center" />
- new remote add crypt
  <img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="new-remote-add-crypt.png" class="img-large img-center" />
- virtual add crypt input
  <img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-crypt-input.png" alt="virtual-add-crypt-input.png" class="img-large img-center" />
- virtual add select remote and folder
  <img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="virtual-add-select-remote-and-folder.png" class="img-large img-center" />
- virtual remote manager crypt
  <img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="virtual-remote-manager-crypt.png" class="img-large img-center" />

### Images (English / howto ? remote-storage-connection-settings ? union)

- new remote add union
  <img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="new-remote-add-union.png" class="img-large img-center" />
- union check folder 1
  <img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="union-check-folder-1.png" class="img-large img-center" />
- union check folder 2
  <img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-2.png" alt="union-check-folder-2.png" class="img-large img-center" />
- union select folder 1
  <img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-1.png" alt="union-select-folder-1.png" class="img-large img-center" />
- union select folder 2
  <img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-2.png" alt="union-select-folder-2.png" class="img-large img-center" />
- virtual add union input
  <img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-add-union-input.png" alt="virtual-add-union-input.png" class="img-large img-center" />
- virtual remote manager union
  <img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-remote-manager-union.png" alt="virtual-remote-manager-union.png" class="img-large img-center" />

### Images (English / tutorials)

- add new wasabi remote configuration
  <img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add-new-wasabi-remote-configuration.png" class="img-large img-center" />
- add synology sftp remote
  <img src="/support/images/en/tutorials/add-synology-sftp-remote.png" alt="add-synology-sftp-remote.png" class="img-large img-center" />
- add synology smb remote
  <img src="/support/images/en/tutorials/add-synology-smb-remote.png" alt="add-synology-smb-remote.png" class="img-large img-center" />
- add synology webdav remote
  <img src="/support/images/en/tutorials/add-synology-webdav-remote.png" alt="add-synology-webdav-remote.png" class="img-large img-center" />
- browsing aws s3 and google drive via ec2 rclone
  <img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing-aws-s3-and-google-drive-via-ec2-rclone.png" class="img-large img-center" />
- chunk size and upload concurrency settings
  <img src="/support/images/en/tutorials/chunk-size-and-upload-concurrency-settings.png" alt="chunk-size-and-upload-concurrency-settings.png" class="img-large img-center" />
- compare synology nas and google drive
  <img src="/support/images/en/tutorials/compare-synology-nas-and-google-drive.png" alt="compare-synology-nas-and-google-drive.png" class="img-large img-center" />
- connected to ec2 rclone
  <img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="connected-to-ec2-rclone.png" class="img-large img-center" />
- dropbox to google drive transfer
  <img src="/support/images/en/tutorials/dropbox-to-google-drive-transfer.png" alt="dropbox-to-google-drive-transfer.png" class="img-large img-center" />
- google drive to ondrive transfer
  <img src="/support/images/en/tutorials/google-drive-to-ondrive-transfer.png" alt="google-drive-to-ondrive-transfer.png" class="img-large img-center" />
- high transfer speed with chunk size and upload concurrency
  <img src="/support/images/en/tutorials/high-transfer-speed-with-chunk-size-and-upload-concurrency.png" alt="high-transfer-speed-with-chunk-size-and-upload-concurrency.png" class="img-large img-center" />
- mount synology nas as local drive
  <img src="/support/images/en/tutorials/mount-synology-nas-as-local-drive.png" alt="mount-synology-nas-as-local-drive.png" class="img-large img-center" />
- mount wasabi as local drive
  <img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount-wasabi-as-local-drive.png" class="img-large img-center" />
- new connection to ec2 rclone
  <img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="new-connection-to-ec2-rclone.png" class="img-large img-center" />
- new remote all remotes
  <img src="/support/images/en/tutorials/new-remote-all-remotes.png" alt="new-remote-all-remotes.png" class="img-large img-center" />
- open aws s3 and cloudflare r2 remotes
  <img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open-aws-s3-and-cloudflare-r2-remotes.png" class="img-large img-center" />
- open box and google drive remotes
  <img src="/support/images/en/tutorials/open-box-and-google-drive-remotes.png" alt="open-box-and-google-drive-remotes.png" class="img-large img-center" />
- open dropbox and google drive
  <img src="/support/images/en/tutorials/open-dropbox-and-google-drive.png" alt="open-dropbox-and-google-drive.png" class="img-large img-center" />
- open google drive and onedrive
  <img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="open-google-drive-and-onedrive.png" class="img-large img-center" />
- open mega and google drive remotes
  <img src="/support/images/en/tutorials/open-mega-and-google-drive-remotes.png" alt="open-mega-and-google-drive-remotes.png" class="img-large img-center" />
- open onedrive and dropbox remotes
  <img src="/support/images/en/tutorials/open-onedrive-and-dropbox-remotes.png" alt="open-onedrive-and-dropbox-remotes.png" class="img-large img-center" />
- scheule automatic wasabi backup
  <img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule-automatic-wasabi-backup.png" class="img-large img-center" />
- sync aws s3 and google drive via ec2
  <img src="/support/images/en/tutorials/sync-aws-s3-and-google-drive-via-ec2.png" alt="sync-aws-s3-and-google-drive-via-ec2.png" class="img-large img-center" />
- sync job synology to google drive
  <img src="/support/images/en/tutorials/sync-job-synology-to-google-drive.png" alt="sync-job-synology-to-google-drive.png" class="img-large img-center" />
- synology nas auto detect
  <img src="/support/images/en/tutorials/synology-nas-auto-detect.png" alt="synology-nas-auto-detect.png" class="img-large img-center" />
- synology nas to google drag and drop
  <img src="/support/images/en/tutorials/synology-nas-to-google-drag-and-drop.png" alt="synology-nas-to-google-drag-and-drop.png" class="img-large img-center" />
- synology nas webdav and google drive
  <img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology-nas-webdav-and-google-drive.png" class="img-large img-center" />
- transfer files between aws s3 and cloudflare r2 with external rclone
  <img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" alt="transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" class="img-large img-center" />
- transfer files between aws s3 and cloudflare r2
  <img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2.png" alt="transfer-files-between-aws-s3-and-cloudflare-r2.png" class="img-large img-center" />
- transfer files between box and google drive
  <img src="/support/images/en/tutorials/transfer-files-between-box-and-google-drive.png" alt="transfer-files-between-box-and-google-drive.png" class="img-large img-center" />
- transfer files between mega and google drive
  <img src="/support/images/en/tutorials/transfer-files-between-mega-and-google-drive.png" alt="transfer-files-between-mega-and-google-drive.png" class="img-large img-center" />
- transfer files between onedrive and dropbox
  <img src="/support/images/en/tutorials/transfer-files-between-onedrive-and-dropbox.png" alt="transfer-files-between-onedrive-and-dropbox.png" class="img-large img-center" />
- transfer speed with default options
  <img src="/support/images/en/tutorials/transfer-speed-with-default-options.png" alt="transfer-speed-with-default-options.png" class="img-large img-center" />
- verify wasabi in remote manager
  <img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify-wasabi-in-remote-manager.png" class="img-large img-center" />
- wasabi and local compare and copy
  <img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi-and-local-compare-and-copy.png" class="img-large img-center" />
- wasabi and local instant sync
  <img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi-and-local-instant-sync.png" class="img-large img-center" />
- wasabi configure sync job
  <img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi-configure-sync-job.png" class="img-large img-center" />
- wasabi drag and drop
  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi-drag-and-drop.png" class="img-large img-center" />
- wasabi real time monitoring transferring
  <img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi-real-time-monitoring-transferring.png" class="img-large img-center" />
- wasabi remote in rcloneview explorer
  <img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi-remote-in-rcloneview-explorer.png" class="img-large img-center" />
- wasabi saved sync job execution
  <img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi-saved-sync-job-execution.png" class="img-large img-center" />
- app lock locking
  <img src="/support/images/en/tutorials/applock/app-lock-locking.png" alt="app-lock-locking.png" class="img-large img-center" />
- app lock reset app confirm
  <img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" alt="app-lock-reset-app-confirm.png" class="img-large img-center" />
- app lock reset app
  <img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" alt="app-lock-reset-app.png" class="img-large img-center" />
- app lock settings password
  <img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" alt="app-lock-settings-password.png" class="img-large img-center" />
- app lock settings
  <img src="/support/images/en/tutorials/applock/app-lock-settings.png" alt="app-lock-settings.png" class="img-large img-center" />
- app lock unlock
  <img src="/support/images/en/tutorials/applock/app-lock-unlock.png" alt="app-lock-unlock.png" class="img-large img-center" />
- mainwindow menu settings
  <img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" alt="mainwindow-menu-settings.png" class="img-large img-center" />
- database settings dlg
  <img src="/support/images/en/tutorials/database/database-settings-dlg.png" alt="database-settings-dlg.png" class="img-large img-center" />
- database settings menu
  <img src="/support/images/en/tutorials/database/database-settings-menu.png" alt="database-settings-menu.png" class="img-large img-center" />
- database settings warning
  <img src="/support/images/en/tutorials/database/database-settings-warning.png" alt="database-settings-warning.png" class="img-large img-center" />
- database windows path
  <img src="/support/images/en/tutorials/database/database-windows-path.png" alt="database-windows-path.png" class="img-large img-center" />
- rcloneview telegram enable
  <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview-telegram-enable.png" class="img-large img-center" />
- rcloneview telegram fields
  <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview-telegram-fields.png" class="img-large img-center" />
- telegram bot token
  <img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram-bot-token.jpg" class="img-large img-center" />
- telegram botfather search
  <img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram-botfather-search.jpg" class="img-large img-center" />
- telegram get chat id 1
  <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram-get-chat-id_1.png" class="img-large img-center" />
- telegram get chat id 2
  <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram-get-chat-id_2.png" class="img-large img-center" />
- telegram get chat id 3
  <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram-get-chat-id_3.png" class="img-large img-center" />
- telegram help
  <img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram-help.jpg" class="img-large img-center" />
- telegram job notifications
  <img src="/support/images/en/tutorials/telegram/telegram-job-notifications.jpg" alt="telegram-job-notifications.jpg" class="img-large img-center" />
- telegram job start by index 1
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram-job-start_by_index_1.jpg" class="img-large img-center" />
- telegram job start by index 2
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram-job-start_by_index_2.jpg" class="img-large img-center" />
- telegram job start by jobname
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram-job-start_by_jobname.jpg" class="img-large img-center" />
- telegram job status
  <img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram-job-status.jpg" class="img-large img-center" />
- telegram job stop
  <img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram-job-stop.jpg" class="img-large img-center" />
- telegram listjobs
  <img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram-listjobs.jpg" class="img-large img-center" />
- telegram newbot 1
  <img src="/support/images/en/tutorials/telegram/telegram-newbot_1.jpg" alt="telegram-newbot_1.jpg" class="img-large img-center" />
- telegram newbot rcloneview test bot
  <img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram-newbot_rcloneview_test_bot.jpg" class="img-large img-center" />
- telegram search my bot
  <img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram-search-my-bot.jpg" class="img-large img-center" />
- telegram start bot
  <img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram-start-bot.jpg" class="img-large img-center" />
- telegram test message
  <img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram-test-message.jpg" class="img-large img-center" />

### Images (howto root)

- add new remote
  <img src="/support/images/howto/add-new-remote.png" alt="add-new-remote.png" class="img-large img-center" />
- add remote step2
  <img src="/support/images/howto/add-remote-step2.png" alt="add-remote-step2.png" class="img-large img-center" />
- add remote step3
  <img src="/support/images/howto/add-remote-step3.png" alt="add-remote-step3.png" class="img-large img-center" />
- add remote step4
  <img src="/support/images/howto/add-remote-step4.png" alt="add-remote-step4.png" class="img-large img-center" />
- Completed install
  <img src="/support/images/howto/Completed-install.png" alt="Completed-install.png" class="img-large img-center" />
- google choose account
  <img src="/support/images/howto/google-choose-account.png" alt="google-choose-account.png" class="img-large img-center" />
- google choose another account
  <img src="/support/images/howto/google-choose-another-account.png" alt="google-choose-another-account.png" class="img-large img-center" />
- google login complete
  <img src="/support/images/howto/google-login-complete.png" alt="google-login-complete.png" class="img-large img-center" />
- google password login
  <img src="/support/images/howto/google-password-login.png" alt="google-password-login.png" class="img-large img-center" />
- google trust rclone
  <img src="/support/images/howto/google-trust-rclone.png" alt="google-trust-rclone.png" class="img-large img-center" />
- new remote step1
  <img src="/support/images/howto/new-remote-step1.png" alt="new-remote-step1.png" class="img-large img-center" />

### Images (root /img)

- docusaurus social card
  <img src="/support/img/docusaurus-social-card.jpg" alt="docusaurus-social-card.jpg" />
- docusaurus
  <img src="/support/img/docusaurus.png" alt="docusaurus.png" />
- favicon 32x32
  <img src="/support/img/favicon-32x32.png" alt="favicon-32x32.png" />
- favicon
  <img src="/support/img/favicon.ico" alt="favicon.ico" />
- logo allWhite
  <img src="/support/img/logo_allWhite.svg" alt="logo_allWhite.svg" />
- logo white
  <img src="/support/img/logo-white.svg" alt="logo-white.svg" />
- logo
  <img src="/support/img/logo.svg" alt="logo.svg" />
- og image
  <img src="/support/img/og-image.png" alt="og-image.png" />
- rcloneview preview
  <img src="/support/img/rcloneview-preview.png" alt="rcloneview-preview.png" />
- rcloneview preview.png.arc1
  <img src="/support/img/rcloneview-preview.png.arc1.png" alt="rcloneview-preview.png.arc1.png" />
- rcloneview preview.png.arch2
  <img src="/support/img/rcloneview-preview.png.arch2.png" alt="rcloneview-preview.png.arch2.png" />
- undraw docusaurus mountain
  <img src="/support/img/undraw_docusaurus_mountain.svg" alt="undraw_docusaurus_mountain.svg" />
- undraw docusaurus react
  <img src="/support/img/undraw_docusaurus_react.svg" alt="undraw_docusaurus_react.svg" />
- undraw docusaurus tree
  <img src="/support/img/undraw_docusaurus_tree.svg" alt="undraw_docusaurus_tree.svg" />

### Videos

- `/support/videos/en/howto/rcloneview-basic/rclonview-explorer-drag-and-drop.mp4`
- `/support/videos/en/howto/rcloneview-basic/windows-explorer-drag-and-drop.mp4`

<CloudSupportGrid />
