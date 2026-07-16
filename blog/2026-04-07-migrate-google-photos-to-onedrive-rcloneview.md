---
slug: migrate-google-photos-to-onedrive-rcloneview
title: "Migrate Google Photos to OneDrive with RcloneView"
authors:
  - tayson
description: "Step-by-step guide to migrating your Google Photos library to OneDrive using RcloneView. Covers read-only access, folder structure, metadata handling, and organization."
keywords:
  - rcloneview
  - google photos to onedrive
  - google photos migration
  - migrate google photos
  - google photos rclone
  - onedrive photos
  - photo migration
  - cloud photo transfer
  - google photos backup
  - google photos export
tags:
  - google-photos
  - onedrive
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Migrate Google Photos to OneDrive with RcloneView

> Your photo library is one of the most personal and irreplaceable collections you own — moving it between clouds requires care. **RcloneView** gives you a visual, step-by-step way to migrate your entire Google Photos library to OneDrive without losing your organizational structure.

Google Photos has been a default choice for photo storage for years, thanks to its integration with Android and Google's ecosystem. But circumstances change. Maybe you are moving to Microsoft 365, your Google storage is running low, or you prefer OneDrive's tighter integration with Windows. Whatever the reason, migrating a photo library with thousands (or tens of thousands) of images and videos requires a reliable process.

The challenge is that Google Photos is not a simple file system. It organizes photos by date, albums, and metadata rather than traditional folders. Rclone handles this by presenting Google Photos as a structured directory, and RcloneView gives you a visual interface to browse, select, and transfer everything to OneDrive — complete with monitoring and verification.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Understanding Google Photos as a Remote

Before starting the migration, it is important to understand how Google Photos works as a cloud remote in RcloneView.

### Read-Only Access

Google Photos' API provides **read-only access** to your library. This means:

- You can **browse and download** all your photos and videos through RcloneView.
- You **cannot delete, rename, or modify** files on Google Photos through the API.
- You **cannot upload** new files to Google Photos through this remote.

This is a Google API limitation, not an RcloneView limitation. For migration purposes, read-only access is sufficient — you are pulling data out of Google Photos, not writing to it.

### Folder Structure

Google Photos presents your library through two main directory types:

- **`media/by-year/`** — All photos organized by year (e.g., `media/by-year/2024/`, `media/by-year/2025/`). This contains every photo in your library, organized chronologically.
- **`media/by-month/`** — The same photos organized by year and month (e.g., `media/by-month/2024/2024-06/`).
- **`album/`** — Your manually created albums. Each album appears as a folder containing its photos.

Photos that appear in albums also appear in the date-based directories. This means there can be apparent duplication — the same photo listed under `media/by-year/2024/` and under `album/Vacation/`. During migration, you will want to choose one organizational approach to avoid copying files twice.

## Setting Up Both Remotes

### Adding Google Photos

1. Open RcloneView and click **+ New Remote**.
2. Select **Google Photos** from the provider list.
3. Follow the OAuth flow — you will be redirected to Google to authorize access. Grant read-only permission to your photo library.
4. Name the remote (e.g., `MyGooglePhotos`) and save.

### Adding OneDrive

1. Click **+ New Remote** again.
2. Select **Microsoft OneDrive** from the provider list.
3. Follow the OAuth flow to authorize access to your OneDrive account.
4. Select the drive type (Personal, Business, or SharePoint).
5. Name the remote (e.g., `MyOneDrive`) and save.

Both remotes now appear in RcloneView's Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Planning Your Folder Structure on OneDrive

Before transferring, decide how you want your photos organized on OneDrive. You have several options:

### Option 1: Mirror the Year-Based Structure

Copy the `media/by-year/` directory from Google Photos to a `Photos/` folder on OneDrive. Your OneDrive structure will look like:

```
Photos/
  2020/
  2021/
  2022/
  2023/
  2024/
  2025/
  2026/
```

This is the simplest approach and works well with OneDrive's built-in photo features, which can display images in a timeline view.

### Option 2: Use Month-Based Organization

Copy `media/by-month/` for more granular organization:

```
Photos/
  2024/
    2024-01/
    2024-02/
    ...
  2025/
    2025-01/
    ...
```

This is helpful if you have a large library and want to quickly find photos from a specific month.

### Option 3: Album-Based Organization

If you have meticulously organized your Google Photos into albums, copy the `album/` directory:

```
Photos/Albums/
  Vacation 2024/
  Birthday Party/
  Work Events/
```

Note that album-based migration may miss photos that were never added to any album. For a complete migration, combine this with one of the date-based approaches.

### Recommended Approach

For most users, **Option 1 (year-based) is the best starting point**. It captures every photo in a clean, chronological structure. If albums are important to you, run a second pass copying just the `album/` directory to a separate folder on OneDrive.

## Running the Migration

With both remotes set up and your folder strategy decided, start the transfer.

### Step 1: Browse and Preview

Open Google Photos in one Explorer pane and OneDrive in the other. Navigate through the Google Photos directory structure to confirm you can see your photos organized by year, month, and album.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### Step 2: Create the Destination Folder

In the OneDrive pane, create a `Photos` folder (or whatever name you chose) to serve as the migration target.

### Step 3: Start with a Test Batch

Before migrating your entire library, test with a single year:

1. In the Google Photos pane, navigate to `media/by-year/2025/` (or any recent year with a manageable number of photos).
2. Drag the folder to the `Photos/` directory on OneDrive.
3. Monitor the transfer to confirm photos arrive correctly.
4. Open a few transferred photos on OneDrive to verify they display correctly and retain their quality.

### Step 4: Run the Full Migration

Once the test succeeds, transfer the remaining years:

1. Create a **Copy** job from `media/by-year/` on Google Photos to `Photos/` on OneDrive.
2. Run a **Dry Run** first to see the total file count and estimated transfer volume.
3. Execute the copy job.

For large libraries (10,000+ photos), this can take several hours. RcloneView will show progress in real time.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

### Step 5: Migrate Albums (Optional)

If you want your album structure on OneDrive as well:

1. Create a second copy job from `album/` on Google Photos to `Photos/Albums/` on OneDrive.
2. Run the copy. Note that this will create duplicate copies of photos that already exist in the year-based folders. If storage is a concern, you may want to skip this step or selectively copy only certain albums.

## Understanding Metadata and File Formats

### What Transfers

- **Original resolution photos and videos** — files are transferred at their original quality, not the compressed "Storage saver" versions.
- **File names** — original camera file names are preserved (e.g., `IMG_20240615_143022.jpg`).
- **File dates** — creation and modification timestamps are preserved where the format supports it.

### What Does Not Transfer

- **Google Photos metadata** — descriptions, tags, facial recognition data, and location information stored in Google Photos' database do not transfer. This metadata is proprietary to Google's platform.
- **Edits made in Google Photos** — if you edited a photo in Google Photos (cropped, filtered, etc.), only the original unedited version is available through the API. The edited version is not accessible.
- **Shared album context** — photos shared with you by others may or may not be accessible depending on Google's sharing settings.

### EXIF Data

The good news is that most important metadata is embedded directly in photo files as EXIF data. This includes:

- **Date and time** the photo was taken.
- **Camera model** and settings (aperture, shutter speed, ISO).
- **GPS coordinates** (if location was enabled when the photo was taken).

This EXIF data transfers with the file and is readable by OneDrive, Windows Photos, and virtually any photo management app.

## Verifying the Migration

After the transfer completes, verify everything arrived correctly.

### Folder Comparison

Use RcloneView's **Compare** feature:

1. Open Google Photos in one pane and OneDrive in the other.
2. Navigate to matching directories (e.g., `media/by-year/2024/` and `Photos/2024/`).
3. Run a comparison to identify any files that exist on Google Photos but are missing from OneDrive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

### Spot-Check Photos

Open several transferred photos on OneDrive to confirm:

- Images display correctly and are not corrupted.
- Videos play back properly.
- File sizes match expectations (a 5MB JPEG on Google Photos should be roughly 5MB on OneDrive).

### Review Job History

Check the **Job History** panel for any errors during the transfer. Common issues include:

- **Skipped files** due to unsupported characters in file names.
- **Timeout errors** for very large video files.
- **Rate limiting** from Google's API (rare but possible with very large libraries).

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Tips for a Smooth Migration

- **Run the migration during off-peak hours.** Large photo libraries can take hours to transfer. Starting overnight gives the process uninterrupted time.
- **Use scheduling for very large libraries.** If you have 50,000+ photos, create a scheduled job that runs daily. Each run picks up where the last one left off, and the migration completes over several days without you monitoring it constantly.
- **Do not delete Google Photos yet.** Keep your Google Photos library intact until you have fully verified the OneDrive copy. Google Photos is read-only through the API anyway, so there is no accidental deletion risk from RcloneView.
- **Check OneDrive storage limits.** Make sure your OneDrive plan has enough space for your entire photo library. Microsoft 365 Personal includes 1 TB, and Family plans offer up to 6 TB shared.
- **Consider OneDrive's camera roll integration.** After migration, you can set OneDrive's mobile app to automatically upload new photos. This creates a seamless transition from Google Photos for going forward.
- **Watch for Google API rate limits.** Google Photos API has usage quotas. If you hit rate limits, RcloneView will retry automatically, but the transfer may slow down temporarily.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Connect Google Photos** via OAuth in the New Remote wizard (read-only access).
3. **Connect OneDrive** via OAuth.
4. **Browse, copy, and verify** — your photo memories, safely migrated.

Your photos are irreplaceable. RcloneView makes sure they arrive safely on OneDrive.

---

**Related Guides:**

- [Add OAuth Online Login](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Compare Folder Contents](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Execute and Manage Jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
