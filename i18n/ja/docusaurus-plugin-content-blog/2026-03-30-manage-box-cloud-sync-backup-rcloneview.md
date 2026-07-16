---
slug: manage-box-cloud-sync-backup-rcloneview
title: "Box ストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RcloneViewでBoxクラウドストレージを管理。エンタープライズファイルの同期、バックアップのスケジュール設定、Boxと他プロバイダー間のデータ転送をビジュアルインターフェースで実現します。"
keywords:
  - box cloud sync
  - box backup rcloneview
  - box file transfer
  - box cloud storage manager
  - box rclone gui
  - box enterprise backup
  - box to s3 migration
  - box cloud management
  - box automated sync
  - box multi-cloud backup
tags:
  - box
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box ストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Boxはエンタープライズ向けコンテンツ管理のために構築されており、RcloneViewはBoxをマルチクラウドインフラ全体に接続することでその活用範囲を広げます。

Boxは、きめ細かなアクセス制御、メタデータ駆動のワークフロー、コンプライアンス認証(HIPAA、FedRAMP、GxP)などの機能により、エンタープライズ向けコンテンツプラットフォームの定番として確立されています。個人プランは10GBの無料枠から始まり、ビジネスプランは月額17.30ドル/ユーザーから無制限のストレージを提供します。RcloneViewはOAuthベースのAPIを介してBoxに接続し、ファイルの閲覧、他クラウドへの同期実行、Boxのローカルドライブとしてのマウント、自動バックアップのスケジュール設定を行うビジュアルインターフェースを提供します。これらすべては、データポータビリティ作業のためにBoxのネイティブ同期クライアントや管理コンソールに依存することなく実行できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでBoxに接続する

RcloneViewへのBoxの追加は、OAuth 2.0認証フローに従います。リモートマネージャーを開き、**Box**を選択して「Authorize」をクリックします。ブラウザがBoxのログインページを開き、そこでRcloneViewへのアクセスを許可します。トークンはローカルのrclone設定ファイルに保存されます。

Boxはプランの階層によって異なるAPIレート制限を課しています。FreeおよびPersonal Proアカウントはより厳しい制限があり(おおよそ毎秒10 APIコール)、Enterpriseアカウントは大幅に高いスループットを許可します。RcloneViewはレート制限のレスポンス(HTTP 429)を自動リトライとバックオフで処理するため、大規模な転送も手動介入なしで進行します。

重要な注意点が一つあります。Boxはビジネスプランで5GB、Enterpriseプランで15GBという個別ファイルサイズの上限を設けています。これらの上限を超えるファイルはアップロードに失敗します。RcloneViewはこれらのエラーをジョブ出力に明確に記録するため、サイズが大きすぎるファイルを特定して個別に対処できます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Box remote in RcloneView Remote Manager" class="img-large img-center" />

## Boxを他のプロバイダーと同期する

RcloneViewの2ペインエクスプローラーにより、Boxと他のクラウド間でのデータ転送が直感的に行えます。片側にBoxを、もう一方にAWS S3、Google Drive、Dropbox、またはローカルフォルダーを配置します。ファイルをドラッグするか、繰り返し実行する操作用にジョブを作成してください。

Boxはファイルの整合性確認にSHA-1チェックサムを使用しており、RcloneViewは同期操作の際にこれを活用して変更を正確に検出します。ハッシュ値または変更日時が異なるファイルのみが転送されるため、API使用量と帯域幅を最小限に抑えられます。これは、共有インテグレーションのためにBoxのAPIコール予算が重要となるエンタープライズアカウントにおいて特に価値があります。

Boxからの移行やマルチクラウド戦略を維持する組織向けに、RcloneViewはフィルタールールを使ったディレクトリ全体の同期に対応しています。拡張子、サイズ、パスパターンによってファイルを含める・除外することができます。例えば、Boxのコラボレーションフォルダーから`.docx`と`.pdf`ファイルのみをSharePointに同期し、一時ファイルやシステムメタデータは無視する、といった運用が可能です。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing files between Box and another cloud provider in RcloneView" class="img-large img-center" />

## Boxからの自動バックアップをスケジュール設定する

Box上のエンタープライズデータは、独立したバックアップを要求する保持ポリシーやコンプライアンスポリシーの対象となることがよくあります。RcloneViewのジョブスケジューラーを使えば、毎晩・毎週、またはカスタムのcronスケジュールで繰り返しバックアップジョブを定義し、Boxのコンテンツをセカンダリプロバイダーに複製できます。

規制対象業界向けの実証済みパターン: Object Lockを有効にしたBackblaze B2へのBoxからの日次同期をスケジュール設定します。これにより、データの耐久性と独立した保管に関する監査要件を満たす、変更不可能でバージョン管理されたBoxデータのコピーが作成されます。RcloneViewのジョブ履歴は、コンプライアンス担当者に対して、タイムスタンプ、ファイル数、エラー詳細を含む各バックアップ実行の明確なログを提供します。

複数部門にわたる複数のBoxインスタンスを管理するITチーム向けには、Boxアカウントごとに個別のリモートを設定し、単一のRcloneViewインストールから並列にバックアップジョブを実行できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated backup from Box storage in RcloneView" class="img-large img-center" />

## Boxをネットワークドライブとしてマウントする

RcloneViewのマウント機能は、Boxストレージをローカルドライブレター(Windows)またはマウントポイント(macOS/Linux)としてマッピングします。これにより、レガシーアプリケーション、スクリプト、デスクトップツールがBox上のファイルをローカルファイルであるかのように扱えます。VFSキャッシュレイヤーが読み書きをバッファリングするため、ドキュメント編集やメディアプレビューのワークフローにおいても十分なパフォーマンスが維持されます。

Box Driveをインストールせずに、Windowsエクスプローラーでボックスのコンテンツを利用したいチームにとって、これは管理者権限やバックグラウンド同期エージェントを必要としない軽量な代替手段です。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Box storage as a network drive in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートマネージャーでOAuthによりBoxアカウントを認証します。
3. 2ペインエクスプローラーでBoxフォルダーを閲覧し、他のクラウドへファイルを同期またはコピーします。
4. 重要なBoxデータの独立したコピーを維持するために、スケジュール設定されたバックアップジョブを作成します。

Boxはエンタープライズレベルでのガバナンスとコラボレーションを担い、RcloneViewはデータのポータビリティ、バックアップ、そしてクラウドインフラの他の部分との統合を確実にします。

---

**関連ガイド:**

- [RcloneViewでBoxストレージをネットワークドライブとしてマウントする](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)
- [RcloneViewでDropboxをAWS S3にバックアップする](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)
- [Icedriveストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-icedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
