---
slug: hasher-remote-integrity-cloud-backup-rcloneview
title: "Hasherリモート — RcloneViewであらゆるクラウドストレージにファイル整合性チェックサムを追加"
authors:
  - robin
description: "RcloneViewのHasherリモートが、ネイティブのハッシュサポートを持たないクラウドバックエンドにチェックサム検証を追加し、あらゆるバックアップをサイレント破損から守る仕組みを解説します。"
keywords:
  - RcloneView Hasherリモート
  - クラウドファイル整合性検証
  - クラウドバックアップのチェックサム検証
  - rclone hasherリモートガイド
  - クラウド転送の整合性検証
  - クラウドバックアップのチェックサム検証
  - クラウド同期でのファイル破損検出
  - RcloneViewのクラウドストレージデータ整合性
  - クラウドバックアップのハッシュ検証
  - rclone仮想リモートhasher
tags:
  - RcloneView
  - feature
  - cloud-storage
  - backup
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasherリモート — RcloneViewであらゆるクラウドストレージにファイル整合性チェックサムを追加

> Hasher仮想リモートは、ネイティブにチェックサムをサポートしないクラウドバックエンドにチェックサム追跡機能をひそかに追加し、すべての同期を検証済みで破損に強い転送に変えます。

すべてのクラウドストレージプロバイダーがファイルのチェックサムを計算・保存しているわけではありません。比較にファイルサイズと更新タイムスタンプのみを利用するプロバイダーでは、サイレントなデータ破損を見逃す可能性があります。これは、ファイルが完全に転送されたにもかかわらずビットが反転した状態で到着する、といった種類の破損です。アーキビストやシステム管理者、データ整合性の要件を持つ企業にとって、これは無視できないギャップです。RcloneViewはrcloneのHasherリモートをサポートしています。これは、既存のクラウドバックエンドの上に、保存や取得の方法を変えることなくMD5、SHA-1などのハッシュ追跡を追加する仮想リモートラッパーです。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hasherリモートとは何か、なぜ重要なのか

Hasherリモートは、rcloneの仮想リモートタイプの一つです。既存のリモートの前段に位置し、その機能を拡張するラッパーです。具体的には、Hasherリモートはファイルとともにチェックサムを保存し、ハッシュ値をキャッシュすることで、以降の同期処理でサイズのみの比較に頼るのではなく、コンテンツによる比較が可能になります。これは、ネイティブのハッシュAPIを公開していないクラウドプロバイダーへ同期する場合や、ファイルサイズを変えないビットレベルの破損を検出する必要がある場合に特に重要です。

実際の例を挙げます。4K動画のデイリーラッシュをWebDAVベースのストレージサーバーにアーカイブしているメディア制作会社があるとします。このサーバーにはネイティブのハッシュサポートがありません。チェックサムがない場合、rcloneはファイルをサイズとタイムスタンプで比較しますが、サイズが同一のまま微妙に破損したファイルは変更なしと判断されてしまいます。WebDAVリモートをHasherリモートでラップすることで、すべての同期にハッシュ比較が追加され、破損したファイルが検出されてレビュー対象としてフラグが立てられ、正常なコピーがサイレントに上書きされる前に問題を発見できます。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Hasher virtual remote in RcloneView's New Remote wizard" class="img-large img-center" />

## RcloneViewでHasherリモートを設定する

RcloneViewでは、Hasherのような仮想リモートも、他のクラウドプロバイダーと同じ新規リモートウィザードから作成します。リモートタブから「新規リモート」をクリックし、仮想リモートタイプまでスクロールすると、Crypt、Union、Combineなどと並んでHasherが表示されます。ラップしたい既存のリモート(例えばWebDAVサーバーやFTPサーバー)を選択し、有効にするハッシュアルゴリズムを選んで保存します。Hasherリモートはバックエンドを透過的にラップします。

保存すると、Hasherリモートは他のリモートと同じようにリモートマネージャーに表示されます。エクスプローラーパネルで開いてファイルを閲覧したり、それに対して同期ジョブを実行したりできます。ハッシュデータベースは自動的に管理されます。RcloneViewとrcloneが記帳処理を行うため、利用者はHasherリモートを基盤となるストレージとまったく同じように扱うだけです。ワークフローを変更する必要は一切ありません。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a checksum-verified sync transfer using the Hasher remote in RcloneView" class="img-large img-center" />

## 整合性検証済みの転送を実行する

Hasherリモートを設定したら、RcloneViewの同期ジョブウィザードのステップ2(詳細設定)で**チェックサムを有効にする**オプションを有効にします。これにより、rcloneはサイズとタイムスタンプだけでなく、キャッシュされたハッシュ値を使ってファイルを比較するようになります。初回実行時にハッシュが計算されて保存されます。以降の実行では保存済みのハッシュと比較するため、変更のないファイルの再ハッシュ計算はスキップされ、大規模なアーカイブでも同期時間を高速に保てます。

ドライラン機能はHasherリモートともシームレスに連携します。大規模なアーカイブ同期を実行する前にドライランを行うと、ハッシュ比較に基づいてどのファイルがコピー、変更、またはスキップされるかを正確にプレビューできます。何か月分もの録画アーカイブを上書きする前にこれを行う価値は大きく、しかもコストはかかりません。確認するまでファイルは一切移動しません。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files with checksum verification enabled in RcloneView" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing integrity-verified backup runs completed in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートタブで「新規リモート」をクリックし、仮想リモートセクションからHasherを選択します。
3. WebDAV、FTP、あるいはネイティブのチェックサムを持たない任意のバックエンドなど、既存のクラウドリモートをHasherリモートでラップします。
4. 同期ジョブを作成し、ステップ2の詳細設定でチェックサム比較を有効にして、最初の整合性検証済みバックアップを実行します。

アーカイブをサイレント破損から守るための設定は数分で完了し、Hasherリモートを使えばRcloneViewがサポートするすべてのバックエンドでその保護を利用できます。

---

**関連ガイド:**

- [RcloneViewでクラウドファイルの整合性を確認・検証する](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [RcloneViewのCryptリモートでクラウドバックアップを暗号化する](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [仮想リモート: RcloneViewのCombine、Union、Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
