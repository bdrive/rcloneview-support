---
slug: fix-cloud-oauth-token-expired-refresh-rcloneview
title: "修复云存储 OAuth 令牌过期问题——使用 RcloneView 重新连接"
authors:
  - tayson
description: "了解如何在 RcloneView 中诊断和修复 Google Drive、Dropbox、OneDrive 及其他基于 OAuth 的云存储提供商的令牌过期错误。"
keywords:
  - expired OAuth token cloud storage
  - fix rclone OAuth token expired
  - Google Drive token expired RcloneView
  - Dropbox authorization token error
  - OneDrive token refresh rclone
  - cloud storage authentication error
  - rclone reconnect cloud provider
  - fix cloud login expired RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复云存储 OAuth 令牌过期问题——使用 RcloneView 重新连接

> Google Drive、Dropbox、OneDrive 及其他云存储提供商的 OAuth 令牌会定期过期。以下介绍如何在 RcloneView 中识别此错误,并在不丢失远程配置的情况下重新进行身份验证。

基于 OAuth 的云存储提供商——Google Drive、Dropbox、Microsoft OneDrive、Box、pCloud、Yandex Disk 等——通过令牌而非密码授予访问权限。这些令牌有各自的过期策略:有些只要应用保持活跃就会自动刷新,而有些则在 90 到 180 天不活跃后过期,或在提供商的安全系统检测到异常访问模式时过期。当令牌过期时,RcloneView 的同步任务会开始出现身份验证错误,看起来令人担忧,但其实很容易修复。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 识别令牌过期错误

令牌过期的 OAuth 错误会出现在 RcloneView 的**日志(Log)选项卡**中,信息类似如下:

- Google Drive:`oauth2: cannot fetch token: 401 Unauthorized` 或 `Token has been expired or revoked`
- Dropbox:`invalid_grant` 或 `Token is expired`
- OneDrive:`AADSTS70008: The refresh token has expired`
- Box:`401 Unauthorized: The access token provided has expired`

传输(Transferring)选项卡会显示任务在 0% 时立即失败,没有任何文件被传输。该远程在资源管理器面板中也可能显示为无法访问——浏览该远程时会返回错误,而不是文件夹列表。

<img src="/support/images/en/blog/new-remote.png" alt="Viewing remote configuration in RcloneView to fix token errors" class="img-large img-center" />

## 通过远程管理器重新进行身份验证

要刷新过期的 OAuth 令牌,请进入**远程(Remote)选项卡 → 远程管理器(Remote Manager)**,选择受影响的远程,然后点击**编辑(Edit)**。在远程配置界面中,找到 OAuth 令牌部分,点击重新身份验证按钮(或清除现有令牌)。RcloneView 会在您的浏览器中打开该提供商的 OAuth 授权页面。

使用您的云账户凭据登录,重新授予 RcloneView(通过 rclone)访问权限,新令牌会自动保存。关闭浏览器标签页并返回 RcloneView——此时该远程应该可以成功连接。可以通过在资源管理器面板中浏览该远程来测试。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring reconnected cloud remote transfer in RcloneView" class="img-large img-center" />

## 令牌策略更严格的提供商

**Google Drive** 的刷新令牌只要应用由账户所有者授权、且 rclone 应用未在 Google 的安全设置中被撤销,就会一直有效。如果您在 Google 账户 → 第三方应用中撤销了访问权限,则需要从头重新授权。

**Microsoft OneDrive** 的令牌在 90 天不活跃后会过期。如果您三个月没有进行同步,预计需要重新进行身份验证。由于 Azure AD 管理员设置的组织策略,OneDrive for Business 的令牌可能会更早过期。

**Box** 和 **Dropbox** 的令牌通常有效期较长,但如果您更改了账户密码、首次启用双重身份验证,或提供商检测到安全事件,令牌就会过期。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing failed jobs due to token expiry in RcloneView job history" class="img-large img-center" />

## 预防未来的中断

为每个 OAuth 远程安排至少一个每周运行的小型同步任务,即使不传输任何内容也无妨。持续使用令牌可以防止 OneDrive 等提供商因不活跃而触发过期。定期检查任务历史(Job History)选项卡,以便及时发现任务失败,而不是数天都未被察觉。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在同步任务失败后,检查日志选项卡中的 OAuth 过期错误信息。
3. 打开远程管理器,选择受影响的远程,点击编辑以重新进行身份验证。
4. 在重新运行失败的任务前,先在资源管理器面板中测试连接。

在 RcloneView 中,OAuth 令牌续期只需不到两分钟——重新完成身份验证后,所有先前配置的同步任务都会恢复正常工作,无需其他任何更改。

---

**相关指南:**

- [使用 RcloneView 修复 Google Drive 配额和速率限制错误](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [使用 RcloneView 排查 Rclone 错误](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [使用 RcloneView 获取同步完成通知提醒](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)

<CloudSupportGrid />
