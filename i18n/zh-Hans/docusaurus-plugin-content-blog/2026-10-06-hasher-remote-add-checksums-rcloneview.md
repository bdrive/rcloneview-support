---
slug: hasher-remote-add-checksums-rcloneview
title: "Hasher 远程 — 在 RcloneView 中为缺少校验和的存储添加校验和"
authors:
  - steve
description: "使用 RcloneView 的 Hasher 虚拟远程，为自身不提供校验和的远程添加基于哈希的完整性检查。"
keywords:
  - rclone Hasher 远程
  - 为云存储添加校验和
  - 云文件完整性检查
  - 验证云文件哈希
  - Hasher 虚拟远程
  - RcloneView 虚拟远程
  - 校验和同步
  - rclone GUI
tags:
  - RcloneView
  - feature
  - rclone
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasher 远程 — 在 RcloneView 中为缺少校验和的存储添加校验和

> Hasher 虚拟远程在现有远程之上增加哈希功能，因此即使存储本身没有校验和，完整性检查仍然可用。

某些存储后端无法提供文件哈希，这会削弱传输后的比对和验证。RcloneView 支持 rclone 的 Hasher 虚拟远程，这是一个在您已有远程之上叠加哈希功能的封装层。本指南介绍它在什么情况下有帮助以及如何使用。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hasher 远程的作用

虚拟远程通过封装现有远程来增加功能。Alias 缩短路径，Crypt 负责加密，Hasher 则为完整性检查增加哈希。如果后端不提供校验和，比对会退回到文件大小和修改时间，这可能漏掉内容已变化但大小和时间未变的情况。

用 Hasher 远程封装该后端后，它便具备了哈希能力，基于校验和的比对也就有了依据。它适合正确性比速度更重要的归档和备份场景。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中创建新的虚拟远程" class="img-large img-center" />

## 创建 Hasher 远程

打开 Remote 标签页并选择 New Remote，然后选择 Hasher 类型。指向您想封装的底层远程和文件夹，并给它起一个便于识别的名称，例如 `archive-hashed`。保存后，它会像其他远程一样出现在资源管理器中。

在任何会用到原远程的地方，都可以使用封装后的远程：浏览、复制，或作为同步的源或目标。请注意，哈希与封装层绑定，因此对于需要验证的数据，请始终使用 Hasher 远程。

## 配合同步和比较使用

在同步作业的 Advanced Settings 中开启 **Enable checksum**，文件将按哈希加大小进行比对。与 Hasher 远程结合使用，比仅靠大小和时间能得到更可靠的结果。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="显示两个文件夹之间差异的 Folder Compare 视图" class="img-large img-center" />

请先运行 Dry Run 预览将被复制或删除的内容，然后再执行。RcloneView 在 Windows、macOS 和 Linux 上，可在一个窗口中对 90 多个提供商进行挂载和同步，因此同样的验证方法适用于您的所有云。

## 在 Job History 中查看结果

运行结束后，打开 Job History 确认状态、已传输的文件数和总大小。如果作业报告错误，可在 Log 标签页中查看详细信息。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="显示已完成同步运行的作业历史" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 如果尚未添加，请添加缺少校验和的远程。
3. 在 Remote > New Remote 中创建封装它的 Hasher 远程。
4. 创建开启 **Enable checksum** 的同步作业，并先运行 Dry Run。

更严格的验证意味着您能在问题发生之前发现隐蔽的差异。

---

**相关指南：**

- [虚拟远程 — 使用 RcloneView 组合 Combine、Union 和 Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [使用 RcloneView 修复云同步校验和不匹配](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [使用 RcloneView 修复云备份验证失败](https://rcloneview.com/support/blog/fix-cloud-backup-verification-failures-rcloneview)

<CloudSupportGrid />
