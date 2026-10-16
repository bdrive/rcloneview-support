---
slug: fix-external-rclone-rcd-connection-refused-rcloneview
title: "Fix External Rclone Connection Refused — Troubleshoot rcd Access with RcloneView"
authors:
  - casey
description: "Fix RcloneView external rclone connection errors: check rclone rcd, port 5572, credentials, firewall, and SSL settings with Test Connection."
keywords:
  - rclone rcd connection refused
  - RcloneView external rclone
  - rclone remote control not connecting
  - rclone rcd port 5572
  - RcloneView connect manager
  - rclone rcd authentication failed
  - fix rclone rc connection
  - rclone rcd firewall
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cli
  - self-hosted
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix External Rclone Connection Refused — Troubleshoot rcd Access with RcloneView

> When RcloneView cannot reach your external rclone server, the cause is almost always one of five things you can check in minutes.

RcloneView ships with an embedded rclone, but many users point it at an external rclone running on a NAS, VPS, or AWS EC2 instance through the Connect Manager. When that link fails with "connection refused", a timeout, or an authentication error, a short checklist finds the cause.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Confirm rclone rcd Is Actually Running

RcloneView talks to an external rclone through its Remote Control API, started with `rclone rcd`. On the server, launch it with explicit credentials and address, for example `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`. The default external port is 5572, while the embedded instance uses 5582 on localhost.

A frequent mistake is binding to `127.0.0.1` and then connecting from another machine. Loopback only accepts local traffic. For a remote server, bind to `0.0.0.0:5572` and restrict access by IP in your firewall. Note that RcloneView is a GUI tool and is not installed on the server; the server only runs rclone.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Connecting RcloneView to an external rclone host" class="img-large img-center" />

## Check Network Path and Credentials

If rcd is running but the connection is still refused, test the path. From the machine running RcloneView, a health check against `/rc/noop` with your username and password should return a response. If it hangs, a firewall or cloud security group is blocking port 5572. On AWS EC2, the security group needs a Custom TCP rule for 5572 in addition to restricted SSH.

Authentication failures are separate: the username and password entered in RcloneView must match `--rc-user` and `--rc-pass` exactly, including case.

<img src="/support/images/en/blog/new-remote.png" alt="Entering external connection details in RcloneView" class="img-large img-center" />

## Verify Settings in Connect Manager

Open Settings > Connect Manager > New Connection and fill in the Display Name, the address in `http://<host>:5572` form, and your credentials. If your server uses a self-signed certificate, the option to disable SSL certificate verification lets the connection proceed. Press Test Connection before saving so you see the result immediately.

If it still fails, enable rclone logging under Settings > Embedded Rclone, set the level to DEBUG, restart, and reproduce the problem to capture a log.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing logs and history in RcloneView" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Start `rclone rcd` on the server with a user, password, and reachable address.
3. Open the port in your firewall or security group.
4. Add the connection in Connect Manager and press Test Connection.

Once the link is stable, you can manage a remote server's cloud storage from your desktop.

---

**Related Guides:**

- [RcloneView Connection Manager — Embedded and External](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Fix SSL/TLS Certificate Errors](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)
- [Fix SFTP Connection Refused and Timeout](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
