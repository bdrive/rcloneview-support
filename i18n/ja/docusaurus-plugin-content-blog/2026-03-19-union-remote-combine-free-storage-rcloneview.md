---
slug: union-remote-combine-free-storage-rcloneview
title: "ユニオンリモート — RcloneViewで複数の無料クラウドアカウントを1つの巨大なストレージプールに統合"
authors:
  - tayson
description: "Google Driveは15GB無料、OneDriveは5GB、Dropboxは2GB。rcloneのユニオンリモートをRcloneViewで使えば、これらすべてを1つの仮想22GBストレージプールに統合できます。"
keywords:
  - combine free cloud storage
  - union remote rclone
  - merge cloud accounts
  - combine cloud storage
  - rclone union drive
  - free cloud storage pool
  - multi cloud storage pool
  - combine google drive onedrive
  - virtual cloud storage
  - aggregate cloud storage
tags:
  - RcloneView
  - feature
  - cloud-storage
  - multi-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ユニオンリモート — RcloneViewで複数の無料クラウドアカウントを1つの巨大なストレージプールに統合

> Googleから15GB、OneDriveから5GB、Dropboxから2GB、Teraboxから1TB。それぞれは小さくても、ユニオンリモートに統合すれば無料のマルチテラバイトストレージプールになります。

多くのクラウドプロバイダーは無料ストレージ枠を提供していますが、個別に見ると本格的な用途には容量が足りません。rcloneのユニオンリモートは、複数のストレージ場所を1つの仮想ファイルシステムに統合します。RcloneViewを使えば、これを視覚的に設定した上で、統合されたプールをまるで1つの巨大なドライブのように閲覧、同期、管理できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ユニオンリモートの仕組み

ユニオンリモートは複数のリモートを1つの仮想ビューに統合します。

- **読み込み**: すべての基盤リモートのファイルが1つのディレクトリ一覧に表示されます
- **書き込み**: 新しいファイルは空き容量が最も多いリモート(または設定したポリシーに基づくリモート)に書き込まれます
- **透過性**: ユーザーは1つのリモートとしてやり取りするだけで、分散の管理はrcloneが行います

## 統合できる無料ストレージ

| プロバイダー | 無料枠 |
|----------|----------|
| Google Drive | 15 GB |
| OneDrive | 5 GB |
| Dropbox | 2 GB |
| pCloud | 10 GB |
| Terabox | 1 TB |
| MEGA | 20 GB |
| Icedrive | 10 GB |
| Koofr | 10 GB |

合計: 1TBを超える無料ストレージになる可能性があります。

## ユニオンリモートのセットアップ

<img src="/support/images/en/blog/new-remote.png" alt="Create union remote" class="img-large img-center" />

1. 各無料クラウドアカウントを個別のリモートとして追加します
2. それらをすべて統合するユニオンリモートを作成します
3. ユニオンを1つのストレージプールとして閲覧します

## 活用例

### 無料ストレージを最大限に活用する

学生、フリーランサー、予算を意識するユーザーは、無料枠を組み合わせることでかなりの無料ストレージを確保できます。

### バックアップを複数プロバイダーに分散する

バックアップデータを複数の無料アカウントに分散させ、冗長性を確保します。あるプロバイダーに問題が発生しても、他のプロバイダーにはデータが残ります。

### 階層型ストレージプールを作成する

高速なストレージ(Google Drive)と大容量ストレージ(Terabox)を1つのプールに組み合わせます。

## 統合プールを閲覧する

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse union remote" class="img-large img-center" />

2ペインエクスプローラーは、ユニオンリモートを他のリモートと同様に表示します。すべての基盤プロバイダーのファイルが一緒に表示されます。

## 重要な注意事項

- **ファイルは基盤リモート間で移動しません** — 各ファイルは書き込まれたプロバイダーに残ります
- **削除**は、そのファイルを保存しているプロバイダーからファイルを削除します
- **パフォーマンス**は、一覧表示時に最も遅い基盤プロバイダーに依存します
- **書き込みポリシー**により、新しいファイルを受け取るプロバイダーが決まります

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **無料のクラウドアカウントを追加**し、それぞれ個別のリモートとして設定します。
3. それらを統合する**ユニオンリモートを作成**します。
4. 1つのストレージプールとして**閲覧・利用**します。

小さな無料枠が、統合されて役立つものになります。

---

**関連ガイド:**

- [仮想リモート: Combine、Union、Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [クラウドの分散管理](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [リモート管理ガイド](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)

<CloudSupportGrid />
