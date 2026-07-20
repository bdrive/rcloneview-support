---
sidebar_position: 1
description: "启用 RcloneView 内置的 Web 服务器，即可通过本地网络中的任意浏览器访问 Explorer、Jobs、Remotes 和 Settings。"
keywords:
  - rcloneview
  - web frontend
  - web server
  - browser access
  - remote access
  - web ui
  - rclone web interface
tags:
  - RcloneView
  - Tutorial
  - Web-Frontend
  - Remote-Access
date: 2026-03-27
author: steve
---

# RcloneView Web 前端

RcloneView 内置了 Web 服务器，可让你通过任意网页浏览器访问完整的 RcloneView 界面。你可以浏览远程、管理任务并配置设置——无需打开桌面应用窗口即可完成全部操作。

本教程涵盖以下内容：

- 在 RcloneView 设置中启用 Web 服务器
- 配置端口、用户名和密码
- 从浏览器访问 Web 前端
- 允许网络中其他设备进行远程访问

---

## 什么是 Web 前端？

Web 前端是 RcloneView 基于浏览器的界面，与桌面应用体验一致。内置 Web 服务器运行后，你可以打开浏览器，通过熟悉的界面与 RcloneView 交互，其中包括：

- **Explorer（浏览器）** — 浏览本地和远程存储
- **Jobs（任务）** — 查看和管理同步/复制任务
- **Remotes（远程）** — 管理远程连接
- **Settings（设置）** — 配置 RcloneView 选项

当你想从同一网络中的其他设备管理传输任务，或单纯偏好基于浏览器的工作方式时，这项功能非常实用。

---

## 前提条件

- RcloneView 已安装并运行（桌面版）
- 现代网页浏览器（Chrome、Firefox、Safari、Edge 等）
- 如需远程访问：设备需处于同一本地网络中

---

## 步骤 1：打开 Web 服务器设置

1. 启动 **RcloneView**。
2. 进入 **Settings（设置）** > **Network & Misc（网络与其他）**。
3. 找到 **Web Server（Web 服务器）** 部分（标记为 **Beta**）。

<img src="/support/images/en/tutorials/web-frontend/web-server-settings.png" alt="Web Server settings in RcloneView" class="img-large img-center" />

---

## 步骤 2：配置 Web 服务器

在 **Web Server（Web 服务器）** 部分，配置以下内容：

- **Port（端口）**：Web 服务器使用的端口号（默认：`8580`）。如果默认端口与其他服务冲突，请更改此项。
- **Username（用户名）**：设置用于身份验证的用户名（例如 `admin`）。
- **Password（密码）**：设置用于保护 Web 前端访问权限的密码。

---

## 步骤 3：启用 Web 服务器

1. 将 **Enable Web Server（启用 Web 服务器）** 切换为 **On（开启）**。
2. 状态会从 **Stopped（已停止）** 变为 **Running on port 8580（正在端口 8580 运行）**（或你配置的端口）。
3. 此时会出现 **Restart Server（重启服务器）** 按钮，可在更改任何设置后使用。

<img src="/support/images/en/tutorials/web-frontend/web-server-running.png" alt="Web Server running on port 8580" class="img-large img-center" />

---

## 步骤 4：访问 Web 前端

1. 在同一台设备上打开网页浏览器。
2. 导航到 `http://localhost:8580`（或你配置的端口）。
3. 出现 RcloneView 登录界面。输入你在步骤 2 中配置的 **Username（用户名）** 和 **Password（密码）**，然后点击 **Sign In（登录）**。

<img src="/support/images/en/tutorials/web-frontend/web-frontend-login.png" alt="RcloneView Web Frontend login screen" class="img-large img-center" />

4. RcloneView Web 前端随即加载完整界面——Explorer、Jobs、Remotes 和 Settings 均可从左侧边栏访问。

<img src="/support/images/en/tutorials/web-frontend/web-frontend-explorer.png" alt="RcloneView Web Frontend Explorer" class="img-large img-center" />

---

## 步骤 5：允许远程访问（可选）

默认情况下，Web 服务器仅接受来自 **localhost (127.0.0.1)** 的连接。若要从网络中的其他设备访问 RcloneView：

1. 将 **Allow remote access（允许远程访问）** 切换为 **On（开启）**。
2. 点击 **Restart Server（重启服务器）** 以应用更改。
3. 在另一台设备上打开浏览器，导航到 `http://<your-computer-ip>:8580`。

> **安全提示：** 启用远程访问后，网络中的任何设备都可以访问 Web 前端。请务必使用强用户名和密码来保护访问权限。

---

## 总结

RcloneView Web 前端让你可以通过浏览器访问所有核心功能：

- 从 **Settings > Network & Misc（设置 > 网络与其他）** 启用 Web 服务器
- 设置端口、用户名和密码以确保访问安全
- 通过 `http://localhost:8580` 访问完整界面
- 可选择为网络中的其他设备启用远程访问

让 RcloneView 在后台持续运行，即可从任意浏览器管理你的云存储。

