---
slug: rclone-chunker-split-large-files-cloud-rcloneview
title: "Rclone Chunkerリモート — RcloneViewで任意のクラウドストレージ向けに大容量ファイルを分割"
authors:
  - tayson
description: "RcloneViewでrcloneのChunker仮想リモートを使用し、大容量ファイルを分割してファイルサイズ制限が厳しいクラウドプロバイダーにアップロードする方法。"
keywords:
  - rclone chunker
  - split large files cloud
  - chunker remote RcloneView
  - large file upload limit
  - cloud file size limit workaround
  - rclone chunker guide
  - split file upload cloud
  - virtual remote chunker
  - rclone virtual remote
  - large file cloud storage
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone Chunkerリモート — RcloneViewで任意のクラウドストレージ向けに大容量ファイルを分割

> クラウドプロバイダーのファイルごとのサイズ制限によってアップロードがブロックされる場合、rcloneのChunker仮想リモートを使えばファイルを透過的に分割できます — RcloneViewはCLIを一切使わずにこれを設定・利用できます。

多くのクラウドストレージプロバイダーは、ファイルごとに厳しいサイズ制限を課しています — Dropboxはファイルあたり50GBのアップロード上限があり、無料プランや低価格プランの一部のサービスでは5〜10GBの上限が設けられています。データベースダンプ、非圧縮の動画書き出し、あるいはこうした制限を超える大容量アーカイブファイルを保存するユーザーにとって、rcloneの**Chunker**仮想リモートは解決策となります。アップロード前にファイルを小さなチャンクに分割し、ダウンロード時には透過的に再結合します。RcloneViewは、標準のリモート管理インターフェースを通じてChunkerを設定・利用します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Chunkerリモートとは?

Chunkerは、rcloneの**仮想リモートラッパー**の一つです — 実際のクラウドバックエンドに到達する前に、ファイルの扱い方を変更するレイヤーです。クラウドプロバイダーに直接接続する標準リモートとは異なり、Chunkerは設定されたサイズ制限を超えるファイルを検知し、アップロード前に複数の断片に分割します。各チャンクは、同じChunkerリモート経由で読み取りやダウンロードを行う際に透過的な再結合をrcloneが認識できる命名規則に従って、個別のファイルとして保存されます。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Chunker virtual remote in RcloneView" class="img-large img-center" />

RcloneViewでは、Chunkerのような仮想リモートは、標準リモートと同じ**Remoteタブ > New Remote**のワークフローで作成されます — プロバイダーとしてChunkerを選択し、ベースとなるリモートを指定して、チャンクサイズを設定します。作成結果はエクスプローラー内に他のリモートと並んで表示され、透過的なチャンク分割はワークフロー上では意識する必要がありません。

## RcloneViewでChunkerリモートを作成する

1. まず、ベースとなるリモート(例えばDropboxやOneDriveのリモート)がすでに設定されていることを確認します。
2. **Remoteタブ > New Remote**に進み、仮想リモートのセクションから**Chunker**を選択します。
3. **元となるリモート**(あらかじめ設定済みのベースリモート)と、任意でその中のサブディレクトリを指定します。
4. プロバイダーのファイルサイズ制限より小さい**チャンクサイズ**を設定します — 例えば、ほとんどのプロバイダーでは4GB、Dropboxの場合は50GBの上限を下回るよう45GBに設定します。
5. Chunkerリモートを保存します — これで他のリモートと同様にエクスプローラーに表示されます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Using a Chunker remote for large file uploads in RcloneView" class="img-large img-center" />

30GBの動画ファイルをChunkerリモートにドラッグすると、RcloneViewはそれを複数のチャンク(例えば4GBのファイル8個)として、元となるクラウドにアップロードします。同じChunkerリモート経由でファイルを読み戻すと透過的に再結合され、アプリケーション側からは1つの連続したファイルとして見えます。

## 実際の利用例

10GBのファイル制限があるクラウドサービスに毎晩20GBのデータベースダンプをアーカイブするデータエンジニアは、そのサービスをラップする8GBチャンクのChunkerリモートを作成します。Job Managerの同期ジョブは他のクラウド転送と全く同じように実行され、チャンク分割はジョブ設定に対して完全に透過的です。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling large file uploads via Chunker remote in RcloneView" class="img-large img-center" />

**ChunkerとCryptの組み合わせ**により、より高度な仮想リモートのスタックを構築できます。まずベースリモートを**Crypt**でラップし(エンドツーエンドの暗号化のため)、そのCryptリモートをさらに**Chunker**でラップします(分割のため)。結果として、チャンクはアップロード前に暗号化され、プロバイダー側にはサイズ制限に収まるよう分割された不透明な暗号化データのみが見えます。これは、任意のクラウドプロバイダー上で機密性の高い大容量ファイルを扱う際に優れたアプローチであり、RcloneViewは両方のレイヤーを標準のリモート管理機能で処理するため、CLIは一切不要です。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. ファイルサイズ制限のあるベースクラウドリモートを、標準リモートとして追加します。
3. **Remoteタブ > New Remote**に進み、**Chunker**を選択して、ベースリモートとチャンクサイズを指定します。
4. Chunkerリモートを介して大容量ファイルを転送します — 分割と再結合は透過的に行われます。

Chunkerを使えば、通常であればアップロードを拒否してしまうプロバイダー上でも大容量ファイルのクラウドストレージ利用が可能になります — ファイルサイズ制限が本来なら作業を妨げてしまうような、データ量の多いワークフローにとって強力な仮想リモートです。

---

**関連ガイド:**

- [仮想リモート — RcloneViewでCombine、Union、Aliasを組み合わせる](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [RcloneViewでゼロCLIのCryptリモート設定](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [RcloneViewでクラウドのファイルサイズ制限エラーを解決する](https://rcloneview.com/support/blog/fix-cloud-file-size-limit-errors-rcloneview)

<CloudSupportGrid />
