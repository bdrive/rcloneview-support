---
slug: fix-onedrive-sync-errors-delta-token-path-length-rcloneview
title: "OneDrive同期エラーの修正:デルタトークン期限切れ、パス長超過、認証失敗"
authors:
  - tayson
description: "rcloneとRcloneViewでよくあるOneDrive同期エラーを解決 — デルタトークンの期限切れ、Windowsのパス長制限、認証失敗、クォータ超過エラーに対応。"
keywords:
  - fix onedrive sync errors rclone
  - onedrive delta token expired rclone
  - onedrive path too long sync error
  - rclone onedrive authentication error
  - onedrive sync failed rcloneview
  - onedrive quota exceeded rclone
  - troubleshoot onedrive rclone
  - onedrive sync troubleshooting
  - rcloneview onedrive errors
  - onedrive 400 bad request rclone
tags:
  - onedrive
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive同期エラーの修正:デルタトークン期限切れ、パス長超過、認証失敗

> OneDriveは優れたクラウドストレージプラットフォームですが、その同期の挙動にはrcloneユーザーを悩ませる独特の癖があります。このガイドでは、RcloneViewで発生する最も一般的なOneDriveエラーと、その解決方法を解説します。

OneDriveはrcloneのほとんどの操作で問題なく動作しますが、Microsoftのプラットフォーム特有のエラー条件も存在します。デルタトークンの期限切れ、Windowsのパス長制限、認証トークンの更新失敗、ファイル単位・日単位のアップロードクォータなど、実運用でよく発生する問題です。ここでは、それぞれを体系的に診断・修正する方法を紹介します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## エラー1:デルタトークンの期限切れ

**症状:** 次のようなエラーが表示されます。
```
Failed to sync: invalidDeltaToken: The token is expired.
```

**原因:** rcloneはOneDrive内の増分変更を追跡するためにデルタトークンを使用します。このトークンの有効期限は約30日です。1か月以上同期を実行していない場合、またはMicrosoft側でトークンが無効化された場合、rcloneは増分スキャンを続行できません。

**修正方法:** キャッシュされたデルタトークンを削除して、フルスキャンを強制実行します。

1. RcloneViewで**ターミナル**パネルを開きます。
2. 次のコマンドを実行します:`rclone backend remove-expiry onedrive:`(`onedrive`はご自身のリモート名に置き換えてください)。
3. または、RcloneViewの設定からそのリモートの`vfs/delta`キャッシュエントリを削除します。
4. 同期ジョブを再実行します — 今回はrcloneがフルスキャンを行います。

修正後の初回実行には時間がかかりますが、エラーは完全に解消されます。

## エラー2:パスが長すぎる(400文字超)

**症状:**
```
ERROR: path too long: cannot handle path > 400 characters
```
または、深くネストされたフォルダからのファイルが同期に失敗する。

**原因:** OneDriveは最大パス長を400文字(OneDrive Personal)、またはOneDrive for Businessでも400文字に制限しています。Windowsにはレガシーな260文字のMAX_PATH制限もあり、これはOneDriveデスクトップ同期クライアントに影響しますが、rclone自体にはこのWindowsの制限はありません。

**修正方法:**
- **フォルダ構造を短くする** — ディレクトリのネストを浅く保ちます。長いフォルダ名は変更してください。
- **OneDrive内のベースパスを短くする** — 例えば`OneDrive/Clients/Projects/2026/Active/Reports/`に同期している場合、`OneDrive/Projects-2026/Reports/`のようにフラット化することを検討してください。
- **RcloneViewのフィルタルールを使用**して、再構成が完了するまでパス長の問題があることが分かっているフォルダをスキップします。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Use folder comparison to identify path issues" class="img-large img-center" />

## エラー3:認証エラー(401 Unauthorized)

**症状:**
```
401 Unauthorized
Failed to refresh token
AADSTS700082: The refresh token has expired
```

**原因:** Microsoftの OAuthリフレッシュトークンは、90日間未使用のまま放置されるか、パスワード変更やセキュリティポリシーのリセットが行われると期限切れになります。rcloneの設定に保存されたトークンが無効になると、すべての操作が失敗します。

**修正方法:** RcloneViewでOneDriveリモートを再認証します。

1. RcloneViewで**リモート**を開きます。
2. OneDriveリモートを選択し、**編集**を選びます。
3. **再認証**をクリックすると、Microsoftログイン用のブラウザウィンドウが開きます。
4. ログインしてアクセスを再度許可します。
5. 更新されたトークンを保存します。

以降の操作では新しいトークンが使用されます。頻度の低い同期ジョブ(月1回以下)を実行している場合は、再認証のリマインダーを設定しておくとよいでしょう。

## エラー4:429 Too Many Requests / レート制限

**症状:**
```
429 Too Many Requests: request throttled
```

**原因:** OneDriveのAPIはユーザーごとのレート制限を課しています。多数の小さなファイルを一気に同期すると、スロットリングが発生します。

**修正方法:**

- **同時転送数を減らす** — RcloneViewのジョブ設定で転送数を2〜4に下げます。
- **レート制限を追加する** — RcloneViewのカスタムフラグ欄で`--tpslimit 10`フラグを使用し、1秒あたりのトランザクション数を制限します。
- **オフピーク時間帯にスケジュールする** — Microsoftのスロットリングは業務時間帯により厳しくなります。
- **大きなファイルにはチャンクアップロードを使用する** — 100MBを超えるファイルについては、RcloneViewが自動的にこれを処理します。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive jobs during off-peak hours" class="img-large img-center" />

## エラー5:クォータ超過

**症状:**
```
403 Forbidden: insufficient storage
```
または、OneDriveの容量がひっ迫している際にアップロードが静かに失敗する。

**原因:** 対象のOneDriveアカウントの空き容量が不足しています。

**修正方法:**
- Microsoft 365管理センターまたはonedrive.live.comでOneDriveのクォータを確認します。
- OneDriveから古いファイルを削除または移動して**空き容量を確保**します。
- アカウントが本当に容量いっぱいの場合は**プランをアップグレード**します。
- **移行を分割する** — ファイルを別のOneDriveアカウントに移動するか、あふれた分は別の転送先に切り替えます。

## エラー6:ファイル名に使用できない文字

**症状:** 特定の文字を含むファイルがOneDriveへの転送に失敗する。

**原因:** OneDriveはファイル名に一部の文字の使用を禁止しています:`\`、`/`、`:`、`*`、`?`、`"`、`<`、`>`、`|`。Linuxシステムから来るファイルには、コロンなどの文字が名前に含まれていることがよくあります。

**修正方法:** RcloneView(rclone経由)には、禁止文字を自動的にUnicodeの類似文字に置き換える組み込みの`--onedrive-enc`エンコーディングオプションがあります。OneDriveリモートの詳細設定でこれを有効にしてください。

## RcloneViewでのエラー監視

RcloneViewの**ジョブ履歴**パネルには、各ファイルの完全なエラーメッセージを含む転送ログが表示されます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="View OneDrive error logs in RcloneView" class="img-large img-center" />

これを使えば、rcloneの生ログ出力を掘り下げなくても、どのファイルが失敗し、なぜ失敗したのかをすぐに把握できます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. 同期が失敗した際は**ジョブ履歴を確認**してエラーメッセージを見ます。
3. 上記のガイダンスを使って、該当するエラータイプの**修正を適用**します。
4. **ジョブを再実行**します — rcloneは正常に転送済みのファイルをスキップし、失敗したものだけを再試行します。

ほとんどのOneDriveエラーには単純な修正方法があります。重要なのは、当てずっぽうにデバッグするのではなく、正確なエラーメッセージを特定し、対象を絞った解決策を適用することです。

---

**関連ガイド:**

- [Google Driveの403レート制限エラーを修正する](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [RcloneViewでrcloneのエラーをトラブルシューティングする](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [クラウド同期の競合を解決する](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)

<CloudSupportGrid />
