---
slug: cleanup-empty-trash-cloud-storage-rcloneview
title: "クラウドストレージを整理する: RcloneViewでゴミ箱を空にし古いバージョンを削除する"
authors:
  - tayson
description: "Google Drive、OneDrive、S3などにおいて、RcloneViewを使ってゴミ箱を空にし、古いファイルバージョンを削除し、孤立したデータを整理することでクラウドストレージの空き容量を増やします。"
keywords:
  - rclone cleanup cloud storage
  - empty google drive trash rclone
  - onedrive recycle bin cleanup
  - remove old versions s3
  - free cloud storage space
  - rcloneview cleanup feature
  - cloud storage versioning cleanup
  - rclone delete old versions
  - reclaim cloud quota
  - cloud storage trash management
tags:
  - RcloneView
  - feature
  - cleanup
  - cloud-storage
  - guide
  - tips
  - cost-optimization
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウドストレージを整理する: RcloneViewでゴミ箱を空にし古いバージョンを削除する

> 削除されたファイルや古いバージョンは、気づかないうちにクラウドの容量を消費しています。RcloneViewを使えば、それらを簡単に整理し、すでに料金を支払っているストレージを取り戻すことができます。

Google Driveでファイルを削除するたびに、それはゴミ箱に移動します。OneDriveでドキュメントが上書きされるたびに、古いバージョンが保持されます。バージョニングが有効なS3バケットが更新を受け取るたびに、以前のオブジェクトが残ります。これらの目に見えないコピーは数か月、数年かけて蓄積し、容量を消費し、ストレージ料金を膨らませます。rcloneの`cleanup`コマンドはこの隠れた肥大化を取り除き、RcloneViewを使えば数クリックでそれを実行できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ゴミ箱とバージョン管理されたファイルが容量を無駄にする仕組み

ほとんどのクラウドプロバイダーは、ゴミ箱に入ったファイルやバージョン管理されたファイルをストレージ容量にカウントします。その影響は予想以上に大きいことがよくあります。

| プロバイダー | 容量にカウントされるもの | 自動削除ポリシー |
|----------|--------------------------|-------------------|
| **Google Drive** | ゴミ箱内のファイル、すべてのファイルバージョン | ゴミ箱は30日後に自動削除 |
| **OneDrive** | ごみ箱のアイテム、バージョン履歴 | ごみ箱は93日後に自動削除 |
| **Dropbox** | 削除されたファイルと以前のバージョン | 30日間(Basic)または180日間(Professional)保持 |
| **Amazon S3** | すべてのオブジェクトバージョン(バージョニング有効時) | 自動削除なし、ライフサイクルルールが必要 |
| **Backblaze B2** | すべてのファイルバージョン | ライフサイクルルールなしでは自動削除なし |
| **Google Cloud Storage** | 現行でないオブジェクトバージョン | ライフサイクルポリシーで設定可能 |

容量の90%を使用しているGoogle Driveアカウントでは、使用量の5〜10%がゴミ箱だけに存在していることもあります。バージョニングが有効なS3バケットでは、古いバージョンが時間とともに実際のストレージ消費を2倍、3倍に増加させることがあります。

## プロバイダーごとにクリーンアップを実行する

### Google Driveのゴミ箱

Google Driveのゴミ箱は、隠れた使用量の最も一般的な発生源です。空にするには次のようにします。

```bash
rclone cleanup gdrive:
```

これはGoogle Driveのゴミ箱内のすべてのファイルを完全に削除します。元に戻すことはできません。実行前にゴミ箱内に必要なものがないことを確認してください。

RcloneViewでは、ターミナルを開かずにUIからクリーンアップを実行できます。Google Driveのリモートに移動し、クリーンアップアクションを使用してください。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView showing Google Drive remote ready for cleanup" class="img-large img-center" />

### OneDriveのごみ箱

OneDriveは削除されたファイルを最大93日間ごみ箱に保持します。

```bash
rclone cleanup onedrive:
```

これによりごみ箱が空になります。ごみ箱が大きいOneDrive Businessアカウントでは、これにより即座に大きな空き容量を確保できます。

### S3のバージョン管理されたオブジェクト

バージョニングが有効なS3バケットは、古いオブジェクトバージョンを蓄積します。rcloneのクリーンアップは現行でないバージョンを削除します。

```bash
rclone cleanup s3-remote:my-bucket
```

数千のバージョン管理されたオブジェクトを持つバケットでは、この操作に時間がかかる場合があります。特定のプレフィックスを対象に選択的にクリーンアップすることもできます。

```bash
rclone cleanup s3-remote:my-bucket/logs/
```

### Dropboxおよびその他のプロバイダー

Dropboxはrcloneを通じてcleanupコマンドを直接サポートしていません。Dropboxの場合、削除されたファイルとバージョンはDropboxのWebインターフェースまたはAPIから管理してください。pCloudやBackblaze B2などの他のプロバイダーは、上記の例と同様にクリーンアップをサポートしています。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer showing storage before cleanup" class="img-large img-center" />

## ゴミ箱がどれだけ容量を消費しているか確認する

クリーンアップを実行する前に、どれだけの容量を取り戻せるか確認しましょう。

```bash
rclone about gdrive:
```

出力には、削除されたファイルによって使用されている容量を正確に示す**Trashed**行が含まれます。

```
Total:   15 GiB
Used:    12.3 GiB
Free:    2.7 GiB
Trashed: 3.8 GiB
```

この例では、ゴミ箱を空にすると即座に3.8 GiBが解放され、利用可能な容量が2倍以上になります。

## 古いファイルバージョンを選択的に削除する

一部のワークフローでは、最新バージョンを保持しつつそれより古いものだけを削除する必要があります。rcloneはバックエンド固有のコマンドでこれをサポートしています。

バージョニングが有効なS3の場合。

```bash
rclone backend cleanup-hidden s3-remote:my-bucket
```

これは、各オブジェクトの現行バージョンをそのまま残しつつ、隠れた(現行でない)バージョンのみを削除します。

Google Driveの場合、リモート設定で`--drive-keep-revision-forever=false`を使用することで、今後の無制限なバージョン保持を防ぐことができます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Execute cleanup job in RcloneView" class="img-large img-center" />

## スケジュールジョブでクリーンアップを自動化する

手動でのクリーンアップも機能しますが、スケジュールされたクリーンアップは問題の再発を防ぎます。

1. RcloneViewで、各リモートに対してcleanupコマンドを使った新しい**ジョブ**を作成します。
2. **ジョブスケジューラー**を開き、繰り返しスケジュールを設定します。ほとんどのアカウントでは月次で十分です。
3. 各実行後に**ジョブ履歴**を確認し、クリーンアップが正常に完了したことを確認します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cleanup job in RcloneView" class="img-large img-center" />

月次のクリーンアップスケジュールにより、ゴミ箱や古いバージョンが容量問題や料金の増加を引き起こすほど蓄積することがなくなります。

## 安全に関する注意事項

- **クリーンアップは永続的です** -- `rclone cleanup`を実行した後、ゴミ箱内のファイルは復元できません。
- **まずゴミ箱を確認する** -- 削除する前に、プロバイダーのWebインターフェースでゴミ箱を確認してください。
- **S3のバージョニングには目的があります** -- ロールバックのためにバージョンに依存している場合は、無差別にクリーンアップしないでください。代わりに直近N個のバージョンを保持するライフサイクルルールを検討してください。
- **まず重要でないリモートでテストする** -- 本番データでクリーンアップを実行する前に、動作が期待通りであることを確認してください。
- **クリーンアップにはドライランがありません** -- syncやcopyと異なり、`--dry-run`モードはありません。ゴミ箱の中身を確認したうえで、確信を持って進めてください。

## コストへの影響

従量課金制のプロバイダーでは、クリーンアップは直接料金を削減します。

| プロバイダー | ストレージコスト | 古いバージョン/ゴミ箱100GB分 |
|----------|-------------|------------------------------|
| Amazon S3 Standard | $0.023/GB/月 | 月額$2.30の節約 |
| Backblaze B2 | $0.006/GB/月 | 月額$0.60の節約 |
| Google Cloud Standard | $0.020/GB/月 | 月額$2.00の節約 |
| Wasabi | $0.0069/GB/月 | 月額$0.69の節約 |

容量制限型のプロバイダーでは、クリーンアップにより同期やバックアップを妨げる上限への到達を回避できます。

---

**関連ガイド:**

- [クラウドストレージの使用量とクォータを分析する](https://rcloneview.com/support/blog/rclone-about-storage-usage-analysis-rcloneview)
- [Wasabi vs Backblaze B2 vs IDrive e2 比較](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [クラウド間転送と同期](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
