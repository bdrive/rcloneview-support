---
slug: fix-cloud-sync-empty-folders-not-created-rcloneview
title: "同期後に空フォルダが消える問題 — RcloneViewで解決する方法"
authors:
  - robin
description: "クラウド同期後に空フォルダが消えていませんか?rcloneがデフォルトで空フォルダをスキップする理由と、RcloneViewの設定一つで解決する方法を解説します。"
keywords:
  - 空フォルダ 同期されない
  - rclone 空ディレクトリ
  - クラウド同期 フォルダ欠落
  - RcloneView トラブルシューティング
  - フォルダ構造 同期
  - rclone 空ディレクトリ作成
  - クラウド同期エラー修正
  - RcloneView 同期設定
  - クラウドバックアップ フォルダ構造
tags:
  - RcloneView
  - troubleshooting
  - sync
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 同期後に空フォルダが消える問題 — RcloneViewで解決する方法

> プレースホルダーフォルダや空のプロジェクトディレクトリは、クラウド同期後によく消えてしまいます — それを元に戻す設定を紹介します。

あるチームがフォルダ構造をクラウドに移行したところ、将来のファイル、クライアント成果物、アーカイブ用に確保していた空のプレースホルダーディレクトリの半分が、転送先にまったく表示されないことに気づきました。これはrcloneの想定通りのデフォルト動作です。同期処理はファイルを含むディレクトリのみを再作成します。RcloneViewにはこれを変更するための設定が用意されており、その場所を知っておくだけで、混乱した手戻り作業を大幅に減らせます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 空フォルダがスキップされる理由

rcloneの同期・コピーエンジンはソースツリーを走査し、オブジェクト — つまりファイル — を転送します。中身が空のディレクトリは転送処理を発生させないため、デフォルトでは転送先にそのディレクトリが存在すべきだという情報が伝わりません。これはバグではなく、多くのクラウドストレージAPIがそもそも「フォルダ」を独立したエンティティとしてではなく、オブジェクトキーの副産物として表現しているためです。実際には、意図的なプレースホルダーフォルダ(来月分のファイルを待つ`03-invoices/`フォルダや、クライアントが期待するカテゴリ構造など)を含むソースツリーが、転送先で一部欠けた状態で届いてしまうことがあります。

これはフォルダ比較(Folder Compare)や初回移行の際に特に目立ちます。この場合、ファイルが実際に配置される前から、転送先の構造がソースを視覚的に反映している必要があるためです。

## 解決策:空ディレクトリを作成する

RcloneViewの同期ウィザードには、ステップ1(ストレージの設定)にソース/転送先リモートとフォルダ選択と並んで、**空ディレクトリを作成**というトグルがあります。これを有効にすると、内部の同期処理はファイルのないディレクトリも再作成するようになり、転送先のフォルダツリーがファイルだけでなくソース構造とも正確に一致するようになります。

<img src="/support/images/en/blog/new-remote.png" alt="空ディレクトリ作成オプションを含むRcloneView同期ウィザードのステップ1" class="img-large img-center" />

一度限りの構造移行の場合は、まずこのオプションを有効にした状態でドライラン(Dry Run)を実行してください。ドライランは転送先に一切触れずに、どのフォルダとファイルが作成されるかを正確に一覧表示するため、実際の転送を行う前に空フォルダの問題が本当に解決されたかを確認する最も速い方法です。

## フォルダ比較で結果を確認する

同期の実行後、RcloneViewのフォルダ比較(Folder Compare)を使って両側をディレクトリごとに確認しましょう。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウントおよび同期でき、Windows、macOS、Linuxで動作するため、ツールを切り替えることなくソースと転送先のツリーを並べて視覚的に比較できます。「左側のみのファイルを表示」と「右側のみのファイルを表示」フィルターを使えば、フォルダが正しく転送されたかすぐに確認できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="ソースと転送先で一致したフォルダ構造を示すフォルダ比較画面" class="img-large img-center" />

一度限りの移行ではなく、長期的に構造を維持する場合は、空ディレクトリオプションをチェックした状態でジョブを保存し、スケジュール実行のたびに必要に応じてプレースホルダーフォルダを再作成し続けるようにしましょう。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="空フォルダ構造を最新に保つための定期的なRcloneView同期ジョブのスケジュール設定" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 同期ウィザードを開き、ソースと転送先のリモートを選択します。
3. ステップ1で、フィルターを設定する前に**空ディレクトリを作成**を有効にします。
4. ドライランを実行してフォルダ構造を確認してから、同期を実行します。

両側で一致するフォルダ構造は、新しいチームメンバーのオンボーディングやストレージの監査をはるかにミスの少ないものにします。

---

**関連ガイド:**

- [macOSの空フォルダと権限の問題 — RcloneViewで解決](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)
- [RcloneViewでクラウドストレージの空のゴミ箱を整理する](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [転送後のクラウド同期でファイルが欠落する問題を解決 — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
