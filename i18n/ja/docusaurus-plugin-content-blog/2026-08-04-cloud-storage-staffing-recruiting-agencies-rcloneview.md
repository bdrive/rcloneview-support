---
slug: cloud-storage-staffing-recruiting-agencies-rcloneview
title: "人材派遣・採用代理店向けクラウドストレージ — RcloneViewで候補者データを保護"
authors:
  - tayson
description: "人材派遣・採用代理店向けに、RcloneViewで支店やクラウドアカウント全体の履歴書、身元調査、クライアントファイルを一元管理します。"
keywords:
  - 人材派遣代理店 クラウドストレージ
  - 採用代理店 ファイル管理
  - 候補者データ保存
  - 履歴書データベース クラウド
  - 安全な候補者記録
  - 人事文書バックアップ
  - 採用代理店バックアップ
  - マルチクラウド人材派遣会社
  - 候補者個人情報保護
  - RcloneView 採用
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 人材派遣・採用代理店向けクラウドストレージ — RcloneViewで候補者データを保護

> 支店やリクルーターが実際に使用するすべてのクラウドアカウントで、履歴書、身元調査結果、クライアント契約書を整理し、バックアップ状態に保ちます。

支店が5つある中規模の人材派遣代理店では、各リクルーターや支店がたまたま標準化したクラウドごとに候補者の履歴書が散らばっていることがよくあります — ある支店はGoogle Drive、別の支店はOneDrive、古いアーカイブは今もDropboxに残っている、といった具合です。どの候補者ファイルのバージョンが最新か把握できなくなったり、支店のSharePointサイトのバックアップを怠ったりすると、実際のコンプライアンスおよびクライアント関係のリスクが生じます。RcloneViewは、すべての支店を同じプラットフォームに統一することなく、これらすべてのアカウントにわたって候補者およびクライアントの記録を閲覧、同期、バックアップできる単一のウィンドウを代理店に提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 支店のクラウド全体で候補者記録を一元化

RcloneViewのマルチパネルエクスプローラーは最大4つのリモートを並べて開くことができるため、採用オペレーション担当者はアプリケーションを切り替えることなく、支店のGoogle Driveを本社のOneDriveの隣で閲覧できます。RcloneViewはWindows、macOS、Linuxの1つのウィンドウから90以上のプロバイダーをマウントおよび同期するため、支店やクライアント管理ポータルが長年にわたって異なるプラットフォームで構築されてきた場合に特に重要です。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting multiple branch office cloud accounts in RcloneView" class="img-large img-center" />

フォルダ比較(Folder Compare)は、一方の支店のクラウドにのみ存在する候補者フォルダを強調表示するため、数か月前から履歴書データベースの同期を停止している支店を簡単に見つけることができます。

## 機密性の高い候補者およびクライアントデータの保護

履歴書、身元調査結果、給与履歴は、平文のままクラウドフォルダに置いておくべきではない典型的な個人情報です。RcloneViewのCrypt仮想リモートは、ファイルがローカルマシンを離れる前にファイル名とコンテンツを暗号化するため、クラウドストレージにバックアップされた候補者データベースは、その後基盤となるクラウドアカウントが侵害された場合でも、保存時には暗号化されたままになります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing candidate record folders between branch offices in RcloneView" class="img-large img-center" />

同期ウィザードのカスタムフィルターを使用すると、すべてのバックアップ先に重複して保存すべきでないファイルタイプを除外することもでき、各同期ジョブの範囲を狭く監査可能な状態に保てます。

## すべての支店のバックアップをスケジュールする

5つ以上の支店を手動でバックアップするのはスケールしません。Job Managerを使用すると、代理店は支店ごとに同期ジョブを保存し、PLUSライセンスではcrontab形式のスケジュールを設定して、誰もボタンをクリックすることを覚えていなくても夜間バックアップが実行されるようにできます。作業履歴(Job History)は、開始時刻、転送されたファイル、完了ステータスなどの記録を提供するため、クライアントから提出された候補者データがどのように保護されているか尋ねられた際に役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly branch office backups in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. 各支店のクラウドアカウントを個別のリモートとして接続します。
3. 候補者の個人情報(PII)を含むフォルダをバックアップする前に、Cryptリモートを設定します。
4. 支店ごとにスケジュール同期ジョブを作成し、作業履歴を定期的に確認します。

すべての支店のクラウドアカウントにわたる一貫した暗号化バックアップにより、散在していた候補者データベースが監査可能で復旧可能な資産に変わります。

---

**関連ガイド:**

- [人事部門向けクラウドストレージ — RcloneViewでHRファイルを安全かつ効率的に管理](https://rcloneview.com/support/blog/cloud-storage-human-resources-rcloneview)
- [クラウドバックアップの暗号化 — RcloneView Cryptリモートガイド](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [RcloneViewクラウドストレージセキュリティチェックリスト](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
