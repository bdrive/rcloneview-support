---
slug: manage-alibaba-oss-cloud-sync-backup-rcloneview
title: "Alibaba Cloud OSSを管理する — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "Alibaba Cloud OSSをRcloneViewに接続し、バケットを閲覧しながら、アジア太平洋および中国リージョンのワークロード向けに同期・バックアップジョブを実行する方法を解説します。"
keywords:
  - Alibaba Cloud OSS
  - RcloneView
  - S3互換ストレージ
  - クラウド同期
  - クラウドバックアップ
  - オブジェクトストレージ
  - アジア太平洋クラウド
  - rclone OSS
tags:
  - alibaba-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Alibaba Cloud OSSを管理する — RcloneViewでファイルを同期・バックアップ

> Alibaba Cloud OSSはアジア太平洋のワークロード向けを代表するオブジェクトストレージプラットフォームです。RcloneViewを使えば、コマンドラインを操作することなく、バケットの閲覧・同期・バックアップを簡単に行えます。

Alibaba Cloud Object Storage Service（OSS）は、中国またはアジア太平洋地域全域でデータ所在地要件を持つチームにとって、標準的なストレージプラットフォームです。大容量のメディアファイルをアーカイブする場合でも、アプリケーションデータをバックアップする場合でも、リージョン間でデータセットを同期する場合でも、RcloneViewはrcloneの実績あるOSSサポートの上に、洗練されたグラフィカルインターフェースを提供します。個別にrcloneをインストールする必要はありません — RcloneViewには組み込みのrcloneバイナリが同梱されています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Alibaba Cloud OSSをリモートとして追加する

RcloneViewを開き、サイドバーの**New Remote**ボタンをクリックします。プロバイダーの一覧から**S3 Compatible Storage**を選択し、続いてプロバイダーとして**Alibaba OSS**を選びます（表示されている場合は、専用の**Alibaba Cloud Object Storage**タイプを選んでも構いません）。**Access Key ID**、**Access Key Secret**、およびリージョンに対応した正しいOSSエンドポイントが必要です — 例えば、華東地域であれば`oss-cn-hangzhou.aliyuncs.com`、シンガポールであれば`oss-ap-southeast-1.aliyuncs.com`です。

認証情報を入力すると、RcloneViewは接続を検証し、すぐにバケットの一覧を表示します。バケットが特定のリージョンにある場合は、エンドポイントが一致していることを確認してください — これはOSSでの接続失敗の最も一般的な原因です。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Alibaba Cloud OSS remote in RcloneView" class="img-large img-center" />

## バケットの閲覧とファイル転送

リモートを追加すると、Alibaba OSSリモートがデュアルペインのファイルエクスプローラーに表示されます。ローカルファイルシステムと同じように、フォルダやオブジェクトを閲覧できます。ローカルドライブからOSSバケットへファイルをドラッグ＆ドロップしたり、OSSのプレフィックス間でオブジェクトを直接移動したりできます。RcloneViewはリアルタイムの転送進捗を表示するため、大容量アップロードの状況を常に把握できます。

複数リージョンにまたがる複数のOSSバケットを扱うチームでは、各リージョンのエンドポイントを個別のリモートとして追加し、すべてを一つのRcloneViewウィンドウから管理できます。これにより、複数のコマンドラインセッションを行き来することなく、リージョンをまたいだデータ移動が容易になります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer using RcloneView" class="img-large img-center" />

## 同期・バックアップジョブの実行

OSSワークフローにおけるRcloneViewの真価は、同期ジョブシステムにあります。**Job Wizard**を使えば、任意のローカルフォルダやクラウドリモートからOSSバケットへの同期ジョブを、4つのガイド付きステップで作成できます。**ドライラン**オプションを使うと、実行前にどのファイルが転送されるかをプレビューできます — 大規模なOSSバケットを扱う際には欠かせない機能です。

RcloneViewの**1:Nシンク**機能を使えば、一つのソースを複数のOSSバケットへ同時に同期でき、OSSリージョン間で冗長コピーを維持するのに役立ちます。**Job Manager**はすべての実行中ジョブを追跡し、**Job History**は監査のために過去の転送の完全なログを提供します。PLUSライセンス保有者は、これらのジョブを定期タイマーでスケジュール設定でき、手動操作なしでバックアップを自動実行できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job for Alibaba OSS in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **New Remote**をクリックし、**S3 Compatible Storage**を選択して、プロバイダーとして**Alibaba OSS**を選びます。
3. **Access Key ID**、**Access Key Secret**、およびOSSのリージョンエンドポイントを入力します。
4. デュアルペインのエクスプローラーでバケットを閲覧し、ファイルをドラッグして転送します。
5. **Job Manager**を開き、ウィザードを使って同期ジョブを作成し、初回の実際の同期を実行する前にドライランを行います。

Alibaba Cloud OSSはあらゆるアジア太平洋のデータワークフローに自然に組み込むことができ、RcloneViewはコマンドラインの壁を取り払うことで、チーム全体が自信を持ってストレージを管理できるようにします。

---

**関連ガイド:**

- [Amazon S3を管理する — RcloneViewで同期・バックアップ](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Cloudflare R2を管理する — RcloneViewでクラウド同期](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [RcloneViewでS3、Wasabi、R2を一元管理](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
