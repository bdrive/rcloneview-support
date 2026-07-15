---
sidebar_position: 15
description: "RcloneViewのバーチャルリモートについて理解し、より速く安全なクラウドワークフローのためにAlias、Crypt、Combine、Unionなどのバーチャルレイヤーを追加する方法を学びます。"
keywords:
  - rcloneview
  - virtual remote
  - alias
  - crypt
  - union
  - combine
  - cache
  - chunker
  - hasher
  - compress
tags:
  - RcloneView
  - virtual-remote
  - remote-storage
  - encryption
  - multi-cloud
date: 2025-12-08
author: tayson
---

# バーチャルリモートの概要と設定

バーチャルリモートは、既存のクラウドリモートの上に機能レイヤーを追加します。データそのものは保存せず、現在のリモートをより便利に、より高速に、より安全に、より柔軟にします。

---

## バーチャルリモートとは？

バーチャルリモートは、次のような機能レイヤーです。

- データを移動させずに既存のリモートを拡張します。
- ストレージは元のリモートに保持したまま、利便性を追加します。
- より高速なアクセス、プライバシー保護、統合ビューを実現します。

---

## バーチャルリモートの種類

RcloneViewは9種類のバーチャルリモートを提供しています。

1. **Alias**  
   特定のクラウドフォルダに直接移動するためのショートカット。  
   例：Google Driveの深い階層のパスをブックマークして即座にアクセス。  
   👉 参照：[Aliasリモートガイド](/howto/remote-storage-connection-settings/alias-remote)

2. **Crypt**  
   ファイル名、内容、フォルダを暗号化してプライバシーを保護します。  
   👉 参照：[Cryptリモートガイド](/howto/remote-storage-connection-settings/crypt-remote)

3. **Memory**  
   データをRAMに保存し、超高速な一時利用が可能。閉じるとクリアされます。

4. **Cache**  
   キャッシュによって低速なリモートを高速化し、繰り返しの読み取りやストリーミングを高速化します。

5. **Chunker**  
   大きなファイルをチャンクに分割し、サービスのサイズ制限を回避して安定性を向上させます。

6. **Combine**  
   複数のフォルダを1つのリモートの下に別々のサブフォルダとして表示します。  
   👉 参照：[Combineリモートガイド](/howto/remote-storage-connection-settings/combine-remote)

7. **Union**  
   複数のフォルダを1つの統合ビューにマージします。  
   👉 参照：[Unionリモートガイド](/howto/remote-storage-connection-settings/union-remote)

8. **Hasher**  
   バックエンドにハッシュ機能がない場合に追加します。整合性チェックに便利です。

9. **Compress**  
   アップロード前にファイルを圧縮して容量を節約します。

---

## バーチャルリモートの追加方法

すべてのバーチャルリモートは**New Remote > Virtual**から作成します。

<img src="/support/images/en/howto/remote-storage-connection-settings/add-remote-virtual.png" alt="add virtual remote" class="img-large img-center" />

### ステップ1 — New Remoteを開く

- 上部メニューから：**`Remote` > `New Remote`**。
- **`Virtual`**タブを選択すると、すべてのバーチャルリモートの種類が表示されます。

### ステップ2 — バーチャルリモートの種類を選ぶ

種類ごとに必要な項目が異なります。例：

- **Alias**：名前 + ターゲットフォルダ。
- **Crypt**：暗号化パスワード + ターゲットフォルダ。
- **Union**：複数の`Remote:Path`アップストリーム。
- **Combine**：ディレクトリラベル + リモートパスのリスト。
- **Chunker**：ソースリモート + チャンク設定。

RcloneViewが各種類に必要な入力項目をガイドしてくれます。

### ステップ3 — バーチャルリモートを使用する

作成後、バーチャルリモートは以下の場所で通常のリモートと同じように表示されます。

- **Remote Manager**
- **Explorer**ファイルブラウザ
- **Sync / Compare / Job**ダイアログ

覚えておいてください：バーチャルリモートは機能レイヤーです。実際のファイルは元のリモートパスに保存されたままです。

---

## バーチャルリモートを使うタイミング

| ニーズ                           | 推奨バーチャルリモート |
| -------------------------------- | ----------------------- |
| クラウドセキュリティを強化する   | Crypt                   |
| 複数のフォルダをまとめて表示する | Union                   |
| 複雑なパスをブックマーク・整理する | Alias                 |
| 複雑なプロジェクトを整理する     | Combine                 |
| 非常に大きなファイルをアップロードする | Chunker             |
| 繰り返しの読み取りを高速化する   | Cache                   |
| データの整合性を検証する         | Hasher                  |
| 圧縮でストレージを節約する       | Compress                |

---

## クイックリファレンス

| バーチャルリモート | 役割                                       |
| ------------------- | ------------------------------------------ |
| Alias                | フォルダのショートカット                   |
| Crypt                | 暗号化されたストレージ                     |
| Memory               | RAMベースの一時ストレージ                  |
| Cache                | キャッシュによる高速化                     |
| Chunker              | アップロード用に大きなファイルをチャンク化 |
| Combine              | 複数のフォルダを別々のビューとしてグループ化 |
| Union                | 複数のフォルダを1つのビューにマージ         |
| Hasher               | 整合性チェックのためのハッシュ追加         |
| Compress             | アップロード前にファイルを圧縮             |

バーチャルリモートは、クラウドワークフローをより強力かつ柔軟にします。RcloneViewでは、複雑な設定を行うことなく、わずか数クリックでこれらの機能を有効にできます。

