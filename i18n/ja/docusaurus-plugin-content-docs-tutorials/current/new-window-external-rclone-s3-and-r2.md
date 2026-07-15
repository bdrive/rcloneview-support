---
sidebar_position: 11
description: "EC2上の外部Rcloneデーモンを使い、RcloneViewで完全に管理しながらAWS S3からCloudflare R2へ大容量ファイルを高速転送する方法を解説します。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - cloudflare r2
  - cloudflare s3 api
  - cloudflare r2 rclone
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
  - aws-ec2
date: 2025-07-13
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# EC2上の外部RcloneによるAWS S3とCloudflare R2間の高性能ファイル転送

現代のチームは複数のオブジェクトストレージプラットフォームを併用することが多く、大規模なデータセットをローカルデスクトップ経由で転送する際に、帯域幅・レイテンシ・データ送信料が重大なボトルネックになることにすぐ気づきます。**Rclone**をクラウドインスタンス上で直接実行し、**RcloneView**で制御することで、大量のトラフィックをクラウドの高速バックボーンに流し、ノートPCをデータ経路から切り離すことができます。

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" alt="transfer files between aws s3 and cloudflare r2 with external rclone" class="img-medium img-center" />

以下の手順は「EC2経由でAWS S3とGoogle Driveを同期する」ガイドの構成を踏襲し、S3 ↔ R2のシナリオに拡張したものです。この手順では以下を行います。

1. AWS EC2サーバー上でRcloneをリモート制御デーモン（**rcd**）として起動する。
2. 別のRcloneViewウィンドウを開き、その外部Rcloneに接続する。
3. EC2上でホストされているRclone内にAWS S3とCloudflare R2のリモートを追加する。
4. ローカルの帯域幅制約を受けずに、完全にクラウド間で転送・同期・ジョブのスケジュールを行う。

:::danger AWSデータ転送料金
同一アベイラビリティーゾーン内のトラフィックは無料ですが、AZ間およびインターネットへのデータ送信には料金が発生します（一般的にAZ間で$0.02/GB、インターネットへは$0.09/GB）。
参照: [AWS料金 – データ転送](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
:::

## **外部Rcloneを使う理由**

| ローカル組み込みRclone                                                                  | EC2上の外部Rclone                                                                    |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| トラフィック経路: **S3 → ローカルPC → R2** — 二重ホップで、自宅のアップロード速度に律速される。 | トラフィック経路: **S3 → EC2 → R2** — クラウドバックボーン内の単一ホップで、多くの場合10〜25Gbit/sを実現。 |
| 自宅ISPの上限や非対称帯域が大規模移行を遅くする。                         | はるかに高いスループット。ローカル側の上限なし。                                                  |
| ローカルのCPU・RAMがすべてのバイトをハッシュ計算する必要がある。                                                | CPU処理をクラウドVMにオフロードでき、必要に応じて大きめのインスタンスサイズを選択可能。                |
| NAT/ファイアウォールの問題が発生する可能性がある。                                                    | ポート5572を開放したパブリックIP（またはSSH経由のトンネル）を使用。                                          |

## パート1. EC2にRcloneをデプロイする（外部Rclone）

1. **Ubuntu EC2インスタンスを起動する**（マルチスレッドアップロードにはt3.medium以上を推奨）。
2. セキュリティグループで**TCP 5572を開放**する（またはSSHトンネルを使用）。
3. **Rcloneをインストール**:
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. Basic認証付きで**rcdデーモンを実行**:
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
    `--rc-addr`フラグは、RcloneViewが呼び出すためのHTTPエンドポイントを公開します。
    
5. ノートPCから**ヘルスチェック**を行う:
```bash
   curl -u admin:admin -X POST "http://<EC2-IP or DNS-NAME>:5572/rc/noop"
```
    JSONの`{}`レスポンスが返れば、デーモンが正常にリッスンしていることが確認できます。

👉 詳しくはこちら: [AWS EC2サーバーでRcloneを実行する方法](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

## パート2. 新しいRcloneViewウィンドウを開く

接続を整理しやすくするため、RcloneViewでは各ウィンドウが独自のRcloneエンジンで動作できます。

1. **RcloneView**を起動する
2. `Home`メニューの**`New Window`**ボタンをクリックする。
3. 新しいアプリケーションウィンドウが開きます。このインスタンスはメインウィンドウとは独立しており、独自の接続コンテキストを保持します。

  📌 _次のステップで、このウィンドウを外部Rclone（EC2）に接続します。_

👉 詳しくはこちら: [New Windowで複数のRclone接続を使う](/howto/rcloneview-advanced/multi-window)。

## パート3. EC2上のRcloneに接続する

**新しく開いたウィンドウ**で、以下の手順に従ってEC2上の外部Rcloneに接続します。

1. 新しいウィンドウで、**設定 → Connection Manager**を開く。
2. **New Connection**をクリックし、フォームに入力する:

| 項目          | 値                              |
| -------------- | ---------------------------------- |
| Display Name   | `ec2-rclone`                       |
| Remote Address | `http://<EC2-IP or DNS-NAME>:5572` |
| Username       | `admin`                            |
| Password       | `admin`                            |

4. **`Test Connection`**をクリックして設定を確認する。
   接続成功のレスポンスが表示されるはずです。
5. テストに合格したら**`Save`**をクリックし、続けて**`Connect`**をクリックする。
6. これで**EC2上で実行中の外部Rcloneインスタンス**に接続され、ウィンドウ上部に接続状態が表示されます。

<div class="img-grid-2"> <img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="Create EC2 connection" class="img-medium img-center" /> <img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="Connected to EC2" class="img-medium img-center" /> </div>

## パート4. AWS S3とCloudflare R2のリモートを追加する（外部Rclone経由）


### ➕ AWS S3リモートを追加する

1. **`Remote`**タブに移動し、**`+ New Remote`**をクリックする。
2. **`Provider`**タブで**Amazon S3**を選択する。
3. **`Options`**タブで:
   - `provider`を`AWS`に設定
   - **Access Key ID**と**Secret Access Key**を入力
   - リージョンとエンドポイントは、カスタマイズしない限りデフォルトのままで構いません
4. **Save**をクリックして設定を完了する。

👉 詳しくはこちら:
- [S3リモートの追加方法](/howto/remote-storage-connection-settings/s3)
- [AWS S3のアクセス認証情報の取得方法](/howto/cloud-storage-setting/aws-account-info)
    
### ➕ Cloudflare R2リモートを追加する

1. 再度、`Remote`タブで**`+ New Remote`**をクリックする。
2. **`Provider`**タブで**S3**を選択する（そう、また「S3」です。R2はS3プロトコルを使用します）。
3. **`Options`**タブで:
   - `provider`を`Cloudflare`に設定
   - **Cloudflare R2 Access Key**と**Secret Key**を入力
   - `endpoint`を`https://<accountid>.r2.cloudflarestorage.com`に設定
1. **Save**をクリックしてR2リモートの設定を完了する。

👉 詳しくはこちら:
- [S3リモートの追加方法](/howto/remote-storage-connection-settings/s3)
- [Cloudflare R2のアクセス認証情報の取得方法](/howto/cloud-storage-setting/cloudflare-r2-credential)
    
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

## パート5. AWS S3とCloudflare R2間でファイルを同期する

### 🔁 方法A: SyncまたはJobを使う

1. Explorerペインで、同期したい**Cloudflare R2**フォルダと**AWS S3**フォルダを選択する。
2. `home`メニューの**`Sync`**ボタンをクリックする。
3. 同期オプション（片方向または双方向）を選択し、実行内容をプレビューして確認する。
4. RcloneViewが同期を実行し、**`transfer`**ログタブに進捗を表示します。

- 繰り返しまたはスケジュール転送を行う場合:
  1. Syncモーダルで**`Save to Jobs`**をクリックするか、**`Job Manager`** → **`Add Job`**を開く。
  2. 転送元、転送先、オプションを設定する。
  3. 保存して手動実行するか、スケジュールを設定する。

👉 詳しくはこちら:
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ 方法B: 定期的な同期ジョブをスケジュールする

1. Explorerペインで、同期を維持したい**Cloudflare R2**と**AWS S3**のフォルダを選択する。
2. **`Home`**または**`Remote`**メニューから**`Job Manager`**を開き、**`Add Job`**をクリックする。
3. 転送元と転送先を確認する。
4. スケジュールエディタを使ってジョブの実行タイミングを設定する。保存前にスケジュールをプレビューする。
5. 保存してスケジュール済みジョブを有効化する。

RcloneViewは指定した時刻に同期を実行します。実行の詳細やログは**`Job History`**で確認でき、完了時には通知を受け取れます。

👉 詳しくはこちら: [ジョブのスケジュールと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

##  ⚡ パフォーマンスチューニング・チートシート

| パラメータ                 | 推奨値                                    | 影響度 | 理由                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--s3-chunk-size`         | `50M`                                                | *****        | パーツを大きくすることでR2上のClass-Aオペレーションを減らし、速度を向上させます[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)。   |
| `--s3-upload-concurrency` | `32–64`                                              | ***          | R2向けのマルチパートスレッド数を増やします。                                                                                                                                               |
| `--transfers`             | `32–64`                                              | *            | 並列オブジェクトアップロードにより、10Gbitリンクでのスループットが向上します[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)。 |
| `--s3-disable-checksum`   | 外部でチェックサムを照合する場合のみ追加 | ****         | パートごとのハッシュ計算というボトルネックをスキップします—注意して使用してください[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)。        |
## 📈 実環境でのチューニング結果

クラウド間転送のパフォーマンスを最大化するため、以下のように**Cloudflare R2リモート**の設定をチューニングしました。

:::caution あくまで実験結果です

RcloneViewはRcloneのGUIフロントエンドです。ここで紹介するパフォーマンスチューニングのヒントとベンチマークは、コミュニティの投稿（[Cloudflare R2へのマルチパートアップロード速度を最大化する方法](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)）を参考にした実験的なテストに基づくものであり、お使いのクラウド環境、リージョン、ネットワーク状況、ユースケースによって結果が異なる場合があります。

これらの結果は**保証されるものではなく**、あくまで参考としてご利用ください。
:::

### 🔧 R2リモート設定の更新方法

対象のR2リモートの設定を変更するには:

1. **Explorer**ペインで、Cloudflare R2リモートの横にある歯車アイコンをクリックするか、**Remote Manager → Edit**に移動する。
2. **`Options`**タブで**`Show advanced options`**をクリックする。
3. 以下の値を設定する:
   - `chunk_size = 50Mi`
   - `upload_concurrency = 32`
4. 変更を保存する。

`disable_checksum`オプションも転送速度に大きな影響を与える可能性がありますが、今回のテストでは、ファイル転送時の整合性チェックを維持するためデフォルト値（`false`）のままにしています。
<img src="/support/images/en/tutorials/chunk-size-and-upload-concurrency-settings.png" alt="chunk size and upload concurrency settings" class="img-medium img-center" />
### 📉 ベースライン: デフォルト設定でのパフォーマンス

**デフォルト設定**を使用した場合:

```text
- chunk_size = 5Mi 
- upload_concurrency = 4. 
```

**EC2上のRclone**経由で**AWS S3**から**Cloudflare R2**へ大容量ファイルを移動した際、転送速度は約**114 MB/s**でした。
<img src="/support/images/en/tutorials/transfer-speed-with-default-options.png" alt="transfer speed with default options" class="img-medium img-center" />

### 🚀 チューニング後: 4倍のパフォーマンス向上

Cloudflare R2リモートを最適化された設定で更新した結果:

```text
- chunk_size = 50Mi 
- upload_concurrency = 32

```

`disable_checksum = false`を維持したまま、約**440 MB/s**の速度を達成しました—デフォルトと比較して**4倍の向上**です。

<img src="/support/images/en/tutorials/high-transfer-speed-with-chunk-size-and-upload-concurrency.png" alt="high transfer speed with chunk size and upload concurrency" class="img-medium img-center" />
## ✅ まとめ

クラウド間転送は、もはやノートPC経由でのろのろと進める必要はありません。重い処理をEC2上の外部Rcloneデーモンにオフロードすることで、回線速度に近い移行スピードを実現し、想定外のAWSデータ送信料を回避しながら、RcloneView上で完全にビジュアルなワークフローを維持できます。自信を持って次のS3 ↔ R2移行を始め、ローカルのボトルネックにさよならしましょう。

---

## 🔗 関連ガイド

- **ストレージの設定**
	- [S3互換リモートの追加方法](/howto/remote-storage-connection-settings/s3)
	- [AWS S3のアクセス認証情報の取得方法](/howto/cloud-storage-setting/aws-account-info)
	- [Cloudflare R2のアクセス認証情報の取得方法](/howto/cloud-storage-setting/cloudflare-r2-credential)
- **EC2とリモートRclone**
	- [AWS EC2でRcloneを実行する方法](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- **ウィンドウと接続の管理**
	- [New Windowで複数のRclone接続を使う](/howto/rcloneview-advanced/multi-window)
	- [複数のRcloneViewウィンドウを管理する](https://www.perplexity.ai/support/howto/rcloneview-advanced/multi-window) <!-- external duplicate, optional to keep -->
- **同期とジョブ管理**
	- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
	- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
	- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)
	- [ジョブのスケジュールと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)
- **コストに関する考慮事項**
	- [AWS料金 – データ転送](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
- **パフォーマンス最適化**
	- [Cloudflare R2へのマルチパートアップロード速度を最大化する方法](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)

<CloudSupportGrid />
