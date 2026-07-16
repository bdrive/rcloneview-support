---
slug: fix-cloud-sync-missing-files-after-transfer-rcloneview
title: "RcloneViewでクラウド同期後のファイル欠落を修正する"
authors:
  - tayson
description: "クラウド同期操作後にファイルが欠落する原因を診断して修正します。RcloneViewにおけるフィルタルール、特殊文字、同期方向の問題などのよくある原因を学びましょう。"
keywords:
  - rcloneview
  - missing files after sync
  - cloud sync missing files
  - rclone files not syncing
  - cloud transfer missing data
  - sync direction wrong
  - google docs not syncing
  - rclone filter rules
  - cloud file transfer issues
  - fix cloud sync
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでクラウド同期後のファイル欠落を修正する

> 同期ジョブを実行し、一見すべて成功したように見えたのに、転送先で一部のファイルが見つからない。**RcloneView**には、何が起きたのかを正確に診断し、再発を防ぐためのツールが揃っています。

クラウド同期後にファイルが欠落していることに気づくのは、クラウドファイル管理の中でも特にストレスの大きい状況のひとつです。転送はエラーなく完了し、ジョブログも成功と表示されているのに、転送先を確認すると特定のファイルがどこにも見当たらない。パニックになる前に知っておいてほしいのは、これはほぼ常にデータ損失ではなく、論理的な設定の問題によって引き起こされているということです。

このガイドでは、同期操作後にファイルが欠落する最もよくある原因を解説し、RcloneViewの比較機能、ログ機能、ドライラン機能を使って問題を特定・修正する方法を紹介します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## フィルタルールによるファイルの暗黙的な除外

ファイルが欠落する最も頻繁な原因は、ファイルを除外するフィルタルールです。`--exclude`、`--include`、`--filter`ルールを設定して、それを忘れてしまっている場合、そのパターンに一致するファイルは同期中に静かにスキップされます。rcloneは標準出力で除外されたファイルについて警告しません。

**よくあるフィルタの誤り:**

- `--include "*.jpg"`ルールが、意図せずドキュメントやスプレッドシートを含むすべての非JPGファイルを除外してしまう。
- `--exclude "*.tmp"`ルールが、ファイル名の途中に`.tmp`を含むファイルまで捕捉してしまう。
- `--min-size`フラグが、設定ファイルやテキストメモのような小さくても重要なファイルをスキップしてしまう。
- 以前のジョブから引き継がれたフィルタルールが、新しいジョブを作成した際にそのまま残ってしまう。

**診断方法:** RcloneViewで、同期ジョブに付与されたフラグとフィルタを確認します。一時的にすべてのフィルタを削除して比較を実行し、欠落しているファイルが表示されるかを確認します。次に、フィルタを1つずつ再追加して、どのルールが除外の原因になっているかを特定します。

## 同期方向の混同

`sync`、`copy`、`move`の違いは非常に重要であり、誤った方式を選ぶとファイルが消えてしまう可能性があります。

- **Sync（同期）**は転送先をソースと一致させます。ソースに存在しないファイルが転送先にある場合、そのファイルは**削除**されます。誤って逆方向（転送先からソースへ）に同期を実行してしまうと、ソースのファイルが削除される可能性があります。
- **Copy（コピー）**は転送先にファイルを追加するだけです。何も削除しません。確信が持てない場合は、こちらのほうが安全な選択肢です。
- **Move（移動）**はファイルを転送した後、ソースから削除します。

同期後にソースからファイルが欠落している場合、誤った方向で同期を実行した可能性があります。実行前には、RcloneViewの2ペインエクスプローラーでどちらがソースでどちらが転送先かを必ず再確認してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Google Docs、Sheets、Slides

Google Workspaceのドキュメント（Docs、Sheets、Slides、Drawings）は従来型のファイルではありません。これらはクラウドネイティブなオブジェクトであり、固有のサイズやネイティブ状態でのダウンロード可能なバイナリ形式を持ちません。Google Driveから同期する際、rcloneはこれらをダウンロード可能な形式（例: `.docx`、`.xlsx`、`.pdf`）に変換しますが、その動作は設定によって異なります。

**よくある問題:**

- エクスポート形式が設定されていない場合、Google Docsはゼロバイトのファイルとして表示されるか、完全にスキップされます。
- 非常に長い名前のファイルは、一部のOSでエクスポートに失敗することがあります。
- Google Driveのショートカットは実際のファイルではなく、転送されません。

**修正方法:** Google Driveのリモートが適切なエクスポート形式で設定されているかを確認してください。あるいは、転送先にGoogle Docsが不要な場合は、欠落ファイルに関する混乱を避けるために明示的に除外してください。

## 大文字小文字の区別と特殊文字

クラウドプロバイダーによってファイル名の扱いは異なります。`Report.PDF`と`report.pdf`という名前のファイルは、WindowsやOneDriveでは同一ファイルとして扱われる一方、LinuxやS3では2つの別々のファイルとして扱われる場合があります。同期中に、一方がもう一方を静かに上書きしてしまうことがあります。

**問題を引き起こしやすい文字:**

- 末尾のスペースやピリオド（OneDriveやWindowsでは拒否される）。
- コロン、疑問符、山括弧（Windowsでは無効）。
- 絵文字やUnicode文字（一部のプロバイダーでは扱いが一貫しない）。
- Windowsで260文字を超える非常に長いファイルパス。

**診断方法:** RcloneViewの比較機能を使って、ファイルを並べて一覧表示します。ソースには存在するが、転送先では欠落している、または名前が異なっているファイルを探します。rcloneのログには、互換性のない文字を含むファイルについてリネーム警告が表示されることがあります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## ファイルサイズの上限とプロバイダーの制限

一部のクラウドプロバイダーは最大ファイルサイズの制限を設けており、これにより大きなファイルが静かにスキップされることがあります。

- Google Drive: 1ファイルあたり5TB。
- OneDrive: 1ファイルあたり250GB。
- Dropbox: API経由では1ファイルあたり2GB（デスクトップクライアント経由では350GB）。
- MEGA: ファイルサイズの上限はアカウントの種類によって異なる。
- 多くのS3互換プロバイダー: 1オブジェクトあたり5TBだが、個々のアップロードパートは5GBに制限される。

転送先プロバイダーの上限を超えるファイルを同期しようとすると、転送に失敗します。RcloneViewのジョブ履歴で、サイズ超過に関連するエラー項目がないかを確認してください。

## 比較機能を使って欠落ファイルを見つける

RcloneViewのフォルダ比較機能は、どのファイルが欠落しているかを正確に特定するための最も速い方法です。片側にソースを、もう片側に転送先を開き、比較を実行します。このツールは、ソースにのみ存在するファイル、転送先にのみ存在するファイル、両者で異なるファイルをハイライト表示します。

これにより、転送されなかったものの確定的なリストが得られ、それらを個別に調査できます。パターンを探しましょう -- 欠落しているファイルはすべて1つのフォルダにあるか。同じ拡張子を共有しているか。すべて一定のサイズ以下か。これらのパターンが根本原因を示唆します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 同期前にドライランを実行する

ファイルの欠落を防ぐ最善の方法は、同期の前に毎回ドライランを実行することです。ドライランは、実際にファイルを転送・削除することなく、操作をシミュレートします。どのファイルがスキップされ、転送され、削除されるかを含め、rcloneが実際に何を行うかを正確に表示します。

RcloneViewでは、同期ジョブを設定する際に`--dry-run`フラグを使用できます。出力を注意深く確認してください。転送されるはずのファイルがリストに表示されない場合は、実際の同期を実行する前にフィルタルールと設定を調査してください。

## 予防策

今後の同期でファイルの欠落を防ぐために:

1. **まず比較を行う。** 同期前にRcloneViewの比較機能を使って、両方の場所の現在の状態を把握しましょう。
2. **転送先で何も削除したくない場合はsyncではなくcopyを使う。**
3. **ドライランから始める。** 新しい同期設定をコミットする前に、`--dry-run`を追加してテストしましょう。
4. **フィルタルールを記録する。** 各フィルタルールが何を行い、なぜ存在するのかを記録しておきましょう。
5. **ジョブ履歴を確認する。** 同期のたびに、RcloneViewのジョブ履歴を確認して、想定した数のファイルが転送されたかを確認しましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. ソースと転送先のリモートを指定して2ペインエクスプローラーを開き、フォルダ比較を実行します。
3. フィルタルール、同期方向、ファイルを除外する可能性のあるフラグについて、同期ジョブの設定を確認します。
4. 実行前に`--dry-run`を使って同期操作をプレビューします。

同期後のファイル欠落は、ほぼ常にデータ損失ではなく設定の問題です。RcloneViewの比較機能とログ機能を用いた体系的な診断により、毎回確実に原因を特定できます。

---

**関連ガイド:**

- [リモートストレージの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [リモートストレージを即座に同期する](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
