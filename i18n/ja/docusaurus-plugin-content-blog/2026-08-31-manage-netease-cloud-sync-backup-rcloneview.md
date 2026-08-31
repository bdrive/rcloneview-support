---
slug: manage-netease-cloud-sync-backup-rcloneview
title: "NetEaseストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - jay
description: "RcloneViewでNetEaseオブジェクトストレージを接続し、S3互換の同期、バックアップ、マルチクラウドファイル管理をワークフロー全体で行いましょう。"
keywords:
  - netease クラウドストレージ
  - netease オブジェクトストレージ rcloneview
  - s3互換ストレージ 同期
  - netease バックアップ
  - rcloneview netease
  - 中国 クラウドストレージ
  - オブジェクトストレージ gui
  - netease 同期ツール
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# NetEaseストレージを管理 — RcloneViewでファイルを同期・バックアップ

> NetEaseのS3互換オブジェクトストレージをRcloneViewに接続し、すでに使っている他のすべてのクラウドと一緒に管理しましょう。

アジア太平洋地域で事業を行うチームは、ストレージが複数の地域プロバイダーに分散していることが多く、NetEaseのオブジェクトストレージサービスもその構成の一部としてよく見られます。RcloneViewはrcloneのS3互換バックエンド経由でこれに接続するため、他のリモートと同じドラッグ&ドロップのエクスプローラー、同期ジョブ、フォルダ比較機能をそのまま使えます — 別のアプリやコンテキストの切り替えは不要です。すでに90以上のクラウドストレージサービスを扱う1つのウィンドウに、バケットが1つ増えるだけです。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## NetEaseストレージをリモートとして接続する

NetEaseストレージの追加は、RcloneViewの標準的なS3互換セットアップに従います。新しいリモートを作成し、S3プロバイダータイプを選択して、Access Key ID、Secret Access Key、NetEaseのエンドポイントURLを入力します。ここにOAuthフローはありません — 認証情報はNetEaseのアカウントコンソールから直接取得し、Wasabi、MinIO、または他のS3互換サービスをRcloneViewで設定するのと同じ方法です。

保存すると、リモートは他の接続と同様にエクスプローラーパネルに表示されます。バケットを閲覧し、フォルダを掘り下げ、タブバーを使ってNetEaseと他のプロバイダーを切り替えられます — ストレージごとに専用クライアントを使うのではなく、すべてが1つのウィンドウ内に収まります。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneViewでNetEase S3互換リモートを追加する" class="img-large img-center" />

RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期します、Windows、macOS、Linuxで — NetEaseを接続するのに別のツールは必要ありません。

## NetEaseと他のクラウド間で同期する

リモートを設定したら、NetEaseを同期ジョブの他のエンドポイントと同じように扱います。RcloneViewの4ステップ同期ウィザードでソースまたは宛先として設定し、安定したバックアップパスのために一方向同期を選び、特定のファイルタイプやフォルダのみを含めたい場合はフィルターを追加します。詳細設定では、大量バッチのために同時実行数とマルチスレッド転送数を調整できます。

最初の同期の前にDry Runを実行してください — 実際のデータに触れることなく、何がコピーまたは削除されるかを正確にプレビューします。これは新しいクロスリージョンのパイプラインを構築する際に重要です。準備ができたら、Job Managerがジョブを保存して繰り返し実行でき、Job Historyがすべての実行を記録します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="NetEaseと他のリモート間のクラウド間転送ジョブ" class="img-large img-center" />

## NetEaseバケットを比較・バックアップする

Folder Compareは、NetEaseバケットとローカルフォルダまたは他のクラウドリモートを並べて表示し、片側にしか存在しないファイルやサイズが異なるファイルを表示します。移行が正しく完了したかを確認したり、スケジュールされたバックアップが実際にすべてを捉えたかを確認したりするのに役立ちます。

継続的な保護のために、1:N同期ジョブは同じローカルソースをNetEaseと2つ目のプロバイダーに同時にミラーリングできます — FREEライセンスで利用可能なので、1つのストレージ障害でコピーがなくなることを防げます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="NetEaseの転送記録を示すRcloneViewのジョブ履歴" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード** [rcloneview.com](https://rcloneview.com/src/download.html)から。
2. **NetEaseリモートを追加** S3互換プロバイダータイプの下で、Access Key、Secret Key、エンドポイントを使用して。
3. **Dry Run同期を実行** 実際に転送する前にファイル選択を確認するために。
4. **ジョブを保存** Job Managerに、今後の同期とバックアップをワンクリックで行えるように。

NetEaseがRcloneViewの他のリモートと並んで配置されると、地域ストレージはもはや別のワークフローではなく、同じエクスプローラーから管理する新しい宛先になります。

---

**関連ガイド:**

- [Qiniuクラウドストレージを管理 — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-qiniu-cloud-storage-sync-rcloneview)
- [China Mobileクラウドストレージを管理 — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-china-mobile-cloud-sync-backup-rcloneview)
- [Alibaba OSSを管理 — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
