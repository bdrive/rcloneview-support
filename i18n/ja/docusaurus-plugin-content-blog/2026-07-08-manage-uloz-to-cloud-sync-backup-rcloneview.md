---
slug: manage-uloz-to-cloud-sync-backup-rcloneview
title: "Uloz.toストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - casey
description: "Uloz.toクラウドストレージをRcloneViewに接続し、ドラッグ&ドロップでのファイル管理、スケジュールバックアップ、複数プロバイダー間の同期を1つのアプリで実現。"
keywords:
  - Uloz.to
  - Uloz.to クラウドストレージ
  - Uloz.to ファイル管理
  - Uloz.to バックアップ
  - Uloz.to 同期
  - RcloneView Uloz.to
  - Uloz.to リモート
  - クラウドファイルマネージャー
  - Uloz.to 代替クライアント
  - マルチクラウドファイル管理
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Uloz.toストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Uloz.toへのブラウザアップロードに振り回されるのはもうやめましょう。デスクトップのファイルエクスプローラーからライブラリ全体を管理できます。

Uloz.toは人気のファイルホスティング・ストレージサービスですが、そのWebインターフェースは一括バックアップ、スケジュール同期、アカウント間や他のクラウドへのファイル移動を想定して作られていません。RcloneViewはUloz.toを他のストレージと並ぶリモートとして追加できるため、ブラウザタブを開かずにブラウズ、バックアップ、同期の維持が可能になります。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウント・同期でき、Windows、macOS、Linuxに対応しています。Uloz.toも同じインターフェース内のタブの1つにすぎません。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Uloz.toをリモートとして追加

Remoteタブを開いて**New Remote**をクリックし、プロバイダー一覧からUloz.toを選択して接続を設定します。追加すると、ローカルディスクや他のクラウドリモートと並んで、任意のExplorerパネルにタブとして表示されます。Remote Manager(Remoteタブ > Remote Manager)ではすべての設定済みリモートを一箇所に一覧表示できるため、後から設定画面を掘り下げることなくUloz.to接続を編集・削除できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Uloz.to as a new remote in RcloneView" class="img-large img-center" />

Explorer内では、パンくずリストのパスバーの右クリックメニューに**Copy Full Path (with Remote)**があります。ワンオフのコマンド用に組み込みのRclone Terminalも利用している場合、`uloz:FolderName`形式のパスを取得するのに便利です。

## Uloz.toのコンテンツを自動で同期・バックアップ

定期的なバックアップには、4ステップのウィザードでSyncジョブを設定します。Uloz.toをソースまたは宛先として選択し、安全で安定したバックアップ方向のために一方向の「modifying destination only」を選び、ステップ3でミラーリングしたくないファイルタイプ(大きな`.iso`ファイル、一時フォルダなど)を除外するフィルターを追加します。実際に何かが移動する前に、まずDry Runを実行してコピーまたは削除される内容を正確にプレビューしましょう。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Uloz.to and another cloud remote" class="img-large img-center" />

ジョブに確信が持てたら、PLUSライセンスのユーザーはcrontab形式のスケジュールを設定でき、Uloz.toのバックアップを毎日、毎週、あるいはワークフローに合った任意の頻度で自動実行できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Uloz.to backup job in RcloneView" class="img-large img-center" />

## Folder Compareで変更内容を確認

移行やバックアップを信頼する前に、Uloz.toフォルダと他のリモート上の対応フォルダとの間でFolder Compareを実行しましょう。比較ビューでは左側のみ、右側のみ、差分のあるファイルが並べて表示されるため、問題になる前にアップロード漏れや古いコピーを発見できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Uloz.to folder contents against another cloud remote" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブから新しいリモートとしてUloz.toを追加します。
3. Syncジョブを作成し、他のクラウドまたはローカルドライブにバックアップします。
4. Dry Runを実行し、最初の転送後にFolder Compareで確認します。

Uloz.toを適切なファイル管理ワークフローに組み込むことで、手動アップロードの手間が減り、ファイルが確実にバックアップされているという安心感が大きく高まります。

---

**関連ガイド:**

- [Linkboxストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-linkbox-cloud-sync-backup-rcloneview)
- [Pixeldrainクラウド同期を管理 — RcloneViewでファイルをバックアップ](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Teraboxストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-terabox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
