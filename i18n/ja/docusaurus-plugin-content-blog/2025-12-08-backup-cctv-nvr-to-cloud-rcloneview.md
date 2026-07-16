---
slug: backup-cctv-nvr-to-cloud-rcloneview
title: "RcloneViewを使ってCCTV/NVR映像をクラウドストレージに自動でバックアップ・アーカイブする方法"
authors:
  - tayson
description: "NAS、SMB、SFTPパスからのCCTV/NVR映像をWasabi、S3、Google Driveに送信します。Compare、チェックサム対応の同期ジョブ、スケジュール実行を使って、手動アップロードなしで証拠映像を保護しましょう。"
keywords:
  - rcloneview
  - cctv backup
  - nvr cloud archive
  - wasabi s3
  - google drive backup
  - smb sftp
  - surveillance storage
  - checksum verification
  - scheduled backup
  - disaster recovery
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - cctv
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewを使ってCCTV/NVR映像をクラウドストレージに自動でバックアップ・アーカイブする方法

> 監視映像を盗難、火災、機器故障から守りましょう。RcloneViewはNAS/SFTP/SMBのNVRフォルダをWasabi、S3、Google Driveに接続し、Compareと同期ジョブを自動化することで、新しい映像だけを転送し、証拠を確実に保持します。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 1. CCTV映像にクラウドバックアップが重要な理由

- NVR/NASのディスクは24時間365日の録画ですぐに満杯になります。
- 盗難、火災、破壊行為により唯一のコピーが失われる可能性があります。
- コンプライアンスや監査ではより長い保持期間が求められます。
- リモートでの確認や証拠共有にはオフサイトアクセスが必要です。
- 数GBに及ぶH.264/H.265ファイルを手動でコピーするのはミスが起きやすい作業です。

## 2. 監視映像ファイルが厄介な理由

- 継続的な書き込みにより日付ベースの数千のクリップが生成されます。
- 高ビットレート(1080p/4K)はバックアップ時の帯域幅に負荷をかけます。
- フォルダ構造はベンダーによって異なります(年/月/日、カメラID)。
- 人の監視なしでスケジュールされた転送(1時間ごと/毎日)が必要です。
- 整合性が重要です。フレームの破損は証拠としての価値を損ないます。

## 3. RcloneViewができること

- **NAS/SMB/SFTP/WebDAV**のソースと**Wasabi/S3/Google Drive**のターゲットを1つのUIで接続。
- 2ペインのExplorerにより、クラウド間またはLANからクラウドへの移動が視覚的かつ直感的に行えます。
- **Compare**が新規/変更されたクリップをフラグ表示し、差分のみを転送できます。
- **チェックサム**サポート(S3/Wasabi)がアップロードを検証します。
- **同期ジョブ+スケジュール**によりスクリプト不要でバックアップを自動実行できます。

<!-- Image verified: exists -->


## 4. CCTV/NVRバックアップのステップバイステップ設定

### ステップ1) NVRストレージ(SMBまたはSFTP)を接続する

1. **リモート → + 新規リモート**をクリックします。
2. **SMB**(NAS/Windows共有向け)または**SFTP**(Linux NVRエクスポート向け)を選択します。
3. サーバーアドレス、共有/パス、認証情報を入力します(必要であればドメインも追加)。
4. 保存し、リモートマネージャーで表示を確認します。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create NVR remote from Remote Manager" class="img-medium img-center" />

### ステップ2) クラウドターゲット(Wasabi/S3/Google Drive)を追加する

- **Wasabi/S3**: アクセスキー/シークレットキー、リージョン、バケットを貼り付けます。
- **Google Drive**: **接続**をクリックし、ブラウザでOAuthを完了します。
- 両方のリモートを表示させたまま並行して作業できるようにします。

### ステップ3) ソースと宛先を開く

1. **ブラウズ**に移動します。
2. 左ペイン: NVRフォルダを開きます(例: `/recordings/2025/12/08`)。
3. 右ペイン: バックアップ用のバケットまたはDriveフォルダを開きます。
4. いくつかの日付フォルダを展開してパスを確認します。

### ステップ4) Compareで差分をプレビューする

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison showing CCTV deltas" class="img-medium img-center" />

- **Compare**をクリックして、欠落しているファイルやサイズが変更された動画ファイルをハイライト表示します。
- コピー前に名前の衝突(重複するカメラID)を解決します。
- これにより、ターゲット側の新しいクリップが上書きされるのを防ぎます。

### ステップ5) 安全にコピーまたは同期する

- まずはNVR→クラウドへの**片方向コピー**(削除なし)から始めます。
- S3/Wasabiでは**チェックサム**を有効にしてアップロードを検証します。
- 業務時間中は**帯域幅制限**を使用し、夜間は制限を解除します。
- データ量が非常に多い日は同時実行数を下げてスロットリングを避け、後で引き上げます。

### ステップ6) ワークフローをジョブとして保存する

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save CCTV sync to jobs" class="img-medium img-center" />

1. 同期/コピーダイアログで**ジョブに保存**をクリックします。
2. 名前を付けます(例: `cctv-daily-wasabi`)。
3. 後で古いクリップを削除する予定がある場合は片方向同期を選択します。

### ステップ7) 自動実行をスケジュールする

<!-- Image verified: exists with /support prefix -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CCTV backup job" class="img-medium img-center" />

- **ジョブマネージャー → ジョブを追加**を開きます。
- 保存したジョブを選択し、頻度を設定します: 1時間ごと、3時間ごと、または毎晩02:00。
- 帯域幅に制限がある場合は、カメラグループごとにジョブの実行時間をずらします。
- 最初の数回の実行後、**ジョブ履歴**を確認します。

## 5. バックアップポリシーの例

- **短期(ホット)ストレージ:** 素早い確認のためNAS/NVRに直近7日分を保持。
- **長期アーカイブ:** すべての映像を毎週Wasabi/S3にプッシュし、バージョニングを有効化。
- **監査/レビュー:** 選択した日のデータを調査員やマネージャー向けにGoogle Driveへコピー。
- **フランチャイズまたは複数拠点:** アクセスを分離するため店舗ごとに別のバケット/プレフィックスを使用。


## 6. 動画アーカイブのコスト最適化

- あまりアクセスされない映像は**Wasabi**またはS3の低頻度アクセス階層に保存します。
- 素早い共有のため、アクティブな日のデータのみGoogle Driveに保持します。
- S3/Wasabiのライフサイクルルールを使用して、古いオブジェクトを安価な階層に移行します。
- ポリシーで許可されている場合、カメラのテストクリップや動きのないセグメントを除外します。

## 7. 必要に応じて映像を復元する

- Explorerでクラウドリモートをブラウズし、日付フォルダでフィルタリングします。
- 確認に必要な時間/日のデータのみをローカルディスクにコピーします。
- **Compare**を使用して、復元されたファイルが元のファイルと一致することを確認します(サイズ/時刻またはチェックサム)。
- 法的保存(リーガルホールド)の場合は、別の読み取り専用プレフィックス/バケットに複製します。

## 8. 実際の導入パターン

- **小規模小売店:** NVR → Wasabiに1時間ごと; クラウドに30日分、ローカルに7日分を保持。
- **工場:** CCTV → NAS → 毎晩Wasabiへコピー; 月次でS3コールドアーカイブ。
- **フランチャイズネットワーク:** 1つのバケット内で拠点ごとのプレフィックス; 本部監査用にDriveへコピー。
- **セキュリティプロバイダー:** 規制対象施設向けに顧客ごとのバケット、スケジュールされたジョブ、暗号化リモート。

## 9. まとめ

RcloneViewはCCTV/NVRバックアップを、CLI不要で予測可能なワークフローに変えます。NASやレコーダーをSMB/SFTPで接続し、Wasabi/S3/Google Driveと組み合わせ、Compareで差分をプレビューし、チェックサム対応の同期ジョブをスケジュールしましょう。自動化、ログ記録、暗号化オプションにより、夜間のアップロードを監視することなく、保持要件、監査、災害復旧のニーズを満たすことができます。

<CloudSupportGrid />
