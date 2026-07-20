---
slug: sync-two-google-drive-accounts-rcloneview
title: "2つのGoogleドライブアカウントを同期する方法 — RcloneViewで個人用と仕事用のドライブを同期"
authors:
  - tayson
description: "多くの人が個人用、仕事用、学校用など複数のGoogleドライブアカウントを持っています。RcloneViewを使って、ローカルに何もダウンロードせずにアカウント間でファイルを同期する方法を学びましょう。"
keywords:
  - sync two google drive accounts
  - google drive to google drive
  - transfer between google drives
  - multiple google drive sync
  - google drive personal to work
  - sync google accounts
  - google drive account transfer
  - google drive cross account
  - two google drive sync tool
  - google drive migration between accounts
tags:
  - RcloneView
  - google-drive
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 2つのGoogleドライブアカウントを同期する方法 — RcloneViewで個人用と仕事用のドライブを同期

> 個人用のGoogleドライブには家族の写真が、仕事用のドライブにはプロジェクトファイルが入っている。大学のドライブはもうすぐ有効期限が切れる。Googleはアカウント間のネイティブな同期を提供していませんが、RcloneViewならできます。

ほとんどの人が、複数のGoogleドライブアカウントを持つことになります。個人のGmailアカウント、仕事のWorkspaceアカウント、そして期限が近づいている学校のアカウントなどです。Googleは各アカウントを個別に使うのは簡単にしてくれますが、アカウント間でファイルを同期・転送する方法は提供していません。結局、あるアカウントからダウンロードして別のアカウントにアップロードすることになり、これは手間がかかる上に遅く、ローカルのストレージも消費してしまいます。RcloneViewなら複数のGoogleドライブアカウントを同時に接続し、それらの間で直接転送できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 複数のGoogleドライブアカウントを追加する

<img src="/support/images/en/blog/new-remote.png" alt="Add multiple Google Drive accounts" class="img-large img-center" />

各Googleドライブアカウントを、RcloneViewの個別のリモートとして追加します。「GDrive-Personal」「GDrive-Work」「GDrive-School」のように分かりやすく名前を付けておくと、見分けやすくなります。

## アカウント間で転送する

左ペインに1つのアカウント、右ペインにもう1つのアカウントを開きます。ファイルやフォルダをドラッグしてアカウント間で移動できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer between Google Drive accounts" class="img-large img-center" />

ファイルはGoogleのサーバーを経由して直接転送されるため、パソコンには何もダウンロードされず、転送も高速です。

## よくある利用シーン

### 期限が切れる学校アカウントからファイルを保存する

大学のGoogle Workspaceアカウントは、卒業後に削除されることがよくあります。アクセスできなくなる前に、すべてを個人用ドライブに転送しておきましょう。

### 個人用ファイルと仕事用ファイルを分ける

誤って個人用ファイルを仕事用ドライブに保存してしまった場合でも、IT部門を介さずに個人アカウントへ移動できます。

### 古いアカウントを統合する

古いGmailアカウントのファイルを、現在使っているアカウントにまとめられます。RcloneViewを使えば、ドラッグ&ドロップだけの簡単な操作で完了します。

### 重要なフォルダをミラーリングする

特定のフォルダを両方のアカウント間で同期した状態に保ちましょう。自動で実行される同期ジョブを作成できます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync job between accounts" class="img-large img-center" />

## 継続的な同期をスケジュールする

アカウント間で継続的に同期させたいフォルダがある場合は、自動同期をスケジュールできます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cross-account sync" class="img-large img-center" />

## 転送を確認する

フォルダ比較機能を使って、アカウント間でファイルが正しく転送されたかを確認できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify cross-account transfer" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **両方のGoogleドライブアカウント**を個別のリモートとして追加します。
3. 2ペインのエクスプローラーで**両方のアカウントを開き**ます。
4. ローカルへのダウンロードは不要 — **直接転送**します。

これで、あなたのGoogleアカウントがようやくつながります。

---

**関連ガイド:**

- [GoogleドライブからOneDriveへ移行する](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [GoogleドライブとDropboxを同期する](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)
- [Googleドライブに大容量ファイルをアップロードする](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)

<CloudSupportGrid />
