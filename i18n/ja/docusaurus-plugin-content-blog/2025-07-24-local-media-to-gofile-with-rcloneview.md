---
slug: local-media-to-gofile-with-rcloneview
title: RcloneViewでローカルメディアをGofileへ移動・同期する(CLI不要)
authors:
  - jay
description: RcloneViewのわかりやすいGUIを使って、ハードドライブから大容量メディアライブラリをGofileへアップロード、同期、管理する方法—リンク、重複排除、スケジューリングのヒント付き。
keywords:
  - rcloneview
  - gofile
  - media upload
  - hard drive to cloud
  - cloud file transfer
  - scheduled sync
  - rclone GUI
  - public links
tags:
  - gofile
  - media
  - cloud-file-transfer
  - sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでローカルメディアをGofileへ移動・同期する(CLI不要)

> クリックだけでコマンドは不要—メディアライブラリを**ハードドライブ**から**Gofile**へ移動して、公開・保護しましょう。

## はじめに — なぜローカルメディアをGofileでホストするのか?

動画編集素材、RAW写真、オーディオマスターが1台のドライブにしか存在しない場合、水漏れやディスク障害一つで失われてしまう危険があります。メディアを**Gofile**へ移動することで、クラウドへのアクセス、簡単な共有、そしてワークステーションの空き容量確保が可能になります。**RcloneView**を使えば、rcloneの機能をわかりやすいGUIで利用できます。接続、プレビュー、コピー、スケジューリングまで—ターミナルは一切不要です。

<!-- truncate -->
### Gofileについて(概要)
- Gofileは、ドキュメント化されたREST APIを備えたコンテンツストレージ&配信プラットフォームです。APIトークンを使って公開リンクを作成したり、アップロードを自動化したりできます。 [gofile.io](https://gofile.io/api)
- rcloneには専用の**Gofile**バックエンドがあります。**アカウントAPIトークン**で設定すれば、一覧表示、コピー、さらには`rclone link`による公開リンクの作成まで可能です。*(注: rcloneのGofileバックエンドを利用するには**プレミアム**Gofileアカウントが必要です。)* [Rclone](https://rclone.org/gofile/)

### ローカルメディアライブラリについて
- メディアプロジェクトは**大容量**(数GB単位)で、階層が深く、バージョンごとに重複していることも多いです。
- プレビュー、選択的コピー、レジューム対応の転送といった優れたツールが、スムーズな移行には欠かせません。

### なぜハードドライブからGofileへ移動するのか?
- **共有のしやすさ**: クライアントや共同作業者向けに公開リンクを生成できます。
- **オフロード&バックアップ**: オンラインにコピーを保持しながらローカルの容量を解放できます。
- **ワークフローの制御**: レンダリング後にプッシュをスケジュールし、フォルダを同期状態に保てます。

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## ステップ1 — 準備

アップロードの前に:

1. **フォルダを整理する**(例: `Footage/`、`Stills/`、`Masters/`)ことで、作業を明確かつ再現しやすくします。
2. **モードを決める**: アーカイブの一回限りのコピー、進行中プロジェクトの継続同期、または夜間スケジュールのいずれかを選びます。


## ステップ2 — RcloneViewでGofileを接続する

RcloneViewは、rcloneの設定をガイド付きのフローにまとめています。

1. **RcloneView**を開き→**`+ New Remote`**をクリック
2. **Gofile**を選択し、Gofileの**My Profile**から取得した**アカウントAPIトークン**を貼り付けます。*(rclone接続にはプレミアムが必要です。)*
3. 名前を付けて(例: `MyGofile`)保存します。

🔍 参考ガイド: [Add Gofile Remote](/howto/remote-storage-connection-settings/gofile)

<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />

## ステップ3 — 転送を実行する

RcloneViewには、メディアを移動・維持するための明確な3つの方法があります。小さく始めて、徐々に拡張しましょう。

### A) ドラッグ&ドロップ(手動・随時)
- 左側で**ローカル**メディアを開き、右側で**Gofile**を開いて、**フォルダ/ファイルをドラッグ**するだけ—シンプルで直感的です。

👉 詳細はこちら: [ドラッグ&ドロップによるファイルコピー](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 比較&コピー(変更内容をプレビュー)
- **比較**機能を使って、コピー前に何が新しい、または変更されているかを確認し、予期せぬ事態や再試行を減らします。

👉 詳細はこちら: [ファイルの比較と管理](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results in RcloneView showing changed files" class="img-medium img-center" />

### C) 同期&スケジュールジョブ(自動化)
- **同期**を使って、ローカルの**Projects**フォルダをGofileへミラーリングします。
- 最初に**ドライラン**を行い、その後再利用可能なジョブとして保存し、スケジュール(例: 毎晩)を設定します。

👉 詳細はこちら:
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved job in RcloneView" class="img-medium img-center" />

**プロのヒント**
- Gofileがフォルダ内で**重複した名前**を検出すると、同期が煩雑になることがあります—アップロード後にrcloneの**dedupe**機能を使って競合を整理しましょう。
- **共有リンク**が必要ですか? rcloneの`link`コマンドでプログラム的に公開リンクを作成できます(上級者向け/CLI)。

---

## まとめ — 振り返りと補足ポイント

- **得られるもの**: より安全なストレージ、簡単な共有、そしてローカルドライブの整理。
- **実現方法**: RcloneViewがAPIトークンで**Gofile**を設定し、**ドラッグ&ドロップ**、**比較**、**同期**を実行—**スケジューリング**による手間いらずの運用も可能です。

## よくある質問

**Q. rclone/RcloneViewを使うにはGofileのプレミアムアカウントが必要ですか?**
**A.** はい—rcloneのGofileバックエンドを利用するには、**プレミアム**Gofileアカウントと**My Profile**から取得する**アカウントAPIトークン**が必要です。

**Q. アップロードしたファイルの公開共有リンクを生成できますか?**
**A.** はい。RcloneViewは`link`をサポートしており、公開リンク(ファイルまたはフォルダ、フォルダはZIPとしてダウンロード可能、一部バックエンドでは有効期限も設定可能)を作成できます。


**メディアライブラリをあなたのやり方でオンラインに公開する準備はできましたか?**

<CloudSupportGrid />

