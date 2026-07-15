---
sidebar_position: 12
description: "外部のRcloneデーモンを実行し、RcloneViewから制御することで、OneDriveからWasabiへ高速にファイルを移動します。"
keywords:
  - rcloneview
  - rclone
  - external rclone
  - onedrive
  - wasabi
  - s3 compatible
  - cloud migration
  - cloud sync
  - cloud transfer
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - wasabi
date: 2025-07-15
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# 外部Rcloneを使ってOneDriveからWasabiへ移行する

Microsoft 365のデータセットが大きい場合、ノートパソコン経由での移動は遅く不安定になることがあります。クラウドVM(EC2、GCE、または任意のLinuxホスト)で**Rclone**を実行し、**RcloneView**から操作することで、トラフィックをデータセンター内に保ち、家庭のネットワークのボトルネックを回避し、ブラウザなしの認証も可能になります。

以下を行います。

1. リモートサーバー上で**rclone rcd**を外部エンジンとして実行する。
2. その外部Rcloneに接続する**新しいRcloneViewウィンドウ**を開く。
3. **OneDrive**と**Wasabi**のリモートを追加する(ヘッドレス/CLI専用の認証方法を含む)。
4. ローカルの帯域幅を使わずに、OneDriveからWasabiへのコピー、同期、またはジョブのスケジュール設定を行う。

## パート1. サーバーにRcloneをデプロイする(外部Rclone)

1. 小規模なLinux VMを起動します(例:AWSの`t3.medium`または同等のもの)。  
2. TCP **5572**をご自身のIPに開放するか、SSH経由でトンネルします。  
3. Rcloneをインストールします。
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. 認証付きでリモートコントロールデーモンを起動します。
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
5. ノートパソコンから到達可能かどうかを確認します。
```bash
curl -u admin:admin -X POST "http://<SERVER-IP>:5572/rc/noop"
```
   `{}` というレスポンスが返れば、デーモンはRcloneViewからの接続を受け付ける準備ができています。

👉 復習が必要ですか?[AWS EC2でRcloneを実行する](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)をご覧ください。

## パート2. 新しいRcloneViewウィンドウを開く

各RcloneViewウィンドウは、異なるRcloneインスタンスとペアリングできます。

1. **RcloneView**を起動します。  
2. **Home**メニューから**`New Window`**をクリックします。  
3. 2つ目のウィンドウが開きます。このウィンドウが、先ほど起動した外部Rcloneに接続します。

👉 詳しくはこちら:[New Windowで複数のRclone接続を使用する](/howto/rcloneview-advanced/multi-window)。

## パート3. RcloneViewを外部Rcloneに接続する

新しいウィンドウで以下を行います。

1. **Settings -> Connection Manager** -> **New Connection**を開きます。  
2. 以下を入力します。

| Field          | Value                              |
| -------------- | ---------------------------------- |
| Display Name   | `external-rclone`                  |
| Remote Address | `http://<SERVER-IP>:5572`          |
| Username       | `admin`                            |
| Password       | `admin`                            |

3. **Test Connection** -> **Save** -> **Connect**をクリックします。ステータスバーに外部デーモンへの接続が表示されるはずです。

## パート4. WasabiとOneDriveのリモートを追加する(外部Rclone内)

これから作成するすべてのリモートは、外部Rcloneプロセス内に存在し、接続されているRcloneViewウィンドウで共有されます。

### ➕ Wasabiを追加する(S3互換)

1. **Remote**タブ -> **`+ New Remote`**に移動します。  
2. **S3 / Wasabi**を選択します。  
3. **Access Key**、**Secret Key**、およびご自身のリージョンの**エンドポイント**(例:`s3.ap-northeast-2.wasabisys.com`)を入力します。  
4. リモートを保存します(例:`wasabi-prod`という名前にします)。

👉 詳細はこちら:[Wasabiリモートの追加方法](/tutorials/#2-add-wasabi-as-a-remote-in-rcloneview)。

### ➕ OneDriveを追加する(ローカルブラウザなしでも可能)

1. 再度**`+ New Remote`**をクリックし、**OneDrive**を選択します。  
2. サーバーにブラウザがある場合は、RcloneView内で通常のOAuthフローを完了します。  
3. サーバーがヘッドレスでブラウザを開けない場合は、ヘッドレス/CLI方式に従います。ブラウザのあるデバイスでトークンを生成し、それをサーバー側の設定に貼り付けます。  

👉 ステップバイステップのヘッドレスフロー:[EC2/ヘッドレス環境からMicrosoftリモートを追加する](/howto/remote-storage-connection-settings/ec2-onedrive-headless)。
保存が完了すると、Explorerに**OneDrive**と**Wasabi**という2つのリモートが表示されるはずです。

## パート5. Wasabiへ転送または同期する

### 方法A:単発のコピー/同期

1. Explorerで、片側に**OneDrive**、もう一方に**Wasabi**を開きます。  
2. OneDrive上のソースフォルダーと、Wasabi上の宛先バケット/フォルダーを選択します。  
3. **`Sync`**をクリック(宛先をソースに一致させます)するか、単純なコピーには**Copy ->**を使用します。  
4. 必要に応じて先に**Dry Run**を実行し、その後**Run**で開始します。進捗は**Transfer**タブに表示されます。

### 方法B:ジョブの保存またはスケジュール設定

1. 上記のようにコピー/同期を設定し、ダイアログで**Save to Jobs**を選択します。  
2. **Job Manager**を開いて、保存したジョブをいつでも再実行できます。  
3. 自動化するには、Job Managerで**Schedule**を有効にし(PLUS機能)、希望する頻度を設定します。  
4. ログと結果は**Job History**で確認します。

👉 ジョブとスケジュール設定の詳細:  
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)  
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)  
- [ジョブのスケジュール設定と実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Wasabiへのアップロードを高速化するためのヒント

- 可能であれば、外部VMをWasabiと同じリージョンに配置し、レイテンシーを減らしましょう。  
- 大きなオブジェクトの場合、`--transfers`や`--s3-upload-concurrency`の値を上げるとスループットが向上することがあります。CPUとネットワークの状況を見ながら段階的に調整してください。  
- 破壊的な同期の前には**Dry Run**を使用して、何が変更されるかを確認しましょう。

## ✅ まとめ

Rcloneをリモートデーモンとしてホストし、専用のRcloneViewウィンドウから操作することで、ローカルのボトルネックなしに信頼性の高いOneDrive -> Wasabi移行を実現できます。ヘッドレス認証フローにより、ブラウザが利用できない環境でも対応可能で、ジョブとスケジュール機能により繰り返しの実行も簡単になります。

## 🔗 関連ガイド

- **認証とリモート**  
  - [EC2/ヘッドレス環境からMicrosoftリモートを追加する](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)  
  - [S3互換リモートの追加方法](/howto/remote-storage-connection-settings/s3)  
- **外部Rcloneとウィンドウ**  
  - [New Windowで複数のRclone接続を使用する](/howto/rcloneview-advanced/multi-window)  
  - [AWS EC2でRcloneを実行する](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- **転送と自動化**  
  - [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)  
  - [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)  
  - [ジョブのスケジュール設定と実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
