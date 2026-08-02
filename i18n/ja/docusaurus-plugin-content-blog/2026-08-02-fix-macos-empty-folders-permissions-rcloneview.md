---
slug: fix-macos-empty-folders-permissions-rcloneview
title: "macOSのデスクトップとドキュメントフォルダが空に見える問題を修正 — RcloneViewの権限修正"
authors:
  - robin
description: "macOSでRcloneViewがデスクトップ、ドキュメント、ダウンロードフォルダを空として表示する問題を修正します。適切なプライバシー権限を付与して完全なファイルアクセスを復元しましょう。"
keywords:
  - macOS 空フォルダ 修正
  - RcloneView macOS 権限
  - デスクトップフォルダ 空 macOS
  - ドキュメントフォルダ 空 macOS
  - macOS フルディスクアクセス
  - プライバシーとセキュリティ ファイルとフォルダ
  - macOS クラウド同期 権限
  - RcloneView トラブルシューティング
  - macOS ファイルアクセス拒否
  - RcloneView macOS 修正
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# macOSのデスクトップとドキュメントフォルダが空に見える問題を修正 — RcloneViewの権限修正

> RcloneViewがMacのデスクトップ、ドキュメント、またはダウンロードフォルダを空として表示する場合、それはほぼ常にまだ許可されていないmacOSのプライバシー権限が原因であり、同期の問題ではありません。

Catalina以降、macOSはデスクトップ、ドキュメント、ダウンロードをプライバシーとセキュリティの権限の背後にロックしており、同期ソースとしてローカルフォルダを閲覧する際のRcloneViewを含め、これらを読み取ろうとするアプリは明示的に承認される必要があります。初めてローカルからクラウドへのバックアップジョブを設定するユーザーはこの問題によく遭遇します。フォルダツリーは読み込まれますが、ファイルが明らかにディスク上に存在しているにもかかわらずファイルリストは空のままです。RcloneViewは90以上のクラウドプロバイダーに接続して同期しますが、この特定の問題は完全にmacOS側にあり、2分で修正できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## フォルダが空に見える理由

macOSはデスクトップ、ドキュメント、ダウンロードを保護された場所として扱います。アプリが初めてこれらのいずれかを読み取ろうとすると権限プロンプトが表示され、初期セットアップ中に誤って発生しやすいこのプロンプトが却下または拒否されると、アプリはエラーの代わりに静かに空のリストを受け取ります。RcloneViewのExplorerパネルはフォルダ自体を表示し、場合によっては正しいファイル数も表示しますが、OSがファイルシステム層でコンテンツを保留しているため、基礎となるファイルリストは空のままです。

これはクラウドリモートの問題とは別のものです。GoogleドライブやDropboxのリモートも空に見える場合は、それは別の問題です — この修正は、同期のソースまたは宛先として使用されるローカルmacOSフォルダにのみ特に適用されます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder view affected by macOS privacy permissions" class="img-large img-center" />

## 適切な権限を付与する

システム設定 > プライバシーとセキュリティ > ファイルとフォルダを開き、リストからRcloneViewを見つけて、デスクトップフォルダ、ドキュメントフォルダ、ダウンロードフォルダのトグルを個別に有効にします。RcloneViewがまだリストに表示されていない場合は、アプリでそれらのフォルダのいずれかに移動して権限プロンプトをトリガーしてください — macOSはアクセスを試みたアプリのみをリストに表示します。

問題が継続する場合、または3つの保護されたフォルダ以外の場所(外部ドライブ、ネットワーク共有)から同期している場合は、同じプライバシーとセキュリティのパネルでフルディスクアクセスを付与することがより徹底した解決策です。これにより、デスクトップ、ドキュメント、ダウンロード、およびOSが制限する可能性のある他の場所がカバーされます。

<img src="/support/images/en/blog/new-remote.png" alt="Granting macOS Files and Folders permission to RcloneView" class="img-large img-center" />

これらの権限を変更した後は、ウィンドウを閉じるだけでなく、RcloneViewを完全に再起動する必要があります。macOSはアプリのファイルアクセスを起動時にのみ再評価するため、フォルダの内容が正しく表示される前に終了して再度開く必要があります。

## 修正の確認と同期の構築

再起動後、以前空だったフォルダに戻って移動してください — ファイルとフォルダの数がフッターの概要に正常に表示されるはずです。実際の同期ジョブを実行する前に、目的のクラウド宛先に対してフォルダ比較(Folder Compare)を使用して、RcloneViewがローカル側で見えるべきものをすべて見えることを確認してください。これにより、不完全なバックアップになる前に残っているアクセスの問題を捉えることができます。

権限が正常に機能していることを確認したら、通常どおり同期ジョブを構築します。ソースとしてローカルフォルダ、宛先としてクラウドリモートを設定し、最初にドライラン(Dry Run)を有効にして転送内容をプレビューします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Building a local-to-cloud sync job after fixing macOS permissions" class="img-large img-center" />

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. システム設定 > プライバシーとセキュリティ > ファイルとフォルダを開きます。
3. RcloneViewのデスクトップ、ドキュメント、ダウンロードへのアクセスを有効にするか、フルディスクアクセスを付与します。
4. RcloneViewを完全に終了して再起動し、フォルダの内容が正しく読み込まれることを確認します。

このパーミッションモデルはmacOS上でユーザーデータを保護するために存在し、一度付与されると、RcloneViewはその後のすべての同期ジョブに対してローカルファイルへの完全で中断のないアクセスを維持します。

---

**関連ガイド:**

- [RcloneViewでmacOSの「開いているファイルが多すぎます」エラーを修正](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [macOS SequoiaでのRcloneView — クラウドストレージ同期](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [転送後にクラウド同期でファイルが失われる問題を修正 — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
