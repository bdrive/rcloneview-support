---
sidebar_position: 1
description: 了解如何安装 RcloneView 并通过简单的分步指南将 Google Drive 添加为远程。
keywords:
  - rclone
  - cloud
  - sync
  - rcloneview
  - guide
  - google drive
  - remote storage
  - Quick Start
  - OAuth
tags:
  - RcloneView
  - Cloud
  - Sync
  - getting-started
  - google-drive
  - Remote-Storage
date: 2025-05-26
author: Jay
slug: /
---
# 快速入门指南

本指南将逐步引导您完成安装 **RcloneView** 并添加**远程存储（Google Drive）**的过程。

## **第 1 步：安装 RcloneView**

1. 从 [**RcloneView 下载页面**](https://rcloneview.com/src/download.html) 下载安装文件。
2. 运行下载的安装程序，并按照屏幕上的说明完成安装。
3. 安装成功后，您将看到以下确认界面：
<img src="/support/images/howto/Completed-install.png" alt="Completed-install" class="img-medium img-center" />

## **第 2 步：添加远程存储（以 Google Drive 为例）**

### **打开新建远程配置窗口**

- 在顶部菜单的 **`Remote`** 下点击 **`+ New Remote`**。
- 或者，点击资源管理器面板中的 **`+`** 按钮，然后选择 **`New Remote`** 以开始远程配置。
<img src="/support/images/howto/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
### 添加 Google Drive 远程

1. 在搜索栏中输入 **`google`**。
2. 从结果中选择 **`Google Drive`**。
3. 输入一个易于识别的**`远程名称`**（例如 MyGoogleDrive）。
4. 点击 **`Add Remote`** 完成添加远程。

:::tip
标有星号 (*) 的字段为必填项。请在保存前确保所有必填字段均已填写完整。
:::
<div class="img-grid-2">
<img src="/support/images/en/howto/new-remote-step1.png" alt="new remote step1" class="img-medium img-center" />
<img src="/support/images/en/howto/add-remote-step2.png" alt="add remote step2" class="img-medium img-center" />
</div>

:::tip 基于 OAuth 的云端远程

大多数支持 OAuth（基于网页的登录）的云存储提供商，例如 **Google Drive**、**Dropbox**、**Google Photos**、**OneDrive**、**Box**、**pCloud**、**Yandex Disk**、**premiumize.me**、**put.io** 和 **HiDrive**，都允许您跳过 `Options` 步骤——只需为远程命名并通过浏览器登录即可。

不过，**部分提供商需要在 OAuth 登录前**在 `Options` 选项卡中进行额外配置：
- **Zoho WorkDrive** – 选择区域
- **Google Cloud Storage** – 输入项目编号
- **Citrix ShareFile** – 输入根文件夹 ID
- **Google Drive Shared with Me** – 启用 `shared_with_me`
- **Box for Business** – 将 box_sub_type 选择为 `enterprise`

👉 参见指南：[通过浏览器登录连接](/howto/remote-storage-connection-settings/add-oath-online-login#supported-cloud-providers--setup-requirements)
:::

## **第 3 步：连接您的远程存储（Google Drive 单点登录）**
### 账户身份验证

- 您将被重定向到 Google SSO 登录页面。
- 选择您的 Google 账户，或选择**"使用其他账户"**以使用其他账户登录。

<img src="/support/images/howto/google-choose-account.png" alt="google choose account" class="img-medium img-center" />
:::tip
如果您使用的是上述基于密码登录以外的登录方式，请参阅[本指南](https://support.google.com/accounts/answer/12849458)完成登录流程。
:::

### 授权 RcloneView 访问

- 点击"继续"以完成与您的 Google Drive 的连接。

<img src="/support/images/howto/google-trust-rclone.png" alt="google trust rclone" class="img-medium img-center" />
- 您应该会看到显示**"成功！"**的确认页面
<img src="/support/images/howto/google-login-complete.png" alt="google login complete" class="img-medium img-center" />
✅ **完成！** 您的 Google Drive 远程现已成功连接，可以在 RcloneView 中使用了。

