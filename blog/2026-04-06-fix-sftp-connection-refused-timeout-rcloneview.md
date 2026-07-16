---
slug: fix-sftp-connection-refused-timeout-rcloneview
title: "Fix SFTP Connection Refused and Timeout Errors in RcloneView"
authors:
  - tayson
description: "Resolve SFTP connection refused, timeout, and authentication errors in RcloneView. Covers firewall rules, SSH keys, port config, and timeout tuning."
keywords:
  - sftp connection refused rclone
  - sftp timeout error rcloneview
  - fix sftp connection rclone
  - rclone sftp ssh key error
  - sftp firewall blocked
  - sftp port configuration rclone
  - rcloneview sftp setup
  - ssh connection timeout fix
  - sftp authentication failed rclone
  - rclone sftp troubleshoot
tags:
  - RcloneView
  - troubleshooting
  - sftp
  - guide
  - tips
  - self-hosted
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix SFTP Connection Refused and Timeout Errors in RcloneView

> SFTP errors in RcloneView almost always trace back to network configuration, authentication setup, or server-side settings. This guide walks through every common cause and fix.

SFTP (SSH File Transfer Protocol) is one of the most widely used remotes in rclone, connecting RcloneView to any server with SSH access — NAS devices, Linux servers, shared hosting, and self-hosted infrastructure. Unlike cloud provider APIs, SFTP depends on network reachability, firewall rules, and SSH configuration, which means there are more points of failure. Here is how to diagnose and resolve the most common SFTP issues.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Common SFTP Error Messages

| Error Message | Likely Cause |
|--------------|-------------|
| `connection refused` | SSH server not running, wrong port, or firewall block |
| `connection timed out` | Firewall dropping packets, server unreachable, or network issue |
| `ssh: handshake failed` | SSH key mismatch, incompatible algorithms, or server-side config |
| `permission denied (publickey)` | Wrong key file, key not authorized on server, or passphrase issue |
| `permission denied (password)` | Incorrect password or password auth disabled on server |
| `no supported methods remain` | Server requires auth method that rclone is not configured to use |
| `ssh: unable to authenticate` | Credentials not provided or rejected |
| `too many authentication failures` | SSH agent offering too many keys before the right one |

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="View SFTP error details in RcloneView job history" class="img-large img-center" />

## Fix 1: Connection Refused

A "connection refused" error means the TCP connection was actively rejected. The server's network stack is reachable, but nothing is listening on the target port.

### Check That SSH Is Running

On the remote server, run `sudo systemctl status sshd`. If SSH is not running, start it with `sudo systemctl start sshd && sudo systemctl enable sshd`.

### Verify the Port

The default SSH port is 22, but many servers use a custom port. Check with `grep -i "^Port" /etc/ssh/sshd_config`. In RcloneView, ensure the SFTP remote's port setting matches. A mismatch between port 22 and a custom port like 2222 is one of the most common causes.

<img src="/support/images/en/blog/new-remote.png" alt="Configure SFTP remote port in RcloneView" class="img-large img-center" />

### Check for Local Firewall Blocks

On the server, verify the firewall allows inbound connections on the SSH port. Use `sudo ufw status` (Ubuntu/Debian), `sudo firewall-cmd --list-ports` (RHEL/Fedora), or `sudo iptables -L -n | grep 22`. If the port is blocked, add a rule to allow it.

## Fix 2: Connection Timeout

A timeout means packets are being sent but no response is received. This is typically a network-level issue rather than a server-side configuration problem.

### Network Reachability

Test basic connectivity from your machine:

```bash
ping server-hostname
telnet server-hostname 22
```

If `ping` succeeds but `telnet` to port 22 fails, a firewall between you and the server is blocking the SSH port.

### Router and NAT Firewalls

If the SFTP server is behind a NAT router, ensure port forwarding is configured to route external traffic on the SSH port to the internal server IP. Without port forwarding, connections from outside the local network will time out.

### ISP or Corporate Firewall Blocks

Some ISPs and corporate networks block outbound connections on port 22. Test with an alternative port or use a VPN to bypass the restriction.

### Timeout Tuning in Rclone

Rclone's default connection timeout may be too short for high-latency connections. You can increase it by adding the `--contimeout` flag. For SFTP-specific server response delays, consider setting `--timeout` to a higher value (e.g., `5m` for slow servers).

## Fix 3: SSH Key Authentication Failures

Key-based authentication is the most secure and recommended method for SFTP connections, but misconfiguration is common.

### Verify Key File Path

In RcloneView, the SFTP remote configuration includes a field for the SSH key file path. Ensure:

- The path points to the **private** key (e.g., `~/.ssh/id_rsa` or `~/.ssh/id_ed25519`), not the public key.
- The file exists and is readable by your user account.
- The key file has correct permissions (`600` on Linux/macOS).

### Authorize the Key on the Server

The public key must be listed in `~/.ssh/authorized_keys` on the server. Append it with `cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys`, then ensure permissions are `600` for the file and `700` for the `.ssh` directory.

### Passphrase-Protected Keys

If your private key has a passphrase, rclone needs it to decrypt the key. In RcloneView's SFTP remote config, enter the passphrase in the appropriate field. If you leave it blank, authentication will fail silently.

### SSH Agent Conflicts

If an SSH agent is running with many loaded keys, the server may reject the connection after too many failed key attempts (default limit is usually 6). Either specify the exact key file in the rclone config to bypass the agent, or reduce the number of keys loaded in your agent.

## Fix 4: Password Authentication Issues

### Password Auth Disabled on Server

Many servers disable password authentication for security. Check with `grep -i "PasswordAuthentication" /etc/ssh/sshd_config`. If set to `no`, you must use key-based authentication instead.

### Incorrect Password

Ensure you are entering the correct password in RcloneView's SFTP remote configuration. Rclone stores the password in an obscured format in `rclone.conf` — if you edit the config manually, use `rclone obscure` to encode the password properly.

## Fix 5: Concurrent Connection Limits

SFTP servers often limit the number of simultaneous sessions. Rclone defaults to 4 concurrent transfers, but some servers allow only 1 or 2 connections.

If you see intermittent connection failures during large transfers, reduce concurrency:

- Set `--transfers 1` or `--transfers 2` to limit parallel connections.
- Set `--checkers 1` to reduce the number of simultaneous check operations.

Some shared hosting providers are especially restrictive. Start with low concurrency and increase gradually.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SFTP transfer progress in RcloneView" class="img-large img-center" />

## Fix 6: SSH Algorithm Incompatibility

Older servers may not support modern SSH algorithms, or hardened servers may reject older algorithms. If you see "handshake failed" errors, update the SSH server software if possible, or check `/etc/ssh/sshd_config` for `KexAlgorithms`, `Ciphers`, and `MACs` restrictions.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer with SFTP remote connected" class="img-large img-center" />

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Add an SFTP remote** with correct host, port, and authentication settings.
3. **Test the connection** by browsing the remote in the explorer.
4. **Run through the checklist** above if you encounter errors.

SFTP issues are almost always configuration problems, not software bugs. Methodically checking each layer — network, firewall, authentication, and server settings — resolves the vast majority of cases.

---

**Related Guides:**

- [Troubleshoot Rclone Errors in RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Fix Rclone Config Corruption](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Recover Interrupted Transfers](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
