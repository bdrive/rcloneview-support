---
slug: backup-nas-to-multiple-clouds-rcloneview
title: "Cara Mencadangkan NAS Anda ke Beberapa Cloud — Strategi Pencadangan 3-2-1 dengan RcloneView"
authors:
  - tayson
description: "Lindungi data NAS Anda dengan mencadangkannya ke beberapa penyedia cloud secara bersamaan. Terapkan strategi pencadangan 3-2-1 yang tepat menggunakan batch job RcloneView."
keywords:
  - nas multi cloud backup
  - 3 2 1 backup strategy
  - nas cloud backup multiple
  - synology multi cloud backup
  - qnap multi cloud backup
  - nas backup strategy
  - nas to s3 and b2 backup
  - nas disaster recovery
  - multi cloud backup plan
  - nas off site backup
tags:
  - nas
  - multi-cloud
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Mencadangkan NAS Anda ke Beberapa Cloud — Strategi Pencadangan 3-2-1 dengan RcloneView

> Satu pencadangan cloud itu bagus. Dua pencadangan cloud lebih baik. Aturan 3-2-1 mengatakan: 3 salinan, 2 media berbeda, 1 di luar lokasi. NAS Anda adalah salinan pertama. Cloud A adalah salinan kedua. Cloud B adalah salinan ketiga. RcloneView mengotomatiskan semuanya.

NAS adalah solusi penyimpanan terpusat yang luar biasa, tetapi tetap saja merupakan satu perangkat di satu lokasi. Kegagalan perangkat keras, kebakaran, pencurian, atau bencana alam dapat menghancurkannya beserta semua data di dalamnya. Mencadangkan ke beberapa penyedia cloud — pada infrastruktur berbeda, di wilayah berbeda — memberi Anda pemulihan bencana yang sesungguhnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Strategi 3-2-1

| Salinan | Lokasi | Penyedia |
|------|----------|----------|
| 1 (utama) | NAS (lokal) | Synology/QNAP |
| 2 (pencadangan cloud) | Cloud A | Backblaze B2 ($6/TB) |
| 3 (pencadangan cloud) | Cloud B | AWS S3 atau Wasabi |

Tiga salinan. Dua jenis penyimpanan berbeda (NAS lokal + cloud). Satu di luar lokasi (cloud secara definisi berada di luar lokasi).

## Pengaturan dengan RcloneView

### 1) Hubungkan NAS dan cloud Anda

<img src="/support/images/en/blog/new-remote.png" alt="Add NAS and cloud remotes" class="img-large img-center" />

### 2) Buat job pencadangan untuk setiap cloud

**Job 1**: NAS → Backblaze B2 (pencadangan cloud utama).
**Job 2**: NAS → AWS S3 (pencadangan cloud sekunder).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create multi-cloud backup jobs" class="img-large img-center" />

### 3) Jadwalkan pencadangan setiap malam

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-cloud NAS backup" class="img-large img-center" />

Selang-seling jadwalnya:
- 02:00 → NAS → Backblaze B2.
- 04:00 → NAS → AWS S3.

### 4) Gunakan Batch Jobs untuk otomatisasi

Batch Jobs v1.3 merangkai semuanya:

1. Salin NAS → B2.
2. Salin NAS → S3.
3. Bandingkan NAS vs B2.
4. Bandingkan NAS vs S3.
5. Beri notifikasi melalui Slack.

### 5) Verifikasi kedua pencadangan

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify multi-cloud backup" class="img-large img-center" />

## Optimasi Biaya

| Volume Data | B2 Bulanan | S3 Standard-IA Bulanan | Total |
|-------------|-----------|----------------------|-------|
| 1 TB | $6 | $12.50 | $18.50 |
| 5 TB | $30 | $62.50 | $92.50 |
| 10 TB | $60 | $125 | $185 |

Untuk pencadangan sekunder, gunakan tingkatan yang lebih murah: S3 Glacier ($4/TB) atau Wasabi ($7/TB dengan egress gratis).

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Hubungkan NAS + dua penyedia cloud**.
3. **Buat job Copy** ke setiap cloud.
4. **Jadwalkan dan otomatiskan** dengan Batch Jobs.
5. **Verifikasi kedua pencadangan** setiap minggu.

Dua cloud, satu NAS, nol risiko kehilangan data.

---

**Panduan Terkait:**

- [RcloneView di Synology NAS](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [RcloneView di QNAP NAS](https://rcloneview.com/support/blog/rcloneview-qnap-nas-cloud-backup-rcloneview)
- [Mengapa Pencadangan Cloud-ke-Cloud Penting](https://rcloneview.com/support/blog/why-cloud-to-cloud-backup-matters-rcloneview)

<CloudSupportGrid />
