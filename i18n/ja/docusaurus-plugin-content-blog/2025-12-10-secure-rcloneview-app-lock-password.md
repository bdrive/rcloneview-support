---
slug: secure-rcloneview-app-lock-password
title: "アプリロックでRcloneViewを保護する：リモート、ジョブ、履歴を守る方法"
authors:
  - tayson
description: "App Lockでパスワードによる保護を追加し、共有PCでも権限のあるユーザーだけがリモート、転送履歴、ジョブ、マウント、内部データベースを閲覧できるようにしましょう。"
keywords:
  - rcloneview security
  - rcloneview app lock
  - rclone password protect
  - secure rclone gui
  - protect rclone remotes
  - rclone_view.db
  - cloud automation security
  - shared pc security
  - job history protection
  - transfer history protection
tags:
  - security
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';


# アプリロックでRcloneViewを保護する：リモート、ジョブ、履歴を守る方法

> 共有PCや会社のPCをお使いですか？ App Lockを有効にすれば、RcloneViewを開く前にパスワード入力が必要になり、リモート、ジョブ、転送履歴を他人の目から守れます。

RcloneViewのApp Lockは、起動時やアプリを再度開いたときにシンプルなパスワード画面を表示します。これにより、リモート、ジョブ定義、マウント設定、ジョブ履歴、転送ログを保持する内部データベース（`rclone_view.db`）が保護され、ワークステーションが共有されていても機密性の高い自動化情報がプライベートに保たれます。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## App Lockが保護するもの

- `rclone.conf` に保存されたリモート定義と認証情報（アプリによってアクセスが制限されます）
- 転送履歴とログ
- ジョブ設定とスケジュール
- マウント設定とUIの状態
- すべてを結びつけるSQLiteデータベース（`rclone_view.db`）

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## こんな方におすすめ

- 1台のワークステーションやジャンプボックスを共有するチーム
- 改ざん耐性が必要な、スケジュール済みの同期・マウントジョブを運用するIT管理者
- 機密性の高いクロスクラウドワークフロー（バックアップ、コンプライアンス用アーカイブ）を扱うユーザー
- OSレベルの変更なしに手軽なセキュリティ層を追加したい方

## App Lockを有効にする方法（1分で完了）

1) 上部メニューの **Settings → General Settings** を開きます。
<img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open Settings menu" />

2) **General** で **Enable App Lock** にチェックを入れ、パスワードを入力して **Close** をクリックします。
<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

これで完了です。次回RcloneViewを起動したとき、またはウィンドウを再度開いたときに、ロック解除画面が表示されます。

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## パスワードを忘れた場合のリセット方法

- ロック解除画面で **Reset App** をクリックします。
- リセットを確認すると、App Lockとすべての内部データ（設定、ジョブ、転送履歴、ジョブ履歴）が消去されます。
- `rclone.conf` はそのまま残るため、再度アプリを開いたときにリモート定義は引き続き利用できます。

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

## 安全な運用のためのベストプラクティス

- 複数のユーザーがセッションを開ける可能性のある共有PCやオフィスでは、App Lockを使用しましょう。
- OSアカウントのパスワードやディスク暗号化と組み合わせることで、多層的な保護を実現できます。
- ジョブ名はわかりやすくしつつ、ジョブ名やメモに機密情報を埋め込むのは避けましょう。
- `rclone_view.db` は安全で書き込み可能な場所にバックアップしてください（[データベースの保存場所を変更する](/tutorials/change-rcloneview-database-location)を参照）。
- スケジューラは信頼できるジョブに対してのみ有効にし、Job Historyで監視しましょう。

## よくある質問

**App Lockはスケジュール済みジョブの実行を止めますか？**
いいえ。スケジュール済みのジョブは引き続き実行されます。App LockはUIへのアクセスを制限するだけなので、他人がそれらを閲覧したり変更したりできなくなります。

**App Lockをリセットしたらどうなりますか？**
内部データは消去されますが、`rclone.conf` は残るためリモートは維持されます。必要に応じてジョブや履歴を作り直してください。

**ターミナルは引き続き使えますか？**
はい。ロック解除後は、内蔵のターミナルは通常どおり動作します。App Lockは起動時のアクセスのみを制限します。

## まとめ

パスワード入力画面は些細なことに思えるかもしれませんが、リモート、自動化、履歴を守る強力な盾になります。App Lockを有効にし、`rclone_view.db` を安全な場所に保管して、共有マシンでもプライベートな状態を保ちながらクラウドワークフローを運用しましょう。

<CloudSupportGrid />
