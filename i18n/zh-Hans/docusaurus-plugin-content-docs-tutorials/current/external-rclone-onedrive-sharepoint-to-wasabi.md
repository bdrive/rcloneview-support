---
sidebar_position: 12
description: "通过运行外部 Rclone 守护进程并用 RcloneView 控制它，以高速将文件从 OneDrive 移动到 Wasabi。"
keywords:
  - rcloneview
  - rclone
  - external rclone
  - onedrive
  - wasabi
  - s3 compatible
  - cloud migration
  - cloud sync
  - cloud transfer
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - wasabi
date: 2025-07-15
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 通过外部 Rclone 将 OneDrive 迁移到 Wasabi

当 Microsoft 365 的数据集很大时，通过笔记本电脑传输可能会既慢又不可靠。在云端 VM（EC2、GCE 或任何 Linux 主机）上运行 **Rclone**，并从 **RcloneView** 进行控制，可以将流量保留在数据中心内，避免家庭网络成为瓶颈，并使无浏览器身份验证成为可能。

您将：

1. 在远程服务器上以外部引擎的方式运行 **rclone rcd**。
2. 打开一个新的 **RcloneView 窗口**，连接到该外部 Rclone。
3. 添加 **OneDrive** 和 **Wasabi** 远程（包括无头/仅命令行的身份验证路径）。
4. 从 OneDrive 到 Wasabi 复制、同步或调度作业，而不占用本地带宽。

## 第一部分：在服务器上部署 Rclone（外部 Rclone）

1. 启动一个小型 Linux VM（例如 AWS 上的 `t3.medium` 或同等配置）。  
2. 向您的 IP 开放 TCP **5572** 端口，或通过 SSH 建立隧道。  
3. 安装 Rclone：
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. 启动带身份验证的远程控制守护进程：
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
5. 在您的笔记本电脑上，确认可以访问：
```bash
curl -u admin:admin -X POST "http://<SERVER-IP>:5572/rc/noop"
```
   返回 `{}` 表示守护进程已准备好供 RcloneView 使用。

👉 需要复习一下吗？参见 [在 AWS EC2 上运行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)。

## 第二部分：打开一个新的 RcloneView 窗口

每个 RcloneView 窗口都可以与不同的 Rclone 实例配对。

1. 启动 **RcloneView**。  
2. 从 **Home** 菜单点击 **`New Window`**。  
3. 将打开第二个窗口；此窗口将连接到您刚刚启动的外部 Rclone。

👉 了解更多：[使用 New Window 管理多个 Rclone 连接](/howto/rcloneview-advanced/multi-window)。

## 第三部分：将 RcloneView 连接到外部 Rclone

在新窗口中：

1. 打开 **Settings -> Connection Manager** -> **New Connection**。  
2. 填写：

| 字段            | 值                                  |
| -------------- | ---------------------------------- |
| Display Name   | `external-rclone`                  |
| Remote Address | `http://<SERVER-IP>:5572`          |
| Username       | `admin`                            |
| Password       | `admin`                            |

3. 点击 **Test Connection** -> **Save** -> **Connect**。状态栏应显示已连接到外部守护进程。

## 第四部分：添加 Wasabi 和 OneDrive 远程（在外部 Rclone 内）

您现在创建的所有远程都存在于外部 Rclone 进程中，并由已连接的 RcloneView 窗口共享。

### ➕ 添加 Wasabi（S3 兼容）

1. 转到 **Remote** 选项卡 -> **`+ New Remote`**。  
2. 选择 **S3 / Wasabi**。  
3. 输入您所在区域的 **Access Key**、**Secret Key** 和 **endpoint**（例如 `s3.ap-northeast-2.wasabisys.com`）。  
4. 保存该远程（例如，将其命名为 `wasabi-prod`）。

👉 详情：[如何在 RcloneView 中添加 Wasabi 远程](/tutorials/#2-add-wasabi-as-a-remote-in-rcloneview)。

### ➕ 添加 OneDrive（无需本地浏览器即可完成）

1. 再次点击 **`+ New Remote`** 并选择 **OneDrive**。  
2. 如果服务器有浏览器，请在 RcloneView 中完成标准 OAuth 流程。  
3. 如果服务器是无头的或无法打开浏览器，请按照无头/CLI 方法操作：在有浏览器的设备上生成令牌，然后将其粘贴到服务器端配置中。  

👉 分步无头流程：[从 EC2/无头环境添加 Microsoft 远程](/howto/remote-storage-connection-settings/ec2-onedrive-headless)。
保存后，您应该会在 Explorer 中看到两个远程：**OneDrive** 和 **Wasabi**。

## 第五部分：传输或同步到 Wasabi

### 方法 A：一次性复制/同步

1. 在 Explorer 中，一侧打开 **OneDrive**，另一侧打开 **Wasabi**。  
2. 选择 OneDrive 上的源文件夹和 Wasabi 上的目标存储桶/文件夹。  
3. 点击 **`Sync`**（使目标与源保持一致）或使用 **Copy ->** 进行简单复制。  
4. 可以先运行 **Dry Run**，然后再点击 **Run** 开始。进度会显示在 **Transfer** 选项卡中。

### 方法 B：保存或调度作业

1. 如上所述配置复制/同步，然后在对话框中选择 **Save to Jobs**。  
2. 打开 **Job Manager** 以随时重新运行已保存的作业。  
3. 要实现自动化，请在 Job Manager 中启用 **Schedule**（PLUS 功能），并设置所需的执行频率。  
4. 在 **Job History** 中查看日志和结果。

👉 有关作业和调度的更多信息：  
- [创建同步作业](/howto/rcloneview-basic/create-sync-jobs)  
- [执行和管理作业](/howto/rcloneview-basic/execute-manage-job)  
- [作业调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

## 加快 Wasabi 上传速度的小提示

- 尽可能将外部 VM 保持在与 Wasabi 相同的区域，以降低延迟。  
- 对于大型对象，提高 `--transfers` 和 `--s3-upload-concurrency` 的值可以提升吞吐量；请根据 CPU 和网络情况逐步调整。  
- 在进行破坏性同步之前，使用 **Dry Run** 确认将要发生的更改。

## ✅ 小结

通过将 Rclone 作为远程守护进程托管，并从专用的 RcloneView 窗口进行控制，您可以获得可靠的 OneDrive -> Wasabi 迁移，而不会出现本地瓶颈。无头身份验证流程可在没有浏览器的情况下为您提供保障，而作业/调度功能则让重复运行变得轻而易举。

## 🔗 相关指南

- **身份验证与远程**  
  - [从 EC2/无头环境添加 Microsoft 远程](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)  
  - [如何添加 S3 兼容远程](/howto/remote-storage-connection-settings/s3)  
- **外部 Rclone 与窗口**  
  - [使用 New Window 管理多个 Rclone 连接](/howto/rcloneview-advanced/multi-window)  
  - [在 AWS EC2 上运行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- **传输与自动化**  
  - [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)  
  - [创建同步作业](/howto/rcloneview-basic/create-sync-jobs)  
  - [作业调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
