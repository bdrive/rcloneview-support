---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Box for Business を管理する — RcloneView で同期とバックアップ"
authors:
  - robin
description: "RcloneView で Box for Business を接続し、1つのクロスプラットフォーム GUI でエンタープライズファイルを閲覧、同期、バックアップしましょう。"
keywords:
  - box for business
  - box エンタープライズ クラウドストレージ
  - RcloneView box business
  - box_sub_type enterprise
  - box business ファイル同期
  - box for business バックアップ
  - box エンタープライズアカウント管理
  - box クラウドストレージ GUI
  - box business ファイル管理
tags:
  - RcloneView
  - box
  - cloud-storage
  - cloud-sync
  - backup
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business を管理する — RcloneView で同期とバックアップ

> Box for Business アカウントには接続時にもう一つ設定が必要です — RcloneView がそれを処理し、その上で完全なファイルマネージャーを提供します。

Box for Business は個人用 Box アカウントとは異なるアカウントタイプで動作しており、正しく接続するにはリモート設定時にエンタープライズフラグを有効にする必要があります。数十のシートにまたがってエンタープライズフォルダを共有するデザインエージェンシーは、誤ったワークスペースを黙って閲覧してしまう壊れたリモートを許容できません。RcloneView は設定時に正しい設定を追加し、その後 Box for Business を他のリモートと同様に扱います — 1つのウィンドウから閲覧、同期、マウントがすべて可能です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box for Business アカウントを接続する

Box for Business は個人用 Box アカウントと同じ OAuth ブラウザログインを使用しますが、RcloneView が個人用フォルダツリーではなく正しいエンタープライズワークスペースを参照するように、リモート作成時に `box_sub_type = enterprise` を設定する必要があります。Remote タブ > New Remote を開き、Box を選択してブラウザサインインを完了し、保存する前にサブタイプを設定してください。マウント専用ツールとは異なり、RcloneView は Box for Business リモート上でも同期とフォルダ比較を行えます — FREE ライセンスでも利用可能です。

接続が完了すると、リモートは他のクラウドストレージと同様に Explorer タブバーに表示されます。エンタープライズフォルダを閲覧し、フッターの概要でファイル数とサイズを確認し、毎回再認証することなく複数の Box ワークスペースを切り替えられます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## エンタープライズフォルダをバックアップする

同期ジョブは、他のリモートを保護するのと同じ方法で Box for Business のコンテンツを保護します: 同期ウィザードのステップ1でソースと宛先を設定し、安定したバックアップ方向のために一方向「宛先のみ変更」を選択し、ステップ3でフィルタを追加して一時ファイルや容量の大きい添付ファイルを除外します。契約書やクライアントの成果物を扱うチームにとっては、ローカルストレージまたは第2のクラウドアカウントへの毎晩の一方向同期が、共有ワークスペースの外に復旧用コピーを維持します。

その後 Job History が、ステータス、ファイル数、転送サイズ、所要時間など実行ごとの記録を追跡するため、管理者はスケジュールがバックグラウンドで静かに実行されたと想定するのではなく、バックアップが実際に完了したことを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box for Business backup runs" class="img-large img-center" />

## Box for Business をローカルドライブとしてマウントする

マウントすると、エンタープライズアカウントがドライブレターまたはマウントポイントに変わり、ファイルを事前にダウンロードすることなく、どのデスクトップアプリケーションからも直接開けるようになります。これは、Web アップロードダイアログではなくローカルファイルパスを前提とするデザインソフトウェアやドキュメントソフトウェアを使用するチームにとって重要です。応答性と信頼性のバランスを取るためにキャッシュモードを「writes」に設定し、共有コンテンツを変更すべきでないレビュアーのために Read only を有効にしてください。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Box for Business folder from the Remote Explorer panel" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** してください。
2. 新しい Box リモートを作成し、設定時にエンタープライズサブタイプを有効にします。
3. 重要なエンタープライズフォルダをバックアップするために一方向同期ジョブを設定します。
4. 直接ローカルファイルアクセスが必要なチームのためにリモートをマウントします。

エンタープライズアカウントも他のクラウドストレージと同じように信頼性の高い同期とバックアップのカバレッジを受けるべきです — RcloneView は最初から接続が正しく設定されていることを保証するだけです。

---

**関連ガイド:**

- [Box ストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dropbox for Business ストレージを管理する — RcloneView で同期とバックアップ](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [RcloneViewでBoxストレージをネットワークドライブとしてマウントし、チームのシームレスなアクセスを実現](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
