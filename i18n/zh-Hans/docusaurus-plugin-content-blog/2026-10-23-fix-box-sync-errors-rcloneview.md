---
slug: fix-box-sync-errors-rcloneview
title: "修复 Box 同步错误 — 使用 RcloneView 解决"
authors:
  - kai
description: "使用 RcloneView 修复 Box 同步错误：借助 Dry Run、日志和作业历史记录，解决 OAuth、Box for Business、速率限制和文件名问题。"
keywords:
  - 修复 Box 同步错误
  - Box 同步无法工作
  - Box 速率限制错误
  - Box OAuth 令牌过期
  - Box for Business rclone
  - RcloneView box
  - Box 故障排除
  - Box 传输失败
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修复 Box 同步错误 — 使用 RcloneView 解决

> 一份实用的检查清单，帮助你使用 RcloneView 内置的工具诊断失败的 Box 传输。

Box 同步作业失败通常源于几个反复出现的原因：登录过期、账户类型不对、API 调用被限流，或是 Box 对待方式与普通文档不同的文件。RcloneView 提供作业历史记录、日志和内置终端，帮助你快速区分这些原因。此外，RcloneView 可以在一个窗口中挂载并同步 90 多个提供商，支持 Windows、macOS 和 Linux，因此你也可以用另一个远程来测试同样的文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 从作业历史记录和日志选项卡开始

打开作业历史记录（Job History），查看失败运行的状态（Completed、Errored 或 Canceled），以及已传输的大小和文件数量。部分传输通常说明是单个文件的问题；如果作业立即失败，则通常是身份验证或配置问题。

要查看详细信息，请切换到底部的日志（Log）选项卡。若要记录更多内容，请在 Embedded Rclone 设置中启用 rclone 日志，将级别设置为 DEBUG，重启内置 rclone，然后重现该故障。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中查看失败的作业历史记录" class="img-large img-center" />

## 重新验证并检查账户类型

如果所有请求都失败，可能是 OAuth 令牌已过期或被撤销。打开远程管理器（Remote Manager），编辑 Box 远程，并通过浏览器重新登录。

如果可以登录，但文件夹缺失或出现权限错误，请检查账户类型。Box for Business 需要在远程上设置 `box_sub_type = enterprise`。对企业账户使用个人账户的配置，是造成结果令人困惑的常见原因。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中编辑 Box 远程配置" class="img-large img-center" />

## 处理限流和大型作业

当一次处理数千个小文件时，Box 可能会限制请求。在作业的高级设置（Advanced Settings）中，降低文件传输数量和相等性检查器（equality checkers）的数量（对于较慢的后端，建议不超过 4）。将重试次数保留为默认值 3，以便临时性故障可以自动恢复。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 选项卡中监控传输" class="img-large img-center" />

## 过滤有问题的文件

Box Notes 等仅限在线的项目并不是普通文件。过滤步骤中预定义的 Box Docs 过滤器会将它们排除，使其不再导致作业失败。你还可以添加自定义规则、设置最大文件大小，或在排查期间排除有问题的文件夹。之后运行 Dry Run 来确认将要复制的内容。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="比较文件夹以找出同步失败的文件" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 查看作业历史记录和日志选项卡，找到确切的错误。
3. 重新验证 Box 远程，如适用，请确认 Box for Business 设置。
4. 降低并发数，应用 Box Docs 过滤器，然后执行 Dry Run 并重新运行。

大多数 Box 失败都是配置问题，花几分钟查看日志就能发现。

---

**相关指南：**

- [修复 Box 上传错误](https://rcloneview.com/support/blog/fix-box-upload-errors-rcloneview)
- [修复 OAuth 令牌过期导致的云同步问题](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [修复云 API 速率限制错误](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
