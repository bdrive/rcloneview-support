---
slug: sync-google-drive-to-hetzner-storage-box-rcloneview
title: "Google Drive を Hetzner Storage Box に同期 — RcloneView によるクラウドバックアップ"
authors:
  - steve
description: "RcloneView のクロスプロバイダー同期ジョブを使って、Google Drive のファイルを手頃なオフサイトバックアップとして Hetzner Storage Box に同期します。"
keywords:
  - Google Drive を Hetzner に同期
  - Google Drive Hetzner Storage Box バックアップ
  - Hetzner Storage Box rclone
  - Google Drive オフサイトバックアップ
  - 低コスト クラウドストレージ同期
  - ヨーロッパ クラウドストレージ バックアップ
  - Google Drive RcloneView 同期
  - Hetzner Box バックアップ
  - Google Drive SFTP バックアップ
  - クラウド間バックアップ
tags:
  - RcloneView
  - google-drive
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive を Hetzner Storage Box に同期 — RcloneView によるクラウドバックアップ

> スクリプトを一切書かず、デスクトップから離れることなく、Google Drive ファイルの低コストなセカンドコピーを Hetzner Storage Box に保存しましょう。

Google Drive は日常的なコラボレーションには便利ですが、それ自体は長期バックアップ先として設計されたものではありません。独立したインフラ上にセカンドコピーを持つことで、アカウントロック、誤削除、容量超過といったリスクから保護できます。Hetzner Storage Box はテラバイトあたりの低コストからこの用途で人気の選択肢であり、RcloneView はコマンドラインでのスクリプト作成なしに、スケジュール同期ジョブを通じて両者を直接接続します。RcloneView は 1 つのウィンドウから両方のプロバイダーをマウント・同期でき、Windows、macOS、Linux で利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 両方のリモートを接続する

まず、標準の OAuth ブラウザーログインを使ってリモートマネージャー（Remote Manager）で Google Drive を追加します — RcloneView が認証フローを自動的に処理するため、API キーの入力は不要です。次に、Hetzner Storage Box を SFTP リモートとして追加し、資格情報入力（Credential Entry）画面でボックスのホストアドレスと SSH 資格情報を入力します。

両方のリモートがエクスプローラーパネルにタブとして表示されたら、分割パネルレイアウトを開いて並べて確認しましょう。これは自動化ジョブを設定する前の有効な確認手順です — 同期を実行する前に、Storage Box 上の宛先フォルダー構造が想定どおりであることを確認してください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で Google Drive と Hetzner Storage Box をリモートとして追加する" class="img-large img-center" />

## 同期ジョブを構成する

同期ウィザードで、Google Drive をソースとして、Hetzner Storage Box を宛先として選択し、ソース側で何も削除せずに Storage Box が Google Drive をミラーリングするよう**片方向（One-way）**同期方向を選択します。ステップ3では、バックアップが不要なファイルタイプをスキップするフィルターを適用します — `.tmp` ファイルや Google ドキュメント専用形式を除外すると、転送量が減り、以降の実行が速くなります。

詳細設定（Advanced Settings）でチェックサム（checksum）比較を有効にすると、更新日時が新しいすべてのファイルではなく、実際に変更されたファイルのみを RcloneView が再転送します — これは、コンテンツに変更がなくてもメタデータのタイムスタンプが変わりうる Google Drive で特に重要です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView で Google Drive から Hetzner Storage Box への片方向同期ジョブを構成する" class="img-large img-center" />

## バックアップの自動化とモニタリング

まずドライラン（Dry Run）を実行して、どのファイルが正確にコピーされるかを事前に確認し、その後ジョブを実行して情報ビュー（Info View）の転送（Transferring）タブで進行状況を確認します — 転送速度、ファイル数、合計サイズが表示されます。PLUS ライセンス保有者は、手動操作なしで同期が繰り返されるよう crontab 形式のスケジュールを設定でき、ジョブ履歴（Job History）は後の監査のために各実行の所要時間と結果を永続的に記録します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView で Google Drive から Hetzner Storage Box への定期同期ジョブをスケジュールする" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. OAuth で Google Drive を接続し、Hetzner Storage Box を SFTP リモートとして追加します。
3. フィルターとチェックサム比較を有効にした片方向同期ジョブを作成します。
4. ドライランを実行してから同期を実行し、転送（Transferring）タブでモニタリングします。

独立した低コストのインフラにセカンドコピーを持つことは、Google Drive のデータを保護する最もシンプルな方法の1つであり、RcloneView は手作業でのファイル操作なしにこのルーティンを継続させます。

---

**関連ガイド:**

- [Hetzner Storage Box ストレージの管理 — RcloneView でファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Dropbox を Hetzner Storage Box に同期 — RcloneView によるクラウドバックアップ](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)
- [Google Drive ストレージの管理 — RcloneView でファイルを同期・バックアップする](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
