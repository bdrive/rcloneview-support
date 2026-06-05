---
slug: fix-sftp-connection-errors-rcloneview
title: "Fix SFTP Connection Errors — Resolve SSH File Transfer Issues with RcloneView"
authors:
  - jay
description: "Diagnose and fix common SFTP connection errors in RcloneView — authentication failures, host key mismatches, and timeouts — and get SSH transfers working."
keywords:
  - fix SFTP connection errors RcloneView
  - SFTP SSH file transfer troubleshooting
  - RcloneView SFTP setup guide
  - SFTP authentication failure rclone
  - SSH file transfer errors
  - SFTP host key mismatch fix
  - rclone SFTP troubleshooting
  - resolve SFTP sync errors
  - SFTP remote cloud sync
  - RcloneView troubleshooting tips
tags:
  - RcloneView
  - sftp
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix SFTP Connection Errors — Resolve SSH File Transfer Issues with RcloneView

> SFTP errors in RcloneView almost always trace back to a handful of root causes — authentication misconfiguration, firewall rules, or host key verification failures — and each one has a direct fix.

SFTP (SSH File Transfer Protocol, port 22) is a staple for transferring files between local machines and servers: web hosts, on-premises NAS devices, and cloud VMs all commonly expose an SFTP interface. When RcloneView cannot reach an SFTP remote, the error message in the Log tab points toward the cause, but the range of possible issues — wrong credentials, blocked ports, mismatched host keys, restricted paths — can make diagnosis feel like guesswork. This guide walks through the most common SFTP errors and how to resolve each one systematically.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Setting Up the SFTP Remote Correctly

Most connection errors start at remote setup. In RcloneView, open **Remote tab > New Remote** and select **SFTP** from the provider list. The required fields are the **Host** (bare hostname or IP address — omit `sftp://`), the **Port** (defaults to 22), a **Username**, and your **Authentication** method, which is either a password or an SSH private key file path.

A frequent mistake is entering `sftp://hostname` in the Host field. RcloneView (via rclone) expects just the bare hostname or IP, and the `sftp://` prefix causes an immediate connection refusal. If your server uses key-based authentication, ensure the private key file path points to the correct file on your local machine. On Linux and macOS, the key file permissions must be `600` or stricter — the SSH client refuses to use world-readable keys.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new SFTP remote in RcloneView" class="img-large img-center" />

## Diagnosing Authentication Failures

Authentication failures surface in the RcloneView **Log tab** with messages like `ssh: handshake failed` or `Permission denied (publickey,password)`. Work through these checks in order:

1. **Verify the username** — connect once with a terminal SSH client to confirm the exact account name. RcloneView uses the same credentials, and case sensitivity matters.
2. **Check key versus password mode** — if the server enforces key-based login, a password entry in RcloneView will fail. Leave the password blank and provide the private key path instead.
3. **Enable DEBUG logging** — go to Settings > Embedded Rclone > Enable rclone Logging, set the level to DEBUG, and reproduce the failure. The log file captures the full SSH handshake and pinpoints the exact rejection step.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView transfer view for an active SFTP sync job" class="img-large img-center" />

## Resolving Host Key Mismatch Errors

The first time rclone connects to an SFTP server, it records the server's host key. If that key changes later — due to a server rebuild, OS reinstall, or certificate rotation — rclone raises a `host key mismatch` error and refuses the connection to prevent man-in-the-middle attacks. To resolve this, open the **Rclone Terminal** tab in RcloneView and run:

```
rclone config show <remote-name>
```

Identify the `known_hosts_file` path shown in the output, open that file in a text editor, and delete the stale entry for the affected host. The next connection attempt will prompt you to trust the new key and store it cleanly.

## Fixing Firewall and Timeout Issues

If the connection attempt hangs without an error — or produces `dial tcp: connection timed out` — the problem is likely a firewall blocking port 22 on either the server or the client network. Use the Terminal tab to test whether rclone can reach the server with `rclone about <remote-name>:` and compare the result to a direct terminal SSH connection. If the SSH client succeeds but rclone times out, check whether your machine or corporate network applies outbound firewall rules that affect non-browser connections. For networks that block outbound port 22, ask the server administrator to expose SFTP on an alternate port — a common workaround is port 443 — and update the Port field in your RcloneView remote settings accordingly.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP sync job in the RcloneView Job Manager" class="img-large img-center" />

## Reviewing Job History After Failed Transfers

Once the connection is stable, review the **Job History** view to confirm that previous failed runs did not leave partial files at the destination. RcloneView records each job's status, transfer count, speed, and error codes. A quick scan identifies incomplete syncs that need to be re-run, and the Dry Run option lets you preview exactly which files will be copied or deleted before committing the operation.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing SFTP sync results in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open **Remote tab > New Remote > SFTP** and enter the bare hostname (no `sftp://` prefix), port, username, and authentication credentials.
3. Enable DEBUG logging in Settings to capture the full SSH handshake when errors occur.
4. Check **Job History** after any failed transfer to identify partial syncs that need to be re-run.

With the right credentials and a clear view into rclone's log output, most SFTP errors resolve quickly — and RcloneView makes it straightforward to verify results and get back to productive file transfers.

---

**Related Guides:**

- [Manage FTP Server Files — Cloud Sync and Backup with RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [Mount SFTP and SMB as Local Drives with RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Troubleshoot Rclone Errors with RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
