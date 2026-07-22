---
slug: sync-zoho-workdrive-to-onedrive-rcloneview
title: "Zoho WorkDriveをOneDriveに同期 — RcloneViewでクラウドバックアップ"
authors:
  - steve
description: "RcloneViewを使ってZoho WorkDriveからMicrosoft OneDriveへファイルを同期し、両方のビジネスストレージアカウントを常にバックアップ済みの最新状態に保ちましょう。"
keywords:
  - Zoho WorkDriveをOneDriveに同期
  - Zoho WorkDrive バックアップ
  - Zoho WorkDrive OneDrive 移行
  - RcloneView Zoho WorkDrive
  - クロスクラウド ビジネスバックアップ
  - Microsoft OneDrive 同期ツール
  - マルチクラウド ファイル転送
  - クラウド間同期 GUI
  - ビジネスファイルストレージ バックアップ
tags:
  - RcloneView
  - zoho
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDriveをOneDriveに同期 — RcloneViewでクラウドバックアップ

> ファイルを手作業でエクスポートしたり、部署ごとに個別の転送ジョブをスクリプト化したりすることなく、Zoho WorkDriveのチームフォルダをMicrosoft OneDrive上に継続的にバックアップしましょう。

日常の共同作業でZoho WorkDriveを標準採用しているチームでも、Microsoft OneDrive上に存在が必要になることは少なくありません。Microsoftのエコシステムでしか作業しないクライアントのためであったり、合併により2つのストレージプラットフォームが同時に使われることになったり、あるいは単にZohoのインフラの外にビジネスファイルの2つ目のコピーを持ちたいだけの場合もあります。WorkDriveから手動でダウンロードしてOneDriveに再アップロードする方法は、少数のファイルを超えるとスケールせず、何がいつ実行されたかの記録も残りません。RcloneViewは両方のプラットフォームを1つのインターフェースで接続し、この転送を繰り返し可能な同期ジョブに変えます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDriveとOneDriveをリモートとして接続する

OneDriveはRcloneViewのNew Remoteウィザードで標準的なブラウザベースのOAuthログインにより接続され、別途APIキーは必要ありません。Zoho WorkDriveは設定時にもう1ステップ必要で、ワークスペースが作成された地域によってZohoがデータを異なる地理的リージョンにホストしているため、アカウントに合った正しいリージョンを選択する必要があります。両方のリモートが追加されると、Explorer内に別々のタブとして表示され、それぞれをローカルフォルダと同じように閲覧、フィルタリング、または相互比較できます。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Zoho WorkDrive and OneDrive as remotes in RcloneView" class="img-large img-center" />

## 2つのプラットフォーム間で同期ジョブを構築する

Syncウィザードのステップ1では、ソース(Zoho WorkDriveフォルダ)と宛先(OneDriveフォルダ)、ジョブ名、同期方向を選択します。宛先のみを変更するOne-way同期は安定した公式モードであり、WorkDriveを正としたバックアップ型ジョブに適した選択です。ステップ2では転送の並列度と同一性チェックを扱い、WorkDriveのAPIが高負荷な並列リクエスト下で応答が遅くなる場合は値を下げると有用です。ステップ3のフィルタリング設定では、ドキュメントやメディア向けの定義済みフィルタや`/.tmp/*`のようなカスタム除外ルールを使って、実際に重要なフォルダやファイルタイプだけにジョブの範囲を絞り込めます。

Zoho WorkDriveとOneDrive間の同期にはライセンスのアップグレードは不要です。1:N同期と基本的なSync & Job Managementはいずれも FREE ライセンスに含まれているためです。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## 転送を確認し自動化する

実データに対してジョブを実行する前に、Dry Runが同期をシミュレーションし、実際にコピーされるファイルを正確にリストアップするため、何かが実際に移動する前に設定ミスのフィルタや意図しないフォルダに気付くことができます。ジョブが問題ないと確認できたらJob Managerに保存し、手動で再実行するか、PLUSライセンスであればcrontab形式のスケジュールに紐付けることで、誰かがトリガーを覚えていなくてもWorkDriveからOneDriveへのバックアップが自動的に実行されるようにできます。

Job Historyはすべての実行の開始時刻、所要時間、ステータス、転送された総ファイル数を記録するため、スケジュールされたバックアップが夜間に静かに失敗することなく実際に完了したかを確認するのに役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ > New RemoteからZoho WorkDrive(正しいリージョンを選択)とOneDrive(OAuthログイン経由)を接続します。
3. WorkDriveフォルダからOneDriveの宛先へOne-way Syncジョブを作成し、必要に応じてフィルタを適用します。
4. Dry Runを実行してファイルリストを確認した後、ジョブを保存し、PLUSライセンスであればスケジュールを設定します。

両方のプラットフォームが同じウィンドウで接続されれば、Zoho WorkDriveとOneDriveを同期状態に保つことは、繰り返しの手作業ではなくスケジュールされたジョブになります。

---

**関連ガイド:**

- [Zoho WorkDriveを管理する — RcloneViewでファイルの同期とバックアップ](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Google DriveをRcloneViewでローカルドライブとしてマウントする](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [フィルタルール — RcloneViewでの選択的同期](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
