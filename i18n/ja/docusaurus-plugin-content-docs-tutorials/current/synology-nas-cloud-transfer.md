---
sidebar_position: 3
description: "ローカルネットワーク上のSynology NASを自動検出し、WebDAV、SMB、SFTPを使ってRcloneViewに接続する方法を解説します。"
keywords:
  - rcloneview
  - Synology NAS
  - 自動検出
  - NASからクラウドへの転送
  - SMB
  - WebDAV
  - SFTP
  - Synology連携
  - クラウドストレージ同期
  - クラウドバックアップ
  - google drive
  - onedrive
  - ドラッグ&ドロップ
  - ジョブスケジューラ
  - マルチクラウド管理
tags:
  - RcloneView
  - Tutorial
  - synology
  - NAS
  - auto-detection
  - cloud-file-transfer
  - webdav
  - sftp
  - cloud-migration
  - multi-cloud
  - sync
  - job
  - drag-and-drop
date: 2025-09-11
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# RcloneViewで簡単にSynology NASを連携:自動検出・設定・ファイル転送

**RcloneView**を使えば、Synology NASをGoogle Drive、OneDrive、iCloudなどのクラウドサービスに簡単に接続できます。自動検出機能、SMB・WebDAV・SFTPの標準サポートにより、複雑な設定は不要で、使いやすいGUIからNASとクラウドドライブ間の転送、同期、ジョブのスケジュール設定が行えます。

## **✅ なぜNASからクラウドへの転送にRcloneViewを使うのか?**

Synology NASをホームサーバー、オフィスのバックアップ、メディア保管庫として利用している方の多くは、クラウドストレージのアカウントも持っているはずです。RcloneViewを使えば、手動でファイルをダウンロードしたり、コマンドラインツールを学んだりする必要はありません。

代わりに、次のことが可能になります。

- 🚀 ローカルネットワーク上のNASデバイスを自動検出
    
- 🔄 NASとクラウドストレージ間の同期・転送ジョブ
    
- 👨‍💻 WebDAV、SMB、FTP、SFTPのGUIベースの設定
    
- 📅 NASからクラウドへの自動バックアップジョブのスケジュール設定
    
- ✅ 同期前にフォルダの内容を比較
    
- 🧠 コマンドライン操作の知識は不要
  

初心者でもシステム管理者でも、**RcloneViewならNASからクラウドへの管理が簡単**です。

## **🧰 ステップ1: ローカルネットワーク上のNASを検出**
  

RcloneViewはローカルネットワークをスキャンし、Synology NASデバイスを自動的に検出します。

<img src="/support/images/en/tutorials/synology-nas-auto-detect.png" alt="synology nas auto detect" class="img-medium img-center" />


- NASとコンピューターが**同じローカルネットワーク**上にあることを確認してください。
    
- 検出されたNASデバイスは、以下の情報を含むリストに表示されます。
    
    - デバイス名、IPアドレス、MACアドレス、DSMポート
        
    - **DSM(DiskStation Manager)**を開くリンク


:::info VLAN環境でNASの自動検出が動作しない場合
VLAN(仮想ローカルエリアネットワーク)を使用している場合、RcloneViewがSynology NASを自動検出できないことがあります。

これは、自動検出機能がマルチキャストまたはブロードキャストプロトコルに依存しており、セキュリティやトラフィック分離の理由から、これらのプロトコルはVLAN間で通常制限またはブロックされているためです。
:::

  
### 接続方法を選択する

  ドロップダウンから、接続方法を選択します。

- **WebDAV**(デフォルトかつ推奨)
- **SMB**
- **FTP**
- **SFTP**

**🔗 各方式の設定が必要な場合は?**

以下の公式DSM設定ガイドを参照してください。

- [SynologyでWebDAVを設定する](https://kb.synology.com/en-global/DSM/help/WebDAVServer/webdav_server)
- [SynologyでSMBを有効にする](https://kb.synology.com/en-global/DSM/help/SMBService/smbservice_smb_settings)
- [SynologyでFTPを設定する](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_setting) 
- [SynologyでSFTPを設定する](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_sftp) 

:::important ポートフォワーディングとDDNSの設定

NASがルーターの背後にある、またはNAT(ネットワークアドレス変換)環境で動作している場合、DSMでWebDAV、SMB、FTP、SFTPを有効化した後、ルーターで**ポートフォワーディングを設定**する必要があります。

📘 詳細はこちら: [Synologyポートフォワーディングガイド](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id5)

さらに、IPアドレスの代わりに**ドメインベースのアクセス**でインターネット経由でNASにアクセスするには、Synologyの**DDNS(ダイナミックDNS)**サービスを設定できます。

🌐 詳細はこちら: [Synology DDNS設定ガイド](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id3)

:::


## **🔗 ステップ2: Synology NASをリモートとして追加**

NASと接続方法を選択すると、RcloneViewが**`+ New Remote`**ウィザードで自動的に案内します。

- **プロバイダー**は選択した接続方法(例: WebDAV、SMB、SFTP)に応じて自動的に選択されます。
- **リモート名**は自動入力されます(例: `Synology-28`)が、必要に応じて変更できます。
- **URLとポート**:  
  - **WebDAV**の場合、完全なURLを入力します(例: `https://abc.synology.me:5006`)  
  - **SMB/FTP/SFTP**の場合、**ホスト**(例: `192.168.1.100`)と適切な**ポート**を入力します。
    - SMBの場合`445`  
    - FTPの場合`21`  
    - SFTPの場合`22`
- **ユーザー名とパスワード**: 共有フォルダへのアクセスに使用するNASアカウントの認証情報を入力します。

<div class="img-grid-3">
<img src="/support/images/en/tutorials/add-synology-webdav-remote.png" alt="add synology webdav remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-smb-remote.png" alt="add synology smb remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-sftp-remote.png" alt="add synology sftp remote" class="img-medium img-center" />
</div>

📌 **各方式についてさらにサポートが必要な場合は?**  
詳細な設定ガイドはこちらです。

- 👉 [SFTPリモートの追加方法](/howto/remote-storage-connection-settings/sftp)
- 👉 [WebDAVリモートの追加方法](/howto/remote-storage-connection-settings/webdav)



✅ 追加が完了すると、NASリモートがリモートリストに表示されます。  
その後、**Explorer**パネルで開いてファイルを閲覧したり、転送を開始したりできます。

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## **💽 ステップ2.5: NASをローカルドライブとしてマウント(Explorer/Finder)**

任意のNASフォルダを、Windowsではローカルドライブ(例: `W:`)として、macOSではFinder上の場所としてマウントできます。Explorerツールバーの「マウント」ボタンを使用します。

### マウント方法

1. RcloneViewの**Browse/Explorer**でNASリモートを開き、マウントしたいフォルダに移動します。
2. 上部ツールバーの**マウント(<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />)**アイコンをクリックします。
3. オプションを設定します。
   - Windows: ドライブ文字を選択します(自動または任意に選択)
   - macOS: マウントフォルダ名を確認します(デフォルトは`~/homefolder/<Remote name>`のような形式)
4. **Save and mount**をクリックします。フォルダがローカルディスクとして表示されます。
   - Windows: 「PC」配下、例: `synology-28-webdav … (W:)`
   - macOS: Finderの「場所」配下

<img src="/support/images/en/tutorials/mount-synology-nas-as-local-drive.png" alt="mount synology nas as local drive" class="img-medium img-center" />
                
:::tip アンマウント
アンマウントするには、RcloneViewで**Unmount**をクリックするか、OSからドライブを取り出してください。
:::

:::note 事前準備
`rclone mount`によるマウントには、OSのファイルシステムドライバが必要な場合があります。インストールされていない場合は、以下のリンクを参照してください。
- Windows: [WinFsp](https://winfsp.dev/)
- macOS: [macFUSE](https://osxfuse.github.io/)

パフォーマンスのため、RcloneViewは負荷の高い操作中に**VFSキャッシュ**を有効にします。ネットワーク状況によっては、初回のメタデータ読み込みに時間がかかる場合があります。
:::

詳細やその他の方法については、以下を参照してください。

- [方法1: Remote Explorerからマウント](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- [方法2: Mount Manager経由でマウント](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)
- [マウント済みドライブの表示と管理](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)
- [システムトレイからのクイックマウント](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)

## **🚚 ステップ3: ファイルを転送・同期する**

  
NASがリモートとして接続されると、RcloneViewはNASとクラウドストレージ間でファイルを管理する**4つの強力な方法**を提供します。

  
### **🖱️ 方法1: ドラッグ&ドロップ**

1. **Browse**タブを開きます。
    
2. 一方のペインに**NAS**リモートを、もう一方のペインにクラウドリモート(例: Google Drive)を読み込みます。
    
3. 一方のペインからファイルをドラッグし、もう一方のペインにドロップするだけです。
    
4. 転送が即座に開始されます。**Transfer Logs**タブで進行状況を確認できます。
    
<img src="/support/images/en/tutorials/synology-nas-to-google-drag-and-drop.png" alt="synology nas to google drag and drop" class="img-medium img-center" />

  👉 詳細はこちら: [リモートストレージの閲覧](/howto/rcloneview-basic/browse-and-manage-remote-storage)


### **🔍 方法2: フォルダの内容を比較する**

1. NASとクラウドの両方のフォルダをExplorerパネルで開きます。
    
2. 上部メニューの**Home**タブで**Compare**をクリックします。
    
3. RcloneViewが以下をハイライト表示します。
    
    - 片方にのみ存在するファイル
        
    - サイズやチェックサムが一致しないファイル
        
    - 同一のファイル
        
    
4. **Copy →**、**← Copy**、または**Delete**を使ってファイルを操作します。
    
<img src="/support/images/en/tutorials/compare-synology-nas-and-google-drive.png" alt="compare synology nas and google drive" class="img-medium img-center" />

  👉 詳細はこちら: [フォルダの比較](/howto/rcloneview-basic/compare-folder-contents)


### **🔁 方法3: 同期または1回限りのジョブ**

1. ソース(NAS)と宛先(クラウド)を選択します。
    
2. **Sync**をクリックして同期オプションを開きます。
    
3. 方向、ドライラン、フィルターなどを選択します。
    
4. 同期をすぐに実行するか、**Save to Jobs**をクリックします。
    

  <img src="/support/images/en/tutorials/sync-job-synology-to-google-drive.png" alt="sync job synology to google drive" class="img-medium img-center" />
  

👉 詳細はこちら:

- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
    
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
    


### **⏰ 方法4: 定期ジョブのスケジュール設定**

1. **Job Manager**に移動し、**Add Job**をクリックします。
    
2. NASとクラウドのフォルダを選択します。
    
3. スケジュール(毎日、毎週、cron)を定義します。
    
4. 保存してジョブを有効にします。
    

  ✅ ジョブは指定した時刻にバックグラウンドで自動的に実行されます。
 

👉 詳細はこちら: [ジョブのスケジュール設定と実行](/howto/rcloneview-advanced/job-scheduling-and-execution)



## **🧾 まとめ**

  

RcloneViewのSynology NAS連携により、以下のことが可能になります。

- 技術的な設定なしでNASを検出・接続
    
- SMB、SFTP、FTP、WebDAVを簡単に利用
    
- 任意のクラウドへのファイル転送、同期、バックアップジョブのスケジュール設定
    
  
コマンドラインもスクリプトも不要。高速で強力、柔軟なクラウドファイル管理がすぐに使えます。

  
## **🔗 関連ガイド**

- [SFTPリモートの追加方法](/howto/remote-storage-connection-settings/sftp)
- [WebDAVリモートの追加方法](/howto/remote-storage-connection-settings/webdav)
- [フォルダの比較](/howto/rcloneview-basic/compare-folder-contents)
- [リモートストレージの閲覧と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブの実行と管理](/howto/rcloneview-basic/execute-manage-job)
- [ジョブのスケジュール設定と実行](/howto/rcloneview-advanced/job-scheduling-and-execution)

🧠 **今すぐRcloneViewでNASをクラウドに接続しましょう。**

<CloudSupportGrid />
