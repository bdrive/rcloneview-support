---
slug: manage-google-drive-cloud-sync-backup-rcloneview
title: "RcloneViewでGoogleドライブのファイルとクラウド同期を管理する"
authors:
  - tayson
description: "RcloneViewでGoogleドライブのファイルを管理。ビジュアルGUIを使って、Googleドライブ、共有ドライブ、他のクラウドプロバイダー間でデータを同期、バックアップ、転送します。"
keywords:
  - rcloneview
  - google drive sync rcloneview
  - google drive backup
  - google drive file manager
  - google drive cloud sync tool
  - google drive to s3
  - google drive rclone gui
  - google shared drives backup
  - google drive multi-cloud
  - google drive automated backup
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - guide
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでGoogleドライブのファイルとクラウド同期を管理する

> GoogleドライブはGoogle Workspaceの中核を担っていますが、バックアップやクラウド間転送の管理にはネイティブクライアント以上の機能が必要です——**RcloneView**はビジュアルインターフェースを通じてその制御を実現します。

Googleドライブは20億人以上のユーザーにサービスを提供しており、Gmail、ドライブ、フォトで共有される15GBの無料ストレージがあります。Workspaceプランでは、Enterpriseティアで無制限のストレージまでスケールします。ネイティブのGoogleドライブデスクトップクライアントはローカルマシンへのファイル同期に対応していますが、AWS S3、OneDrive、NASへのデータ複製はできません。RcloneViewはDrive API v3経由でGoogleドライブに接続し、完全なファイル管理インターフェースを提供します——Googleドライブと他の任意のストレージプロバイダー間で、閲覧、同期、コピー、移動、バックアップのスケジューリングが可能です。

課題を保護したい学生でも、数千枚のRAWファイルを管理する写真家でも、共有ドライブを独立したバックアップ先に同期したいWorkspace管理者でも、RcloneViewはネイティブクライアントにはない機能を提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでGoogleドライブを接続する

Googleドライブの追加は標準的なOAuth 2.0フローを使用します。リモートマネージャーを開き、**Google Drive**を選択して「認証」をクリックします。ブラウザウィンドウが開き、Googleアカウントにログインしてアクセスを許可します。トークンはローカルのrclone設定に安全に保存されます。

セットアップ中には、アクセスの範囲を選択します——フルドライブアクセス、読み取り専用、またはRcloneViewが作成したファイルに限定したファイルレベルアクセスです。ほとんどのバックアップ・同期ワークフローでは、フルアクセスが適切な選択です。このステップでは、共有ドライブ(旧チームドライブ)へのアクセスも設定できます。IDで特定の共有ドライブを選択するか、RcloneViewに利用可能な全ドライブを一覧表示させることができます。

Googleドライブは、デフォルトでプロジェクトごとに100秒あたり10,000クエリというAPIクォータを課しています。RcloneViewは403 userRateLimitExceededレスポンスを指数バックオフで自動的に処理します。大規模な操作では、独自のGoogle Cloudプロジェクトを登録し、独自のクライアントIDを指定してクォータ上限を引き上げることができます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Google Drive remote in RcloneView Remote Manager" class="img-large img-center" />

## マイドライブと共有ドライブ

Googleドライブは、マイドライブ(個人アカウントに紐づく個人ストレージ)と共有ドライブ(ファイルが個人ではなくチームに帰属する組織所有のストレージ)を区別しています。この違いは、同期やバックアップにおいて重要です。共有ドライブには異なる所有権のセマンティクス、より厳格なファイル命名規則、独立したストレージクォータがあるためです。

RcloneViewはこの両方をシームレスに扱います。2ペインエクスプローラーでマイドライブと共有ドライブを並べて開き、フォルダの内容を比較し、両者間で同期できます。マイドライブから共有ドライブへ同期する際、RcloneViewは共有ドライブの制約に自動的に対応します——サポートされていない文字を含むファイルはリネームされ、ショートカットファイルは設定に応じて解決またはスキップされます。

## Googleドライブと他のクラウドプロバイダーとの同期

RcloneViewの2ペインエクスプローラーでは、Googleドライブを他の任意のリモートと並べて表示できます。ドライブ全体をBackblaze B2に同期して手頃なバックアップを作成したり、特定のプロジェクトフォルダをAWS S3にコピーしてアーカイブしたり、古いファイルをWasabiに移動してコストを抑えたコールドストレージにしたりできます。

GoogleドライブはMD5チェックサムを使用してファイルの整合性を検証します。RcloneViewはネイティブでMD5比較による同期をサポートしているため、実際に変更されたファイルのみが転送されます。これにより時間とAPIクォータの両方を節約できます。Googleドキュメント、スプレッドシート、スライドは固定のファイルサイズを持たないクラウドネイティブ形式で保存されていますが、RcloneViewはダウンロードや同期の際にこれらを標準形式(docx、xlsx、pptx)にエクスポートします。

大容量転送では、マルチスレッドダウンロードの設定やチャンクサイズの調整が可能です。Googleドライブは5MBを超えるファイルのレジューム可能アップロードをサポートしており、RcloneViewはこれを活用して、ファイル全体を再転送することなく中断から復旧します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to another cloud provider in RcloneView" class="img-large img-center" />

## Googleドライブの自動バックアップのスケジューリング

Googleドライブ上のデータのコピーが1つだけでは、バックアップとは言えません。誤削除、アカウント停止、ランサムウェアはいずれもデータ損失を引き起こす可能性があります。別のプロバイダーへの独立したバックアップは、重要な安全策を追加します。

RcloneViewのスケジューラーはこのプロセスを自動化します。GoogleドライブからAWS S3やBackblaze B2への夜間同期ジョブを設定すれば、RcloneViewが差分検出、転送、ログ記録を処理します。ジョブ履歴パネルには、実行ごとの統計情報が記録されます——転送されたファイル数、スキップされたファイル数、転送された総バイト数、経過時間です。

Workspace管理者にとって、共有ドライブのスケジュールバックアップは、チームデータをGoogleのインフラストラクチャから独立して複製することを保証します。スケジュールバックアップとcryptリモートによる暗号化を組み合わせることで、さらなる保護層を追加できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive backup in RcloneView" class="img-large img-center" />

## フォルダの比較とデータの検証

大規模な同期を実行する前に、RcloneViewの比較機能で何が変更されるかを正確に確認できます。2つのフォルダ——1つはGoogleドライブ、もう1つは別のリモート——を選択すると、RcloneViewは片方にのみ存在するファイル、サイズやハッシュが異なるファイル、同一のファイルをハイライト表示します。

これは移行後に特に有用です。Googleドライブのソースとバックアップ先の間で比較を実行し、すべてのファイルが正常に到達したことを確認しましょう。ビジュアル差分表示により、元データを廃止する前に不足を発見して解決することが容易になります。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive files with another cloud in RcloneView" class="img-large img-center" />

## Googleドライブをローカルドライブとしてマウントする

RcloneViewは、WindowsではローカルドライブレターとしてGoogleドライブをマウントでき、macOSやLinuxではマウントポイントとしてマウントできます。これにより、ファイルマネージャー、動画編集ソフト、コマンドラインツールなど、任意のアプリケーションから、事前にダウンロードすることなく直接ドライブのファイルにアクセスできます。

最高のパフォーマンスを得るにはVFSキャッシュを有効にしてください。これにより最近アクセスしたファイルがローカルに保存され、その後の読み取りが瞬時に行われます。キャッシュサイズと有効期限は設定可能です。マウントは、ドライブファイルを完全に同期せずに閲覧・プレビューする必要があるメディアワークフローに特に有用です。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting Google Drive as a local drive in RcloneView" class="img-large img-center" />

## 転送のリアルタイムモニタリング

大容量転送中、RcloneViewは転送速度、ファイルごとの進捗、全体の完了率を示すリアルタイムモニタリングダッシュボードを提供します。キュー内の他の転送に影響を与えることなく、個々の転送を一時停止、再開、キャンセルできます。帯域幅制限により、Googleドライブの転送がネットワークを占有することを防げます——就業時間中は制限を設定し、夜間はフルスピードを許可できます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Google Drive in RcloneView" class="img-large img-center" />

## ファイルの閲覧と管理

RcloneViewのエクスプローラーは、Googleドライブのウェブインターフェースにはない機能を提供します——数万ファイル規模の一括操作、任意の2つのクラウドプロバイダー間のドラッグアンドドロップ、フォルダの並列比較などです。エクスプローラーを通じて、Googleドライブ上で直接ファイルのリネーム、移動、削除、フォルダの作成が行えます。共有ドライブ、ショートカット、入れ子になったフォルダ構造はすべてエクスプローラーパネルでナビゲート可能です。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to and from Google Drive in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートマネージャーでOAuthを通じてGoogleアカウントを認証し、ドライブの種類(マイドライブまたは共有ドライブ)を選択します。
3. 2ペインエクスプローラーでGoogleドライブを閲覧し、他のプロバイダーへの同期またはコピージョブを設定します。
4. S3、B2、または他のクラウドに冗長コピーを保持するため、日次バックアップをスケジュールします。

Googleドライブはコラボレーションとドキュメント編集を担いますが、RcloneViewはあなたが使用するすべてのクラウド間でデータのバックアップ、可搬性、アクセス性を確保します。

---

**関連ガイド:**

- [Googleドライブを追加する](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [リモートストレージの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
