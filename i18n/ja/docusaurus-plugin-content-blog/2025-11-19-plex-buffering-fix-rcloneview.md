---
slug: plex-buffering-fix-rcloneview
title: "RcloneViewでPlexのバッファリングを高速に解消 — マウント、VFSキャッシュ、ネットワーク制限を調整"
authors:
  - tayson
description: マウントマネージャー、VFSキャッシュのプリセット、パフォーマンス診断を備えたRcloneViewを使えば、CLIフラグを追いかけなくてもGoogle Drive、Dropbox、S3などのクラウドからのPlexストリーミング時のバッファリングを解消できます。
keywords:
  - rcloneview
  - plex buffering fix
  - plex vfs cache
  - rclone plex mount
  - plex stuttering cloud
  - google drive plex
  - plex 4k streaming
tags:
  - plex
  - performance
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでPlexのバッファリングを高速に解消 — マウント、VFSキャッシュ、ネットワーク制限を調整

> Plexの滑らかさは、その背後にあるストレージ次第です。RcloneViewを使えば、Google Drive、Dropbox、Wasabi、S3から4Kライブラリを途切れなくストリーミングするために必要なすべての設定を確認、調整、監視できます。

Plexのバッファリングにはさまざまな原因があります—低速なディスク、非力なVFSキャッシュ、積極的すぎるスキャナー、あるいはGoogle Driveのスロットリングなどです。RcloneViewはrcloneの上にGUIを重ねることで、フラグを暗記しなくてもクラウドをマウントし、キャッシュモードを調整し、リアルタイムのスループットを確認できるようにします。この記事では、Plex管理者がカクつきを解消し、一気見の夜を取り戻すためのチェックリストを紹介します。

<!-- truncate -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## クイックトリアージ: Plex、ネットワーク、マウントのどれが原因か

| 症状 | 想定される原因 | RcloneViewで確認すべき項目 |
| --- | --- | --- |
| 30〜60秒後にバッファリングが発生する | キャッシュがファイル全体を保持できていない、またはキャッシュが低速なディスク上にある | マウント詳細 → キャッシュモード（**Full**）、SSD上で十分な大きさの**Cache max size** |
| チャプターをスキップするとバッファリングする | キャッシュされたデータの有効期限が短すぎる | 詳細マウントオプション → **Cache max age**を長めに、**Dir cache time**（5〜15分） |
| ローカルでは問題なく再生できるがリモートでは止まる | ネットワーク/ISPのボトルネック | マウントが高速なストレージ上にあることを確認し、LAN/ISPをチェック。Mount Managerでマウントが維持されているか確認する |
| SDは再生できるが4Kは失敗する | 大きなファイルに対してキャッシュサイズが小さすぎる、またはマウントパスが変更された | 詳細オプション → **Cache max size**を増やし、Plex用に固定の**Target**または**Mount to local path**を維持する |
| ライブラリスキャンでPlexがフリーズする | ディレクトリの取得が繰り返される | 詳細オプション → **Dir cache time**（例: 5〜15分）；スキャンはオフピーク時間帯にスケジュールする |

マウントがボトルネックであれば、解決策はRcloneViewにあります。

## ステップ1 — 適切なデフォルト設定でクラウドをマウントする

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

1. **Explorer → + New Remote**でクラウドリモート（Google Drive、Dropbox、Wasabi、S3など）を追加します。手順の確認が必要な場合は[/support/howto/remote-storage-connection-settings/add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)を参照してください。
2. **Mount Manager → Add Mount**を開きます。
3. メディアが入っているリモートフォルダー（`gdrive-media:Movies`）を選択し、Plexから見えるマウントパスを設定します（Windowsではドライブレター、macOS/Linuxでは`/Volumes/CloudMovies`など）。
4. Plexが固定のドライブレターを必要としない限り、**Target**は`Auto`のままにしておきます。固定したい場合は、レター（Windows）を選択するか、**Mount to local path**を有効にして永続的なフォルダーを指定します（Linux/macOS）。
5. **Advanced**では、Windowsの場合は**Mount type**を`cmount`のままにします。すでにLinux/macOSでNFSを利用している場合のみ`nfsmount`を使用してください。Windowsでは**Network drive**をチェックし、Plexサービスがマウントを認識できるようにします。Plexが別ユーザーとして実行される場合はLinuxで**Allow other**を使用します。マウントを通じてファイルや字幕を追加する場合は**Read only**をオフのままにしておきます。
6. **Cache mode**では**Full**を選択します（Plexに最適）。大きなメディアをキャッシュしておくために、同じダイアログで**Cache max size**、**Cache max age**、**Dir cache time**を設定します。
7. サーバー再起動後にマウントが復元されるよう**Auto start on launch**を有効にします。

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />


### Plexユーザー向けに解説する詳細マウントオプション

これらのフィールド名はRcloneViewのMountダイアログの表示と一致します。デフォルト値は[Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)ガイドに準拠しており、「Plex向け設定」列ではストリーミング用にどう設定すればよいかを説明します。

| RcloneViewのフィールド | 制御する内容 | Plex向け設定 |
| --- | --- | --- |
| Volume name | OS/ファイルマネージャーに表示されるラベル。 | 任意。`Plex Cloud`のようなわかりやすい名前を使用。 |
| Mount type | バックエンドエンジン（Windowsのデフォルトは`cmount`、主にLinux/macOSでは`nfsmount`）。 | すでにNFSを使用している場合を除き`cmount`のままにする。切り替えてもバッファリングが改善することはほぼない。 |
| Target | ドライブレターまたは自動割り当てされるマウントターゲット。 | `Auto`で問題ない。Plexがサービスとして実行される場合は固定のレター/パスを選択する。 |
| Mount to local path | カスタムマウント位置。 | Plexが安定したUnixパスを期待している場合に使用（例: `/mnt/plex-media`）。 |
| Network drive | Windowsでマウントをネットワークドライブとしてマークする。 | Plexサービスアカウントがマウントを認識できるよう有効にする。 |
| Read only | リモートへの書き込みをブロックする。 | 字幕のダウンロードやメタデータの更新を許可するためオフのままにする。再生専用マウントの場合のみ有効にする。 |
| Allow other | 他のOSユーザーにマウントへのアクセスを許可する（Linux）。 | Plexが自分のログインと異なるユーザーで動作している場合に有効にする。 |
| Cache mode | VFSキャッシュの動作: `off`、`minimal`、`writes`、`full`（デフォルトは`writes`）。 | Plexではファイル全体をキャッシュしてシークを高速化するために**Full**を使用する。 |
| Cache max size | VFSキャッシュの最大サイズ（バイト）。`-1`は無制限。 | SSDの容量を守るため明示的なサイズを設定する（例: 約75GBなら`75000000000`）。 |
| Cache max age | キャッシュされたデータが有効なままの期間（ナノ秒）。 | `3600000000000` = 1時間、`21600000000000` = 6時間。4Kファイルをウォームに保つため6〜12時間から始める。 |
| Dir cache time | ディレクトリ一覧がキャッシュされる期間（ナノ秒）。 | `300000000000` = 5分、`900000000000` = 15分。スキャン頻度に合わせる（通常5〜15分）。 |

## ステップ2 — Plex向けにVFSキャッシュのサイズと鮮度を調整する

RcloneViewには、Plexの再生に直接影響するキャッシュ設定があります。時間の値は**ナノ秒**で入力します。

- **Cache mode**: シークをスムーズにするためファイル全体をキャッシュに保持する**Full**をPlexで使用します。マウント経由で字幕/メタデータも書き込む場合、Fullでも問題ありません。書き込みを許可するため**Read only**はチェックを外したままにしてください。
- **Cache max size**: 同時ストリーミングに十分なSSD容量を確保します（例: アクティブな4Kユーザー1人あたり約75〜100GB）。例: `107374182400` ≈ 100GB。
- **Cache max age**: キャッシュされたメディアを数時間ウォームに保つことで、エピソードに戻ったときの再取得をスキップできます。例: `21600000000000` = 6時間、`43200000000000` = 12時間。
- **Dir cache time**: Plexのスキャン時のディレクトリの入れ替わりを減らします。例: `300000000000` = 5分、`900000000000` = 15分。コンテンツを追加した後は手動で更新してください。
- RcloneViewでは`VFS read ahead`、`buffer-size`、`--tpslimit`は公開されていません。Plexで最大の効果を得るには上記のキャッシュ項目に注目してください。

## ステップ3 — RcloneViewのスループットをPlexの需要に合わせる

- Plexライブラリが再起動後にマウントパスを失わないよう、**fixed Target or Mount to local path**を維持します。
- Plexサービスが起動する前にマウントが復元されるよう**Auto start on launch**を使用します。
- Windowsでは**Network drive**を、Linuxでは**Allow other**を有効にして、Plexサービスアカウントがマウントを認識できるようにします。
- **Mount Manager**のステータスを監視します。マウントがUnmountedに切り替わった場合は、ライブラリを再構築するのではなく、そこかシステムトレイメニューから再マウントしてください。
- 複数ライブラリ構成の場合は、別々のマウント（例: MoviesとShows）を作成し、あるライブラリのキャッシュが別のライブラリのキャッシュを追い出さないよう、マウントごとに**Cache max size**を設定します。

## ステップ4 — ネットワークとOS設定を強化する

- **ローカルネットワーク**: PlexサーバーをEthernetで接続し、優先帯域を確保するためQoSを設定します。
- **Windows**: 固定のドライブレターを使ってマウントし、Plexサービスがマウントを所有しているユーザーと同じユーザーで実行されていることを確認します。
- **Linux/macOS**: RcloneViewの自動マウントが正常に動作することを確認した後にのみ`/etc/fstab`やlaunch agentを使用してください—手動スクリプトよりも一貫性の方が重要です。
- **帯域幅の上限**: **Settings → Transfers**で、LANストリーミング用には帯域幅を無制限のままにしますが、他のワークロードが同じ回線を共有する場合は上限（例: 300Mbps）を設定します。


## トラブルシューティングチートシート

| 問題 | 対処法 |
| --- | --- |
| アイドル期間後にバッファリングが発生する | **Cache max age**を増やし（例: 6〜12時間）、キャッシュされたチャンクをウォームに保つため**Cache mode**を Full のままにする |
| 複数ユーザーがストリーミングするとバッファリングが発生する | 同時再生される4Kファイルに合うよう**Cache max size**を増やし、SSDの空き容量を確保する |
| 一晩でドライブがアンマウントされる | **Auto start on launch**を有効にし、固定の**Target**または**Mount to local path**を使用する |
| Plexがマウントを認識できない | Windowsでは**Network drive**を確認し、同じ認証情報でPlexを実行する。Linuxでは**Allow other**を有効にする |
| ライブラリのスキャンが遅い | **Dir cache time**を5〜15分に増やし、新しいコンテンツを追加した後はキャッシュを更新する |

## 実例で見るバッファリング解消法

1. **4K HDRコレクター**
   - Cache Mode: Full
   - Cache max size: 120GB（SSD/NVMe）
   - Cache max age: 12時間（`43200000000000` ns）
   - Dir cache time: 15分（`900000000000` ns）
   結果: チャプタースキップが瞬時に行われ、Dolby Visionのリマックスでもバッファリングは1秒未満。

2. **1080p/4K混在のファミリーサーバー**
   - `Movies`、`Shows`の2つのマウントを用意し、それぞれ独自のキャッシュサイズを設定
   - スケジューラージョブが毎晩よく視聴されるフォルダーをウォームアップ
   結果: キャッシュを分離することで、子供向けアニメが映画のキャッシュを追い出すことを防止。

3. **LTEを利用する旅行中のユーザー**
   - 帯域幅上限: 80Mbps
   - Plexのトランスコード設定: 1080pで8Mbps
   - RcloneViewのマウントは**Full**キャッシュモードのまま。書き込みは接続が復帰するまでキューに残る
   結果: セルラーホットスポット経由でも安定したストリーミング。

## FAQ

**ライブラリごとに別々のマウントが必要ですか？**
必須ではありませんが、大きなライブラリを分割することでキャッシュを管理しやすくなり、ライブラリごとにキャッシュのサイズ/期間を調整できます（例: TVエピソードより4K映画のキャッシュ期間を長くするなど）。

## 途切れることなく再生する

マウント、キャッシュ、割り当てをコントロールすれば、Plexのバッファリングは解決できます。RcloneViewはVFSキャッシュを正しく設定し、スループットを監視し、ウォームアップを自動化するためのGUIを提供します—シェルスクリプトを手探りする必要はありません。上記の設定を調整し、転送グラフを確認しながら、ローカルストレージのように動作するPlexライブラリをお楽しみください。


<CloudSupportGrid />
