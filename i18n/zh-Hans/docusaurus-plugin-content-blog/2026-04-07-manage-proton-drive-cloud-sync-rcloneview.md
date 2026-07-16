---
slug: manage-proton-drive-cloud-sync-rcloneview
title: "使用 RcloneView 管理 Proton Drive 文件与云同步"
authors:
  - tayson
description: "在 RcloneView 中设置 Proton Drive，浏览加密文件、与其他云同步、安排隐私优先的备份，并以可视化方式管理你的存储。"
keywords:
  - rcloneview
  - proton drive
  - proton drive sync
  - encrypted cloud storage
  - proton drive backup
  - privacy cloud storage
  - proton drive rclone
  - cloud sync encrypted
  - proton drive google drive
  - multi-cloud privacy
tags:
  - RcloneView
  - proton-drive
  - cloud-storage
  - cloud-sync
  - guide
  - privacy
  - encryption
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 管理 Proton Drive 文件与云同步

> Proton Drive 以端到端加密将隐私放在首位——但要在多个云之间管理加密文件，需要合适的工具。**RcloneView** 为你提供了一个可视化界面，可以浏览、同步、备份并整理你的 Proton Drive 文件，同时管理任何其他云存储提供商。

Proton Drive 是 Proton 提供的加密云存储服务，Proton 也是 ProtonMail 背后的瑞士公司。上传到 Proton Drive 的每个文件在离开你的设备之前都会经过端到端加密，这意味着即使是 Proton 也无法读取你的数据。对于注重隐私的用户、记者、法律专业人士以及任何重视数据主权的人来说，Proton Drive 是越来越受欢迎的选择。

代价是 Proton Drive 与更广泛的云生态系统运作得相对独立。如果你还依赖 Google Drive 进行协作、Amazon S3 进行归档，或 OneDrive 用于工作，在这些服务与 Proton Drive 之间移动数据可能会很繁琐。RcloneView 通过一个直观的双面板 GUI，让你在管理 Proton Drive 的同时，也能管理 70 多个其他云存储提供商——而不必牺牲加密安全性。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么要将 RcloneView 与 Proton Drive 搭配使用

Proton Drive 的网页版和桌面应用能够很好地处理基本的文件管理,但不支持跨云操作。使用 RcloneView,你可以解锁 Proton 原生工具无法提供的功能:

- **浏览 Proton Drive 存储**——在熟悉的双面板文件管理器中导航文件夹、查看文件大小,并以可视化方式管理你的加密文件库。
- **将 Proton Drive 与 Google Drive、OneDrive 或 S3 同步**——在协作工具中保留工作副本,同时保留一份隐私优先的主副本。
- **安排自动备份**——将其他云中的数据备份到 Proton Drive,利用其加密特性作为安全的备份目的地。
- **比较文件夹内容**——检测 Proton Drive 与任何其他云之间的差异、缺失文件或过时副本。
- **添加第二层加密**——在 Proton Drive 内置端到端加密之上,使用 rclone 的 crypt 远程实现更高级别的安全。
- **避免供应商锁定**——在多个提供商之间保留关键数据的副本。

## 设置 Proton Drive 远程

将 Proton Drive 连接到 RcloneView 只需几个步骤:

1. 打开 RcloneView 并点击 **+ New Remote**。
2. 从提供商列表中选择 **Proton Drive**。
3. 输入你的 Proton 账户凭据。如果你启用了双因素身份验证(2FA),系统还会提示你输入 TOTP 验证码。
4. 为远程命名(例如 `MyProtonDrive`)并保存。

连接完成后,你的 Proton Drive 存储会出现在 Explorer 面板中,随时可供浏览。所有文件在 Proton 的服务器上仍保持端到端加密——RcloneView 会在传输过程中使用你的本地凭据实时解密。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

**关于身份验证的说明:** Proton Drive 不像 Google Drive 或 OneDrive 那样使用 OAuth。相反,你需要直接使用 Proton 用户名和密码进行身份验证。请确保你的 Proton 账户密码足够强,并考虑在 Proton 账户设置中启用 2FA 以获得更高的安全性。

## 浏览和管理加密文件

RcloneView 会在双面板 Explorer 中显示你的 Proton Drive 文件,就像其他任何云一样。你将看到文件夹结构、文件名、大小和修改日期——尽管底层存在加密,这些信息依然清晰呈现。

在 Explorer 中,你可以:

- **导航**你整个 Proton Drive 文件夹层级结构。
- **创建新文件夹**,在上传敏感数据之前先整理好文件。
- **删除**不再需要的文件。
- 在对面的面板中**打开第二个云**,以便直接比较或传输文件。
- **预览文件元数据**,包括大小和时间戳,便于快速审计。

整个体验与管理任何未加密的云完全一致——Proton 端到端加密的复杂性在后台被透明地处理掉了。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 将 Proton Drive 与其他云同步

在 RcloneView 中,Proton Drive 最强大的用例是使其与你的其他云服务保持同步。

### 将 Proton Drive 用作安全镜像

如果你的团队在 Google Drive 或 OneDrive 上协作,你可以设置从这些服务到 Proton Drive 的单向同步。这样会为所有共享工作文件创建一份加密备份副本,受到 Proton 零访问加密的保护。即使你的 Google 或 Microsoft 账户被攻破,Proton Drive 中的副本依然是安全的。

### 将 Proton Drive 同步到 S3 以实现灾难恢复

对于需要地理冗余的组织,可以将 Proton Drive 的数据同步到 Amazon S3 存储桶,或 Wasabi 等 S3 兼容服务。这样你就能在不同的基础设施中获得第二份异地副本,将 Proton 的隐私保护与 S3 的持久性结合起来。

### 如何传输文件

RcloneView 根据你的需求提供了多种传输方式:

- **拖放**:在 Proton Drive 面板中选择文件,并将其拖到对面面板中的任何其他云上。这非常适合一次性传输或小批量传输。
- **比较并复制**:运行文件夹比较,找出 Proton Drive 与目标之间的差异,然后仅复制缺失或已更改的内容。
- **同步**:镜像整个文件夹结构。在提交更改之前,请务必先运行**试运行(Dry Run)**以预览将要发生的更改。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## 安排隐私优先的备份

Proton Drive 的加密特性使其成为存放敏感数据的理想备份目的地。你可以在 RcloneView 中将这一过程自动化:

1. 从你的源云(或本地驱动器)到 Proton Drive 远程创建一个**复制**或**同步**任务。
2. 打开**任务调度**面板。
3. 设置一个循环计划——活跃项目可设为每日,归档数据可设为每周。
4. 保存并启用该计划。

RcloneView 会在设定的时间自动运行该任务,并在**任务历史**面板中记录每次执行情况。你可以随时查看传输数量、错误信息和耗时,以确保你的加密备份保持最新。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

这种方式对于处理客户数据、医疗记录、法律文件或财务信息的专业人士尤其有价值。数据在瑞士的 Proton 服务器上静态加密,受瑞士隐私法保护,你的备份任务无需人工干预即可自动运行。

## 添加第二层加密

Proton Drive 已经对你的文件进行了端到端加密,但部分用户希望获得额外一层保护。RcloneView 支持 rclone 的 **crypt 远程**,可以在任何存储后端之上添加客户端加密。

设置步骤如下:

1. 按照上文所述添加你的 Proton Drive 远程。
2. 在 RcloneView 中创建一个新的 **Crypt** 远程,指向你 Proton Drive 远程中的某个文件夹。
3. 配置你的加密密码和盐值。
4. 对所有敏感传输使用该 crypt 远程。

采用这种配置后,你的文件会先由 rclone 加密,然后再发送到 Proton Drive,在那里再次被 Proton 加密。即使在 Proton 加密被攻破的假设情形下,你的数据仍会受到 crypt 层的保护。

## Proton Drive 性能优化建议

与未加密的提供商相比,Proton Drive 的加密会带来额外的处理开销。以下是一些优化体验的建议:

- **首次设置时从小规模同步开始**。确认一切工作正常后,再扩展到更大的目录。
- **使用增量同步而非完整重新同步**。首次传输完成后,后续运行只会处理新增和已更改的文件,速度会快得多。
- **如果在工作时间运行备份,请设置合理的带宽限制**。RcloneView 允许你配置传输速度上限,以避免占满你的网络连接。
- **在实时监控面板中跟踪传输进度**,查看上传和下载速度、文件数量以及预计完成时间。
- **对大型初始迁移要有耐心**——加密并上传数 TB 的数据无论你的网速如何都需要时间。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## RcloneView 与 Proton Drive 的使用场景

### 记者与举报人

将源材料和敏感文件存储在 Proton Drive 上,并从本地工作目录同步过来。端到端加密确保即使 Proton 收到传票,也无法泄露文件内容。

### 法律与医疗专业人士

将客户文件和患者记录备份到 Proton Drive 这一托管在瑞士的加密存储中。安排每晚从主云进行备份,以维持一份合规的异地副本。

### 个人隐私

将个人照片、财务文件和身份记录保存在 Proton Drive 这一安全保险库中,同时使用 Google Drive 或 OneDrive 处理日常事务。RcloneView 让两者之间的衔接变得无缝。

### 多云冗余

将 Proton Drive 与另外两三个提供商结合起来,构建具有弹性的存储策略。如果某个提供商出现故障或政策变化,你的数据在别处依然安全。

## 开始使用

1. **下载 RcloneView**——访问 [rcloneview.com](https://rcloneview.com/src/download.html)。
2. **连接 Proton Drive**——在“新建远程”向导中使用你的 Proton 账户凭据。
3. **添加你的其他云**——Google Drive、S3、OneDrive,或 70 多个受支持提供商中的任意一个。
4. **浏览、同步并安排计划**——以可视化方式管理隐私优先的存储。

Proton Drive 通过端到端加密保护你的数据。RcloneView 则为你提供了将其与其他一切一并管理的工具。

---

**相关指南:**

- [添加远程存储(以 Google Drive 为例)](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [任务调度与执行](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
