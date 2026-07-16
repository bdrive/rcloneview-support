---
slug: link-public-shared-links-cloud-rcloneview
title: "使用 RcloneView 為雲端檔案產生公開分享連結"
authors:
  - tayson
description: "使用 RcloneView 的 link 指令為雲端檔案產生公開下載連結。從 Google Drive、OneDrive、Dropbox、S3 等分享檔案，無需授予帳戶存取權限。"
keywords:
  - rcloneview
  - public link cloud file
  - share cloud file link
  - rclone link command
  - generate download link
  - presigned url s3
  - shared link google drive
  - cloud file sharing
  - public url cloud storage
  - share file without account
tags:
  - RcloneView
  - feature
  - cloud-storage
  - guide
  - tips
  - collaboration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 為雲端檔案產生公開分享連結

> 分享雲端檔案通常需要前往服務供應商的網頁介面、調整權限、再複製連結。RcloneView 的 link 功能可直接從檔案總管產生可分享的網址——支援所有具備此功能的供應商。

當你需要與沒有帳戶存取權限的人分享儲存在雲端的檔案時,公開連結或預先簽署連結是標準做法。Google Drive 可建立可分享連結,S3 會產生預先簽署網址(pre-signed URL),Dropbox 則提供分享連結——每一種都透過不同的介面與不同的流程完成。RcloneView 將這一切整合成單一動作:在檔案上按右鍵、產生連結、然後分享出去。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 各供應商的公開連結運作方式

不同的雲端供應商實作檔案分享的方式各不相同:

| 供應商 | 連結類型 | 預設有效期限 | 備註 |
|---|---|---|---|
| Google Drive | 可分享連結 | 無有效期限 | 會將檔案權限變更為「知道連結的任何人」 |
| OneDrive | 分享連結 | 可設定 | 匿名或限組織範圍 |
| Dropbox | 分享連結 | 無有效期限 | 唯讀下載連結 |
| AWS S3 | 預先簽署網址 | 可設定(最長 7 天) | 臨時性、以密碼學方式簽署 |
| Backblaze B2 | 下載網址 | 無有效期限 | 需要儲存桶為公開,或使用驗證權杖 |
| Cloudflare R2 | 預先簽署網址 | 可設定 | 相容 S3 的預先簽署網址 |

RcloneView 在底層使用 rclone 的 `link` 指令,會自動為每個供應商產生相應類型的連結。你不需要了解各供應商特定的分享機制——RcloneView 會替你處理。

## 在 RcloneView 中產生連結

若要為檔案產生公開連結:

1. 在 RcloneView 的檔案總管中瀏覽至該檔案。
2. 在檔案上按右鍵並選擇 link/share 選項。
3. RcloneView 會產生連結並複製到剪貼簿(或顯示出來供手動複製)。

對於支援有效期限的供應商(例如 S3 預先簽署網址),你可以在自訂選項中使用 `--expire` 旗標指定連結的有效時間。舉例來說,`--expire 24h` 會建立一個 24 小時後失效的連結。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Generating a public link for a cloud file in RcloneView" class="img-large img-center" />

## 透過終端機使用 Link 指令

若需要更精細的控制,可使用 RcloneView 內建的終端機直接執行 link 指令:

```
rclone link remote:path/to/file.pdf
```

這會輸出公開網址。對於相容 S3 的供應商,可加上有效期限:

```
rclone link remote:bucket/file.pdf --expire 48h
```

當需要為多個檔案產生連結,或將連結產生作為工作流程的一部分進行腳本化時,終端機方式會很有用。

## 各供應商的特定行為

### Google Drive

當你為 Google Drive 檔案產生連結時,rclone 會將該檔案的分享設定變更為「知道連結的任何人皆可檢視」。除非你手動撤銷分享,否則此連結不會過期。請注意,這會修改檔案的權限——任何持有該網址的人都能存取該檔案。

對於 Google Workspace 帳戶,管理員可能會限制連結分享僅限組織成員使用。在此情況下,產生的連結僅對你組織內的成員有效。

### OneDrive 與 SharePoint

OneDrive 透過 Microsoft Graph API 產生分享連結。連結類型取決於你組織的分享政策——可能是匿名(任何人皆可存取)或限組織成員使用。個人 OneDrive 帳戶可建立匿名連結。

### AWS S3 與相容 S3 的服務

S3 預先簽署網址是最安全的選項。此網址包含一組密碼學簽章,可授予對特定物件的臨時存取權。連結會在指定的時間後過期(預設值不一,IAM 使用者憑證最長為 7 天)。此過程不會變更物件本身的權限——授權資訊完全承載於預先簽署網址中。

這使得 S3 預先簽署網址非常適合用於臨時分享檔案:連結在指定時間內有效,之後即自動失效,無需手動清理。

### Dropbox

Dropbox 會建立一個提供唯讀存取的分享連結。在 Dropbox Plus 與 Professional 方案中,此連結預設不會過期。在 Dropbox Business 中,管理員可強制執行有效期限政策。

## 使用情境

### 快速檔案分享

為儲存在雲端的報告、設計檔案或資料集產生連結,並透過電子郵件、Slack 或聊天工具傳送。收件人無需擁有雲端帳戶或存取你的儲存空間,即可下載檔案。

### 為客戶提供臨時存取

對自由工作者與代理商而言,S3 預先簽署網址非常適合用於交付檔案給客戶。將交付成果上傳至 S3、產生一個 7 天有效的預先簽署網址,並傳送給客戶。7 天後,連結會自動失效——無需手動清理。

### 公開內容散佈

對於預計廣泛散佈的檔案(文件、發行版本、媒體資料包),可從 Google Drive 或 Dropbox 產生一個永久連結,並嵌入你的網站或文件中。RcloneView 讓你無需前往供應商的網頁介面即可產生連結。

## 安全性考量

- **永久連結會使檔案長期處於可存取狀態**:Google Drive 與 Dropbox 的連結預設不會過期。如果你分享的是敏感檔案,請記得在不再需要存取時撤銷該連結。
- **預先簽署網址有時間限制,但仍可被轉發分享**:在有效期間內,任何持有該網址的人都能存取檔案。若檔案屬機密,請勿在公開頻道中分享預先簽署網址。
- **在部分供應商上,產生連結會修改權限**:Google Drive 的連結會變更檔案的分享設定,而這對其他有權存取該檔案的使用者是可見的。
- **定期稽核已分享的連結**:定期檢視並撤銷舊的分享連結,尤其是針對敏感檔案。RcloneView 的檔案總管讓你能輕鬆瀏覽至檔案並檢查其分享狀態。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在遠端管理員(Remote Manager)中新增你的雲端遠端。
3. 在檔案總管中瀏覽至檔案,並產生公開連結。
4. 若需要限時連結,可搭配 `--expire` 旗標使用 S3 預先簽署網址。

從 RcloneView 產生可分享連結,能讓你省去逐一切換至各供應商網頁介面的麻煩。無論你需要的是快速分享連結、臨時的客戶交付網址,還是永久下載連結,RcloneView 都能直接在檔案總管中完成。

---

**相關指南:**

- [瀏覽與管理遠端儲存空間](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [新增 AWS S3 與相容 S3 的服務](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [透過瀏覽器登入(OAuth)新增遠端](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
