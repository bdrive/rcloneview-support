---
slug: manage-internet-archive-uploads-with-rcloneview
title: "如何使用 RcloneView 上传和管理 Internet Archive 文件"
authors:
  - tayson
description: "使用 RcloneView 将文件上传到 Internet Archive，整理收藏并同步本地档案。为 rclone 的 Internet Archive 后端提供的可视化图形界面。"
keywords:
  - internet archive rcloneview
  - upload to internet archive rclone
  - internet archive rclone gui
  - archive.org file upload
  - internet archive cloud sync
  - rcloneview internet archive
  - archive.org bulk upload
  - internet archive backup
  - rclone internet archive backend
  - preserve files internet archive
tags:
  - RcloneView
  - internet-archive
  - cloud-storage
  - backup
  - guide
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 上传和管理 Internet Archive 文件

> Internet Archive 免费永久地保存人类知识——书籍、音乐、软件、视频和网页。RcloneView 让你无需接触命令行，即可轻松将文件上传、整理并同步到 archive.org。

Internet Archive（archive.org）为可公开分享的文件提供免费、永久的云存储。它被研究人员、档案管理员、教育工作者以及所有希望为数字共享资源做出贡献的人所使用。rclone 的 Internet Archive 后端让这一切可以通过脚本完成，而 RcloneView 则将这种能力封装进可视化界面——让你可以轻点几下鼠标，浏览你的档案条目、上传新文件并同步收藏。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 使用 RcloneView + Internet Archive 你可以做什么

- **上传文件和文件夹**到已有或全新的 archive.org 条目
- 像文件管理器一样**可视化浏览你已上传的条目**
- **同步本地收藏**到 Internet Archive 以便长期保存
- **在 Internet Archive 与其他云服务商之间复制文件**
- **实时监控传输进度**

## 设置 Internet Archive 远程

### 第一步——获取你的 Internet Archive 凭据

1. 在 [archive.org](https://archive.org) 创建一个免费账户。
2. 前往 **My Account → Settings → Security**，生成一个 **S3-like API key**（Access Key + Secret Key）。虽然名字里带有 S3，但这并不是 AWS——而是 archive.org 自己的 S3 兼容 API。

### 第二步——在 RcloneView 中添加远程

打开 RcloneView 并点击 **New Remote**：

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote in RcloneView" class="img-large img-center" />

1. 从远程类型列表中选择 **Internet Archive**。
2. 输入你从 archive.org 获取的 **Access Key ID** 和 **Secret Access Key**。
3. 为该远程命名（例如 `internet-archive`）并保存。

### 第三步——浏览你的条目

连接成功后，RcloneView 会将你的 archive.org 条目显示为文件夹。Internet Archive 上的每个"条目"（item）都是一次上传的容器（例如一张专辑、一本书的扫描件，或一个视频合集）。

## 上传文件到 Internet Archive

### 上传一个新条目

要创建一个新的 archive.org 条目并向其中上传文件：

1. 在 RcloneView 右侧面板中，进入你的 `internet-archive` 远程。
2. 创建一个带有唯一条目标识符的新文件夹（例如 `my-1980s-radio-recordings`）。
3. 将文件从本地面板拖放到该条目文件夹中。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse and upload to Internet Archive items" class="img-large img-center" />

RcloneView 会传输文件并显示实时进度。Internet Archive 会异步处理上传——根据文件大小的不同，你的条目将在几分钟到几小时内可被公开访问。

### 上传到已有条目

导航到某个已有的条目文件夹，将文件复制或移动到其中。RcloneView 会自动处理分块上传和重试逻辑。

## 同步本地档案收藏

要让本地文件夹与某个 Internet Archive 条目保持同步——非常适合持续进行的归档项目：

1. 在 RcloneView 中打开 **Jobs**。
2. 将 **Source** 设置为你的本地文件夹（例如 `D:\my-archive-project`）。
3. 将 **Destination** 设置为你的 Internet Archive 条目（例如 `internet-archive:my-1980s-radio-recordings`）。
4. 选择 **Sync** 模式，只上传新增或有变动的文件。
5. 设置为每周运行一次，或按需手动运行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync job to Internet Archive" class="img-large img-center" />

## 从 Internet Archive 下载和复制

RcloneView 支持双向操作。你还可以：

- 将公开的 archive.org 条目中的文件**下载**到本地机器。
- 将条目从 Internet Archive **复制**到另一个云服务（例如 archive.org → Google Drive 或 Backblaze B2），以实现冗余保存。

## 关于 Internet Archive 后端的重要说明

| 行为 | 详情 |
|----------|--------|
| 条目创建 | 新文件夹会成为新的 archive.org 条目 |
| 可见性 | 上传的条目默认是公开的 |
| 文件删除 | 删除操作会被排队处理，archive.org 处理速度较慢 |
| 校验和 | 上传时会验证 MD5 校验和 |
| 速率限制 | 请遵守 archive.org 的抓取限制——避免频繁调用 API |

## 使用场景

**数字归档项目**——上传你希望永久保存在公共领域的扫描件、录音或文档。

**软件保存**——在许可条件允许的情况下，为该档案贡献旧软件、游戏或 ROM。

**备份冗余**——将 Internet Archive 用作非敏感、可公开分享数据的免费二级备份层。

**研究数据集**——上传带有公开许可的数据集，供全球研究人员访问。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在 archive.org 的账户设置中**生成你的 archive.org API 密钥**。
3. 在 RcloneView 的远程设置向导中**添加 Internet Archive 远程**。
4. **上传、同步并保存**——你的文件将永久免费地保存在 archive.org 上。

Internet Archive 自 1996 年以来一直在保存网络与人类文化。RcloneView 让你可以轻松地为其贡献自己的数字资料。

---

**相关指南：**

- [使用 RcloneView 加密云备份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [自动化每日云备份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [多云备份策略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
