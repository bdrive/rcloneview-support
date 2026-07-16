---
slug: aws-s3-vs-cloudflare-r2-object-storage-comparison-rcloneview
title: "AWS S3 与 Cloudflare R2：RcloneView 用户的对象存储对比"
authors:
  - tayson
description: "对比 AWS S3 和 Cloudflare R2 的对象存储方案。分析价格、出站流量费用、性能和功能,帮助你为 RcloneView 选择合适的后端。"
keywords:
  - aws s3 vs cloudflare r2
  - s3 vs r2
  - cloudflare r2 comparison
  - object storage comparison
  - s3 egress fees
  - r2 no egress
  - cloud storage pricing
  - s3 compatible storage
  - best object storage
  - rcloneview storage comparison
tags:
  - amazon-s3
  - cloudflare-r2
  - comparison
  - storage-comparison
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# AWS S3 与 Cloudflare R2:RcloneView 用户的对象存储对比

> AWS S3 是对象存储领域的行业标准。Cloudflare R2 则完全免除了出站流量费用。RcloneView 可同时连接两者——以下是如何选择的方法。

AWS S3 开创了对象存储这一品类,至今仍是采用最广泛的服务,具备 11 个 9 的持久性、完善的生命周期管理,以及与 AWS 生态系统的深度集成。Cloudflare R2 作为直接竞争对手推出,拥有极具颠覆性的定价优势:零出站流量费用。对于跨多个提供商管理数据的 RcloneView 用户来说,了解 S3 与 R2 之间的权衡有助于同时优化成本和功能。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 价格对比

### 存储成本

| 层级 | AWS S3 | Cloudflare R2 |
|---|---|---|
| 标准 | $0.023/GB/月 | $0.015/GB/月 |
| 低频访问 | $0.0125/GB/月 | 不可用 |
| Glacier 即时检索 | $0.004/GB/月 | 不可用 |
| Glacier 深度归档 | $0.00099/GB/月 | 不可用 |

对于活跃存储而言,R2 比 S3 标准层便宜 35%。不过,S3 的分层存储类别(低频访问、Glacier、深度归档)为极少被访问的数据提供了显著更低的价格。如果你的数据访问模式混合多样,S3 的生命周期策略可以随时间自动将对象转移到更便宜的层级——这是 R2 所不具备的能力。

### 出站流量成本

这是 R2 的核心优势所在。AWS S3 对传输到互联网的数据收取 $0.09/GB(大流量有更低费率,传输到 CloudFront 则免费)。Cloudflare R2 的出站流量费用为 $0.00——所有数据检索都是免费的。

对于每月 10 TB 的出站流量负载,差距十分明显:S3 大约每月 900 美元,而 R2 则为 0 美元。对于存储量大、出站流量少的工作负载,这一差距会缩小,此时 S3 的生态系统优势可能超过出站流量节省带来的好处。

### API 操作

| 操作 | AWS S3 | Cloudflare R2 |
|---|---|---|
| PUT/POST(A 类) | $0.005/1,000 次 | $0.0045/1,000 次(前 100 万次免费) |
| GET(B 类) | $0.0004/1,000 次 | $0.00036/1,000 次(前 1000 万次免费) |
| DELETE | 免费 | 免费 |

R2 为 API 操作提供了慷慨的免费额度,且在超出免费额度后每次操作的价格也略低。对于 API 调用量大的工作负载(数百万次小对象操作),R2 的免费额度能带来可观的节省。

## 功能对比

### 存储类别与生命周期

**AWS S3** 提供六种存储类别(标准、智能分层、标准低频访问、单区低频访问、Glacier 即时检索、Glacier 灵活检索、Glacier 深度归档),并配有可根据存储时长或访问模式自动转换对象层级的生命周期策略。

**Cloudflare R2** 只提供单一存储类别,外加一个低频访问层级。没有类似 Glacier 的冷存储选项,生命周期管理也较为有限。

对于归档类工作负载而言,S3 的 Glacier 深度归档以 $0.00099/GB/月的价格几乎无可匹敌。

### 持久性与可用性

两项服务都提供高持久性。AWS S3 宣称达到 99.999999999%(11 个 9)的持久性。Cloudflare 没有为 R2 公布具体的持久性数值,但表示其设计目标是在多个可用区实现高持久性。

S3 标准层提供 99.99% 的可用性。R2 未公布具体的 SLA,但可受益于 Cloudflare 的全球网络。

### 生态系统集成

**AWS S3** 与整个 AWS 生态系统集成——Lambda、CloudFront、Athena、EMR、SageMaker、CloudTrail,以及数百个其他服务。IAM 策略、存储桶策略和 VPC 端点可提供精细的访问控制。

**Cloudflare R2** 与 Cloudflare Workers(边缘计算)、Cloudflare CDN 以及 Cloudflare 控制台集成。这种集成更紧密、更简单,但范围较窄。

### S3 API 兼容性

两项服务都支持 S3 API。R2 实现了最常用的 S3 操作(GET、PUT、DELETE、分块上传、列出对象),但并未支持所有 S3 功能——尤其是 S3 Select、S3 Object Lambda 以及部分高级存储桶配置在 R2 上不可用。

RcloneView 使用相同的 S3 兼容远程类型连接这两者,因此在 RcloneView 中切换只需更改端点和凭据。

## 在 RcloneView 中同时使用两者

RcloneView 的多云方案意味着你不必二选一。一种常见策略是将 S3 用于归档数据(利用 Glacier 层级),将 R2 用于频繁访问的数据(消除出站流量费用)。RcloneView 可以在双面板浏览器中通过几次点击在二者之间进行同步、复制或迁移。

在远程管理器中将两者都设置为 S3 兼容远程,RcloneView 会处理剩下的工作——对比存储桶内容、执行迁移,或安排持续的复制任务。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Managing AWS S3 and Cloudflare R2 side by side in RcloneView" class="img-large img-center" />

## 何时选择哪种提供商

**选择 AWS S3 的情形:**
- 你需要生命周期策略和 Glacier 冷存储层级。
- 你的工作负载与其他 AWS 服务集成。
- 你需要 S3 Select、Object Lambda 或 Inventory 等高级功能。
- 相对于存储量而言,数据出站流量很少。
- 你需要官方公布的 11 个 9 持久性 SLA。

**选择 Cloudflare R2 的情形:**
- 数据出站流量占成本的很大一部分。
- 你通过 Cloudflare 的 CDN 网络提供内容。
- 你的应用使用 Cloudflare Workers 进行边缘计算。
- 你希望获得简单、可预测的定价,不必担心出站流量意外费用。
- 你的数据不需要冷存储分层。

## 开始使用

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 在远程管理器中添加 AWS S3 和 Cloudflare R2 作为 S3 兼容远程。
3. 在双面板浏览器中并排浏览两者。
4. 根据成本和访问需求在二者之间迁移、同步或复制数据。

AWS S3 凭借其生态系统深度和归档层级,依然是对象存储领域的黄金标准。Cloudflare R2 通过消除出站流量费用颠覆了定价模式。RcloneView 让你可以充分利用两者——或在二者之间自由切换——而不受供应商锁定。

---

**相关指南:**

- [添加 AWS S3 和 S3 兼容存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [对比文件夹内容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [创建同步任务](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
