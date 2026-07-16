---
slug: link-public-shared-links-cloud-rcloneview
title: "Generate Public Shared Links for Cloud Files with RcloneView"
authors:
  - tayson
description: "Generate public download links for cloud files using RcloneView's link command. Share files from Google Drive, OneDrive, Dropbox, S3, and more without giving account access."
keywords:
  - rcloneview
  - public link cloud file
  - share cloud file link
  - rclone link command
  - generate download link
  - presigned url s3
  - shared link google drive
  - cloud file sharing
  - public url cloud storage
  - share file without account
tags:
  - feature
  - tips
  - collaboration
---

import CloudSupportGrid from '../src/components/CloudSupportGrid';
import cloudIcons from '../src/contexts/cloudIcons';
import RvCta from '../src/components/RvCta';

# Generate Public Shared Links for Cloud Files with RcloneView

> Sharing a cloud file usually means navigating to the provider's web interface, adjusting permissions, and copying a link. RcloneView's link feature generates shareable URLs directly from the file explorer — across any provider that supports it.

When you need to share a file stored in the cloud with someone who does not have access to your account, a public or pre-signed link is the standard solution. Google Drive creates shareable links, S3 generates pre-signed URLs, and Dropbox provides shared links — each through different interfaces with different workflows. RcloneView consolidates this into a single action: right-click a file, generate a link, and share it.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## How Public Links Work Across Providers

Different cloud providers implement file sharing differently:

| Provider | Link Type | Default Expiry | Notes |
|---|---|---|---|
| Google Drive | Shareable link | No expiry | Changes file permissions to "anyone with the link" |
| OneDrive | Sharing link | Configurable | Anonymous or organization-scoped |
| Dropbox | Shared link | No expiry | Read-only download link |
| AWS S3 | Pre-signed URL | Configurable (max 7 days) | Temporary, cryptographically signed |
| Backblaze B2 | Download URL | No expiry | Requires bucket to be public or uses auth token |
| Cloudflare R2 | Pre-signed URL | Configurable | S3-compatible pre-signed URLs |

RcloneView uses rclone's `link` command under the hood, which generates the appropriate link type for each provider automatically. You do not need to know the provider-specific sharing mechanism — RcloneView handles it.

## Generating a Link in RcloneView

To generate a public link for a file:

1. Browse to the file in RcloneView's explorer.
2. Right-click the file and select the link/share option.
3. RcloneView generates the link and copies it to your clipboard (or displays it for manual copying).

For providers that support expiry (like S3 pre-signed URLs), you can specify the link duration using the `--expire` flag in custom options. For example, `--expire 24h` creates a link that expires in 24 hours.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Generating a public link for a cloud file in RcloneView" class="img-large img-center" />

## Using the Link Command via Terminal

For more control, use RcloneView's built-in terminal to run the link command directly:

```
rclone link remote:path/to/file.pdf
```

This outputs the public URL. For S3-compatible providers, add an expiry:

```
rclone link remote:bucket/file.pdf --expire 48h
```

The terminal approach is useful when generating links for multiple files or scripting link generation as part of a workflow.

## Provider-Specific Behavior

### Google Drive

When you generate a link for a Google Drive file, rclone changes the file's sharing settings to "anyone with the link can view." The link does not expire unless you manually revoke sharing. Be aware that this modifies the file's permissions — anyone with the URL can access the file.

For Google Workspace accounts, administrators may restrict link sharing to organization members only. In that case, the generated link will only work for people within your organization.

### OneDrive and SharePoint

OneDrive generates sharing links through the Microsoft Graph API. The link type depends on your organization's sharing policies — it may be anonymous (accessible to anyone) or restricted to organization members. Personal OneDrive accounts can create anonymous links.

### AWS S3 and S3-Compatible

S3 pre-signed URLs are the most secure option. The URL contains a cryptographic signature that grants temporary access to a specific object. The link expires after the specified duration (default varies, maximum 7 days for IAM user credentials). No changes are made to the object's permissions — the pre-signed URL itself carries the authorization.

This makes S3 pre-signed URLs ideal for sharing files temporarily: the link works for the specified duration and then becomes invalid, with no cleanup needed.

### Dropbox

Dropbox creates a shared link that provides read-only access to the file. The link does not expire by default on Dropbox Plus and Professional plans. On Dropbox Business, administrators can enforce expiry policies.

## Use Cases

### Quick File Sharing

Generate a link for a report, design file, or dataset stored in the cloud and send it via email, Slack, or chat. The recipient downloads the file without needing a cloud account or access to your storage.

### Temporary Access for Clients

For freelancers and agencies, S3 pre-signed URLs are ideal for client deliveries. Upload the deliverable to S3, generate a 7-day pre-signed URL, and send it to the client. After 7 days, the link expires automatically — no manual cleanup needed.

### Public Content Distribution

For files intended for broad distribution (documentation, releases, media kits), generate a permanent link from Google Drive or Dropbox and embed it on your website or documentation. RcloneView generates the link without navigating to the provider's web interface.

## Security Considerations

- **Permanent links expose files indefinitely**: Google Drive and Dropbox links do not expire by default. If you share a sensitive file, remember to revoke the link when access is no longer needed.
- **Pre-signed URLs are time-limited but shareable**: Anyone with the URL can access the file during the validity period. Do not share pre-signed URLs in public channels if the file is confidential.
- **Link generation modifies permissions on some providers**: Google Drive links change the file's sharing settings. This is visible to other users who have access to the file.
- **Audit shared links periodically**: Review and revoke old shared links, especially for sensitive files. RcloneView's explorer makes it easy to navigate to files and check their sharing status.

## Getting Started

1. **Download RcloneView** from [rcloneview.com](https://rcloneview.com/src/download.html).
2. Add your cloud remotes in the Remote Manager.
3. Browse to a file in the explorer and generate a public link.
4. For time-limited links, use S3 pre-signed URLs with the `--expire` flag.

Generating shareable links from RcloneView saves you from switching to each provider's web interface. Whether you need a quick share link, a temporary client delivery URL, or a permanent download link, RcloneView handles it from the file explorer.

---

**Related Guides:**

- [Browse and Manage Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Add AWS S3 and S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Add Remote via Browse-based Log-in(OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
