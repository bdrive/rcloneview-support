---
slug: manage-koofr-cloud-sync-backup-rcloneview
title: "Koofrストレージを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RcloneViewでKoofrクラウドストレージを管理 — rcloneベースのGUIを使ってKoofrの同期、バックアップ、他クラウドとの連携を行う方法。"
keywords:
  - Koofr管理
  - Koofr同期ツール
  - Koofrバックアップ
  - RcloneView Koofr
  - Koofrクラウドストレージ GUI
  - Koofrファイル転送
  - ヨーロッパクラウドストレージ
  - マルチクラウド管理
  - GDPRクラウドバックアップ
  - Koofr rclone
tags:
  - koofr
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofrストレージを管理する — RcloneViewでファイルを同期・バックアップ

> Koofrは強力なGDPR準拠を誇る、プライバシー重視のヨーロッパ発クラウドストレージプロバイダーです。RcloneViewはKoofrに接続し、マルチクラウドのバックアップ・同期ワークフローに統合します。

Koofrはデータセキュリティへのこだわりと外部クラウドアカウントの集約機能で際立つ、プライバシーを尊重するヨーロッパのクラウドストレージサービスです。RcloneViewをKoofrと併用することで、さらなる柔軟性が得られます — 90以上のクラウドプロバイダーに同時対応する専用のマルチクラウドファイル管理インターフェースから、Koofrのネイティブストレージを管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## KoofrをRcloneViewに接続する

KoofrをRcloneViewのリモートとして追加するには、**Remoteタブ > New Remote**に移動し、プロバイダー一覧から**Koofr**を選択します。Koofrの認証情報を入力してセットアップを完了してください。保存すると、Koofrストレージがエクスプローラーパネルに閲覧可能なリモートとして表示され、Koofrのウェブインターフェースを開かなくても、フォルダの移動、ファイルサイズの確認、コンテンツの直接管理ができます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr as a new remote in RcloneView" class="img-large img-center" />

Koofrのアカウント集約機能(Koofrのインターフェースを通じてDropbox、Google Drive、OneDriveのアカウントを接続する機能)をすでに利用しているチームにとっても、RcloneViewは補完的な視点を提供します — それらの外部サービスと並行して、Koofr自身のストレージバケットを独立して管理できます。

## Koofrでファイルを同期する

Koofrを個人のバックアップ先として利用しているフリーランス開発者は、RcloneViewの**Job Manager**で同期ジョブを設定できます — ローカルのプロジェクトフォルダをソースに、Koofrリモートを保存先に設定します。RcloneViewは増分同期を処理するため、2回目以降の実行では変更されたファイルのみが転送され、フルアップロードに比べて帯域幅の使用量を大幅に削減できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Syncing files to Koofr in RcloneView Job Manager" class="img-large img-center" />

Koofrのデータセンターがヨーロッパにあることは、GDPR準拠のバックアップ先として魅力的な要素です。規制遵守のためにヨーロッパでホストされたバックアップを必要とする企業は、RcloneViewのスケジューリング機能(PLUSライセンス)を使って、社内ファイルサーバーからKoofrへの自動転送を設定できます。**Dry Run**プレビューでは、データに触れる前にどのファイルが移動するかを正確に確認でき、意図しない上書きを防止します。

## Koofrを含むプロバイダー間転送

RcloneViewはKoofrを他のクラウドリモートと同様に扱うため、Koofrと他の任意のプロバイダーとの間で自由に転送を設定できます。Google Driveのプロジェクトフォルダを毎月Koofrにバックアップしている小規模デザイン事務所では、デュアルパネルのエクスプローラーで両方のリモート間にコピージョブを設定し、実行前に両側を確認しています。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cross-provider transfer from Google Drive to Koofr in RcloneView" class="img-large img-center" />

**Folder Compare**機能を使うと、Koofrストレージを他の任意のリモートと比較し、片方にのみ存在するファイルを特定できます。これは、直近の転送が完全に完了したことを確認したり、データ損失につながる前に不整合を検出したりするのに役立ちます。

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remoteタブ > New Remote**に進み、**Koofr**を選択し、認証情報を入力します。
3. エクスプローラーパネルでKoofrストレージを閲覧します。
4. **Job Manager**で、Koofrとローカルストレージまたは他のクラウドとの間に同期・コピージョブを作成します。

プライバシーを重視するユーザーやGDPR準拠が求められるチームにとって、RcloneViewを通じたKoofrの利用は、ヨーロッパ域内でのデータレジデンシーを完全に確保しながら、プロフェッショナルなクラウド管理を実現します。

---

**関連ガイド:**

- [KoofrをマルチクラウドHubとして — Google Drive、OneDrive、DropboxとRcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Koofr vs Jottacloud — RcloneViewによるヨーロッパクラウドストレージ比較](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)
- [RcloneViewでJottacloudのクラウド同期・バックアップを管理する](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
