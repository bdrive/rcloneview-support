---
slug: fix-azure-blob-sas-token-auth-errors-rcloneview
title: "RcloneViewでAzure Blob StorageのSASトークン認証エラーを解決する"
authors:
  - tayson
description: "rcloneでのAzure Blob StorageのSASトークンおよび認証エラーを解決します。RcloneViewの設定ツールを使って401、403、トークン期限切れの問題を解決する方法を学びます。"
keywords:
  - rcloneview
  - azure blob storage
  - sas token error
  - azure authentication error
  - azure 403 forbidden
  - azure 401 unauthorized
  - rclone azure setup
  - azure blob sas token
  - azure storage connection
  - fix azure rclone
tags:
  - troubleshooting
  - azure
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでAzure Blob StorageのSASトークン認証エラーを解決する

> Azure Blob Storageの認証は、複数の方式と細かな設定ミスの落とし穴があり、扱いが難しいことがあります。**RcloneView**はセットアップ作業を簡単にし、401/403エラーのトラブルシューティングを素早く行えるようにします。

Azure Blob Storageは強力で広く使われているオブジェクトストレージサービスですが、rcloneから接続するには認証を正確に設定する必要があります。アクセスキー、SASトークン、サービスプリンシパルのいずれを使用している場合でも、パラメータが1つでも誤って設定されていると、原因のわかりにくいエラーメッセージが表示され、作業が完全に止まってしまうことがあります。

このガイドでは、rcloneでよく発生するAzure Blob Storageの認証エラーを取り上げ、利用可能なさまざまな認証方式を説明したうえで、RcloneViewのビジュアルなリモート設定を使って各問題を解決する手順を紹介します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure認証方式の概要

Azure Blob Storageは、rcloneを通じていくつかの認証方式をサポートしています。どの方式を使用しているかを把握することが、トラブルシューティングの第一歩です。

- **ストレージアカウントアクセスキー**: ストレージアカウント全体への完全なアクセスを許可する共有キーです。シンプルですが強力なため、rootパスワードのように扱ってください。
- **SASトークン（Shared Access Signature）**: 特定の権限、時間制限、任意のIP制限を伴う限定的なアクセスを許可するスコープ付きトークンです。外部への共有にはアクセスキーより安全です。
- **サービスプリンシパル（Azure AD）**: Azure ADアプリケーションを使用したOAuthベースの認証です。ロールベースのアクセス制御を採用するエンタープライズ環境に最適です。
- **マネージドID**: Azure内部（Azure VMなど）から実行する場合に利用できます。Azureのアイデンティティサービスを自動的に使用します。

各方式には固有の設定パラメータと失敗パターンがあります。以下のセクションでは、それぞれの方式でよく発生するエラーについて説明します。

## SASトークンの期限切れ（401 Unauthorized）

最も多く発生するSASトークンのエラーは、期限切れです。SASトークンには開始時刻と有効期限があります。トークンが期限切れになると、すべてのリクエストが`401 Unauthorized`または`403 AuthenticationFailed`エラーを返すようになります。

**症状:**
```
HTTP 401: Server failed to authenticate the request.
AuthenticationFailed: Signed expiry time must be after signed start time.
```

**解決方法:**

1. Azureポータルを開き、ストレージアカウントに移動します。
2. 「セキュリティとネットワーク」セクションの下にある**共有アクセス署名**に移動します。
3. 余裕を持たせた新しい有効期限を設定します（個人利用であれば1年、共有アクセスであればより短く）。
4. 新しいSASトークンを生成します。
5. RcloneViewでAzure Blobリモートを編集し、古いSASトークンを新しいものに置き換えます。
6. 接続をテストし、アクセスが復旧したことを確認します。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 誤ったSASトークンの権限（403 Forbidden）

SASトークン自体は有効でも、実行したい操作に必要な権限が不足している場合があります。たとえば、Read権限のみを持つトークンでは、rcloneがアップロード、削除、コンテナ一覧の取得を試みると失敗します。

**症状:**
```
HTTP 403: This request is not authorized to perform this operation.
AuthorizationPermissionMismatch
```

**rclone操作に必要な権限:**

| 操作 | 必要なSAS権限 |
|---|---|
| コンテナの一覧表示 | List |
| ファイルの閲覧 | Read, List |
| ファイルのアップロード | Write, Create |
| ファイルの削除 | Delete |
| 完全な同期 | Read, Write, Delete, List, Create |

**解決方法:** Azureポータルで、必要な権限をすべて含む新しいSASトークンを生成してください。rcloneの同期操作には通常、Read、Write、Delete、List、Add、Createが必要です。迷った場合は、個人用ストレージアカウントに対してはすべての権限を有効にしてください。

## IP制限によるアクセスのブロック（403 Forbidden）

SASトークンは特定のIPアドレスや範囲に制限できます。オフィスのネットワークで生成したトークンを自宅から使おうとすると、IP制限によってブロックされます。

**症状:**
```
HTTP 403: This request is not authorized to perform this operation using this source IP.
```

**解決方法:**

- IP制限なしで新しいSASトークンを生成する、または
- SASトークンの設定で許可範囲に現在のIPアドレスを追加する、または
- IP制限の対象外であるストレージアカウントアクセスキーを代わりに使用する。

動的IP（多くの家庭用回線）を使用している場合は、定期的に更新できないのであれば、IP制限付きのSASトークンの使用は避けてください。

## アクセスキーのエラー（401 Unauthorized）

ストレージアカウントアクセスキーを使用している場合、エラーの原因は通常、キーが間違っているかアカウント名が正しくないことです。

**よくある原因:**

- キーをコピーする際に末尾の空白や改行文字が含まれてしまう。
- Key1がローテーションされ、現在はKey2が有効になっているのにKey1を使用している。
- ストレージアカウント名のスペルミス。
- キーではなく接続文字列をそのまま使用している。

**RcloneViewでの解決方法:**

1. Azureポータルでストレージアカウントに移動し、**アクセスキー**を開きます。
2. Key1またはKey2の横にある**表示**をクリックし、キーを慎重にコピーします。
3. RcloneViewでAzure Blobリモートを編集し、`key`フィールドにキーを貼り付けます。
4. `account`フィールドがストレージアカウント名と正確に一致しているか（大文字小文字も区別されます）確認します。
5. 接続をテストします。

## サービスプリンシパルの設定エラー

サービスプリンシパル認証には、テナントID、クライアントID、クライアントシークレットの3つの値が必要です。これらのいずれかが欠けていたり誤っていたりすると、認証に失敗します。

**症状:**
```
HTTP 401: AADSTS7000215: Invalid client secret provided.
HTTP 401: AADSTS70001: Application with identifier 'xxx' was not found.
```

**解決方法:**

1. Azureポータルで**Azure Active Directory > アプリの登録**に移動します。
2. 対象のアプリケーションを見つけ、**アプリケーション（クライアント）ID**を確認します。
3. 概要ページで**ディレクトリ（テナント）ID**を確認します。
4. **証明書とシークレット**で、古いシークレットが期限切れの場合は新しいクライアントシークレットを作成します。
5. RcloneViewで、正しいtenant、client_id、client_secretの値でリモート設定を更新します。
6. サービスプリンシパルにストレージアカウント上の**Storage Blob Data Contributor**ロールが割り当てられていることを確認します。

## 正しいSASトークンを段階的に生成する

SASトークンの問題を完全に避けるには、次の手順に従ってください。

1. Azureポータルを開き、ストレージアカウントに移動します。
2. 左側のメニューで**共有アクセス署名**をクリックします。
3. **許可されるサービス**で**Blob**を選択します。
4. **許可されるリソースの種類**で**コンテナー**と**オブジェクト**を選択します。
5. **許可される権限**で、必要な権限（Read、Write、Delete、List、Add、Create）をすべて選択します。
6. **開始日**を今日に、**有効期限**を適切な将来の日付に設定します。
7. IP制限が必要な場合を除き、**許可されたIPアドレス**は空欄のままにします。
8. **許可されるプロトコル**を**HTTPSのみ**に設定します。
9. **SASおよび接続文字列を生成する**をクリックします。
10. **SASトークン**（`?sv=`で始まる）をコピーします。rcloneの設定に貼り付ける際は、先頭の`?`を削除してください。

## RcloneViewで接続をテストする

Azure Blobリモートの設定または更新後は、すぐに接続をテストしてください。

1. RcloneViewのエクスプローラーペインでリモートを開きます。
2. コンテナが一覧表示されることを確認します。
3. コンテナ内に移動し、ファイルが見えることを確認します。
4. 書き込み権限を確認するため、小さなテストファイルをアップロードしてみます。
5. 削除権限を確認するため、テストファイルを削除します。

いずれかの手順で失敗した場合、エラーメッセージから具体的な権限や設定の問題を特定できます。リモート設定を修正し、再度テストしてください。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. お好みの認証方式（アクセスキーまたはSASトークン）でAzure Blob Storageリモートを追加します。
3. エクスプローラーペインでコンテナを閲覧し、接続をテストします。
4. 401または403エラーが発生した場合は、上記の該当セクションを参照して問題を診断・解決してください。

Azureの認証エラーは、ほとんどの場合、トークンの期限切れ、権限の不足、または認証情報のコピーミスが原因です。RcloneViewのビジュアルツールを使って体系的にトラブルシューティングを行うことで、問題の特定と解決が簡単になります。

---

**関連ガイド:**

- [リモートストレージの閲覧と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [AWS S3およびS3互換ストレージの追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [リモートストレージを即座に同期する](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
