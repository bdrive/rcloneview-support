---
slug: synology-to-cloud-backup-with-rcloneview
title: "Synology → クラウドを簡単に: RcloneViewでオフサイトバックアップと同期"
authors:
  - jay
description: RcloneViewのGUIでプラン作成、プレビュー、自動化を行い、Synology NASをBackblaze、Google Drive、Amazon S3、pCloud、Wasabiなどへオフサイトバックアップして保護しましょう。
keywords:
  - rcloneview
  - synology nas backup
  - backblaze b2
  - google drive
  - amazon s3
  - wasabi
  - pcloud
  - cloud backup
  - scheduled sync
  - rclone GUI
tags:
  - RcloneView
  - synology
  - cloud-backup
  - s3
  - google-drive
  - Backblaze
  - wasabi
  - pcloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology → クラウドを簡単に: RcloneViewでオフサイトバックアップと同期

> スクリプトやターミナルを使わずに、オフサイトに二重のコピーを保管しましょう。**Synology NAS**を**Backblaze、Google Drive、Amazon S3、pCloud、Wasabi**などへ、視覚的に、確実に、スケジュールに沿ってバックアップできます。

## はじめに — Synologyのバックアップをオフサイトに保管すべき理由

NASは高速でローカルアクセスに優れており、家族の写真、クリエイティブなプロジェクト、チーム共有もLAN内ですぐに扱えます。しかし**オンプレミスのみ**にはリスクがあります。盗難、火災、誤削除、複数ドライブの故障などです。**オフサイトのクラウドコピー**を追加することで、次のメリットが得られます。

<!-- truncate -->

- **レジリエンス**: リモートで復元可能なコピーがあれば、ローカルの災害にも耐えられます。
- **柔軟性**: オフィスや自宅から離れていても、どこからでも復元できます。
- **ガバナンス**: NASの保持ポリシーとクラウドバケットのバージョニングやポリシーを組み合わせられます。

**Synology NASの概要**
- **SMB/NFS**(ローカルフォルダとしてマウント)や**WebDAV**、**SFTP**などのネットワークエンドポイントでアクセスできる中央ストレージ。
- 常時稼働のバックアップ、メディアホスティング、チームファイルハブに最適。

**クラウド送信先の概要**
- **Google Drive**: Google Workspaceでのコラボレーションと共有。
- **Amazon S3 / Wasabi / Backblaze B2**: バケット、リージョン、ライフサイクルルールを備えたオブジェクトストレージ。
- **pCloud**: 使いやすく、ファイル管理も充実したストレージ。

**なぜ今NAS → クラウドを行うべきか**
- **オフサイトのセーフティネット**を構築する。
- バックアップ先を単一の送信先(またはマルチクラウド)に**標準化**する。
- 多くのクラウドプラットフォームで利用可能な**ポリシーとバージョニング**を活用する。

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## ステップ1 — 準備

始める前に:

1. **対象範囲を選ぶ** — Synology上のどの共有フォルダ(例: `/photo`、`/projects`、`/backup`)をクラウドへ送るか?
2. **クラウドの容量を確認する** — 対象アカウントやバケットに十分な空き容量(バージョン分の余裕を含む)があるか確認します。
3. **NASの接続方法を選ぶ**
   - **ローカルパス**: OS上で**SMB/NFS**経由でNAS共有をマウントし、RcloneViewで**Local**として使用します。
   - **WebDAV**: Synologyの**WebDAV Server**を有効化し、RcloneViewでWebDAV接続します。
   - **SFTP**: SynologyでSSH/SFTPを有効化し、**SFTP**で接続します。
4. **クラウドを選ぶ** — Google Drive、Amazon S3/Wasabi、Backblaze B2、pCloudなど。
5. **頻度を決める** — 一度限りのアーカイブ、定期的な同期、または**毎晩のスケジュールジョブ**。
6. **まず試験運用する** — パス、権限、スループットを検証するために小さなテストを実行します。

🔍 参考になる概要:
- [クラウド ↔ Synologyチュートリアル](/tutorials/synology-nas-cloud-transfer)


## 3) ステップ2 — RcloneViewで接続を設定する

RcloneViewは、rcloneの設定をガイド付きのクリック操作フローにまとめています。

1. **RcloneView**を開き、**`+ New Remote`**をクリックします。
2. 以下のいずれかの方法で**Synology(送信元)を追加**します。
   - **Local**: マウント済みのNASフォルダを選択します(例: `Z:\NAS\Projects` または `/Volumes/NAS/Projects`)。
   - **WebDAV**: SynologyのWebDAVエンドポイント/認証情報を使用し、名前を付けます(例: `NAS-WebDAV`)。
   - **SFTP**: ホスト/IP、ポート、アカウントを入力し、名前を付けます(例: `NAS-SFTP`)。
3. 例として、**クラウド(送信先)を追加**します。
   - **Google Drive**: OAuthログイン → `MyGoogleDrive`と名付けます。
   - **Amazon S3 / Wasabi**: **S3**プロバイダー → アクセスキー/シークレット、リージョン、バケット → `MyS3` / `MyWasabi`と名付けます。
   - **Backblaze B2**: **B2**プロバイダー(該当する場合はS3互換エンドポイント) → `MyB2`と名付けます。
   - **pCloud**: サインイン/トークンフロー → `MyPcloud`と名付けます。
4. Explorerペインに両方が並んで表示されることを確認します。

🔍 参考ガイド:
- [クイックOAuth設定(Google Driveなど)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [S3リモートの追加(Amazon S3/Wasabi)](/howto/remote-storage-connection-settings/s3)
- [クラウド ↔ Synologyチュートリアル](/tutorials/synology-nas-cloud-transfer)

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 4) ステップ3 — バックアップ/同期を実行する(3つの実践的な方法)

RcloneViewは3つのシンプルな方法を提供しています。まず小さく始めて、自信を持って規模を拡大していきましょう。

### A) ドラッグ&ドロップ(手動コピー)
- 片方に**Synology(Local/WebDAV/SFTP)**、もう片方に**クラウド**を開き、**フォルダ/ファイルをドラッグして移動**します。
- 選択的な移動やクイックな作業に最適です。

👉 詳細はこちら: [ドラッグアンドドロップによるファイルのコピー](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 比較とコピー(変更内容をプレビュー)
- **Compare**を実行して、NASとクラウドバケット/ドライブとの間で何が新規/変更されたかを確認します。
- 差分のみをコピーすることで、予期せぬ結果を減らし、実行を高速化できます。

👉 詳細はこちら: [ファイルの比較と管理](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) 同期とスケジュールジョブ(自動化)
- **Sync**を使って、選択したNASフォルダをクラウド送信先にミラーリングします。
- まず**ドライラン**を行い、その後再利用可能な**Job**として保存し、スケジュール(毎晩/毎週)を追加します。

👉 詳細はこちら:
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジュールと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

**プロのヒント**
- **S3タイプのクラウド**(S3/Wasabi/B2のS3互換)では、事前にバケットを作成し、正しいリージョンを選択してください。
- 対応バケットで**バージョニング**を有効にすると、より安全にロールバックできます。
- 移行中はNASの送信元を**読み取り専用**にしてドリフトを防ぎましょう。
- フィルターを使って、キャッシュ/一時フォルダをバックアップから除外しましょう。


## 5) まとめ — 重要なポイントと追加のヒント

- **なぜこれを行うのか**: 耐久性のあるオフサイトのセーフティネット、より迅速な災害復旧オプション、統一された保持ポリシー。
- **仕組み**: RcloneViewがSynology NASとクラウド送信先を接続し、**ドラッグ&ドロップ**、**比較**、**同期**を可能にします。**スケジューリング**により手間のかからないバックアップも実現します。
- **安全にスケールする**: まず試験運用を行い、プロバイダーのクォータを尊重し、ジョブログを監視してクリーンな監査証跡を残しましょう。


## よくある質問

**Q. 複数のクラウドにバックアップできますか?**
**A.** はい。複数の送信先(例: S3とGoogle Drive)を追加し、それぞれに個別のジョブやスケジュールを作成できます。

**Q. コマンドラインは必要ですか?**
**A.** いいえ。RcloneViewは完全なGUIです。CLIなしでリモートの設定、変更内容のプレビュー、同期の実行、ジョブのスケジュールが行えます。


**Synologyのバックアップをオートパイロットに乗せて、オフサイトで管理下に置く準備はできましたか?**

<CloudSupportGrid />
