---
slug: manage-hetzner-storage-box-sync-rcloneview
title: "Hetzner Storage Boxを管理する — RcloneViewで同期とバックアップ"
authors:
  - tayson
description: "HetznerStorage BoxをRcloneViewに安全に接続し、SFTPおよびWebDAVプロトコルを使ってヨーロッパのクラウドバックアップ向けにクラウド間でファイルを同期する方法を解説します。"
keywords:
  - Hetzner Storage Box
  - SFTP backup
  - WebDAV cloud sync
  - European cloud storage
  - RcloneView
  - secure file sync
  - cloud backup Europe
  - Hetzner SFTP
  - hybrid cloud backup
  - GDPR-compliant cloud storage
tags:
  - RcloneView
  - hetzner
  - european-cloud
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hetzner Storage Boxを管理する — RcloneViewで同期とバックアップ

> ヨーロッパのクラウドストレージとマルチクラウドの柔軟性が出会う。Hetzner Storage Boxは競争力のある価格とGDPR準拠を提供します—今なら、RcloneViewで他のクラウドアカウントと一緒に手間なく管理できます。

Hetzner Storage Boxは、信頼性が高く手頃な価格のクラウドバックアップを求めるヨーロッパの企業から信頼されている選択肢です。SFTPを使う場合もWebDAVを使う場合も、RcloneViewがHetznerアカウントをクラウドエコシステム全体に橋渡しし、ダッシュボードを離れることなく同期、バックアップ、アーカイブを行えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP経由でHetzner Storage Boxを接続する

RcloneViewでHetzner Storage Boxのリモートを追加するのは簡単です。SFTPは業界標準の暗号化によるサーバーへの直接アクセスを提供します。

1. RcloneViewを開き、**Add Remote**をクリックします
2. プロバイダーリストから**SFTP**を選択します
3. Hetznerの認証情報を入力します:
   - **Host**: `u[account-id].your-storagebox.de`
   - **Username**: Hetznerのログイン名
   - **Password**: Hetznerのパスワードまたは SSH キー
4. ポートを**22**（標準のSFTP）に設定します
5. **Test Connection**をクリックして確認します

![New Remote Setup](/images/en/blog/new-remote.png)

## HetznerをAWS S3や他のクラウドと同期する

Hetzner Storage Boxが接続されたら、すぐにクラウド間の同期ジョブを作成できます。

**ユースケース:**
- **S3へのバックアップ**: Hetznerから頻繁にアクセスされるファイルをAmazon S3 Glacierにアーカイブし、長期保存を行う
- **マルチクラウド冗長化**: HetznerとBackblaze B2間でデータをミラーリングする
- **ハイブリッドワークフロー**: Hetzner Storage BoxをGoogle Driveと同期してチームでアクセスできるようにする

![Cloud to Cloud Transfer](/images/en/blog/cloud-to-cloud-transfer-default.png)

## リアルタイムモニタリングとスケジューリング

RcloneViewのジョブスケジューラーを使えば、Hetznerのバックアップを自分のタイムラインで自動化できます。転送速度、エラー率、ファイル数をリアルタイムで監視できます。

![Job History and Monitoring](/images/en/howto/rcloneview-basic/job-history.png)

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. まだお持ちでない場合は、[hetzner.com](https://www.hetzner.com/storage/storage-box)でHetzner Storage Boxアカウントを作成します。
3. RcloneViewでSFTPまたはWebDAVの認証情報を使ってHetznerリモートを追加します。
4. 別のクラウドプロバイダーへの最初の同期またはバックアップジョブを作成します。
5. 必要に応じて定期ジョブをスケジュールするか、1回限りの転送を実行します。

自信を持ってヨーロッパのクラウドストレージを管理しましょう—複雑な処理はRcloneViewが引き受けるので、あなたはデータに集中できます。

---

**関連ガイド:**

- [SFTPサーバーを管理する — RcloneViewでクラウド同期](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [WebDAVサーバーを接続する — RcloneViewでクラウド同期](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [OVHクラウドオブジェクトストレージを管理する — RcloneViewで同期](https://rcloneview.com/support/blog/manage-ovh-cloud-object-storage-sync-rcloneview)

<CloudSupportGrid />
