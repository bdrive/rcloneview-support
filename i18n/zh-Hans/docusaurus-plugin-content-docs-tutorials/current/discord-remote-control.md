---
sidebar_position: 11
description: 在 RcloneView 中使用 Discord 远程控制来接收任务通知,并从 Discord 远程列出、启动、停止任务及查看任务状态。
keywords:
  - rcloneview
  - discord 远程控制
  - discord 机器人
  - 任务通知
  - 远程任务控制
  - rclone 任务管理器
tags:
  - RcloneView
  - Tutorial
  - Discord
  - Remote-Control
  - Job-Management
date: 2026-01-20
author: steve
---

# RcloneView Discord 远程控制

Discord 远程控制让你可以接收 RcloneView 任务通知,并直接从 Discord 控制任务——无需守在电脑前。

本教程包含以下内容:

- 创建 Discord 应用和机器人
- 将安装上下文设置为 **Guild Install(服务器安装)**
- 获取所需的 ID(Bot Token、Application ID、Discord 用户 ID)
- 在 RcloneView 中启用 Discord 远程控制
- 使用 Discord 命令列出/启动/停止任务并查看状态

---

## 什么是 Discord 远程控制?

Discord 远程控制是 RcloneView 内置的功能,可让你:

- 接收任务开始、完成和出错的实时通知
- 列出已注册的任务
- 远程启动任务
- 停止正在运行的任务
- 按需查看任务进度和状态

只要 RcloneView 在运行,你就可以通过 Discord 客户端管理云任务。

---

## 前提条件

- 已安装并运行 RcloneView(桌面版或无头版)
- 一个 Discord 账户
- 在服务器中创建和安装 Discord 机器人的权限(Guild Install)
- 互联网连接

---

## 第 1 步:创建 Discord 应用和机器人

### 第 1-1 步 打开 Discord 开发者门户

1. 前往 [Discord 开发者门户](https://discord.com/developers/applications)。
2. 点击 **New Application(新建应用)** 并为其命名(例如 `RcloneView`)。
   <img src="/support/images/en/tutorials/discord/discord-new-application.png" class="img-large img-center" />

### 第 1-2 步 将安装上下文设置为 Guild Install

1. 在左侧菜单中打开 **Installation(安装)**。
2. 在 **Installation Contexts(安装上下文)** 下,选择 **Guild Install**。(如果 User Install 已开启,请将其关闭。)
3. 保存更改。
   <img src="/support/images/en/tutorials/discord/discord-installation-context.png" class="img-large img-center" />

### 第 1-3 步 添加机器人并获取 Bot Token

1. 打开 **Bot** 标签页。
2. 点击 **Add Bot(添加机器人)** 并确认。
3. 点击 **Reset Token(重置令牌)**(或 **Copy Token(复制令牌)**)以获取你的 **Discord Bot Token**。请妥善保管,不要泄露。
   <img src="/support/images/en/tutorials/discord/discord-bot-token.png" class="img-large img-center" />

### 第 1-4 步 允许机器人读取消息(推荐)

如果你打算发送文本命令(而不是斜杠命令),请在 Bot 标签页中启用 **MESSAGE CONTENT INTENT**,以便 RcloneView 能够读取你在私信或频道中发送的命令文本。
   <img src="/support/images/en/tutorials/discord/discord-privileged-intent.png" class="img-large img-center" />

---

## 第 2 步:创建服务器并安装机器人

要使用该机器人,你需要一个 Discord 服务器(也称为 "Guild"),让机器人可以驻留其中。如果你还没有用于存放 RcloneView 日志的私人服务器,请按照以下步骤操作。

### 第 2-1 步 创建一个新的 Discord 服务器

1. 打开你的 **Discord 应用**(桌面版或网页版)。
2. 点击左侧服务器列表底部的 **加号(+)图标**(添加服务器)。
3. 选择 **Create My Own(自己创建)**。
4. 选择 **For me and my friends(我和我的朋友)**。
5. 为你的服务器命名(例如 `RcloneView Control Center`)并点击 **Create(创建)**。
   

### 第 2-2 步 将机器人安装到你的服务器

1. 返回 **Discord 开发者门户**。
2. 打开 **OAuth2 > URL Generator(URL 生成器)**。
3. 选择作用域:**bot** 和 **applications.commands**。
4. 在 **Bot Permissions(机器人权限)** 中,选择 **Send Messages(发送消息)**、**Use Slash Commands(使用斜杠命令)** 和 **Attach Files(附加文件)**(如果你想接收日志文件)。
5. 复制页面底部生成的 URL 并粘贴到浏览器中。
6. 选择你刚刚创建的服务器(例如 `RcloneView Control Center`),然后点击 **Authorize(授权)**。

---

## 第 3 步:收集 RcloneView 所需的值

- **Discord Bot Token**:来自 **Bot** 标签页(第 1-3 步)。
- **Discord Application ID**:来自开发者门户中的 **General Information(常规信息)**。
- **My Discord User ID(Snowflake)**:唯一标识你的一长串数字。

### 如何获取你的 Discord 用户 ID

要获取你的 `Discord User ID`,首先需要启用开发者模式:

1. 打开 Discord(桌面版或网页版)。
2. 点击左下角的 **User Settings(用户设置)**(⚙️)。
3. 在 **App Settings(应用设置)** 中,打开 **Advanced(高级)**。
4. 将 **Developer Mode(开发者模式)** 切换为 **On(开启)**。

然后复制你的 ID:

1. 右键点击你的 **头像** 或 **用户名**(位于左下角或聊天/成员列表中)。
2. 点击 **Copy User ID(复制用户 ID)**。
3. 保存这串长数字(示例:`123456789012345678`)。
   <img src="/support/images/en/tutorials/discord/discord-copy-userid.png" class="img-large img-center" />

为什么需要这个 ID?

- 安全性:Flutter 应用只处理来自你账户的命令。
- 直接通知:机器人能准确知道任务开始或失败时应向哪个用户发送私信。

---

## 第 4 步:在 RcloneView 中启用 Discord 远程控制

### 第 4-1 步 打开设置

1. 启动 RcloneView。
2. 前往 **设置(Settings)** -> **接口与通知(Interfaces & Notifications)**。

### 第 4-2 步 输入凭据

1. 开启 **Discord 远程控制** 开关。
2. 输入:
   - **Discord Bot Token**:`...`
   - **Discord Application ID**:来自 **General Information(常规信息)**。
   - **My Discord User ID**:`123456789012345678`

### 第 4-3 步 发送测试消息

点击 **Send Test Message(发送测试消息)**。如果成功,你将在 Discord 中收到机器人发来的私信。
   <img src="/support/images/en/tutorials/discord/discord-test-message-received.png" class="img-large img-center" />

---

## 第 5 步:Discord 命令(任务控制)

向机器人发送命令(为了隐私推荐使用私信,但你也可以在机器人所在且你有权限执行命令的频道中使用)。

### `/help`

显示所有可用命令。

### `/joblist`

列出当前所选连接的任务。

### `/start <jobName>`

按名称启动指定任务。

### `/start #<number>`(推荐)

使用最近一次 `/joblist` 结果中的索引启动任务(示例:`/start #1`)。

### `/stop <JobId>`

停止正在运行的任务。

### `/jobstatus <JobId>`

查看指定任务的实时进度和统计信息。

---

## 自动任务通知

启用后,RcloneView 会自动发送以下通知:

- 任务已开始
- 任务成功完成
- 任务出错失败

---

## 安全提示

- 只有来自已配置的 **Discord 用户 ID** 的命令才会被处理。
- 请妥善保管你的 **Discord Bot Token** 和 **Application ID**,不要泄露。
- 如果需要暂停远程控制,只需在设置中关闭该开关即可。

---

## 总结

Discord 远程控制让你无需守在电脑前也能操作长时间运行的传输任务:

- 从 Discord 远程管理任务
- 通过通知获得实时状态更新
- 通过手机或桌面版 Discord 即时控制

设置一次,即可随时随地管理你的云自动化任务。
