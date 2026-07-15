---
id: strj3b5c92
title: Storj ホワイトラベル Explorer(プレビュー)
description: RcloneView によって実現される、完全にブランド化された Storj Explorer デスクトップ体験のプライベートプレビューです。
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Storj ホワイトラベル Explorer(プレビュー)

このページは、RcloneView をユーザー向けに完全にブランド化された **Storj Explorer** デスクトップアプリケーションとして提供する方法についてのプライベートプレビューです。

このホワイトラベル提案の目的は次のとおりです。

- **Storj ブランドを製品全体の前面に押し出す**こと。
- インストール直後に**ユーザーが Storj アカウントを手間なく接続できる**ようにすること。
- あらゆる管理・ナビゲーションのワークフローで**Storj を第一選択**にすること。
- Storj ブランドのデプロイメント専用の**優先サポートとメンテナンス**を提供すること。

---

## 1. ブランドキットとビジュアル統合

Storj が製品全体を通じて主要かつ視認性の高いブランドとなるブランドキットを提供します。RcloneView のブランディングは、法的に必要な箇所(内部バージョン文字列など)を除き、すべて削除または限定的に維持されます。

主な要素:

- アプリケーション名を **「Storj Explorer」**(または別途合意したラベル)に設定。
- すべての RcloneView ロゴを **Storj ロゴ**に置き換え:
  - デスクトップショートカットとタスクバーアイコン。
  - インストーラーアイコン。
  - アプリ内ヘッダーとウィンドウアイコン。
- 必要に応じて、カラーアクセントを Storj のブランドパレットに合わせて調整。


<img src="/support/images/en/howto/remote-storage-connection-settings/storj-brandkit-example.png" alt="storj brandkit example" class="img-large img-center" />


---

## 2. インストール後の Storj リモートウィザード

インストール直後、ユーザーは追加のセットアップ手順なしにサービスを使い始められるよう、Storj アカウントの接続へと案内されます。

主な動作:

- セットアップウィザードの終了時、アプリを起動すると既定のオンボーディングフローとして**「Storj リモートを追加」**が開きます。
- ウィザードは Storj 用に簡素化・事前設定されています:
  - プロバイダータイプはあらかじめ **Storj** が選択されています。
  - デフォルトでは Storj 固有のオプションのみが表示されます。
  - 詳細オプションは**「詳細オプションを表示」**リンクの先で引き続き利用できます。

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-storj-remote-wizard.png" alt="post install storj remote wizard" class="img-large img-center" />

### ホーム画面のクイックアクセスウィザード

ユーザーが最初の接続をスキップしたり、ウィザードを閉じたりした場合:

- ホーム画面の右側パネルに**大きな Storj タイル**が表示されます。
- タイルをクリックすると、いつでも**「Storj リモートを追加」**ウィザードが再度開きます。

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-storj.png" alt="on home quick access wizard for storj" class="img-large img-center" />

これにより、新規ユーザーにも既存ユーザーにも、Storj への接続が常に最も目立つ次のアクションとして提示されます。

---

## 3. Storj を優先したナビゲーションと管理

Storj リモートが追加されると、UI はすべての主要なナビゲーション・管理画面で Storj を目立つ位置に保つよう最適化されます。

### 3.1 再起動時に固定表示される Storj パネル

Storj リモートが設定された後:

- 以降の起動時、UI はデフォルトで**Storj パネルが固定表示**された状態で開きます。
- 一般的なレイアウト:
  - 左側: ローカルディスクまたは別のソース。
  - 右側: ユーザーの **MYStorj** リモート。
- ユーザーはドラッグ&ドロップでパネルを自由に並べ替えられるため、Storj パネルは好みのワークフローに応じて左右どちらの側にも移動できます。
- これにより、Storj パネルが現在どちら側にあるかに関わらず、ローカルフォルダーと Storj 間の繰り返しの同期・コピー操作がワンクリックで行えます。

<img src="/support/images/en/howto/remote-storage-connection-settings/storj-panel-pinned-on-re-launch.png" alt="storj panel pinned on re launch" class="img-large img-center" />


### 3.2「新規リモート」と「リモートマネージャー」で Storj を先頭表示

Storj を主要なストレージプロバイダーとして強調するため:

- **新規リモート**ダイアログでは:
  - Storj が**プロバイダー一覧の先頭**に表示されます。
  - Storj タイルは選択を促すよう視覚的に強調表示されます。
- **リモートマネージャー**では:
  - Storj リモート(例: `MYStorj`)が**リモート一覧の先頭**に表示されます。
  - リスト表示・カード表示のいずれでも、Storj リモートはより素早くアクセスできるよう視覚的に強調されます。



<img src="/support/images/en/howto/remote-storage-connection-settings/storj-first-in-management-dialog.png" alt="storj first in management dialog" class="img-large img-center" />

---

## 4. Storj 向けの優先サポートとメンテナンス

Storj ホワイトラベル展開向けに、専用のサポート・メンテナンストラックを提供します。

含まれるサービス:

- **専用ドキュメント**  
  - **Storj Explorer** ユーザー向けの独立したマニュアルページ。  
  - Storj での接続・同期・トラブルシューティングに関するステップバイステップガイド。

- **優先インシデント対応**  
  - Storj ユーザーの問題はサポートキューで優先的に扱われます。  
  - Storj ユーザーに影響する重大インシデント(接続障害、データアクセス問題など)に対する**緊急対応**。

- **継続的な製品アップデート**  
  - メンテナンス契約の一部として、デスクトップクライアントの定期的なアップグレードを含みます。  
  - 双方合意のもと、新しい RcloneView の機能を Storj ブランドの下でリリースすることが可能です。

---

## 5. 次のステップ

このホワイトラベル製品を進める場合は、以下をご確認ください。

1. **ブランディングの調整**
   - Storj ロゴの使用ガイドラインとブランドカラーを確認します。
   - 最終的な製品名(例: *Storj Explorer*)を決定します。
2. **体験の定義**
   - 上記のオンボーディングフローと Storj 優先の動作を検証します。
   - デフォルト設定(デフォルトの同期モード、デフォルトのマウントパスなど)を必要に応じて調整します。
3. **パイロットビルド**
   - 社内テスト用に、プライベートなパイロットビルドと Storj 専用ドキュメントを提供します。

このページとその URL は、Storj およびパートナー関係者専用であり、公開ナビゲーションや検索結果には表示されません。評価やパイロットに関する協議の際は、直接リンクとして安全に共有できます。
