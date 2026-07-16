---
slug: virtual-remotes-combine-union-alias-rcloneview
title: "RcloneView Virtual Remotes: Combine, Union, and Alias to Build a Single Multi-Cloud Workspace"
authors:
  - tayson
description: "Use RcloneView virtual remotes to unify multi-cloud folders without copying data. Learn when to choose Alias, Combine, or Union and how to build cleaner workflows."
keywords:
  - virtual remote
  - combine remote
  - union remote
  - alias remote
  - multi cloud viewer
  - rcloneview virtual remote
  - cloud workspace
  - multi cloud management
  - rcloneview workflow
  - cloud file organization
tags:
  - file-management
  - sync
  - multi-cloud
---

import RvCta from '../src/components/RvCta';

# RcloneView Virtual Remotes: Combine, Union, and Alias to Build a Single Multi-Cloud Workspace

> Multi-cloud sprawl makes folders hard to find. Virtual remotes in RcloneView let you unify views without moving or duplicating a single file.

Virtual remotes are one of the fastest ways to clean up your multi-cloud workflow. Instead of jumping between tabs or reconfiguring jobs, you can create a virtual view that points to existing remotes and folders. Your original data stays exactly where it is, but your workspace becomes easier to navigate and automate.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Why virtual remotes matter

- Stop digging through deep paths every time you run a job or compare folders.
- Present multiple clouds as one workspace without copying data.
- Keep your organization consistent across Explorer, Compare, Sync, and Jobs.

## What are virtual remotes in RcloneView?

Virtual remotes sit on top of existing remotes and folders. They do not store data themselves. Instead, they point to locations you already have and present them as a new, cleaner view.

Create them from **New Remote → Virtual**:

- **Alias**: a shortcut to a deep folder.
- **Combine**: a single view that lists multiple folders side-by-side.
- **Union**: a single merged view that blends multiple folders together.

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

## Alias remote: instant access to deep folders

**Best for**: jump-to folders you open every day.

Alias is a bookmark. It opens a specific folder instantly, which is perfect for recurring jobs or shared team paths.

Example: bookmark a shared team folder like `Drive:Team/Projects/Client-A` and open it as `Alias_ClientA`.

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="Add alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="Alias remote file browser" class="img-large img-center" />

Guide: [/support/howto/remote-storage-connection-settings/alias-remote](/howto/remote-storage-connection-settings/alias-remote)

## Combine remote: one view, multiple folders

**Best for**: dashboards and project collections.

Combine shows folders side-by-side inside a single remote. Each folder keeps its original structure, but you browse them in one place.

Example: create a `Marketing_Assets` Combine remote that contains:

- `Drive:Marketing`
- `Dropbox:Assets`

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="Add combine remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="Combine view example" class="img-large img-center" />

Guide: [/support/howto/remote-storage-connection-settings/combine-remote](/howto/remote-storage-connection-settings/combine-remote)

## Union remote: one merged folder across clouds

**Best for**: pooled archives or multi-source ingestion.

Union merges multiple folders into one blended view. This is ideal when you want everything to look like a single folder even if the files live in different clouds.

Example: combine monthly raw footage from two remotes into one `Raw_Footage` view.

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="Add union remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="Union view example" class="img-large img-center" />

Guide: [/support/howto/remote-storage-connection-settings/union-remote](/howto/remote-storage-connection-settings/union-remote)

## Quick decision guide: Alias vs Combine vs Union

| Need | Choose | Why |
| --- | --- | --- |
| Jump to a deep folder fast | **Alias** | Single shortcut to a specific path |
| See multiple folders side-by-side | **Combine** | Preserves separate folder structure |
| Treat multiple folders as one | **Union** | Merged view for pooled data |

## Practical workflows with virtual remotes

- **Compare before syncing**: run Compare on a Combine or Union view to see differences first.  
  Guide: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)
- **Sync across multiple sources**: Sync a Union remote to a backup destination to mirror a blended archive.  
  Guide: [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **Save jobs once**: use Job Manager to schedule a virtual remote Sync and keep it running automatically.  
  Guide: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)
- **Optional mounts**: mount a virtual remote and browse it as a local drive.  
  Guide: [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-large img-center" />

## Best practices and naming conventions

- Use clear prefixes: `Alias_ProjectX`, `Combine_Marketing`, `Union_Archive`.
- Keep source notes in job names or Job Manager descriptions.
- Avoid mixing unrelated folders in one Union to reduce confusion.
- Use Combine when you want clarity, Union when you want simplicity.

## Conclusion

Virtual remotes reduce friction across multi-cloud workflows. Alias, Combine, and Union let you build a clean workspace without copying data, so teams can move faster and keep their structure intact. Try one today and see how much easier your daily navigation becomes.
