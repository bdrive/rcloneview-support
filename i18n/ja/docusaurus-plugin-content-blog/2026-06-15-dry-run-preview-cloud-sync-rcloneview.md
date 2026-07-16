---
slug: dry-run-preview-cloud-sync-rcloneview
title: "ドライラン プレビュー — RcloneView で変更を確定する前にクラウド同期をテストする"
authors:
  - tayson
description: "RcloneView のドライランモードを使用して、クラウド同期を実行する前にコピーまたは削除されるファイルをプレビューしましょう。大容量または機密性の高い転送における必須の安全確認です。"
keywords:
  - dry run cloud sync
  - test sync before running
  - RcloneView dry run
  - preview cloud sync changes
  - simulate cloud backup
  - cloud sync safety check
  - rclone dry run GUI
  - avoid accidental file deletion
  - cloud sync simulation
  - verify sync before commit
tags:
  - feature
  - tips
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ドライラン プレビュー — RcloneView で変更を確定する前にクラウド同期をテストする

> 何テラバイトものデータを同期したり、宛先からファイルを削除したりする前に、RcloneView のドライランモードを使って、ファイルを1つも移動させることなく、予定されているすべての変更をプレビューしましょう。

クラウド同期ワークフローにおける最もコストの高いミスの1つは、ジョブが重要なファイルを削除した、新しいバージョンを上書きした、あるいは意図していなかった数千のファイルを取り込んでしまったことに、事後になってから気づくというものです。RcloneView に組み込まれたドライラン機能は、このリスクを完全に取り除きます。実行前に同期操作をシミュレートすることで、どのファイルがコピーされ、どのファイルが削除されるのかを正確に確認でき、実際の転送が始まる前にジョブ設定に対する完全な確信を得られます。これは、新しいジョブを初めて設定するときや、既存のジョブのフィルタルールを調整した後に特に役立ちます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ドライランで確認できること

RcloneView でドライランを実行すると、ジョブエンジンは設定されたソースと宛先に対して完全な同期ロジックを実行しますが、実際のファイル操作は一切行いません。結果として、2つの重要なカテゴリを含む詳細なプレビューが表示されます。ソースから宛先へ**コピーされる予定のファイル**と、ソースに合わせるために宛先から**削除される予定のファイル**です。承認する前に、操作リスト全体をスクロールして各項目を確認できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing planned file operations in a dry run simulation in RcloneView" class="img-large img-center" />

これは特に、宛先がソースを正確にミラーリングするように変更される一方向同期ジョブで重要になります。ファイルが最近ソースフォルダから削除されたものの、宛先にはまだ必要な場合、ドライランはその削除が実行される前に予定されている削除を明らかにします。たとえば、50万件の案件書類を Amazon S3 にバックアップしている法律事務所は、実行前にスケジュールされた各バッチを確認することで大きな恩恵を受け、誤ったデータ損失を回避できます。

## RcloneView でドライランを実行する方法

RcloneView でのドライランの使用は簡単です。**ジョブマネージャー**で同期ジョブを作成または開き、ソース、宛先、そしてファイルタイプの除外、最大ファイルサイズ、フォルダの深さ制限などのフィルタオプションを設定します。テストの準備ができたら、通常の実行ではなく**ドライラン**オプションを選択します。RcloneView はシミュレーションを実行し、予定されているすべての操作の一覧を「転送」タブに表示します。実際の実行を意図的に開始するまで、データは一切移動しません。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a dry run simulation for a cloud sync job in RcloneView" class="img-large img-center" />

ドライランの結果を確認した後は、フィルタ設定を調整し、必要な回数だけシミュレーションを繰り返すことができます。予定された操作リストが期待通りになった時点で初めて、実際の同期を実行するべきです。この反復的なアプローチは、複数のクラウドプロバイダーにまたがる大規模なディレクトリ構造に対して複雑なフィルタルールを扱う場合に特に有用です。

## ジョブ履歴でドライラン結果を確認する

RcloneView は、すべてのドライランを**ジョブ履歴**ビューに記録し、実際のジョブ実行と並んでシミュレーション実行であることが明確に示されます。シミュレートされたファイル数、予測される合計サイズ、経過時間、そして表面化した警告やエラーを確認でき、変更を確定する前にジョブの動作全体を把握できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dry run simulation recorded in RcloneView job history with status details" class="img-large img-center" />

定期的なスケジュールバックアップを実行しているチームにとって、設定変更後にドライランを実行することは譲れない安全対策です。データは一切転送されず、ストレージも消費されないためコストはかかりませんが、同期が完了して初めて発覚するような、取り返しのつかないミスを防ぐことができます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. **ホームタブ > 同期**を開き、ソースと宛先を指定して新しい同期ジョブを設定します。
3. ジョブマネージャーで**ドライラン**モードを選択し、予定されているすべてのファイル操作をプレビューします。
4. コピーリストと削除リストを確認し、必要に応じてフィルタを調整してから、自信を持って実際の同期を実行します。

ドライランは、慎重で元に戻せるクラウド操作と、コストのかかる不意の事態とを分ける、最もシンプルな習慣です。

---

**関連ガイド:**

- [RcloneView によるフィルタルールと選択的同期](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView によるチェックサム検証付きクラウド移行](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [RcloneView で毎日のクラウドバックアップを自動化する](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
