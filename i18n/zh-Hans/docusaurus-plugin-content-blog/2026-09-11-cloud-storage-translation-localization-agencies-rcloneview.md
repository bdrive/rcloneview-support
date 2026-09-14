---
slug: cloud-storage-translation-localization-agencies-rcloneview
title: "翻译与本地化机构的云存储 — 使用 RcloneView 集中管理多语言文件"
authors:
  - robin
description: "使用 RcloneView,为翻译与本地化机构集中管理 Google Drive、Dropbox、OneDrive 和 Box 中的客户交付文件。"
keywords:
  - 翻译机构云存储
  - 本地化文件管理
  - 多语言文件同步
  - 翻译机构云存储管理
  - 自由译者文件交付
  - RcloneView 本地化
  - 加密客户翻译文件
  - 集中管理客户云账户
  - 语言服务云文件管理
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 翻译与本地化机构的云存储 — 使用 RcloneView 集中管理多语言文件

> 不要再登录五个不同的客户云账户来交付同一个翻译项目 — 在一个窗口中管理全部账户。

翻译与本地化机构面临一种特殊的云存储混乱:每个客户都通过自己的平台交付源文件 —— 一个用 Google Drive,另一个坚持用 Dropbox,还有一个共享 Box 文件夹 —— 而分散在不同时区的自由译者和审校人员则需要可靠地访问每份文档的正确版本。RcloneView 在一个界面中连接所有这些账户,让项目经理不必再在浏览器标签页之间切换,只为了把文件移动到需要的地方。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 一个窗口管理所有客户平台

一家中型本地化机构可能同时在 Google Drive、Dropbox、OneDrive 和 Box 上运行活跃项目,每个客户对应一个平台。借助 RcloneView 的多面板 Explorer,项目经理可以并排打开多个远程账户,在不先下载到本地机器的情况下,在它们之间拖动源文档、翻译记忆库和术语表。在两个不同远程之间拖放会执行直接的云到云复制,因此 500 个文件的字幕批次完全无需经过笔记本电脑的硬盘中转。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between client storage accounts in RcloneView" class="img-large img-center" />

RcloneView 可在 Windows、macOS 和 Linux 上的同一个窗口中挂载并同步 90 多个提供商 —— 当使用不同操作系统的译者都需要相同的面向客户的文件夹结构时,这一点非常有用。

## 交付前核实结果

在多语言交付成果中遗漏一个文件 —— 比如十二个语言对中的一个 —— 是会损害客户信任的那种错误。Folder Compare 让项目经理可以在最终交付前,对机构的工作文件夹和客户的交付文件夹进行直观的并排检查,标记出仅存在于一侧或大小不同的文件。针对 Document 和 Google Docs 文件类型的预定义过滤器,能让比较聚焦于已翻译的内容,而不是临时文件或缓存产物。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare identifying missing files before a translation delivery" class="img-large img-center" />

## 保护机密源材料

法律合同、医疗记录和专利申请经常在严格的保密协议下经过翻译机构处理。Crypt 虚拟远程会对现有云文件夹进行文件名、文件夹名和内容加密封装,因此即使客户的存储账户被攻破,没有加密密码也无法读取机构的工作副本。

## 快速上手

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new client remote via Remote Manager in RcloneView" class="img-large img-center" />

1. **下载 RcloneView**:从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载。
2. 通过 Remote Manager 为每个客户的云平台添加一个远程 —— 大多数只需一次 OAuth 登录即可连接。
3. 设置一个 Sync 作业,将已完成的交付成果从工作远程镜像到客户的交付文件夹,并先启用 Dry Run 预览传输内容。
4. 在每次交付前运行 Folder Compare,抢先客户之前发现缺失的语言文件。

需要照看的账户越少,就有越多时间投入到实际的翻译工作中。

---

**相关指南:**

- [远程团队的云存储 — 使用 RcloneView 的分布式工作流程](https://rcloneview.com/support/blog/cloud-storage-remote-teams-distributed-workflow-rcloneview)
- [多语言界面 — RcloneView 的 9 种语言](https://rcloneview.com/support/blog/multilingual-interface-9-languages-rcloneview)
- [自由职业者与独立承包商的云存储 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-freelancers-independent-contractors-rcloneview)

<CloudSupportGrid />
