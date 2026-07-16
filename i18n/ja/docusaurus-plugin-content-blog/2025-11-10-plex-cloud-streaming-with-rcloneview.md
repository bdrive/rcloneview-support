---
slug: plex-cloud-mount-rcloneview
title: "PlexとRcloneViewでクラウド映画をストリーミング — Google Drive、Dropbox、S3をライブラリとしてマウント"
authors:
  - tayson
description: RcloneViewを使ってGoogle Drive、Dropbox、Wasabi、S3をPlexがインデックスできるローカルドライブとしてマウントしましょう。クラウドに保存された映画をダウンロードせずにストリーミング再生できます。CLIは不要です。
keywords:
  - plex cloud mount
  - google drive plex
  - rclone mount plex
  - cloud movie server
  - plex cloud streaming
  - rcloneview
  - vfs cache plex
tags:
  - RcloneView
  - plex
  - google-drive
  - onedrive
  - dropbox
  - s3
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# PlexとRcloneViewでクラウド映画をストリーミング — Google Drive、Dropbox、S3をライブラリとしてマウント

> ディスク容量が足りない？ RcloneViewでクラウドをローカルドライブとしてマウントし、Plexがそこから直接スムーズかつ確実にストリーミングできるようにしましょう。コマンドライン設定は不要です。

Plexはメディアの整理とストリーミングに優れていますが、ローカルストレージはすぐに満杯になります。一方で、Google Drive、Dropbox、Wasabi、Cloudflare R2、S3といったクラウドバケットは、安価でほぼ無制限のスペースを提供します。足りないのは、Plexにそれらのクラウドフォルダをローカルパスのように「見せる」ためのシンプルな方法です。rcloneの`mount`コマンドがこれを解決し、RcloneViewはその力をシンプルなGUIでラップしています。クラウドフォルダを選び、ドライブレターまたはマウントパスを選択し、キャッシュを有効にするだけです。ターミナルも、暗記すべきフラグも必要ありません。

<!-- truncate -->

RcloneViewは実績のあるrcloneエンジンを基盤としています。主要なすべてのプロバイダーに接続し、それらをローカルフォルダやドライブレターとしてマウントし、Plexをそのパスに向けることができます。適切なVFSキャッシュ設定を行えば、Plexは最小限のバッファリングでクラウドストレージからスキャン、シーク、ストリーミングできます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## PlexとRcloneViewの連携の仕組み

Plexはローカルパス（例：Windowsの`X:\Movies`やmacOSの`/Volumes/Cloud/Movies`）をスキャンします。RcloneViewはクラウドフォルダをそのパスにマウントするため、Plexはそれを他のローカルディレクトリと同じように扱います。

Text diagram
[Google Drive Movies] ⇄ [RcloneView Mount (X:/ or /Volumes/Cloud)] ⇄ [Plex Media Library]

役立つドキュメント

- RcloneViewでのマウントの基本: [クラウドストレージをローカルドライブとしてマウントする](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- Embedded Rcloneによる高度なフラグ設定: [一般設定](/howto/rcloneview-basic/general-settings)
- OAuthログインの追加（Google/Dropbox/OneDrive）: [ブラウザログインで接続する](/howto/remote-storage-connection-settings/add-oath-online-login)
- S3/Wasabi/R2のセットアップ: [S3ストレージを設定する](/howto/remote-storage-connection-settings/s3) ・ [Cloudflare R2の認証情報](/howto/cloud-storage-setting/cloudflare-r2-credential)

## 数クリックでマウントしてストリーミング

クラウドに接続し、マウントを作成し、Plexをそこに向けるだけです。それだけです。

1. リモートを接続する

- Google Drive、OneDrive、Dropbox、S3/Wasabi/R2はすべてサポートされています。`+ New Remote`から各リモートを追加してください。
- ガイド: [OAuthベースのプロバイダー](/howto/remote-storage-connection-settings/add-oath-online-login) ・ [S3互換ストレージ](/howto/remote-storage-connection-settings/s3) ・ [Dropboxバックエンドに関する注意事項](https://rclone.org/dropbox/)

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Add a new remote in RcloneView" class="img-large img-center" />

2. マウントを作成する

- 方法1 — リモートエクスプローラーから: [リモートエクスプローラーからマウントする](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- 方法2 — マウントマネージャー経由: [マウントマネージャーからマウントする](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer in RcloneView" class="img-large img-center" />

3. マウント先を選択する

- Windows: ドライブレター（例：`X:`）を選択します。内部的にはRcloneViewは互換性のために`cmount`を使用します。
- macOS: `/Volumes/Cloud`（またはカスタムパス）配下のマウントパスを選択します。
- Linux: マウントディレクトリ（例：`/mnt/plex-cloud`）を選択します。

4. Plex用にキャッシュを設定する

- マウントダイアログの詳細オプションで、Plexとの互換性を最大化するために**Cache mode**を`full`に設定します。
- 必要に応じて**Cache max size**（例：10〜50GB）と**Dir cache time**を設定します。
- Embedded Rclone → **Global Rclone Flags**で`--vfs-read-ahead`などのグローバルフラグも調整できます。参照: /support/howto/rcloneview-basic/general-settings

5. マウントして確認する

- 「Save and mount」をクリックし、ファイルエクスプローラーでマウントフォルダを開いて映画を閲覧できることを確認します。

6. Plexに追加する

- Plex → Libraries → Add Library → Add folders でマウント済みパス（`X:\Movies`または`/Volumes/Cloud/Movies`）を選択します。Plexにスキャンとインデックス作成をさせます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure mount from Mount Manager" class="img-large img-center" />

## スムーズな再生のためのパフォーマンスチューニング

これらの設定は、クラウドストレージから高ビットレートのファイルをストリーミングする際のバッファリングを減らし、シークを改善します。

- VFSキャッシュモード: スキャンとシークには`full`を使用します（トランスコードとサムネイル生成がより確実に動作します）。
- キャッシュサイズ: SSDの空き容量があれば10〜50GBを割り当てます。
- リードアヘッド: Global Rclone Flagsで`--vfs-read-ahead`を増やします（例：64M〜256M）。
- 帯域幅制限: ネットワークが混雑している場合は、ピーク時にPlexがスムーズに動作するよう適切な制限を設定します。
- Plexのメタデータはローカルに保持: メタデータとサムネイルはローカルSSDに保存し、メディアのみをクラウドに置きます。

注: キャッシュサイズとリードアヘッドはワークロードに依存します。控えめな値から始め、再生とドライブのアクティビティを監視しながら調整してください。

## 最も価値を得られるユーザー

- ホームシアターコレクター: 10TBの映画アーカイブをGoogle DriveやDropboxに保管し、ローカルディスクを拡張せずにPlex経由でストリーミングします。
- NASハイブリッド構成: NASをSSDキャッシュ層として使いながら、メインライブラリはマウント経由でS3/Wasabi/R2に置きます。
- 開発者やホームラボ愛好家: RcloneViewのマウントをDocker化されたPlexにアタッチし、保存済みマウントとログイン時の自動マウントで信頼性を確保します。

## トラブルシューティングの要点

- ライブラリパスがPlexに表示されない: マウントがアクティブであり、Plexを実行しているOSユーザーがそのマウントパスにアクセスできることを確認してください。
- 再起動後にマウントが消える: マウントダイアログで**Auto mount**を有効にし、設定で「Launch at login」の使用を検討してください。→ [クラウドストレージをローカルドライブとしてマウントする](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) ・ [一般設定](/howto/rcloneview-basic/general-settings)
- スキャンが遅い、または再生がカクつく: `Cache mode: full`を使用し、キャッシュサイズと`--vfs-read-ahead`を増やし、メタデータはローカルに保持してください。
- APIの制限やスロットリング: スキャンをオフピーク時間帯にスケジュールし、ライブラリが非常に大きい場合はCompare & Syncを使ってPlexがスキャンする対象を絞り込みます。→ [フォルダ内容を比較する](/howto/rcloneview-basic/compare-folder-contents) ・ [同期ジョブを作成する](/howto/rcloneview-basic/create-sync-jobs)

## クラウドの映画を、ローカルの体験で

RcloneViewでマウントすることで、Plexはクラウドを高速なローカルドライブのように扱えます。Google Drive、Dropbox、Wasabi、S3の柔軟性とスケールを活かしながら、Plexはディスク容量の悩みなしに同じ洗練された体験を提供します。マウントをセットアップし、Plexをそこに向け、キャッシュを調整して、再生ボタンを押しましょう。

試してみませんか？ RcloneViewをダウンロードして、今日からクラウドを活用したPlexライブラリを構築しましょう。


<CloudSupportGrid />
