---
slug: rcloneview-steam-deck-cloud-sync
title: "Steam DeckでRcloneViewを使ってクラウドストレージとゲームバックアップを活用する"
authors:
  - tayson
description: "Steam Deckの限られたSSD容量では、クラウドストレージが不可欠です。Steam DeckにRcloneViewをインストールしてゲームセーブをバックアップし、スクリーンショットや録画をGoogle Drive、OneDrive、S3に同期して、携帯機の空き容量を確保する方法を解説します。"
keywords:
  - steam deck cloud storage
  - steam deck game backup
  - rcloneview steam deck
  - steam deck google drive sync
  - steam deck onedrive backup
  - steam deck cloud save backup
  - steamos rcloneview install
  - steam deck screenshot sync
  - steam deck file manager
  - steam deck external cloud storage
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Steam DeckでRcloneViewを使ってクラウドストレージとゲームバックアップを活用する

> Steam Deckはフルスペックの PC を携帯機に詰め込んでいますが、64GB、256GB、512GBのSSDはすぐに一杯になります。クラウドストレージを使えば、Deckをゲームバックアップ、スクリーンショット、録画などのために事実上無制限の容量を持つデバイスに変えることができます。

ValveのSteam DeckはArchベースのLinuxディストリビューションであるSteamOSを、カスタムのKDE Plasmaデスクトップモードとともに搭載しています。Steam純正のクラウドセーブ機能は一部のゲームには対応していますが、Steam以外のタイトル、エミュレートされたゲーム、MOD設定、シェーダーキャッシュ、そして時間とともに蓄積されるスクリーンショットやゲームプレイ録画はカバーされません。限られたSSD容量のため、ストレージ管理は常に悩みの種です。RcloneViewはSteam Deckユーザーに、ゲームセーブをGoogle Drive、OneDrive、S3にバックアップし、スクリーンショットや録画をクラウドストレージに同期し、大きなファイルをオフロードして内蔵ドライブの空き容量を確保するための、グラフィカルなマルチクラウドファイルマネージャーを提供します。このガイドでは、デスクトップモードでのインストール、クラウドリモートの設定、そしてSteam Deckのデータを安全に保ちながらストレージをすっきり保つための実践的なワークフローを解説します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Steam Deckでクラウドストレージが必要な理由

Steam Deckは高性能なゲーミングPCですが、そのストレージ制約は実際の問題を生み出します。

- **SSDの空き容量がすぐに埋まる** — 最近のゲームは1本あたり50〜100GBを超えることもあります。512GBモデルでも、AAAタイトルを数本インストールしただけで一杯になります。
- **Steam Cloudはすべてをカバーしない** — 多くのゲームはSteam Cloudセーブに対応していません。Steam以外のゲーム(GOG、互換レイヤー経由のEpic、エミュレートされたタイトル)には、そもそも組み込みのクラウドバックアップがありません。
- **スクリーンショットや録画が溜まっていく** — Deckはスクリーンショットの撮影やゲームプレイの録画が簡単にできますが、これらのファイルは限られたストレージを圧迫します。
- **MOD設定は失われやすい** — Deck上でゲームをMod化している場合、その設定はローカルファイルシステムに保存されており、SteamOSのアップデートや工場出荷時リセットの際に失われる可能性があります。
- **外部への自動バックアップがない** — Steam Deckには、任意のファイルを外部のクラウドストレージにバックアップする組み込みの仕組みがありません。

RcloneViewはSteam Deckを主要なクラウドプロバイダーに接続することで、これらの問題を解決し、必要なときやスケジュールに沿ってファイルをクラウドにプッシュできるようにします。

## デスクトップモードへの切り替え

インストールと設定はすべてSteam Deckのデスクトップモードで行います。切り替え方法は以下の通りです。

1. Deckの**Steamボタン**を押します。
2. **電源 > デスクトップに切り替え**に移動します。
3. Deckが再起動し、タスクバー、ファイルマネージャー(Dolphin)、ターミナル(Konsole)を備えたフルのKDE Plasmaデスクトップが起動します。

デスクトップモードでは完全なLinuxデスクトップ環境を利用できます。タッチスクリーンやトラックパッドを使うことも、より快適な操作のためにUSB-CやBluetoothでキーボードとマウスを接続することもできます。

## Steam DeckへのRcloneViewのインストール

SteamOSはデフォルトでルートファイルシステムが読み取り専用になっており、従来のパッケージインストール方法には制限があります。ソフトウェアをインストールする最良の方法は、Flatpak(公式にサポートされている方法)とAppImageの2つです。

### 方法1: AppImage(推奨)

AppImage方式は最もシンプルで、システムを変更せずに利用できます。

1. デスクトップモードで**Firefox**ブラウザを開きます(SteamOSにプリインストールされています)。
2. [rcloneview.com](https://rcloneview.com/src/download.html)にアクセスし、Linux用のAppImageをダウンロードします。
3. **Dolphin**(ファイルマネージャー)を開き、Downloadsフォルダに移動します。
4. AppImageファイルを右クリックし、**プロパティ > パーミッション**を選択して**実行可能**にチェックを入れます。
5. ダブルクリックして実行します。

または、Konsole(ターミナル)から以下を実行します。

```bash
chmod +x ~/Downloads/RcloneView-*.AppImage
~/Downloads/RcloneView-*.AppImage
```

Downloadsフォルダをすっきり保つために、AppImageを恒久的な場所に移動します。

```bash
mkdir -p ~/Applications
mv ~/Downloads/RcloneView-*.AppImage ~/Applications/
```

RcloneViewをアプリケーションメニューに追加するには、デスクトップエントリを作成します。

```bash
cat > ~/.local/share/applications/rcloneview.desktop << 'EOF'
[Desktop Entry]
Name=RcloneView
Exec=/home/deck/Applications/RcloneView-latest.AppImage
Icon=rcloneview
Type=Application
Categories=Utility;FileManager;
EOF
```

ファイル名は実際のAppImageファイル名に置き換えてください。

### 方法2: 読み取り専用ファイルシステムの無効化(上級者向け)

通常のArchシステムのようにpacman経由でパッケージをインストールしたい場合は、読み取り専用ファイルシステムを無効化できます。

```bash
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -Syu rclone fuse3
```

**警告:** 読み取り専用ファイルシステムを無効化すると、SteamOSのアップデート時に変更内容が上書きされる可能性があります。システムアップデートに対する耐性という点では、AppImage方式の方が優れています。

### インストールの確認

RcloneViewを起動します。リモートエクスプローラーを備えたメイン画面が表示されるはずです。タッチスクリーンを使用している場合、基本的な操作には十分な応答性がありますが、長時間のファイル管理作業にはマウスの使用を推奨します。

## クラウドストレージアカウントの接続

RcloneViewをデスクトップモードで起動した状態で、クラウドストレージプロバイダーを追加します。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. **新しいリモート**をクリックし、**Google Drive**を選択します。
2. OAuthフローがFirefoxで開きます。Googleアカウントでログインし、アクセスを許可します。
3. リモートを保存します。これでGoogle Drive全体がRcloneViewからアクセス可能になります。

### OneDrive

1. **新しいリモート**をクリックし、**Microsoft OneDrive**を選択します。
2. Firefox上のMicrosoftログインページで認証します。
3. 個人用OneDriveかOneDrive for Businessを選択します。
4. リモートを保存します。

### S3互換ストレージ(Backblaze B2、Wasabi、AWS)

1. **新しいリモート**をクリックし、使用するS3プロバイダーを選択します。
2. アクセスキーとシークレットキーを入力します。
3. リージョンとエンドポイントを指定します。
4. リモートを保存します。

Steam Deckユーザーにとって、Google DriveとOneDriveが最も一般的な選択肢です。多くのゲーマーがすでにこれらのアカウントを持っているためです。Backblaze B2やWasabiのようなS3互換プロバイダーは、大容量のゲームバックアップアーカイブに対してコスト効率の良いストレージを提供します。

## ゲームセーブのバックアップ

これはほとんどのSteam Deckユーザーにとって主要な用途です。ゲームのセーブファイルは小さいながらも代えがきかないものです。RcloneViewを使ったバックアップ方法は以下の通りです。

### セーブファイルの場所

Deck上のSteamゲームセーブは、通常以下の場所にあります。

- **Steam Protonセーブ:** `~/.local/share/Steam/steamapps/compatdata/[APPID]/pfx/drive_c/users/steamuser/`
- **ネイティブLinuxセーブ:** `~/.local/share/[GameName]/` または `~/.config/[GameName]/`
- **エミュレートされたゲームのセーブ:** エミュレータによって異なります(RetroArchのセーブは通常 `~/.config/retroarch/saves/` にあります)

### セーブバックアップジョブの作成

1. RcloneViewで、左ペインにローカルファイルシステムを開き、セーブフォルダに移動します。
2. 右ペインにクラウドリモートを開き、保存先フォルダ(例: `SteamDeck/Saves/`)を作成します。
3. セーブファイルまたはフォルダを選択し、クラウドにコピーします。

継続的な保護のために、同期ジョブを作成します。

1. ソースをローカルのセーブディレクトリに設定します。
2. 保存先をクラウドのバックアップフォルダに設定します。
3. 毎日、または任意の頻度でジョブが実行されるようにスケジュールします。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

こうしておけば、ゲームセッションを終えてデスクトップモードに切り替えるたびに、最新のセーブが自動的にクラウドにプッシュされます(あるいは、ゲーミングモードに戻る前に手動でジョブを実行することもできます)。

## スクリーンショットと録画の同期

Steam Deckは `~/.local/share/Steam/userdata/[USERID]/760/remote/[APPID]/screenshots/` にスクリーンショットを保存します。ゲームプレイの録画(デスクトップモードでOBSなどのツールを使用している場合)は、設定した任意の場所に保存できます。

### スクリーンショット同期の設定

1. RcloneViewで、左ペインにスクリーンショットディレクトリを開きます。
2. 右ペインにクラウドの保存先フォルダ(例: `SteamDeck/Screenshots/`)を開きます。
3. 新しいスクリーンショットをクラウドにプッシュする同期ジョブを作成します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

スクリーンショットは通常小さい(1〜5MB程度)ため、控えめなインターネット回線でも同期ジョブはすぐに完了します。ゲームプレイの録画は数百MBから数GBに及ぶこともあるため、Deckがドッキングされ、Wi-Fiに接続されているときにアップロードをスケジュールすることを検討してください。

### アップロード後の容量解放

スクリーンショットや録画が安全にクラウドに保存された後は、ローカルのコピーを削除してSSD容量を取り戻すことができます。RcloneViewの移動操作(コピーとは異なり)は、ファイルを転送してソースを削除する処理を一度に行います。この操作は慎重に行ってください。ローカルファイルを削除する前に、クラウド上にコピーが存在することを確認してください。

## 限られたSSDでのストレージ管理

セーブやメディアのバックアップに加えて、RcloneViewはSteam Deckのより広範なストレージ管理にも役立ちます。

- **古いゲームデータのアーカイブ** — ゲームをクリアしてセーブは残しつつ容量を取り戻したいですか?セーブデータをクラウドに同期してから、ゲームをアンインストールします。後で再インストールする際は、クラウドからセーブを復元できます。
- **MODファイルのオフロード** — 大容量のMODパッケージ(テクスチャの改変や完全変換系のMOD)は、クラウドストレージにバックアップし、必要になったら再ダウンロードできます。
- **メディア用にクラウドストレージをマウント** — Google DriveやOneDriveのフォルダをローカルディレクトリとしてマウントし、SSDに保存せずにクラウドからメディア(音楽、動画)をストリーミングできます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

### Steam Deckでのクラウドストレージのマウント

クラウドリモートをローカルファイルシステムとしてマウントするには、以下の手順を行います。

1. FUSEが利用可能であることを確認します。デフォルトのSteamOSでは、通常FUSEサポートが含まれています。含まれていない場合は以下を実行します。

```bash
sudo steamos-readonly disable
sudo pacman -S fuse3
sudo steamos-readonly enable
```

2. RcloneViewでリモートを右クリックして**マウント**を選択するか、マウントマネージャーを使用します。
3. マウントポイント(例: `~/CloudDrive/`)を選択します。
4. キャッシュ設定を構成します。メディアファイルを扱う際に最良の体験を得るには、VFSキャッシュモードを「full」に設定します。

マウントされたドライブはDolphinに表示され、あらゆるアプリケーションからアクセスできます。例えば、メディアプレーヤーをマウントされたクラウドフォルダに向けることで、SSD容量を一切使わずに音楽ライブラリをストリーミングできます。

## Steam Deckユーザーのための実践的なワークフロー

### 旅行前

1. デスクトップモードに切り替えます。
2. セーブバックアップジョブを実行し、最新のセーブをクラウドにプッシュします。
3. RcloneViewのジョブ履歴でバックアップが完了したことを確認します。
4. ゲーミングモードに戻ります。

### ゲームセッション後

1. デスクトップモードに切り替えます。
2. スクリーンショット同期を実行し、新しいキャプチャをクラウドにプッシュします。
3. 必要に応じて、ローカルのスクリーンショットを削除して容量を解放します。
4. ゲーミングモードに戻ります。

### SteamOSアップデートまたは工場出荷時リセット後

1. デスクトップモードに切り替えます。
2. RcloneViewを再インストールします(AppImage方式なら数秒で完了します)。
3. クラウドリモートを再設定します(またはクラウドにバックアップしておいたrclone設定ファイルを復元します)。
4. クラウドからセーブファイルを取り戻します。
5. ゲームを再開します。

復旧をより速くするために、rclone設定ファイル(`~/.config/rclone/rclone.conf`)もクラウドにバックアップしておきましょう。このファイルにはリモートの定義情報が含まれており、復元することですべてのクラウドアカウントを即座に再接続できます。

## はじめに

1. Steam Deckで**デスクトップモードに切り替えます**。
2. **RcloneViewのAppImageをダウンロード**し、実行可能にします。
3. **クラウドアカウントを追加します** — Google Drive、OneDrive、S3が最も一般的な選択肢です。
4. セーブディレクトリからクラウドフォルダへの同期ジョブを作成して**ゲームセーブをバックアップします**。
5. SSD容量を確保し、キャプチャを安全に保つために**スクリーンショットを同期します**。
6. 手動同期を忘れてもデータが常に保護されるよう、**定期的なバックアップをスケジュールします**。

Steam Deckは携帯型のゲーミングパワーハウスですが、そのストレージ容量には限りがあります。RcloneViewは、あらゆるクラウドアカウントをDeckのファイルシステムの拡張として機能させ、セーブを安全に保ち、スクリーンショットを整理し、次のゲームのためにSSDの空き容量を確保します。

---

**関連ガイド:**

- [リモートストレージの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [ジョブの実行と管理](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
