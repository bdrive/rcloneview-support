---
slug: combine-remote-merge-cloud-folders-rcloneview
title: "Combine 远程 — 在 RcloneView 中将多个云文件夹合并为一棵目录树"
authors:
  - alex
description: "使用 RcloneView 的 Combine 远程,将不同云存储提供商的文件夹合并为一个虚拟文件夹树。"
keywords:
  - combine remote rclone
  - merge cloud folders
  - virtual remote RcloneView
  - unify multiple cloud storage
  - rclone combine backend
  - multi-cloud folder structure
  - virtual file tree cloud
  - RcloneView virtual remotes
  - organize cloud storage folders
  - cross-provider folder merge
tags:
  - feature
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Combine 远程 — 在 RcloneView 中将多个云文件夹合并为一棵目录树

> 不用再在五个远程标签页之间来回切换 —— RcloneView 的 Combine 远程可以将不同云存储提供商的文件夹拼接成一棵虚拟文件夹树。

想象一家视频制作工作室,原始素材存放在 Google Drive,项目文件存放在 Dropbox,成片渲染结果存放在 Backblaze B2。每个远程单独使用都没问题,但每次要找"Project X 的母版剪辑在哪"时,都得逐一查看三个标签页。RcloneView 的 Combine 远程 —— 作为 rclone 虚拟远程封装器之一 —— 通过将多个上游文件夹以命名子目录的形式呈现在同一个虚拟远程中,解决了这个问题,让整个项目都归于同一个根目录之下,而无需实际移动任何文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Combine 远程究竟做了什么

Combine 与 Union 不同:Union 将多个来源合并为一个统一视图,文件看起来像是共享同一个目录。而 Combine 则是将每个上游远程(或其中的特定子文件夹)分配到合并后虚拟目录树中的一个命名子目录 —— 因此 `footage:` 和 `renders:` 会在同一个远程下显示为 `production/footage` 和 `production/renders`,彼此完全独立,却可以一起浏览。没有任何文件被复制或重复存储;RcloneView 会实时将读写操作直接路由到原始远程。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Combine virtual remote in RcloneView" class="img-large img-center" />

## 在 RcloneView 中设置 Combine 远程

在"远程"标签页中打开远程管理器,创建一个类型为 Combine 的新远程。将每个上游远程(或 remote:path)映射到你希望它在合并树中呈现的子目录名称,然后保存。结果会像其他任何远程一样出现在浏览器面板中 —— 展开它,每个映射的来源都会显示为独立的顶层文件夹,支持你在原生远程上使用的同样的复制、移动和拖放操作。RcloneView 可在一个窗口中挂载和同步 90 多个提供商,支持 Windows、macOS 和 Linux,因此由 Google Drive、Dropbox 和 B2 文件夹构建的 Combine 远程,无论在哪种操作系统上运行,表现都完全一致。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing a Combine remote's merged folder structure" class="img-large img-center" />

## 实际使用场景

除了媒体制作行业,Combine 远程也适合那些云账户是逐渐积累起来的用户 —— 比如一家摄影工作室,RAW 文件分散在一个旧的 Dropbox 套餐和一个较新的 S3 存储桶中;或者一个小团队,合同存放在 SharePoint,发票却在 Google Drive 中。将两者都封装到同一个 Combine 远程下,意味着一个文件夹比较或同步任务就可以针对整个逻辑结构运行,而不用为每个提供商单独运行任务,任务历史记录也会显示为一条统一的记录,而不是几条互不相关的日志。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job against a Combine remote" class="img-large img-center" />

## Combine 与其他虚拟远程的比较

选错封装器是很容易发生的事。Alias 只是给一个层级很深的路径起一个简短的名字 —— 不涉及合并。Union 会将多个来源混合成看起来像一个共享文件夹的东西,适合用来汇集免费存储空间。Crypt 则是在现有远程之上对文件和文件夹名称进行加密。而 Combine 正是当你希望不同来源保持独立、但又能从同一个根目录中浏览时应该选择的方案。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Combine remote from Mount Manager" class="img-large img-center" />

## 开始使用

1. 如果还没有安装,请从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 如果尚未配置,请添加你想要合并的各个远程(远程标签页 > 新建远程)。
3. 在远程管理器中创建一个新的 Combine 远程,将每个上游来源映射到一个子目录名称。
4. 在浏览器面板中浏览合并后的目录树,并对其运行你的第一个比较或同步任务。

一旦你分散的云账户都归入同一个 Combine 远程之下,文件夹结构就不再是你每次查找文件时都要付出的代价。

---

**相关指南:**

- [Union 远程 — 在 RcloneView 中跨提供商合并免费存储空间](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)
- [虚拟远程 — Combine、Union 与 Alias 详解](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias 远程 — RcloneView 中的快捷路径](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
