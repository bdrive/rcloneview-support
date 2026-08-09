---
slug: multilingual-interface-9-languages-rcloneview
title: "多言語インターフェース — RcloneViewを9つの言語で使う"
authors:
  - casey
description: "RcloneViewはCJK対応を含む9つのUI言語で提供されるため、グローバルなチームでもクラウド同期やマウントのワークフローを自然に読み取れます。"
keywords:
  - RcloneView 言語設定
  - RcloneView 多言語インターフェース
  - クラウドストレージ アプリ 言語
  - RcloneView 韓国語 日本語 中国語
  - RcloneView 言語変更
  - ローカライズされたクラウド同期ツール
  - Noto Sans CJK対応
  - 国際対応クラウドストレージGUI
  - RcloneView UI設定
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 多言語インターフェース — RcloneViewを9つの言語で使う

> クラウド同期ツールは、それを実際に読めるチームがいてこそ役に立ちます — RcloneViewのインターフェースは標準で9つの言語に対応しています。

分散したチーム全体にファイル管理ツールを展開すると、たいていチームの誰かが不慣れな言語でメニューを読むことになります。RcloneViewはブラウザの自動翻訳や英語専用ビルドに頼るのではなく、完全なUI翻訳を提供することでこれを回避します。チームがソウル、パリ、サンパウロのどこに広がっていても、同期ウィザード、マウント設定、Job Managerはすべて現地の言語で表示されます。RcloneViewは一つのウィンドウから、Windows、macOS、Linuxを通じて90以上のプロバイダーをマウントかつ同期でき — そして今では、チームが実際に話す言語でも利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 対応言語

RcloneViewは現在、英語、韓国語、フランス語、ドイツ語、簡体字中国語、繁体字中国語、日本語、スペイン語、インドネシア語に対応しています。これは一部のメニューだけを翻訳した部分的なレイヤーではありません — Remote Manager、同期(Sync)設定、フォルダ比較(Folder Compare)、Settingsに至るまで、ラベルはすべてローカライズされているため、英語を母語としないユーザーが作業の途中で半分だけ翻訳されたダイアログに戸惑うこともありません。

特にCJK言語については、アプリにNoto Sansフォントのバリアント(韓国語、簡体字中国語、繁体字中国語、日本語)がバンドルされており、正しい文字セットを含まないシステムフォントに依存するアプリにありがちな豆腐(tofu)ボックス表示の問題を回避しています。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="ローカライズされたメニューオプションを表示するRcloneViewインターフェース" class="img-large img-center" />

## 言語を切り替える

言語選択はSettingsタブ > General > Languageにあります。ドロップダウンから希望の言語を選ぶと、インターフェースは即座に更新されます — 再起動は不要です。これにより、ある地域のサポート担当者が同僚とマウントや同期の設定を一緒に確認する間だけ、一時的にそのセッションを相手の言語に切り替え、その後元に戻すといったことも簡単に行えます。

この設定はクラウドアカウントに紐づくものではなく、インストールごとの設定であるため、全員が同じ共有リモートに接続している場合でも、各メンバーは自分が最も使いやすい言語でRcloneViewを実行できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="ローカライズされたインターフェースでクラウド間転送を設定する" class="img-large img-center" />

## マルチリージョンチームにとって重要な理由

同期ジョブ、フィルタルール、マウント構成はそれ自体すでに十分な技術的詳細を伴います — そこに言語の壁が加わると、フィルタの設定ミスや同期方向の誤りが起きる可能性が高まります。適切にローカライズされたインターフェースがあれば、東京のオペレーションチームとベルリンのIT管理者は、実運用ファイルに影響するジョブを実行する前に、「Modifying destination only」と「Bidirection」という同期設定を、それぞれの言語で正確に読み取ることができます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="ローカライズされたRcloneViewインターフェースから同期ジョブを実行する" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**してください。
2. Settingsタブ > General > Languageを開いてください。
3. 利用可能な9つのオプションから希望の言語を選択してください。
4. 引き続きリモート、同期ジョブ、マウントの設定を行ってください — インターフェース全体が選択した言語に従います。

チーム全員が実際に快適に読めるツールこそ、最初から正しく設定できるツールです。

---

**関連ガイド:**

- [RcloneViewのキーボードショートカットと生産性向上のヒント](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [RcloneViewのダークモードとテーマのカスタマイズ](https://rcloneview.com/support/blog/dark-mode-themes-customization-rcloneview)
- [RcloneViewターミナル — GUIとCLIのワークフローを一緒に](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)

<CloudSupportGrid />
