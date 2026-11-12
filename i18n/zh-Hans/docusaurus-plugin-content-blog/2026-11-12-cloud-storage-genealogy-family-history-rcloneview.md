---
slug: cloud-storage-genealogy-family-history-rcloneview
title: "面向家谱研究者的云存储 — 使用 RcloneView 保存家族史档案"
authors:
  - tayson
description: "使用 RcloneView 保护扫描档案、家谱文件和口述历史录音：为家谱档案提供多云备份、加密和校验。"
keywords:
  - 家谱研究云存储
  - 家族史备份
  - 家谱档案备份
  - 备份家谱文件
  - 扫描家族文档上云
  - 口述历史录音备份
  - 家谱协会文件存储
  - 在多个云中保存家族照片
  - 加密 DNA 数据备份
  - RcloneView 家谱
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 面向家谱研究者的云存储 — 使用 RcloneView 保存家族史档案

> 几十年的研究成果可能只存放在一块笔记本硬盘上。RcloneView 会将其复制到多个云，并检查每份副本是否一致。

家谱档案的增长方式五花八门。一位家族史研究者可能同时保存着 40,000 张教区登记簿的 TIFF 扫描件、几个导出的家谱 GEDCOM 文件、数小时与年长亲属的 WAV 访谈录音，以及原始 DNA 数据文件。志愿者运营的家谱协会也把同样的资料存放在共享驱动器和闲置的 USB 磁盘上。RcloneView 为这两类用户提供一个桌面应用，用于把档案复制到他们已在使用的云存储，并保持副本最新。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在一个窗口中管理所有档案位置

大多数研究者的资料分散在多个服务中：与表亲共享的 Google Drive 文件夹、远方档案馆发来的 Dropbox 链接，以及存放原始扫描件的外置硬盘。在 RcloneView 中，您可以将它们分别添加为远程。Google Drive、Dropbox、OneDrive 和 pCloud 通过浏览器登录连接。Backblaze B2 需要 Application Key ID 和密钥。Synology NAS 可以在本地网络中被检测到。

最多可并排打开四个 Explorer 面板，把外置硬盘中的扫描文件夹拖到云远程。在不同远程之间拖动会执行复制，因此原始文件保持不变。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud storage remote in RcloneView for a genealogy archive" class="img-large img-center" />

## 为无法替代的扫描件保留多份副本

重新扫描一页人口普查记录只是麻烦而已。但丢失一段祖父母声音的录音，就再也找不回来了。使用 1:N 同步，可以在一个作业中把一个源文件夹发送到多个目标，例如把原始扫描文件夹同时发送到 pCloud 和 Backblaze B2 存储桶。在 FREE License 下，也可以以完整读写权限连接 S3、Azure 或 Backblaze B2。

首次运行前，请使用 Dry Run 列出将被复制和删除的内容。单向同步只修改目标端，因此您硬盘上的原始文件夹不会被改动。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying family history scans between cloud remotes in RcloneView" class="img-large img-center" />

## 保护 DNA 数据和在世亲属的记录

原始 DNA 文件和关于在世人员的记录，需要比 19 世纪婚姻登记簿更谨慎地处理。用 **Crypt** 远程包装云文件夹后，RcloneView 会在上传前加密文件名、文件夹名和文件内容。服务商只存储加密数据，而您在 RcloneView 中仍可像平常一样浏览解密后的内容。请妥善保管 Crypt 密码：没有它，文件将无法解密。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView showing differences between archive copies" class="img-large img-center" />

## 校验副本并自动更新

使用 Folder Compare 将本地原始档案与每个云副本进行比较。筛选器可以显示仅存在于一侧或大小不同的文件，使用 Copy right 或 Copy left 一键补齐缺失。拥有 PLUS License 时，可以使用 crontab 风格的计划在每周日晚上运行同步，Job History 会记录每次运行的状态、大小和文件数。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a weekly family archive backup job in RcloneView" class="img-large img-center" />

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 添加您的外置硬盘或 NAS，以及两个云远程，例如 pCloud 和 Backblaze B2。
3. 创建一个同步作业，以原始档案文件夹为源、两个云为目标，然后运行 Dry Run。
4. 为 DNA 文件和在世亲属的记录添加 Crypt 远程，并用 Folder Compare 检查副本。

有了两份经过校验的异地副本，您的研究成果将比任何单块硬盘都更长久。

---

**相关指南：**

- [面向博物馆和档案馆的云存储](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [一对多同步到多个目标](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)
- [使用 Crypt 远程加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
