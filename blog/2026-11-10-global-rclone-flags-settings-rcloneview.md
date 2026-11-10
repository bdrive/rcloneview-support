---
slug: global-rclone-flags-settings-rcloneview
title: "Global Rclone Flags — Apply Custom Options to Every Job in RcloneView"
authors:
  - alex
description: "Use Global Rclone Flags in RcloneView to apply extra rclone options everywhere, with logging, config password and binary path settings explained."
keywords:
  - rclone global flags
  - RcloneView settings
  - rclone flags GUI
  - embedded rclone settings
  - no-check-certificate
  - rclone log level
  - rclone config password
  - custom rclone binary
  - RcloneView advanced settings
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Global Rclone Flags — Apply Custom Options to Every Job in RcloneView

> Set an rclone flag once in Settings and have it apply across RcloneView instead of repeating it job by job.

Most RcloneView users never leave the wizard defaults, but some setups need one extra rclone option everywhere: a self-signed certificate on a private server, a custom log location, or an encrypted config file. The Embedded Rclone settings page is where these live. RcloneView mounts AND syncs 90+ providers from one window, on Windows, macOS, and Linux, and these settings apply to that whole embedded engine.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Where the Settings Live

Open the Settings tab and choose Embedded Rclone. You will find the rclone binary location, the rclone.conf location, default download and upload folders, a Stop rclone on App Exit toggle, logging options, a Config Password field and the Global Rclone Flags box.

Embedded Rclone listens on `http://127.0.0.1:5582` by default, and RcloneView talks to it through the rclone RC API. Changing these settings changes how that engine starts, so restart Embedded Rclone after editing them.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote setup that uses the embedded rclone settings" class="img-large img-center" />

## Using Global Rclone Flags

The Global Rclone Flags field accepts additional rclone flags that apply broadly. The documented example is `--no-check-certificate`, handy when a WebDAV or HTTPS-based server uses a self-signed certificate. Use it carefully: it disables certificate verification, so keep it for trusted private servers rather than public endpoints.

Prefer the per-job Advanced Settings (transfers, checkers, checksum, retries) for tuning a single job. Reserve global flags for options that genuinely belong everywhere.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Job settings in RcloneView complementing global flags" class="img-large img-center" />

## Logging and Config Protection

Tick Enable rclone Logging, pick a log folder and file name, and choose a level: DEBUG, INFO, NOTICE or ERROR. DEBUG is the most verbose and is what support will ask for when you report a problem; click Restart Embedded Rclone, reproduce the issue, then send the log file.

If your rclone.conf is encrypted, enter the Config Password here so the embedded engine can read your remotes. You can also point RcloneView at a custom rclone binary or config path, and the in-app Self Update keeps the embedded rclone current.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History used alongside rclone logs in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open Settings, then Embedded Rclone, and review the current paths.
3. Add the flag you need to Global Rclone Flags and enable logging if you want a record.
4. Restart Embedded Rclone and run a small test job.

A few well-chosen global settings keep every job consistent without extra clicks.

---

**Related Guides:**

- [Log Debug: Troubleshoot Transfers](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)
- [Rclone Self Update in RcloneView](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)
- [Fix SSL/TLS Certificate Errors](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
