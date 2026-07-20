---
slug: hybrid-cloud-file-transfer-nas-public-cloud-rcloneview
title: "使用 RcloneView 在本地 NAS 与公有云之间进行混合云文件传输"
authors:
  - tayson
description: "使用 RcloneView 的双栏 Explorer、Compare、Sync 和计划任务功能，在本地 NAS(SMB/SFTP)与 S3、Wasabi、Google Drive、Dropbox 等公有云之间挂载、同步和自动化传输文件。"
keywords:
  - rcloneview
  - 混合云
  - nas 备份
  - smb sftp
  - webdav
  - s3 传输
  - google drive 同步
  - wasabi 备份
  - 挂载远程驱动器
  - rclone gui
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - mount
  - hybrid-cloud
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 在本地 NAS 与公有云之间进行混合云文件传输

> 无需 CLI 折腾，即可打通本地 NAS 与公有云。RcloneView 让你添加 SMB/SFTP/WebDAV、并排打开云存储、对比变更、挂载驱动器，并安排夜间同步任务——让混合存储保持整洁且可预测。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="RcloneView user interface overview" class="img-medium img-center" />

## 混合云为何困难(但值得投入)

- 本地 NAS 为剪辑师和渲染节点提供快速的局域网访问，但缺乏异地容灾能力。
- 公有云(S3/Wasabi/Drive/Dropbox)带来了持久性和全球共享能力，但带宽和成本也是问题。
- 团队需要应对混合权限体系(NAS 上的 ACL 与云端的 OAuth/RBAC)以及不同的文件夹约定。
- 手动拷贝存在覆盖、遗漏版本以及深夜救火的风险。
- 一个统一双方的 GUI 能降低认知负担，让你放心地实现自动化。

## 单一窗格中的本地文件系统与远程文件系统

- **本地/NAS(SMB/SFTP/WebDAV)：** 类 POSIX，对权限敏感，局域网内延迟低。
- **云存储：** 对象存储(S3/Wasabi)或云盘式存储(Google Drive/Dropbox)；需要 OAuth 或密钥。
- RcloneView 将每一方都视为一个可打开、对比、挂载和同步的远程，全部集成在同一界面中。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="Two-pane Explorer layout" class="img-medium img-center" />

## 添加你的本地 NAS 远程(SMB/SFTP/WebDAV)

1. 点击 **Remote → + New Remote**，或 Explorer 中的 **+** 按钮。
2. 选择 **SMB**(用于 Windows/NAS 共享)或 **SFTP**(用于 Linux/UNIX 服务器)。
3. 输入服务器地址、共享路径及凭据(若 SMB 需要则添加域)。
4. 保存后在双栏 Explorer 中测试浏览。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-medium img-center" />

## 添加你的公有云远程

- **S3/Wasabi/B2/R2：** 使用 access/secret key；选择区域和存储桶。
- **Google Drive/Dropbox：** 点击 **Connect** 完成 OAuth 授权，无需粘贴令牌。
- **WebDAV 端点：** 粘贴 URL 及认证信息。
- 将 NAS 和云端的远程都保存在 **Remote Manager** 中，方便复用。

## 像挂载本地驱动器一样挂载远程文件系统

挂载功能有助于那些坚持使用本地路径的应用(NLE、DAW、CAD)。RcloneView 的挂载管理器让你无需接触 CLI 参数。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-medium img-center" />

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="Mount manager status view" class="img-medium img-center" />

- 在远程卡片或工具栏中点击挂载，选择驱动器盘符/路径，并设置缓存/缓冲。
- 在 **Mount Manager** 中启动/停止挂载，无需重启系统。
- 非常适合直接从 SFTP/SMB 编辑文件，或将 S3 作为文件夹暴露以完成轻量任务。

## 拷贝前先对比

混合迁移容易变得混乱；Compare 功能让差异一目了然。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison results" class="img-medium img-center" />

- 左侧打开 NAS，右侧打开云端存储桶，然后点击 **Compare**。
- 高亮显示**缺失**、**大小不同**和**匹配**的文件。
- 只拷贝 NAS → 云(或反向)的差异部分，避免覆盖更新的编辑内容。

## 适合混合云的同步与拷贝流程

- **单向拷贝**：用于备份/归档；不删除目标端文件。
- **带删除的单向同步**：当你有意将 NAS 镜像到云端时使用。
- **双向同步**：谨慎使用(仅在双方都会主动变更时使用)。
- 使用**包含/排除过滤器**跳过缓存、代理文件和临时渲染文件。

## 从容处理权限问题

- **SMB：** 对齐域/工作组；确保共享 ACL 和文件系统 ACL 允许写入。
- **SFTP：** 在服务器上核实 UID/GID 及文件夹所有权；如需要，在服务器端调整 `chmod`。
- **WebDAV：** 部分主机会阻止 MOVE/DELETE；如不确定，请仅使用拷贝方式。
- 若挂载为只读，请以正确的用户重新挂载，或在对话框中调整挂载选项。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="Log tab showing transfer details" class="img-medium img-center" />

- 查看 **Logs** 排查 401/403/550/权限拒绝等线索，修复后重试。

## NAS ↔ 云的性能优化建议

- 将大型任务安排在非高峰时段；工作时间内限制带宽。
- 对于 S3/Wasabi，保持适中的并发数以避免限流；如支持则启用**校验和**。
- 对于通过 WAN 的 SFTP，如出现丢包则减少并行传输数；仅在 CPU 允许时考虑启用压缩。
- 避免在不稳定的网络上重复挂载同一个 SMB 共享。

## 使用 Jobs 与计划任务实现自动化

- 将任意 Sync/Copy 保存为 **Job**(例如 `nas-to-s3-nightly`)。
- 打开 **Job Manager → Add Job**，选择已保存的任务，并安排在**每日 02:00** 执行。
- 错开多个任务(NAS → S3、NAS → Drive、Drive → NAS)以减少资源争用。

<!-- Image verified: exists and path corrected with /support -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-medium img-center" />

### 示例任务组合

- **NAS(SMB) → Wasabi(单向拷贝)**：每周归档 RAW/PROJECT 文件。
- **NAS(SFTP) → Google Drive 共享云盘(单向同步)**：每日同步 EDIT/EXPORT 以便协作。
- **S3 → NAS(单向拷贝)**：每月拉取冷归档数据片段，用于本地恢复测试。

### 试运行与校验

- 首次执行时运行**试运行(dry-run)**，确认将要移动的内容。
- 同步完成后，重新打开 **Compare**；此时应只剩下预期中的差异。
- 对于 S3/Wasabi，保留版本控制和生命周期规则，以控制成本并保留历史记录。

## 组织你的混合文件夹策略

- 在 NAS 和云端统一采用标准模板(如 `Project/RAW`、`EDIT`、`EXPORT`、`ARCHIVE`)。
- 将代理文件保留在云端以便快速共享；将 RAW 文件保留在 NAS/S3 上以保证保真度。
- 归档使用 **Copy**，活跃工作区使用 **Sync**，应用兼容性需求使用 **Mount**。
- 记录每个文件夹中哪个远程是“权威数据源”，以避免误删。

## 真实工作流程(分步说明)

1. **连接远程：** 为 NAS 添加 SMB/SFTP，为云端添加 S3/Wasabi 和 Google Drive。
2. **打开双栏：** 左侧 NAS，右侧云端；确认列表内容。
3. **对比小型试点文件夹：** 确保差异结果符合预期。
4. **执行单向拷贝到云端：** 从无损备份开始。
5. **保存为 Job 并设置计划：** 每晚 02:00 仅同步差异部分。
6. **为应用挂载：** 当编辑软件需要基于路径的访问时，挂载 NAS 或 S3。
7. **日志审查：** 在 Logs 中检查重试、限流提示或权限问题。
8. **定期恢复测试：** 从云端拷贝回一个临时 NAS 文件夹，验证数据完整性。
9. **优化过滤器：** 排除缓存/渲染文件；归档时仅包含母版和项目文件。
10. **团队交接：** 分享文件夹模板和任务计划，让所有人遵循同一套规则。

## 故障排查速查表

- 遇到 403/550？重新检查凭据、共享 ACL 或存储桶策略。
- WAN 速度慢？降低并发数并启用带宽限制；安排在夜间执行。
- 挂载无法写入？以正确的用户重新挂载，或调整 SMB 权限。
- WebDAV 删除失败？先拷贝再手动清理；部分主机会阻止 MOVE/DELETE。
- 出现重复文件？使用 Compare 安全清理；除非确有必要，避免使用双向同步。

## 上线检查清单

- [ ] 已添加并可浏览 NAS 远程(SMB/SFTP/WebDAV)。
- [ ] 已添加并完成认证的云远程(S3/Wasabi/Drive/Dropbox)。
- [ ] 双方文件夹模板已保持一致。
- [ ] 已完成试点 Compare 和试运行。
- [ ] 任务已保存并安排计划(建议 02:00)。
- [ ] 已在支持的情况下启用校验和；日志正在被监控。
- [ ] 已执行并记录恢复测试。

## 总结

RcloneView 将混合云工作变成一套可重复的流程：添加 NAS 和云远程、拷贝前先对比、在应用需要本地路径时挂载，并通过 Jobs 和计划任务实现备份自动化。凭借可见的日志、重试机制和校验和支持，你无需接触 CLI 就能同时保有本地性能与云端的容灾能力。

<CloudSupportGrid />
