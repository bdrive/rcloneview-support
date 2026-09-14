---
slug: cloud-storage-translation-localization-agencies-rcloneview
title: "翻訳・ローカライゼーション代理店向けクラウドストレージ — RcloneViewで多言語ファイルを一元管理"
authors:
  - robin
description: "RcloneViewで、翻訳・ローカライゼーション代理店向けにGoogle Drive、Dropbox、OneDrive、Boxにまたがるクライアント成果物を一元化します。"
keywords:
  - 翻訳代理店向けクラウドストレージ
  - ローカライゼーションファイル管理
  - 多言語ファイル同期
  - 翻訳代理店クラウドストレージ
  - フリーランス翻訳者のファイル納品
  - RcloneViewローカライゼーション
  - クライアント翻訳ファイルの暗号化
  - クライアントクラウドアカウントの一元化
  - 言語サービス向けクラウドファイル管理
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 翻訳・ローカライゼーション代理店向けクラウドストレージ — RcloneViewで多言語ファイルを一元管理

> 同じ翻訳プロジェクトを納品するために5つの異なるクライアントのクラウドアカウントにログインするのはもうやめましょう — すべてを1つのウィンドウで管理できます。

翻訳・ローカライゼーション代理店は、特有のクラウドストレージの混乱を抱えています。すべてのクライアントが自社のプラットフォームを通じてソースファイルを引き渡します — あるクライアントはGoogle Driveを使い、別のクライアントはDropboxを譲らず、また別のクライアントはBoxフォルダを共有します — 一方で、複数のタイムゾーンに散らばるフリーランス翻訳者やレビュアーは、すべてのドキュメントの正しいバージョンに確実にアクセスする必要があります。RcloneViewはこれらすべてのアカウントを単一のインターフェースで接続するため、プロジェクトマネージャーはファイルを必要な場所へ移動するためだけにブラウザタブを切り替える必要がなくなります。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## すべてのクライアントプラットフォームを1つのウィンドウで

中規模のローカライゼーション代理店は、クライアントごとに1つずつ、Google Drive、Dropbox、OneDrive、Boxで同時に進行中のプロジェクトを運用することがあります。RcloneViewのマルチパネルExplorerを使えば、プロジェクトマネージャーはこれらの複数のリモートを並べて開き、ローカルマシンに先にダウンロードすることなく、ソースドキュメント、翻訳メモリ、用語集をリモート間で移動できます。異なる2つのリモート間のドラッグ&ドロップは直接クラウド間コピーを実行するため、500ファイルの字幕バッチがノートパソコンのハードドライブを経由する必要は一切ありません。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between client storage accounts in RcloneView" class="img-large img-center" />

RcloneViewはWindows、macOS、Linuxの1つのウィンドウから90以上のプロバイダーをマウントおよび同期します — 異なるOSを使う翻訳者全員が同じクライアント向けフォルダ構造を必要とする場合に便利です。

## 納品前の成果物確認

多言語の成果物でファイルを1つ見落とすこと — たとえば12の言語ペアのうち1つ — は、クライアントの信頼を損なうタイプのミスです。Folder Compareは、プロジェクトマネージャーが最終納品前に代理店の作業フォルダとクライアントの納品フォルダを視覚的に並べて確認できるようにし、片側にしか存在しないファイルやサイズが異なるファイルにフラグを立てます。DocumentおよびGoogle Docsファイルタイプの事前定義フィルターにより、一時ファイルやキャッシュアーティファクトではなく、翻訳されたコンテンツに比較の焦点を絞ることができます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare identifying missing files before a translation delivery" class="img-large img-center" />

## 機密の原稿素材を保護する

法的契約書、医療記録、特許出願は、厳格な秘密保持契約のもとで翻訳代理店を日常的に通過します。Crypt仮想リモートは既存のクラウドフォルダをファイル名、フォルダ名、コンテンツの暗号化でラップするため、クライアントのストレージアカウントが侵害されても、暗号化パスワードなしでは代理店の作業コピーを読み取ることはできません。

## はじめに

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new client remote via Remote Manager in RcloneView" class="img-large img-center" />

1. **RcloneViewをダウンロード**: [rcloneview.com](https://rcloneview.com/src/download.html)から入手してください。
2. Remote Managerを使って各クライアントのクラウドプラットフォーム用のリモートを追加します — ほとんどは単一のOAuthログインで接続できます。
3. 作業リモートからクライアントの納品フォルダへ完成した成果物をミラーリングするSyncジョブを設定し、まずDry Runを有効にして転送内容をプレビューします。
4. クライアントに指摘される前に不足している言語ファイルを見つけるため、すべての納品前にFolder Compareを実行します。

管理するアカウントが減れば、実際の翻訳作業により多くの時間を使えます。

---

**関連ガイド:**

- [リモートチーム向けクラウドストレージ — RcloneViewによる分散ワークフロー](https://rcloneview.com/support/blog/cloud-storage-remote-teams-distributed-workflow-rcloneview)
- [多言語インターフェース — RcloneViewの9言語](https://rcloneview.com/support/blog/multilingual-interface-9-languages-rcloneview)
- [フリーランサー・独立契約者向けクラウドストレージ — RcloneView](https://rcloneview.com/support/blog/cloud-storage-freelancers-independent-contractors-rcloneview)

<CloudSupportGrid />
