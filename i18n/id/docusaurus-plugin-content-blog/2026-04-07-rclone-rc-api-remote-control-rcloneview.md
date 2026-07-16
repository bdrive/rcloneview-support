---
slug: rclone-rc-api-remote-control-rcloneview
title: "Mengontrol RcloneView Secara Remote dengan Rclone RC API"
authors: [tayson]
description: "Pelajari cara menggunakan rclone RC (Remote Control) API untuk mengotomatisasi operasi penyimpanan cloud, memantau transfer, dan mengintegrasikan RcloneView ke dalam alur kerja Anda."
keywords:
  - rclone rc api
  - rclone remote control
  - rcloneview api
  - rclone automation
  - rclone api endpoints
  - rclone rest api
  - rclone programmatic control
  - cloud storage automation
  - rclone webhook
  - rclone monitoring api
tags: [RcloneView, feature, api, automation, guide, cli, tips, monitoring]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengontrol RcloneView Secara Remote dengan Rclone RC API

> Buka kontrol programatik atas operasi penyimpanan cloud Anda menggunakan RC API bawaan rclone, yang terintegrasi secara mulus dengan RcloneView.

Rclone dilengkapi dengan REST API yang andal bernama antarmuka RC (Remote Control). API ini mengekspos hampir setiap operasi rclone sebagai endpoint HTTP, memungkinkan Anda memulai transfer, memantau progres, mengelola mount, dan mengambil statistik dari bahasa pemrograman atau alat otomatisasi apa pun. RcloneView memanfaatkan RC API yang sama ini di balik layar untuk operasi GUI-nya, yang berarti apa pun yang bisa Anda lakukan di antarmuka juga bisa dilakukan secara programatik. Panduan ini membahas RC API mulai dari dasar-dasarnya hingga otomatisasi tingkat lanjut, memberi Anda pengetahuan untuk membangun integrasi kustom, dashboard pemantauan, dan alur kerja otomatis seputar operasi penyimpanan cloud Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memahami Arsitektur Rclone RC

RC API rclone adalah REST API berbasis JSON yang berjalan sebagai server HTTP yang tertanam dalam proses rclone. Saat Anda menjalankan rclone dengan flag `--rc` atau menggunakan perintah `rclone rcd`, ia membuka sebuah port (default 5572) dan mendengarkan permintaan HTTP.

**Bagaimana RcloneView menggunakan RC API:**

RcloneView berkomunikasi dengan rclone secara eksklusif melalui antarmuka RC ini. Saat Anda mengklik tombol di GUI untuk memulai sinkronisasi, menelusuri direktori, atau memeriksa progres transfer, RcloneView mengirimkan permintaan HTTP ke RC API rclone di balik layar. Arsitektur ini berarti:

- RcloneView dapat mengontrol instance rclone yang berjalan di mesin remote
- Beberapa klien dapat terhubung ke instance rclone yang sama
- Semua operasi bersifat stateless dan dapat diotomatisasi
- GUI dan akses programatik menggunakan mekanisme dasar yang sama

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />

**Rclone tertanam vs. eksternal:**

Dalam mode tertanam, RcloneView memulai proses rclone-nya sendiri dan mengelola koneksi RC secara otomatis. Dalam mode eksternal, Anda menjalankan rclone secara terpisah dan mengarahkan RcloneView ke sana. Mode eksternal sangat penting untuk skenario manajemen remote, seperti mengontrol instance rclone yang berjalan di NAS atau server cloud.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />

## Menjalankan RC Daemon

Untuk menggunakan RC API, Anda memerlukan instance rclone yang berjalan dengan antarmuka RC diaktifkan.

**Startup dasar:**

```bash
rclone rcd --rc-addr :5572
```

Ini menjalankan RC daemon yang mendengarkan pada semua interface di port 5572 tanpa autentikasi. Ini hanya cocok untuk pengembangan lokal.

**Startup dengan autentikasi (direkomendasikan):**

```bash
rclone rcd --rc-addr :5572 --rc-user admin --rc-pass your-secure-password
```

**Dengan enkripsi TLS:**

```bash
rclone rcd --rc-addr :5572 \
  --rc-user admin \
  --rc-pass your-secure-password \
  --rc-cert /path/to/cert.pem \
  --rc-key /path/to/key.pem
```

**Dengan web GUI diaktifkan:**

```bash
rclone rcd --rc-addr :5572 --rc-web-gui --rc-user admin --rc-pass your-secure-password
```

**Flag startup umum:**

| Flag | Fungsi |
|------|---------|
| `--rc-addr` | Alamat dan port untuk mendengarkan |
| `--rc-user` / `--rc-pass` | Kredensial autentikasi dasar |
| `--rc-allow-origin` | Origin CORS untuk akses berbasis browser |
| `--rc-serve` | Menyajikan objek remote melalui RC API |
| `--rc-no-auth` | Menonaktifkan autentikasi (hanya untuk penggunaan lokal) |
| `--rc-cert` / `--rc-key` | Sertifikat TLS dan kunci privat |

**Memverifikasi daemon sedang berjalan:**

```bash
curl http://localhost:5572/rc/noop
# Respons yang diharapkan: {}
```

Jika autentikasi diaktifkan:

```bash
curl -u admin:your-secure-password http://localhost:5572/rc/noop
```

## Endpoint API Penting

RC API menyediakan puluhan endpoint yang diorganisasikan berdasarkan kategori. Berikut adalah yang paling penting untuk penggunaan sehari-hari.

**Operasi inti:**

```bash
# Mendapatkan versi rclone dan info build
curl -X POST http://localhost:5572/core/version

# Mendapatkan statistik transfer saat ini
curl -X POST http://localhost:5572/core/stats

# Mendapatkan statistik memori
curl -X POST http://localhost:5572/core/memstats

# Memicu garbage collection
curl -X POST http://localhost:5572/core/gc

# Mematikan rclone secara graceful
curl -X POST http://localhost:5572/core/quit
```

**Operasi sinkronisasi dan salin:**

```bash
# Menyalin file dari sumber ke tujuan
curl -X POST http://localhost:5572/sync/copy \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Documents", "dstFs": "s3:my-bucket/documents"}'

# Sinkronisasi (mirror) sumber ke tujuan
curl -X POST http://localhost:5572/sync/sync \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-backup"}'

# Memindahkan file dari sumber ke tujuan
curl -X POST http://localhost:5572/sync/move \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "local:/tmp/uploads", "dstFs": "s3:incoming-bucket"}'
```

**Operasi file:**

```bash
# Membuat daftar file dalam direktori
curl -X POST http://localhost:5572/operations/list \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents"}'

# Mendapatkan informasi tentang file tertentu
curl -X POST http://localhost:5572/operations/stat \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "Documents/report.pdf"}'

# Menghapus file
curl -X POST http://localhost:5572/operations/deletefile \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "temp/old-file.txt"}'

# Membuat direktori
curl -X POST http://localhost:5572/operations/mkdir \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "remote": "NewFolder"}'

# Mendapatkan info penggunaan disk
curl -X POST http://localhost:5572/operations/about \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:"}'
```

**Operasi mount:**

```bash
# Mount remote sebagai drive lokal
curl -X POST http://localhost:5572/mount/mount \
  -H "Content-Type: application/json" \
  -d '{"fs": "gdrive:", "mountPoint": "/mnt/gdrive"}'

# Membuat daftar mount yang aktif
curl -X POST http://localhost:5572/mount/listmounts

# Unmount
curl -X POST http://localhost:5572/mount/unmount \
  -H "Content-Type: application/json" \
  -d '{"mountPoint": "/mnt/gdrive"}'
```

## Memantau Transfer Secara Programatik

Salah satu penggunaan RC API yang paling berharga adalah pemantauan transfer secara real-time.

**Polling untuk statistik transfer:**

```bash
curl -X POST http://localhost:5572/core/stats
```

Ini mengembalikan objek JSON yang berisi:

```json
{
  "bytes": 1234567890,
  "checks": 150,
  "deletedDirs": 0,
  "deletes": 0,
  "elapsedTime": 45.2,
  "errors": 0,
  "eta": 120,
  "fatalError": false,
  "renames": 0,
  "speed": 27434842,
  "totalBytes": 9876543210,
  "totalChecks": 500,
  "totalTransfers": 200,
  "transferTime": 42.1,
  "transfers": 85,
  "transferring": [
    {
      "bytes": 52428800,
      "eta": 30,
      "group": "sync/copy",
      "name": "Photos/vacation-2025/IMG_4521.jpg",
      "percentage": 65,
      "size": 80530636,
      "speed": 1048576,
      "speedAvg": 983040
    }
  ]
}
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**Manajemen job:**

Setiap operasi async (sync, copy, move) membuat sebuah job yang dapat Anda lacak:

```bash
# Membuat daftar semua job yang sedang berjalan
curl -X POST http://localhost:5572/job/list

# Mendapatkan status job tertentu
curl -X POST http://localhost:5572/job/status \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'

# Menghentikan job yang sedang berjalan
curl -X POST http://localhost:5572/job/stop \
  -H "Content-Type: application/json" \
  -d '{"jobid": 1}'
```

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

**Membangun skrip pemantauan sederhana:**

```python
import requests
import time
import json

RC_URL = "http://localhost:5572"
AUTH = ("admin", "your-secure-password")

def get_stats():
    resp = requests.post(f"{RC_URL}/core/stats", auth=AUTH)
    return resp.json()

def monitor_transfers(interval=5):
    while True:
        stats = get_stats()
        speed_mb = stats.get("speed", 0) / 1024 / 1024
        transferred = stats.get("transfers", 0)
        total = stats.get("totalTransfers", 0)
        errors = stats.get("errors", 0)

        print(f"Speed: {speed_mb:.1f} MB/s | "
              f"Progress: {transferred}/{total} | "
              f"Errors: {errors}")

        if transferred >= total and total > 0:
            print("Transfer complete!")
            break

        time.sleep(interval)

monitor_transfers()
```

## Membangun Skrip Otomatisasi

RC API memungkinkan skenario otomatisasi andal yang melampaui apa yang bisa diberikan GUI saja.

**Pencadangan otomatis dengan penanganan error:**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

# Memulai pencadangan
RESPONSE=$(curl -s -u "$AUTH" -X POST "$RC_URL/sync/sync" \
  -H "Content-Type: application/json" \
  -d '{"srcFs": "gdrive:/Important", "dstFs": "b2:backup-bucket/important", "_async": true}')

JOBID=$(echo "$RESPONSE" | jq -r '.jobid')
echo "Started backup job: $JOBID"

# Memantau hingga selesai
while true; do
  STATUS=$(curl -s -u "$AUTH" -X POST "$RC_URL/job/status" \
    -H "Content-Type: application/json" \
    -d "{\"jobid\": $JOBID}")

  FINISHED=$(echo "$STATUS" | jq -r '.finished')
  SUCCESS=$(echo "$STATUS" | jq -r '.success')

  if [ "$FINISHED" = "true" ]; then
    if [ "$SUCCESS" = "true" ]; then
      echo "Backup completed successfully"
    else
      ERROR=$(echo "$STATUS" | jq -r '.error')
      echo "Backup failed: $ERROR"
      # Mengirim notifikasi peringatan
      curl -X POST "https://hooks.slack.com/services/YOUR/WEBHOOK/URL" \
        -d "{\"text\": \"Backup job $JOBID failed: $ERROR\"}"
    fi
    break
  fi

  sleep 10
done
```

**Orkestrasi sinkronisasi multi-remote:**

```python
import requests
import time

RC_URL = "http://localhost:5572"
AUTH = ("admin", "your-secure-password")

SYNC_JOBS = [
    {"srcFs": "gdrive:/Documents", "dstFs": "s3:backup/documents"},
    {"srcFs": "gdrive:/Photos", "dstFs": "b2:photo-archive"},
    {"srcFs": "onedrive:/Work", "dstFs": "s3:backup/work"},
]

def start_sync(src, dst):
    resp = requests.post(f"{RC_URL}/sync/sync", auth=AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    return resp.json().get("jobid")

def wait_for_job(jobid):
    while True:
        resp = requests.post(f"{RC_URL}/job/status", auth=AUTH,
                            json={"jobid": jobid})
        status = resp.json()
        if status.get("finished"):
            return status.get("success", False)
        time.sleep(5)

# Menjalankan semua sinkronisasi secara berurutan
for job in SYNC_JOBS:
    print(f"Syncing {job['srcFs']} -> {job['dstFs']}")
    jobid = start_sync(job["srcFs"], job["dstFs"])
    success = wait_for_job(jobid)
    print(f"  Result: {'Success' if success else 'Failed'}")
```

**Otomatisasi pelaporan penggunaan penyimpanan:**

```bash
#!/bin/bash
RC_URL="http://localhost:5572"
AUTH="admin:your-secure-password"

REMOTES=("gdrive:" "s3:my-bucket" "b2:my-bucket" "onedrive:")

echo "Storage Usage Report - $(date)"
echo "================================"

for REMOTE in "${REMOTES[@]}"; do
  RESULT=$(curl -s -u "$AUTH" -X POST "$RC_URL/operations/about" \
    -H "Content-Type: application/json" \
    -d "{\"fs\": \"$REMOTE\"}")

  TOTAL=$(echo "$RESULT" | jq -r '.total // "unlimited"')
  USED=$(echo "$RESULT" | jq -r '.used // "unknown"')
  FREE=$(echo "$RESULT" | jq -r '.free // "unknown"')

  echo "$REMOTE: Used=$USED, Free=$FREE, Total=$TOTAL"
done
```

## Integrasi Webhook dan Notifikasi

Kombinasikan RC API dengan webhook untuk membuat alur kerja berbasis event.

**Notifikasi Slack saat transfer selesai:**

```python
import requests
import time

RC_URL = "http://localhost:5572"
RC_AUTH = ("admin", "your-secure-password")
SLACK_WEBHOOK = "https://hooks.slack.com/services/YOUR/WEBHOOK/URL"

def notify_slack(message):
    requests.post(SLACK_WEBHOOK, json={"text": message})

def run_sync_with_notification(src, dst, label):
    # Memulai sinkronisasi
    resp = requests.post(f"{RC_URL}/sync/sync", auth=RC_AUTH,
                        json={"srcFs": src, "dstFs": dst, "_async": True})
    jobid = resp.json().get("jobid")
    notify_slack(f"Started: {label} (Job #{jobid})")

    # Menunggu penyelesaian
    while True:
        status = requests.post(f"{RC_URL}/job/status", auth=RC_AUTH,
                              json={"jobid": jobid}).json()
        if status.get("finished"):
            # Mendapatkan statistik akhir
            stats = requests.post(f"{RC_URL}/core/stats", auth=RC_AUTH).json()

            if status.get("success"):
                notify_slack(
                    f"Completed: {label}\n"
                    f"Files: {stats.get('transfers', 0)} | "
                    f"Size: {stats.get('bytes', 0) / 1024 / 1024:.1f} MB | "
                    f"Errors: {stats.get('errors', 0)}"
                )
            else:
                notify_slack(f"FAILED: {label}\nError: {status.get('error')}")
            break
        time.sleep(10)

run_sync_with_notification(
    "gdrive:/Backups", "b2:disaster-recovery",
    "Nightly Google Drive Backup"
)
```

**Endpoint health check untuk pemantauan uptime:**

Anda dapat menggunakan RC API sebagai endpoint health check untuk alat pemantauan seperti Uptime Kuma atau Healthchecks.io:

```bash
# Health check sederhana - mengembalikan 200 jika rclone sedang berjalan
curl -s -o /dev/null -w "%{http_code}" http://localhost:5572/rc/noop
```

Integrasikan ini ke dalam stack pemantauan Anda untuk menerima peringatan jika daemon rclone berhenti berjalan.

## Praktik Terbaik Keamanan

Saat mengekspos RC API, terutama melalui jaringan, keamanan sangatlah penting.

**Autentikasi:** Selalu gunakan `--rc-user` dan `--rc-pass` di lingkungan produksi. Jangan pernah menjalankan dengan `--rc-no-auth` pada interface yang dapat diakses melalui jaringan.

**Enkripsi TLS:** Gunakan `--rc-cert` dan `--rc-key` untuk mengenkripsi lalu lintas API. Sertifikat self-signed cocok untuk penggunaan internal; gunakan Let's Encrypt untuk instance yang menghadap publik.

**Pembatasan jaringan:** Bind ke localhost saat hanya akses lokal yang diperlukan:

```bash
rclone rcd --rc-addr 127.0.0.1:5572
```

Untuk akses remote, gunakan reverse proxy (nginx, Caddy) dengan terminasi TLS dan rate limiting yang tepat, alih-alih mengekspos rclone secara langsung.

**Aturan firewall:** Batasi akses ke port RC:

```bash
# Hanya mengizinkan IP tertentu
sudo ufw allow from 192.168.1.0/24 to any port 5572
```

**Alternatif autentikasi berbasis token:** Untuk skrip, pertimbangkan untuk menempatkan kredensial dalam variabel environment daripada meng-hardcode-nya:

```bash
export RCLONE_RC_USER="admin"
export RCLONE_RC_PASS="your-secure-password"
```

## Memulai

RC API rclone mengubah RcloneView dari aplikasi mandiri menjadi platform untuk membangun otomatisasi penyimpanan cloud. Baik Anda memerlukan pemantauan transfer sederhana, orkestrasi multi-remote yang kompleks, atau integrasi dengan toolchain DevOps yang sudah ada, RC API menyediakan fondasinya. Mulailah dengan mengaktifkan RC daemon, bereksperimen dengan `core/stats` dan `operations/list` untuk memahami format respons, lalu secara bertahap bangun alur kerja otomatis yang menangani tugas penyimpanan cloud rutin Anda tanpa intervensi manual.

---

**Panduan Terkait:**
- [Menjalankan dan Mengelola Job](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Pemantauan Transfer Real-Time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Menggunakan RcloneView dengan Rclone Eksternal](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
