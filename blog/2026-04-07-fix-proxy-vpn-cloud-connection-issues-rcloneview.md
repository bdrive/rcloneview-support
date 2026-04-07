---
slug: fix-proxy-vpn-cloud-connection-issues-rcloneview
title: "Fix Proxy and VPN Cloud Connection Issues in RcloneView"
authors:
  - tayson
description: "Resolve cloud sync and transfer failures in RcloneView when behind corporate proxies or VPNs. Covers HTTP_PROXY settings, SSL certificate errors, split tunneling, DNS resolution issues, and firewall bypass techniques."
keywords:
  - rclone proxy settings
  - rclone VPN connection error
  - rclone corporate proxy fix
  - rclone SSL certificate error
  - rclone HTTPS_PROXY config
  - rclone DNS resolution failure
  - rclone firewall blocked
  - rcloneview proxy configuration
  - rclone split tunneling VPN
  - fix rclone connection behind proxy
tags:
  - RcloneView
  - troubleshooting
  - guide
  - tips
  - security
  - cloud-storage
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Fix Proxy and VPN Cloud Connection Issues in RcloneView

> Corporate proxies and VPNs frequently break cloud sync connections with cryptic timeout and certificate errors. This guide covers every common scenario and how to configure RcloneView to work reliably behind network restrictions.

Many organizations route internet traffic through proxy servers or require VPN connections for remote workers. While these measures improve security, they often interfere with cloud storage API calls. Rclone and RcloneView need direct HTTPS access to cloud provider endpoints, and anything sitting between your machine and those endpoints — proxies, firewalls, VPN tunnels, or SSL inspection appliances — can cause connection failures. The errors range from timeouts and DNS failures to TLS handshake errors and certificate rejections. This guide walks through each issue and provides concrete fixes.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Configuring HTTP_PROXY and HTTPS_PROXY Environment Variables

Rclone respects the standard HTTP proxy environment variables used by most networking tools. If your organization requires a proxy for internet access, you must set these variables so rclone knows where to route its traffic.

### Setting Proxy Variables

**Windows (System Environment Variables):**

1. Open **Settings > System > About > Advanced System Settings > Environment Variables**.
2. Under System Variables (or User Variables), add:
   - `HTTP_PROXY` = `http://proxy.company.com:8080`
   - `HTTPS_PROXY` = `http://proxy.company.com:8080`
   - `NO_PROXY` = `localhost,127.0.0.1,.internal.company.com`
3. Restart RcloneView to pick up the new variables.

**macOS / Linux (shell profile):**

Add to `~/.bashrc`, `~/.zshrc`, or `/etc/environment`:

```bash
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="http://proxy.company.com:8080"
export NO_PROXY="localhost,127.0.0.1,.internal.company.com"
```

Source the file or restart your terminal session.

### Authenticated Proxies

If your proxy requires a username and password, include credentials in the URL:

```
http://username:password@proxy.company.com:8080
```

Special characters in the password must be URL-encoded (e.g., `@` becomes `%40`, `#` becomes `%23`).

### SOCKS5 Proxies

For SOCKS5 proxies (common with SSH tunnels), use:

```
socks5://proxy.company.com:1080
```

Set this as both `HTTP_PROXY` and `HTTPS_PROXY`.

### Verifying Proxy Configuration

Test that rclone can reach a cloud provider through the proxy:

```bash
rclone lsd remote: --dump headers -v
```

If the connection succeeds, you will see the directory listing. The `--dump headers` flag shows the HTTP headers, which can confirm the proxy is being used.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Fixing SSL Certificate Errors

SSL/TLS certificate errors are the most common problem behind corporate proxies. Many organizations use SSL inspection (also called HTTPS interception or man-in-the-middle inspection) where the proxy decrypts and re-encrypts HTTPS traffic using the organization's own certificate authority (CA). Rclone does not trust this CA by default, causing errors like:

- `x509: certificate signed by unknown authority`
- `TLS handshake timeout`
- `SSL certificate problem: unable to get local issuer certificate`

### Fix: Add the Corporate CA Certificate

1. **Get the corporate root CA certificate** from your IT department. It is usually a `.pem` or `.crt` file.
2. **Tell rclone to trust it** using the `--ca-cert` flag:
   ```bash
   rclone lsd remote: --ca-cert /path/to/corporate-ca.pem
   ```
3. **Make it permanent** by setting it in your rclone config environment. Add to your shell profile:
   ```bash
   export RCLONE_CA_CERT="/path/to/corporate-ca.pem"
   ```
4. In RcloneView, add `--ca-cert /path/to/corporate-ca.pem` as a custom flag in your remote or job configuration.

### Fix: Add CA to System Trust Store

Alternatively, add the corporate CA to your operating system's trust store so all applications (including rclone) trust it automatically:

**Windows:**
```
certutil -addstore "Root" corporate-ca.crt
```

**macOS:**
```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain corporate-ca.crt
```

**Linux (Debian/Ubuntu):**
```bash
sudo cp corporate-ca.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### Last Resort: Disable SSL Verification

If you cannot obtain the corporate CA certificate, you can disable SSL verification entirely. This is **not recommended** for production use as it removes protection against actual man-in-the-middle attacks:

```bash
rclone lsd remote: --no-check-certificate
```

Use this only for testing to confirm that the certificate is the issue, then pursue a proper CA certificate solution.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Resolving DNS Issues Behind VPNs

VPN connections often override your system's DNS settings, which can cause cloud provider domains to fail to resolve or resolve to incorrect addresses.

### Symptoms

- `dial tcp: lookup storage.googleapis.com: no such host`
- `dial tcp: lookup graph.microsoft.com: i/o timeout`
- Connections that worked before the VPN was connected now fail.

### Fixes

**Check DNS resolution:**

```bash
nslookup storage.googleapis.com
nslookup graph.microsoft.com
nslookup api.dropboxapi.com
```

If these fail or return unexpected IPs while on the VPN, DNS is the issue.

**Use a specific DNS server:**

Some VPN clients allow you to configure DNS settings. Ensure your VPN is using DNS servers that can resolve public cloud provider domains. If your VPN forces you to use internal DNS servers that cannot resolve external domains, ask your IT team to add DNS forwarding rules for cloud provider domains.

**Manual DNS override (temporary):**

Add cloud provider endpoints to your hosts file as a temporary workaround:

- Windows: `C:\Windows\System32\drivers\etc\hosts`
- macOS/Linux: `/etc/hosts`

This is fragile because cloud providers rotate IP addresses, but it can unblock you while a proper DNS fix is arranged.

**Flush DNS cache** after making changes:

```bash
# Windows
ipconfig /flushdns

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux
sudo systemd-resolve --flush-caches
```

## Configuring Split Tunneling

Split tunneling routes only corporate traffic through the VPN while letting cloud storage traffic go directly to the internet. This avoids both the proxy and the VPN for cloud provider connections, often solving all issues at once.

### How to Set It Up

Split tunneling is typically configured in the VPN client or by your IT department. You need to request that the following domains or IP ranges be excluded from the VPN tunnel:

**Google Drive / Google Cloud:**
- `*.googleapis.com`
- `*.google.com`
- `accounts.google.com`

**Microsoft OneDrive / SharePoint / Azure:**
- `*.sharepoint.com`
- `*.onedrive.com`
- `graph.microsoft.com`
- `login.microsoftonline.com`
- `*.blob.core.windows.net`

**Amazon S3:**
- `*.amazonaws.com`
- `s3.*.amazonaws.com`

**Dropbox:**
- `*.dropbox.com`
- `*.dropboxapi.com`

**Other providers:** Check the provider's documentation for API endpoint domains.

If your IT department cannot configure split tunneling, the proxy and certificate fixes described above are your best alternatives.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Bypassing Corporate Firewalls

Corporate firewalls may block specific ports, protocols, or domains that rclone needs. Common firewall-related issues:

### Blocked Ports

Rclone uses HTTPS (port 443) for most cloud providers. If port 443 is blocked for non-browser traffic, rclone connections will time out. Check with your IT department to ensure outbound HTTPS is allowed for the rclone process.

### Blocked Domains

Some firewalls block access to specific cloud storage domains. If your organization does not officially support a particular cloud provider, its API endpoints may be on a blocklist. You will see timeout errors or connection refused messages. The only fix is to request your IT team add the required domains to the allowlist.

### Deep Packet Inspection

Some next-generation firewalls inspect HTTPS traffic beyond just the certificate level. They may block connections that do not look like standard browser traffic. Rclone's User-Agent header identifies it as rclone, which some DPI rules may flag. You can set a custom User-Agent:

```bash
rclone lsd remote: --user-agent "Mozilla/5.0"
```

This is a workaround and should only be used if confirmed necessary and approved by your IT team.

### OAuth Token Refresh Through Proxies

Cloud providers that use OAuth (Google Drive, OneDrive, Dropbox) periodically refresh access tokens. If the token refresh endpoint is blocked or the proxy interferes with the OAuth flow, you will see authentication errors even though your credentials are correct. Ensure the following OAuth endpoints are accessible:

- `oauth2.googleapis.com` (Google)
- `login.microsoftonline.com` (Microsoft)
- `api.dropbox.com/oauth2/token` (Dropbox)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Troubleshooting Connection Timeouts

When connections time out behind a proxy or VPN, use these steps to narrow down the cause:

1. **Test basic connectivity:**
   ```bash
   curl -v https://storage.googleapis.com
   ```
   If curl works but rclone does not, the issue is likely proxy environment variables not being picked up by rclone.

2. **Test with verbose logging:**
   ```bash
   rclone lsd remote: -vv --dump headers --dump auth
   ```
   This shows exactly what rclone is sending and receiving.

3. **Check for proxy interference:**
   ```bash
   rclone lsd remote: --no-check-certificate -vv
   ```
   If this works but the normal command does not, SSL inspection is the culprit.

4. **Test without VPN** (if possible) to confirm the VPN is involved.

5. **Increase timeouts** for slow proxy connections:
   ```bash
   rclone lsd remote: --timeout 60s --contimeout 30s
   ```

6. **Check RcloneView logs** in the Job History for detailed error messages.

## Persistent Configuration in RcloneView

Once you find the right combination of proxy settings, certificate paths, and flags, save them so you do not have to rediscover them:

- **Environment variables** — set `HTTP_PROXY`, `HTTPS_PROXY`, and `RCLONE_CA_CERT` in your system profile so they apply to all rclone operations.
- **Custom flags in jobs** — in RcloneView's job configuration, add flags like `--ca-cert`, `--timeout`, or `--contimeout` as custom parameters.
- **Per-remote settings** — some settings can be added directly to the remote configuration in `rclone.conf`.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Set proxy environment variables** if your network requires a proxy.
3. **Install your corporate CA certificate** if SSL inspection is in use.
4. **Test connectivity** with a simple `rclone lsd remote:` command before setting up sync jobs.
5. **Save working configurations** as RcloneView jobs for consistent, repeatable syncs.

Network restrictions do not have to prevent you from managing cloud storage effectively. With the right proxy settings and certificate configuration, RcloneView works reliably even in the most locked-down corporate environments.

---

**Related Guides:**

- [Adding Remote Storage](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Add OAuth Online Login](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Execute and Manage Jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
