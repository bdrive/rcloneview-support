---
slug: sync-google-drive-to-internet-archive-rcloneview
title: "Google DriveをInternet Archiveに同期する — RcloneViewによるデジタル保存"
authors:
  - tayson
description: "RcloneViewを使ってGoogle DriveのファイルをInternet Archiveにアーカイブし、長期的なデジタル保存を実現する方法を解説します。研究者、ジャーナリスト、教育者に最適です。"
keywords:
  - Google Drive Internet Archive sync
  - digital preservation RcloneView
  - archive Google Drive files
  - Internet Archive rclone GUI
  - long-term cloud backup
  - researcher data archiving
  - Google Drive backup Internet Archive
  - RcloneView digital archive
tags:
  - google-drive
  - internet-archive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google DriveをInternet Archiveに同期する — RcloneViewによるデジタル保存

> Internet Archiveはデジタルコンテンツを永久かつ無料で保存できるサービスです。RcloneViewを使えば、Google Driveのファイルを簡単にそこへプッシュして長期保存できます。

フィールドデータをアーカイブする研究者、原資料を保存するジャーナリスト、講義資料を管理する教育者は皆、同じ課題に直面しています。Google Driveは日常的な作業には便利ですが、永続的な保存を目的として設計されてはいません。一方、Internet Archive（archive.org）はまさにそのために存在します。コンテンツを無期限に保存し、長期にわたって公開（または非公開）でアクセス可能な状態を維持します。RcloneViewは両方のプロバイダーに接続し、コマンドラインを使わずにGoogle DriveのコンテンツをInternet Archiveに同期できるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Driveへの接続

RcloneViewを開き、**Remote Manager**に移動します。**New Remote**をクリックし、**Google Drive**を選択します。RcloneViewがOAuth認証のためにブラウザを開くので、Googleアカウントでサインインしてアクセスを許可してください。認証が完了すると、リモートがRemote Managerに表示されます。開いてDriveのファイルが見えることを確認してください。

**共有ドライブ（Shared Drive）**をアーカイブする必要がある場合は、マイドライブではなく特定の共有ドライブのルートを指すようにリモートを設定してください。RcloneViewのリモートの詳細設定でチームドライブオプションを確認してください。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Drive and Internet Archive remotes in RcloneView" class="img-large img-center" />

## Internet Archiveへの接続

**Remote Manager**に戻り、**New Remote**をクリックして**Internet Archive**を選択します。Internet Archiveはメールアドレス／パスワードによる認証情報（archive.orgアカウントのログイン情報）、またはarchive.orgのアカウント設定から取得できるS3互換のAPIキーを使用します。設定フォームにAccess KeyとSecret Key（Internet Archive用のS3 APIキー）を入力して保存します。

Internet Archiveのリモートを開いて接続を確認してください。archive.org上の既存のアイテムがトップレベルのエントリーとして表示されます。

## アーカイブジョブの設定

**Jobs**に移動し、**New Job**をクリックします。ソースとしてGoogle Driveを設定し、保存したいデータが含まれる特定のフォルダを選択します。送信先としてInternet Archiveリモートを設定し、ファイルの格納先となるアイテム識別子を指定します。

ジョブウィザードのステップ2では、アーカイブに適したオプションを設定します。

- **チェックサム検証**を有効にする — 保存においてデータの整合性は極めて重要です
- Internet Archiveの取り込みパイプラインに負荷をかけすぎないよう、同時転送数を適度な数（2〜4）に設定する
- まず**Dry Run**を有効にして、アップロードされる内容を正確に確認する

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to Internet Archive" class="img-large img-center" />

## 保存用同期の実行

Logタブでドライラン(Dry Run)の出力を確認したら、Dry Runを無効にしてジョブ全体を実行します。RcloneViewはGoogle DriveからInternet Archiveへ直接ファイルを転送します。ファイルサイズやアーカイブの取り込みキューの状況によっては、大容量のアップロードに時間がかかる場合がありますが、リアルタイムの進行状況パネルで常に状況を確認できます。

継続的な保存ワークフローのためには、繰り返しジョブ（スケジューリングにはPLUSライセンスが必要）を作成し、Google Driveフォルダに追加された新しいファイルが、例えば毎週といった頻度で自動的にアーカイブされるようにしましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Google Drive to Internet Archive transfers" class="img-large img-center" />

## ユースケース

- **学術研究者**: プロジェクト完了時にデータセットや作業文書をアーカイブ
- **ジャーナリスト**: 原資料やインタビュー録音を永久に保存
- **教育者**: 講義コンテンツやデジタル学習リソースをアーカイブ
- **非営利団体**: 助成金申請書、寄付者記録、組織の歴史を保存

Internet Archiveの永続性は、あらゆる商用クラウドサービスとは一線を画しています。そこに預けられたコンテンツは、個々の組織やサブスクリプションプランよりも長く存続するように設計されています。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote Manager**でOAuthを使ってGoogle Driveを接続します。
3. archive.orgアカウント設定から取得したS3 API認証情報を使ってInternet Archiveを接続します。
4. Google DriveからInternet Archiveへの同期ジョブを作成し、まずDry Runを実行してから、フルアーカイブを実行します。

RcloneViewは、アーキビストや研究者がGoogle Driveのコンテンツを永久記録として預けるための、信頼性が高く監査可能なワークフローを提供します。

---

**関連ガイド:**

- [RcloneViewによるクラウド間移行](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [RcloneViewによるチェックサム検証済みクラウド移行](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [RcloneViewで毎日のクラウドバックアップを自動化](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
