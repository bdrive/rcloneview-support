---
slug: folder-compare-with-filter-rcloneview
title: "带过滤器的文件夹比较 — RcloneView 中的精准比较"
authors:
  - alex
description: "使用 RcloneView 的过滤规则从文件夹比较中排除干扰项 —— 在比较前跳过构建产物、缓存和不需要的文件类型。"
keywords:
  - 文件夹比较过滤器
  - 从比较中排除文件
  - RcloneView 过滤规则
  - 文件夹比较排除模式
  - 云文件夹差异过滤器
  - 跳过 .git 文件夹比较
  - 选择性文件夹比较
  - 云备份验证过滤器
tags:
  - RcloneView
  - feature
  - folder-comparison
  - filters
  - compare
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 带过滤器的文件夹比较 — RcloneView 中的精准比较

> 只有当结果不会被你原本就不关心的文件淹没时，完整的文件夹比较才有意义。

在两个大型存储位置之间运行普通的文件夹比较，往往会得到一大堆与你实际需要核实的数据毫无关系的差异 —— 构建缓存、`.git` 文件夹、临时文件，以及那些本就不该被备份的 ISO 文件。RcloneView 的带过滤器的文件夹比较可以让你在比较运行前排除这些类别，使结果只反映真正重要的文件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 为什么过滤比较很重要

对两棵大型目录树进行原始比较时，所有文件都被同等看待，这意味着一个带有庞大 `.git` 历史记录的源代码仓库，或者一个装满 `.iso` 镜像的项目文件夹，可能会掩盖你真正想要发现的差异。将比较范围过滤到相关的文件夹名称和文件类型，可以把嘈杂、难以阅读的结果变成一份聚焦的清单，准确显示你所关心的数据中发生了哪些变化。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView 中过滤后的文件夹比较结果" class="img-large img-center" />

RcloneView 在 FREE 许可证下也提供同步和文件夹比较功能，而过滤比较则作为 PLUS 层级的增强功能叠加在其上，供有此需求的团队使用。

## 设置过滤规则

过滤规则遵循 RcloneView 其他地方使用的相同模式：按扩展名、文件夹路径或精确的文件夹名称排除。像 `.iso` 这样的规则会从比较中排除所有 ISO 文件，无论它们位于何处；`/.git/*` 只排除根级别的 `.git` 文件；`/.git/` 则专门移除根级 `.git` 文件夹；而 `.git/` 会剥离所有 `.git` 文件夹，无论嵌套多深。组合使用多条规则，可以将比较范围精确缩小到值得审查的文件类型和路径。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中为文件夹比较配置过滤规则" class="img-large img-center" />

这是一项 PLUS 许可证功能 —— 未过滤的基础文件夹比较(显示仅左侧、仅右侧、相同和不同的文件)在所有许可证层级均可使用，过滤功能建立在同一比较引擎之上。

## 实际过滤场景

将项目文件夹与云备份进行比较的开发团队，通常会排除 `node_modules/`、`.git/` 以及构建输出目录，因为这些内容可以重新生成，不应影响对备份完整性的判断。归档 RAW 照片库的媒体团队通常会排除边车缓存文件和缩略图预览，使比较聚焦于实际的图像资产。而审计两个云账户之间迁移情况的人员,则可以排除那些本就不该在迁移后留存的临时或暂存文件夹，从而将"仅左侧"和"仅右侧"列表限制为真正需要关注的文件。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在处理差异之前查看过滤后的比较结果" class="img-large img-center" />

过滤比较完成后，适用的操作与其他文件夹比较相同：将仅左侧的文件复制到右侧，在删除前查看仅右侧的文件，并更新任何被标记为不同的内容 —— 只是不会再受到被有意排除的文件的干扰。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 从主页选项卡启动**比较**功能并选择你的两个文件夹。
3. 打开过滤设置，为想要排除的文件夹名称和文件类型添加排除规则。
4. 运行比较，查看仅限于真正重要内容的结果列表。

过滤后的比较能把一堆嘈杂信息变成简短、可执行的清单 —— 这正是你在决定复制、更新或保留内容之前所需要的。

---

**相关指南：**

- [文件夹比较深度解析 — 检测云存储位置之间的每一处差异](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Rclone 过滤规则详解 — 使用 RcloneView 的包含与排除模式](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [用于选择性同步的过滤规则 — RcloneView 指南](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
