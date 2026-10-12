---
slug: fix-google-photos-sync-errors-rcloneview
title: "Googleフォト同期エラーの解決 — RcloneView で空のライブラリ、403 Forbidden、読み取り専用の問題に対処する"
authors:
  - steve
description: "RcloneView で発生しやすい Googleフォトのエラーをトラブルシューティングします。リモートが空に見える、または変更なしと表示される問題、廃止されたクライアント ID やレート制限による 403 Forbidden、読み取り専用の宛先エラー、アップロード後にファイルが見当たらない問題を扱います。"
keywords:
  - Googleフォト sync errors RcloneView
  - Googleフォト empty folder rclone
  - Googleフォト 403 client ID
  - fix Googleフォト backup issues
  - Googleフォト rclone errors
  - Google Photos API quota error
  - RcloneView Googleフォト troubleshoot
  - Googleフォト upload problems
  - Googleフォト backup fix
tags:
  - RcloneView
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Googleフォト同期エラーの解決 — RcloneView で空のライブラリ、403 Forbidden、読み取り専用の問題に対処する

> Googleフォトには、他のクラウドドライブにはない API の制約があります。RcloneView で遭遇する「エラー」の多くは Google 側のルールによるものです。それぞれが何を意味し、どう対処すればよいかを解説します。

Googleフォトは個人の写真保存先として人気がありますが、rclone のバックエンドの挙動は一般的なクラウドドライブとは大きく異なります。2025 年 3 月 31 日以降、Googleフォト API はサードパーティアプリに対し、そのアプリ自身がアップロードしたメディアのみを表示します。既存のメディアを API 経由で変更・削除することはできず、レート制限も Google ドライブより厳しくなっています。これらの制約を理解することが、RcloneView で Googleフォトを扱う際のエラー解決の第一歩です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## リモートが空に見える — 「No Changes Detected」または 0 ファイルのコピー

最もよくある報告は次のとおりです。Googleフォトのリモートを追加してエクスプローラーで開いても、ほとんど何も表示されない。あるいは NAS へのコピージョブが数秒で終わり、転送されたファイルが 0 件になる。これは故障ではありません。2025 年 3 月 31 日に、Google はサードパーティアプリがユーザーのライブラリ全体を読み取れるようにしていた API スコープを削除しました。Google の言葉を借りれば、アプリは「現在、アプリ自身が作成したアルバムとメディアアイテムのみを一覧表示、検索、取得できます」。そのため RcloneView から見えるのは、RcloneView または rclone 経由でアップロードした写真だけです。スマートフォンや Web からアップロードした写真は見えず、共有アルバムは `403 PERMISSION_DENIED` を返します。

RcloneView 1.6 以降では、Googleフォトのリモートを開くとアプリ内でこの制限が説明されるため、アカウントが空であるかのように見えることはなくなりました。

対処法：**Google Takeout** で既存のライブラリをエクスポートし（Google ドライブへの配信が理想的です）、そのエクスポートを RcloneView で外付けドライブ、NAS、または別のクラウドストレージにコピーします。詳しい手順は [Googleフォトを外付けドライブまたは NAS にバックアップする方法](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview) を参照してください。

## エラー：「403 Forbidden」 — 廃止されたクライアント ID またはレート制限

Googleフォトの `403` には 2 つの異なる原因があります。RcloneView の **ログタブ** で見分けてください。

**接続時または一覧取得時の 403 — 共有クライアント ID。** rclone に組み込まれている Googleフォト用のクライアント ID は 2026 年中に廃止される予定で、Google は各ユーザーが自分自身の OAuth クライアント ID で接続することを求めるようになりました。リモートに接続できない、またはすべてのリクエストが拒否される場合は、これが原因です。RcloneView 1.6 以降では、接続できないときに接続ウィザードが独自のクライアント ID の作成手順を案内します。Google Cloud Console での同じ手順は、rclone の [Googleフォトのドキュメント](https://rclone.org/googlephotos/#making-your-own-client-id) にも記載されています。

**アップロード中の `userRateLimitExceeded` を伴う 403 — 書き込みクォータ。** Google は API 経由の写真アップロードにユーザーごとの 1 日あたりの上限を設けており、数千枚の写真を一括アップロードすると転送の途中で上限に達することがあります。転送の同時実行数を減らしてください。ジョブの詳細設定でファイル転送数を 2 または 3 に設定し、**失敗時に再試行** を有効にして（再試行 5 回以上）、スロットリングされたアップロードをジョブ全体の失敗とせず RcloneView が再試行するようにします。必要に応じて、非常に大量のアップロードは数日に分けて行ってください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos upload rate in RcloneView" class="img-large img-center" />

## エラー：「Can't Copy — Destination is Read Only」

宛先が読み取り専用というエラーが表示される場合、双方向の同期を行おうとしているか、Googleフォトにすでに存在する写真を上書きしようとしています。Googleフォト API は rclone 経由で既存のメディアを変更または削除することを許可しておらず、RcloneView もこの制限に従います。

解決策は、ジョブをコピー元から Googleフォトへの一方向の **コピー**（同期ではなく）として設定することです。これにより、Googleフォト側の何かを削除したり上書きしたりせずに、新しいファイルだけがアップロードされます。写真を削除したい場合は、Googleフォトの Web アプリまたはモバイルアプリで行ってください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring a Copy job to Google Photos in RcloneView" class="img-large img-center" />

## アップロード後にファイルが見当たらない

Googleフォトはメディアを元のフォルダ構造ではなく、アルバムと作成日で整理します。フォルダ階層を Googleフォトにコピーすると、ファイルはライブラリに入りますが、期待したフォルダは維持されません。API がフォルダ構造を保持しないためです。また、API 経由でダウンロードし直した写真は元の解像度ではなく、EXIF の位置情報も失われる点にも注意してください。

フォルダの整理を維持したい場合は、代わりに Google ドライブにコピーしてください。サブディレクトリがコピー元とまったく同じ形で保持されます。本格的な写真アーカイブには、元のフォルダツリーのコピーを置いた Backblaze B2 や Amazon S3 のほうが、長期的により信頼できる選択肢です。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Google Photos job" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. リモートが空に見える場合、それは Google の API 制限によるものです。Google Takeout で既存のライブラリをエクスポートし、そのエクスポートを RcloneView でコピーします。
3. 接続時の 403 には、独自の OAuth クライアント ID を作成します。`userRateLimitExceeded` には、同時実行数を 2～3 に減らし、再試行回数を増やします。
4. Googleフォトへアップロードするときは、同期ではなく **コピー** のジョブタイプを使用します。

どの Google のルールに該当したのかを把握しておけば、最初から RcloneView を正しく設定でき、無駄な再試行の繰り返しを避けられます。

---

**関連ガイド：**

- [Googleフォトを外付けドライブまたは NAS にバックアップする方法 — Google Takeout + RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Google ドライブのクォータとレート制限エラーの解決](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [ブラウザベースのログイン (OAuth) でリモートを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
