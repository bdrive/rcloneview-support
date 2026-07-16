---
slug: zero-cli-crypt-remote-rcloneview
title: "使用 RcloneView Crypt Remote 实现零命令行加密：保护任意云文件夹"
authors:
  - tayson
description: "在文件离开您的电脑之前使用 RcloneView 的 Crypt Remote 进行加密。了解设置方法、明文视图与加密视图的区别，以及隐私优先备份的最佳实践。"
keywords:
  - rclone crypt
  - encrypted remote
  - rcloneview encryption
  - zero knowledge backup
  - cloud privacy
  - encrypt cloud storage
  - rcloneview crypt remote
  - file name encryption
  - privacy first backup
  - rclone gui
tags:
  - RcloneView
  - cloud-storage
  - backup
  - encryption
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView Crypt Remote 实现零命令行加密：保护任意云文件夹

> 云存储虽然方便，但便利并不等于隐私。RcloneView 的 Crypt Remote 让您可以在上传前加密文件，无需命令行命令或复杂的参数。

越来越多的团队正在选择将**上传前加密**作为默认策略。它可以防止因账户被盗、内部审计、区域合规扫描或误报的安全审查而导致的意外泄露。一直以来的难点是复杂性,而 RcloneView 通过简单的 Crypt Remote 工作流消除了这一障碍。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView 中的 Crypt Remote 是什么?

Crypt Remote 是叠加在现有远程之上的加密视图。

- **基础远程 (Base Remote)**: 加密数据实际存储的位置(Drive、S3、WebDAV 等)
- **Crypt Remote**: 您实际使用的视图(为您解密显示)

RcloneView 会在上传前自动加密文件内容,并可选择加密文件名。

```
[Crypt Remote]  -> decrypted view for you
        |
        v
[Base Remote]   -> encrypted data stored in the cloud
```

对存储提供商而言,这些文件是不可读的,文件名看起来也像是随机字符串。

## 何时应使用 Crypt?

### 敏感的业务文档
合同、财务数据、客户文件或内部计划,不应被存储提供商读取。

### 个人存档与长期备份
家庭照片、身份证件和隐私记录理应默认加密。

### 共享或第三方存储
公司账户、外部供应商存储,或 NAS + 云的混合存储,加上一层加密会更安全。

## 分步操作:创建 Crypt Remote(无需命令行)

### 1) 打开新建远程

进入**远程管理器 → 新建远程 (Remote Manager → New Remote)**,然后选择**虚拟 → Crypt (Virtual → Crypt)**。

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="Add Crypt remote" class="img-large img-center" />

### 2) 选择基础远程

选择您要加密的远程和文件夹。您可以指定某个具体文件夹,以便将加密数据与其他内容分开存放。

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="Select target folder for crypt" class="img-large img-center" />

### 3) 设置加密密码

- **数据密码 (Data Password)**: 必填
- **文件名密码 (Filename Password)**: 可选,用于同时隐藏文件名

这些密码无法找回,请务必妥善保存。

### 4) 确认并完成

新的 Crypt Remote 会出现在远程管理器中,而基础远程保持不变。

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="Crypt remote in Remote Manager" class="img-large img-center" />

指南: [/support/howto/remote-storage-connection-settings/crypt-remote](/howto/remote-storage-connection-settings/crypt-remote)

## 理解两种视图(非常重要)

**基础远程视图 (Base Remote view)**
显示加密后的文件名和不可读的二进制数据,这是正常现象。

**Crypt Remote 视图**
显示解密后的文件和正常的文件名,您应该在这里进行操作。

如果 Crypt 视图看起来是空的,很可能是您将文件直接上传到了基础远程。请始终通过 Crypt Remote 上传文件。

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="Crypt vs base view comparison" class="img-large img-center" />

## 在实际 RcloneView 工作流中使用 Crypt

Crypt 远程的使用方式与普通远程相同:

- **拖放 (Drag & Drop)** 到 Crypt 中以在上传时加密
  指南: [/support/howto/rcloneview-basic/browse-and-manage-remote-storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- **对比与同步 (Compare & Sync)** 用于加密备份
  指南: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents), [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **定时任务**将 Crypt 作为目标
  指南: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)

<div class="img-grid-2">
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop into Crypt" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
</div>
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
</div>

## 最佳实践与注意事项

- **密码无法找回**: 请使用密码管理器保存。
- **备份 `rclone.conf`**: 其中包含加密密钥。
- **不要在同一文件夹中混合存放明文和加密文件**。
- **先进行测试**: 使用小文件夹并执行一次模拟运行(dry run)。

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## 常见问题

**加密会降低传输速度吗?**
会产生一定的 CPU 开销,但通常网络速度才是瓶颈所在。

**可以在 RcloneView 之外解密吗?**
可以。任何使用相同 crypt 配置和密码的 rclone 客户端都可以解密。

**如果我丢失了密码怎么办?**
数据将无法恢复,这是零知识安全的固有代价。

## 结语

先加密,再自动化。RcloneView 的 Crypt Remote 让您无需命令行即可实现隐私优先的备份。设置一次,像往常一样使用对比/同步/定时任务,数据的掌控权始终在您手中。
