---
slug: migrate-box-to-pcloud-rcloneview
title: "将 Box 迁移到 pCloud — 使用 RcloneView 传输文件"
authors:
  - jay
description: "使用 RcloneView 将 Box 迁移到 pCloud:连接两个远程,执行 Dry Run,进行云到云复制,并用 Folder Compare 验证结果。"
keywords:
  - 将 Box 迁移到 pCloud
  - Box 到 pCloud 传输
  - 将 Box 文件移动到 pCloud
  - Box pCloud 迁移
  - RcloneView 云到云
  - Box 到 pCloud 同步
  - rclone GUI
  - 云迁移工具
  - 验证云传输
  - Box 替代存储
tags:
  - RcloneView
  - box
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Box 迁移到 pCloud — 使用 RcloneView 传输文件

> 在复制之前先预览,复制之后再比较,一次可控地将 Box 文件夹迁移到 pCloud。

不再适合使用 Box 工作区的团队,或希望自行掌控个人存储的自由职业者,常常面临同样的麻烦:嵌套的项目文件夹中有数千个文件,需要完整地转移到新账户。通过浏览器下载再重新上传既慢又不稳定。RcloneView 将 Box 和 pCloud 并排连接,并在两者之间直接传输,因此无需在本地磁盘上暂存任何内容。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Box 和 pCloud 连接为远程

在 RcloneView 中,这两项服务都使用基于浏览器的 OAuth 登录。打开 **Remote > New Remote**,选择 Box,并在打开的浏览器窗口中批准访问。对 pCloud 重复同样的步骤。如果您的文件位于 Box Business 账户中,则需要设置企业子类型(`box_sub_type = enterprise`);个人账户不需要。

RcloneView 可在 Windows、macOS 和 Linux 上通过一个窗口挂载和同步 90 多个提供商,因此两个远程会作为同一个 Explorer 中的标签页出现。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中将 Box 和 pCloud 添加为新远程" class="img-large img-center" />

## 复制之前先浏览两端

在一个 Explorer 面板中打开 Box,在另一个面板中打开 pCloud。使用 Folder Tree 和 Get Size 估算要迁移的数据量,并决定是迁移全部内容还是只迁移一部分。在两个不同的远程之间拖动会执行**复制**,因此在您准备好停用 Box 之前,原始文件都不会受到影响。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="并排打开 Box 和 pCloud 以进行云到云传输" class="img-large img-center" />

## 使用 Dry Run 创建 Copy 作业

对于超过少量文件的情况,请创建作业而不是拖动。在 Sync 向导中,将 Box 设为源,将 pCloud 文件夹设为目标,然后选择 **Copy** 作业类型,这样目标端不会删除任何内容。在高级设置中,启用校验和比较;如果 Box 开始限流,请将 equality checker 的数量保持在较低水平。在筛选中,可以使用 Max file size 或 `.git/` 等排除规则跳过不需要的文件。

请先运行 **Dry Run**。它会列出将被复制和删除的文件,因此选错文件夹的问题会在任何数据移动之前显现。如果您不想复制 Box 的云原生文档,可以使用预定义的 **Box Docs** 筛选器将其排除。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中运行 Box 到 pCloud 的 Copy 作业" class="img-large img-center" />

## 使用 Folder Compare 验证

作业完成后,将 Box 放在左侧、pCloud 放在右侧,打开 **Compare**。筛选仅存在于左侧的文件和有差异的文件;仍然列出的项目需要再处理一次。Job History 会记录每次运行的状态、大小、速度和文件数,可作为迁移已完成的有力证据。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare 显示 Box 与 pCloud 之间的差异" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **Remote > New Remote** 添加 Box 和 pCloud,并使用 OAuth 登录。
3. 创建从 Box 到 pCloud 的 Copy 作业并运行 Dry Run。
4. 运行作业,然后在清理 Box 之前使用 Folder Compare 确认结果。

先复制后验证的分阶段迁移,可在 pCloud 拥有您所需的全部内容之前,确保 Box 数据的安全。

---

**相关指南:**

- [将 Box 迁移到 Backblaze B2](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)
- [将 Box 迁移到 Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [管理 pCloud 存储](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
