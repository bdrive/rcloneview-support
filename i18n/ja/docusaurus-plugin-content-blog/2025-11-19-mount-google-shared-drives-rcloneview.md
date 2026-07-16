---
slug: mount-google-shared-drives-rcloneview
title: "RcloneViewでGoogle共有ドライブをWindows・macOSにマウント -- 同期クライアント不要でフルアクセス"
authors:
  - tayson
description: RcloneViewのガイド付きワークフローで、任意のGoogle共有ドライブをFinderやファイルエクスプローラーに直接マウントし、Drive for Desktopの制限を回避しながら管理者レベルの制御を維持できます。
keywords:
  - google shared drive mount
  - mount shared drive windows
  - mount shared drive mac
  - rcloneview
  - rclone mount google drive
  - team drive windows
  - shared drive explorer
  - google workspace shared drive
  - rclone gui
  - mount team drive
tags:
  - google-drive
  - mount
  - productivity
  - workspace
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでGoogle共有ドライブをWindows・macOSにマウント -- 同期クライアント不要でフルアクセス

> ノートパソコンにフル同期クライアントを強制することなく、各チームに必要な共有ドライブを提供しましょう。

Google Workspaceの共有ドライブには、デザイン資産、引き継ぎフォルダ、コンプライアンスアーカイブなどが保存されていることが多いですが、Drive for Desktopは小さなキャッシュしか保持せず、ユーザーごとに数十の共有ドライブがあると動作が不安定になります。RcloneViewはrcloneの共有ドライブサポートを基盤としており、必要なドライブだけをWindowsでは実際のドライブレター、macOSではFinderのボリュームとしてマウントでき、自動マウントとVFSキャッシュも組み込まれています。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Drive for Desktopなしで共有ドライブのマウントがチームに必要な理由

- Drive for Desktopはドライブ全体をミラーリングするため、SSD容量を消費し、クォータに達するとノートパソコンがオフラインになってしまいます。
- ヘルプデスクには、アカウント全体の同期権限を付与せずに、契約社員に単一の共有ドライブを渡す手段がありません。
- エンジニアやメディアチームは、自動化スクリプトやクリエイティブアプリのために、予測可能なパス(X:\Marketing や /Volumes/Archive)を必要としています。

## RcloneViewがWindows・macOSに共有ドライブをもたらす仕組み

RcloneViewはrcloneの上にGUIを重ねているため、共有ドライブの選択、認証トークン、マウントフラグはすべて自動的に処理されます。

- ガイド付きリモートウィザードは、Google Workspaceアカウントがアクセスできるすべての共有ドライブを一覧表示し、安全に保存します。参考手順は[/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)をご覧ください。
- マウントマネージャーは[/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)で説明されているオプションを表示するので、CLI構文を覚える必要はありません。
- 自動マウントはマウントダイアログにあり、ログイン時に起動する設定は設定 -> 一般から利用できます([/support/howto/rcloneview-basic/general-settings](/howto/rcloneview-basic/general-settings)に記載)。

## マウント前に必要なもの

| 要件 | 詳細 |
| --- | --- |
| RcloneView + Rclone | 最新のRcloneViewバンドル(rcloneを含む)をインストールしてください。 |
| ファイルシステムドライバー | WindowsはWinFsp(同梱)を使用します。macOSはmacFUSEが必要です。RcloneView内のプロンプトに従ってください。制限のチューニングについては[/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos)を確認してください。 |


## ステップバイステップ: RcloneViewでGoogle共有ドライブをマウントする

これらの手順は、管理者がCLIで既に行っている操作を、ヘルプデスクがすぐに繰り返せるフレンドリーなウィザードとして再現したものです。

### ステップ1 -- Google Workspaceアカウントを接続する

1. **リモートマネージャー** -> **+ 新規リモート**を開きます。
2. **Google Drive** -> **OAuth(ブラウザ)**を選択します。
3. ブラウザでのログインが完了すると、RcloneViewはリフレッシュトークンをローカルに保存し、共有ドライブの認証が維持されます。

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


### ステップ2 -- 目的の共有ドライブを選択する

1. 「これを共有ドライブとして設定しますか?」と表示されたら、**はい**を選択します。
2. RcloneViewはGoogleから返されたすべての共有ドライブを一覧表示します。番号を入力するか検索して、目的のドライブをハイライトします。
3. `shared_marketing`のようなわかりやすい名前でリモートを保存し、チームメンバーが内容をすぐに把握できるようにします。

### ステップ3 -- マウントプロファイルを設定する

1. **マウントマネージャー**を開きます(またはリモートエクスプローラー内のマウントアイコンをクリックします)。
2. 共有ドライブのリモートを選択し、マウントしたいフォルダ(ルートまたはサブフォルダ)を選びます。
3. マウントターゲットとオプションを設定します。
   - **ターゲット**: `Auto`のままにするか、**Mount to local path**で固定のドライブレター/マウントパスを割り当てます。
   - **自動マウント**: 有効にすると、RcloneViewが起動時に再マウントします(設定のログイン時起動と併用してください)。
   - **詳細オプション**: **Volume name**(任意のラベル)、**Mount type**(デフォルトは`cmount`)、**Network drive**(Windows)、**Allow other**(Linux)、書き込みをブロックしたい場合は**Read only**を設定します。
   - **キャッシュオプション**: **Cache mode**を選択し(互換性を重視する場合は`full`)、**Cache max size**、**Cache max age**、**Dir cache time**をダイアログに表示されるナノ秒単位の値で設定します。

### ステップ4 -- 起動して確認する

1. **Save & Mount**をクリックします。マウントがアクティブになると、ステータスチップが緑色になります。
2. ファイルエクスプローラーまたはFinderで新しいドライブを開きます。共有ドライブのフォルダが表示されるはずですが、大きなディレクトリは**Dir cache time**の設定に基づいてディレクトリキャッシュが埋まるまで少し時間がかかる場合があります。
3. マウントマネージャーを使用して、アンマウント、マウントされたフォルダを開く、設定の編集を行います。

## パフォーマンスとアクセスに関するヒント

- 最もスムーズな編集体験のために、**Cache mode**を**Full**に設定し、**Cache max size**を十分な大きさに設定します。
- 誤った削除を防ぐため、経理・法務のドライブには**Read only**を使用し、必要に応じて別途書き込み可能なマウントを作成します。
- 変更頻度に応じて**Dir cache time**を調整します(アクティブなドライブは短く、アーカイブは長く)。
- スクリプトやアプリケーションが常に同じマウントを見つけられるよう、固定の**ターゲット**または**Mount to local path**を再利用します。

## アクセスの自動化、共有、セキュリティ確保

RcloneViewを使えば、複数のマシン間で共有ドライブのマウントを一貫した状態に保てます。

- 各マウントで**自動マウント**を有効にし、設定で**ログイン時起動**を有効にすることで、OS起動時にドライブが準備できた状態になります。
- ジョブスケジューラーを使用して、業務時間後に共有ドライブのコンテンツをS3/Wasabiにミラーリングし、オフサイト保管を行います。
- ユーザーがOfficeやAdobeを開く前に、マウントマネージャーのステータス(Mounted vs. Unmounted)を確認して接続を検証します。

## トラブルシューティングとFAQ

| 症状 | 考えられる原因 | 対処法 |
| --- | --- | --- |
| スリープ後にドライブが消える | OSがWinFsp/macFUSEをアンマウントした | **自動マウント**と**ログイン時起動**を有効にして、RcloneViewが起動時に再マウントするようにします。 |
| ファイルを開くのが遅い | キャッシュが小さすぎる、または低速なディスク上にある | **Cache max size**を増やし、**Cache mode**をFullのままにします。 |
| macOSでの権限エラー | FUSEにフルディスクアクセスがない | RcloneViewとmacFUSEにフルディスクアクセスを付与してから、マウントを再起動します(Appleメニュー -> システム設定 -> プライバシーとセキュリティ)。 |
| `too many open files` | macOSのulimitのデフォルトが256 | [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos)にあるplistのチューニングを適用してください。 |
| 共有ドライブのリストが空 | Workspace管理者がDrive APIを無効化している | Google管理コンソールでDrive APIを再有効化するか、共有ドライブへの委任アクセスを依頼してください。 |

## スクリプトなしで共有ドライブのマウントを実現する

RcloneViewは共有ドライブへのアクセスを予測可能にします。肥大化した同期フォルダも、スクリプトも、新しいマウントのたびにITを待つ必要もありません。今すぐ各チームにクリーンなドライブレターやFinderボリュームを提供し、Google Workspaceのストレージを管理下に置きましょう。


<CloudSupportGrid />
