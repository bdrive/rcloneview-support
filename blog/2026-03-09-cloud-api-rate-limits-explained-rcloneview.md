---
slug: cloud-api-rate-limits-explained-rcloneview
title: "Cloud API Rate Limits Explained — Why Your Transfers Fail and How to Fix Them"
authors:
  - tayson
description: "Google Drive 403 errors? OneDrive throttling? Learn what cloud API rate limits are, why they break your transfers, and how to configure RcloneView to avoid them."
keywords:
  - cloud api rate limit
  - google drive 403 error
  - onedrive throttling
  - s3 rate limit
  - cloud transfer failed
  - api rate limit exceeded
  - cloud sync error fix
  - google drive quota exceeded
  - dropbox rate limit
  - cloud storage api limits
tags:
  - RcloneView
  - cloud-storage
  - troubleshooting
  - api
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Cloud API Rate Limits Explained — Why Your Transfers Fail and How to Fix Them

> Your cloud sync starts strong, then suddenly slows to a crawl. Error messages appear: "Rate limit exceeded," "403 Forbidden," "Too many requests." Your transfer stalls at 60%. What's happening?

Every cloud storage provider limits how fast you can interact with their API. These rate limits protect their infrastructure from abuse, but they also affect legitimate users who are moving large amounts of data. Understanding these limits — and configuring your tools to respect them — is the difference between transfers that complete reliably and transfers that fail halfway.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## What Are API Rate Limits?

When you upload, download, list, or modify files in cloud storage, your tool makes API calls. Each operation is one or more API requests. Rate limits cap how many requests you can make in a given time period.

### Types of limits

- **Requests per second** — How many API calls per second (e.g., S3: 3,500 PUT requests/second per prefix).
- **Requests per day** — Total daily API calls (e.g., Google Drive: ~10 billion queries/day for apps, but much lower per user).
- **Bandwidth per day** — Total data volume (e.g., Google Drive: ~750 GB upload/day).
- **Concurrent connections** — How many simultaneous connections allowed.
- **Burst limits** — Short-term spikes allowed before throttling kicks in.

## Rate Limits by Provider

### Google Drive

| Limit | Value |
|-------|-------|
| Upload per day | ~750 GB |
| Download per day | ~10 TB |
| API queries per 100 seconds | 1,000 per user |
| File operations per second | ~10 |
| Error code | 403 (userRateLimitExceeded), 429 |

Google Drive is one of the most aggressively rate-limited providers. If you see `403` or `userRateLimitExceeded`, you're hitting the wall.

### OneDrive / SharePoint

| Limit | Value |
|-------|-------|
| API calls | Dynamic throttling |
| Concurrent uploads | ~4 recommended |
| Error code | 429 (Too Many Requests), 503 |

Microsoft uses dynamic throttling — limits tighten as your usage increases within a session.

### AWS S3

| Limit | Value |
|-------|-------|
| PUT/COPY/POST/DELETE | 3,500 per second per prefix |
| GET/HEAD | 5,500 per second per prefix |
| No daily bandwidth limit | Unlimited |
| Error code | 503 (Slow Down) |

S3 is the most generous. Most users never hit rate limits unless doing thousands of small file operations.

### Dropbox

| Limit | Value |
|-------|-------|
| API calls | ~300 per minute for apps |
| Upload per session | Progressive throttling |
| Error code | 429 |

### Backblaze B2

| Limit | Value |
|-------|-------|
| API calls | Based on plan |
| Concurrent uploads | No hard limit |
| Bandwidth | Pay per use, no cap |

B2 is very permissive — rate limits are rarely an issue.

## How RcloneView Handles Rate Limits

### Automatic retry

When rclone receives a rate limit error (429, 403, 503), it automatically:

1. Pauses the affected transfer.
2. Waits for the time specified by the server (or uses exponential backoff).
3. Retries the operation.

You see this in the transfer log as "rate limited, waiting X seconds."

### Configurable parallel transfers

Reduce parallel transfers to lower your API request rate:

| Provider | Recommended Parallel Transfers |
|----------|-------------------------------|
| Google Drive | 3–4 |
| OneDrive | 4 |
| Dropbox | 3–4 |
| S3 | 8–32 |
| B2 | 8–16 |

### Bandwidth limiting

Use [bandwidth limits](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) to control data rate and indirectly reduce API calls.

### v1.3 Retry Failed Transfers

If transfers fail despite rate limit handling, v1.3's retry feature can re-run failed files after the job completes.

## Strategies to Avoid Rate Limits

### 1) Transfer during off-hours

Schedule large transfers for nights and weekends when other users (and your own apps) aren't making API calls:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers during off-hours" class="img-large img-center" />

### 2) Spread across multiple days

For migrations exceeding Google Drive's 750 GB daily upload limit:

- Day 1: Transfer folder A (500 GB).
- Day 2: Transfer folder B (500 GB).
- Day 3: Transfer folder C + verify all.

### 3) Use your own API credentials

Google Drive and some other providers allow higher rate limits when you use your own OAuth app credentials instead of shared ones. Configure your own Google API project for higher quotas.

### 4) Reduce file checking

For initial bulk uploads, skip destination checking. This eliminates half of your API calls (the ones that check if each file already exists).

### 5) Batch small files

If you have thousands of small files, consider archiving them into ZIPs before transferring. One 1 GB ZIP makes 1 API call instead of 10,000 individual file uploads making 10,000 calls.

## Monitor for Rate Limit Issues

Watch your transfer progress for signs of throttling:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor for rate limit errors" class="img-large img-center" />

Warning signs:

- Transfer speed drops suddenly after starting strong.
- Periodic pauses in the transfer.
- Error messages in the log with 429 or 403 codes.
- Transfer speed oscillates (fast → slow → fast).

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Set appropriate parallel transfers** for your cloud provider.
3. **Schedule large transfers** during off-hours.
4. **Monitor progress** and watch for throttling indicators.
5. **Use retry** (v1.3) for reliability.

Rate limits aren't going away — but with the right settings, you can work within them reliably.

---

**Related Guides:**

- [Fix Google Drive 403 Rate Limit Errors](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Set Bandwidth Limits](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
