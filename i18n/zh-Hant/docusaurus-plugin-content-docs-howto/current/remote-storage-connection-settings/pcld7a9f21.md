---
id: pcld7a9f21
title: pCloud 白牌探索工具（預覽版）
description: 由 RcloneView 提供技術支援的完整品牌化 pCloud Explorer 桌面體驗，私人預覽版本。
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# pCloud 白牌探索工具（預覽版）

本頁面為私人預覽,展示 RcloneView 如何以完整品牌化的 **pCloud Explorer** 桌面應用程式形式,提供給您的使用者。

此白牌提案的目標為:

- 讓 **pCloud 品牌成為整個產品的核心焦點**。
- 讓使用者在安裝後**能輕鬆連接 pCloud 帳戶**。
- 確保 **pCloud 在每個管理與導覽流程中都是首選**。
- 為 pCloud 品牌化部署提供**優先支援與維護服務**。

---

## 1. 品牌套件與視覺整合

我們提供以 pCloud 為主要且可見品牌的品牌套件,貫穿整個產品。所有 RcloneView 品牌元素皆已移除,或僅保留法律要求必須存在的部分(例如內部版本字串)。

主要元素:

- 應用程式名稱設為 **「pCloud Explorer」**(或其他協議之標籤)。
- 所有 RcloneView 標誌皆替換為 **pCloud 標誌**:
  - 桌面捷徑與工作列圖示。
  - 安裝程式圖示。
  - 應用程式內標頭與視窗圖示。
- 依需要調整色彩配置,以符合 pCloud 的品牌色系。

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-brandkit-examples.png" alt="pcloud brandkit examples" class="img-large img-center" />


---

## 2. 安裝後 pCloud 遠端精靈

安裝完成後,系統會立即引導使用者連接其 pCloud 帳戶,讓他們無需額外設定步驟即可開始使用服務。

主要行為:

- 在安裝精靈結束時,啟動應用程式將開啟 **「新增 pCloud 遠端」** 作為預設的新手導覽流程。
- 精靈已針對 pCloud 進行簡化與預先設定:
  - 提供者類型預先選取為 **pCloud**。
  - 預設僅顯示 pCloud 專屬選項。
  - 進階選項仍可透過 **「顯示進階選項」** 連結取得。

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-pcloud-remote-wizard.png" alt="post install pcloud remote wizard" class="img-large img-center" />

### 首頁快速存取精靈

若使用者跳過初始連接或關閉精靈:

- 首頁畫面右側面板將顯示一個**大型 pCloud 磚塊**。
- 點擊此磚塊可隨時重新開啟 **「新增 pCloud 遠端」** 精靈。

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard.png" alt="on home quick access wizard" class="img-large img-center" />


這確保了連接 pCloud 對新使用者或回訪使用者而言,始終是最顯眼的下一步操作。

---

## 3. pCloud 優先導覽與管理

新增 pCloud 遠端後,使用者介面經過最佳化調整,讓 pCloud 在所有主要導覽與管理畫面中皆保持顯眼可見。

### 3.1 RcloneView Explorer 中的 pCloud 磁碟機

當 pCloud 遠端掛載為本機磁碟機時:

- pCloud 磁碟機(例如 `pCloud Drive (P:/)`)會顯示於 **RcloneView 本機遠端清單的最上方**。
- 該磁碟機使用 **pCloud 圖示**,使其在視覺上與其他磁碟機有所區別。

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="pcloud first in explorer" class="img-medium img-center" />

### 3.2 重新啟動時固定顯示 pCloud 面板

在設定完 pCloud 遠端之後:

- 後續啟動時,使用者介面預設會開啟並**固定顯示 pCloud 面板**。
- 典型版面配置:
  - 左側:本機磁碟或其他來源。
  - 右側:使用者的 **MYpCloud** 遠端。
- 這讓使用者在本機資料夾與 pCloud 之間重複進行同步或複製操作時,只需一鍵即可完成。

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-panel-pinned-on-re-launch.png" alt="pcloud panel pinned on re launch" class="img-large img-center" />


### 3.3 在「新增遠端」與「遠端管理員」中優先顯示 pCloud

為了將 pCloud 凸顯為主要儲存服務提供者:

- 在**新增遠端**對話框中:
  - pCloud 顯示於**提供者清單最上方**。
  - pCloud 磚塊在視覺上會被強調,以鼓勵使用者選取。
- 在**遠端管理員**中:
  - pCloud 遠端(例如 `MYpCloud`)會顯示於**遠端清單最上方**。
  - 在清單檢視與卡片檢視中,pCloud 遠端皆會以視覺方式加以強調,方便快速存取。


<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-management-dialog.png" alt="pcloud first in management-dialog" class="img-large img-center" />

---

## 4. pCloud 優先支援與維護服務

針對 pCloud 白牌部署,我們提供專屬的支援與維護服務。

包含的服務:

- **專屬文件**  
  - 針對 **pCloud Explorer** 使用者提供獨立的操作手冊頁面。  
  - 提供連接、同步及 pCloud 疑難排解的逐步指南。

- **優先事件處理**  
  - pCloud 使用者的問題會在支援佇列中被優先處理。  
  - 針對影響 pCloud 使用者的重大事件(例如連接失敗、資料存取問題)提供**緊急應變**。

- **持續產品更新**  
  - 維護協議中包含定期的桌面客戶端升級。  
  - 經雙方共同核准後,可在 pCloud 品牌下推出 RcloneView 新功能。

---

## 5. 後續步驟

若您希望進一步推動此白牌產品,請依以下步驟進行:

1. **品牌對齊**
   - 確認 pCloud 標誌使用準則及品牌色彩。
   - 決定最終產品名稱(例如 *pCloud Explorer*)。
2. **體驗定義**
   - 驗證上述新手導覽流程及 pCloud 優先行為。
   - 調整任何預設設定(例如預設同步模式、預設掛載路徑)。
3. **試行建置**
   - 我們將提供私人試行版本及 pCloud 專屬文件,供內部測試使用。

本頁面及其網址僅供 pCloud 與合作夥伴利益相關者使用,不會出現於公開導覽或搜尋結果中。在評估與試行討論期間,可安全地以直接連結方式分享此頁面。

