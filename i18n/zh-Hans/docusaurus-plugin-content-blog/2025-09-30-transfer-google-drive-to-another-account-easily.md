---
slug: transfer-google-drive-to-another-account-easily
title: 使用 RcloneView 轻松将 Google Drive 传输到另一个账户
authors:
  - jay
description: 使用 RcloneView 在 Google Drive 账户之间移动文件。规划迁移方案，遵守 Google 配额限制，并自动化传输——无需命令行。
keywords:
  - rcloneview
  - google drive transfer
  - migrate google drive
  - cross account transfer
  - cloud sync
  - rclone gui
tags:
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 轻松将 Google Drive 传输到另一个账户

> 更换账户，掌控依旧。RcloneView 将 rclone 的 Google Drive 后端包装成友好的图形界面,让你能够清晰地在 Drive 账户之间移交、整合或归档数据——无需编写脚本。

## 为什么要在 Google Drive 账户之间迁移数据？

毕业、换工作、公司合并以及日常的清理项目，都常常需要在 Google 账户之间移动文件。Google 内置的传输工具虽然有所帮助，但仍存在不足：它们只覆盖 My Drive，忽略了细粒度过滤，也无法暂存或安排迁移计划。[Google Help](https://support.google.com/accounts/answer/6386856?hl=en&utm_source=chatgpt.com) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

<!-- truncate -->

### 开始之前先了解限制

- **单文件大小**：非 Google 格式的文件单个最大可达 **5 TB**；Docs、Sheets 和 Slides 有各自独立的限制。[Google Help](https://support.google.com/drive/answer/37603?hl=en)
- **每日传输配额**：Drive API 允许每个用户每天上传（含复制操作）**750 GB**；配额每 24 小时重置一次。[Google for Developers](https://developers.google.com/drive/api/guides/limits)
- **所有权规则**：个人传输仅涵盖 Gmail + My Drive。Workspace 管理员可以在同一域内重新分配所有权，但跨域共享云端硬盘则需要通过复制来完成。[Google Help](https://support.google.com/accounts/answer/6386856?hl=en) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

### 各方案一览

| 方案 | 最适合场景 | 局限性 |
|---|---|---|
| Google「传输您的内容」工具 | 离校学生或迁移到个人 Gmail 账户 | 仅支持 My Drive + Gmail；无过滤功能；无法针对共享云端硬盘 |
| 共享给第二账户后再复制 | 同一域内的小规模移交 | 需要手动操作；版本历史和评论可能会分散 |
| RcloneView 跨账户传输 | My Drive 与共享云端硬盘混合场景、细粒度文件夹移动、可重复的同步 | 需要为每个账户配置 rclone 远程（由 RcloneView 向导处理） |

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 准备工作

1. **明确所有权与范围**：列出需要移动或保留的文件夹（My Drive 和共享云端硬盘）。确定目标副本应由谁拥有。
2. **检查配额**：确认存储空间是否充足，并留意可能触及 750 GB/天限制的大型视频档案。
3. **规划切换窗口**：告知协作者一个冻结期或分阶段的时间表，让他们清楚应在何处工作。
4. **标注过滤规则**：确定包含/排除规则（例如跳过 `/Backups/old/` 或仅移动 `/Projects/2024/`）。
5. **备份关键文件夹**：对于受监管的内容，在迁移前先导出清单或版本历史。

🔍 相关指南
- [在 RcloneView 中快速设置 Google OAuth](/howto/remote-storage-connection-settings/add-oath-online-login)
- [添加 Google 共享云端硬盘远程](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)

## 在 RcloneView 中连接两个 Google Drive 账户

RcloneView 将 `rclone config` 转变为一个引导式向导，让你只需注册一次每个 Google 账户，即可反复用于传输。

1. 打开 **RcloneView** → 点击 **`+ New Remote`**。
2. 选择 **Google Drive** → 使用**源账户**登录 → 为该远程指定一个清晰的名称（例如 `Drive-Source`）。
3. 对**目标账户**重复上述步骤（例如 `Drive-Destination`）。
4. 如涉及共享云端硬盘，请在向导中启用它们或添加驱动器 ID。
5. 确认两个远程都出现在浏览器窗格中，且你可以浏览双方的文件夹。

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="open multiple google drive remotes" class="img-medium img-center" />

## 在 RcloneView 中选择合适的传输方式

在复制整个账户之前，先从一个试点文件夹开始。样本运行效果良好后，再进行更大范围的移动或安排定期同步。

### 拖放（手动移动）

在左侧打开源远程，右侧打开目标远程，然后将文件或文件夹拖到对面。非常适合临时性移交或移动少量共享云端硬盘文件夹。
👉 详见：[使用拖放复制文件](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### 比较并复制（预览差异）

运行 **Compare** 列出两个账户之间的新增、更改或缺失内容。查看差异，取消勾选你想跳过的项，然后复制。非常适合分阶段迁移或在冻结窗口后进行清理。
👉 详见：[比较并管理文件](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-medium img-center" />
### 同步与计划任务（自动化切换）

使用 **Sync** 镜像所选文件夹，直至目标完全取代源。务必先进行**试运行（dry-run）**，然后保存该任务并安排每晚或每小时执行，直到切换完成。
👉 详见：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved sync job in RcloneView" class="img-medium img-center" />

**实用技巧**

- 将迁移拆分为多个批次，保持在 750 GB/天的 API 配额之内；待配额重置后再排队处理下一批次。
- 将共享云端硬盘内容复制到个人 My Drive 时，务必核实权限，并从目标账户重新共享关键文件夹。
- 在最终同步阶段将源文件夹设为只读，使最后一次差异量保持较小且可预测。
- 从 RcloneView 的任务历史中导出 rclone 日志，以保留移动内容及时间的审计记录。

## 迁移完成后

- **抽查所有权**：确认目标账户拥有关键文件（尤其是 Docs/Sheets），且协作者仍保留访问权限。
- **重建快捷方式与书签**：Google 快捷方式不会随迁移一起转移；请在新账户中重新创建重要链接。
- **清理源账户**：一旦目标账户成为权威版本，即可归档或删除旧文件夹，以防止意外修改。
- **监控共享云端硬盘权限**：大型团队可能需要更新群组成员，以匹配新的所有权结构。

## 结论——要点回顾

- Google 的原生传输工具虽有帮助，但仅限于粗略操作。
- RcloneView 提供细粒度的文件夹选择、预览以及跨 Google Drive 账户的计划同步——依然完全基于图形界面。
- 围绕 Google 的配额限制进行规划，先进行试点迁移，并记录切换过程，让同事清楚在哪里能找到最新文件。

## 常见问题

**RcloneView 会保留文件版本和评论吗？**
非 Google 格式的文件（PDF、视频、ZIP）会保持完整。Google Docs/Sheets/Slides 会保留内容，但复制后会生成新的 ID；RcloneView 会将其显示为新文件，你可以按需重新共享。

**我能在不同域之间移动共享云端硬盘文件夹吗？**
Google 不允许共享云端硬盘直接更换域。请使用 RcloneView 将内容复制到目标域所拥有的共享云端硬盘中，然后重新应用权限。[Google Workspace Admin Help](https://support.google.com/a/answer/7212025?hl=en)

**如果达到 750 GB/天的配额会怎样？**
传输会因触发速率限制错误而暂停。等待 24 小时（或切换到另一个仍有配额的账户）后恢复任务。RcloneView 的日志会显示传输中断的位置，让你无需重复文件即可继续。

**准备好让跨账户传输变成再普通不过的一项清单任务了吗？**

<CloudSupportGrid />
