---
slug: migrate-hubic-ovh-modern-cloud-storage-rcloneview
title: "手遅れになる前に、RcloneViewでHubicから最新のクラウドストレージへ移行しよう"
authors: [tayson]
description: "Hubicがサービスを終了します。大切なデータを失わないために。RcloneViewを使ってHubicからGoogle Drive、OneDrive、S3へ安全かつ迅速に移行する方法を解説します。"
keywords: ["hubic migration", "hubic alternative", "hubic to google drive", "hubic export data", "hubic ovh migration", "hubic backup tool", "hubic rclone transfer", "cloud migration", "data preservation", "legacy cloud storage"]
tags:
  - hubic
  - cloud-migration
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 手遅れになる前に、RcloneViewでHubicから最新のクラウドストレージへ移行しよう

Hubic(OVHの個人向けクラウドストレージ)を利用している方なら、すでに悪い知らせをご存知でしょう。**Hubicはメンテナンスモードに入り、サービス終了に向かっています。** OVHは新規アカウントの受付を停止し、機能はフリーズしており、サービスの寿命は残りわずかです。何年分ものファイルをそこに保存しているなら、これは目を覚ますべき警告です。

朗報もあります。Hubicからの移行は思ったより簡単です。RcloneViewを使えば、Hubicのライブラリ全体をGoogle Drive、OneDrive、AWS S3、またはその他の最新のクラウドプロバイダーへ、一度きりの作業でシンプルに移せます。さらに重要なのは、RcloneViewが転送を検証してくれるので、データが失われていないことを確認できる点です。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 今すぐ移行が必要な理由

Hubicはかつて安価で信頼性が高く、ヨーロッパで人気のサービスでした。しかし、OVHが個人向けクラウドストレージを縮小する決定を下したことで、以下のような状況になっています。

- **新機能なし**: アプリはフリーズしており、バグも修正されません
- **不確定なタイムライン**: OVHは具体的な終了日を明言していませんが、いずれ来ることは確実です
- **データ損失リスク**: Hubicが突然サービスを停止した場合、ファイルにアクセスできなくなったり削除されたりする可能性があります
- **パフォーマンスの低下**: 投資が減ることで、速度低下や長時間のダウンタイムが発生します
- **GDPRへの影響**: HubicでGDPR対象のデータを処理している場合、サービス終了に伴い法的に不安定な立場に置かれます

待っている余裕はありません。Hubicに重要なファイルがあるなら、数年ではなく数か月以内に移行しましょう。

## RcloneViewにHubicを接続する

RcloneViewを開き、新しいリモートを追加します。

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote in RcloneView" class="img-large img-center" />

プロバイダー一覧からHubicを選択します。RcloneViewがブラウザウィンドウを開き、Hubicアカウントで認証を行います。これはOAuthを使用するため、Hubicのパスワードがrcloneview側に渡ることはありません。

認証が完了すると、Hubicのライブラリ全体がRemote Explorerに表示されます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

これでRcloneViewのインターフェース上でHubicのファイルを閲覧できます。実際に何が保存されているかを確認する良い機会でもあり、思っていたより多くのデータがあることに驚くかもしれません。

## 移行前にデータを確認する

同期を開始する前に、RcloneViewでHubicのファイルを数分間閲覧してみましょう。以下を確認してください。
- **合計サイズ**: 移動するデータ量はどのくらいか(転送時間や移行先の選定に関わります)
- **ファイルの種類**: 破損したファイルや特殊なファイルはないか
- **整理状況**: Hubicのフォルダ構成は妥当か、それとも移行時に整理し直すべきか

Remote Explorerを使えば、これを視覚的かつ簡単に確認できます。Hubic内が乱雑になっているなら、今が整理するタイミングです。

## 移行先のクラウドを選ぶ

Hubicのファイルはどこへ移すべきでしょうか。以下のニーズに応じて検討してください。

- **Google Drive**: Google Workspaceを利用していて、検索や共有機能を重視するなら最適
- **OneDrive**: Microsoft中心の環境で、Office連携が必要な場合に最適
- **AWS S3**: コストを抑えた長期保存や、耐久性の保証が必要なデータに最適
- **複数の移行先**: 冗長性を確保するため、RcloneViewでHubicを2つのクラウドに同期することも可能

このガイドではGoogle Driveへの移行を例に説明しますが、RcloneViewはどのような移行先にも対応します。

## 一方向の移行: HubicからGoogle Driveへ

移行元をHubic、移行先をGoogle Driveに設定します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer" class="img-large img-center" />

同期は以下の設定で構成します。
- **方向**: 一方向(Hubic → Google Drive)
- **上書き**: 「既存ファイルをスキップ」に設定(すでに一部のファイルを移行済みの場合)
- **検証**: 有効(RcloneViewが転送中にチェックサムを確認し、ファイルの破損がないことを保証します)
- **ソースの削除**: 無効(Hubicから削除する前に必ず確認します)

同期を開始し、実行させます。データ量によっては数時間から数日かかる場合がありますが、RcloneViewが効率よく処理してくれます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

進行状況はリアルタイムで確認できます。表示される内容は以下の通りです。
- 転送済みファイル数 / 総ファイル数
- 転送済みデータ量 / 総データ量
- 転送速度
- 完了までの推定時間
- エラー(まれですが、RcloneViewが記録します)

## チェックサムで移行を検証する

転送が完了したら、検証を行いましょう。RcloneViewは転送中に自動的にチェックサムを確認していますが、最終的な比較も実施します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders" class="img-large img-center" />

RcloneViewの比較機能を開き、左側にHubic、右側にGoogle Driveを表示します。これにより以下が確認できます。
- **HubicにあるがGoogle Driveにないファイル**: 移行が未完了なので、同期を再実行してください
- **両方にあるファイル**: 正常に移行済み
- **Google Driveにあるがhubicにないファイル**: 移行開始後に作成した追加ファイル

比較の結果、Hubicのすべてのファイルがサイズとチェックサムの一致とともにGoogle Driveに存在していることが確認できれば、Hubicから削除しても安全です。

## 転送履歴とログを確認する

恒久的な操作を行う前に、ジョブ履歴を確認しましょう。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

ここでは以下が確認できます。
- 移行を実行した正確な日時
- 転送されたファイル数
- 移動したデータの合計量
- エラーや警告
- 調査が必要な場合のファイル単位の詳細

これにより、移行が成功したことを証明する永続的な監査証跡が作成されます。後になって誰か(上司、クライアント、監査担当者)からデータが適切に保全されたか尋ねられた際に役立ちます。

## オプション: 古いHubicファイルの整理

すべてのファイルがGoogle Driveに無事移行されたことを確認したら、Hubicから削除して容量を空ける(または有料アカウントなら支払いを停止する)ことができます。RcloneViewはこの作業もサポートします。

Hubicをローカルドライブとしてマウントし、ファイルエクスプローラーから削除するか、比較機能ですべてコピーされたことを確認した後にRcloneViewの削除機能を使用してください。

**重要**: 以下を完了するまではHubicから削除しないでください。
1. 移行の完了
2. チェックサムによる検証
3. 移行先クラウドでの移行内容の確認
4. 最低1週間の待機(問題がないか確認するため)

## 上級編: 冗長性のためのマルチクラウド移行

Hubicに重要なデータが含まれていた場合、冗長性を確保するために複数のクラウドへ移行することを検討してください。

1. **プライマリ**: Hubic → Google Drive(検索可能、共有可能、コラボレーション向け)
2. **バックアップ**: Hubic → AWS S3(安価な長期保存)
3. **オフサイト**: Hubic → OneDrive(別の商用クラウド)

RcloneViewでは、複数の同期ジョブでこれを設定できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

- ジョブ1: Hubic → Google Driveを同期(手動で一度実行)
- ジョブ2: Hubic → S3を同期(ジョブ1完了後に実行)

または、2つの手動同期を別々に作成し、順番に実行することもできます。この方法の利点は、万が一Google Driveに問題が発生しても、S3とOneDriveがバックアップとして残る点です。

## Hubicのマウント(オプション、最終確認用)

慎重を期したい場合(データ損失のリスクを考えると、それは賢明です)、Hubicを仮想ドライブとしてマウントすることもできます。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-large img-center" />

マウント後は、ネイティブのファイルエクスプローラーからHubicのファイルを閲覧できます。これにより、ファイルが確かに存在し、破損していないことを視覚的にもう一度確認できます。三重に確認できたら、安心して移行を進めましょう。

## タイムラインと緊急性

**今すぐ**: RcloneViewをダウンロードし、Hubicを接続してファイルを閲覧し、どのようなデータがあるか把握しましょう。

**今週中**: Google Driveなどの移行先に1〜2個のフォルダをテスト移行します。ファイルが正しく届いているか確認してください。

**次の1〜2週間**: Hubicのライブラリ全体を移行します。チェックサムと比較機能で検証しましょう。

**移行後**: 何か見落としがないか確認するため、1〜2か月の猶予期間はHubicを残しておきます。その後、Hubicアカウントを削除します。

先延ばしにしないでください。クラウドサービスの終了は予測不可能であり、最後の土壇場で500GBものファイルを慌てて移動する事態は避けたいものです。

## この移行にRcloneViewが最適な理由

1. **サポート済み**: RcloneViewはHubicをネイティブにサポートしています(回避策ではなく直接対応)
2. **検証済み**: チェックサムにより、転送中のデータ損失や破損がないことを保証します
3. **柔軟性**: Google Drive、OneDrive、S3、その他どのクラウドへも1つのアプリから移行できます
4. **監査可能**: 完全なジョブ履歴とログが移行の実施を証明します
5. **安全**: 一方向転送のため、Hubicから削除する前に確認できます
6. **高速**: クラウド間転送はダウンロード後にアップロードするより、はるかに高速です

## はじめかた

1. RcloneViewをダウンロードする(無料トライアルあり)
2. Hubicアカウントを接続する(2分程度)
3. 移行先のクラウド(Google Drive、OneDrive、S3など)を接続する
4. 同期を実行してファイルを移行する
5. チェックサムと比較機能で検証する
6. 確認が取れたら、安全にHubicから削除する

Hubicのサービス終了が、データ損失を意味する必要はありません。今すぐRcloneViewで行動を起こせば、最新かつ安定したクラウドサービスにファイルを安全に保存でき、完全な監査証跡とゼロリスクを手に入れられます。OVHの終了発表を待つ必要はありません。今週中に移行しましょう。

## 関連ガイド

- RcloneViewドキュメント紹介
- ドキュメントの作成と整理
- 新しいページの公開
- Markdown機能の使用

<CloudSupportGrid />
