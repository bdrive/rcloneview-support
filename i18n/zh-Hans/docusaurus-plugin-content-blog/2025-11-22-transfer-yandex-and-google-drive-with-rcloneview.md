---
slug: transfer-yandex-and-google-drive-with-rcloneview
title: "使用 RcloneView 在 Yandex Disk 和 Google Drive 之间传输文件"
authors:
  - tayson
description: "使用 RcloneView 的图形界面在 Yandex Disk 和 Google Drive 之间迁移和同步文件——原生 Yandex 登录、Google 的 OAuth 授权、拖放操作，以及 Compare、Sync 和计划任务（Jobs）。"
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud migration
  - cloud sync
  - rclone
  - cloud transfer
  - multi cloud
  - cloud to cloud transfer
tags:
  - cloud
  - sync
  - cloud-migration
  - tutorial
  - yandex
  - google-drive
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在 Yandex Disk 和 Google Drive 之间传输文件

> 无需使用命令行，即可在 Yandex Disk ↔ Google Drive 之间移动或同步文件。
> RcloneView 提供并排的 Explorer 面板、Compare、Sync 和计划任务（Jobs），并为你处理 Yandex 浏览器登录和 Google OAuth 授权。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 为什么用 RcloneView 进行 Yandex ↔ Google Drive 传输？

- **通过浏览器进行原生 Yandex 登录**（无需 WebDAV，无需手动获取令牌）。
- **安全的 OAuth** 登录方式用于 Google Drive。
- **并排的 Explorer 面板**，可直观地拖放文件。
- **Compare** 模式，可在复制或删除前预览差异。
- **Sync** 支持试运行（dry-run）、过滤器和校验和（checksum）。
- **可复用的 Jobs 与计划任务**，适用于定期备份和自动化。
- 通过日志、重试和带宽控制，**全程可见传输进度**。

RcloneView 在 rclone 之上构建了可视化工作流，即使是复杂的多云传输也能轻松完成。

---

## 开始之前

- 确认你可以登录 **Yandex 账户**——设置过程使用浏览器登录，而非 WebDAV。
- 检查你的 **Google Drive** 配额，并注意 Google 每日 750 GB 的上传限制。
- 从以下地址安装最新版 RcloneView：
  👉 https://rcloneview.com/src/download.html
- 对于大型任务，请保持电脑处于唤醒状态，并优先使用稳定的网络。

---

## 步骤 1：添加你的云远程存储

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  

### 连接 Yandex Disk（基于浏览器的登录）

1. 打开 **Remote → + New Remote**。
2. 选择 **Yandex Disk** 作为提供商。
3. 点击 **Connect**，浏览器中会打开 Yandex 登录页面。
4. 登录并授予访问权限。
5. 当 RcloneView 确认身份验证完成后，保存该远程存储。  

### 连接 Google Drive

1. 再次点击 **+ New Remote**。
2. 选择 **Google Drive**。
3. 点击 **Connect**，在浏览器中完成 OAuth 登录，并允许相应权限。
4. 保存该远程存储。

👉 指南：[Add Google Drive Remote](/howto/#step-2-adding-remote-storage-google-drive-example)

---

## 步骤 2：在 Explorer 面板中打开两个云端

1. 进入 **Browse** 选项卡。
2. 点击左侧面板的 **+** 图标 → 选择 **Yandex Disk**。
3. 点击右侧面板的 **+** 图标 → 选择 **Google Drive**。
4. 导航到你想要移动或同步的文件夹。  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />  

---

## 四种文件传输方式

### 方式一：在 Explorer 面板之间拖放

1. 在 Yandex 面板中选择文件或文件夹。
2. 将它们拖到 Google Drive 面板中（反方向也可）。
3. 在 **Transfer** 中查看进度。  

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />  


👉 参考：  
[Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
[Drag & Drop files](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)  

---

### 方式二：先 Compare，再复制或删除

1. 在左侧打开 Yandex Disk 的源文件夹，在右侧打开 Google Drive 的目标文件夹。
2. 选择 **Compare**。
3. RcloneView 会高亮显示：
   - 仅存在于一侧的项目
   - 大小不同的项目
   - 匹配的文件
4. 根据传输方向点击 **Copy →** 或 **← Copy**。
5. 清理重复文件时，请谨慎使用 **Delete**。  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />  


👉 指南：[Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)  


---

### 方式三：Sync 或另存为 Job

1. 选择一个 **Yandex 文件夹** 作为源，一个 **Google Drive 文件夹** 作为目标。
2. 点击 **Sync**。
3. 选择：
   - 单向同步（Yandex → Google Drive）
   - 单向同步（Google Drive → Yandex）
   - 双向同步
4. 使用试运行（dry-run）预览计划中的操作。
5. 运行同步，或点击 **Save to Jobs** 以便日后复用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  


👉 了解更多：

- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

---

### 方式四：安排定期同步任务

1. 打开 **Job Manager → Add Job**。
2. 选择 Yandex 作为源，Google Drive 作为目标（或反过来）。
3. 设置间隔（例如每天、每小时、每周）。
4. 启用该任务。
5. 查看日志和 Job History 以了解执行结果。  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />  

👉 了解更多：[Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## 顺畅传输的小技巧

- 在大型单向同步前先使用 **dry-run**。
- Google Drive API 可能会对非常大的突发请求进行限速；如有需要，请降低并发数。
- 为了让计划任务正常运行，请保持 RcloneView 处于运行状态。

---

## 总结

RcloneView 让在 **Yandex Disk** 与 **Google Drive** 之间传输文件变得简单可靠。
借助两项服务的原生登录、可视化 Explorer 面板、Compare、Sync 和 Jobs，你无需接触命令行即可迁移或维护你的多云工作流。

<CloudSupportGrid />
