---
slug: bisync-bidirectional-cloud-sync-rcloneview
title: "Bisync：RcloneViewで実現する真の双方向クラウド同期"
authors:
  - tayson
description: "RcloneViewでrcloneのbisync機能を使い、2つのクラウドの場所を双方向に同期させる方法。bisyncを使うべき場面、設定方法、競合の対処法を解説します。"
keywords:
  - bisync rcloneview
  - bidirectional cloud sync rclone
  - rclone bisync guide
  - two-way cloud sync
  - sync both directions cloud
  - rcloneview bisync setup
  - rclone bidirectional sync
  - google drive bidirectional sync
  - onedrive two-way sync
  - cloud folder two-way mirror
tags:
  - sync
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync：RcloneViewで実現する真の双方向クラウド同期

> 標準のrclone Syncは一方向のみ——転送先を転送元に一致させます。Bisyncはさらに進んで、どちらの場所での変更も相手側に反映されます。場所Aにファイルを追加すると場所Bにも現れ、逆も同様です。RcloneViewでの設定方法を紹介します。

多くのクラウド同期シナリオは一方向です。ローカルマシンがクラウドにバックアップする、あるいはメインのクラウドがバックアップ用クラウドにミラーリングする、といった具合です。しかし、一部のワークフローでは真の双方向同期が必要になります。2人が編集する共有フォルダ、常に同期しておきたい仕事用マシンと自宅マシン、あるいは対等な立場として動作する2つのクラウドアカウントなどです。rcloneの`bisync`コマンドはこれを実現し、RcloneViewを使えばコマンドラインなしで設定できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SyncとBisyncの違い

| 動作 | rclone sync | rclone bisync |
|----------|------------|--------------|
| 方向 | 一方向（転送元 → 転送先） | 双方向（両方向） |
| 削除 | 転送元にないファイルは転送先から削除 | 削除を両方向に伝播 |
| 競合 | 常に転送元が優先 | 明示的な競合処理が必要 |
| データ損失のリスク | 方向を誤ると発生し得る | 両側をチェックするためリスクが低い |
| 複雑さ | シンプル | より複雑で、慎重な設定が必要 |

## Bisyncを使うべき場面

**Bisyncを使うべき場合：**
- 2人以上の人やシステムが同じフォルダに変更を加える。
- 常時オンラインとは限らない複数のデバイスでファイルを編集する。
- 双方向の変更を伴う、2つのクラウドアカウントをアクティブなミラーとして保持している。

**通常のSyncを使うべき場合：**
- 明確な主（転送元）と副（バックアップ／転送先）がある。
- 一方のみが新しいファイルを作成し、もう一方は読み取り専用である。
- シンプルさと予測可能性を優先したい。

## RcloneViewでのBisyncの設定

Bisyncを使うには、以降の実行で変更を追跡できるようにするための基準状態を確立する、一度限りの初期化（resync）が必要です。

### ステップ1 — 2つのリモートを追加する

両方の場所がRcloneViewでリモートとして設定されていることを確認してください。例：
- `gdrive-work:/Projects/Active/`（Google Driveの仕事用アカウント）
- `onedrive-home:/Projects/Active/`（OneDriveの自宅用アカウント）

<img src="/support/images/en/blog/new-remote.png" alt="Configure remotes for bisync in RcloneView" class="img-large img-center" />

### ステップ2 — 初回のresyncを実行する

最初のbisync実行では、基準状態を確立するために`--resync`を使う必要があります。RcloneViewの**ターミナル**で：

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --resync --verbose
```

これにより、以降の実行での変更検出にbisyncが使用する基準状態ファイル（`~/.cache/rclone/bisync/`に保存）が作成されます。resyncは新しい方のファイルを各側にコピーすることで、両側を同一の状態にします。

### ステップ3 — RcloneViewでBisyncジョブを作成する

1. RcloneViewで**ジョブ**を開きます。
2. **カスタムコマンド**を選択するか、ターミナルパネルを使用します。
3. 継続的な実行用のbisyncコマンドを入力します。

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --verbose --log-file /tmp/bisync.log
```

4. ジョブとして保存し、1時間ごとまたは毎日実行されるようにスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule bisync job in RcloneView" class="img-large img-center" />

## 競合の処理

Bisyncは、実行の間に両方の場所でファイルが変更された場合に競合を検出します。デフォルトでは、rclone bisyncはこれらの競合にフラグを立て、どちらのバージョンも上書きしません。

`--conflict-resolve newer`を追加すると、新しい方のファイルを自動的に優先します。

```bash
rclone bisync path1 path2 --conflict-resolve newer
```

または、大きい方のファイルを優先する`--conflict-resolve larger`（ドキュメントが増大していくようなシナリオに有用）を使用できます。

自動的に解決されなかった競合ファイルは、`.conflict`という接尾辞を付けてリネームされ、両方のバージョンが保持されます。

## よく使われるBisyncフラグ

| フラグ | 目的 |
|------|---------|
| `--resync` | 基準状態を初期化または再確立する（一度だけ使用） |
| `--conflict-resolve newer` | 新しい方のファイルを優先して競合を自動解決する |
| `--filters-file /path/to/filters` | 含める／除外するルールを適用する |
| `--max-delete 10` | 10件を超えるファイルが削除される場合は中止する（安全対策） |
| `--dry-run` | 実際には何もせず、変更内容をプレビューする |
| `--verbose` | デバッグ用の詳細な出力 |

`--max-delete`フラグは特に重要です。設定ミスによってbisyncが大量のファイルを誤って削除してしまうのを防ぎます。

## Bisync実行の監視

各実行後、RcloneViewの**ジョブ履歴**でbisyncの出力を確認してください。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor bisync results in RcloneView" class="img-large img-center" />

正常なbisync実行では、以下が表示されます。
- path1からpath2にコピーされたファイル
- path2からpath1にコピーされたファイル
- 検出された競合とその解決方法
- 合計時間と転送統計

## Bisyncの制限事項

- **同一ファイルへの同時編集には適していません** — bisyncはリアルタイムではなく、実行と実行の間を比較します。
- **削除の伝播は危険な場合があります** — 一方で削除されたファイルは、次回の実行後にもう一方でも削除されます。
- **実行間で安定した状態が必要です** — 実行が途中で失敗した場合は、`--resync`を使って基準状態を再構築してください。
- **大規模なパスでは処理が遅くなります** — 基準状態の比較は、実行のたびに両方の場所を完全にスキャンします。

## はじめかた

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. RcloneViewで**両方のリモートを設定**します。
3. RcloneViewのターミナルから**初回の`--resync`を実行**し、基準状態を確立します。
4. 継続的な同期のために**定期的なbisync実行をスケジュール**します。

Bisyncは、ローカルディスク、クラウドプロバイダー、NAS共有など、rcloneがサポートするあらゆるリモートのペアに真の双方向同期をもたらします。

---

**関連ガイド：**

- [Sync、Copy、Move — 違いの解説](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [フィルタルールと選択的同期](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [同期方向の誤りによるデータ損失を防ぐ](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
