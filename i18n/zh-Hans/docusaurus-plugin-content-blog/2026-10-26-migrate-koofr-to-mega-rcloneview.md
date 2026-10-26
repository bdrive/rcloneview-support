---
slug: migrate-koofr-to-mega-rcloneview
title: "将 Koofr 迁移到 Mega — 使用 RcloneView 传输文件"
authors:
  - steve
description: "使用 RcloneView 将 Koofr 迁移到 Mega:连接两个远程,通过 Dry Run 预览,在云之间复制文件,并用 Folder Compare 验证。"
keywords:
  - 将 Koofr 迁移到 Mega
  - Koofr 到 Mega 传输
  - 将 Koofr 文件移动到 Mega
  - Koofr Mega 迁移
  - RcloneView 云到云
  - Koofr 到 Mega 同步
  - rclone GUI
  - 云迁移工具
  - Mega 文件传输
  - 验证云传输
tags:
  - RcloneView
  - koofr
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 将 Koofr 迁移到 Mega — 使用 RcloneView 传输文件

> 在两个云之间直接将 Koofr 文件库复制到 Mega,先预览,最后再验证。

Koofr 和 Mega 对存储采取不同的方式,而在两者之间手动迁移意味着要下载所有内容再重新上传。对于拥有多年项目文件夹的摄影师,或使用共享文档的小型办公室来说,这意味着要花上数小时盯着进度。RcloneView 在一个窗口中连接这两项服务,并在它们之间直接传输,作业可以预览、重复执行,并在历史记录中查看。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 将 Koofr 和 Mega 添加为远程

打开 **Remote > New Remote**,使用设置对话框要求的凭据添加 Koofr。然后使用您的电子邮件和密码添加 Mega。Mega 是凭据输入型远程,而不是 OAuth,因此没有浏览器步骤。两者都出现在 Remote Manager 中后,您就可以分别在各自的 Explorer 面板中打开它们。

Koofr 和 Mega 与其他受支持的提供商一起出现在同一个远程列表中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中创建 Koofr 和 Mega 远程" class="img-large img-center" />

## 规划传输

首先浏览您想要移动的 Koofr 文件夹。对最大的文件夹使用 **Get Size**,以便了解预期数据量,并记下可以留下的内容。Mega 会根据您的套餐设置账户传输和存储限制,因此请在启动大型作业之前确认目标有足够空间,而不是在中途才发现问题。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中并排浏览 Koofr 和 Mega" class="img-large img-center" />

## 创建 Copy 作业并进行 Dry Run

在 Sync 向导中,将 Koofr 设为源,将 Mega 文件夹设为目标。选择 **Copy** 作业类型,这样现有的 Mega 文件永远不会被删除。在高级设置下,您可以调整文件传输数和 equality checker 数;如果任一服务变慢或返回错误,请调低这些值。使用筛选功能可以跳过您不想带过去的文件类型或文件夹。

在正式作业之前先运行 **Dry Run**。它会准确显示哪些文件将被复制,从而能在零成本的情况下发现选错源文件夹的问题。预览无误后,运行作业,并在 Transferring 标签页中查看速度和进度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 标签页中监控云到云传输" class="img-large img-center" />

## 验证并保留记录

运行结束后,将 Koofr 放在左侧、Mega 放在右侧,打开 **Compare**。筛选仅存在于左侧或有差异的文件,查看未到达的项目,并使用 Compare 视图的复制操作将它们复制过去。Job History 会保留每次运行的状态、持续时间、大小和文件数,因此在停用旧账户之前,您已有一份记录。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History 显示已完成的 Koofr 到 Mega 传输" class="img-large img-center" />

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 通过 **Remote > New Remote** 添加 Koofr 和 Mega。
3. 创建从 Koofr 到 Mega 的 Copy 作业并运行 Dry Run。
4. 运行作业,并在删除 Koofr 上的任何内容之前使用 Folder Compare 确认。

先复制后验证,意味着在 Mega 拥有全部文件之前,您的 Koofr 文件始终可用。

---

**相关指南:**

- [将 Koofr 迁移到 Dropbox](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [将 pCloud 迁移到 Mega](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [修复 Mega 连接和配额错误](https://rcloneview.com/support/blog/fix-mega-connection-quota-errors-rcloneview)

<CloudSupportGrid />
