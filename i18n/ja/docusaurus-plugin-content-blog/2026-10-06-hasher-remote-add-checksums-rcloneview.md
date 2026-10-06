---
slug: hasher-remote-add-checksums-rcloneview
title: "Hasher リモート — RcloneView でチェックサムを持たないストレージにチェックサムを追加"
authors:
  - steve
description: "RcloneView の Hasher 仮想リモートを使って、チェックサムを提供しないリモートにハッシュベースの整合性チェックを追加します。"
keywords:
  - rclone Hasher リモート
  - クラウドストレージにチェックサムを追加
  - クラウドファイル整合性チェック
  - クラウドファイルのハッシュ検証
  - Hasher 仮想リモート
  - RcloneView 仮想リモート
  - チェックサム同期
  - rclone GUI
tags:
  - RcloneView
  - feature
  - rclone
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasher リモート — RcloneView でチェックサムを持たないストレージにチェックサムを追加

> Hasher 仮想リモートは既存のリモートの上にハッシュ機能を追加するため、ストレージにチェックサムがない場合でも整合性チェックが機能します。

一部のストレージバックエンドはファイルのハッシュを提供できず、転送後の比較や検証が弱くなります。RcloneView は、既存のリモートにハッシュ機能を重ねるラッパーである rclone の Hasher 仮想リモートに対応しています。このガイドでは、どのような場面で役立つかと使い方を説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hasher リモートの役割

仮想リモートは既存のリモートをラップして動作を追加します。Alias はパスを短縮し、Crypt は暗号化し、Hasher は整合性チェックのためのハッシュを追加します。バックエンドがチェックサムを公開しない場合、比較はサイズと更新日時にフォールバックするため、どちらも変わらずに内容だけが変更されたケースを見逃すことがあります。

そのバックエンドを Hasher リモートでラップすると、ハッシュ機能が与えられ、チェックサムベースの比較が可能になります。速度よりも正確性が重要なアーカイブやバックアップに向いています。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView で新しい仮想リモートを作成する" class="img-large img-center" />

## Hasher リモートを作成

Remote タブを開いて New Remote を選び、Hasher タイプを選択します。ラップしたい元のリモートとフォルダを指定し、`archive-hashed` のように分かりやすい名前を付けます。保存すると、他のリモートと同様にエクスプローラーに表示されます。

元のリモートを使う場所なら、ラップしたリモートも同じように使えます。閲覧、コピー、同期のソースまたは宛先としても利用できます。ハッシュはラッパーに紐づくため、検証したいデータには一貫して Hasher リモートを使用してください。

## 同期と比較で使う

同期ジョブの Advanced Settings で **Enable checksum** をオンにすると、ファイルがハッシュとサイズで比較されます。Hasher リモートと組み合わせることで、サイズと時刻だけの場合よりも信頼できる結果が得られます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="2 つのフォルダの差異を表示する Folder Compare ビュー" class="img-large img-center" />

まず Dry Run を実行してコピーや削除される内容をプレビューしてから、実行してください。RcloneView は Windows、macOS、Linux 上で 90 以上のプロバイダーのマウントと同期を 1 つのウィンドウでサポートしているため、同じ検証方法を複数のクラウドに適用できます。

## Job History で結果を確認

実行後は Job History を開いて、ステータス、転送されたファイル数、合計サイズを確認します。ジョブでエラーが報告された場合は、Log タブに詳細が表示されます。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="完了した同期の実行を示すジョブ履歴" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード**します。
2. まだであれば、チェックサムを持たないリモートを追加します。
3. Remote > New Remote から、それをラップする Hasher リモートを作成します。
4. **Enable checksum** をオンにした同期ジョブを作成し、まず Dry Run を実行します。

検証を強化することで、問題になる前に見えない差異を発見できます。

---

**関連ガイド:**

- [仮想リモート — RcloneView で Combine、Union、Alias を使う](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [RcloneView でクラウド同期のチェックサム不一致を解消](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [RcloneView でクラウドバックアップの検証失敗を解消](https://rcloneview.com/support/blog/fix-cloud-backup-verification-failures-rcloneview)

<CloudSupportGrid />
