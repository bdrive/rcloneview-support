---
slug: rcloneview-asustor-nas-cloud-backup
title: "Run RcloneView on ASUSTOR NAS for Automated Cloud Backup"
authors:
  - tayson
description: "ASUSTOR NAS devices are powerful enough to run RcloneView via Docker. Set up automated cloud backups, mount remote storage, and monitor transfers directly from your NAS."
keywords:
  - rcloneview asustor nas
  - asustor nas cloud backup
  - asustor docker rcloneview
  - asustor cloud sync alternative
  - asustor nas rclone gui
  - asustor automated backup cloud
  - asustor mount cloud storage
  - asustor nas s3 backup
  - asustor cloud file manager
  - rcloneview nas setup
tags:
  - nas
  - platform
  - cloud-backup
  - automation
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Run RcloneView on ASUSTOR NAS for Automated Cloud Backup

> Your ASUSTOR NAS runs 24/7 — make it your always-on cloud backup engine. RcloneView turns your NAS into a multi-cloud file management hub with scheduled backups, cloud mounting, and real-time transfer monitoring.

ASUSTOR NAS devices ship with Intel or ARM processors, run ADM (ASUSTOR Data Master) OS, and support Docker through the Portainer app or command line. This makes them capable of running RcloneView as a containerized service — always on, always backing up, without tying up a desktop or laptop. Whether you want to back up NAS shares to Backblaze B2, sync folders with Google Drive, or mount S3 as a local volume, RcloneView on your ASUSTOR NAS handles it all from a web-based GUI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why Run Cloud Backup on Your NAS

Running cloud backup directly on your NAS has several advantages over running it on a workstation:

- **Always-on operation** — your NAS is already running 24/7. Backups execute on schedule without requiring a PC to be awake.
- **LAN-speed access to NAS data** — no need to pull files over the network to a PC before uploading. The NAS reads directly from its own disks.
- **Centralized management** — all backup jobs, schedules, and logs live on the NAS. Any device with a browser can manage them.
- **No workstation resource drain** — offload the CPU and bandwidth cost of large transfers to the NAS.

## ASUSTOR NAS Compatibility

RcloneView via Docker runs on ASUSTOR models with:

- **Intel-based** (x86_64) processors: AS31, AS32, AS33, AS52, AS54, AS61, AS62, AS63, AS64, AS65, AS67, Lockerstor, Lockerstor Pro, and Flashstor series.
- **ARM-based** processors: Drivestor and Drivestor Pro series (AS11, AS33 ARM variants) — verify Docker support for your specific model.
- **ADM 4.0 or later** with Docker (Portainer) installed from App Central.
- **At least 2 GB RAM** recommended (4 GB+ for concurrent large transfers).

## Installing RcloneView via Docker

### Step 1 — Install Docker from App Central

1. Open **App Central** in your ADM web interface.
2. Search for **Portainer** (or Docker-CE if available).
3. Install and launch the Portainer app.

### Step 2 — Deploy RcloneView container

Open Portainer at `http://your-nas-ip:9443` and create a new container, or use SSH to deploy via command line:

```bash
docker run -d \
  --name rcloneview \
  -p 5572:5572 \
  -v /volume1/Docker/rcloneview/config:/config/rclone \
  -v /volume1:/data/volume1 \
  --restart unless-stopped \
  rcloneview/rcloneview:latest
```

Key volume mappings:

- `/volume1/Docker/rcloneview/config` — stores your rclone remote configurations persistently.
- `/volume1` — exposes your main NAS volume to RcloneView for backup operations.

### Step 3 — Access the web interface

Open your browser and navigate to `http://your-nas-ip:5572`. You should see the RcloneView dashboard.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote setup on ASUSTOR NAS" class="img-large img-center" />

## Connecting Cloud Remotes

From the RcloneView interface, add your cloud storage providers:

### Common setups for NAS backup

- **Backblaze B2** — cost-effective for large NAS backups at $6/TB/month.
- **Wasabi** — flat-rate S3-compatible storage with no egress fees.
- **Google Drive** — sync important folders between NAS and Drive.
- **Amazon S3** — enterprise-grade durability with flexible storage classes.
- **SFTP** — back up to a remote server or second NAS.

Each remote is configured once and saved permanently. The setup wizard walks you through authentication for each provider — API keys for S3-compatible services, OAuth for Google Drive and OneDrive.

## Scheduling Automated Backups

The core value of running RcloneView on your NAS is automated, unattended backup. Here is how to set it up:

### Creating a backup job

1. Open the two-pane explorer in RcloneView.
2. Set the left pane to your NAS local path (e.g., `/data/volume1/Photos`).
3. Set the right pane to your cloud remote (e.g., `backblaze-b2:nas-backup/photos/`).
4. Choose **Sync** to mirror the NAS folder to the cloud, or **Copy** to add new files without removing deletions.
5. Save the operation as a named job.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a backup job on ASUSTOR NAS with RcloneView" class="img-large img-center" />

### Scheduling the job

Set the job to run automatically:

- **Daily at 2:00 AM** — back up during low-usage hours to avoid impacting NAS performance.
- **Weekly full sync** — a comprehensive sync on weekends when bandwidth demand is lowest.
- **On-demand** — trigger a backup manually before making major changes.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cloud backups on ASUSTOR NAS" class="img-large img-center" />

## Mounting Cloud Storage

RcloneView can mount cloud storage as a local path on your NAS, making remote files accessible as if they were on a local disk. This is useful for:

- **Extending NAS capacity** with cloud storage.
- **Accessing archived files** without downloading them manually.
- **Streaming media** from cloud storage through your NAS media apps.

To enable FUSE mounts in Docker, add these flags to your container:

```bash
--device /dev/fuse --cap-add SYS_ADMIN
```

Then use RcloneView's Mount Manager to mount any remote to a local path.

## Monitoring Transfers

When backup jobs are running, RcloneView's transfer monitoring shows real-time progress:

- Files currently being transferred
- Transfer speed and ETA
- Errors and retries
- Completed file counts

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor NAS cloud backup progress in RcloneView" class="img-large img-center" />

Check job history to confirm that scheduled backups completed successfully. If a job fails (network outage, credential expiry), RcloneView logs the error for troubleshooting.

## Best Practices for ASUSTOR NAS Backups

- **Start with your most critical data** — photos, documents, and databases first. Media libraries can follow.
- **Use bandwidth limits** during business hours to avoid saturating your internet connection: set `--bwlimit 10M` in job options.
- **Enable versioning** on your cloud storage to protect against ransomware or accidental overwrites.
- **Back up your rclone config** — the `/config/rclone` directory contains your cloud credentials. Copy it to a second location.
- **Monitor disk health** — cloud backup does not help if the NAS disk fails before the backup runs. Use ADM's Storage Manager alerts.

## Getting Started

1. **Install Portainer** from ASUSTOR App Central.
2. **Deploy the RcloneView Docker container** with the volume mappings shown above.
3. **Add your cloud remotes** — Backblaze B2, S3, Google Drive, or any supported provider.
4. **Create and schedule backup jobs** for your most important NAS shares.
5. **Check job history weekly** to confirm everything is running smoothly.

Your ASUSTOR NAS is already protecting your data locally with RAID. Adding automated cloud backup with RcloneView gives you true off-site protection — and it runs itself.

---

**Related Guides:**

- [Cloud-to-NAS Bridge: Back Up to Synology](https://rcloneview.com/support/blog/cloud-to-synology-nas-with-rcloneview)
- [Run RcloneView on TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup)
- [Automate Daily Cloud Backups](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
