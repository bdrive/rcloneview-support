---
slug: rcloneview-windows-11-cloud-sync
title: "Windows 11でRcloneViewを使う — クラウドストレージの同期とバックアップ"
authors:
  - morgan
description: "Windows 11にRcloneViewをインストールして実行し、1つのデスクトップアプリケーションから90以上のクラウドストレージサービスをマウント、同期、バックアップしましょう。"
keywords:
  - rcloneview windows 11
  - windows 11 クラウドストレージ 同期
  - windows 11 クラウドドライブ マウント
  - windows 11 クラウドバックアップ
  - rclone gui windows 11
  - windows 11 エクスプローラー クラウド
  - windows マルチクラウド デスクトップ
  - windows クラウド同期ソフト
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Windows 11でRcloneViewを使う — クラウドストレージの同期とバックアップ

> Windows 11は以前のリリースに比べてエクスプローラーと権限モデルが厳格になりました — マウント、同期、クラウドストレージのバックアップのためにRcloneViewをスムーズに実行する方法を紹介します。

Windows 11の刷新されたシェルと、より厳格になったデフォルトのセキュリティ方針は、ストレージやドライブレターを扱うデスクトップアプリにいくつかの変化をもたらします。**RcloneView**はWindows 11上で標準的なデスクトップアプリケーションとしてネイティブに動作し、Google Drive、OneDrive、Dropbox、S3互換ストレージごとに別々のベンダーアプリを行き来する代わりに、90以上のクラウドストレージサービスを1つのインターフェースから閲覧、同期、マウントできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Windows 11へのRcloneViewのインストール

RcloneViewはx86-64システム向けにビルドされたInno Setupインストーラー(`setup_rclone_view-{version}.exe`)として提供されます — Windows ARM64ビルドは存在しないため、本ガイドは標準的なWindows 11のPCやノートPCが対象です。[rcloneview.com](https://rcloneview.com/src/download.html)からインストーラーをダウンロードし、実行してセットアップウィザードを完了してください。

Windows 11ではVC++ 2015-2022 再頒布可能パッケージが必要で、不足している場合はインストーラーがインストールを促します。RcloneViewには組み込み(Embedded)のrcloneバイナリが同梱されているため、別途rcloneをインストールする手順は不要です — アプリはデフォルトで`http://127.0.0.1:5582`経由で内蔵のrcloneインスタンスと通信します。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewで新しいクラウドリモートを追加する" class="img-large img-center" />

## クラウドストレージをドライブレターとしてマウントする

Windows 11でRcloneViewが提供する最も便利な機能の1つは、クラウドリモートをローカルドライブとしてマウントすることです。Remote Explorerパネルでマウントしたいリモートを選択し、パネルツールバーのマウントアイコンをクリックして、自動割り当てまたは手動のドライブレターを選び、Save and mountをクリックします。すると、そのリモートは物理ディスクと同じようにエクスプローラーに表示されます。

Windows 11ではデフォルトで`cmount`マウントタイプが使用されます。ローカルディスクの代わりにネットワークドライブとして表示されるようにマウントを設定することもでき、応答性を優先するか、最近使用したファイルのオフラインアクセスを優先するかに応じてVFSキャッシュモード(off、minimal、writes、full)を調整できます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneViewのMount Managerからリモートをマウントする" class="img-large img-center" />

## ファイルの同期とバックアップ

マウントに加えて、RcloneViewの同期ウィザードを使うと、接続済みの2つのリモート間、またはローカルのWindows 11フォルダとクラウドサービスの間で一方向の同期ジョブを設定できます。FREEライセンスでS3、Azure、Backblaze B2に完全な読み書きアクセスで接続し、ドキュメントフォルダやプロジェクトフォルダがクラウドストレージへ自動的にミラーリングされるようスケジュールバックアップジョブを設定しましょう。

4ステップの同期ウィザードでは、転送元・転送先の選択、転送の並行数、フィルタリングルール(ファイルサイズ、経過日数、フォルダの深さ)、そしてPLUSライセンスではcrontab形式のスケジューリングを設定できます。Dry Runオプションを使えば、実際に変更が行われる前に、コピーまたは削除される内容を正確にプレビューできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでクラウド間の転送ジョブを設定する" class="img-large img-center" />

## システムトレイからジョブを監視する

RcloneViewはWindows 11のシステムトレイに最小化され、そこからマウント済みドライブの確認、マウントのオン・オフの切り替え、ウィンドウ全体を開き直さずに新しいマウントを開始できます。実行中の転送はメインウィンドウ下部のTransferringタブに表示され、進捗率、速度、ファイル数がライブで更新されます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**し、Windows用インストーラーを実行します。
2. Remoteタブ > New Remoteから最初のクラウドリモートを追加します。
3. ドライブレターとしてマウントするか、ローカルのWindows 11フォルダへの同期ジョブを設定します。
4. Job Historyパネルで最初の転送が正常に完了したことを確認します。

RcloneViewをインストールすれば、Windows 11から各クラウドサービスごとに個別の同期クライアントをインストールすることなく、数十のクラウドサービスに一貫した方法でアクセスできるようになります。

---

**関連ガイド:**

- [Windows 10でRcloneViewを使う — クラウドストレージの同期](https://rcloneview.com/support/blog/rcloneview-windows-10-cloud-sync)
- [Windows ServerでRcloneViewを使う — クラウドバックアップ](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [Windowsでマウントドライブレターの競合を解決する](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
