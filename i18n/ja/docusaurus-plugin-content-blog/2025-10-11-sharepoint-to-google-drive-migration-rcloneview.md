---
slug: sharepoint-to-google-drive-migration-rcloneview
title: "RcloneViewで極めるSharePointからGoogle Driveへの移行:ステップバイステップのビジネスガイド"
authors:
  - tayson
description: "RcloneViewによる、視覚的でスロットル制御された監査可能なSharePointからGoogle Driveへの移行 — CLI不要でポリシーに準拠したカットオーバーを求める企業IT部門向けに構築。"
keywords:
  - SharePoint to Google Drive
  - move files from SharePoint to Drive
  - RcloneView SharePoint
  - cloud migration for business
  - Microsoft 365 migration tool
  - migrate sharepoint document library
  - google drive workspace migration
  - rclone sharepoint connector
  - office 365 to google drive
  - sharepoint migration guide
tags:
  - RcloneView
  - migration
  - sharepoint
  - google-drive
  - microsoft-365
  - business
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewで極めるSharePointからGoogle Driveへの移行:ステップバイステップのビジネスガイド

> チームサイト、プロジェクトフォルダ、あるいは事業部門全体をダウンタイムなしで移行できる、視覚的でスロットル制御された繰り返し可能なフローで、企業管理者がCLIに触れることなくSharePointのドキュメントライブラリをGoogle Drive(Workspace)に移行できます。

RcloneViewは、rcloneのSharePointおよびGoogle Driveコネクタを、監査に適したログ、スケジューラー、リアルタイム監視を備えたGUIでラップしています。このガイドでは、段階的な移行を計画・実行し、チームサイト、プロジェクトフォルダ、あるいは事業部門全体をダウンタイムなしで移行する方法を説明します。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## RcloneViewをSharePoint → Google Driveに使う理由

- CLI不要:ガイド付きダイアログでMicrosoft 365(SharePoint/OneDrive for Business)とGoogle Driveのリモートを設定できます。
- ビジネスフレンドリー:リクエストをスロットル制御してSharePointおよびDriveのAPIレート制限を回避し、メンテナンスウィンドウ中にカットオーバーをスケジュールできます。
- 運用の可視性:サイドバイサイドのエクスプローラー、比較&コピー、ジョブ履歴、監査用のリアルタイム転送モニタリング。
- 柔軟な移動:単発コピー、双方向同期、あるいはソースとデスティネーションを整合させ続ける段階的な差分同期。

## 前提条件(エンタープライズ対応)

- RcloneViewがインストール済みで、対象のSharePointサイトとGoogle Driveの移行先(共有ドライブまたはマイドライブ)にアクセスできるアカウントでサインインしていること。
- テナントがサードパーティアプリを制限している場合は、Microsoft Graphに対する管理者の同意が付与されていること。
- カットオーバーウィンドウ(または段階的同期の許可)と、十分なDrive/共有ドライブの容量。

## ステップ1 — SharePointとGoogle Driveのリモートを接続する

1) **RcloneView → Settings → Remote Storage** で、新しいリモートを追加します。  
<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2) **OneDrive/SharePoint (Microsoft 365)** を選択し、サイトを所有またはアクセス可能なアカウントでサインインして、正しい **サイト / ドキュメントライブラリ** を選びます(例:`/sites/Marketing/Shared Documents`)。  
3) **Google Drive**(Workspace)を追加します:プロジェクトを **マイドライブ** に配置するか、特定の **共有ドライブ** に配置するかを選択します。  
4) 各リモートをテストして保存します。

## ステップ2 — 適切なライブラリと移行先フォルダをマッピングする

- SharePointライブラリごとに、接続ダイアログで選択したパスをメモし、エクスプローラーで開いてルートを確認します(想定される部門フォルダが表示されるはずです)。
- Google Drive/共有ドライブにまだ存在しない場合は、対応するフォルダ構成を作成します。
- チームごとの分離が必要な場合は、複数のSharePointリモート(サイトごと、または機密コレクションごとに1つ)で同じ手順を繰り返します。

## ステップ3 — サイドバイサイドチェックで検証する

- 2ペインのエクスプローラーで両方のリモートを開きます。  
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
- **比較** 機能を使って、コピー前に差分(サイズ、欠落ファイル)をプレビューします。  
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- まず小さなパイロットフォルダをコピーして、権限、バージョン管理されたファイル、命名規則を確認します(SharePointの`# % & { }`はDriveでは有効になりますが、長いパスはクリーンアップが必要な場合があります)。

## ステップ4 — 移行モードを選択する

- **単発コピー(最速)**:新しい共有ドライブへのリフト&シフトには **コピー** を使用します。カットオーバー中にソースが読み取り専用になる場合に最適です。
- **同期(双方向オプション)**:移行中もユーザーがファイルを編集し続ける場合は **同期** を使用し、カットオーバーウィンドウで最終的な差分同期を実行して完了します。
- **可能な場合はサーバーサイド**:SharePointとDriveの両方がインターネット経由でアクセス可能な場合、RcloneViewはサポートされている箇所でサーバーサイドコピーを活用し、送信データ量を削減します。

ドラッグ&ドロップも、その場限りの移動やクイック修正に利用できます。  
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## ステップ5 — 繰り返し可能なジョブを作成し、カットオーバーをスケジュールする

1) **ジョブ** で、SharePointライブラリから移行先の共有ドライブパスへの新しい **コピー** または **同期** ジョブを作成します。  
2) Microsoft 365およびGoogle Driveのスロットル制限を尊重するように **帯域幅制限** と **転送数** を設定します(例:`tpslimit`、`--drive-chunk-size`、または **最大転送数** スライダー)。  
3) 保存後、一括移動は業務時間外にスケジュールし、差分同期用に2つ目のスケジュールを追加します。  
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## ステップ6 — 実行、監視、スロットリングへの対応

- ジョブを開始し、リアルタイムで進捗(スループット、ETA、エラー)を確認します。  
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
- `throttled`や`403`/`429`のレスポンスが表示された場合は、転送数を減らすか短いバックオフを追加します。RcloneViewはターミナルを開かずにこれらのログを表示します。
- **ジョブ履歴** を使用してコンプライアンス用に結果をエクスポートし、失敗したオブジェクトはUIから直接再試行できます。

## ステップ7 — 移行後のチェックと引き継ぎ

- ユーザーアクセスを解除する前に、再度 **比較** を実行して移行先がSharePointと一致していることを確認します。
- 権限をスポットチェックします:DriveのACLはSharePointを自動的にミラーリングしませんが、新しいルートを適切なWorkspaceグループに一括共有できます。
- チームがまだSharePointで活動している場合は、数日間ジョブをスケジュールされた差分同期として維持し、その後ソースを読み取り専用に切り替えます。

## 企業環境向けトラブルシューティングのヒント

- **複雑なサイト**:テナント全体ではなく、サイト/ライブラリ単位で接続し、意図しないスコープの拡大を避けます。
- **長いパスや特殊文字**:詳細設定でRcloneのUnicode正規化とパス長処理を有効にし、カットオーバー前にエクスプローラーでエッジケースの名前を変更します。
- **データ主権**:規制対象のチームでは、リージョナルな共有ドライブを移行先とし、ジョブ履歴のエクスポートによる監査記録を維持します。

## 関連リソース

- [ブラウズベースのログイン(OAuth)でリモートを追加](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Google Driveを追加](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [フォルダの内容を比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [リモートストレージを即座に同期](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [ジョブスケジューリング](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [クラウドストレージをローカルドライブとしてマウント](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## まとめ

RcloneViewは、SharePointのライブラリをGoogle Driveや共有ドライブに移行するための視覚的で低リスクな方法をIT部門に提供します。ポリシーに準拠したスロットリング、スケジュールされたカットオーバー、リアルタイム監視により、コマンドラインスクリプトなしで事業に不可欠なデータを移行し、関係者に情報を伝え続け、将来の統合に備えて繰り返し可能なジョブを残しておくことができます。

<CloudSupportGrid />
