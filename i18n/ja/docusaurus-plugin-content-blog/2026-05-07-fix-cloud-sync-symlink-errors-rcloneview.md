---
slug: fix-cloud-sync-symlink-errors-rcloneview
title: "クラウド同期のシンボリックリンクエラーを修正 — RcloneViewでリンク転送の問題を解決"
authors:
  - tayson
description: "RcloneViewでのクラウド同期中に発生するシンボリックリンクエラーの修正方法を学びます。rcloneがシンボリックリンクをどのように扱うかを理解し、失敗を避けるための適切な設定を行いましょう。"
keywords:
  - シンボリックリンクエラー クラウド同期
  - rclone シンボリックリンク
  - RcloneView トラブルシューティング
  - copy-links フラグ
  - クラウド同期エラー
  - シンボリックリンク転送
  - rclone フラグ
  - ファイル同期エラー
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウド同期のシンボリックリンクエラーを修正 — RcloneViewでリンク転送の問題を解決

> シンボリックリンクは、気づかないうちにクラウド同期ジョブを破綻させることがあります。ここでは、rcloneのシンボリックリンクの挙動を理解し、RcloneViewで正しく処理するための設定方法を紹介します。

クラウド同期ジョブが予期しないエラーで失敗したり、ファイルが行方不明になったように見えたりする場合、シンボリックリンクが原因である可能性があります。RcloneViewの動作エンジンであるrcloneには、シンボリックリンクに対する特有のデフォルト動作があり、多くのユーザーがこれに戸惑います。この挙動を理解し、RcloneViewでどの設定を調整すべきかを知ることで、シンボリックリンク関連の同期問題の多くをすばやく解決できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rcloneのデフォルトのシンボリックリンク処理

デフォルトでは、rcloneはシンボリックリンクをたどり、リンクが指すファイルまたはディレクトリを転送します。シンボリックリンク自体は転送されません。つまり、システム上の別の場所にある大きなファイルを指すシンボリックリンクがある場合、rcloneは実際のファイル内容をクラウドの転送先にコピーします。ほとんどの場合これは望ましい動作ですが、シンボリックリンクの参照先が存在しない、同期ルートの外にある、または循環参照を作り出している場合には混乱を招くことがあります。

シンボリックリンクの参照先が見つからない、またはアクセスできない場合、rcloneはエラーを記録し、そのシンボリックリンクをスキップします。長い転送ログの中では、これらのスキップされたファイルを見落としやすいものです。RcloneViewの**ジョブ履歴**パネルにはこれらのエラーが記録されるため、ジョブ完了後は必ず履歴を確認し、ファイルが気づかないうちにスキップされていないかを確認してください。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history for symlink errors in RcloneView" class="img-large img-center" />

## RcloneViewで--copy-linksフラグを使用する

シンボリックリンクの参照先が同期ルートの外にある場合でも、rcloneにシンボリックリンクをたどらせて参照先の内容をコピーさせたい場合は、RcloneViewの**グローバルRcloneフラグ**設定で`--copy-links`フラグを渡すことができます。RcloneViewの環境設定を開き、**グローバルRcloneフラグ**フィールドを探して`--copy-links`を追加してください。これにより、rcloneはシンボリックリンクを通常のファイルとして扱い、その基となる内容をコピーするようになります。

シンボリックリンクが非常に大きなディレクトリを指しているシステムでは、`--copy-links`を使用する際に注意してください。転送サイズが大幅に増加する可能性があります。また、一部のクラウドプロバイダーにはファイル名やパスの長さに制限があり、シンボリックリンクの参照先のパスが長い場合に問題が発生することがあります。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring global rclone flags in RcloneView settings" class="img-large img-center" />

## フィルターでシンボリックリンクを除外する

多くのワークフローにとってより安全な代替策は、シンボリックリンクを同期から完全に除外することです。RcloneViewのジョブ設定では、シンボリックリンクをスキップするフィルタールールを追加できます。シンボリックリンク名に一致するパターンを指定して`--exclude`オプションを使用するか、`--links`を使用してシンボリックリンクをテキストファイルとしてコピーする(内容ではなくリンク参照先のパスを保存する)方法があります。このアプローチにより、予期しない大容量転送のリスクを避けつつ、同期の動作を予測可能な状態に保てます。

シンボリックリンクが多用されるソフトウェア開発リポジトリのようなプロジェクトでは、実際に同期を実行する前に、フィルタールールとドライランを組み合わせるのがベストプラクティスです。RcloneViewのドライランモードでは、どのファイルが転送、スキップ、またはエラーになるかを正確に表示するため、完全な同期を実行する前に安心して確認できます。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using filters and dry run to handle symlinks in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 同期に失敗した後、**ジョブ履歴**を開いてシンボリックリンク関連のエラーメッセージを確認します。
3. シンボリックリンクの内容を転送したい場合は、RcloneViewの環境設定を開き、**グローバルRcloneフラグ**に`--copy-links`を追加します。
4. あるいは、**ジョブウィザード**でフィルタールールを追加し、シンボリックリンクを同期対象から除外します。
5. 実際の同期を実行する前に、**ドライラン**を実行して動作を確認します。

シンボリックリンクを正しく処理することは、同期の信頼性に大きな違いをもたらす小さな設定の一つです。そしてRcloneViewは、それを正しく行うためのすべてのツールを提供します。

---

**関連ガイド:**

- [RcloneViewでのカスタムRcloneフラグと高度なオプション](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [RcloneViewでの選択的同期のためのフィルタールール](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneViewでRcloneエラーをトラブルシューティングする](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
