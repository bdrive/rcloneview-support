---
slug: transfer-google-drive-to-another-account-easily
title: RcloneViewで簡単にGoogleドライブを別アカウントへ転送
authors:
  - jay
description: RcloneViewを使ってGoogleドライブアカウント間でファイルを移動しましょう。移行を計画し、Googleのクォータ内に収め、コマンドライン不要で転送を自動化できます。
keywords:
  - rcloneview
  - google drive transfer
  - migrate google drive
  - cross account transfer
  - cloud sync
  - rclone gui
tags:
  - RcloneView
  - google-drive
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewで簡単にGoogleドライブを別アカウントへ転送

> アカウントを変更しても、コントロールを失う必要はありません。RcloneViewはrcloneのGoogleドライブバックエンドを使いやすいGUIでラップし、スクリプトを書くことなくドライブアカウント間でデータを明確に引き継ぎ、統合し、アーカイブできるようにします。

## Googleドライブのアカウント間でデータを移動する理由

卒業、転職、企業合併、単純な整理プロジェクトなど、Googleアカウント間でファイルを移動する必要が生じる場面は多くあります。Google純正の転送ツールは役に立ちますが、いくつかの隙間があります。My Driveのみが対象で、細かいフィルタには対応せず、移行を段階的に進めたりスケジュールしたりすることもできません。[Google Help](https://support.google.com/accounts/answer/6386856?hl=en&utm_source=chatgpt.com) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

<!-- truncate -->

### 開始前に知っておくべき制限

- **ファイルごとのサイズ**: Google形式以外のファイルは1件あたり最大**5TB**まで対応。ドキュメント、スプレッドシート、スライドには別の制限があります。 [Google Help](https://support.google.com/drive/answer/37603?hl=en)
- **1日あたりの転送クォータ**: Drive APIは1ユーザーあたり1日**750GB**のアップロード(およびコピー操作)を許可し、上限は24時間ごとにリセットされます。 [Google for Developers](https://developers.google.com/drive/api/guides/limits)
- **所有権のルール**: 個人向けの転送はGmailとMy Driveのみを対象とします。Workspace管理者はドメイン内で所有権を再割り当てできますが、ドメインをまたぐ共有ドライブはコピーが必要です。 [Google Help](https://support.google.com/accounts/answer/6386856?hl=en) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

### 各アプローチの概要

| アプローチ | 最適なケース | 制限事項 |
|---|---|---|
| Googleの「コンテンツの引き継ぎ」ツール | 学校を離れる学生や個人のGmailへの移行 | My DriveとGmailのみ対象。フィルタなし、共有ドライブは対象外 |
| セカンドアカウントに共有してからコピー | 同一ドメイン内の小規模な引き継ぎ | 手作業が必要。バージョン履歴やコメントが分断される可能性あり |
| RcloneViewによるクロスアカウント転送 | My Driveと共有ドライブが混在する場合、細かいフォルダ移動、繰り返し可能な同期 | 各アカウントにrcloneリモートが必要(RcloneViewのウィザードが対応) |

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 事前準備

1. **所有権と範囲を明確にする**: 移動する必要がある(または残しておく)フォルダ(My Driveと共有ドライブ)をリストアップします。移行先のコピーを誰が所有すべきかを決めます。
2. **クォータを確認する**: ストレージの空き容量を確認し、750GB/日の上限に達しそうな大きな動画アーカイブに注意します。
3. **切り替え期間を計画する**: 凍結期間や段階的なスケジュールを共有し、共同作業者がどこで作業すべきか把握できるようにします。
4. **ラベルフィルタを決める**: 含める/除外するルール(例: `/Backups/old/`をスキップする、または`/Projects/2024/`のみ移動するなど)を決めます。
5. **重要フォルダをバックアップする**: 規制対象のコンテンツについては、移動前にマニフェストやバージョン履歴をエクスポートします。

🔍 役立つガイド
- [RcloneViewでのGoogle OAuthクイックセットアップ](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Google共有ドライブのリモートを追加する](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)

## RcloneViewで両方のGoogleドライブアカウントを接続する

RcloneViewは`rclone config`をガイド付きウィザードに変換するため、各Googleアカウントを一度登録すれば転送のたびに再利用できます。

1. **RcloneView**を開き、**`+ New Remote`**をクリックします。
2. **Google Drive**を選択し、**転送元アカウント**でサインインして、リモートにわかりやすい名前(例: `Drive-Source`)を付けます。
3. **転送先アカウント**についても同様に行います(例: `Drive-Destination`)。
4. 共有ドライブが関係する場合は、ウィザードで有効にするか、ドライブIDを追加します。
5. 両方のリモートがエクスプローラーペインに表示され、それぞれのフォルダを閲覧できることを確認します。

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="open multiple google drive remotes" class="img-medium img-center" />

## RcloneViewで適切な転送フローを選ぶ

アカウント全体をコピーする前に、まずパイロットフォルダから始めましょう。サンプル実行がうまくいったら、より広範な移動やスケジュール同期に進みます。

### ドラッグ&ドロップ(手動移動)

左側に転送元リモート、右側に転送先リモートを開き、ファイルやフォルダをドラッグします。臨時の引き継ぎや、いくつかの共有ドライブフォルダの移動に最適です。
👉 詳細: [ドラッグ&ドロップによるファイルのコピー](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### 比較&コピー(差分のプレビュー)

**比較**を実行して、両アカウント間で新規・変更・欠落しているものを一覧表示します。差分を確認し、スキップしたい項目の選択を解除してからコピーします。段階的な移行や、凍結期間後の整理に最適です。
👉 詳細: [比較結果とファイル管理](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-medium img-center" />
### 同期&スケジュールジョブ(切り替えの自動化)

**同期**を使用して、選択したフォルダをミラーリングし、転送先が転送元を完全に置き換えるまで続けます。必ず**ドライラン**を実行してから、ジョブを保存し、切り替えが完了するまで夜間または1時間ごとの実行をスケジュールします。
👉 詳細:
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved sync job in RcloneView" class="img-medium img-center" />

**プロのヒント**

- 移行を750GB/日のAPIクォータ内に収まるバッチに分割し、上限がリセットされたら次のバッチをキューに入れましょう。
- 共有ドライブのコンテンツを個人のMy Driveにコピーする場合は、権限を確認し、転送先アカウントから重要なフォルダを再共有してください。
- 最終同期時のデルタを小さく予測可能にするため、転送元フォルダを最終同期の間は読み取り専用にしましょう。
- RcloneViewのジョブ履歴からrcloneログをエクスポートし、何がいつ移動したかの監査証跡を残しましょう。

## 移行後の対応

- **所有権をスポットチェックする**: 転送先アカウントが重要なファイル(特にドキュメント/スプレッドシート)を所有していること、共同作業者がアクセス権を保持していることを確認します。
- **ショートカットとブックマークを再構築する**: Googleのショートカットは引き継がれないため、新しいアカウントで重要なリンクを再作成します。
- **転送元をクリーンアップする**: 転送先が正となった後、古いフォルダをアーカイブまたは削除し、誤って編集されるのを防ぎます。
- **共有ドライブの権限を監視する**: 大規模なチームでは、新しい所有権構造に合わせてグループメンバーシップの更新が必要になる場合があります。

## まとめ — 要点

- Googleの純正転送ツールは便利ですが、大まかな作業にとどまります。
- RcloneViewはGoogleドライブアカウント間で、細かいフォルダ選択、プレビュー、スケジュール同期を提供します—それでいて完全にGUIベースです。
- Googleのクォータ制限を考慮して計画し、移行をパイロット運用でテストし、切り替え内容を文書化して、同僚が最新ファイルの場所を把握できるようにしましょう。

## FAQ

**RcloneViewはファイルのバージョンとコメントを保持しますか?**
Google形式以外のファイル(PDF、動画、ZIP)はそのまま保持されます。Googleドキュメント/スプレッドシート/スライドは内容を保持しますが、コピー時に新しいIDが生成されます。RcloneViewはこれらを新規ファイルとして表示するため、必要に応じて再共有できます。

**共有ドライブのフォルダをドメイン間で移動できますか?**
Googleは共有ドライブを直接別ドメインに移動することを許可していません。RcloneViewを使って、転送先ドメインが所有する共有ドライブにコンテンツをコピーし、その後権限を再設定してください。 [Google Workspace Admin Help](https://support.google.com/a/answer/7212025?hl=en)

**750GB/日のクォータに達した場合はどうなりますか?**
転送はレート制限エラーで一時停止します。24時間待つ(または別のクォータが空いているアカウントに移動する)ことで、ジョブを再開できます。RcloneViewのログには転送が停止した箇所が表示されるため、ファイルを重複させることなく作業を再開できます。

**クロスアカウント転送を、ただのチェックリスト項目にしてみませんか?**

<CloudSupportGrid />
