---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "RcloneViewでGoogleフォトを外付けドライブやNASに丸ごとバックアップする方法"
authors:
  - tayson
description: "アルバム構造を失うことなく、Googleフォトのライブラリ全体を外付けハードドライブ、NAS、または別のクラウドに自動でダウンロード・バックアップする方法 — RcloneViewを使って。"
keywords:
  - google photos backup
  - download all google photos
  - google photos to external drive
  - google photos to nas
  - backup google photos automatically
  - google photos to hard drive
  - google photos rclone
  - google photos sync nas
  - save google photos locally
  - google photos export alternative
tags:
  - google-photos
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでGoogleフォトを外付けドライブやNASに丸ごとバックアップする方法

> Googleフォトはあなたの思い出を保存してくれますが、もしアカウントがロックされたり、ストレージが満杯になったり、Googleがポリシーを変更したらどうなるでしょうか？ ローカルバックアップがあれば、写真が常にあなた自身のものであり続けることを保証できます。

Googleフォトは便利です — うまくいっている間は。ストレージの上限、アカウントの停止、ポリシーの変更は、いずれもかけがえのない何年分もの写真や動画へのアクセスを脅かす可能性があります。Google Takeoutというエクスポート機能もありますが、非常に遅く、大きなライブラリでは失敗しやすく、差分更新にも対応していません。

RcloneViewはより良い方法を提供します。Googleフォトに直接接続し、ライブラリを視覚的に閲覧し、すべてを外付けドライブ、NAS、または別のクラウドに同期できます — 自動スケジューリング機能により、今後追加される写真もバックアップされます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜGoogleフォトをローカルにバックアップすべきか

### Google Takeoutでは不十分

Google Takeoutを使えば写真をエクスポートできますが、大きな制限があります。

- **遅くて不安定** — 大きなライブラリではエクスポートの途中で失敗することが多く、最初からやり直す必要があります。
- **差分更新なし** — すべてのエクスポートがフルダンプです。今月500枚の新しい写真を撮った場合でも、すべてを再度エクスポートすることになります。
- **ZIPアーカイブ形式** — 手動で解凍・整理が必要な大量のZIPファイルが生成されます。
- **自動化なし** — 毎回完全な手作業になります。

### クラウドのみで保存することの実際のリスク

- **ストレージ容量超過** — Gmail・Driveと共有される15GBに達すると、Googleは削除または課金を促してきます。
- **アカウントロックアウト** — たとえ意図しないものであっても、ポリシー違反によりGoogleアカウント全体が凍結される可能性があります。
- **サービスの変更** — Googleはこれまでにも一部のプロダクト（Google+、Picasaなど）を廃止してきました。データ戦略はこれを考慮に入れるべきです。

外付けドライブやNASへのローカルバックアップがあれば、どんなポリシー変更にも左右されない独立したコピーを手に入れることができます。

## Googleフォトをリモートとして設定する

### ステップ1: RcloneViewにGoogleフォトを追加する

RcloneViewを開き、新しいリモートを作成します。

1. リモートマネージャーの **Add Remote** ボタンをクリックします。
2. プロバイダー一覧から **Google Photos** を選択します。
3. OAuth認証フローに従います — RcloneViewがブラウザを開いてアクセスを承認します。
4. 認証が完了すると、Googleフォトのライブラリが閲覧可能なリモートとして表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Photos as a remote in RcloneView" class="img-large img-center" />

### ステップ2: フォトライブラリを閲覧する

接続が完了すると、RcloneViewの[エクスプローラー](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)から直接Googleフォトのライブラリを閲覧できます。Googleフォトは以下のようにファイルを整理しています。

- **年/月フォルダ** — 写真は `media/by-year/2024/01` のようなパス形式で配置されます。
- **アルバム** — アルバムは `album` パス配下の個別フォルダとして表示されます。
- **共有アルバム** — `shared-album` からアクセスできます。

これにより、転送を開始する前に何をバックアップしようとしているのかを正確に把握できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Photos library in RcloneView Explorer" class="img-large img-center" />

## バックアップ戦略1: Googleフォト → 外付けハードドライブ

最もシンプルな方法 — USB接続の外付けドライブにすべてをコピーします。

### 設定方法

1. **外付けドライブを接続**し、ドライブレター（Windows）またはマウントポイント（Mac/Linux）を確認します。
2. RcloneViewで**コピージョブを作成**します。
   - **Source**: Googleフォトのリモート（すべての写真を対象にする場合は `media/by-year` フォルダを選択）
   - **Destination**: 外付けドライブのパス（例: `E:\Google Photos Backup`）
3. **ジョブを実行**します — RcloneViewはフォルダ構造を保持したまま、すべての写真と動画をダウンロードします。

### 推奨設定

- **並列転送数**: 4〜6（GoogleフォトのAPIにはレート制限があります）
- **ジョブタイプ**: Copy（Syncではない — Googleフォトから削除した際にローカルファイルまで削除されては困るため）

### 差分更新について

初回のバックアップ後は、以降の実行では新しい写真のみがダウンロードされます。RcloneViewはドライブ上に既にあるファイルと比較し、既存のファイルをスキップします。これにより、数時間かかる初回バックアップが、日々のクイックな更新に変わります。

## バックアップ戦略2: Googleフォト → Synology NAS

Synology NASをお使いの場合、RcloneViewはさらに統合された体験を提供します。v1.0以降、Synology NASデバイスはネットワーク上で[自動検出](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)されます。

### 設定方法

1. **RcloneViewを起動**します — Synology NASがLocalタブに自動的に表示されます。
2. **コピージョブを作成**します。
   - **Source**: Googleフォトのリモート
   - **Destination**: NAS上の共有フォルダ（例: `/photos/google-backup`）
3. [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)を使って、毎日または毎週**ジョブをスケジュール**します。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection for Google Photos backup" class="img-large img-center" />

### 写真のバックアップにNASが最適な理由

- **常時稼働** — 外付けドライブと異なり、NASは常に接続され準備が整っています。
- **RAID保護** — ほとんどのNAS構成はディスク故障に備えてRAIDを使用しています。
- **どこからでもアクセス可能** — ネットワーク上のどのデバイスからでもバックアップした写真を閲覧できます。
- **二次クラウドバックアップ** — 別のRcloneViewジョブを使ってNASの内容をS3やBackblaze B2に同期し、オフサイトの冗長性を確保できます。

## バックアップ戦略3: Googleフォト → 別のクラウド

別のクラウドプロバイダーにもコピーを保持したいですか？ RcloneViewならクラウド間転送もシームレスに行えます。

- **Googleフォト → OneDrive** — Microsoft 365のストレージを活用できます。
- **Googleフォト → AWS S3** — 安価で耐久性の高いオブジェクトストレージにアーカイブできます。
- **Googleフォト → Backblaze B2** — 低コストで容量無制限のバックアップストレージです。
- **Googleフォト → Wasabi** — S3互換で、下り転送料金がかかりません。

Googleフォトをソース、目的のクラウドをデスティネーションとしてコピージョブを作成するだけです。データがローカルマシンのストレージを経由することはありません — RcloneViewはrcloneエンジンを通じて転送を処理します。

## フォトバックアップの自動化

一度きりのバックアップも良いですが、自動化された定期バックアップの方がさらに優れています。

### スケジュールバックアップを設定する

1. 上記いずれかの方法で**コピージョブを作成**します。
2. **ジョブスケジューリング**を開き、繰り返しスケジュールを設定します。
   - **毎日午前2時** — 前日に追加された新しい写真をすべて取得します。
   - **毎週日曜日** — 小規模なライブラリ向けの軽い方法です。
3. 正常に動作したことがわかるように**通知を追加**します。
   - チーム向けの[Slack通知](https://rcloneview.com/support/blog/rcloneview-slack-remote-control)
   - 個人利用向けの[Telegram通知](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)
   - コミュニティ向けの[Discord通知](https://rcloneview.com/support/blog/rcloneview-discord-remote-control)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automatic Google Photos backups" class="img-large img-center" />

### 複数先へのバックアップにはバッチジョブを使う

v1.3の[バッチジョブ](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview)を使えば、Googleフォトを一連の自動処理で複数の宛先にバックアップできます。

1. Googleフォト → 外付けドライブへコピー
2. Googleフォト → NASへコピー
3. Googleフォト → Backblaze B2へコピー

1回のクリック（または1回のスケジュールトリガー）で3つすべてが実行されます。

## モニタリングと検証

### リアルタイムの転送モニタリング

バックアップの進捗をリアルタイムで確認できます — ファイル数、転送速度、完了予定時刻などを表示します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Photos backup progress" class="img-large img-center" />

### フォルダ比較で検証する

バックアップが完了したら、[フォルダ比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)を使って、ローカルのコピーがGoogleフォトのライブラリと一致していることを確認しましょう。これにより、何も漏れていないという安心感が得られます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Google Photos with local backup" class="img-large img-center" />

### ジョブ履歴を確認する

[ジョブ履歴](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)を確認すると、転送されたファイル、発生したエラー、所要時間の合計など、過去のバックアップ実行の完全なログを見ることができます。

## Googleフォトの大規模ライブラリ向けのヒント

数万枚の写真をお持ちの場合は、以下を参考にしてください。

1. **最近の年から始める** — まず直近2〜3年分をバックアップし、そこから遡っていきます。これにより、最も新しい思い出を最速で保護できます。
2. **差分コピーを活用する** — 初回実行後は、新しいファイルのみが転送されます。
3. **レート制限には辛抱強く対応する** — GoogleフォトのAPI制限はGoogleドライブより厳しめです。並列転送数は4〜6に維持しましょう。
4. **失敗時はリトライする** — v1.3の「失敗したジョブの再試行」機能が、一時的なAPIエラーをうまく処理します。
5. **オフピーク時間帯のスケジューリングを検討する** — ネットワークの混雑を避けるため、大規模なバックアップは夜間に実行しましょう。

## 始めましょう

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します（Windows、macOS、Linux対応）。
2. OAuth認証を使って**Googleフォトをリモートとして追加**します。
3. エクスプローラーで**ライブラリを閲覧**し、何をバックアップしようとしているか確認します。
4. 選択した宛先（外付けドライブ、NAS、またはクラウド）に**コピージョブを作成**します。
5. 自動での定期バックアップのために**スケジュールを設定**します。
6. 初回実行後は、フォルダ比較で**検証**します。

あなたの写真はかけがえのないものです。バックアップが単一のプロバイダーに依存するべきではありません。RcloneViewを使えば、独立したコピーを手軽に、確実に、そしてCLIを一切使わずに維持できます。

---

**関連ガイド:**

- [ブラウザベースのログイン（OAuth）でリモートを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [リモートの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NASの自動検出と接続](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
