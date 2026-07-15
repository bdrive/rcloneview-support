---
id: pcld7a9f21
title: pCloud ホワイトラベル Explorer(プレビュー)
description: RcloneView を活用した、pCloud ブランドで完全に統一されたデスクトップ体験のプライベートプレビューです。
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# pCloud ホワイトラベル Explorer(プレビュー)

このページは、RcloneView をユーザー向けに完全にブランド化された **pCloud Explorer** デスクトップアプリケーションとして提供する方法についてのプライベートプレビューです。

このホワイトラベル提案の目的は次のとおりです。

- 製品全体にわたって **pCloud ブランドを前面に押し出す** こと。
- インストール直後に **ユーザーが pCloud アカウントを簡単に接続できる** ようにすること。
- あらゆる管理・ナビゲーションのワークフローで **pCloud を第一選択とする** こと。
- pCloud ブランドのデプロイメントに特化した **優先サポートと保守** を提供すること。

---

## 1. ブランドキットとビジュアル統合

pCloud を製品全体で主要かつ視認しやすいブランドとして扱うブランドキットを提供します。RcloneView のブランディングは、法的に必要な箇所(内部バージョン文字列など)を除き、すべて削除または限定表示されます。

主な要素:

- アプリケーション名を **「pCloud Explorer」**(または合意された別の名称)に設定。
- RcloneView のロゴをすべて **pCloud ロゴ** に置き換え:
  - デスクトップショートカットおよびタスクバーアイコン。
  - インストーラーアイコン。
  - アプリ内ヘッダーおよびウィンドウアイコン。
- 必要に応じて、カラーアクセントを pCloud のブランドカラーに合わせて調整。

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-brandkit-examples.png" alt="pcloud brandkit examples" class="img-large img-center" />


---

## 2. インストール後の pCloud リモートウィザード

インストール直後、ユーザーは pCloud アカウントの接続へと案内され、追加の設定手順なしにサービスを利用開始できます。

主な動作:

- セットアップウィザードの完了後、アプリを起動すると、デフォルトのオンボーディングフローとして **「pCloud リモートを追加」** が開きます。
- ウィザードは pCloud 用に簡略化・事前設定されています:
  - プロバイダー種別はあらかじめ **pCloud** が選択されています。
  - デフォルトでは pCloud 固有のオプションのみが表示されます。
  - 詳細オプションは **「詳細オプションを表示」** リンクの背後で引き続き利用できます。

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-pcloud-remote-wizard.png" alt="post install pcloud remote wizard" class="img-large img-center" />

### ホーム画面上のクイックアクセスウィザード

ユーザーが初回接続をスキップした場合、またはウィザードを閉じた場合:

- ホーム画面の右側パネルに **大きな pCloud タイル** が表示されます。
- タイルをクリックすると、いつでも **「pCloud リモートを追加」** ウィザードが再度開きます。

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard.png" alt="on home quick access wizard" class="img-large img-center" />


これにより、新規ユーザーおよび既存ユーザーの双方にとって、pCloud への接続が常に最も目立つ次のアクションとなります。

---

## 3. pCloud を優先したナビゲーションと管理

pCloud リモートが追加されると、UI はすべての主要なナビゲーションおよび管理画面で pCloud が目立つように最適化されます。

### 3.1 RcloneView Explorer 内の pCloud ドライブ

pCloud リモートがローカルドライブとしてマウントされている場合:

- pCloud ドライブ(例: `pCloud Drive (P:/)`)は、**RcloneView のローカルリモート一覧の先頭** に表示されます。
- ドライブには **pCloud アイコン** が使用され、他のドライブと視覚的に区別されます。

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="pcloud first in explorer" class="img-medium img-center" />

### 3.2 再起動時に固定表示される pCloud パネル

pCloud リモートが設定された後:

- 以降の起動時には、UI はデフォルトで **pCloud パネルを固定表示** した状態で開きます。
- 一般的なレイアウト:
  - 左側: ローカルディスクまたは他のソース。
  - 右側: ユーザーの **MYpCloud** リモート。
- これにより、ローカルフォルダーと pCloud 間の反復的な同期やコピー操作が、ワンクリックで実行できるようになります。

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-panel-pinned-on-re-launch.png" alt="pcloud panel pinned on re launch" class="img-large img-center" />


### 3.3 「新規リモート」および「リモートマネージャー」における pCloud の優先表示

pCloud を主要なストレージプロバイダーとして際立たせるために:

- **新規リモート** ダイアログでは:
  - pCloud が **プロバイダー一覧の先頭** に表示されます。
  - pCloud タイルは選択を促すよう視覚的に強調されています。
- **リモートマネージャー** では:
  - pCloud リモート(例: `MYpCloud`)が **リモート一覧の先頭** に表示されます。
  - リスト表示・カード表示のいずれにおいても、pCloud リモートは素早くアクセスできるよう視覚的に強調されます。


<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-management-dialog.png" alt="pcloud first in management-dialog" class="img-large img-center" />

---

## 4. pCloud 向けの優先サポートと保守

pCloud ホワイトラベル展開に対しては、専用のサポート・保守トラックを提供します。

含まれるサービス:

- **専用ドキュメント**
  - **pCloud Explorer** ユーザー専用の別マニュアルページ。
  - pCloud での接続・同期・トラブルシューティングに関する段階的なガイド。

- **優先インシデント対応**
  - pCloud ユーザーの問題は、サポートキューにおいて優先的に処理されます。
  - pCloud ユーザーに影響する重大なインシデント(接続障害、データアクセスの問題など)に対する **緊急対応**。

- **継続的な製品アップデート**
  - 保守契約の一環として、デスクトップクライアントの定期的なアップグレードを含みます。
  - 双方の承認を経た上で、pCloud ブランドの下で新しい RcloneView 機能を展開することが可能です。

---

## 5. 次のステップ

このホワイトラベル製品を進める場合:

1. **ブランディングの調整**
   - pCloud ロゴの使用ガイドラインおよびブランドカラーを確認。
   - 最終的な製品名を決定(例: *pCloud Explorer*)。
2. **体験の定義**
   - 上記で説明したオンボーディングフローおよび pCloud 優先の動作を検証。
   - デフォルト設定(デフォルトの同期モード、デフォルトのマウントパスなど)を調整。
3. **パイロットビルド**
   - 社内テスト用に、プライベートなパイロットビルドと pCloud 専用ドキュメントを提供します。

このページおよびその URL は pCloud およびパートナー関係者専用であり、公開のナビゲーションや検索には表示されません。評価やパイロットに関する協議の際には、直接リンクとして安全に共有できます。
