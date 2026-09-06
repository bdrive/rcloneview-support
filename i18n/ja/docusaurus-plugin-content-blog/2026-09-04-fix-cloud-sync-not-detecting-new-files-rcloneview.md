---
slug: fix-cloud-sync-not-detecting-new-files-rcloneview
title: "新規ファイルを検出しないクラウド同期の修正 — RcloneViewでの解決方法"
authors:
  - jay
description: "キャッシュ設定、フィルター、リフレッシュ動作を調整して、RcloneViewで新規ファイルや最近変更されたファイルを見逃す同期ジョブを修正します。"
keywords:
  - クラウド同期 新規ファイル検出しない
  - rcloneview 同期 ファイル欠落
  - 同期ジョブ 更新されない 修正
  - ディレクトリキャッシュ 古いリスト
  - rcloneview トラブルシューティング
  - クラウド同期 リフレッシュ問題
  - 新規ファイルが同期されない
  - rclone 同期検出の修正
  - ジョブが変更を反映しない
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 新規ファイルを検出しないクラウド同期の修正 — RcloneViewでの解決方法

> 同期ジョブがエラーなく完了したのに新しいファイルが残っている場合、原因はほぼ常に接続の不具合ではなく、古いフォルダー一覧です。

よくあるサポートパターンがあります。同期ジョブはエラーなく完了するのに、数分前にソースフォルダーに追加されたファイルが宛先に一切表示されないというものです。データ損失のように見えますが、ほとんどの場合、ジョブはリモートの現在の状態ではなく、キャッシュされたディレクトリ一覧を読み込んだだけです。RcloneViewは、当て推量なしにこれを診断して修正するためのツールを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Explorerビューが単に古いだけかを確認する

ジョブ設定に手を付ける前に、ファイルが単にビューから隠れているだけでなく、実際に同期から欠落しているかを確認してください。Explorerパネルでソースリモートを開き、F5(macOSではCmd+R)を押して強制的にReloadします。ファイルが追加されてからリフレッシュしていない場合、RcloneViewのファイル一覧はフォルダーの古いスナップショットを保持している可能性があり、これだけで驚くほど多くの「ファイル欠落」の報告が解決します。

手動でリフレッシュした後にファイルが表示されるものの、同期ジョブの直近の実行ではまだスキップされていた場合、問題はExplorerビューではなく、ジョブ自体のフィルタリングやキャッシュの動作にあります。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneViewで新しいスキャンを強制するために同期ジョブを手動実行する" class="img-large img-center" />

## フィルタールールとMax File Age設定を確認する

同期ウィザードのステップ3ではMax File Ageフィルターを設定でき、ジョブをテストした後に厳しい値をそのまま残してしまいがちです。Max File Ageが狭すぎると、その範囲外のファイル — 以前のクラウドコピーから引き継いだ古いタイムスタンプを持つ、一部の新しく追加されたファイルを含む — が実行から静かに除外されます。該当する同期のEdit Jobを開き、Filtering Settingsステップで、名前、拡張子、パスによって新規ファイルを除外している可能性のあるMax File Age、Max File Size、またはカスタムフィルタールールがないか確認してください。

RcloneViewはWindows、macOS、Linuxで、1つのウィンドウから90以上のプロバイダーをマウントおよび同期できるため、ローカルからクラウドへのジョブでもクラウド間のジョブでも同じフィルタリングロジックが適用されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="新規ファイルを除外する可能性がある同期フィルター設定を確認する" class="img-large img-center" />

## マウントディレクトリのキャッシュ遅延を除外する

「欠落した」ファイルが直接リモートを閲覧する代わりにマウントされたドライブの背後にある場合、マウント設定のDir Cache Time設定が通常の原因です。ディレクトリキャッシュ時間を長くすると閲覧は速くなりますが、そのキャッシュが期限切れになるまで、マウントされたビューは他の場所で追加されたファイルを反映しないことも意味します。鮮度が生の閲覧速度より重要なリモートについては、Mount ManagerでDir Cache Timeを下げるか、手動でアンマウントして再マウントし、即座にリフレッシュを強制してください。

その後、同期ジョブでDry Runを実行してください — 現在新規と認識されているファイルの一覧が正確に表示されるため、実際の転送を実行する前に修正内容を確認できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="検出設定を修正した後、正しく実行された同期を示すジョブ履歴" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**。
2. ソースリモートで強制的にReload(F5)し、古いExplorerビューの可能性を排除します。
3. Edit Jobを開き、Filtering Settingsで新規ファイルを除外しているMax File Ageやカスタムルールがないか確認します。
4. マウントされたリモートの場合は、Mount ManagerでDir Cache Timeを下げてから再マウントし、Dry Runでジョブを再実行して確認します。

ほとんどの「ファイル欠落」同期の問題は、実際の転送失敗ではなく、キャッシュされた一覧や見落としたフィルターに起因します。RcloneViewのDry RunとJob Historyを使えば、修正が機能したかを素早く確認できます。

---

**関連ガイド:**

- [フィルタールール — RcloneViewでの選択的同期](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run — RcloneViewでクラウド同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [スケジュール同期が実行されない問題の修正 — RcloneViewでの解決方法](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
