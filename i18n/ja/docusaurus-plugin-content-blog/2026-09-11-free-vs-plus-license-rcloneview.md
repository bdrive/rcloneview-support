---
slug: free-vs-plus-license-rcloneview
title: "FREE と PLUS ライセンス — RcloneView の機能比較"
authors:
  - alex
description: "RcloneView の FREE と PLUS ライセンスの機能を並べて比較しましょう — スケジューリング、マルチウィンドウ、自動マウント、フィルター付き比較まで — 適切なプランを選ぶために。"
keywords:
  - RcloneViewライセンス
  - RcloneView FREE vs PLUS
  - RcloneView PLUS機能
  - スケジュール済みクラウド同期
  - マルチウィンドウファイルマネージャー
  - 起動時の自動マウント
  - フィルター付きフォルダ比較
  - RcloneViewライセンス比較
  - クラウド同期自動化
  - クロスプラットフォームファイルマネージャー
tags:
  - RcloneView
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# FREE と PLUS ライセンス — RcloneView の機能比較

> クラウドストレージのワークフローを構築する前に、各RcloneViewライセンスが何を解放するのかを正確に把握しましょう。

FREEとPLUSライセンスのどちらを選ぶかは、推測に頼るべきではありません。RcloneViewは機能セットを明確に分けています:FREEライセンスはすでに90以上のプロバイダーにわたる完全なファイル管理、同期、マウントをカバーしており、PLUSはパワーユーザーやチーム向けの自動化とマルチインスタンス機能を追加します。このガイドでは各ティアに何が含まれているかを詳しく説明し、実際の作業方法に合ったライセンスを選べるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## FREEライセンスがすでに含んでいるもの

FREEライセンスは機能を削ったお試し版ではありません — 完全な日常使いのツールセットです。クラウドドライブのマウントとアンマウント、完全なファイルエクスプローラー操作(コピー、移動、削除、名前変更)、基本的なFolder Compare、そしてSync & Job Management システム全体が、すべて無料で含まれています。つまり、1:N同期(1つのソースを複数の宛先にミラーリング)、詳細ログ付きのJob History、同期実行前のDry Runプレビュー、ジョブ設定のエクスポート/インポートは、すべてFREEで動作します。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed sync jobs on the FREE license" class="img-large img-center" />

マウント専用ツールとは異なり、RcloneViewはFREEライセンスでも同じ90以上のクラウドプロバイダーにわたって同期やフォルダ比較を行うことができ、サービスに応じてOAuthまたは認証情報ベースの設定でRemote Managerを通じて接続します。

## PLUSが解放する機能

PLUSは、RcloneViewを無人で実行したり、複数のコンテキストで同時に実行したりする必要があるユーザー向けに作られています。目玉機能はSchedule-Based Syncです:分、時、曜日、日、月のフィールドを使ったcrontab形式のスケジューリングに加え、実行前に次回の実行時刻をプレビューできるスケジュールシミュレーターが含まれます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a crontab-style sync schedule in RcloneView PLUS" class="img-large img-center" />

スケジューリングに加えて、PLUSはAuto Mount on Startup(マシンが起動した瞬間にマウント済みドライブが準備完了)、Auto Start Schedule on Startup、それぞれ独自の状態を持つ独立したRcloneViewインスタンスを実行できるMulti-Windowサポート、フォルダ名やファイルタイプで比較を制限するFolder Compare with Filterを追加します。

## ワークフローに合ったライセンスの選び方

手動で転送を実行し、ファイルマネージャーのようにクラウドストレージを閲覧し、たまに比較や同期を実行する程度であれば、FREEでワークフロー全体をカバーできます。アプリを開かずにスケジュールどおりに同期ジョブを実行したい、再起動後にドライブを自動的にマウントしたい、あるいは別々のプロジェクトのために複数の独立したRcloneViewウィンドウが必要な場合は、PLUSが手動の手間を取り除きます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job manually from the RcloneView Job Manager" class="img-large img-center" />

## はじめに

1. **RcloneViewをダウンロード**: [rcloneview.com](https://rcloneview.com/src/download.html)から入手してください。
2. リモートを設定し、手動で同期またはマウントを実行して、FREEの機能セットが日常の利用に合っているか確認してください。
3. 毎日同じ時間に同じ転送を繰り返していることに気づいたら、スケジュールを組んでPLUSのスケジューリングが合うかどうか試してみてください。
4. どのティアがワークフローに合うか決めたら、Help > Activate Licenseでライセンスキーを有効化してください。

実際の習慣にライセンスを合わせること — その逆ではなく — が、クラウドストレージの設定をシンプルで予測可能に保ちます。

---

**関連ガイド:**

- [スケジューリングのベストプラクティス — RcloneViewのCronとリトライ](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [RcloneViewのマルチウィンドウ並列Explorer](https://rcloneview.com/support/blog/multi-window-parallel-explorer-rcloneview)
- [RcloneViewのフィルター付きFolder Compare](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
