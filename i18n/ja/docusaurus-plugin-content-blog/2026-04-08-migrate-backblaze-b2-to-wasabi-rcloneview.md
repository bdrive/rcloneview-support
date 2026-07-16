---
slug: migrate-backblaze-b2-to-wasabi-rcloneview
title: "RcloneViewでBackblaze B2からWasabiへ移行する"
authors:
  - tayson
description: "RcloneViewを使ってBackblaze B2からWasabiへ移行する方法。料金体系の比較、両方のリモートの設定、データ転送、移行の検証までステップごとに解説します。"
keywords:
  - rcloneview
  - backblaze b2 to wasabi
  - migrate b2 to wasabi
  - wasabi cloud migration
  - backblaze migration tool
  - s3 compatible migration
  - cloud storage migration
  - wasabi no egress fees
  - b2 data transfer
  - object storage migration gui
tags:
  - backblaze-b2
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでBackblaze B2からWasabiへ移行する

> Backblaze B2はストレージ費用が低い一方、エグレス料金やAPI料金が積み重なることがあります。**RcloneView**を使えば、Wasabiの定額料金への移行をシンプルかつ検証可能な形で行えます。

Backblaze B2とWasabiは、コストを重視するチームに人気のS3互換オブジェクトストレージプロバイダーです。B2はGBあたりのストレージ料金が低い（$0.006/GB/月）ことで知られていますが、その料金体系にはエグレス料金（$0.01/GB）とトランザクション料金が含まれており、読み取りの多いワークロードでは思わぬ費用が発生することがあります。Wasabiは定額料金（$0.0069/GB/月）を採用しており、エグレス料金やAPI料金が一切かからないため、コストを完全に予測可能にできます。RcloneViewは、これら2つのS3互換プロバイダー間の移行を、CLIスクリプトを書く必要のないビジュアルインターフェースで処理します。

このガイドでは、料金の違いを理解することから転送後にすべてのオブジェクトを検証するところまで、移行の全工程を解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Backblaze B2からWasabiへ移行する理由

移行の判断は、たいてい料金の予測可能性に行き着きます。B2のストレージ料金はWasabiよりやや低めですが、エグレス料金やClass B/Cのトランザクションを考慮すると、総コストがWasabiの定額料金を上回ることが多く、特にデータを頻繁に読み取るワークロードではその傾向が顕著です。

例を挙げましょう。B2で10TBのストレージを利用すると月額$60かかります。そのデータのうち5TBを毎月ダウンロードする場合（メディア配信、ビルドの配布、分析処理など）、エグレス料金が$50追加されます。さらに、ファイルの一覧取得やダウンロードに伴うClass Bトランザクションの料金も加算されます。一方、Wasabiでは同じ10TBの利用で、読み取りデータ量やAPI呼び出し回数にかかわらず、月額合計$69で済みます。

Wasabiには最低90日間のストレージ保持ポリシーもあり、90日以内にオブジェクトを削除すると、残りの期間分の料金が日割りで請求されます。短期間しか保存しないデータを扱う場合は、この点を計画に織り込んでおきましょう。

## RcloneViewでBackblaze B2を設定する

リモートマネージャーを開き、Backblaze B2のリモートを追加します。ネイティブのB2 APIとS3互換APIのどちらも利用できます。移行を目的とする場合は、転送元・転送先で同じ転送ロジックをRcloneViewが使えるため、S3互換エンドポイントの利用をおすすめします。

B2のApplication Key IDとApplication Keyを入力します。バケット単位のキーを利用している場合は、よりセキュリティを高めるためにそれを使用してください。転送元としては読み取り権限のみで十分です。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 remote in RcloneView" class="img-large img-center" />

## RcloneViewでWasabiを設定する

WasabiをS3互換リモートとして追加します。リモートマネージャーで**Amazon S3 Compatible**を選択し、以下を設定します。

- **プロバイダー**: Wasabi
- **アクセスキー**と**シークレットキー**: Wasabiコンソールから生成
- **リージョン**: ユーザーに最も近いリージョンを選択（us-east-1、eu-central-1、ap-northeast-1など）
- **エンドポイント**: 選択したリージョンに基づいて自動設定

転送先バケットは、Wasabiコンソールから、またはRcloneViewのエクスプローラーから作成します。レイテンシを最小限に抑えるため、主なユーザー層と同じリージョンを選択してください。

## 移行を実行する

2ペインのエクスプローラーを開き、左側にB2、右側にWasabiを表示します。移行したいB2のバケットと、転送先のWasabiバケットへ移動します。

完全な移行を行うには、同期ジョブを作成します。RcloneViewはB2バケット内のすべてのオブジェクトを列挙し、Wasabiの転送先と比較して、不足しているファイルや変更されたファイルのみを転送します。両プロバイダーともETag経由でMD5チェックサムをサポートしているため、ファイル比較は高速かつ正確です。

転送における重要な検討事項は次のとおりです。

- **B2からのエグレス**: 移行中にB2のエグレス料金が発生します。コストを抑えるには、該当する場合はCloudflareとのBackblaze無料エグレスパートナーシップや、B2バンド幅アライアンスの利用を検討してください。
- **並列転送**: B2とWasabiのどちらも高い並列度をサポートしています。最適なスループットを得るには、並列転送数を8〜16に設定してください。
- **大容量ファイル**: 両プロバイダーともマルチパートアップロードをサポートしています。RcloneViewは、しきい値を超えるファイルに対して自動的にマルチパート転送を使用し、大容量オブジェクトの確実な転送を実現します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 to Wasabi in RcloneView two-pane explorer" class="img-large img-center" />

## 転送の進行状況を監視する

リアルタイム監視ダッシュボードには、転送キュー内のすべてのファイルの状態が表示されます。ファイルごとの進行状況、全体の完了率、現在の転送速度を確認できます。ネットワークの状況が変化した場合は、転送を一時停止して後で再開できます。RcloneViewは中断した箇所から転送を再開します。

数テラバイト規模の移行では、転送に数時間から数日かかることがあります。RcloneViewのログ機能により、何が転送され、何がスキップされ、どのようなエラーが発生したかを完全に記録できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring B2 to Wasabi migration progress in RcloneView" class="img-large img-center" />

## 移行を検証する

転送が完了したら、B2の転送元とWasabiの転送先の間で比較操作を実行します。RcloneViewは、片方にのみ存在するファイルや、サイズやチェックサムが異なるファイルを一覧表示します。比較結果に差分がなければ、移行が成功したことを確認できます。

以下の点に注意してください。

- **空のディレクトリ**: オブジェクトストレージには本来のディレクトリという概念はありません。B2とWasabiはどちらもプレフィックスベースの「フォルダ」を使用します。RcloneViewはこれを一貫して処理しますが、アプリケーションのロジックがディレクトリマーカーに依存していないか確認してください。
- **メタデータの保持**: 標準的なメタデータ（content-type、last-modifiedなど）は、S3互換の転送中に保持されます。カスタムメタデータ（x-amz-meta-*）もRcloneViewによって転送されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying B2 to Wasabi migration with compare in RcloneView" class="img-large img-center" />

## 移行後のクリーンアップ

移行を検証し、すべてのアプリケーションのエンドポイントをB2からWasabiへ更新したら、次の手順を行います。

1. **DNSとアプリケーション設定の更新**: サービスの向き先を新しいWasabiエンドポイントに変更します。
2. **最終同期の実行**: 移行期間中にB2へ追加されたファイルを取りこぼしなく反映します。
3. **B2データを一時的に保持**: ロールバック期間（通常2〜4週間）はB2バケットを維持しておきます。
4. **B2データの削除**: Wasabi側ですべて正常に動作していることを確認したら、ストレージ料金が発生し続けないようB2バケットを削除します。

保持戦略を計画する際は、Wasabiの最低90日間のストレージ保持ポリシーを忘れないでください。90日以内にWasabiからオブジェクトを削除すると、90日分の料金が全額請求されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートマネージャーでBackblaze B2とWasabiをS3互換リモートとして追加します。
3. 2ペインのエクスプローラーを使ってB2からWasabiへの同期ジョブを実行し、進行状況をリアルタイムで監視します。
4. 比較機能で移行を検証し、アプリケーションのエンドポイントを更新します。

B2とWasabiはどちらも優れたオブジェクトストレージプロバイダーですが、コストの予測可能性が重要な場合はWasabiの定額モデルが有利です。そして、RcloneViewを使えばその切り替えも手間なく行えます。

---

**関連ガイド:**

- [AWS S3およびS3互換ストレージの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [フォルダの内容を比較する](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
