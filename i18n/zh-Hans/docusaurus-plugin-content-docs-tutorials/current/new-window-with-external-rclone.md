---
sidebar_position: 5
description: 了解如何通过连接到运行在 AWS EC2 上的外部 Rclone 实例的 RcloneView，直接在云端同步 Google Drive 和 AWS S3。
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - google drive
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - aws-ec2
  - google-drive
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - cloud-to-cloud
  - aws-s3
date: 2025-06-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 通过 EC2 上的外部 Rclone 同步 AWS S3 和 Google Drive

借助内置的**嵌入式 Rclone**，使用 **RcloneView** 在云存储服务之间（例如 Google Drive ↔ AWS S3）同步数据非常简单。安装 RcloneView 时会自动包含此嵌入式引擎，通常用于管理来自**本地电脑**的文件传输。

然而，使用嵌入式 Rclone 意味着**所有传输流量都要经过你的本地计算机**。这可能会显著拖慢速度——尤其是在同步大型数据集或网络较慢时。

例如，使用嵌入式 Rclone 将文件从 **Google Drive 同步到 AWS S3** 时，需要先将文件下载到本地机器，然后再上传到 S3。这种双重传输不仅增加了延迟，还消耗了本地带宽。

<img src="/support/images/en/tutorials/sync-aws-s3-and-google-drive-via-ec2.png" alt="sync aws s3 and google drive via ec2" class="img-medium img-center" />
在这种情况下，更好的解决方案是**直接在云实例上运行 Rclone**——例如**一台 AWS EC2 服务器**。通过将 RcloneView 连接到运行在 EC2 上的**外部 Rclone**，你可以：

- 避免让流量经过本地电脑  
- 直接在云端执行云到云的传输（Google → EC2 → S3）  
- 利用速度更快的云网络基础设施  

这种架构显著提升了性能，并降低了本地设备的负载。

在本教程中，我们将带你了解如何使用 **RcloneView 的新窗口功能**连接到 **EC2 上的外部 Rclone**，然后完全在云端同步 **Google Drive** 和 **AWS S3** 之间的文件。

:::caution 可能产生 AWS EC2 及网络传输费用

在 EC2 实例上运行 Rclone 可以带来更快的传输速度，但请注意，**AWS 可能会对计算资源使用及向其他服务的出站数据传输收取费用**。

参见：[AWS 定价 – 数据传输](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)

:::
  
本指南将带你完成以下步骤：

1. 在 AWS EC2 实例上启动并配置 **Rclone**  
2. 打开一个新的 RcloneView 窗口  
3. 连接到 EC2 上的**外部 Rclone**  
4. 添加 **Google Drive** 和 **AWS S3** 远程  
5. 以更高的性能直接在两者之间同步文件

---

## 第 1 部分：在 EC2 上部署 Rclone（外部 Rclone）

按照 AWS EC2 指南启动 Ubuntu、开放端口 5572、安装 Rclone，并运行 `rcd` 守护进程  

👉 参见：[如何在 AWS EC2 服务器上运行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
 
**要点**：

- `rclone rcd` 正在以 `--rc-addr=0.0.0.0:5572` 运行  
- 在你的 EC2 安全组中开放端口 `5572`
- 已设置 HTTP 基本认证（`--rc-user`、`--rc-pass`）  
- 使用以下命令运行守护进程：

 ```bash
   rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

- 通过以下方式验证访问：

```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"

```



---

## 第 2 部分：打开一个新的 RcloneView 窗口

为了保持连接的条理性，RcloneView 允许每个窗口使用各自独立的 Rclone 引擎运行。

1. 启动 **RcloneView**
    
2. 在 `Home` 菜单中点击 **`New Window`** 按钮
    
3. 将打开一个新的应用程序窗口。该实例独立于主窗口，并将维护自己的连接上下文。
    

  📌 _你将在下一步中把此窗口连接到你的外部 Rclone（EC2）。_

  
👉 了解更多：[使用新窗口进行多个 Rclone 连接](/howto/rcloneview-advanced/multi-window)

---

## 第 3 部分：连接 EC2 托管的外部 Rclone

在**新打开的窗口**中，按照以下步骤连接到你在 EC2 上托管的外部 Rclone：

1. 从 `Settings` 菜单打开 **`Connection Manager`**。

2. 点击 **`New Connection`** 创建一个新的 Rclone 连接配置文件。

3. 填写必填字段：

    - **Display Name**：`ec2-rclone`（或你喜欢的任意名称）

    - **Remote Address**：`http://<EC2-PUBLIC-IP-or-DNS-NAME>:5572`

    - **Username / Password**：使用你在第 1 部分启动 Rclone 守护进程时设置的值  
      （例如 `--rc-user=admin`、`--rc-pass=admin`）

4. 点击 **`Test Connection`** 以验证设置。  
   你应该会看到连接成功的响应。

5. 如果测试通过，点击 **`Save`**，然后点击 **`Connect`**。

6. 现在你已连接到运行在 **EC2 上的外部 Rclone 实例**，窗口顶部应显示连接状态。

<div class="img-grid-2">
<img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="new connection to ec2 rclone" class="img-medium img-center" />
<img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="connected to ec2 rclone" class="img-medium img-center" />
</div>

👉 了解更多：[添加新的外部 Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)


---

## 第 4 部分：添加 AWS S3 和 Google Drive 远程（通过外部 Rclone）

  
仍在已连接 EC2 的 RcloneView 窗口中：

### ➕ 添加 AWS S3 远程

1. 在 `Remote` 菜单中点击 **`+ New Remote`**
    
2. 在 **Provider** 选项卡中，搜索并选择 S3
    
3. 在 **`Options`** 选项卡中：
    
    - 将 **`Provider`** 设置为 AWS
        
    - 输入你的 AWS **`Access Key ID`** 和 **`Secret Access Key`**
        
    - 设置 **`Region`**，并可选地为兼容 S3 的服务设置 **Endpoint**
        
    
4. 点击 **Save**，并为其命名（例如 ec2-s3）
    
👉 了解更多：[添加 AWS S3 远程](/howto/remote-storage-connection-settings/s3)

### ➕ 添加 Google Drive 远程（使用 OAuth 访问令牌）

你可以按照以下指南中的步骤使用之前获取的 **OAuth 访问令牌**，而无需完成新的基于浏览器的登录流程：

👉 参见：[在没有浏览器的情况下在外部 Rclone 上设置 Google Drive](/howto/remote-storage-connection-settings/ec2-google-drive-connection)

1. 从 `Remote` 菜单进入 **`+ New Remote`**
2. 选择 **Google Drive** 作为提供商
3. 在 **Options** 选项卡中，向下滚动并点击 **Show advanced options**
4. 将之前复制的令牌粘贴到 **`token`** 字段中
5. 为远程命名（例如 `ec2-gdrive`）并保存

  <img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />


---

## 第 5 部分：在 AWS S3 和 Google Drive 之间同步文件

 现在你可以通过你的 EC2 Rclone 实例在 Google Drive 和 S3 之间传输文件了。

  ### **📁 方式 A：按需比较并同步**

1. 进入 **Browse** 选项卡
    
2. 在左侧窗格中加载 **Google Drive 远程**（ec2-gdrive:）
    
3. 在右侧窗格中加载 **AWS S3 远程**（ec2-s3:）
    
4. 点击顶部菜单中的 **Compare**
    
5. 查看差异：
    
    - 仅存在于一侧的文件
        
    - 大小不同的文件
        
    - 完全一致的匹配项
        
    
6. 使用 **Copy →**、**← Copy** 或 **Delete** 进行同步
    

💡 进度会显示在状态栏和传输日志选项卡中。

  👉 了解更多：[比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents)

---

### **🕒 方式 B：设置计划同步任务**

1. 进入 **Home → Job Manager**，然后点击 **Add Job**
    
2. 选择 **Sync**
    
    - Source：ec2-gdrive:folder
        
    - Destination：ec2-s3:folder
        
    
3. 配置：
    
    - 同步方向
        
    - 过滤规则（可选）
        
    
4. （可选）启用**计划任务（Scheduling）**
    
    - 设置时间模式
        
    - 使用内置模拟器预览计划
        
    
5. 点击 **Save & Enable**
    

  设置计划后，RcloneView 将使用你的 EC2 托管 Rclone 后端自动执行同步。

👉 了解更多：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)
- [任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)
  
---

## 最终检查

- 通过**传输日志**或**任务历史**面板确认同步已成功完成
    
- 定期在 EC2 上进行检查，确认其保持连接并响应正常
    

---

## 🔗 相关指南

- [如何在 AWS EC2 服务器上运行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [使用新窗口进行多个 Rclone 连接](/howto/rcloneview-advanced/multi-window)
- [添加新的外部 Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [添加 AWS S3 远程](/howto/remote-storage-connection-settings/s3)
- [比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents)
-  [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)
- [任务计划与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)



<CloudSupportGrid />
