---
id: wsbi2b5c92
title: Wasabi ホワイトラベル Explorer(プレビュー)
description: RcloneView を活用した、フルブランド仕様の Wasabi Explorer デスクトップ体験のプライベートプレビューです。
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Wasabi ホワイトラベル Explorer(プレビュー)

このページは、RcloneView をベースに、ユーザー向けにフルブランド化された **Wasabi Explorer** デスクトップアプリケーションとして提供する場合のプライベートプレビューです。

このホワイトラベル提案の目的は次のとおりです。

- 製品全体で **Wasabi ブランドを前面に打ち出す**こと。
- インストール直後に **ユーザーが手間なく Wasabi アカウントを接続できる**ようにすること。
- あらゆる管理・ナビゲーションのワークフローにおいて **Wasabi を最優先の選択肢**にすること。
- Wasabi ブランドのデプロイメントに特化した **優先サポートおよびメンテナンス**を提供すること。

---

## 1. ブランドキットとビジュアル統合

Wasabi が製品全体を通して主要かつ視認性の高いブランドとなるブランドキットを提供します。RcloneView のブランディングは、法的に必要な箇所(内部バージョン文字列など)を除き、すべて削除または非表示にします。

主な要素:

- アプリケーション名を **「Wasabi Explorer」**(または別途合意されたラベル)に設定。
- RcloneView のロゴをすべて **Wasabi ロゴ**に置き換え:
  - デスクトップショートカットおよびタスクバーアイコン。
  - インストーラーアイコン。
  - アプリ内ヘッダーおよびウィンドウアイコン。
- 適切な箇所でカラーアクセントを Wasabi のブランドパレットに合わせて調整。


<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-brandkit-example.png" alt="wasabi brandkit example" class="img-large img-center" />

---

## 2. インストール後の Wasabi リモートウィザード

インストール直後、ユーザーは追加の設定手順なしにサービスを利用開始できるよう、Wasabi アカウントの接続へと誘導されます。

主な動作:

- セットアップウィザードの完了時にアプリを起動すると、デフォルトのオンボーディングフローとして **「Wasabi リモートを追加」**が開きます。
- ウィザードは Wasabi 向けに簡略化・事前設定されています:
  - プロバイダータイプはあらかじめ **Wasabi** が選択されています。
  - デフォルトでは Wasabi 固有のオプションのみが表示されます。
  - 詳細オプションは **「詳細オプションを表示」**リンクの先で引き続き利用可能です。

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-wasabi-remote-wizard.png" alt="post install wasabi remote wizard" class="img-large img-center" />


### ホーム画面のクイックアクセスウィザード

ユーザーが初回接続をスキップした場合、またはウィザードを閉じた場合:

- ホーム画面右側のパネルに **大きな Wasabi タイル**が表示されます。
- タイルをクリックすると、いつでも **「Wasabi リモートを追加」**ウィザードが再度開きます。

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-wasabi.png" alt="on home quick access wizard for wasabi" class="img-large img-center" />

これにより、新規ユーザーにとっても既存ユーザーにとっても、Wasabi への接続が常に最も分かりやすい次のアクションとなります。

---

## 3. Wasabi 優先のナビゲーションと管理

Wasabi リモートが追加されると、主要なナビゲーションおよび管理画面全体で Wasabi が常に目立つように UI が最適化されます。

### 3.1 再起動時に固定表示される Wasabi パネル

Wasabi リモートの設定完了後:

- 以降の起動時には、デフォルトで **Wasabi パネルが固定表示**された状態で UI が開きます。
- 一般的なレイアウト:
  - 左側: ローカルディスクまたは別のソース。
  - 右側: ユーザーの **MYWasabi** リモート。
- パネルはドラッグ&ドロップで自由に並べ替えられるため、Wasabi パネルは好みのワークフローに応じて左右どちらの側にも移動できます。
- これにより、Wasabi パネルが現在どちら側にあっても、ローカルフォルダーと Wasabi 間の反復的な同期やコピー操作がワンクリックで実行できます。

<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-panel-pinned-on-re-launch.png" alt="wasabi panel pinned on re launch" class="img-large img-center" />


### 3.2 「新規リモート」および「リモートマネージャー」での Wasabi 優先表示

Wasabi を主要なストレージプロバイダーとして際立たせるため:

- **新規リモート**ダイアログでは:
  - Wasabi が **プロバイダー一覧の最上部**に表示されます。
  - 選択を促すため、Wasabi タイルが視覚的に強調されます。
- **リモートマネージャー**では:
  - Wasabi リモート(例: `MYWasabi`)が **リモート一覧の最上部**に表示されます。
  - リスト表示・カード表示のいずれにおいても、Wasabi リモートは素早くアクセスできるよう視覚的に強調されます。

<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-first-in-management-dialog.png" alt="wasabi first in management dialog" class="img-large img-center" />


---

## 4. Wasabi 向け優先サポートおよびメンテナンス

Wasabi ホワイトラベルデプロイメント向けに、専任のサポートおよびメンテナンス体制を提供します。

含まれるサービス:

- **専用ドキュメント**  
  - **Wasabi Explorer** ユーザー専用の独立したマニュアルページ。  
  - Wasabi での接続・同期・トラブルシューティングに関する手順ガイド。

- **優先インシデント対応**  
  - Wasabi ユーザーからの問い合わせは、サポートキューにおいて優先的に対応されます。  
  - Wasabi ユーザーに影響する重大インシデント(接続障害、データアクセス問題など)に対する **緊急対応**。

- **継続的な製品アップデート**  
  - メンテナンス契約の一部として、デスクトップクライアントの定期アップグレードが含まれます。  
  - 双方の合意の上で、新しい RcloneView 機能を Wasabi ブランドの下で展開可能。

---

## 5. 次のステップ

このホワイトラベル製品を進めたい場合:

1. **ブランディングの調整**
   - Wasabi ロゴの使用ガイドラインおよびブランドカラーを確認します。
   - 最終的な製品名を決定します(例: *Wasabi Explorer*)。
2. **体験の定義**
   - 上記のオンボーディングフローおよび Wasabi 優先の動作を検証します。
   - デフォルト設定(デフォルトの同期モード、デフォルトのマウントパスなど)を必要に応じて調整します。
3. **パイロットビルド**
   - 社内テスト用に、プライベートなパイロットビルドおよび Wasabi 専用ドキュメントを提供します。

このページおよびその URL は、Wasabi およびパートナー関係者のみを対象としており、公開ナビゲーションや検索には表示されません。評価やパイロットに関する協議の際には、直接リンクとして安全に共有できます。
