---
slug: fix-s3-multipart-upload-failures-rcloneview
title: "修復 RcloneView 中的 S3 分段上傳失敗問題"
authors:
  - tayson
description: "排解並修復 RcloneView 中的 S3 分段上傳失敗問題。解決上傳不完整、分段大小錯誤與孤立的分段上傳工作階段。"
keywords:
  - rcloneview
  - s3 multipart upload failure
  - fix s3 upload error
  - multipart upload incomplete
  - s3 upload timeout
  - s3 part size error
  - orphaned multipart upload
  - s3 upload troubleshooting
  - rclone s3 multipart
  - cloud upload fix
tags:
  - RcloneView
  - troubleshooting
  - amazon-s3
  - s3-compatible
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 RcloneView 中的 S3 分段上傳失敗問題

> S3 分段上傳會將大型檔案切割成多個區塊，以進行平行傳輸與可續傳性，但過程中若發生失敗，可能導致上傳不完整、浪費儲存空間並阻塞傳輸——以下說明如何在 RcloneView 中修復這些問題。

Amazon S3 與相容於 S3 的服務供應商（Wasabi、Backblaze B2 S3、Cloudflare R2、MinIO、DigitalOcean Spaces）要求超過 5 GB 的檔案必須使用分段上傳，並建議超過 100 MB 的檔案也採用此方式。檔案會被切割成多個部分（預設每段 5 MB 至 5 GB），以平行方式上傳，並在伺服器端組合完成。當此流程中途失敗時——原因可能是網路中斷、逾時，或分段大小設定錯誤——結果就是產生一個消耗儲存空間卻無法使用的不完整上傳物件。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常見症狀

- **上傳停滯或卡住**：大型檔案的傳輸似乎在中途停止。RcloneView 的監控畫面長時間顯示沒有進度。
- **「EntityTooSmall」錯誤**：上傳的分段小於最小限制（大多數 S3 供應商為 5 MB）。這通常發生在區塊大小設定相對於檔案大小過小時。
- **「EntityTooLarge」錯誤**：單一分段超過允許的最大大小（5 GB）。
- **「InvalidPart」或「InvalidPartOrder」**：分段上傳順序錯誤，或某個分段在傳輸過程中損毀。伺服器會拒絕完成請求。
- **儲存用量增加但檔案未出現**：不完整的分段上傳會消耗儲存空間。這些分段存在於伺服器上，但最終的物件卻從未被組合完成。

## 修復方法 1：調整區塊大小

分段上傳失敗最常見的原因，是區塊大小相對於檔案大小設定不正確。S3 每個上傳最多允許 10,000 個分段。如果區塊大小對於大型檔案來說太小，上傳就會超過分段數量限制而失敗。

**範例**：一個 500 GB 的檔案若使用預設的 5 MB 區塊大小，將需要 100,000 個分段——遠遠超過 10,000 個分段的限制。

在 RcloneView 中，可在設定 S3 遠端或作業的進階選項時調整區塊大小。一個好的經驗法則是：將區塊大小設定為至少 `檔案大小 / 10,000`。對於 500 GB 的檔案，至少應使用 50 MB 的區塊。對大多數工作負載而言，64 MB 到 128 MB 的區塊大小能在平行處理與可靠性之間取得良好平衡。

您可以在 RcloneView 的自訂旗標欄位中，使用 `--s3-chunk-size` 旗標設定此項目。

## 修復方法 2：增加上傳逾時時間

在速度較慢的連線上傳輸大型分段可能會超過預設的逾時時間。如果您的連線速度低於 10 Mbps，一個 128 MB 的區塊可能需要超過 100 秒才能上傳完成——接近預設逾時限制。

使用 `--timeout` 旗標增加逾時時間。例如，`--timeout 300s` 會給予每個分段最多 5 分鐘的完成時間。您也可以縮小區塊大小，讓個別分段能更快傳輸完成。

## 修復方法 3：降低傳輸並行數量

同時上傳過多分段可能會使您的網路連線或 S3 端點負荷過重。如果您在分段上傳過程中頻繁遇到逾時或連線重設，請降低同時傳輸的數量。

在 RcloneView 的作業設定中，將傳輸數量從預設值（4）降低為 2，甚至對於非常大的檔案降為 1。您也可以使用 `--s3-upload-concurrency` 來控制單一檔案有多少個分段以平行方式上傳（預設為 4）。

## 修復方法 4：清理孤立的分段上傳

失敗的分段上傳會在伺服器上留下孤立的分段，這些分段會持續消耗儲存空間並產生費用。這些分段不會以物件的形式顯示——無論是在 RcloneView 或 AWS 主控台瀏覽儲存貯體時，您都不會看到它們。

若要清理孤立的上傳：

- **AWS S3**：在儲存貯體上設定生命週期規則，於指定天數後（例如 7 天）自動中止不完整的分段上傳。此設定可在 AWS 主控台的儲存貯體「管理」分頁中完成。
- **使用 rclone**：從 RcloneView 內建的終端機執行 `rclone cleanup remote:bucket`。此指令會中止指定儲存貯體上所有待處理的分段上傳。
- **相容於 S3 的服務供應商**：大多數供應商都支援相同的生命週期規則或清理指令，但請查閱您的服務供應商文件以了解詳細資訊。

## 修復方法 5：啟用失敗重試

分段上傳過程中的網路中斷可能導致個別分段失敗。RcloneView 會自動重試失敗的操作（預設為 3 次重試，並採用指數退避策略）。如果您經常遇到暫時性的失敗，可在自訂旗標中使用 `--retries 5` 或 `--retries 10` 增加重試次數。

對於非常不穩定的連線，也可設定 `--low-level-retries 10`，在將某次操作判定為失敗前先重試個別的 HTTP 請求。

## 修復方法 6：盡可能使用伺服器端複製

如果您是在同一服務供應商的兩個相容於 S3 的儲存貯體之間進行複製，伺服器端複製可以完全避免分段上傳的問題——資料會在供應商的網路內移動，而不會經過您的電腦。當來源與目的地位於同一 S3 供應商時，RcloneView 會自動使用伺服器端複製。

對於跨供應商傳輸（例如從 AWS S3 傳輸到 Cloudflare R2），資料必須經過您的電腦，且分段上傳會套用於目的地端。

## 預防未來發生失敗

- **主動設定區塊大小**：在上傳超過 1 GB 的檔案之前，計算所需的區塊大小（`檔案大小 / 10,000`）並在自訂旗標中設定。
- **啟用生命週期清理**：務必設定生命週期規則以中止不完整的分段上傳，這可防止孤立分段不斷累積。
- **監控傳輸狀態**：使用 RcloneView 的即時監控功能，及早發現停滯的上傳。暫停後再繼續傳輸，通常能解決暫時性的問題。
- **以試執行進行測試**：對於重要的上傳作業，可使用 RcloneView 的試執行模式，在正式執行前先確認傳輸計畫。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 為您的 S3 遠端設定適合最大檔案的區塊大小。
3. 在您的儲存貯體上設定生命週期規則，以自動清理孤立的上傳。
4. 即時監控傳輸狀態，並視需要調整並行數量。

分段上傳失敗是處理 S3 上大型檔案時最常見的問題。正確設定區塊大小、逾時時間與清理孤立上傳，就能解決絕大多數的情況。

---

**相關指南：**

- [新增 AWS S3 與相容於 S3 的儲存服務](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [即時傳輸監控](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [建立同步作業](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
