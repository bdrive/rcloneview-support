---
slug: migrate-jottacloud-to-dropbox-rcloneview
title: "将 Jottacloud 迁移到 Dropbox — 用 RcloneView 传输文件"
authors:
  - alex
description: "使用 RcloneView 将文件从 Jottacloud 迁移到 Dropbox。同步文件夹、验证传输,并在一个窗口中管理两个远程连接。"
keywords:
  - Jottacloud 迁移到 Dropbox
  - Jottacloud 到 Dropbox 传输
  - Jottacloud Dropbox 迁移
  - RcloneView jottacloud
  - RcloneView dropbox
  - 云到云传输
  - 云存储之间移动文件
  - Jottacloud 替代方案
  - Dropbox 迁移工具
  - 欧洲云存储迁移
tags:
  - RcloneView
  - jottacloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Jottacloud 迁移到 Dropbox — 用 RcloneView 传输文件

> 不必先下载到桌面,就能把文件从 Jottacloud 移动到 Dropbox。

因欧洲数据驻留而选择 Jottacloud 的团队,有时会在与国际合作伙伴协作变得更重要后,需要整合到 Dropbox。先把所有内容下载到本地再重新上传会浪费带宽,还可能破坏文件夹结构。RcloneView 可以同时连接两个远程,直接在它们之间移动文件,因此传输是云到云进行的。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 并排连接 Jottacloud 和 Dropbox

通过“远程”标签 > 新建远程,添加这两个存储账户。Dropbox 通过标准的浏览器登录即可连接,无需管理任何 API 密钥。添加后,每个远程都会在资源管理器面板中拥有自己的标签页,你可以在一个面板中打开 Jottacloud,在另一个面板中打开 Dropbox,在移动任何内容之前直接并排查看两边的文件夹结构。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中添加新的云远程连接" class="img-large img-center" />

在开始传输之前浏览两个账户,可以确认文件夹命名规则是否一致,或者如果源端随时间变得杂乱,可以在 Dropbox 一侧规划新的结构。

## 执行云到云传输

使用主页标签中的同步向导,将 Jottacloud 配置为源,Dropbox 配置为目标。将同步方向设置为单向,这样 Dropbox 会镜像源内容,而 RcloneView 不会反过来删除 Jottacloud 上的任何内容。在第 3 步中应用筛选条件,跳过新位置不需要的文件类型——排除 `.iso` 文件或整个 `.git/` 文件夹,可以让传输专注于真正重要的内容。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="配置从 Jottacloud 到 Dropbox 的云到云同步任务" class="img-large img-center" />

先运行一次 Dry Run。它会在不触碰任何一个账户的情况下,准确列出将要复制的文件,这是在筛选条件配置错误影响成千上万个文件之前发现问题的最好方法。

## 验证每个文件是否都正确到达

传输完成后,打开 Folder Compare,并将其指向 Jottacloud 和 Dropbox 上相同的路径。大小一致的文件会显示为相同;有差异或复制失败的文件会被标记出来,方便你只重新运行这些项目。RcloneView 可以从 Windows、macOS 和 Linux 上的同一个窗口挂载和同步 90 多个服务商,因此无论比较哪两个云,这一验证步骤都以相同方式运作。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="迁移后比较 Jottacloud 和 Dropbox 文件夹" class="img-large img-center" />

Job History 会记录已完成同步的大小、速度和文件数量,为你提供一份记录,以便有人询问迁移情况时可以参考。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 从“远程”标签添加你的 Jottacloud 和 Dropbox 远程连接。
3. 创建一个以 Jottacloud 为源、Dropbox 为目标的单向同步任务,然后运行 Dry Run。
4. 执行同步,并用 Folder Compare 确认结果。

验证完成后,建议让两个远程再保持连接一段时间,以便在切换彻底完成之前,能捕捉到添加到旧 Jottacloud 账户中的任何文件。

---

**相关指南:**

- [管理 Jottacloud 存储 — 用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [管理 Dropbox 存储 — 用 RcloneView 同步和备份文件](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [将 Jottacloud 迁移到 Wasabi — 用 RcloneView 传输文件](https://rcloneview.com/support/blog/migrate-jottacloud-to-wasabi-rcloneview)

<CloudSupportGrid />
