---
id: mega-s4-m93a18
title: Mega S4 ホワイトラベル Explorer(プレビュー)
description: RcloneView を活用した、完全ブランド化された Mega S4 Explorer デスクトップ体験の非公開プレビューです。
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Mega S4 ホワイトラベル Explorer(プレビュー)

このページは、RcloneView をユーザー向けに完全ブランド化された **Mega S4 Explorer** デスクトップアプリケーションとして提供する方法を示す非公開プレビューです。

このホワイトラベル提案の目的は次のとおりです。

- **Mega S4 ブランドを製品全体の前面に押し出す**こと。
- インストール直後に **ユーザーが Mega S4 アカウントを手間なく接続できる**ようにすること。
- あらゆる管理・ナビゲーションのワークフローにおいて **Mega S4 を最初の選択肢**にすること。
- Mega S4 ブランドのデプロイメントに特化した **優先サポートおよびメンテナンス**を提供すること。

---

## 1. ブランドキット & ビジュアル統合

Mega S4 を製品全体でメインかつ可視性の高いブランドとするブランドキットを提供します。RcloneView のブランディングはすべて削除されるか、法的に必要な箇所(内部バージョン文字列など)にのみ残されます。

主な要素:

- アプリケーション名は **「Mega S4 Explorer」**(または合意された別のラベル)に設定。
- すべての RcloneView ロゴを **Mega S4 ロゴ**に置き換え:
  - デスクトップショートカットおよびタスクバーアイコン。
  - インストーラーアイコン。
  - アプリ内ヘッダーおよびウィンドウアイコン。
- 必要に応じて、カラーアクセントを Mega S4 のブランドパレットに合わせて調整。



<img src="/support/images/en/howto/remote-storage-connection-settings/mega-brandkit-example.png" alt="mega brandkit example" class="img-large img-center" />

---

## 2. インストール後の Mega S4 リモートウィザード

インストール直後、ユーザーは追加の設定手順なしにサービスを利用開始できるよう、Mega S4 アカウントの接続へ案内されます。

主な動作:

- セットアップウィザードの最後にアプリを起動すると、既定のオンボーディングフローとして **「Mega S4 リモートを追加」**が開きます。
- ウィザードは Mega S4 向けに簡素化・事前設定されています:
  - プロバイダー種別は **Mega S4** が事前に選択されています。
  - 既定では Mega S4 固有のオプションのみが表示されます。
  - 詳細オプションは **「詳細オプションを表示」**リンクの奥に引き続き用意されています。

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-mega-remote-wizard.png" alt="post install mega remote wizard" class="img-large img-center" />


### ホーム画面上のクイックアクセスウィザード

ユーザーが最初の接続をスキップした、またはウィザードを閉じた場合:

- ホーム画面右側のパネルに **大きな Mega S4 タイル**が表示されます。
- タイルをクリックすると、いつでも **「Mega S4 リモートを追加」**ウィザードが再度開きます。

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-mega.png" alt="on home quick access wizard for mega" class="img-large img-center" />

 
これにより、新規ユーザーにとっても既存ユーザーにとっても、Mega S4 への接続が常に最も目立つ次のアクションとなります。

---

## 3. Mega S4 優先のナビゲーション & 管理

Mega S4 リモートが追加されると、UI はすべての主要なナビゲーション・管理画面において Mega S4 を目立つ位置に保つよう最適化されます。

### 3.1 再起動時に固定表示される Mega S4 パネル

Mega S4 リモートが設定された後:

- 以降の起動時、UI は既定で **Mega S4 パネルが固定表示**された状態で開きます。
- 一般的なレイアウト:
  - 左側: ローカルディスクまたは別のソース。
  - 右側: ユーザーの **MYMegaS4** リモート。
- ユーザーはドラッグ&ドロップでパネルを自由に並べ替えられるため、Mega S4 パネルは好みのワークフローに応じて左右どちらの側にも移動できます。
- これにより、Mega S4 パネルが現在どちら側にあっても、ローカルフォルダーと Mega S4 間の繰り返しの同期やコピー操作をワンクリックで行えます。

<img src="/support/images/en/howto/remote-storage-connection-settings/mega-panel-pinned-on-re-launch.png" alt="mega panel pinned on re launch" class="img-large img-center" />

### 3.2 「新しいリモート」と「リモートマネージャー」での Mega S4 優先表示

Mega S4 を主要なストレージプロバイダーとして強調するため:

- **新しいリモート**ダイアログでは:
  - Mega S4 が **プロバイダー一覧の先頭**に表示されます。
  - Mega S4 タイルは選択を促すよう視覚的に強調表示されます。
- **リモートマネージャー**では:
  - Mega S4 リモート(例: `MYMegaS4`)が **リモート一覧の先頭**に表示されます。
  - リスト表示・カード表示のいずれにおいても、Mega S4 リモートはより素早くアクセスできるよう視覚的に強調されます。

<img src="/support/images/en/howto/remote-storage-connection-settings/maga-first-in-management-dialog.png" alt="maga first in management dialog" class="img-large img-center" />


---

## 4. Mega S4 向け優先サポート & メンテナンス

Mega S4 ホワイトラベルデプロイメント向けに、専用のサポート・メンテナンス体制を提供します。

含まれるサービス:

- **専用ドキュメント**  
  - **Mega S4 Explorer** ユーザー専用の別マニュアルページ。  
  - Mega S4 での接続、同期、トラブルシューティングに関するステップバイステップガイド。

- **優先インシデント対応**  
  - Mega S4 ユーザーの問題はサポートキューにおいて優先的に扱われます。  
  - Mega S4 ユーザーに影響する重大インシデント(接続障害、データアクセス問題など)に対する **緊急対応**。

- **継続的な製品アップデート**  
  - メンテナンス契約の一環として、デスクトップクライアントの定期アップグレードを含みます。  
  - 双方の承認後、新しい RcloneView 機能を Mega S4 ブランドの下で展開可能。

---

## 5. 次のステップ

このホワイトラベル製品を前に進めたい場合:

1. **ブランディングの調整**
   - Mega S4 ロゴの使用ガイドラインとブランドカラーを確認。
   - 最終的な製品名を決定(例: *Mega S4 Explorer*)。
2. **体験の定義**
   - 上記のオンボーディングフローおよび Mega S4 優先の動作を検証。
   - 既定設定(既定の同期モード、既定のマウントパスなど)を必要に応じて調整。
3. **パイロットビルド**
   - 社内テスト用に、非公開パイロットビルドと Mega S4 専用ドキュメントを提供します。

このページとその URL は Mega S4 およびパートナー関係者専用であり、パブリックナビゲーションや検索には表示されません。評価およびパイロットに関する打ち合わせの際、直接リンクとして安全に共有できます。
