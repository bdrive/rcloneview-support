---
slug: migrate-gofile-to-google-drive-rcloneview
title: "GofileからGoogle Driveへ移行 — RcloneViewでファイルを転送"
authors:
  - steve
description: "RcloneViewでGofileのファイルをGoogle Driveへ移動 — 両方のリモートを接続し、クラウド間で直接転送し、定期的な受け取りを自動化します。"
keywords:
  - Gofile から Google Drive へ移行
  - Gofile Google Drive 転送
  - Gofile ファイルを Google Drive へ移動
  - RcloneView Gofile 移行
  - Gofile アクセストークン設定
  - クラウド間転送ツール
  - Gofile Google Drive 同期
  - クラウドストレージ統合
  - クロスクラウド ファイル転送
  - Gofile ファイル管理
tags:
  - RcloneView
  - gofile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# GofileからGoogle Driveへ移行 — RcloneViewでファイルを転送

> ローカルにダウンロードしたりブラウザのタブを行き来したりすることなく、RcloneViewでGofile経由で届いたファイルを直接Google Driveに取り込みましょう。

Gofileは単発のファイル共有によく使われる中継地点です — クライアントが素材一式を送ってきたり、契約者が成果物をアップロードしたり、ダウンロードリンクがチーム内で回されたりします。しかし、そのコンテンツが長期的に置かれるべき場所ではありません。RcloneViewはGofileとGoogle Driveの両方を同じウィンドウ内にリモートとして接続するため、Gofileからファイルを取り出して永続的で整理されたGoogle Driveストレージへ移す作業が、ダウンロードして再アップロードする往復作業ではなく、直接転送になります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## GofileとGoogle Driveの接続

GofileはOAuthではなく資格情報の入力方式を使用します: Gofileアカウントのプロフィールページからアクセストークンを生成し、New Remote画面に貼り付けます。一方Google Driveはブラウザベースのアクセストークンを使用します: New Remoteウィザードをクリックして進め、ポップアップで認証するだけで、コピーするトークンはありません。両方を別々のリモートとして追加すると、隣接するExplorerパネルで開けるタブとして表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでGofileとGoogle Driveのリモートを追加する様子" class="img-large img-center" />

マウント専用のツールとは異なり、RcloneViewはリモート間の同期とフォルダ比較もサポートしています — FREEライセンスで — そのため、この同じ2リモート構成だけで一度限りの整理と継続的な受け取りルーチンの両方をカバーできます。

## リモート間で直接ファイルを転送

左パネルにGofile、右パネルにGoogle Driveを開き、移動したいファイルやフォルダを選択します。異なる2つのリモート間でドラッグすると移動ではなくコピーになるため、明示的に削除するまではGofileから何も消えません — ソースを消去する前に転送が正しく完了したかを確認したい場合に便利です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneViewでGofileからGoogle Driveへファイルを転送する様子" class="img-large img-center" />

より大きなバッチの場合は、ドラッグ&ドロップの代わりに右クリックしてCopyまたはDownloadを使用してください — 下部のInfo ViewにあるTransferringタブがライブの進捗、転送速度、ファイル数を表示するので、アプリを閉じる前にすべてが正しく届いたことを確認できます。

## 定期的な受け取りの自動化

Gofileに新しい納品物が継続的に届く場合 — 繰り返されるクライアントの引き渡しや、スケジュールされたエクスポートなど — 毎回手動転送を繰り返すより、保存済みの同期ジョブの方が優れています。Job Managerの4ステップウィザードを使えば、Gofileをソース、特定のGoogle Driveフォルダを宛先として設定し、最近アップロードされたものだけを取得するよう最大ファイル経過時間のフィルターを適用し、実際に移動する前に何がコピーされるかをDry Runでプレビューできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneViewでGofileからGoogle Driveへの定期同期ジョブをスケジュール設定する様子" class="img-large img-center" />

その後Job Historyが各実行を記録します — ステータス、ファイル数、所要時間 — アプリを開いて確認しなくても、予約された受け取りが完了したかを確認できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Gofileアカウントページから取得したアクセストークンを使ってGofileをリモートとして追加します。
3. OAuthブラウザログインでGoogle Driveをリモートとして追加します。
4. 両方を並べてExplorerパネルに開き、最初のバッチをドラッグするか、繰り返し行う作業であれば同期ジョブを作成します。

両方のリモートが同じウィンドウに配置されると、Gofileから整理されたGoogle Driveストレージへコンテンツを移す作業は、共有リンクの有効期限に左右されなくなります。

---

**関連ガイド:**

- [Gofileストレージの管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Google Driveファイルの管理とクラウド同期 — RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Google Driveストレージ容量超過の解決 — RcloneViewでファイルを移動](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
