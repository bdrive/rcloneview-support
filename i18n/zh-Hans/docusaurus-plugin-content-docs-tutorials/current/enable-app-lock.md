---
sidebar_position: 13
description: "在 RcloneView 中启用应用锁,要求启动时输入密码,保护远程、传输、任务、挂载以及内部数据库。"
keywords:
  - rcloneview
  - app lock
  - password
  - security
  - rclone_view.db
  - job history
  - transfer history
  - settings
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - password
date: 2025-12-08
author: tayson
---

# 使用应用锁(密码保护)

**应用锁**要求在 RcloneView 启动或重新打开时输入密码,以保护您的远程、传输记录、任务、挂载信息、任务历史以及内部数据库(`rclone_view.db`)。它非常适合多人可能使用同一台电脑的共享或企业办公场景。

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## 为什么要使用应用锁?

- 保护 RcloneView 的任务、挂载和传输历史的隐私。  
- 适用于共享电脑或办公环境。  
- 保护敏感的同步/挂载操作和自动化任务。  
- 即使自动任务在后台运行,也能增加一层安全保障。

## 如何启用应用锁

### 步骤 1 — 打开设置

- 从顶部菜单进入 **设置 → 常规设置**。  
  <img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open settings menu" />

### 步骤 2 — 在常规选项卡中开启应用锁

- 在**常规**中,勾选**启用应用锁**。  
- 输入您想使用的密码。  
- 点击**关闭**以保存。  

<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

## 应用锁的工作原理

启用应用锁后,启动 RcloneView 或重新打开其窗口时,会先提示输入密码,才能获得访问权限。

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## 重置应用锁(重置应用)

如果您忘记了密码,请在密码提示界面点击**重置应用**。

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

**警告:** 重置应用会清除所有 RcloneView 内部数据:

- 应用锁密码  
- 所有设置值  
- 传输历史  
- 任务定义  
- 任务历史  

不会被重置的内容:**rclone 配置**(`rclone.conf`)会保留,因此远程定义不受影响。

## 推荐使用场景

- 共享或公共电脑。  
- 公司或机构环境。  
- 运行大量自动化任务且希望防止篡改时。  
- 需要保护任务/传输历史及内部数据时。

## 总结

| 项目 | 说明 |
| --- | --- |
| 功能 | RcloneView 启动/重新打开时要求输入密码 |
| 保护对象 | 设置、任务、传输历史、数据库文件 |
| 触发时机 | 应用启动或重新打开 |
| 重置 | **重置应用**会清除内部数据,但保留 `rclone.conf` |
| 适用场景 | 共享电脑、高安全性环境 |

应用锁是一个小小的开关,却能提供强大的保护。启用它,让您的 RcloneView 活动和历史记录保持私密。
