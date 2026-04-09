---
slug: fix-s3-multipart-upload-failures-rcloneview
title: "Fix S3 Multipart Upload Failures in RcloneView"
authors:
  - tayson
description: "Troubleshoot and fix S3 multipart upload failures in RcloneView. Resolve incomplete uploads, part size errors, and orphaned multipart sessions."
keywords:
  - rcloneview
  - s3 multipart upload failure
  - fix s3 upload error
  - multipart upload incomplete
  - s3 upload timeout
  - s3 part size error
  - orphaned multipart upload
  - s3 upload troubleshooting
  - rclone s3 multipart
  - cloud upload fix
tags:
  - RcloneView
  - troubleshooting
  - amazon-s3
  - s3-compatible
  - cloud-storage
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix S3 Multipart Upload Failures in RcloneView

> S3 multipart uploads split large files into chunks for parallel transfer and resumability, but failures during the process can leave incomplete uploads, waste storage, and block transfers — here is how to fix them in RcloneView.

Amazon S3 and S3-compatible providers (Wasabi, Backblaze B2 S3, Cloudflare R2, MinIO, DigitalOcean Spaces) require multipart uploads for files larger than 5 GB and recommend them for files over 100 MB. The file is split into parts (default 5 MB to 5 GB each), uploaded in parallel, and assembled server-side. When this process fails partway through — due to network interruptions, timeouts, or misconfigured part sizes — the result is an incomplete upload that consumes storage but produces no usable object.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Common Symptoms

- **Upload stalls or hangs**: The transfer appears to stop midway through a large file. RcloneView's monitoring shows no progress for an extended period.
- **"EntityTooSmall" error**: Parts smaller than the minimum size (5 MB for most S3 providers) were uploaded. This typically happens when the chunk size configuration is too small relative to the file size.
- **"EntityTooLarge" error**: A single part exceeds the maximum allowed size (5 GB).
- **"InvalidPart" or "InvalidPartOrder"**: Parts were uploaded out of order or a part was corrupted during transfer. The server rejects the completion request.
- **Storage usage grows but files do not appear**: Incomplete multipart uploads consume storage. The parts exist on the server but the final object is never assembled.

## Fix 1: Adjust Chunk Size

The most common cause of multipart failures is an incorrect chunk size relative to the file size. S3 allows a maximum of 10,000 parts per upload. If your chunk size is too small for a large file, the upload exceeds the part limit and fails.

**Example**: A 500 GB file with the default 5 MB chunk size would require 100,000 parts — far exceeding the 10,000-part limit.

In RcloneView, adjust the chunk size when configuring your S3 remote or in the job's advanced options. A good rule of thumb: set chunk size to at least `file_size / 10,000`. For a 500 GB file, use at least 50 MB chunks. For most workloads, 64 MB to 128 MB chunks provide a good balance between parallelism and reliability.

You can set this with the `--s3-chunk-size` flag in RcloneView's custom flags field.

## Fix 2: Increase Upload Timeout

Large parts over slow connections can exceed the default timeout. If your connection is slower than 10 Mbps, a 128 MB chunk could take over 100 seconds to upload — close to default timeout limits.

Increase the timeout with the `--timeout` flag. For example, `--timeout 300s` gives each part up to 5 minutes to complete. You can also reduce the chunk size to make individual parts faster to transfer.

## Fix 3: Reduce Transfer Concurrency

Uploading too many parts simultaneously can overwhelm your network connection or the S3 endpoint. If you see frequent timeouts or connection resets during multipart uploads, reduce the number of concurrent transfers.

In RcloneView's job configuration, lower the transfers count from the default (4) to 2 or even 1 for very large files. You can also use `--s3-upload-concurrency` to control how many parts of a single file are uploaded in parallel (default is 4).

## Fix 4: Clean Up Orphaned Multipart Uploads

Failed multipart uploads leave orphaned parts on the server that consume storage and incur costs. These parts are not visible as objects — you will not see them when browsing the bucket in RcloneView or the AWS console.

To clean up orphaned uploads:

- **AWS S3**: Configure a lifecycle rule on the bucket to automatically abort incomplete multipart uploads after a specified number of days (e.g., 7 days). This is done in the AWS console under the bucket's Management tab.
- **Using rclone**: Run `rclone cleanup remote:bucket` from RcloneView's built-in terminal. This aborts all pending multipart uploads on the specified bucket.
- **S3-compatible providers**: Most providers support the same lifecycle rules or cleanup commands, but check your provider's documentation for specifics.

## Fix 5: Enable Retry on Failure

Network interruptions during multipart uploads can cause individual parts to fail. RcloneView retries failed operations automatically (default 3 retries with exponential backoff). If you experience frequent transient failures, increase the retry count with `--retries 5` or `--retries 10` in the custom flags.

For very unreliable connections, also set `--low-level-retries 10` to retry individual HTTP requests before counting them as a failed operation.

## Fix 6: Use Server-Side Copy When Possible

If you are copying between two S3-compatible buckets on the same provider, server-side copy avoids multipart upload issues entirely — the data moves within the provider's network without passing through your machine. RcloneView uses server-side copy automatically when both source and destination are on the same S3 provider.

For cross-provider transfers (e.g., AWS S3 to Cloudflare R2), data must pass through your machine and multipart uploads apply on the destination side.

## Preventing Future Failures

- **Set chunk size proactively**: Before uploading files larger than 1 GB, calculate the required chunk size (`file_size / 10,000`) and set it in the custom flags.
- **Enable lifecycle cleanup**: Always configure a lifecycle rule to abort incomplete multipart uploads. This prevents orphaned parts from accumulating.
- **Monitor transfers**: Use RcloneView's real-time monitoring to catch stalled uploads early. Pausing and resuming a stalled transfer often resolves transient issues.
- **Test with dry run**: For critical uploads, use RcloneView's dry run mode to verify the transfer plan before committing.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Configure your S3 remote with an appropriate chunk size for your largest files.
3. Set lifecycle rules on your buckets to auto-clean orphaned uploads.
4. Monitor transfers in real time and adjust concurrency as needed.

Multipart upload failures are the most common issue when working with large files on S3. Proper chunk size configuration, timeout settings, and orphaned upload cleanup resolve the vast majority of cases.

---

**Related Guides:**

- [Add AWS S3 and S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Real-time Transfer Monitoring](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Create Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
