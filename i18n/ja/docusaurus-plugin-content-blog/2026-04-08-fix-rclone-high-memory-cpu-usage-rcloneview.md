---
slug: fix-rclone-high-memory-cpu-usage-rcloneview
title: "RcloneViewでRclone転送時の高いメモリ・CPU使用率を解決する方法"
authors:
  - tayson
description: "クラウド転送時のrcloneの高いメモリ・CPU使用率を解決します。RcloneViewのビジュアルインターフェースを使って、転送数、チェッカー、VFSキャッシュ、バッファ設定を調整する方法を学びましょう。"
keywords:
  - rcloneview
  - rclone high memory usage
  - rclone cpu usage
  - rclone performance tuning
  - rclone transfers checkers
  - rclone vfs cache
  - rclone buffer size
  - cloud sync performance
  - rclone slow transfer
  - fix rclone memory
tags:
  - troubleshooting
  - performance
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでRclone転送時の高いメモリ・CPU使用率を解決する方法

> rcloneの転送がRAMを使い尽くしたり、CPUを100%に張り付かせたりしていませんか？ **RcloneView**を使えば、コマンドラインのフラグを暗記しなくても、原因を特定してパフォーマンス設定を調整できます。

クラウド転送中にシステムの動作が極端に遅くなったことに気づいたなら、あなただけではありません。rcloneは強力なツールですが、デフォルト設定や誤った設定オプションによって、特に大量のファイル数、マウントされたドライブ、並列転送を扱う場合に、システムリソースを大きく消費してしまうことがあります。症状はおなじみのものです。ファンが回転数を上げ、アプリケーションが応答しなくなり、転送が必要以上にリソースを使っているように見える、といった具合です。

幸いなことに、リソース使用率が高くなるほとんどのケースには、簡単な解決策があります。このガイドでは、rcloneでメモリやCPUの使用率が過剰になる最も一般的な原因を取り上げ、RcloneViewのビジュアル設定ツールを使ってそれらを解決する方法を紹介します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## よくある症状

解決策に入る前に、rcloneの操作中に高いリソース使用率がどのように現れるかを見ておきましょう。

- **高いRAM使用率**: rcloneプロセスが1GB以上のメモリを消費し、場合によってはシステムがメモリ不足になるまで継続的に増加し続けます。
- **CPUスパイク**: 転送中、特に大きなディレクトリを一覧表示する際に、1つ以上のCPUコアが100%に張り付きます。
- **システムの応答不能**: rcloneの実行中に他のアプリケーションがフリーズしたり、動作が遅くなったりします。
- **転送失敗**: メモリ不足エラーによって転送が予期せず中断されます。
- **パフォーマンスの低下**: 逆説的ですが、並列処理が多すぎるとリソースの競合によってすべてが遅くなることがあります。

## 同時転送数とチェッカー数の過多

リソース使用率が高くなる最も一般的な原因は、並列転送とチェッカーを多く実行しすぎることです。rcloneのデフォルトは4つの転送と8つのチェッカーですが、ユーザーはこの数値を増やせば速くなると考えて増加させることがよくあります。32や64の同時転送を実行すると、システムとネットワーク接続の両方に過大な負荷をかけることになります。

**RcloneViewでの修正方法:**

同期ジョブを作成または編集する際に、`--transfers`フラグを妥当な値に設定してください。まず4から始め、帯域幅とシステムが処理できる場合にのみ増やします。`--checkers`は8以下に設定してください。一般的な家庭用回線であれば、2〜4の転送数と4〜8のチェッカー数が、速度とリソース消費のバランスとして適切です。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 大量のファイルリストとディレクトリスキャン

rcloneが数十万から数百万に及ぶファイルを含むディレクトリをスキャンすると、すべてのファイルとそのメタデータをメモリ上のリストとして構築します。これにより、非常に大きなディレクトリでは数ギガバイトのRAMを消費することがあります。

**修正方法:**

- 対応している場合は`--fast-list`を使用してください。このフラグはより少ないAPI呼び出しでディレクトリの一覧を取得し、一部のプロバイダー（S3など）ではメモリ使用量を実際に削減できますが、他のプロバイダーでは逆に増加させることもあります。使用しているプロバイダーで実際にテストしてください。
- クラウドアカウント全体を一度に同期するのではなく、特定のサブディレクトリを対象にすることで、大きな同期ジョブをより小さな単位に分割してください。
- フィルタルール（`--include`、`--exclude`）を使って、各同期操作の対象範囲を制限してください。一覧表示するファイル数が少ないほど、消費されるメモリも少なくなります。

## マウントされたドライブによるVFSキャッシュの肥大化

クラウドストレージをローカルドライブとしてマウントしている場合、VFS（仮想ファイルシステム）キャッシュが大幅に増加することがあります。デフォルトでは、rcloneはマウントされたドライブでの読み書きをスムーズにするために大量のデータをキャッシュすることがあります。時間の経過とともに、このキャッシュは相当なディスク容量とメモリを消費するようになります。

**修正方法:**

- `--vfs-cache-max-size`を、利用可能なリソースに応じて`1G`や`5G`など妥当な上限に設定してください。
- `--vfs-cache-max-age`を設定して、古いキャッシュファイルを自動的にクリーンアップしてください。`1h`や`4h`程度の値がほとんどのワークフローでうまく機能します。
- 適切な`--vfs-cache-mode`を選んでください。読み取り専用や、たまに書き込みを行う程度であれば、`full`ではなく`minimal`または`writes`を使用してください。フルキャッシュモードはファイルにアクセス可能になる前にファイル全体をキャッシュするため、最もメモリとディスクを消費します。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## バッファサイズの設定ミス

`--buffer-size`フラグは、転送中にrcloneがファイルごとにバッファリングのために割り当てるメモリ量を制御します。デフォルトは転送1件あたり16MBです。16件の同時転送を実行している場合、バッファだけで256MBになります。`--buffer-size`を256MBに増やして16件の転送を行うと、バッファだけで4GBを消費することになります。

**修正方法:**

- 特に理由がない限り、`--buffer-size`はデフォルトの`16M`のままにしてください。
- 大きなファイル転送のために値を増やした場合は、利用可能なRAMの範囲に収まるよう、`--transfers`を比例して減らしてください。
- RAMが限られているシステム（4GB以下）では、`--buffer-size`を`8M`、あるいは`4M`まで下げることを検討してください。

## マウントのオーバーヘッドとFUSE操作

マウントされたドライブは、すべてのファイル操作（open、read、write、stat）がFUSEレイヤーを経由してAPI呼び出しを発生させるため、CPUのオーバーヘッドを増加させます。アンチウイルスソフト、サムネイル生成ツール、検索インデクサーなど、ディレクトリを積極的にスキャンするアプリケーションは、マウントされたドライブに対して継続的なCPUおよびAPI使用を引き起こす可能性があります。

**修正方法:**

- マウントされたドライブのパスをアンチウイルスのスキャン対象から除外してください。
- ファイルエクスプローラーの設定で、マウントされたドライブのサムネイル生成を無効にしてください。
- `--dir-cache-time`を使ってディレクトリ一覧のキャッシュ期間を延ばし（例: `5m`や`30m`）、API呼び出しの繰り返しを減らしてください。
- `--attr-timeout`を設定してファイル属性を長くキャッシュし、statの呼び出しを減らしてください。
- ファイルの読み取りのみが必要な場合は、`--read-only`を使用して書き込み関連のオーバーヘッドを防いでください。

## RcloneViewでのリソース使用状況の監視

RcloneViewはリアルタイムの転送モニタリング機能を提供しており、リソースが過剰に消費されているタイミングを特定するのに役立ちます。転送が実行中の間、転送速度、ファイル数、全体の進捗状況を確認できます。速度が低下したり、インターフェースの動作が重くなったりした場合は、並列処理数を減らすべきサインです。

ジョブ履歴ビューを使って過去の転送を確認し、パターンを特定してください。特定のジョブが常に時間がかかったり失敗したりする場合は、それらが調整の対象候補となります。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## クイックリファレンス: 推奨設定

| 設定 | 低リソースシステム | 標準システム | 高性能システム |
|---|---|---|---|
| `--transfers` | 2 | 4 | 8-16 |
| `--checkers` | 4 | 8 | 16 |
| `--buffer-size` | 4M | 16M | 32M |
| `--vfs-cache-max-size` | 512M | 2G | 10G |
| `--vfs-cache-mode` | minimal | writes | full |

これらの値は、利用可能なRAM、CPUコア数、インターネット帯域幅に応じて調整してください。控えめな値から始めて、徐々に増やしていくことをおすすめします。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 既存の同期ジョブを開くか新規作成し、転送数とチェッカーの設定を確認します。
3. 転送中にシステムが苦しくなる場合は、`--transfers`と`--checkers`を減らします。
4. マウントされたドライブについては、VFSキャッシュの上限を設定して、無制限なメモリ増加を防ぎます。

並列処理数とキャッシュ設定へのわずかな調整だけで、転送速度に大きな影響を与えることなく、システムの応答性を劇的に改善できます。

---

**関連ガイド:**

- [リモートストレージの参照と管理](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [リアルタイム転送モニタリング](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [クラウドストレージをローカルドライブとしてマウントする](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
