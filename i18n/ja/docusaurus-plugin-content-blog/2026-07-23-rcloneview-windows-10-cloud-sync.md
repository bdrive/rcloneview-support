---
slug: rcloneview-windows-10-cloud-sync
title: "Windows 10でRcloneViewを使う — クラウドストレージの同期とバックアップ"
authors:
  - kai
description: "Windows 10にRcloneViewをインストールして実行し、90以上のクラウドストレージプロバイダーを1つのデスクトップアプリからマウント、同期、バックアップしましょう。"
keywords:
  - RcloneView Windows 10
  - Windows 10 クラウドストレージ
  - Windows 10 クラウドドライブ マウント
  - Windows 10 クラウドバックアップソフト
  - Windows クラウドストレージ同期
  - RcloneView インストーラー Windows
  - Windows 10 クラウドファイルマネージャー
  - マルチクラウド Windows 10
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Windows 10でRcloneViewを使う — クラウドストレージの同期とバックアップ

> Windows 11の登場から数年が経った今も、Windows 10は何百万台ものデスクトップで日常的に使われ続けています。RcloneViewはWindows 10でも同じマウント、同期、バックアップ機能を欠けることなく完全に利用できます。

多くの企業や個人ユーザーが、あえて選んで、ハードウェアの制約から、あるいは単にアップグレードが優先事項ではなかったという理由で、いまだにWindows 10を使い続けています。RcloneViewはWindows 10をレガシー扱いしません — インストーラー、マウントドライバー、機能セット全体がWindows 11ビルドと同一に動作するため、複数のWindowsバージョンを混在させて運用するスタジオでも、古い方の端末で機能が失われることはありません。RcloneViewは1つのウィンドウから90以上のプロバイダーをマウント・同期でき、対応するどのWindowsバージョンにインストールされていてもFREEライセンスで利用できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Windows 10へのRcloneViewのインストール

Windows版のRcloneViewは、x86-64アーキテクチャ向けにビルドされた単一のInno Setupインストーラー(`setup_rclone_view-{version}.exe`)として提供され、rcloneview.comの公式ダウンロードページからのみ入手できます — Windowsストアへの掲載やパッケージマネージャーによる配布はありません。インストール前に、そのマシンにVisual C++ 2015-2022 再頒布可能パッケージが入っているか確認してください。多くのWindows 10システムでは他のソフトウェアによってすでに導入済みですが、新規インストールや最小構成の環境では別途追加が必要な場合があります。RcloneView自体のシステム要件ではWindows Vistaが実質的な最低ラインとされているため、きちんとアップデートされたWindows 10環境であれば余裕を持ってその基準をクリアします。

<img src="/support/images/en/blog/new-remote.png" alt="Windows 10デスクトップにRcloneViewをインストールする" class="img-large img-center" />

インストールが完了すると、RcloneViewには組み込みのrcloneバイナリが同梱されているため、クラウドアカウントへの接続を始めるために別途rcloneをインストールしたり設定したりする必要はありません。アプリはローカルのループバックアドレス経由で組み込みrcloneインスタンスと通信し、ウィンドウ下部のフッターバーで起動後のrcloneバージョンと接続状態を確認できます。

## Windows 10でのクラウドドライブのマウント

Windows 10のエクスプローラーは、RcloneViewのマウントを物理ドライブと同じように扱います。Mount Managerからでも、リモートのパネルツールバーから直接でも、フォルダを選んでMountを選択すると(自動または手動で選んだ)ドライブ文字が割り当てられ、ローカルディスクと同じように参照できるようになります。Windowsでのデフォルトのマウント方式はcmountで、読み取り専用モード、ネットワークドライブ表示、VFSキャッシュモード(off、minimal、writes、full)といったオプションは、Windows 11とまったく同じように利用でき、古いOSだからといって機能が削られることはありません。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Windows 10でクラウドリモートをドライブ文字としてマウントする" class="img-large img-center" />

## Windowsタスクスケジューラを使わずにバックアップをスケジュールする

Windowsタスクスケジューラとrcloneのコマンドラインフラグを別々に組み合わせる代わりに、RcloneViewのJob Managerはガイド付きウィザードで同期・コピー・バックアップジョブを構築します:ソースと宛先を選び、転送・リトライ設定を行い、ファイルサイズ・経過時間・種類でフィルターを適用し、そしてPLUSライセンスではアプリ内で直接crontab形式のスケジュールを設定できます。Job Historyはその後、実行のたびに状態、転送サイズ、所要時間を記録し続けるため、タスクスケジューラのイベントログを掘り返すよりも監査がしやすくなります。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Windows 10でRcloneViewを使ってバックアップジョブをスケジュールする" class="img-large img-center" />

Windows 10ユーザーに向けて特に注意しておきたい点が一つあります:RcloneViewのアプリ内自動アップデートは、現時点ではmacOSのSparkle経由でのみ動作します。Windows 10を含むWindowsでは、アップデートの確認を行うと自動インストールではなくダウンロードページへ案内されるため、定期的にインストーラーを再ダウンロードしてアプリを最新の状態に保つ必要があります。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)からWindows向けの**RcloneViewをダウンロード**してください。
2. インストーラーを実行し、VC++ 2015-2022 再頒布可能パッケージが導入されているか確認してください。
3. Remoteタブ > New Remoteからクラウドリモートを追加してください — OAuth対応のプロバイダーは自動的にブラウザのログイン画面を開きます。
4. リモートをドライブ文字としてマウントするか、Job Managerで最初のSyncジョブを設定してください。

Windows 10のマシンだからといってマルチクラウドのワークフローから取り残される必要はありません — RcloneViewは他の対応プラットフォームとまったく同じマウント、同期、バックアップのツールセットをWindows 10にももたらします。

---

**関連ガイド:**

- [Windows 11でRcloneViewを使う — クラウドストレージの同期とバックアップ](https://rcloneview.com/support/blog/rcloneview-windows-11-cloud-sync-backup)
- [Windows ServerでRcloneViewを使って自動クラウドバックアップする方法](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [マウントドライブ文字の競合を解決する — RcloneViewによるWindowsクラウドストレージのトラブルシューティング](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
