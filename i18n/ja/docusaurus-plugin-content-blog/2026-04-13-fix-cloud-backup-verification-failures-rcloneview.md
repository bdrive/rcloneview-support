---
slug: fix-cloud-backup-verification-failures-rcloneview
title: "クラウドバックアップの検証失敗を修正 — RcloneViewでデータ整合性を確保"
authors:
  - tayson
description: "RcloneViewでクラウドバックアップのチェックサム不一致や検証失敗をトラブルシューティングします。フォルダ比較の使用、設定の確認、転送の再実行によりデータ整合性を確保します。"
keywords:
  - cloud backup verification failure RcloneView
  - checksum mismatch cloud sync
  - fix backup integrity error rclone
  - cloud transfer checksum error
  - RcloneView data integrity check
  - rclone checksum verification failure
  - backup corruption fix rclone
  - cloud sync verification troubleshooting
tags:
  - RcloneView
  - troubleshooting
  - tips
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウドバックアップの検証失敗を修正 — RcloneViewでデータ整合性を確保

> クラウド転送後のチェックサム不一致は、プロバイダーの差異または実際の破損を示している可能性があります。どちらのシナリオに該当するかを理解することが、正しい修正方法を決める鍵となります。

大規模なバックアップが完了した後、チェックサムの不一致、本来同一であるべきファイルが異なるとマークされる、あるいはRcloneViewの比較ツールでのエラーなど、検証失敗に遭遇することがあります。これらの失敗には、無害なプロバイダーのメタデータの違いから、実際のデータ破損まで、さまざまな原因が考えられます。本ガイドでは、それぞれのシナリオを診断し、正しい修正方法を適用する手順を説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## チェックサムの種類を理解する

クラウドプロバイダーによってサポートされるチェックサムアルゴリズムは異なります。AWS S3は標準アップロードにMD5、チェックサムにSHA-256を使用します。Google DriveはMD5を使用します。Backblaze B2はSHA1を使用します。Dropboxは独自のブロックハッシュを使用します。rcloneが異なるハッシュアルゴリズムを使用する2つのプロバイダー間でファイルを比較する場合、ハッシュ比較の代わりにサイズ比較と更新日時の比較にフォールバックします。

つまり、RcloneViewのフォルダ比較ビューで表示される「不一致」は、必ずしも破損を意味するわけではありません。プロバイダーが互換性のないハッシュタイプを使用しており、rcloneがサイズのみで比較していることを示している場合があります。実際の破損は、サイズが一致していても同じアルゴリズムでハッシュ値が異なる、という形で現れます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify backup verification failures" class="img-large img-center" />

## 同期ジョブでチェックサム検証を有効にする

転送時に実際の破損を検出するには、同期ジョブの設定でチェックサム検証を有効にします。RcloneViewでジョブを開き、ステップ2に移動します。**チェックサム**オプションを有効にします。これを有効にすると、rcloneは転送中にハッシュを計算し比較します。アップロード後にファイルのハッシュが一致しない場合、rcloneは転送を再試行します。

注：チェックサム検証を有効にすると、CPU使用率と転送時間がわずかに増加しますが、他の方法では検出されないデータ破損を検出できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling checksum verification in RcloneView sync job settings" class="img-large img-center" />

## フォルダ比較を使用して不一致を検出する

バックアップが完了したら、RcloneViewで**フォルダ比較**を開きます。片方をソースに、もう片方をバックアップ先に設定します。RcloneViewはファイルを3つのカテゴリで表示します。

- **一致**：両側で同一
- **ソースのみ**：ソースには存在するが、宛先には存在しない
- **宛先のみ**：宛先には存在するが、ソースには存在しない
- **異なる**：名前は同じだが属性（サイズ、ハッシュ、更新日時）が異なる

「異なる」カテゴリのファイルは、より詳しい調査が必要です。サンプルをダウンロードして比較し、内容が実際に異なるのか、あるいはプロバイダー由来のメタデータのアーティファクトなのかを確認してください。

## ターミナル経由でチェックを実行する

より詳細な整合性チェックには、RcloneViewの**ターミナル**タブからrcloneコマンドを直接実行できます。ソースと宛先を徹底的に比較するには`rclone check`を使用します。

```
rclone check source:path destination:path --one-way
```

このコマンドは、各プロバイダーで利用可能な最良のハッシュを使用して、両側で異なるすべてのファイルを一覧表示します。出力には不一致があるファイルが正確に示され、問題が体系的なものか個別のものかを特定しやすくなります。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running rclone check command in RcloneView Terminal" class="img-large img-center" />

## 異なる設定で再実行する

検証失敗が継続し、ファイルが実際に異なる場合は、以下の設定でバックアップジョブを再実行してください。

- **チェックサム検証を有効化**：rcloneが再転送と検証を確実に行うようにします
- **既存ファイルを無視**：存在しているように見えるファイルでも強制的に再転送します
- **低レベルリトライ回数を増加**：転送成功のためのチャンスを増やします

ハッシュアルゴリズムが異なるプロバイダー間のバックアップでは、ジョブの詳細設定でハッシュのみの比較モードの代わりに**サイズと更新日時**の比較モードに切り替えてください。これにより、ハッシュ非互換による誤検知を減らせます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneView**をダウンロードします。
2. 同期ジョブのステップ2の転送オプションで**チェックサム検証**を有効にします。
3. バックアップ完了後、**フォルダ比較**を使用して不一致がないか確認します。
4. さらに詳しい分析が必要な場合は、**ターミナル**タブから`rclone check`を実行します。

体系的なチェックサム検証とバックアップ後の比較により、クラウドバックアップがバイト単位で正確であるという確信を得られます。

---

**関連ガイド：**

- [RcloneViewでクラウド同期のチェックサム不一致を修正する](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [RcloneViewによるチェックサム検証済みクラウド移行](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [転送後にクラウド同期でファイルが見つからない問題を修正する](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
