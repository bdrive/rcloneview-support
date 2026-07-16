---
slug: sync-koofr-to-amazon-s3-rcloneview
title: "Koofr を Amazon S3 に同期 — RcloneView によるクラウドバックアップ"
authors:
  - tayson
description: "RcloneView で Koofr を Amazon S3 に同期 — 信頼性の高い rclone ベースの GUI を使用して、ヨーロッパのクラウドストレージと AWS S3 の間でファイルを転送します。"
keywords:
  - Koofr to Amazon S3 sync
  - Koofr backup to S3
  - cloud sync tool
  - RcloneView Koofr
  - S3 archiving
  - cloud-to-cloud sync
  - AWS backup
  - European cloud to S3
  - Koofr rclone sync
  - GDPR cloud to S3
tags:
  - RcloneView
  - koofr
  - amazon-s3
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr を Amazon S3 に同期 — RcloneView によるクラウドバックアップ

> Koofr のヨーロッパでホストされたストレージと Amazon S3 のグローバルな耐久性は、互いを補完する役割を果たします。RcloneView はこの両者を直接同期し、ローカルディスクの負荷なしにクロスプロバイダーのバックアップ戦略を実現します。

Koofr のヨーロッパのデータセンターと GDPR 準拠のインフラは、優れたアクティブストレージプラットフォームとしての強みを持ち、一方 Amazon S3 はアーカイブと配信のために世界クラスの耐久性と CDN 統合を提供します。両者を同期することで、堅牢な二層構成の戦略が実現します。作業データは Koofr のヨーロッパのデータセンターに保持しつつ、長期的なコスト最適化のために S3 にアーカイブするのです。RcloneView はローカルディスクに触れることなく、両方のリモート間で直接同期を処理します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを設定する

RcloneView では、**Remote タブ > New Remote > Koofr** から Koofr を追加し、認証情報を入力します。次に **Amazon S3** を追加します。プロバイダーリストから選択し、Access Key ID、Secret Access Key、AWS Region を入力します。両方のリモートが有効になったら、デュアルパネルエクスプローラーを開きます — 一方に Koofr、もう一方に S3 バケットを表示し、ストレージを並べて確認できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Amazon S3 remotes in RcloneView" class="img-large img-center" />

この直接比較は計画に役立ちます。Koofr の中身を確認し、目的の S3 バケット構造を確定し、同期ジョブを開始する前にフォルダ名を検証できます。

## 同期ジョブを設定する

**Job Manager** で、Koofr フォルダから対象の S3 バケットパスへの同期ジョブを作成します。機密文書を Koofr から S3 Standard-IA にバックアップし、コスト効率の良い保持を行うコンプライアンスチームの場合、スケジューリング機能(PLUS ライセンス)を使用して同期ジョブを毎週実行します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Amazon S3 sync job in RcloneView" class="img-large img-center" />

RcloneView のフィルタリングオプションを使用すると、同期を特定のファイルタイプに限定できます。例えば、一時ファイルやサムネイルを除外しながら `.pdf` と `.docx` ファイルのみを同期することができます。**Max File Age** フィルタリングにより、最近変更されたファイルのみに同期をさらに限定でき、増分実行を高速かつ的確に保てます。

## モニタリングと検証

初回の同期後、以降の実行では変更分のみが転送されます — RcloneView はファイルサイズと更新日時を比較して差分を特定します。**Job History** タブには、各同期の結果として転送バイト数、ファイル数、所要時間、ステータスが表示されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to S3 sync runs in RcloneView" class="img-large img-center" />

Koofr を GDPR 準拠のプライマリストレージとして、S3 をアーカイブ層として維持する組織にとって、この同期パターンは明確なデータライフサイクルを実現します。Koofr でアクティブに管理し、スケジュールに従って S3 にアーカイブします。**Folder Compare** 機能は、必要なときに両プラットフォームが同期していることを時点ごとに検証できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. **Koofr** リモート(認証情報)と **Amazon S3** リモート(Access Key)を追加します。
3. **Job Manager** で Koofr から S3 への同期ジョブを作成します。
4. スケジューリング(PLUS)を有効にして、定期的なバックアップを自動化します。

RcloneView は、2 つのクラウドによるアーキテクチャを、管理された自動化ワークフローに変えます — Koofr はコンプライアンス用途、S3 はアーカイブ用途として、同期が両者を常に最新の状態に保ちます。

---

**関連ガイド:**

- [Koofr ストレージの管理 — RcloneView による同期とバックアップ](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [マルチクラウドハブとしての Koofr — RcloneView で Google Drive、OneDrive、Dropbox と連携](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [RcloneView で Dropbox を AWS S3 にバックアップ](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
