---
slug: rclone-self-update-rcloneview
title: "Rclone Self Update — Keep Your Embedded Engine Current in RcloneView"
authors:
  - casey
description: "Update the embedded rclone binary inside RcloneView with a single click, so new provider fixes and features land without a manual reinstall."
keywords:
  - rclone self update
  - update embedded rclone
  - RcloneView rclone version
  - keep rclone up to date
  - rclone binary update GUI
  - RcloneView embedded rclone
  - rclone rc api version
  - cloud storage GUI updates
  - rclone minimum version
tags:
  - RcloneView
  - feature
  - automation
  - installation
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Rclone Self Update — Keep Your Embedded Engine Current in RcloneView

> RcloneView ships with rclone built in, and can update that embedded binary from inside the app instead of asking you to track a separate download.

RcloneView doesn't just call out to whatever rclone happens to be installed on your system — it ships with its own embedded rclone binary and talks to it over the local rclone RC API. That embedded binary is what actually performs every copy, sync, and mount, so keeping it current matters for picking up new provider fixes, protocol changes, and performance improvements. Rather than requiring a full app reinstall every time rclone cuts a release, RcloneView includes an in-app Self Update capability for the embedded engine.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why the Embedded Rclone Version Matters

RcloneView requires a minimum rclone version of v1.69.1 or later, since newer app features depend on RC API capabilities only available from that point onward. Providers occasionally change their APIs, and rclone releases patch those changes — running an outdated embedded binary can mean a remote that used to work suddenly throwing authentication or listing errors that have nothing to do with your RcloneView configuration.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote configuration relying on the embedded rclone engine" class="img-large img-center" />

Because the embedded rclone communicates over `http://127.0.0.1:5582` on localhost, updating it doesn't touch your remotes, sync jobs, or saved credentials — those live in RcloneView's own configuration, separate from the binary version.

## Triggering a Self Update

The self-update action lives alongside the rclone connection details, where RcloneView already shows the currently running rclone version, the local API address, and the host OS. From there, running the update fetches and swaps in the latest compatible rclone build without leaving the app or opening a terminal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking rclone version and job history after an embedded rclone update in RcloneView" class="img-large img-center" />

This is worth checking after a support thread or release note mentions a provider-specific fix — updating the embedded binary first is a quick way to rule out version drift before troubleshooting a sync job further.

## Combining Self Update with Logging

If a job starts failing right after an update, enabling rclone logging (Settings > Embedded Rclone > Enable rclone Logging) and setting the log level to DEBUG gives you a clear before-and-after record. Restart the embedded rclone process, reproduce the job, and the log file will show exactly which version handled the request — useful when reporting an issue or comparing behavior across versions.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job after updating the embedded rclone engine in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open the footer or connection settings to check the currently running embedded rclone version.
3. Run the in-app Self Update to fetch the latest compatible rclone build.
4. Re-run an existing sync or mount to confirm everything still connects as expected.

Keeping the embedded engine current is a small habit that prevents a surprising share of "it worked yesterday" cloud sync problems.

---

**Related Guides:**

- [RcloneView Connection Manager — Embedded and External Rclone](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Rclone RC API — Remote Control with RcloneView](https://rcloneview.com/support/blog/rclone-rc-api-remote-control-rcloneview)
- [Custom Rclone Flags — Advanced Options in RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
