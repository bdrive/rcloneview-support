---
sidebar_position: 5
description: "RcloneViewをAWS EC2上で稼働する外部Rcloneインスタンスに接続し、Google DriveとAWS S3をクラウド上で直接同期する方法を学びます。"
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - google drive
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - aws-ec2
  - google-drive
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - cloud-to-cloud
  - aws-s3
date: 2025-06-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# EC2上の外部RcloneでAWS S3とGoogle Driveを同期する

**RcloneView** には **組み込みRclone(Embedded Rclone)** が搭載されているため、クラウドストレージサービス間(例: Google Drive ↔ AWS S3)のデータ同期は簡単に行えます。RcloneViewをインストールすると、この組み込みエンジンが自動的に含まれ、通常は**ローカルPC**からのファイル転送の管理に使用されます。

しかし、組み込みRcloneを使用すると、**すべての転送トラフィックがローカルコンピュータを経由**することになります。これは、特に大規模なデータセットを同期する場合や低速なネットワークで操作する場合に、処理速度を大幅に低下させる可能性があります。

例えば、組み込みRcloneを使用して**Google DriveからAWS S3へ**ファイルを同期する場合、ファイルをいったんローカルマシンにダウンロードしてからS3にアップロードすることになります。この二重転送は、レイテンシを増加させるだけでなく、ローカルの帯域幅も消費します。

<img src="/support/images/en/tutorials/sync-aws-s3-and-google-drive-via-ec2.png" alt="sync aws s3 and google drive via ec2" class="img-medium img-center" />
このような場合により良い解決策は、**Rcloneをクラウドインスタンス上で直接実行する**ことです。例えば**AWS EC2サーバー**上で実行します。RcloneViewをEC2上で稼働する**外部Rclone**に接続することで、次のことが可能になります。

- ローカルPC経由のトラフィックを回避する  
- クラウド内で直接クラウド間転送を実行する(Google → EC2 → S3)  
- 高速なクラウドネットワークインフラを活用する    

このアーキテクチャにより、パフォーマンスが大幅に向上し、ローカルデバイスへの負荷が軽減されます。

このチュートリアルでは、**RcloneViewの新しいウィンドウ機能**を使って**EC2上の外部Rclone**に接続し、**Google Drive**と**AWS S3**の間でクラウド上で完結するファイル同期を行う方法を説明します。

:::caution AWS EC2とネットワーク転送料金が発生する場合があります  

EC2インスタンス上でRcloneを実行すると転送速度が向上しますが、**AWSはコンピューティング使用料や他サービスへのアウトバウンドデータ転送料金を請求する場合がある**ことにご注意ください。

参照: [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)

:::
  
このガイドでは、次の手順を説明します。

1. AWS EC2インスタンス上で**Rclone**を起動・設定する  
2. RcloneViewの新しいウィンドウを開く  
3. EC2上の**外部Rclone**に接続する  
4. **Google Drive**と**AWS S3**のリモートを追加する  
5. パフォーマンスを向上させた状態でファイルを直接同期する

---

## パート1: EC2にRcloneをデプロイする(外部Rclone)

AWS EC2ガイドに従ってUbuntuを起動し、ポート5572を開放し、Rcloneをインストールして`rcd`デーモンを実行してください。  

👉 参照: [AWS EC2サーバーでRcloneを実行する方法](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
 
**要点**:

- `rclone rcd`が`--rc-addr=0.0.0.0:5572`で実行されている  
- EC2セキュリティグループでポート`5572`を開放している
- HTTP Basic認証が設定されている(`--rc-user`、`--rc-pass`)  
- デーモンを次のコマンドで実行する:

 ```bash
   rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

- 次のコマンドでアクセスを確認する:

```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"

```



---

## パート2: RcloneViewの新しいウィンドウを開く

接続を整理しやすくするため、RcloneViewでは各ウィンドウが独自のRcloneエンジンで動作できます。

1. **RcloneView**を起動する
    
2. `Home`メニューの**`New Window`**ボタンをクリックする
    
3. 新しいアプリケーションウィンドウが開きます。このインスタンスはメインウィンドウとは独立しており、独自の接続コンテキストを維持します。
    

  📌 _次のステップで、このウィンドウを外部Rclone(EC2)に接続します。_

  
👉 詳細はこちら: [新しいウィンドウで複数のRclone接続を使用する](/howto/rcloneview-advanced/multi-window)

---

## パート3: EC2でホストされている外部Rcloneに接続する

**新しく開いたウィンドウ**で、以下の手順に従ってEC2でホストされている外部Rcloneに接続します。

1. `Settings`メニューから**`Connection Manager`**を開く。

2. **`New Connection`**をクリックして、新しいRclone接続プロファイルを作成する。

3. 必要な項目を入力する:

    - **Display Name**: `ec2-rclone`(または任意の名前)

    - **Remote Address**: `http://<EC2-PUBLIC-IP-or-DNS-NAME>:5572`

    - **Username / Password**: パート1でRcloneデーモンを起動する際に設定した値を使用する  
      (例: `--rc-user=admin`、`--rc-pass=admin`)

4. **`Test Connection`**をクリックして設定を確認する。  
   接続に成功したというレスポンスが表示されるはずです。

5. テストに合格したら、**`Save`**をクリックし、次に**`Connect`**をクリックする。

6. これで**EC2上で稼働する外部Rcloneインスタンス**に接続され、ウィンドウ上部に接続ステータスが表示されます。

<div class="img-grid-2">
<img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="new connection to ec2 rclone" class="img-medium img-center" />
<img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="connected to ec2 rclone" class="img-medium img-center" />
</div>

👉 詳細はこちら: [新しい外部Rcloneを追加する](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)


---

## パート4: AWS S3とGoogle Driveのリモートを追加する(外部Rclone経由)

  
引き続きEC2に接続されたRcloneViewウィンドウで作業します。

### ➕ AWS S3リモートを追加する

1. `Remote`メニューの**`+ New Remote`**をクリックする
    
2. **Provider**タブでS3を検索して選択する
    
3. **`Options`**タブで:
    
    - **`Provider`**をAWSに設定する
        
    - AWSの**`Access Key ID`**と**`Secret Access Key`**を入力する
        
    - **`Region`**を設定し、S3互換サービスの場合は必要に応じて**Endpoint**を設定する
        
    
4. **Save**をクリックし、名前を付ける(例: ec2-s3)
    
👉 詳細はこちら: [AWS S3リモートを追加する](/howto/remote-storage-connection-settings/s3)

### ➕ Google Driveリモートを追加する(OAuthアクセストークンを使用)

ブラウザベースの新しいログインフローを完了する代わりに、以下のガイドの手順に従って、事前に取得した**OAuthアクセストークン**を使用できます。

👉 参照: [ブラウザを使わずに外部RcloneでGoogle Driveを設定する](/howto/remote-storage-connection-settings/ec2-google-drive-connection)

1. `Remote`メニューから**`+ New Remote`**に移動する
2. プロバイダーとして**Google Drive**を選択する
3. **Options**タブで下にスクロールし、**Show advanced options**をクリックする
4. 事前にコピーしたトークンを**`token`**フィールドに貼り付ける
5. リモートに名前を付け(例: `ec2-gdrive`)、保存する

  <img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />


---

## パート5: AWS S3とGoogle Drive間でファイルを同期する

 これで、EC2のRcloneインスタンスを経由してGoogle DriveとS3間でファイルを転送できるようになりました。

  ### **📁 方法A: オンデマンドで比較・同期する**

1. **Browse**タブに移動する
    
2. 左ペインに**Google Driveリモート**を読み込む(ec2-gdrive:)
    
3. 右ペインに**AWS S3リモート**を読み込む(ec2-s3:)
    
4. 上部メニューの**Compare**をクリックする
    
5. 差分を確認する:
    
    - 片方にのみ存在するファイル
        
    - サイズが異なるファイル
        
    - 完全に一致するファイル
        
    
6. **Copy →**、**← Copy**、または**Delete**を使用して同期する
    

💡 進捗状況はステータスバーと転送ログタブに表示されます。

  👉 詳細はこちら: [フォルダの内容を比較する](/howto/rcloneview-basic/compare-folder-contents)

---

### **🕒 方法B: スケジュール同期ジョブを設定する**

1. **Home → Job Manager**に移動し、**Add Job**をクリックする
    
2. **Sync**を選択する
    
    - Source: ec2-gdrive:folder
        
    - Destination: ec2-s3:folder
        
    
3. 設定する:
    
    - 同期方向
        
    - フィルタリングルール(任意)
        
    
4. (任意)**Scheduling**を有効にする
    
    - 時間パターンを設定する
        
    - 組み込みシミュレーターでスケジュールをプレビューする
        
    
5. **Save & Enable**をクリックする
    

  スケジュールが設定されると、RcloneViewはEC2上のRcloneバックエンドを使って自動的に同期を実行します。

👉 詳細はこちら:
- [リモートストレージを同期する](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブを作成する](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)
- [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)
  
---

## 最終確認

- **Transfer Log**または**Job History**ペインで同期が正常に完了したことを確認する
    
- EC2の接続状態と応答性を定期的にチェックする
    

---

## 🔗 関連ガイド

- [AWS EC2サーバーでRcloneを実行する方法](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [新しいウィンドウで複数のRclone接続を使用する](/howto/rcloneview-advanced/multi-window)
- [新しい外部Rcloneを追加する](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [AWS S3リモートを追加する](/howto/remote-storage-connection-settings/s3)
- [フォルダの内容を比較する](/howto/rcloneview-basic/compare-folder-contents)
-  [リモートストレージを同期する](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブを作成する](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)
- [ジョブのスケジューリングと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)



<CloudSupportGrid />
