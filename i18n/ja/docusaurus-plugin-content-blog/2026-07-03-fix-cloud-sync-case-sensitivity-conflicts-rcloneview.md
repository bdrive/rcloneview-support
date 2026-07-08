---
slug: fix-cloud-sync-case-sensitivity-conflicts-rcloneview
title: "クラウド同期の大文字小文字区別による競合を解決 — RcloneViewで重複ファイルを解消"
authors:
  - tayson
description: "WindowsやmacOSの大文字小文字を区別しないファイルシステムと、大文字小文字を区別するクラウドストレージが衝突して発生する重複ファイルを、RcloneViewを使って防止する方法。"
keywords:
  - cloud sync case sensitivity
  - duplicate files cloud sync
  - case sensitive filenames cloud storage
  - fix cloud sync duplicates
  - windows macos case insensitive sync
  - cloud storage filename conflicts
  - rcloneview sync errors
  - resolve cloud sync duplicate uploads
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウド同期の大文字小文字区別による競合を解決 — RcloneViewで重複ファイルを解消

> "Report.pdf" と "report.pdf" は WindowsやmacOSでは同一に見えますが、ほとんどのクラウドストレージでは別々の2つのファイルとして扱われます。この不一致は、同期ジョブがそれを検知する仕組みを備えるまで、静かにフォルダを重複ファイルで埋め尽くしていきます。

WindowsとmacOSはデフォルトでローカルドライブを大文字小文字を区別しない形式でフォーマットするため、`Invoice.pdf` と `invoice.pdf` はディスク上では同じファイルとして扱われます。Google Drive、Dropbox、Amazon S3をはじめとするほとんどのクラウドバックエンドは大文字小文字を区別するため、両方を別々のオブジェクトとして問題なく保存してしまいます。その結果、フォルダにはほぼ重複したファイルが徐々に蓄積し、同期ジョブがどこからともなくコピーを「作成」しているように見えたり、あるデバイスでのリネームがクラウド上に既にあるバージョンと決して一致しない上書きループが発生したりします。RcloneViewは基盤となるファイルシステムの挙動そのものを変えることはできませんが、こうした競合が混乱を招く前に発見し、コントロールするための可視性と手段を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## フォルダ比較で大文字小文字の競合を発見する

本当の同期失敗なのか、単なる大文字小文字の区別による問題なのかを見極める最も速い方法は、ローカルフォルダとクラウドの転送先の間でフォルダ比較を実行することです。大文字小文字だけが異なるファイルは、両側で「同じ」ものとして一致せず、別々のエントリとして表示されます。これが判別のサインです — 本当のコンテンツ重複の問題ではサイズが異なって表示されるのに対し、純粋な大文字小文字の不一致では、サイズは同一で名前だけが異なる2つのエントリが表示されることが多いです。比較ビューの「Show different files」および「Show left-only / right-only」フィルターを使えば、フォルダツリー全体を手作業でスクロールすることなく、これらのペアを簡単に切り分けられます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify case sensitivity duplicates between local and cloud storage" class="img-large img-center" />

## 一方向同期とチェックサムで上書きループを防ぐ

双方向同期（ベータ版）は、大文字小文字の競合が最も大きな被害をもたらす箇所です。リネームされたファイルを、片方の側では新規アップロードとして、もう片方では古いファイルの削除として解釈してしまう可能性があるためです。対象の同期ジョブを一方向の「Modifying destination only（転送先のみを更新）」同期に切り替えることで、この曖昧さを解消できます。常に一方の側が権威を持つため、ソース側での大文字小文字だけのリネームは重複を発生させることなく、転送先を単純に更新するだけになります。同期ウィザードのステップ2でチェックサム比較オプションを有効にすることも有効です。ファイル名の一致だけに頼るのではなく、ハッシュとサイズでファイルを比較するため、大文字小文字の違いと本当のコンテンツ変更が混在している場合の誤検知を減らせます。RcloneViewは90以上のプロバイダーを、Windows、macOS、Linux上の1つのウィンドウからマウントおよび同期できるため、特定のデバイスのファイルシステムの挙動に起因する競合をより見つけやすくなります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job with checksum comparison to avoid case sensitivity duplicates" class="img-large img-center" />

## 既存の重複ファイルを安全にクリーンアップする

フォルダ比較を通じて大文字小文字による重複ペアを特定したら、削除を行う前に必ずドライランを実行してください。ドライランでは、実際には変更を加えずに削除対象となるファイルを正確にリストアップします。これは、2つの「重複」ファイルが、大文字小文字の不一致が最初に発生して以降にコンテンツとして実際に分岐してしまっている可能性がある場合に重要です。ドライランの出力結果が正しいことを確認した後、比較ビューのDelete（削除）アクションを使って古いコピーを削除し、正しく現在のファイル名を持つバージョンを残してください。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a dry run before cleaning up case sensitivity duplicate files in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneViewをダウンロード** します。
2. 影響を受けているローカルフォルダとそのクラウドの転送先の間でフォルダ比較を実行します。
3. 別々のエントリとして表示されるものの、同じサイズを共有しているファイルをフィルターし、大文字小文字の競合を切り分けます。
4. 同期ジョブをチェックサム比較を有効にした一方向同期に切り替え、重複ファイルをクリーンアップする前にドライランを実行します。

わずかな可視性があれば、見えないファイルシステムの癖を、静かにファイルを複製し続けるだけの問題から、実際に解決できる問題へと変えることができます。

---

**関連ガイド：**

- [ファイル名の特殊文字の問題を解決 — RcloneViewでクラウド同期の問題を解消](https://rcloneview.com/support/blog/fix-filename-special-characters-cloud-sync-rcloneview)
- [クラウド同期の重複ファイルを解決 — RcloneViewでの解決方法](https://rcloneview.com/support/blog/fix-cloud-sync-duplicate-files-rcloneview)
- [ドライラン — RcloneViewで転送前にクラウド同期をプレビュー](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
