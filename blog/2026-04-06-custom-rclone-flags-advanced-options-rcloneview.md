---
slug: custom-rclone-flags-advanced-options-rcloneview
title: "Use Custom Rclone Flags and Advanced Options in RcloneView Jobs"
authors:
  - tayson
description: "Learn how to add custom rclone flags in RcloneView for performance tuning, debugging, and advanced job configuration. Covers transfers, checkers, fast-list, and more."
keywords:
  - rclone custom flags
  - rcloneview advanced options
  - rclone transfers flag
  - rclone fast-list performance
  - rclone checkers setting
  - rclone no-traverse flag
  - rclone size-only flag
  - rcloneview job configuration
  - rclone performance tuning
  - rclone debugging flags
tags:
  - RcloneView
  - feature
  - rclone
  - guide
  - tips
  - cli
  - performance
  - best-practices
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Use Custom Rclone Flags and Advanced Options in RcloneView Jobs

> RcloneView handles the common cases automatically, but rclone's real power is in its flags. Knowing which ones to add -- and where -- can cut transfer times in half or solve stubborn edge cases.

Rclone has hundreds of command-line flags that control everything from transfer parallelism to checksum behavior to retry logic. RcloneView provides a clean interface for the most common operations, but it also lets you inject custom flags into any job for situations where defaults are not enough. This guide covers the most useful flags, when to use them, and how to configure them in RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Where to Add Custom Flags in RcloneView

RcloneView supports custom flags in two places:

1. **Job Configuration** -- when creating or editing a job (copy, sync, move), there is a field for additional flags. Enter them exactly as you would on the command line.
2. **Terminal** -- for one-off commands, open the Terminal panel and type the full rclone command with any flags you need.

Flags added to a saved job persist across runs, so you configure them once and they apply every time the job executes -- including scheduled runs.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView job configuration with custom flags" class="img-large img-center" />

## Performance Tuning Flags

These flags directly impact transfer speed and resource usage.

### --transfers N

Controls how many files are transferred in parallel. Default is 4.

```bash
--transfers 16
```

Increase this for many small files or when the provider supports high concurrency. S3, B2, and Wasabi handle 16-32 parallel transfers well. Google Drive may throttle above 8-10.

### --checkers N

Controls how many files are checked (compared) in parallel. Default is 8.

```bash
--checkers 32
```

Increase this when running sync or check operations on directories with many files. The checking phase is often the bottleneck, not the transfer.

### --fast-list

Uses fewer API calls to list directories by requesting all objects in a single request. Dramatically faster for S3-compatible providers with large buckets.

```bash
--fast-list
```

Trade-off: uses more memory since the entire listing is held in memory. On buckets with millions of objects, this can consume several gigabytes of RAM.

### --no-traverse

Skips listing the destination entirely. Useful when copying a few files into a destination with millions of existing files.

```bash
--no-traverse
```

Without this flag, rclone lists the entire destination to check for existing files. If you know the destination is mostly irrelevant (e.g., copying 10 new files into a bucket with 5 million objects), `--no-traverse` saves minutes of listing time.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane view for configuring transfer jobs" class="img-large img-center" />

### --buffer-size

Controls the in-memory buffer per file transfer. Default is 16 MiB.

```bash
--buffer-size 64M
```

Increase for large files on high-bandwidth connections to reduce I/O stalls. Decrease if memory is constrained.

### --multi-thread-streams N

Number of streams for multi-thread downloads of a single file. Default is 4.

```bash
--multi-thread-streams 8
```

Helps when downloading large individual files from providers that support byte-range requests.

## Comparison and Behavior Flags

These flags change how rclone decides what to transfer.

### --size-only

Compare files by size only, ignoring modification time and checksums.

```bash
--size-only
```

Use when timestamps are unreliable (common with some SFTP servers) or when you want the fastest possible comparison at the cost of missing same-size changes.

### --ignore-existing

Skip files that already exist on the destination, regardless of size or date.

```bash
--ignore-existing
```

Ideal for incremental uploads where you never modify existing files -- only add new ones. Much faster than comparing every file.

### --ignore-size

Compare files by modification time only, ignoring size.

```bash
--ignore-size
```

Rarely needed, but useful with providers that report incorrect sizes for certain file types.

### --update

Skip files that are newer on the destination.

```bash
--update
```

Useful for bidirectional-style workflows where you want to copy only files that are older on the destination.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders with custom comparison flags" class="img-large img-center" />

## Retry and Reliability Flags

### --retries N

Number of retries for failed operations. Default is 3.

```bash
--retries 10
```

Increase for unreliable networks or providers with intermittent errors.

### --retries-sleep DURATION

Time to wait between retries. Default is 0.

```bash
--retries-sleep 5s
```

Adds a delay between retries, useful when rate-limited by the provider.

### --low-level-retries N

Number of retries for low-level operations (HTTP requests). Default is 10.

```bash
--low-level-retries 20
```

### --timeout DURATION

IO idle timeout. Default is 5m0s.

```bash
--timeout 10m
```

Increase for very slow connections or providers with high latency.

## Debugging and Logging Flags

When a job fails or behaves unexpectedly, these flags help diagnose the problem.

### -v / -vv

Verbose and very verbose output.

```bash
-v
```

Shows each file as it is transferred and basic progress information. Use `-vv` for detailed debug output including HTTP requests.

### --log-file PATH

Write logs to a file instead of the console.

```bash
--log-file /tmp/rclone-debug.log
```

### --log-level DEBUG

Set the log level explicitly.

```bash
--log-level DEBUG
```

Produces the most detailed output. Use when reporting issues or investigating unexpected behavior.

### --dry-run

Simulate the operation without making any changes.

```bash
--dry-run
```

Always run this first when testing a new flag combination to confirm it does what you expect.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer with verbose logging in RcloneView" class="img-large img-center" />

## Per-Job Flag Configuration

RcloneView lets you save different flag sets for different jobs. Some practical combinations:

**Large file sync to S3:**
```
--transfers 8 --checkers 16 --fast-list --buffer-size 64M
```

**Incremental backup of small files:**
```
--transfers 32 --checkers 64 --ignore-existing --fast-list
```

**Careful sync with dry-run first:**
```
--dry-run -v
```
Then remove `--dry-run` for the actual run.

**Debug a failing transfer:**
```
-vv --log-file /tmp/debug.log --retries 1
```

## Flags to Avoid Unless You Know What You Are Doing

| Flag | Risk |
|------|------|
| `--delete-before` | Deletes destination files before transferring -- dangerous if the transfer fails mid-way |
| `--max-delete N` without testing | May prevent cleanup if set too low |
| `--no-check-certificate` | Disables TLS verification -- security risk |
| `--ignore-checksum` | Skips integrity verification -- defeats the purpose of checksums |

## Best Practices

- **Start with defaults** -- rclone's defaults are sensible for most workloads. Only add flags when you have a specific problem or measurable bottleneck.
- **Test with --dry-run** before applying new flags to production jobs.
- **Document your flags** -- when saving a job with custom flags, note why each flag is there so future you (or teammates) understand the intent.
- **Benchmark before and after** -- measure transfer times with and without performance flags to confirm they actually help for your workload.
- **Use -v for production jobs** -- the slight overhead is worth the visibility into what happened during each run.

---

**Related Guides:**

- [Verify Cloud File Integrity with Check and Compare](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [Recover Interrupted and Failed Transfers](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Cloud-to-Cloud Transfers and Syncing](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
