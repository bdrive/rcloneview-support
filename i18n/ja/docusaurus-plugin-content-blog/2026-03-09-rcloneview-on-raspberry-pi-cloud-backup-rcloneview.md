---
slug: rcloneview-on-raspberry-pi-cloud-backup-rcloneview
title: "Raspberry PiでRcloneViewを使う — 低消費電力クラウドバックアップ機を構築する"
authors:
  - tayson
description: "Raspberry Piを24時間365日稼働するクラウドバックアップ機に変える。ローカルストレージとクラウドプロバイダー間の自動同期のためにRaspberry PiにRcloneViewをセットアップする方法。"
keywords:
  - rcloneview raspberry pi
  - raspberry pi cloud backup
  - rclone raspberry pi
  - raspberry pi nas cloud sync
  - raspberry pi cloud storage
  - diy cloud backup appliance
  - raspberry pi s3 backup
  - low power cloud sync
  - raspberry pi google drive sync
  - raspberry pi automated backup
tags:
  - RcloneView
  - raspberry-pi
  - backup
  - cloud-storage
  - platform
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Raspberry PiでRcloneViewを使う — 低消費電力クラウドバックアップ機を構築する

> Raspberry Piの消費電力は5〜15ワット。電球よりも少ない電力です。24時間365日稼働させておけば、あなたが眠っている間もデータを同期し続ける、静かで常時稼働するクラウドバックアップ機になります。

Raspberry Piはクラウドストレージ関連のタスクに驚くほど適したコンピューターです。外付けUSBドライブとRcloneViewを組み合わせれば、ローカルファイルをクラウドストレージへ（またはその逆へ）常時同期する専用バックアップマシンを、フルスペックPCやNASよりもはるかに低い電力コストで実現できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜクラウドバックアップにRaspberry Piなのか？

### 常時稼働かつ低消費電力

| デバイス | 消費電力 | 年間コスト（24時間稼働） |
|--------|-----------|-------------------|
| Raspberry Pi 4 | 5〜7W | 約$8 |
| Raspberry Pi 5 | 8〜15W | 約$14 |
| デスクトップPC | 100〜300W | 約$150〜400 |
| NAS（2ベイ） | 20〜40W | 約$30〜60 |

Raspberry Piなら、24時間365日稼働させても実質ほぼコストがかかりません。

### 静音かつコンパクト

ファンがなく（Pi 4）、動作音もありません。棚に置いてそのまま放置しておけます。

### 十分な性能

Raspberry Pi 4と5は以下の処理をこなせます。

- 数千個のファイルをクラウドストレージへ同期する。
- スケジュールされたバックアップジョブを実行する。
- ローカルアクセス用にクラウドストレージをマウントする。
- 複数のクラウドアカウントを同時に管理する。

## ハードウェアのセットアップ

### 推奨ハードウェア

- **Raspberry Pi 4**（4 GB）または **Raspberry Pi 5**（4〜8 GB）。
- ローカルストレージ用の **USB 3.0外付けドライブ** またはSSD。
- OS用の **MicroSDカード**（32 GB）。
- **イーサネット接続**（大容量転送にはWi-Fiより推奨）。
- **電源アダプター**（Pi公式の電源アダプターを推奨）。

### ストレージ構成

```
External USB Drive → Raspberry Pi → Cloud Storage
                          ↕
                    RcloneView (scheduling, monitoring)
```

外付けドライブにローカルファイルを保存します。Pi上のRcloneViewがスケジュールに従ってそれらをクラウドストレージへ同期します。

## インストール

### 1) Raspberry Pi OSのインストール

Raspberry Pi Imagerを使って、microSDカードにRaspberry Pi OS（64ビット）を書き込みます。RcloneViewのGUIを利用するにはデスクトップ版が必要です。

### 2) RcloneViewのインストール

[rcloneview.com](https://rcloneview.com/src/download.html)からARM64の`.deb`パッケージをダウンロードします。

```bash
sudo dpkg -i rcloneview_*_arm64.deb
sudo apt-get install -f
```

### 3) FUSEのインストール（マウント用）

```bash
sudo apt-get install fuse3
```

### 4) 外付けドライブのマウント

```bash
sudo mkdir /mnt/backup
sudo mount /dev/sda1 /mnt/backup
```

起動時に自動マウントされるよう`/etc/fstab`に追加してください。

### 5) RcloneViewの起動

```bash
rcloneview
```

VNC経由でヘッドレス運用する場合は、`raspi-config`でVNCが有効になっていることを確認してください。

## クラウドバックアップの設定

### クラウドリモートの追加

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Raspberry Pi" class="img-large img-center" />

バックアップ先を追加します — Google Drive、S3、Backblaze B2、または70以上あるサポート対象プロバイダーのいずれかを選べます。

### バックアップジョブの作成

外付けドライブからクラウドストレージへのコピージョブを設定します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create backup job" class="img-large img-center" />

### 自動バックアップのスケジュール設定

夜間バックアップをスケジュールします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Pi backup jobs" class="img-large img-center" />

## ユースケース

### 1) 家庭用ファイルサーバーのバックアップ

家族の写真、ドキュメント、メディアが入ったUSBドライブを接続します。Google DriveやBackblaze B2への夜間バックアップをスケジュールします。

### 2) NASの補完

お使いのNASにクラウド同期機能がない、または不十分な場合、Piをブリッジとして使えます。

```
NAS (SMB share) → Pi (reads via mount) → Cloud Storage (via RcloneView)
```

### 3) 防犯カメラ映像のアーカイブ

ローカルのNVRから防犯カメラの映像をクラウドストレージへバックアップし、オフサイトで保護します。

### 4) 開発者向けバックアップ

コードリポジトリやプロジェクトファイルをクラウドストレージへ同期します。

- ソースファイルのみを対象とするフィルターを設定する（`node_modules`、`.git`は除外）。
- 毎時バックアップをスケジュールする。

### 5) メディアライブラリのミラー

ローカルのメディアライブラリのクラウドミラーを保持します。外出先でGoogle Driveからストリーミング再生する際に利用できます。

## パフォーマンスの目安

Piの性能については現実的な期待値を持っておきましょう。

| タスク | Raspberry Pi 4 | Raspberry Pi 5 |
|------|----------------|----------------|
| 小さいファイルの同期（ドキュメント） | 良好 | 非常に良好 |
| 大きいファイルの転送 | USB 3/ネットワークに制限される | 良好 |
| 数千個の小さいファイル | チェック処理が遅い | まずまず |
| 暗号化された転送 | CPUがボトルネックになる | より高速（AESサポートあり） |
| ネットワーク速度 | 約300 Mbps（ギガビットイーサネット） | 約1 Gbps |

大容量転送では、辛抱強く待つことが大切です。Piは高速ではありませんが、24時間365日稼働しているため、いずれ処理は完了します。

### 最適化のヒント

- **並列転送数を減らす** — Pi 4では2〜4が最適です。Pi 5は4〜8まで対応可能です。
- **イーサネットを使う** — Wi-Fiはレイテンシーを増やし、スループットを低下させます。
- **オフピーク時にスケジュールする** — 負荷の高いジョブは夜間に実行します。
- **HDDよりSSDを使う** — USB SSDは回転式ディスクよりはるかに高速に読み込めます。

## モニタリングと検証

バックアップの状況を追跡します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Pi backup transfers" class="img-large img-center" />

フォルダ比較機能で検証します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Pi cloud backup" class="img-large img-center" />

## ヘッドレス運用

真の「設定して忘れる」運用を実現するには次のようにします。

1. VNC経由または直接、すべてのジョブとスケジュールを設定する。
2. RcloneViewの自動起動を有効にする（[Ubuntu/Debianガイド](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)を参照）。
3. モニターとキーボードを取り外す。
4. Piはスケジュールされたジョブを実行しながら静かに稼働し続けます。

## はじめに

1. 外付けUSBドライブを備えた **Raspberry Pi 4または5を用意する**。
2. **Raspberry Pi OS**（64ビット・デスクトップ版）をインストールする。
3. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロードする**。
4. **クラウドリモートを追加し、バックアップジョブを作成する**。
5. **スケジュールを設定して、あとは任せる** — 残りはPiが処理してくれます。

あなたが構築できる中で、最も安価で、最も静かで、最も効率的なクラウドバックアップ機です。

---

**関連ガイド：**

- [Ubuntu/DebianにRcloneViewをインストールする](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [同期ジョブを作成する](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [クラウド転送の帯域幅制限を設定する](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
