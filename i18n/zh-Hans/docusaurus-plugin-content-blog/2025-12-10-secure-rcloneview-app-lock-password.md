---
slug: secure-rcloneview-app-lock-password
title: "使用 App Lock 锁定 RcloneView：保护远程、任务与历史记录"
authors:
  - tayson
description: "通过 App Lock 为 RcloneView 添加密码验证，确保只有授权用户才能查看远程、传输历史、任务、挂载以及内部数据库——即使在共享电脑上也是如此。"
keywords:
  - rcloneview security
  - rcloneview app lock
  - rclone password protect
  - secure rclone gui
  - protect rclone remotes
  - rclone_view.db
  - cloud automation security
  - shared pc security
  - job history protection
  - transfer history protection
tags:
  - security
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';


# 使用 App Lock 锁定 RcloneView：保护远程、任务与历史记录

> 共享电脑或公司电脑？开启 App Lock，要求密码验证后才能打开 RcloneView，让远程、任务和传输历史不被他人看到。

RcloneView 的 App Lock 会在启动或重新打开应用时添加一个简单的密码验证界面。它保护内部数据库（`rclone_view.db`），其中存有你的远程、任务定义、挂载设置、任务历史和传输日志——因此即使工作站被共享，敏感的自动化信息也能保持私密。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## App Lock 保护的内容

- 存储在 `rclone.conf` 中的远程定义和凭据（访问受应用限制）  
- 传输历史和日志  
- 任务设置和计划  
- 挂载配置和界面状态  
- 将所有内容关联起来的 SQLite 数据库（`rclone_view.db`）

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## 谁能从中受益

- 共享一台工作站或跳板机的团队  
- 运行计划同步/挂载任务、需要防篡改保护的 IT 管理员  
- 拥有敏感跨云工作流程（备份、合规归档）的用户  
- 任何希望在不改变操作系统层设置的情况下快速增加安全层的人

## 如何开启 App Lock（只需一分钟）

1) 在顶部菜单中打开 **Settings → General Settings**。  
<img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open Settings menu" />

2) 在 **General** 中，勾选 **Enable App Lock**，输入密码，然后点击 **Close**。  
<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

就是这样。下次 RcloneView 启动或窗口被重新打开时，你会看到解锁提示。

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## 忘记密码时如何重置

- 在解锁界面上，点击 **Reset App**。  
- 确认重置以清除 App Lock 及所有内部数据（设置、任务、传输历史、任务历史）。  
- 你的 `rclone.conf` 保持不变，因此重新打开应用后远程定义仍然可用。

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

## 安全操作最佳实践

- 在共享电脑或多人可能打开你会话的办公环境中使用 App Lock。  
- 将其与操作系统账户密码或磁盘加密结合使用，实现多层保护。  
- 为任务命名要清晰，但避免在任务名称或备注中嵌入敏感信息。  
- 将 `rclone_view.db` 备份到一个安全的、用户可写的位置（参见[更改数据库位置](/tutorials/change-rcloneview-database-location)）。  
- 仅对你信任的任务保持调度器启用，并通过 Job History 进行监控。

## 常见问题

**App Lock 会阻止已计划的任务运行吗？**  
不会——你已计划的任务会继续运行。App Lock 只是限制界面访问，防止他人查看或修改它们。

**如果我重置了 App Lock 会怎样？**  
内部数据会被清除，但 `rclone.conf` 会保留，因此远程仍然存在。你可以根据需要重新创建任务/历史记录。

**我还能使用终端吗？**  
可以。解锁后，内置终端可正常使用；App Lock 仅在启动时限制访问。

## 总结

一个密码提示看似微小，但它是保护远程、自动化和历史记录的强大屏障。启用 App Lock，将 `rclone_view.db` 保存在安全位置，放心运行你的云工作流程——即使在共享设备上也是如此。

<CloudSupportGrid />
