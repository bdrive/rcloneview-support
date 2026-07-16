---
slug: rcloneview-vs-msp360-cloudberry-comparison
title: "RcloneView vs MSP360 (CloudBerry): どちらのクラウドバックアップツールを選ぶべきか？"
authors:
  - tayson
description: "クラウドバックアップとファイル管理における RcloneView と MSP360（旧 CloudBerry）を比較。機能、価格、クラウド対応の違いを解説します。"
keywords:
  - rcloneview vs msp360
  - rcloneview vs cloudberry
  - cloudberry alternative
  - msp360 alternative
  - cloud backup tool comparison
  - msp360 review
  - cloudberry backup review
  - best cloud backup software
  - cloud backup comparison
  - msp360 vs rclone
tags:
  - RcloneView
  - comparison
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView vs MSP360 (CloudBerry): どちらのクラウドバックアップツールを選ぶべきか？

> MSP360（旧 CloudBerry）は長年人気のクラウドバックアップツールです。RcloneView は 70 以上のクラウドプロバイダーに対応する rclone をベースに、異なるアプローチを取っています。両者を比較してみましょう。

どちらのツールもクラウドストレージとバックアップの管理を支援しますが、対象とするユースケースはやや異なります。MSP360 は MSP（マネージドサービスプロバイダー）向けのバックアップとディザスタリカバリに重点を置いています。RcloneView はビジュアルツールによるマルチクラウドのファイル管理に重点を置いています。重なり合う部分は多いものの、その違いは重要です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## アーキテクチャ

**MSP360**: 独自のクラウドコネクタを持つスタンドアロンのバックアップアプリケーション。クライアントのバックアップを管理する IT プロフェッショナルや MSP を対象としています。

**RcloneView**: rclone をベースに構築されたデスクトップアプリケーション。マルチクラウドストレージを管理する個人ユーザーやチームを対象としています。

## 機能比較

### クラウド対応

| 機能 | MSP360 | RcloneView |
|---------|--------|------------|
| AWS S3 | ✅ | ✅ |
| Azure Blob | ✅ | ✅ |
| Google Cloud | ✅ | ✅ |
| Backblaze B2 | ✅ | ✅ |
| Wasabi | ✅ | ✅ |
| Google Drive | ❌ | ✅ |
| OneDrive | ❌ | ✅ |
| Dropbox | ❌ | ✅ |
| NAS (Synology) | ネットワーク経由 | ✅ (自動検出) |
| FTP/SFTP | ✅ | ✅ |
| 対応プロバイダー数 | 約15 | 70+ |

MSP360 はオブジェクトストレージプロバイダー（S3互換）に重点を置いています。RcloneView は rclone が対応するすべて — 一般消費者向けクラウド、セルフホスト、ニッチなプロバイダーを含む — をサポートします。

### バックアップ機能

| 機能 | MSP360 | RcloneView |
|---------|--------|------------|
| ファイルバックアップ | ✅ | ✅ |
| イメージベースバックアップ | ✅ | ❌ |
| SQL Server バックアップ | ✅ | ❌ |
| Exchange バックアップ | ✅ | ❌ |
| ブロックレベルバックアップ | ✅ | ❌ |
| 重複排除 | ✅ | ❌ |
| バージョニング | ✅ (組み込み) | クラウドプロバイダー経由 |
| 暗号化 | ✅ | ✅ (crypt remote) |
| スケジューリング | ✅ | ✅ |
| 保持ポリシー | ✅ (高度) | クラウドのライフサイクル経由 |

MSP360 はシステムレベルの機能を備えた、より完全なバックアップソリューションです。RcloneView はファイルレベルの操作に重点を置いています。

### ファイル管理

| 機能 | MSP360 | RcloneView |
|---------|--------|------------|
| 2ペインファイルエクスプローラー | ❌ | ✅ |
| フォルダ比較 | ❌ | ✅ |
| ローカルドライブとしてマウント | ❌ | ✅ |
| クラウド間転送 | 制限あり | ✅ |
| ドラッグアンドドロップ | ❌ | ✅ |
| 組み込みターミナル | ❌ | ✅ |
| バッチジョブ | ❌ | ✅ (v1.3) |
| Slack/Discord 通知 | ❌ | ✅ (v1.3) |

RcloneView はより強力なファイル管理とマルチクラウド転送機能を提供します。

## 価格

| プラン | MSP360 | RcloneView |
|------|--------|------------|
| Personal | $49.99 (買い切り、機能制限あり) | $5.99/月 または $49.99/年 |
| Business | $79.99〜 (コンピューターごと、年払い) | 全プラン共通 |
| MSP | 個別見積もり | N/A |
| 無料トライアル | ✅ | ✅ |

MSP360 はコンピューターごとのライセンス方式で、複数台になると費用がかさみます。RcloneView は均一料金です。

## MSP360 を選ぶべき場合

- イメージベース（フルシステム）バックアップが必要な場合。
- SQL Server や Exchange のバックアップが必要な場合。
- 複数のクライアントのバックアップを管理する MSP である場合。
- 高度な保持ポリシーや重複排除が必要な場合。
- 主に S3 互換ストレージを使用している場合。

## RcloneView を選ぶべき場合

- Google Drive、OneDrive、Dropbox などの一般消費者向けクラウドでファイルを管理している場合。
- クラウド間転送とマルチクラウド管理が必要な場合。
- フォルダ比較機能を備えたビジュアルファイルエクスプローラーが欲しい場合。
- 70以上のクラウドプロバイダーが必要な場合。
- クラウドをローカルドライブとしてマウントしたい場合。
- バッチジョブとチャット通知が必要な場合。
- MSP ではなく、チームまたは個人である場合。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. **クラウドアカウントを追加**します — 70以上のプロバイダーに対応。
3. **閲覧、同期、比較、自動化**を行いましょう。

---

**関連ガイド:**

- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブのスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
