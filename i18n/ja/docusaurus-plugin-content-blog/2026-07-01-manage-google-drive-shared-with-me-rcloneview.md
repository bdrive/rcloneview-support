---
slug: manage-google-drive-shared-with-me-rcloneview
title: "Google Drive「共有アイテム」を管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - alex
description: "RcloneViewのクロスプラットフォームGUIを使って、Google Driveの「共有アイテム」フォルダを閲覧・同期・バックアップし、共有コンテンツを見失わないようにしましょう。"
keywords:
  - google drive shared with me
  - google drive shared with me sync
  - rcloneview google drive
  - backup shared google drive folders
  - google drive gui client
  - shared_with_me rclone
  - google drive collaboration backup
  - manage shared google drive files
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive「共有アイテム」を管理 — RcloneViewでファイルを同期・バックアップ

> 他の人があなたと共有したファイルは、自分のDriveとは別の領域に保存されます。RcloneViewを使えば、自分のファイルと同じように、その共有コンテンツを簡単に閲覧・バックアップ・同期できます。

Google Driveの「共有アイテム」セクションには、同僚やクライアント、共同作業者があなたのアカウントと共有したすべてのファイルとフォルダが格納されていますが、デフォルトでは通常のDriveフォルダツリーの一部にはなっていません。この分離により、特にクライアントのフォルダをローカルにアーカイブしたり、安全のために別のクラウドにミラーリングしたりする必要がある場合、共有コンテンツを見失いやすくなります。RcloneViewは、共有アイテムの領域をそれ自体が閲覧可能なリモートとして接続することでこの問題を解決し、共有コンテンツをワークフロー内の他のフォルダと同じように扱えるようにします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 共有アイテムのコンテンツへの接続

標準のGoogle Driveリモートでは、自分が所有するファイルや自分のフォルダ構造に配置したファイルしか表示されません。自分と共有されているアイテムにアクセスするには、RcloneViewのリモート設定でGoogle Driveリモート用の`shared_with_me`設定を有効にします。これを有効にすると、接続先が個人のDriveルートではなく共有アイテムのビューに切り替わります。つまり、2つ目のGoogleアカウントやブラウザでの回避策を使わずに、クライアントの共有フォルダにアクセスできるということです。新規リモートウィザードで一度設定するだけで、共有ツリーが他の接続と同じようにExplorerパネルに表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new Google Drive remote configured for Shared with Me content in RcloneView" class="img-large img-center" />

接続後、共有アイテムリモートは通常のファイルソースと同じように動作します。フォルダツリーのナビゲーション、画像のサムネイルプレビュー、コピー・ダウンロード・公開リンクの取得のための標準の右クリックメニューも同じように機能します。RcloneViewはFREEライセンスでもフォルダの同期・比較が行えるため、共有コンテンツは読み取り専用の閲覧に限定されません。

## 消える前に共有フォルダをバックアップする

所有者がアクセス権を取り消したり元ファイルを削除したりすると、共有フォルダはあなたのビューから消えてしまうことがあります。これは、プロジェクトの成果物を他人のDriveに依存している場合に現実的なリスクです。共有アイテムリモートから自分のGoogle Drive、ローカルディスク、あるいはオブジェクトストレージバケットへの一方向の同期ジョブを実行すれば、自分で管理できる独立したコピーを作成できます。ジョブを「変更先のみ変更」の方向で設定すれば、元のファイルを変更することなく、バックアップ先が常に共有フォルダの現在の状態を反映するようになります。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Shared with Me folder to a backup destination in RcloneView" class="img-large img-center" />

継続的なクライアント関係のために、フィルタリング設定を使えば、アーカイブする必要のないファイルタイプを除外できます。同期ウィザードのステップ3にある定義済みまたはカスタムのフィルタルールを使うことで、Google Docsや特定の拡張子をスキップし、本当に重要なファイルだけにバックアップを絞り込むことができます。

## 継続的な保護のスケジュール設定

クライアントが週次で更新する共有フォルダには、一度きりのコピーでは不十分です。PLUSライセンスユーザーは、同期ジョブにcrontab形式のスケジュールを設定することで、ジョブを手動で再実行することなく、共有アイテムのコンテンツを定期的に自動バックアップできます。ジョブ履歴には各実行のステータス、転送サイズ、所要時間が記録されるため、共有コンテンツが最後にいつキャプチャされたかを明確に追跡できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for a Google Drive Shared with Me remote" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 新しいGoogle Driveリモートを作成し、設定中に`shared_with_me`オプションを有効にします。
3. Explorerパネルで共有アイテムツリーを閲覧し、想定通りのフォルダが表示されることを確認します。
4. バックアップ先への一方向の同期ジョブを設定し、PLUSライセンスを利用している場合はスケジュールを設定します。

共有コンテンツはバックアップ戦略の死角であってはなりません。RcloneViewに取り込むことで、他のすべてのコンテンツと同じ保護のもとに置くことができます。

---

**関連ガイド:**

- [Google Driveストレージを管理 — RcloneViewでファイルを同期・バックアップ](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Google共有ドライブの権限エラーを修正 — RcloneViewでの解決方法](https://rcloneview.com/support/blog/fix-google-shared-drive-permission-errors-rcloneview)
- [RcloneViewで2つのGoogle Driveアカウントを同期する](https://rcloneview.com/support/blog/sync-two-google-drive-accounts-rcloneview)

<CloudSupportGrid />
