---
slug: migrate-google-photos-to-onedrive-rcloneview
title: "使用 RcloneView 将 Google 相册迁移到 OneDrive"
authors:
  - tayson
description: "使用 RcloneView 将 Google 相册库迁移到 OneDrive 的分步指南。涵盖只读访问、文件夹结构、元数据处理和整理方式。"
keywords:
  - rcloneview
  - google photos to onedrive
  - google photos migration
  - migrate google photos
  - google photos rclone
  - onedrive photos
  - photo migration
  - cloud photo transfer
  - google photos backup
  - google photos export
tags:
  - RcloneView
  - google-photos
  - onedrive
  - migration
  - cloud-migration
  - guide
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 将 Google 相册迁移到 OneDrive

> 照片库是你拥有的最私密、最不可替代的收藏之一——在云之间迁移它需要格外谨慎。**RcloneView** 提供了一种可视化、分步骤的方式,让你将整个 Google 相册库迁移到 OneDrive,同时不丢失原有的组织结构。

多年来,Google 相册一直是照片存储的默认选择,这得益于它与 Android 及 Google 生态系统的紧密集成。但情况总会变化。也许你正在转向 Microsoft 365,也许你的 Google 存储空间即将用尽,又或者你更喜欢 OneDrive 与 Windows 的紧密集成。无论原因是什么,迁移一个包含成千上万(甚至数万)张照片和视频的照片库,都需要一套可靠的流程。

挑战在于,Google 相册并不是一个简单的文件系统。它按日期、相册和元数据来组织照片,而不是传统的文件夹结构。Rclone 通过将 Google 相册呈现为结构化目录来处理这一点,而 RcloneView 则为你提供了一个可视化界面,用来浏览、选择并将所有内容传输到 OneDrive——并附带监控和验证功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 理解作为远程的 Google 相册

在开始迁移之前,理解 Google 相册在 RcloneView 中作为云远程的运作方式非常重要。

### 只读访问

Google 相册的 API 仅提供**只读访问**权限。这意味着:

- 你可以通过 RcloneView **浏览和下载**所有照片和视频。
- 你**无法通过该 API 删除、重命名或修改** Google 相册上的文件。
- 你**无法通过此远程向** Google 相册**上传**新文件。

这是 Google API 的限制,而非 RcloneView 的限制。就迁移而言,只读访问已经足够——你只是要把数据从 Google 相册中取出,而不是写入其中。

### 文件夹结构

Google 相册通过两种主要目录类型来呈现你的照片库:

- **`media/by-year/`** —— 所有照片按年份组织(例如 `media/by-year/2024/`、`media/by-year/2025/`)。其中包含照片库中的每一张照片,按时间顺序组织。
- **`media/by-month/`** —— 同样的照片按年月组织(例如 `media/by-month/2024/2024-06/`)。
- **`album/`** —— 你手动创建的相册。每个相册都以一个包含其照片的文件夹形式呈现。

出现在相册中的照片,也会同时出现在按日期组织的目录中。这意味着可能会有明显的重复——同一张照片同时列在 `media/by-year/2024/` 和 `album/Vacation/` 下。在迁移过程中,你需要选择一种组织方式,以避免重复复制文件。

## 设置两个远程

### 添加 Google 相册

1. 打开 RcloneView 并点击 **+ 新建远程**。
2. 从提供商列表中选择 **Google Photos**。
3. 按照 OAuth 流程操作——系统会将你重定向到 Google 以授权访问。授予对你照片库的只读权限。
4. 为远程命名(例如 `MyGooglePhotos`)并保存。

### 添加 OneDrive

1. 再次点击 **+ 新建远程**。
2. 从提供商列表中选择 **Microsoft OneDrive**。
3. 按照 OAuth 流程操作,授权访问你的 OneDrive 账户。
4. 选择驱动器类型(个人版、商业版或 SharePoint)。
5. 为远程命名(例如 `MyOneDrive`)并保存。

现在两个远程都会出现在 RcloneView 的资源管理器中。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 规划 OneDrive 上的文件夹结构

在开始传输之前,先决定你希望照片在 OneDrive 上如何组织。你有几种选择:

### 选项一:镜像按年份的结构

将 Google 相册中的 `media/by-year/` 目录复制到 OneDrive 上的 `Photos/` 文件夹。你的 OneDrive 结构将如下所示:

```
Photos/
  2020/
  2021/
  2022/
  2023/
  2024/
  2025/
  2026/
```

这是最简单的方式,也很适合 OneDrive 内置的照片功能,该功能可以以时间线视图显示图片。

### 选项二:使用按月组织

复制 `media/by-month/` 以获得更细粒度的组织方式:

```
Photos/
  2024/
    2024-01/
    2024-02/
    ...
  2025/
    2025-01/
    ...
```

如果你的照片库很大,并希望快速找到某个特定月份的照片,这种方式会很有帮助。

### 选项三:基于相册的组织

如果你已经将 Google 相册细致地整理成了相册,可以复制 `album/` 目录:

```
Photos/Albums/
  Vacation 2024/
  Birthday Party/
  Work Events/
```

请注意,基于相册的迁移可能会遗漏从未被添加到任何相册中的照片。若要完成完整迁移,请将此方式与前述基于日期的方式结合使用。

### 推荐方式

对大多数用户来说,**选项一(按年份组织)是最好的起点**。它能以清晰的时间顺序结构捕获照片库中的每一张照片。如果相册对你很重要,可以再运行一次,仅复制 `album/` 目录到 OneDrive 上的另一个单独文件夹。

## 执行迁移

在设置好两个远程并确定文件夹策略后,即可开始传输。

### 步骤 1:浏览与预览

在一个资源管理器窗格中打开 Google 相册,在另一个窗格中打开 OneDrive。浏览 Google 相册的目录结构,确认你能看到按年、按月和按相册组织的照片。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### 步骤 2:创建目标文件夹

在 OneDrive 窗格中,创建一个 `Photos` 文件夹(或你选择的任何名称),作为迁移目标。

### 步骤 3:先从测试批次开始

在迁移整个照片库之前,先用一年的数据进行测试:

1. 在 Google 相册窗格中,导航到 `media/by-year/2025/`(或任何照片数量适中的近期年份)。
2. 将该文件夹拖拽到 OneDrive 上的 `Photos/` 目录。
3. 监控传输过程,确认照片正确到达。
4. 打开几张已传输的照片,在 OneDrive 上验证它们显示正常且质量保持不变。

### 步骤 4:执行完整迁移

测试成功后,传输剩余的年份:

1. 从 Google 相册的 `media/by-year/` 到 OneDrive 的 `Photos/` 创建一个**复制**任务。
2. 先执行一次**演练(Dry Run)**,查看文件总数和预估传输量。
3. 执行复制任务。

对于大型照片库(10,000 张以上照片),这可能需要数小时。RcloneView 会实时显示进度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

### 步骤 5:迁移相册(可选)

如果你还希望在 OneDrive 上保留相册结构:

1. 从 Google 相册的 `album/` 到 OneDrive 的 `Photos/Albums/` 创建第二个复制任务。
2. 执行复制。请注意,这会为已存在于按年份组织的文件夹中的照片创建重复副本。如果存储空间是一个考虑因素,你可能想跳过此步骤,或仅有选择性地复制某些相册。

## 理解元数据与文件格式

### 会被传输的内容

- **原始分辨率的照片和视频** —— 文件以原始质量传输,而非压缩过的"节省空间"版本。
- **文件名** —— 原始相机文件名会被保留(例如 `IMG_20240615_143022.jpg`)。
- **文件日期** —— 在格式支持的情况下,创建和修改时间戳会被保留。

### 不会被传输的内容

- **Google 相册元数据** —— 存储在 Google 相册数据库中的描述、标签、人脸识别数据和位置信息不会被传输。这些元数据是 Google 平台专有的。
- **在 Google 相册中所做的编辑** —— 如果你在 Google 相册中编辑过某张照片(裁剪、滤镜等),通过该 API 只能获取到未经编辑的原始版本。已编辑的版本无法访问。
- **共享相册的上下文** —— 他人与你共享的照片是否可访问,取决于 Google 的共享设置。

### EXIF 数据

好消息是,大部分重要的元数据都直接嵌入在照片文件的 EXIF 数据中。这包括:

- 拍摄照片的**日期和时间**。
- **相机型号**及拍摄设置(光圈、快门速度、ISO)。
- **GPS 坐标**(如果拍摄时启用了位置信息)。

这些 EXIF 数据会随文件一起传输,并可被 OneDrive、Windows 照片应用以及几乎任何照片管理应用读取。

## 验证迁移结果

传输完成后,请验证一切是否正确到达。

### 文件夹比较

使用 RcloneView 的**比较**功能:

1. 在一个窗格中打开 Google 相册,在另一个窗格中打开 OneDrive。
2. 导航到匹配的目录(例如 `media/by-year/2024/` 和 `Photos/2024/`)。
3. 运行比较,以识别在 Google 相册中存在但在 OneDrive 中缺失的文件。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

### 抽查照片

在 OneDrive 上打开几张已传输的照片,以确认:

- 图片显示正常且未损坏。
- 视频能够正常播放。
- 文件大小符合预期(Google 相册上的一张 5MB JPEG 文件,在 OneDrive 上大小应大致相同)。

### 查看任务历史

检查**任务历史**面板,查看传输过程中是否有任何错误。常见问题包括:

- 由于文件名中包含不受支持的字符而**跳过的文件**。
- 针对超大视频文件的**超时错误**。
- 来自 Google API 的**速率限制**(在照片库非常庞大的情况下偶有发生)。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 顺利迁移的技巧

- **在非高峰时段进行迁移。** 大型照片库的传输可能需要数小时。从夜间开始能让整个过程不受打扰地进行。
- **对超大型照片库使用计划任务。** 如果你有 50,000 张以上的照片,可以创建一个每天运行的计划任务。每次运行都会从上次中断处继续,迁移会在几天内完成,而无需你持续盯着它。
- **暂时不要删除 Google 相册。** 在你完全验证 OneDrive 副本之前,请保留 Google 相册库不变。无论如何,Google 相册通过该 API 也是只读的,所以不存在被 RcloneView 意外删除的风险。
- **检查 OneDrive 存储限额。** 确保你的 OneDrive 套餐有足够空间容纳整个照片库。Microsoft 365 个人版包含 1 TB 空间,家庭版套餐最多可共享 6 TB。
- **考虑 OneDrive 的相机胶卷集成功能。** 迁移完成后,你可以将 OneDrive 移动应用设置为自动上传新照片。这样就能实现从 Google 相册向后续使用的无缝过渡。
- **注意 Google API 的速率限制。** Google 相册 API 有使用配额限制。如果触发速率限制,RcloneView 会自动重试,但传输速度可能会暂时变慢。

## 快速开始

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在新建远程向导中通过 OAuth **连接 Google 相册**(只读访问)。
3. 通过 OAuth **连接 OneDrive**。
4. **浏览、复制并验证**——你的珍贵回忆,安全迁移完成。

你的照片是无可替代的。RcloneView 确保它们安全抵达 OneDrive。

---

**相关指南:**

- [添加 OAuth 在线登录](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [比较文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [执行与管理任务](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
