---
sidebar_position: 11
description: "了解如何在 EC2 上使用外部 Rclone 守护进程，通过 RcloneView 全程管理，以高速方式将大文件从 AWS S3 传输到 Cloudflare R2。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - cloudflare r2
  - cloudflare s3 api
  - cloudflare r2 rclone
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
  - aws-ec2
date: 2025-07-13
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 通过 EC2 上的外部 Rclone 实现 AWS S3 与 Cloudflare R2 之间的高性能文件传输

现代团队常常需要同时管理多个对象存储平台，很快就会发现，当大型数据集需要经过本地桌面时，带宽、延迟和出站流量费用会成为关键瓶颈。直接在云实例上运行 **Rclone**，再通过 **RcloneView** 进行控制，可以将繁重的流量推送到云端的高速骨干网络中，让你的笔记本电脑完全脱离数据传输路径。

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" alt="transfer files between aws s3 and cloudflare r2 with external rclone" class="img-medium img-center" />

下面的教程参考了“通过 EC2 同步 AWS S3 与 Google Drive”指南的结构，并将其扩展到 S3 ↔ R2 场景。你将完成以下步骤：

1. 在 AWS EC2 服务器上启动 Rclone 作为远程控制守护进程（**rcd**）。
2. 打开一个独立的 RcloneView 窗口，并连接到该外部 Rclone。
3. 在 EC2 托管的 Rclone 中添加 AWS S3 和 Cloudflare R2 远程。
4. 完全在云端之间执行传输、同步或调度任务，不受本地带宽限制。

:::danger AWS 数据传输费用
同一可用区内的区域内流量是免费的，但跨可用区和互联网出站流量会产生费用（通常为 $0.02/GB 用于跨可用区传输，$0.09/GB 用于互联网出站）。
参见：[AWS 定价 – 数据传输](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
:::

## **为什么要使用外部 Rclone？**

| 本地内置 Rclone                                                                  | EC2 上的外部 Rclone                                                                    |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| 流量路径：**S3 → 本地 PC → R2** —— 双跳传输，且受限于家庭上传带宽。 | 流量路径：**S3 → EC2 → R2** —— 云端骨干网络中的单跳传输，通常可达 10-25 Gbit/s。 |
| 家庭 ISP 带宽上限或不对称带宽会拖慢大规模迁移速度。                         | 吞吐量大幅提升，不受本地带宽限制。                                                  |
| 本地 CPU 和内存需要对每个字节进行哈希计算。                                                | 将 CPU 负载卸载到云虚拟机；可按需选择更大的实例规格。                |
| 可能存在 NAT/防火墙问题。                                                    | 拥有公网 IP 并开放 5572 端口（或通过 SSH 隧道）。                                          |

## 第 1 部分：在 EC2 上部署 Rclone（外部 Rclone）

1. **启动一个 Ubuntu EC2 实例**（多线程上传建议使用 t3.medium 或更大规格）。
2. 在安全组中**开放 TCP 5572 端口**（或使用 SSH 隧道）。
3. **安装 Rclone**：
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. **运行 rcd 守护进程**并启用基本身份验证：
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
    `--rc-addr` 参数会开放 HTTP 端点，供 RcloneView 调用。
    
5. 从你的笔记本电脑进行**健康检查**：
```bash
   curl -u admin:admin -X POST "http://<EC2-IP or DNS-NAME>:5572/rc/noop"
```
    返回 JSON `{}` 响应即表示守护进程正在正常监听。

👉 了解更多：[如何在 AWS EC2 服务器上运行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

## 第 2 部分：打开新的 RcloneView 窗口

为了保持连接的有序管理，RcloneView 允许每个窗口使用各自独立的 Rclone 引擎运行。

1. 启动 **RcloneView**  
2. 在 `Home` 菜单中点击 **`New Window`** 按钮。 
3. 系统将打开一个新的应用程序窗口。该实例独立于主窗口运行，并维护自己的连接上下文。  

  📌 _你将在下一步中把该窗口连接到你的外部 Rclone（EC2）。_  

👉 了解更多：[使用“新建窗口”实现多个 Rclone 连接](/howto/rcloneview-advanced/multi-window)。

## 第 3 部分：连接到 EC2 托管的 Rclone

在**新打开的窗口**中，按以下步骤连接到你 EC2 上托管的外部 Rclone：

1. 在新窗口中，打开 **Settings → Connection Manager**。
2. 点击 **New Connection** 并填写以下表单：

| 字段          | 值                              |
| -------------- | ---------------------------------- |
| Display Name   | `ec2-rclone`                       |
| Remote Address | `http://<EC2-IP or DNS-NAME>:5572` |
| Username       | `admin`                            |
| Password       | `admin`                            |

4. 点击 **`Test Connection`** 验证配置。  
   你应该会看到连接成功的响应。  
5. 测试通过后，点击 **`Save`**，然后点击 **`Connect`**。  
6. 现在你已连接到运行在 EC2 上的**外部 Rclone 实例**，窗口顶部会显示连接状态。   

<div class="img-grid-2"> <img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="Create EC2 connection" class="img-medium img-center" /> <img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="Connected to EC2" class="img-medium img-center" /> </div>

## 第 4 部分：添加 AWS S3 和 Cloudflare R2 远程（通过外部 Rclone）


### ➕ 添加 AWS S3 远程

1. 进入 **`Remote`** 标签页，点击 **`+ New Remote`**。
2. 在 **`Provider`** 标签页中，选择 **Amazon S3**。
3. 在 **`Options`** 标签页中：
   - 将 `provider` 设置为 `AWS`
   - 输入你的 **Access Key ID** 和 **Secret Access Key**
   - 除非需要自定义，否则区域和端点可以保留默认值
4. 点击 **Save** 完成设置。

👉 了解更多：   
- [如何添加 S3 远程](/howto/remote-storage-connection-settings/s3)
- [如何获取 AWS S3 访问凭证](/howto/cloud-storage-setting/aws-account-info)
    
### ➕ 添加 Cloudflare R2 远程

1. 同样，在 `Remote` 标签页中点击 **`+ New Remote`**。
2. 在 **`Provider`** 标签页中，选择 **S3**（是的，再次选择——因为 R2 使用 S3 协议）。
3. 在 **`Options`** 标签页中：
   - 将 `provider` 设置为 `Cloudflare`
   - 输入你的 **Cloudflare R2 Access Key** 和 **Secret Key**
   - 将 `endpoint` 设置为 `https://<accountid>.r2.cloudflarestorage.com`
1. 点击 **Save** 完成 R2 远程的设置。

👉 了解更多：   
- [如何添加 S3 远程](/howto/remote-storage-connection-settings/s3)
- [如何获取 Cloudflare R2 访问凭证](/howto/cloud-storage-setting/cloudflare-r2-credential)
    
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

## 第 5 部分：在 AWS S3 和 Cloudflare R2 之间同步文件

### 🔁 方法 A：使用 Sync 或 Job

1. 在资源管理器面板中，选择要同步的 **Cloudflare R2** 文件夹和 **AWS S3** 文件夹。
2. 点击 `home` 菜单中的 **`Sync`** 按钮。
3. 选择同步选项（单向或双向），预览操作内容，然后确认。
4. RcloneView 将执行同步，并在 **`transfer`** 日志标签页中显示进度。

- 如需重复或定时传输：
  1. 在同步弹窗中点击 **`Save to Jobs`**，或打开 **`Job Manager`** → **`Add Job`**。
  2. 配置源、目标和相关选项。
  3. 保存后手动运行，或设置计划任务。

👉 了解更多：
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行和管理任务](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ 方法 B：调度定期同步任务

1. 在资源管理器面板中，选择你想要保持同步的 **Cloudflare R2** 和 **AWS S3** 文件夹。
2. 从 **`Home`** 或 **`Remote`** 菜单打开 **`Job Manager`**，然后点击 **`Add Job`**。
3. 确认你的源和目标。
4. 使用调度编辑器设置任务运行时间。保存前可预览调度计划。
5. 保存并启用该计划任务。

RcloneView 将在指定时间执行同步。你可以在 **`Job History`** 中查看执行详情和日志，任务完成后还会收到通知。

👉 了解更多：[任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

##  ⚡ 性能调优速查表

| 参数                 | 推荐值                                    | 影响程度 | 原因说明                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--s3-chunk-size`         | `50M`                                                | *****        | 更大的分片可减少 R2 上的 Class-A 操作次数，从而提升速度[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)。   |
| `--s3-upload-concurrency` | `32–64`                                              | ***          | 增加 R2 分片上传的并发线程数。                                                                                                                                               |
| `--transfers`             | `32–64`                                              | *            | 并行对象上传可在 10 Gbit 链路上提升吞吐量[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)。 |
| `--s3-disable-checksum`   | 仅当在外部单独进行 <br />校验和核对时才添加 | ****         | 跳过逐分片哈希计算的瓶颈——使用时需谨慎[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)。        |
## 📈 真实场景调优结果

为了在云到云传输中最大化性能，我们按照以下方式对 **Cloudflare R2 远程**配置进行了微调。

:::caution 仅为实验性结果

RcloneView 是 Rclone 的图形界面前端。此处分享的性能调优建议和基准测试基于参考社区帖子（[如何最大化 Cloudflare R2 的分片上传速度](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)）进行的实验性测试，具体结果可能会因你的云环境、区域、网络状况和使用场景而有所不同。

这些结果**不作任何保证**，仅供参考。
:::

### 🔧 如何更新 R2 远程设置

要更改目标 R2 远程的配置：

1. 在 **Explorer** 面板中，点击 Cloudflare R2 远程旁边的齿轮图标，或前往 **Remote Manager → Edit**。
2. 在 **`Options`** 标签页中，点击 **`Show advanced options`**。
3. 设置以下数值：
   - `chunk_size = 50Mi`
   - `upload_concurrency = 32`
4. 保存更改。

`disable_checksum` 选项同样可能对传输速度产生显著影响。不过在本次测试中，我们保留了其默认值（`false`），以在文件传输过程中保留完整性校验。
<img src="/support/images/en/tutorials/chunk-size-and-upload-concurrency-settings.png" alt="chunk size and upload concurrency settings" class="img-medium img-center" />
### 📉 基线：默认性能表现

使用**默认设置**时：

```text
- chunk_size = 5Mi 
- upload_concurrency = 4. 
```

在通过 **EC2 托管的 Rclone** 将大文件从 **AWS S3** 迁移到 **Cloudflare R2** 时，我们观测到的传输速度约为 **114 MB/s**。
<img src="/support/images/en/tutorials/transfer-speed-with-default-options.png" alt="transfer speed with default options" class="img-medium img-center" />

### 🚀 调优之后：性能提升 4 倍

通过为 Cloudflare R2 远程配置优化后的设置：

```text
- chunk_size = 50Mi 
- upload_concurrency = 32

```

并保持 `disable_checksum = false`，我们实现了约 **440 MB/s** 的传输速度——相比默认设置提升了 **4 倍**。

<img src="/support/images/en/tutorials/high-transfer-speed-with-chunk-size-and-upload-concurrency.png" alt="high transfer speed with chunk size and upload concurrency" class="img-medium img-center" />
## ✅ 总结

云到云的传输不再需要通过你的笔记本电脑龟速进行。通过将繁重的工作卸载到 EC2 上的外部 Rclone 守护进程，你可以获得接近线路速率的迁移速度，避开 AWS 出站流量费用的意外支出，同时在 RcloneView 中保持完全可视化的操作体验。立即开始你的下一次 S3 ↔ R2 迁移，告别本地瓶颈的困扰。

---

## 🔗 相关指南

- **存储设置**
	- [如何添加 S3 兼容远程](/howto/remote-storage-connection-settings/s3)
	- [如何获取 AWS S3 访问凭证](/howto/cloud-storage-setting/aws-account-info)
	- [如何获取 Cloudflare R2 访问凭证](/howto/cloud-storage-setting/cloudflare-r2-credential)
- **EC2 与远程 Rclone**
	- [如何在 AWS EC2 上运行 Rclone](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- **窗口与连接管理**
	- [使用“新建窗口”实现多个 Rclone 连接](/howto/rcloneview-advanced/multi-window)
	- [管理多个 RcloneView 窗口](https://www.perplexity.ai/support/howto/rcloneview-advanced/multi-window) <!-- external duplicate, optional to keep -->
- **同步与任务控制**
	- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
	- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
	- [执行和管理任务](/howto/rcloneview-basic/execute-manage-job)
	- [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)
- **成本考量**
	- [AWS 定价 – 数据传输](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
- **性能优化**
	- [如何最大化 Cloudflare R2 的分片上传速度](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)

<CloudSupportGrid />
