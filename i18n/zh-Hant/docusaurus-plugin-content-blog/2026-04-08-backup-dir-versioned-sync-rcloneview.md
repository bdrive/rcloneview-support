---
slug: backup-dir-versioned-sync-rcloneview
title: "在 RcloneView 中使用 Backup Dir 進行版本化雲端同步"
authors:
  - tayson
description: "了解如何在 RcloneView 中使用 --backup-dir 建立版本化雲端同步，將被覆寫的檔案移至備份目錄，安全保留先前的檔案版本。"
keywords:
  - rcloneview
  - backup-dir
  - 版本化同步
  - 雲端備份版本控制
  - rclone backup directory
  - 安全雲端同步
  - 檔案版本歷史
  - 雲端檔案復原
  - 含備份的同步
  - rclone suffix
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 RcloneView 中使用 Backup Dir 進行版本化雲端同步

> 在同步過程中不小心覆寫或刪除檔案，是每個雲端使用者的惡夢。**RcloneView** 內建支援 `--backup-dir`，讓版本化同步變得輕而易舉，確保您再也不會遺失先前的版本。

執行標準同步操作時，目的地與來源不同的檔案會被覆寫，來源已不存在的檔案則會被刪除。這種方式效率很高，但也具有破壞性。如果來源檔案損毀，或您不小心刪除了仍需要的內容，這些變更會直接傳播到目的地，且無法復原。

`--backup-dir` 旗標優雅地解決了這個問題。rclone 不會永久移除被覆寫或刪除的檔案，而是先將它們移動到獨立的備份目錄。這為您提供了完整的安全網：任何原本會遺失的檔案，都會保存在您可掌控的位置。

RcloneView 讓您可以透過自訂旗標介面設定 `--backup-dir`，因此您無需記住命令列語法即可享有版本化同步的全部功能。搭配 `--suffix` 使用可產生附加日期戳記的版本，僅利用現有的雲端儲存空間就能建立輕量級的檔案版本控制系統。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## --backup-dir 實際上做了什麼

當同步操作在目的地遇到需要被覆寫或刪除的檔案時，`--backup-dir` 會攔截該動作。rclone 不會刪除該檔案，而是將其移動到指定的備份目錄，並保留其相對路徑結構。

例如，若您的同步作業覆寫了目的地上的 `documents/report.docx`，舊版本會被移動到 `backup/documents/report.docx`。目錄階層會被保留，方便日後尋找及還原特定檔案。

這適用於兩種情境：
- **被覆寫的檔案**：當來源檔案較新或內容不同時，舊的目的地副本會在被新版本取代之前，先移動到備份目錄。
- **被刪除的檔案**：當檔案存在於目的地但來源已不存在時，該檔案會被移動到備份目錄，而不是被永久刪除。

## 為什麼版本化同步至關重要

標準同步操作假設您總是希望目的地與來源完全一致。這在一切順利時運作良好，但一旦出錯就麻煩了。請考慮以下常見情境：

- 來源檔案損毀或感染勒索軟體，在您察覺之前，損壞已傳播到您的備份。
- 您不小心刪除了一個資料夾，而下一次排程同步也將其從目的地移除。
- 同事覆寫了共用文件，先前的版本從兩處都消失了。

有了 `--backup-dir`，上述每一種情況都可以復原。先前的版本會安全地存放在您的備份目錄中，不受後續同步操作影響。

## 在 RcloneView 中設定 --backup-dir

RcloneView 在其作業設定中支援自訂 rclone 旗標。以下說明如何設定版本化同步：

1. 開啟 **Job Manager**，建立新的同步作業或編輯現有作業。
2. 照常設定來源與目的地遠端。
3. 在 **Custom Flags** 區段中，新增：`--backup-dir remote:backup/2026-04-08`
4. 儲存並執行該作業。

備份目錄可以位於與目的地相同的遠端，也可以是完全不同的遠端。使用像 `backup/2026-04-08` 這樣以日期命名的路徑，可以讓每天被替換的檔案整齊地存放在各自的資料夾中。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 結合 --backup-dir 與 --suffix 建立日期戳記版本

若想要更細緻的版本控制，可以將 `--backup-dir` 與 `--suffix` 結合使用，為每個備份檔案附加時間戳記。這可以避免同一檔案多次修改並同步時發生檔名衝突。

在自訂旗標區段中同時加入兩個旗標：

```
--backup-dir remote:backup --suffix .2026-04-08
```

有了這項設定，若 `report.docx` 被覆寫，舊版本會另存為 `backup/report.docx.2026-04-08`。隔天再次執行同步並更新後綴，您就能累積一系列帶日期的版本歷史，且不會發生任何衝突。

對於按排程執行的自動化作業，您可以使用與執行日期相關聯的動態後綴，確保每次執行都會建立唯一命名的備份。

## 實務範例

**每日備份並保留版本：**
每晚將 Google Drive 同步到 Backblaze B2，並將每天被替換的檔案存放在以日期命名的備份資料夾中。30 天後，您可以清理舊的備份目錄以管理儲存成本。

**團隊專案保護：**
將共用的 Dropbox 資料夾同步到 S3，並使用 `--backup-dir` 擷取任何被團隊成員刪除或覆寫的檔案。這可作為一種輕量級稽核記錄，而無需使用雲端服務商的付費版本控制功能。

**遷移安全網：**
從一個雲端遷移到另一個雲端時，在初次同步過程中使用 `--backup-dir` 擷取任何會被覆寫的目的地檔案。若遷移未如預期順利，您將擁有完整的回復點。

## 復原流程

在 RcloneView 中從備份目錄復原檔案十分簡單：

1. 開啟 **Remote Explorer** 並瀏覽至您的備份目錄。
2. 瀏覽目錄結構以找到所需檔案，原始資料夾階層會被保留。
3. 使用拖放或複製操作，將檔案移回原始位置。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

由於備份目錄只是遠端上的一般資料夾，您也可以瀏覽它們、下載檔案，甚至將其同步到另一個位置進行封存。

## 隨時間管理備份儲存空間

版本化備份會隨時間累積，因此制定保留策略十分重要。以下是幾種做法：

- **以日期分類的資料夾**：使用以日期命名的備份目錄路徑（例如 `backup/2026-04-08`），並定期刪除超出保留期限的資料夾。
- **以後綴為基礎的清理**：使用 `--suffix` 時，您可以識別並移除帶有舊日期後綴的檔案。
- **使用獨立的低成本儲存空間**：將備份目錄指向 Wasabi 或 Backblaze B2 等經濟實惠的物件儲存服務商，長期保留成本極低。

RcloneView 的 Explorer 讓您可以輕鬆瀏覽備份目錄，並在需要釋放空間時刪除過期版本。

## --backup-dir 最佳實務

- 務必先使用試執行（dry run）測試您的 `--backup-dir` 設定，確認檔案被正確導向目標位置。
- 盡可能將備份目錄設在與目的地相同的遠端，因為同一遠端內的移動是即時完成的，也不會消耗頻寬。
- 為備份路徑使用一致的命名慣例，讓自動化清理腳本能輕鬆識別舊版本。
- 針對關鍵資料，可在另一個遠端上再搭配一組 `--backup-dir`，同時擁有快速復原的本地備份與地理位置分離的封存副本。

## 快速上手

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 建立同步作業，並設定好您的來源與目的地遠端。
3. 在自訂旗標欄位中加入 `--backup-dir remote:backup/YYYY-MM-DD` 以啟用版本化同步。
4. 先執行試執行以驗證設定，確認無誤後再正式執行作業。

設定好 `--backup-dir` 後，每一次同步操作都會變成安全且可逆的過程。您既能享有單向同步的效率，也能安心確信不會有任何資料永久遺失。

---

**相關指南：**

- [瀏覽與管理遠端儲存空間](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [建立同步作業](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [執行與管理作業](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
