---
slug: link-public-shared-links-cloud-rcloneview
title: "RcloneViewでクラウドファイルの公開共有リンクを生成する"
authors:
  - tayson
description: "RcloneViewのlinkコマンドを使ってクラウドファイルの公開ダウンロードリンクを生成する方法。アカウントへのアクセス権を与えることなく、Google Drive、OneDrive、Dropbox、S3などからファイルを共有できます。"
keywords:
  - rcloneview
  - public link cloud file
  - share cloud file link
  - rclone link command
  - generate download link
  - presigned url s3
  - shared link google drive
  - cloud file sharing
  - public url cloud storage
  - share file without account
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - collaboration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでクラウドファイルの公開共有リンクを生成する

> クラウドファイルを共有する場合、通常はプロバイダーのWebインターフェースに移動し、権限を調整してリンクをコピーする必要があります。RcloneViewのlink機能は、ファイルエクスプローラーから直接共有可能なURLを生成します——対応しているあらゆるプロバイダーで利用できます。

アカウントへのアクセス権を持たない相手とクラウド上のファイルを共有する必要がある場合、公開リンクや事前署名付きリンクが標準的な解決策です。Google Driveは共有可能なリンクを作成し、S3は事前署名付きURLを生成し、Dropboxは共有リンクを提供します——それぞれ異なるインターフェースと異なるワークフローを通じて行われます。RcloneViewはこれを単一の操作に集約します。ファイルを右クリックし、リンクを生成し、共有するだけです。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## プロバイダー間での公開リンクの仕組み

異なるクラウドプロバイダーは、ファイル共有をそれぞれ異なる方法で実装しています。

| プロバイダー | リンクの種類 | デフォルトの有効期限 | 備考 |
|---|---|---|---|
| Google Drive | 共有可能なリンク | 有効期限なし | ファイルの権限を「リンクを知っている全員」に変更 |
| OneDrive | 共有リンク | 設定可能 | 匿名または組織スコープ |
| Dropbox | 共有リンク | 有効期限なし | 読み取り専用のダウンロードリンク |
| AWS S3 | 事前署名付きURL | 設定可能（最大7日間） | 一時的で暗号署名付き |
| Backblaze B2 | ダウンロードURL | 有効期限なし | バケットを公開設定するか認証トークンを使用する必要あり |
| Cloudflare R2 | 事前署名付きURL | 設定可能 | S3互換の事前署名付きURL |

RcloneViewは内部でrcloneの`link`コマンドを使用しており、各プロバイダーに適したリンクの種類を自動的に生成します。プロバイダー固有の共有メカニズムを知る必要はありません——RcloneViewが処理します。

## RcloneViewでリンクを生成する

ファイルの公開リンクを生成するには:

1. RcloneViewのエクスプローラーでファイルに移動します。
2. ファイルを右クリックし、リンク/共有オプションを選択します。
3. RcloneViewがリンクを生成し、クリップボードにコピーします（または手動でコピーできるよう表示します）。

有効期限をサポートするプロバイダー（S3の事前署名付きURLなど）では、カスタムオプションで`--expire`フラグを使用してリンクの有効期間を指定できます。例えば、`--expire 24h`は24時間で期限切れになるリンクを作成します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Generating a public link for a cloud file in RcloneView" class="img-large img-center" />

## ターミナル経由でlinkコマンドを使用する

より細かい制御が必要な場合は、RcloneViewの組み込みターミナルを使ってlinkコマンドを直接実行します。

```
rclone link remote:path/to/file.pdf
```

これにより公開URLが出力されます。S3互換プロバイダーの場合は、有効期限を追加します。

```
rclone link remote:bucket/file.pdf --expire 48h
```

ターミナルによる方法は、複数ファイルのリンクを生成する場合や、ワークフローの一部としてリンク生成をスクリプト化する場合に役立ちます。

## プロバイダー固有の動作

### Google Drive

Google Driveのファイルに対してリンクを生成すると、rcloneはファイルの共有設定を「リンクを知っている全員が閲覧可能」に変更します。手動で共有を取り消さない限り、リンクは期限切れになりません。これによりファイルの権限が変更されることに注意してください——URLを知っている人なら誰でもファイルにアクセスできます。

Google Workspaceアカウントでは、管理者がリンク共有を組織メンバーのみに制限している場合があります。その場合、生成されたリンクは組織内のユーザーにのみ機能します。

### OneDriveとSharePoint

OneDriveはMicrosoft Graph APIを通じて共有リンクを生成します。リンクの種類は組織の共有ポリシーによって異なります——匿名（誰でもアクセス可能）の場合もあれば、組織メンバーに制限される場合もあります。個人のOneDriveアカウントでは匿名リンクを作成できます。

### AWS S3およびS3互換ストレージ

S3の事前署名付きURLは最も安全なオプションです。URLには暗号署名が含まれており、特定のオブジェクトへの一時的なアクセスを許可します。リンクは指定した期間の経過後に期限切れになります（デフォルトはさまざまですが、IAMユーザー資格情報の場合は最大7日間）。オブジェクトの権限には変更が加えられません——事前署名付きURL自体が認可情報を持っています。

これにより、S3の事前署名付きURLはファイルを一時的に共有するのに最適です。リンクは指定した期間だけ機能し、その後は無効になるため、クリーンアップの必要がありません。

### Dropbox

Dropboxは、ファイルへの読み取り専用アクセスを提供する共有リンクを作成します。Dropbox PlusおよびProfessionalプランでは、デフォルトでリンクの有効期限はありません。Dropbox Businessでは、管理者が有効期限ポリシーを強制できます。

## ユースケース

### クイックファイル共有

クラウドに保存されているレポート、デザインファイル、データセットのリンクを生成し、メール、Slack、チャットで送信します。受信者は、クラウドアカウントやストレージへのアクセス権を必要とせずにファイルをダウンロードできます。

### クライアント向けの一時アクセス

フリーランサーや代理店にとって、S3の事前署名付きURLはクライアントへの納品に最適です。成果物をS3にアップロードし、7日間有効な事前署名付きURLを生成してクライアントに送信します。7日後、リンクは自動的に期限切れになります——手動でのクリーンアップは不要です。

### 公開コンテンツの配布

広範囲に配布することを意図したファイル（ドキュメント、リリース、メディアキットなど）には、Google DriveやDropboxから永続的なリンクを生成し、Webサイトやドキュメントに埋め込みます。RcloneViewは、プロバイダーのWebインターフェースに移動することなくリンクを生成します。

## セキュリティ上の考慮事項

- **永続的なリンクはファイルを無期限に公開します**: Google Driveおよび Dropboxのリンクはデフォルトでは期限切れになりません。機密性の高いファイルを共有した場合は、アクセスが不要になったらリンクを取り消すことを忘れないでください。
- **事前署名付きURLは期限付きですが共有可能です**: 有効期間中は、URLを知っている人なら誰でもファイルにアクセスできます。ファイルが機密情報である場合、事前署名付きURLを公開チャンネルで共有しないでください。
- **一部のプロバイダーではリンク生成が権限を変更します**: Google Driveのリンクは、ファイルの共有設定を変更します。これは、そのファイルにアクセス権を持つ他のユーザーからも確認できます。
- **共有リンクを定期的に監査してください**: 特に機密性の高いファイルについては、古い共有リンクを確認して取り消してください。RcloneViewのエクスプローラーを使えば、ファイルに簡単に移動して共有状況を確認できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. リモートマネージャーでクラウドリモートを追加します。
3. エクスプローラーでファイルに移動し、公開リンクを生成します。
4. 期限付きリンクが必要な場合は、`--expire`フラグを使ってS3の事前署名付きURLを使用します。

RcloneViewから共有可能なリンクを生成することで、各プロバイダーのWebインターフェースに切り替える手間を省けます。クイック共有リンク、クライアント向けの一時的な納品URL、永続的なダウンロードリンクのいずれが必要な場合でも、RcloneViewはファイルエクスプローラーから対応します。

---

**関連ガイド:**

- [リモートストレージの参照と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [AWS S3およびS3互換ストレージの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [ブラウザベースのログイン（OAuth）でリモートを追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
