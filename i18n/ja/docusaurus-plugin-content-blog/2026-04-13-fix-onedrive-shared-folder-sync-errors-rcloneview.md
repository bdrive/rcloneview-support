---
slug: fix-onedrive-shared-folder-sync-errors-rcloneview
title: "OneDriveの共有フォルダ同期エラーを修正 — RcloneViewで解決"
authors:
  - tayson
description: "RcloneViewでOneDriveの共有フォルダ同期の失敗をトラブルシューティングします。共有OneDriveコンテンツの同期時に発生する権限エラー、共有ドライブの欠落、アクセス問題を修正します。"
keywords:
  - OneDrive shared folder sync error
  - OneDrive sync fix
  - OneDrive shared drive RcloneView
  - fix OneDrive permissions
  - OneDrive shared folder access
  - Microsoft OneDrive troubleshooting
  - OneDrive sync problem
  - RcloneView OneDrive error
  - OneDrive for Business sync
  - cloud sync troubleshooting
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDriveの共有フォルダ同期エラーを修正 — RcloneViewで解決

> RcloneViewでOneDriveの共有フォルダ同期の失敗を診断・修正します — 権限エラーやショートカットの欠落から、組織のOneDrive for Businessアクセス問題まで。

OneDriveの共有フォルダシステムには、多くの同期ツールをつまずかせる独特の仕様があります。同僚から共有されたフォルダは、自分自身のOneDriveストレージとは異なる挙動をします — APIでの見え方が異なり、rcloneでアクセスするには特定の設定が必要です。RcloneViewが共有フォルダを認識できない、または同期できない場合、根本原因はほぼ常にいくつかのよく知られた問題のいずれかです。このガイドでは、最も一般的な共有フォルダの同期失敗とその解決方法について説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 共有フォルダがRcloneViewに表示されない

OneDriveは共有フォルダを自分自身のストレージとは異なる方法で表示します。他のユーザーのOneDriveから共有されたフォルダは、Webインターフェースの「共有」セクションに表示されますが、自分のOneDriveにショートカットとして追加していない限り、APIではルートフォルダの一部として自動的には扱われません。

**修正方法:** OneDriveのWebインターフェースで、同期したい共有フォルダを見つけ、「マイファイルへのショートカットを追加」をクリックします。これにより、標準のAPIでアクセス可能な自分自身のOneDriveルートにショートカットが作成されます — その結果、RcloneViewでも表示・同期が可能になります。ショートカットを追加した後、F5を押すか「再読み込み」をクリックしてRcloneViewのファイルエクスプローラーを更新してください。

<img src="/support/images/en/blog/new-remote.png" alt="OneDrive shared folder access configuration in RcloneView" class="img-large img-center" />

## 共有フォルダの同期時に発生する権限エラー

共有OneDriveフォルダの同期時に403 Forbiddenや「アクセスが拒否されました」というエラーが発生する場合、通常は次の3つの状況のいずれかを示しています。

1. **読み取り専用の共有:** フォルダの所有者が閲覧のみの権限で共有しています。書き込みや削除はできません。書き込みアクセスが必要な方向で同期しようとしている場合は、フォルダの所有者に編集権限があるかを確認してください。

2. **ゲストアクセスの制限:** OneDrive for Businessの外部（ゲスト）アカウントは、APIアクセスが制限されています。組織の共有ポリシーによって一部の同期操作がブロックされることがあります。

3. **条件付きアクセスポリシー:** 企業のMicrosoft 365テナントでは、非準拠のデバイスやアプリケーションからのAPIアクセスを制限する条件付きアクセスポリシーが適用されている場合があります。ログインに成功した後も認証失敗が繰り返し発生する場合は、IT管理者に問い合わせてください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Diagnosing OneDrive shared folder permission errors in RcloneView" class="img-large img-center" />

## OneDrive for Businessの共有ライブラリの問題

SharePointを基盤とするライブラリ（OneDriveフォルダとして公開されるSharePointドキュメントライブラリを含む）は、RcloneViewで別のリモート設定が必要です。個人用OneDriveリモートを使用する代わりに、サイトのURLを指すSharePointリモートを追加するか、適切なSharePointサイト設定でOneDrive for Businessを使用してください。

OneDrive for Businessでパス長エラーが頻繁に発生するチームでは、rcloneの`--onedrive-no-versions`フラグを使用することで、同期操作のAPIオーバーヘッドを削減できる場合があります。カスタムフラグは、RcloneViewの設定 > 組み込みRclone > グローバルRcloneフラグから追加できます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing OneDrive sync job history and error logs in RcloneView" class="img-large img-center" />

## 古くなったトークンの再認証

OneDriveのOAuthトークンは、特にパスワード変更、多要素認証の更新、アカウントのセキュリティイベントの後に、期限切れや無効になることがあります。トークンが古くなると、同期中に401 Unauthorizedエラーが繰り返し発生します。

再認証するには、RcloneViewの「リモート」タブでリモートマネージャーを開き、対象のOneDriveリモートを選択して編集します。編集ワークフローによりOAuthフローの再実行が促され、新しい認証のためにブラウザウィンドウが開きます。新しいログインを完了した後、更新されたリモートを保存し、同期ジョブを再試行してください。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 共有フォルダについては、まずOneDriveのWebインターフェースで「マイファイルへのショートカット」として追加してください。
3. 同期が必要なフォルダに対して、正しい権限（閲覧のみではなく編集権限）があることを確認してください。
4. 401エラーが繰り返し発生する場合は、OneDriveリモートを再認証してください。

OneDriveの共有フォルダに関する問題の大半は、所有フォルダ・共有フォルダ・ショートカットフォルダに対するMicrosoftのAPIレベルでの区別に起因します — これを理解することで、トラブルシューティングがはるかに直接的になります。

---

**関連ガイド:**

- [RcloneViewでOneDriveのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [OneDrive同期エラーを修正: RcloneViewでのDeltaトークンとパス長](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)
- [RcloneViewでOAuthトークン期限切れによるクラウド同期エラーを修正する](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
