---
sidebar_position: 3
description: "了解如何在本地网络中自动检测 Synology NAS,并通过 WebDAV、SMB 或 SFTP 将其连接到 RcloneView。"
keywords:
  - rcloneview
  - Synology NAS
  - auto detection
  - NAS to cloud transfer
  - SMB
  - WebDAV
  - SFTP
  - Synology integration
  - cloud storage sync
  - cloud backup
  - google drive
  - onedrive
  - drag and drop
  - job scheduler
  - multi-cloud management
tags:
  - RcloneView
  - Tutorial
  - synology
  - NAS
  - auto-detection
  - cloud-file-transfer
  - webdav
  - sftp
  - cloud-migration
  - multi-cloud
  - sync
  - job
  - drag-and-drop
date: 2025-09-11
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 轻松实现 Synology NAS 集成:借助 RcloneView 自动检测、设置与文件传输

使用 **RcloneView**,轻松将您的 Synology NAS 连接到 Google Drive、OneDrive 或 iCloud 等云服务。凭借自动检测功能、对 SMB、WebDAV 和 SFTP 的内置支持,以及无需复杂设置的特性,您可以在友好易用的图形界面中,在 NAS 与云盘之间传输、同步或调度任务。

## **✅ 为什么使用 RcloneView 进行 NAS 到云端的传输?**

如果您将 Synology NAS 用作家庭服务器、办公室备份或媒体存储库,那么您很可能也拥有云存储账户。使用 RcloneView,您无需依赖手动下载文件,也无需学习命令行工具。

相反,您将获得:

- 🚀 在本地网络中自动检测 NAS 设备
    
- 🔄 在 NAS 与云存储之间同步和传输任务
    
- 👨‍💻 基于图形界面设置 WebDAV、SMB、FTP 和 SFTP
    
- 📅 调度从 NAS 到云端的自动备份任务
    
- ✅ 同步前比较文件夹内容
    
- 🧠 无需命令行技能
  

无论您是初学者还是系统管理员,**RcloneView 都能让 NAS 到云端的管理变得简单**。

## **🧰 步骤 1:在本地网络中检测您的 NAS**
  

RcloneView 会自动扫描本地网络中的 Synology NAS 设备。

<img src="/support/images/en/tutorials/synology-nas-auto-detect.png" alt="synology nas auto detect" class="img-medium img-center" />


- 请确保您的 NAS 和电脑处于**同一本地网络**中。
    
- 检测到的 NAS 设备将显示在列表中,包括:
    
    - 设备名称、IP、MAC 地址、DSM 端口
        
    - 打开 **DSM(DiskStation Manager)**的链接


:::info NAS 自动检测在 VLAN 下无法正常工作
如果您使用的是 VLAN(虚拟局域网),RcloneView 可能无法自动检测到您的 Synology NAS。  

这是因为自动发现功能依赖于多播或广播协议,出于安全性和流量隔离的考虑,这类协议在 VLAN 之间通常会被限制或阻止。
:::

  
### 选择连接方式

  从下拉菜单中选择连接方式:

- **WebDAV**(默认且推荐)
- **SMB**
- **FTP**
- **SFTP**

**🔗 需要先在 Synology 上配置这些服务?**

请参阅官方 DSM 设置指南:

- [在 Synology 上设置 WebDAV](https://kb.synology.com/en-global/DSM/help/WebDAVServer/webdav_server)
- [在 Synology 上启用 SMB](https://kb.synology.com/en-global/DSM/help/SMBService/smbservice_smb_settings)
- [在 Synology 上设置 FTP](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_setting) 
- [在 Synology 上设置 SFTP](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_sftp) 

:::important 端口转发与 DDNS 配置

如果您的 NAS 位于路由器之后,或处于 NAT(网络地址转换)环境中,在 DSM 中启用 WebDAV、SMB、FTP 或 SFTP 后,您还必须在路由器上**配置端口转发**。

📘 了解更多:[Synology 端口转发指南](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id5)

此外,若要通过**基于域名而非 IP 地址**的方式在互联网上访问您的 NAS,您可以配置 Synology 的 **DDNS(动态 DNS)**服务。

🌐 了解更多:[Synology DDNS 设置指南](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id3)

:::


## **🔗 步骤 2:将 Synology NAS 添加为远程**

选择您的 NAS 和连接方式后,RcloneView 会自动引导您完成 **`+ New Remote`** 向导:

- **提供商(Provider)**会根据您选择的连接方式(如 WebDAV、SMB、SFTP)自动选定。
- **远程名称**会自动填写(例如 `Synology-28`)——但您可以根据需要进行修改。
- **URL 与端口**:  
  - 对于 **WebDAV**,请输入完整的 URL(例如 `https://abc.synology.me:5006`)  
  - 对于 **SMB / FTP / SFTP**,请输入**主机地址**(例如 `192.168.1.100`)及相应的**端口**:
    - SMB 使用 `445`  
    - FTP 使用 `21`  
    - SFTP 使用 `22`
- **用户名与密码**:输入您用于访问共享文件夹的 NAS 账户凭据。

<div class="img-grid-3">
<img src="/support/images/en/tutorials/add-synology-webdav-remote.png" alt="add synology webdav remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-smb-remote.png" alt="add synology smb remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-sftp-remote.png" alt="add synology sftp remote" class="img-medium img-center" />
</div>

📌 **需要针对每种方式获得更多帮助?**  
以下是详细的设置指南:

- 👉 [如何添加 SFTP 远程](/howto/remote-storage-connection-settings/sftp)
- 👉 [如何添加 WebDAV 远程](/howto/remote-storage-connection-settings/webdav)



✅ 添加完成后,您的 NAS 远程会出现在远程列表中。  
随后您可以在**资源管理器(Explorer)**面板中打开它,浏览文件或开始传输。

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## **💽 步骤 2.5:将 NAS 挂载为本地驱动器(资源管理器/Finder)**

将任意 NAS 文件夹挂载为 Windows 上的本地驱动器(例如 `W:`),或挂载为 macOS Finder 中的一个位置。使用资源管理器工具栏中的挂载按钮即可完成。

### 如何挂载

1. 在 RcloneView 的**浏览/资源管理器(Browse/Explorer)**中,打开您的 NAS 远程,并导航到要挂载的文件夹。
2. 点击顶部工具栏中的**挂载(<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />)**图标。
3. 配置选项:
   - Windows:选择驱动器号(自动或手动选择)
   - macOS:确认挂载文件夹名称(默认类似 `~/homefolder/<Remote name>`),
4. 点击**保存并挂载**。该文件夹将显示为本地磁盘:
   - Windows:显示在"此电脑"下,例如 `synology-28-webdav … (W:)`
   - macOS:显示在 Finder 的"位置"下

<img src="/support/images/en/tutorials/mount-synology-nas-as-local-drive.png" alt="mount synology nas as local drive" class="img-medium img-center" />
                
:::tip 卸载
若要卸载,请在 RcloneView 中点击**卸载(Unmount)**,或从操作系统中弹出该驱动器。
:::

:::note 前置条件
通过 `rclone mount` 挂载可能需要操作系统的文件系统驱动。如未安装,请参考以下链接:
- Windows:[WinFsp](https://winfsp.dev/)
- macOS:[macFUSE](https://osxfuse.github.io/)

为提升性能,RcloneView 会在高强度操作期间启用 **VFS 缓存**。根据网络状况不同,初始元数据加载可能需要一些时间。
:::

有关完整详情及其他方法,请参阅:

- [方法 1:从远程资源管理器挂载](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- [方法 2:通过挂载管理器挂载](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)
- [查看和管理已挂载的驱动器](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)
- [从系统托盘快速挂载](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)

## **🚚 步骤 3:传输或同步文件**

  
一旦您的 NAS 作为远程连接完成,RcloneView 便提供 **4 种强大的方式**,用于在其与云存储之间管理文件。

  
### **🖱️ 方法 1:拖放**

1. 打开**浏览(Browse)**选项卡。
    
2. 在一个窗格中加载您的 **NAS** 远程,在另一个窗格中加载您的云端远程(例如 Google Drive)。
    
3. 只需从一个窗格拖动文件并放到另一个窗格中。
    
4. 传输会立即开始。您可以在**传输日志(Transfer Logs)**选项卡中监控进度。
    
<img src="/support/images/en/tutorials/synology-nas-to-google-drag-and-drop.png" alt="synology nas to google drag and drop" class="img-medium img-center" />

  👉 了解更多:[浏览远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)


### **🔍 方法 2:比较文件夹内容**

1. 在资源管理器窗格中打开 NAS 文件夹和云端文件夹。
    
2. 点击顶部菜单**主页(Home)**选项卡中的**比较(Compare)**。
    
3. RcloneView 将高亮显示:
    
    - 仅存在于一侧的文件
        
    - 大小或校验和存在冲突的文件
        
    - 完全相同的文件
        
    
4. 使用**复制 →**、**← 复制**或**删除**对文件执行操作。
    
<img src="/support/images/en/tutorials/compare-synology-nas-and-google-drive.png" alt="compare synology nas and google drive" class="img-medium img-center" />

  👉 了解更多:[比较文件夹](/howto/rcloneview-basic/compare-folder-contents)


### **🔁 方法 3:同步或一次性任务**

1. 选择源(NAS)和目标(云端)。
    
2. 点击**同步(Sync)**打开同步选项。
    
3. 选择方向、模拟运行(dry-run)、筛选条件等。
    
4. 立即运行同步,或点击**保存到任务(Save to Jobs)**。
    

  <img src="/support/images/en/tutorials/sync-job-synology-to-google-drive.png" alt="sync job synology to google drive" class="img-medium img-center" />
  

👉 了解更多:

- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
    
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
    


### **⏰ 方法 4:调度周期性任务**

1. 进入**任务管理器(Job Manager)** → 点击**添加任务(Add Job)**。
    
2. 选择您的 NAS 和云端文件夹。
    
3. 定义调度计划(每日、每周、cron)。
    
4. 保存并启用该任务。
    

  ✅ 任务将在预定时间于后台自动运行。
 

👉 了解更多:[任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)



## **🧾 总结**

  

借助 RcloneView 的 Synology NAS 集成,您可以:

- 无需任何技术设置即可检测并连接 NAS
    
- 轻松使用 SMB、SFTP、FTP 或 WebDAV
    
- 将备份任务传输、同步或调度到任意云端
    
  
无需命令行,无需脚本。只需快速、强大且灵活的云文件管理。

  
## **🔗 相关指南**

- [如何添加 SFTP 远程](/howto/remote-storage-connection-settings/sftp)
- [如何添加 WebDAV 远程](/howto/remote-storage-connection-settings/webdav)
- [比较文件夹内容](/howto/rcloneview-basic/compare-folder-contents)
- [浏览与管理远程存储](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [同步远程存储](/howto/rcloneview-basic/synchronize-remote-storages)
- [创建同步任务](/howto/rcloneview-basic/create-sync-jobs)
- [执行与管理任务](/howto/rcloneview-basic/execute-manage-job)
- [任务调度与执行](/howto/rcloneview-advanced/job-scheduling-and-execution)

🧠 **立即使用 RcloneView 开始将您的 NAS 连接到云端。**

<CloudSupportGrid />
