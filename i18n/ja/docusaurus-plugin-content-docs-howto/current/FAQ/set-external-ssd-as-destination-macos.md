---
sidebar_position: 3
description: "RcloneViewがmacOSで外付けSSDにアクセスできない場合の対処法。/Volumesを参照し、簡単なエイリアスショートカットを作成して解決します。"
keywords:
  - rcloneview
  - macos
  - external drive
  - offline backup
  - sync destination
  - alias remote
  - volumes
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - external-drive
  - alias
date: 2025-02-20
author: Jay
---

# RcloneViewで外付けSSDにアクセスできない（macOS）

RcloneViewがmacOS上の外付けSSDにアクセスできない場合（ドライブが表示されない、またはパスの入力方法がわからない場合）は、この簡単な回避策を使用してください。一時的なUXの問題（次のリリースで修正予定）により通常のショートカットが表示されませんが、手動でSSDを参照し、エイリアス（お気に入り）として保存すれば、以降はワンクリックでアクセスできます。

---

## クイック対処方法（いずれかを選択）

- **ホットフィックスビルドを使用する（UX修正を含む）:** [RcloneView 1.1.517（macOS）をダウンロード](https://downloads.bdrive.com/rclone_view/builds/RcloneView-1.1.517.dmg) してインストールすると、SSDパスの修正がすぐに適用されます。これは、次の正式リリース前にこの問題に遭遇したユーザー向けに提供されている一時的なビルドです。
- **現在の正式リリースを使い続ける:** 下記の手順に従って `/Volumes` を参照し、SSDへのエイリアスを作成してください。現在公開されているビルドで動作します。

---

## 手順: /VolumesからSSDを追加する

RcloneViewの左ペインに **`Local Disk`** が表示されています。

1) パスバーに `/Volumes` と入力し、**Enter** を押します。これはmacOSが外付けドライブ（例: Samsung T7）をマウントする場所です。
2) `/Volumes` の一覧で、お使いのSSD（例: `SAMSUNG`）をダブルクリックします。ドライブによっては読み込みに少し時間がかかる場合があるため、フォルダが開くまでお待ちください。

<img src="/support/images/en/howto/FAQ/browse-volumes-in-mac-system.png" alt="browse volumes in mac system" class="img-large img-center" />

3) SSDの内部にいることを確認します（パスバーには `/Volumes/<お使いのドライブ名>` と表示されているはずです）。
4) パスバーの **☆**（エイリアス）アイコンをクリックして、この場所をブックマークします。
5) わかりやすい名前（例: `MySSD`）を入力し、
6) **Create** をクリックします。これにより、常にSSDのルートを開くエイリアスリモートが追加されます。
<img src="/support/images/en/howto/FAQ/creat-alias-remote-for-external-hdd.png" alt="creat alias remote for external hdd" class="img-large img-center" />

7) エイリアスは新しいタブで開き、左側の一覧にも表示されるため、すばやく再利用できます。

<img src="/support/images/en/howto/FAQ/open-alias-remote-for-external-ssd.png" alt="open alias remote for external ssd" class="img-large img-center" />

---

## バックアップでSSDエイリアスを使用する方法

- Sync/Copy/Moveジョブを作成する際、先ほど作成したエイリアスリモート（例: `MySSD`）を **destination**（宛先）として選択し、Google Drive、Dropbox、別のローカルフォルダなどのソースリモートを **source**（ソース）として選択します。
- エイリアスはSSDのルートを指しているため、ジョブを開始する前にそのタブ内でサブフォルダを選択または作成できます。

---

## SSDが表示されない場合

- FinderでSSDがマウントされていることを確認してください（必要に応じて抜き差ししてください）。
- パスバーで `/Volumes` を再度開き、ドライブ一覧が表示されるまで数秒待ってください。
- それでも表示されない場合は、RcloneViewを再起動してから再度 `/Volumes` を試してください。それでも失敗する場合は、[RcloneViewフォーラム](https://forum.rcloneview.com) で報告してください。

---

## 関連ガイド

- エイリアスの概要とその他の仮想リモート: [エイリアスリモートガイド](/howto/remote-storage-connection-settings/alias-remote)
- Explorerの基本操作とタブについて: [リモートストレージの参照と管理](/howto/rcloneview-basic/browse-and-manage-remote-storage)
