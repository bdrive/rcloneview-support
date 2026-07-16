---
slug: fix-sftp-public-key-authentication-errors-rcloneview
title: "Fix SFTP Public Key Authentication Errors — Resolve SSH Issues with RcloneView"
authors:
  - tayson
description: "Troubleshoot SFTP public key authentication failures in RcloneView. Diagnose wrong key paths, permissions, passphrase issues, and key format problems."
keywords:
  - SFTP public key error RcloneView
  - fix SFTP authentication failure
  - SSH key auth rclone SFTP
  - SFTP permission denied public key
  - RcloneView SFTP troubleshooting
  - SSH key format rclone
  - SFTP key passphrase error
  - rclone SFTP connection fix
tags:
  - RcloneView
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix SFTP Public Key Authentication Errors — Resolve SSH Issues with RcloneView

> SFTP public key authentication failures are almost always caused by key path, file permission, or passphrase mismatches — this guide walks through each one systematically.

SFTP is one of the most common ways to connect remote Linux servers in RcloneView, and public key authentication is the preferred security method over passwords. When key auth fails, the errors can be cryptic: `ssh: handshake failed`, `permission denied (publickey)`, or `no supported methods remain`. This guide covers the most frequent causes and how to diagnose and fix each one.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP Remote Configuration in RcloneView

When you create an SFTP remote in RcloneView, the relevant fields for key-based auth are:

- **Host**: the server hostname or IP
- **User**: the SSH username
- **Key file**: the path to your private key file (e.g., `~/.ssh/id_rsa` or `C:\Users\you\.ssh\id_ed25519`)
- **Key file passphrase**: the passphrase that decrypts the key (if set)

Password auth and key auth are mutually exclusive per remote. If you specify a key file, leave the password field empty.

<img src="/support/images/en/blog/new-remote.png" alt="SFTP remote configuration with key auth in RcloneView" class="img-large img-center" />

## Common Error 1: Wrong Key File Path

The most frequent cause of key auth failure is a wrong or unreachable key file path. Check:

- The path exists and points to the **private** key (not the `.pub` public key)
- On Windows, use the full absolute path (e.g., `C:\Users\username\.ssh\id_rsa`)
- On Linux/macOS, `~/.ssh/id_rsa` expands correctly — if in doubt, use the full path

In RcloneView, open the SFTP remote settings and verify the key file path. If the file doesn't exist at that location, the authentication will fail silently or with an unhelpful error.

## Common Error 2: Key File Permissions Too Open

On Linux and macOS, SSH refuses to use private key files that are world-readable. If the key file permissions are too permissive, you'll see `Permissions 0644 for '~/.ssh/id_rsa' are too open`. Fix it:

```
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh
```

On Windows, key file permissions are managed through file security settings. Ensure the key file is accessible only to your user account and not shared with Everyone.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP connection test in RcloneView" class="img-large img-center" />

## Common Error 3: Passphrase Mismatch

If your private key is passphrase-protected, the passphrase field in the RcloneView SFTP remote settings must match exactly. A blank passphrase field when the key has one set will cause auth to fail. Conversely, entering a passphrase for a key that doesn't have one will also fail.

To test whether your key passphrase is correct, open a terminal and run `ssh -i /path/to/key user@host` — if it prompts for the passphrase and accepts it, the credentials are correct. Then update the RcloneView remote accordingly.

## Common Error 4: Key Format Not Supported

Older OpenSSH private keys (PEM format) are broadly supported, but some newer ED25519 keys in the OpenSSH native format may cause issues depending on the Go SSH library version embedded in rclone. If you encounter `ssh: no supported methods remain`:

- Convert the key to PEM format: `ssh-keygen -p -m PEM -f ~/.ssh/id_ed25519`
- Or generate an RSA key: `ssh-keygen -t rsa -b 4096`

## Reading Logs for Diagnosis

Open the **Log** tab in RcloneView after a failed SFTP connection attempt. The log shows the full SSH handshake error. For additional verbosity, use the **Terminal** tab in RcloneView to run an rclone command with `-vv` flags directly, which prints the complete SSH negotiation.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing SFTP connection errors in RcloneView logs" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Open your SFTP remote settings and verify the key file path points to the correct private key.
3. On Linux/macOS, check key file permissions with `ls -la ~/.ssh/` and fix with `chmod 600`.
4. Confirm the passphrase field matches your key's passphrase, then test the connection from Remote Manager.

Systematic checking of path, permissions, and passphrase resolves the vast majority of SFTP public key authentication failures.

---

**Related Guides:**

- [Fix SFTP Connection Refused and Timeout Errors](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [Troubleshoot rclone Errors with RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Fix Cloud Sync Interrupted by Network Errors](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)

<CloudSupportGrid />
