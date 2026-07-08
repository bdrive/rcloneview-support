---
slug: migrate-onedrive-to-backblaze-b2-rcloneview
title: "使用 RcloneView 将 OneDrive 迁移到 Backblaze B2，实现经济实惠的云备份"
authors:
  - tayson
description: "通过 RcloneView 将 OneDrive 文件迁移到 Backblaze B2，降低存储成本。将个人或企业数据迁移到更便宜的 S3 兼容存储的分步指南。"
keywords:
  - migrate onedrive to backblaze b2
  - onedrive to b2 migration
  - rcloneview onedrive backblaze
  - move onedrive to backblaze b2
  - rclone onedrive backblaze b2
  - onedrive cheaper storage alternative
  - backblaze b2 from onedrive
  - cloud storage cost reduction
  - onedrive backup to b2
  - transfer onedrive backblaze
tags:
  - RcloneView
  - onedrive
  - backblaze-b2
  - cloud-migration
  - migration
  - backup
  - cost-optimization
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 OneDrive 迁移到 Backblaze B2，实现经济实惠的云备份

> OneDrive 的存储费用会不断累积——尤其是对于存档量大的团队或拥有海量数据的个人用户。Backblaze B2 提供 S3 兼容的对象存储，价格仅为 OneDrive 的一小部分。RcloneView 让迁移变得轻而易举。

OneDrive 非常适合日常协作，但对于长期存档、冷备份或大型媒体收藏而言，它并不是最具性价比的选择。以大约每月每 GB 0.006 美元计算，对于不常访问的数据，Backblaze B2 比 OneDrive 的按用户收费方案便宜得多。将存档数据从 OneDrive 迁移到 Backblaze B2——同时将活跃的工作文件保留在 OneDrive 中——是一种明智的成本优化策略，而 RcloneView 无需任何命令行知识即可完成这一操作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 什么情况下适合进行此项迁移？

- 你的 Microsoft 365 存储配额已用尽，且不想升级套餐。
- 你在 OneDrive 中存放了大量很少访问的媒体存档（照片、视频、项目文件）。
- 你正在用 Backblaze B2 取代 OneDrive，作为主要的备份目的地。
- 你需要具有原生 rclone 支持、且跨区域无流出费用的 S3 兼容存储。

## 成本对比：OneDrive 与 Backblaze B2

| 存储 | 每月 1 TB | 每月 5 TB |
|---------|-----------|-----------|
| OneDrive（Microsoft 365） | 约 9.99 美元/用户 | 约 50+ 美元（受每用户限额影响） |
| Backblaze B2 | 约 6.00 美元 | 约 30.00 美元 |

对于存档量大的用户来说，Backblaze B2 可以将存储费用降低 40%–60%。

## 第 1 步 — 在 RcloneView 中连接 OneDrive

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive in RcloneView" class="img-large img-center" />

1. 打开 RcloneView，点击**新建远程**。
2. 选择 **Microsoft OneDrive**。
3. 点击**授权**——将弹出浏览器窗口进行 Microsoft OAuth 认证。
4. 登录并授予访问权限。
5. 选择你的 OneDrive 类型（个人版、商业版或 SharePoint），并将该远程保存为 `onedrive`。

## 第 2 步 — 在 RcloneView 中连接 Backblaze B2

1. 登录 [Backblaze 控制台](https://www.backblaze.com)，导航至**应用密钥（App Keys）**。
2. 创建一个新的应用密钥，赋予对目标存储桶的**读写**权限。
3. 记下 **keyID** 和 **applicationKey**。
4. 在 RcloneView 中，添加一个类型为 **Backblaze B2** 的新远程。
5. 输入 keyID 和 applicationKey，将其命名为 `b2` 并保存。

## 第 3 步 — 创建目标存储桶

在 Backblaze B2 中，在迁移之前先创建目标存储桶：

- **存储桶名称**：选择一个唯一的名称（例如 `onedrive-archive-2026`）
- **存储桶类型**：私有（用于个人备份）或公开（用于媒体分发）
- **版本控制**：可选——可用于恢复被覆盖的文件

## 第 4 步 — 运行迁移

在 RcloneView 中打开**任务（Jobs）**，并进行如下配置：

| 设置 | 值 |
|---------|-------|
| 源 | `onedrive:/Archives/`（或你要迁移的任意文件夹） |
| 目标 | `b2:onedrive-archive-2026/` |
| 模式 | **复制**（在验证完成前保留 OneDrive 中的副本） |
| 并发传输数 | 4–8 个并发（根据你的带宽调整） |
| 校验和 | 已启用 |

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transfer OneDrive to Backblaze B2 in progress" class="img-large img-center" />

点击**运行**。RcloneView 会显示逐个文件的进度、传输速度以及预计完成时间。

## 第 5 步 — 使用文件夹对比验证迁移结果

任务完成后，使用 RcloneView 的**文件夹对比**功能验证 OneDrive 中的每个文件是否都已成功传输到 B2：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive to B2 migration" class="img-large img-center" />

任何差异都会被高亮显示。重新运行该任务——rclone 会跳过已存在的文件，只重新传输缺失的部分。

## 第 6 步 — 安排持续备份（可选）

如果你希望今后将 B2 作为 OneDrive 的实时备份：

1. 将任务模式从「复制」切换为**同步**。
2. 打开**计划任务**，设置一个循环间隔（例如每晚凌晨 2 点）。
3. OneDrive 中新增或修改的文件将自动备份到 B2。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to B2 backup" class="img-large img-center" />

## 大型 OneDrive 迁移的技巧

- **按文件夹分批迁移**——将大型账户拆分为 100–500 GB 的小块。
- **避开高峰时段**——负载较高时，Microsoft 会限制 OneDrive API 的访问速率。
- **使用带宽限制**——在 RcloneView 中设置限速，避免在工作时段影响日常业务。
- **保持 OneDrive 处于活跃状态**——在 B2 验证完成之前，不要删除 OneDrive 中的文件。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 RcloneView 的设置向导**添加 OneDrive 和 Backblaze B2** 远程。
3. 在 Backblaze 控制台**创建你的 B2 存储桶**。
4. **复制、验证，然后决定**是继续将 OneDrive 作为活跃存储，还是完全切换到 B2。

减少对 Microsoft 的依赖、降低成本，并获得 S3 兼容性——Backblaze B2 是存放 OneDrive 存档的理想选择。

---

**相关指南：**

- [将 Dropbox 备份到 Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [将 Google Drive 迁移到 OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [隐藏的云存储成本——用 RcloneView 省钱](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
