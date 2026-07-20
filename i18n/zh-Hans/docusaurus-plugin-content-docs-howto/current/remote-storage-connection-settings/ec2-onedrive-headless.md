---
sidebar_position: 12
description: "在 AWS EC2 上安装并运行 Rclone,从 PC 上的 RcloneView 连接到该实例,并在无需在服务器上使用浏览器的情况下添加 OneDrive 远程。"
keywords:
  - rcloneview
  - rclone
  - onedrive
  - headless
  - external rclone
  - aws ec2
  - rclone rcd
  - remote storage
  - cloud migration
tags:
  - Remote-Storage
  - onedrive
  - external-rclone
  - aws-ec2
  - headless
date: 2025-07-15
author: Jay
---
# 在 AWS EC2 上为外部 Rclone 添加 OneDrive(无浏览器模式)

:::info 相关前置条件
如果你需要完整的 EC2 搭建教程,请参见 👉 [如何在 AWS EC2 上运行 Rclone 引擎](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)。
:::

---

整体流程:在一台有浏览器的机器上生成 OneDrive OAuth 令牌,然后通过 RcloneView 将该令牌粘贴到运行在 EC2 上的外部 Rclone 中。

---

## 步骤 1. 生成 OneDrive 令牌(任选一种方法)

**方法 A:使用 `rclone authorize "onedrive"`(最快)**

1. 在一台有浏览器且 rclone 版本相同的机器上,运行:
   ```bash
   rclone authorize "onedrive"
   ```  
2. 在浏览器中完成 Microsoft 登录/授权。  
3. 复制打印出的 JSON 令牌块(保留完整 JSON)。你将在步骤 3 中把它粘贴到 EC2 中。

**方法 B:使用 RcloneView 内嵌远程并复制其令牌**

1. 在你的本地 PC 上,使用内嵌 Rclone(常规浏览器 OAuth)添加 OneDrive。  
2. 打开**远程管理器**,编辑该 OneDrive 远程,点击**显示高级选项**,然后复制**令牌**字段(JSON)。

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-from-embedded-rclone.png" alt="copy onedrive oauth token from embedded rclone" class="img-medium img-center" />


👉 了解更多关于编辑远程的内容:[编辑远程设置](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## 步骤 2. 连接外部 Rclone(EC2)

打开一个**新窗口**,或使用当前会话在 RcloneView 中连接到你托管在 EC2 上的 Rclone:

- 打开 `设置` -> **`连接管理器`**,新建一个到你 EC2 托管的 Rclone 的连接,或者如果已经配置好,连接到现有连接。

👉 了解更多:[连接外部 Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 了解更多:[新窗口功能](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## 步骤 3. 向外部 Rclone 添加 OneDrive 远程(粘贴你的令牌)

1. 在连接到 EC2 的窗口中,进入 `远程` 菜单并选择 **`+ 新建远程`**。
2. 选择 **OneDrive** 作为提供商。
3. 输入**远程名称**,然后点击**显示高级选项**。
4. 将之前复制的 **OAuth 令牌**粘贴到**令牌**字段中。
5. 点击**添加远程**完成设置。


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-to-external-rclone.png" alt="copy onedrive oauth token to external rclone" class="img-medium img-center" />
:::info **请忽略此错误弹窗**
如果 RcloneView 显示类似下方的错误消息,你可以放心忽略它。
在大多数情况下,尽管出现此消息,令牌配置实际上已经成功完成。
关闭对话框后,你应该可以正常访问 OneDrive。  
这是一个已知的 UI 问题,我们会在下一个版本中改进相关用户体验。
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
配置完成后,即使没有浏览器支持,你基于 EC2 的 Rclone 现在也可以访问 OneDrive 了。你可以像往常一样使用 RcloneView 来管理、同步和传输文件。

---

## 相关链接

- [如何在 AWS EC2 上运行 Rclone 引擎](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- [连接管理器](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
- [多窗口用法](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)  
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)  
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)  
- [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)
