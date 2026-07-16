---
slug: fix-oauth-token-expired-cloud-sync-rcloneview
title: "修复 OAuth 令牌过期错误 — 在 RcloneView 中重新授权云账户"
authors:
  - tayson
description: "定时备份失效了，原因是 OAuth 令牌过期。以下是如何诊断和修复 Google Drive、OneDrive、Dropbox 等 OAuth 提供商在 RcloneView 中的令牌过期问题。"
keywords:
  - oauth token expired
  - rclone token expired
  - google drive token refresh
  - onedrive oauth expired
  - fix cloud auth error
  - rclone re-authorize
  - cloud sync authentication
  - oauth refresh token
  - fix cloud connection
  - rcloneview re-auth
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 OAuth 令牌过期错误 — 在 RcloneView 中重新授权云账户

> 你的夜间备份已经悄无声息地失败了两周。错误提示是："token expired"（令牌已过期）。你的 Google Drive、OneDrive 或 Dropbox 连接只需要重新授权即可 —— 下面介绍具体的修复方法。

OAuth 令牌用于将 RcloneView 与 Google Drive、OneDrive、Dropbox、Box 等云存储提供商连接起来。这些令牌都有各自的过期策略 —— Google 的令牌可以长期有效，但可能被撤销；Microsoft 的令牌如果 90 天未使用会过期；而更改密码或发生安全事件会使所有令牌失效。当令牌过期时，同步任务会悄然失败，直到你发现为止。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常见的令牌过期原因

| 提供商 | 令牌行为 |
|----------|---------------|
| Google Drive | 刷新令牌在被撤销前一直有效（但可能被用户或管理员撤销） |
| OneDrive | 未使用 90 天后过期；更改密码会使其失效 |
| Dropbox | 在被明确撤销前一直有效 |
| Box | 60 天未刷新即过期 |

## 症状

- 定时任务失败，提示"身份验证"或"令牌"错误
- 手动浏览时显示"未授权"消息
- 任务历史记录显示近期失败次数不断增加

## 如何修复

### 先检查任务历史

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Identify auth errors" class="img-large img-center" />

留意规律 —— 如果某个提供商的所有任务都在同一天开始失败，那多半是令牌问题。

### 重新授权远程

打开远程管理器，重新授权受影响的远程。这会触发新的 OAuth 流程 —— 登录该提供商并再次授予访问权限。

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorize remote" class="img-large img-center" />

你现有的任务配置会被保留，只有身份验证令牌会更新。

### 验证修复结果

运行一次测试同步，确认连接正常：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Test after re-auth" class="img-large img-center" />

## 预防措施

- **启用通知** —— Slack/Discord/Telegram 提醒可以在任务失败时立即告知你
- **每周检查任务历史** —— 在失败累积之前及时发现问题
- **更改密码后** 记得重新授权云端远程，避免连接失效
- **对 Google Workspace 使用服务账号**（它们不像用户令牌那样会过期）

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. **检查任务历史**，查找与身份验证相关的失败记录。
3. 在远程管理器中**重新授权**受影响的远程。
4. **设置通知**，以便及早发现后续故障。

只需 2 分钟重新授权，就能避免数周备份缺失。

---

**相关指南：**

- [修复权限被拒绝错误](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [排查 Rclone 错误](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Slack 通知](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)

<CloudSupportGrid />
