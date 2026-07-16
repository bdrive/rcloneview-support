---
slug: migrate-google-photos-to-onedrive-rcloneview
title: "RcloneViewでGoogleフォトからOneDriveへ移行する"
authors:
  - tayson
description: "RcloneViewを使ってGoogleフォトのライブラリをOneDriveへ移行する手順ガイド。読み取り専用アクセス、フォルダ構成、メタデータの扱い、整理方法について解説します。"
keywords:
  - rcloneview
  - google photos to onedrive
  - google photos migration
  - migrate google photos
  - google photos rclone
  - onedrive photos
  - photo migration
  - cloud photo transfer
  - google photos backup
  - google photos export
tags:
  - google-photos
  - onedrive
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでGoogleフォトからOneDriveへ移行する

> 写真ライブラリは、あなたが所有する中でも最も個人的でかけがえのないコレクションの一つです。クラウド間で移動させるには慎重さが求められます。**RcloneView**は、Googleフォトのライブラリ全体を、整理構造を失うことなくOneDriveへ視覚的かつ段階的に移行する方法を提供します。

Googleフォトは、Androidおよびグーグルのエコシステムとの統合により、長年にわたって写真保存の定番の選択肢とされてきました。しかし状況は変わるものです。Microsoft 365への移行、Googleのストレージ容量の逼迫、あるいはWindowsとの緊密な統合を持つOneDriveを好む場合など、理由は様々です。理由が何であれ、数千枚(あるいは数万枚)の画像や動画を含む写真ライブラリの移行には、信頼できる手順が必要です。

課題となるのは、Googleフォトが単純なファイルシステムではないという点です。従来のフォルダではなく、日付・アルバム・メタデータによって写真を整理しています。Rcloneは、Googleフォトを構造化されたディレクトリとして表示することでこれに対応し、RcloneViewはそれを閲覧・選択し、OneDriveへ転送するための視覚的なインターフェースを提供します。監視や検証機能も備わっています。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Googleフォトをリモートとして理解する

移行を始める前に、GoogleフォトがRcloneViewにおいてクラウドリモートとしてどのように機能するかを理解しておくことが重要です。

### 読み取り専用アクセス

GoogleフォトのAPIは、ライブラリへの**読み取り専用アクセス**を提供します。つまり:

- RcloneViewを通じてすべての写真や動画を**閲覧・ダウンロード**できます。
- APIを通じてGoogleフォト上のファイルを**削除・名前変更・変更することはできません**。
- このリモートを通じてGoogleフォトへ新しいファイルを**アップロードすることはできません**。

これはGoogleのAPI側の制限であり、RcloneViewの制限ではありません。移行という目的においては、読み取り専用アクセスで十分です。今回はGoogleフォトからデータを取り出すのであって、書き込むわけではないからです。

### フォルダ構成

Googleフォトは、主に2種類のディレクトリタイプでライブラリを表示します。

- **`media/by-year/`** — すべての写真が年ごとに整理されます(例: `media/by-year/2024/`、`media/by-year/2025/`)。ライブラリ内のすべての写真が時系列で含まれます。
- **`media/by-month/`** — 同じ写真が年月ごとに整理されます(例: `media/by-month/2024/2024-06/`)。
- **`album/`** — 手動で作成したアルバムです。各アルバムは、その写真を含むフォルダとして表示されます。

アルバムに含まれる写真は、日付ベースのディレクトリにも表示されます。そのため、`media/by-year/2024/`と`album/Vacation/`の両方に同じ写真がリストされるなど、見かけ上の重複が発生することがあります。移行の際は、ファイルを二重にコピーしないよう、いずれか一つの整理方法を選ぶことをおすすめします。

## 両方のリモートを設定する

### Googleフォトの追加

1. RcloneViewを開き、**+ New Remote**をクリックします。
2. プロバイダー一覧から**Google Photos**を選択します。
3. OAuthフローに従います。Googleにリダイレクトされ、アクセス許可を求められます。写真ライブラリへの読み取り専用権限を許可してください。
4. リモートに名前を付け(例: `MyGooglePhotos`)、保存します。

### OneDriveの追加

1. 再度**+ New Remote**をクリックします。
2. プロバイダー一覧から**Microsoft OneDrive**を選択します。
3. OAuthフローに従い、OneDriveアカウントへのアクセスを許可します。
4. ドライブの種類(Personal、Business、SharePoint)を選択します。
5. リモートに名前を付け(例: `MyOneDrive`)、保存します。

これで両方のリモートがRcloneViewのExplorerに表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## OneDrive上のフォルダ構成を計画する

転送を始める前に、OneDrive上で写真をどのように整理したいかを決めておきましょう。いくつかの選択肢があります。

### オプション1: 年ベースの構造をそのまま反映する

Googleフォトの`media/by-year/`ディレクトリを、OneDrive上の`Photos/`フォルダにコピーします。OneDriveの構造は次のようになります。

```
Photos/
  2020/
  2021/
  2022/
  2023/
  2024/
  2025/
  2026/
```

これは最もシンプルな方法で、タイムライン表示ができるOneDrive標準の写真機能とも相性が良いです。

### オプション2: 月ベースの整理を使う

より細かい整理をしたい場合は`media/by-month/`をコピーします。

```
Photos/
  2024/
    2024-01/
    2024-02/
    ...
  2025/
    2025-01/
    ...
```

これは大規模なライブラリを持っていて、特定の月の写真を素早く見つけたい場合に役立ちます。

### オプション3: アルバムベースの整理

Googleフォト内できめ細かくアルバムを整理している場合は、`album/`ディレクトリをコピーします。

```
Photos/Albums/
  Vacation 2024/
  Birthday Party/
  Work Events/
```

アルバムベースの移行では、どのアルバムにも追加されていない写真が漏れる可能性があることに注意してください。完全な移行を行うには、日付ベースのいずれかの方法と組み合わせてください。

### 推奨アプローチ

ほとんどのユーザーにとって、**オプション1(年ベース)が最良の出発点**です。すべての写真を、整然とした時系列構造で網羅できます。アルバムが重要な場合は、`album/`ディレクトリのみをOneDrive上の別フォルダへコピーする2回目のパスを実行してください。

## 移行を実行する

両方のリモートを設定し、フォルダ戦略を決めたら、転送を開始します。

### ステップ1: 閲覧とプレビュー

一方のExplorerペインでGoogleフォトを、もう一方でOneDriveを開きます。Googleフォトのディレクトリ構造を移動し、写真が年、月、アルバムごとに整理されて表示されることを確認します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### ステップ2: 移行先フォルダを作成する

OneDriveペインで、移行先となる`Photos`フォルダ(または選んだ任意の名前)を作成します。

### ステップ3: テストバッチから始める

ライブラリ全体を移行する前に、まず1年分でテストします。

1. Googleフォトのペインで、`media/by-year/2025/`(または写真の枚数が扱いやすい程度の直近の年)へ移動します。
2. そのフォルダをOneDrive側の`Photos/`ディレクトリへドラッグします。
3. 転送を監視し、写真が正しく到着することを確認します。
4. OneDrive上で転送された写真をいくつか開き、正しく表示され画質が維持されていることを確認します。

### ステップ4: 完全な移行を実行する

テストが成功したら、残りの年を転送します。

1. Googleフォト上の`media/by-year/`からOneDrive上の`Photos/`への**Copy**ジョブを作成します。
2. まず**Dry Run**を実行し、総ファイル数と転送量の見積もりを確認します。
3. コピージョブを実行します。

大規模なライブラリ(1万枚以上の写真)の場合、これには数時間かかることがあります。RcloneViewはリアルタイムで進捗を表示します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

### ステップ5: アルバムを移行する(任意)

OneDrive上にもアルバム構造を持たせたい場合は次の手順を行います。

1. Googleフォト上の`album/`からOneDrive上の`Photos/Albums/`への2つ目のコピージョブを作成します。
2. コピーを実行します。これにより、年ベースのフォルダに既に存在する写真の重複コピーが作成されることに注意してください。ストレージ容量が気になる場合は、このステップをスキップするか、特定のアルバムのみを選択的にコピーすることを検討してください。

## メタデータとファイル形式について理解する

### 転送されるもの

- **元の解像度の写真と動画** — ファイルは、圧縮された「ストレージ セーバー」版ではなく、元の画質のまま転送されます。
- **ファイル名** — カメラ本来のファイル名がそのまま保持されます(例: `IMG_20240615_143022.jpg`)。
- **ファイルの日付** — 形式が対応している範囲で、作成日時と更新日時のタイムスタンプが保持されます。

### 転送されないもの

- **Googleフォトのメタデータ** — 説明文、タグ、顔認識データ、位置情報など、Googleフォトのデータベースに保存されている情報は転送されません。これらのメタデータはGoogleのプラットフォームに固有のものです。
- **Googleフォト上で行った編集** — Googleフォト内で写真を編集(トリミング、フィルター適用など)した場合、APIを通じて取得できるのは元の未編集バージョンのみです。編集済みバージョンにはアクセスできません。
- **共有アルバムのコンテキスト** — 他のユーザーから共有された写真は、Google側の共有設定によってはアクセスできない場合があります。

### EXIFデータ

朗報として、重要なメタデータの大部分は、EXIFデータとして写真ファイル自体に直接埋め込まれています。これには以下が含まれます。

- 写真が撮影された**日時**。
- **カメラモデル**と設定(絞り、シャッタースピード、ISO)。
- **GPS座標**(撮影時に位置情報が有効だった場合)。

このEXIFデータはファイルとともに転送され、OneDrive、Windows フォト、その他ほぼすべての写真管理アプリで読み取り可能です。

## 移行結果を検証する

転送が完了したら、すべてが正しく到着したことを確認しましょう。

### フォルダの比較

RcloneViewの**Compare**機能を使用します。

1. 一方のペインでGoogleフォトを、もう一方でOneDriveを開きます。
2. 対応するディレクトリ(例: `media/by-year/2024/`と`Photos/2024/`)へ移動します。
3. 比較を実行し、Googleフォトには存在するがOneDriveに存在しないファイルがないか確認します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

### 写真の抜き取り確認

OneDrive上で転送された写真をいくつか開き、以下を確認します。

- 画像が正しく表示され、破損していないこと。
- 動画が正常に再生されること。
- ファイルサイズが期待通りであること(Googleフォト上で5MBのJPEGは、OneDrive上でもおおむね5MBであるはず)。

### ジョブ履歴の確認

転送中にエラーがなかったか、**Job History**パネルを確認します。よくある問題には以下が含まれます。

- ファイル名に対応していない文字が含まれることによる**ファイルのスキップ**。
- 非常に大きな動画ファイルに対する**タイムアウトエラー**。
- GoogleのAPIによる**レート制限**(まれですが、非常に大規模なライブラリでは起こり得ます)。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## スムーズな移行のためのヒント

- **移行はオフピーク時間帯に実行する。** 大規模な写真ライブラリの転送には数時間かかることがあります。夜間に開始することで、プロセスを中断なく進めることができます。
- **非常に大規模なライブラリにはスケジューリングを利用する。** 5万枚以上の写真がある場合は、毎日実行されるスケジュールジョブを作成しましょう。実行のたびに前回の続きから処理が行われ、常時監視することなく数日かけて移行が完了します。
- **Googleフォトはまだ削除しない。** OneDriveへのコピーを完全に検証するまでは、Googleフォトのライブラリをそのまま保持しておきましょう。いずれにせよGoogleフォトはAPI経由では読み取り専用のため、RcloneViewによって誤って削除されるリスクはありません。
- **OneDriveのストレージ容量を確認する。** OneDriveのプランに、写真ライブラリ全体を収めるだけの十分な空き容量があることを確認してください。Microsoft 365 Personalには1TB、Familyプランでは最大6TBの共有容量が含まれます。
- **OneDriveのカメラロール連携も検討する。** 移行後は、OneDriveのモバイルアプリで新しい写真を自動アップロードするよう設定できます。これにより、今後Googleフォトからスムーズに移行できます。
- **GoogleのAPIレート制限に注意する。** Google Photos APIには使用量の割り当てがあります。レート制限に達した場合、RcloneViewは自動的に再試行しますが、転送が一時的に遅くなることがあります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. New Remoteウィザードで、OAuthを通じて**Googleフォトを接続**します(読み取り専用アクセス)。
3. OAuthを通じて**OneDriveを接続**します。
4. **閲覧、コピー、検証を行う** — あなたの大切な写真の思い出を、安全に移行しましょう。

あなたの写真はかけがえのないものです。RcloneViewは、それらを安全にOneDriveへ届けます。

---

**関連ガイド:**

- [OAuthオンラインログインの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [フォルダ内容の比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [ジョブの実行と管理](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
