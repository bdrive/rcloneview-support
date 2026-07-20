---
sidebar_position: 14
description: "設定パスワードを設定して、暗号化されたrclone設定ファイルをRcloneViewで使用する方法。"
keywords:
  - rcloneview
  - rclone config
  - encrypted config
  - config password
  - security
  - rclone.conf
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - rclone config
date: 2026-02-12
author: ysh
---

# 暗号化されたRclone設定ファイルを使用する

Rcloneは設定ファイル(`rclone.conf`)を暗号化できるため、リモートの認証情報が平文で保存されることを防げます。RcloneViewは暗号化された設定ファイルを完全にサポートしています — パスワードを指定するだけです。

このチュートリアルでは以下を扱います。

- rclone設定を暗号化する理由
- `rclone config`で既存の設定を暗号化する方法
- RcloneViewで設定パスワードを入力する方法

---

## なぜrclone設定を暗号化するのか?

`rclone.conf`ファイルには、設定済みのすべてのリモートの認証情報(トークン、パスワード、APIキー)が含まれています。デフォルトではこれらは平文で保存されます。設定ファイルを暗号化することで、誰かがあなたのマシンやバックアップにアクセスした場合でも、これらの認証情報を保護できます。

- 平文での認証情報の露出を防ぎます。
- 共有システムや複数ユーザーが使用するシステムにセキュリティ層を追加します。
- すべてのrcloneリモートおよび機能で動作します — ファイルが保存時に暗号化される点以外は何も変わりません。

---

## ステップ1: rclone設定を暗号化する

ターミナルを開いて、次のコマンドを実行します。

```bash
rclone config
```

オプションのメニューが表示されます。**`s`**を選択して**Set configuration password**(設定パスワードの設定)を行います。

```
s) Set configuration password
q) Quit config
s/q> s
```

プロンプトが表示されたら希望のパスワードを入力し、確認します。Rcloneは既存の設定ファイルをその場で暗号化します。

:::tip
すでにリモートを設定している場合、それらは引き続き動作します。Rcloneはファイル全体を新しいパスワードで再暗号化します。
:::

:::caution
このパスワードを忘れないようにしてください。紛失した場合は、リモートを最初から再設定する必要があります。
:::

---

## ステップ2: RcloneViewで設定パスワードを入力する

1. (上部メニューから)**Settings**(設定)を開きます。
2. **Embedded Rclone**タブに移動します。
3. **Advanced Options**(詳細オプション)までスクロールします。
4. **Config Password**フィールドに、ステップ1で設定したものと同じパスワードを入力します。
5. **Restart Embedded Rclone**をクリックします。

<img src="/support/images/en/tutorials/encrypted-config/settings-config-password.png" class="img-large img-center" alt="Config Password field in Embedded Rclone settings" />

これで完了です — RcloneViewは暗号化された設定をシームレスに復号して使用します。リモートは通常どおり表示され、動作します。

---

## まとめ

| 項目 | 説明 |
| --- | --- |
| 機能 | 暗号化されたrclone設定ファイルをRcloneViewで使用する |
| 暗号化 | `rclone config` → `s) Set configuration password`を実行する |
| RcloneViewの設定 | Settings → Embedded Rclone → Advanced Options → Config Password |
| 適用 | パスワード入力後に**Restart Embedded Rclone**をクリックする |
| 最適な用途 | 共有システムや機密性の高いシステムでの認証情報の保護 |

