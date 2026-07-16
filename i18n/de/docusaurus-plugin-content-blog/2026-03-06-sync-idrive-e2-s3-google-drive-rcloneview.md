---
slug: sync-idrive-e2-s3-google-drive-rcloneview
title: "IDrive e2 Object Storage mit AWS S3 oder Google Drive über RcloneView synchronisieren"
authors:
  - tayson
description: "Verwalten Sie IDrive e2 Object Storage visuell — durchsuchen Sie Buckets, synchronisieren Sie mit AWS S3 oder Google Drive und planen Sie Backups mit der S3-kompatiblen Verbindung von RcloneView."
keywords:
  - idrive e2 sync
  - idrive e2 backup
  - idrive e2 gui tool
  - idrive e2 to s3
  - idrive e2 rclone
  - idrive e2 file manager
  - idrive e2 mount local drive
  - idrive e2 google drive
  - idrive e2 object storage
  - s3 compatible storage gui
tags:
  - idrive-e2
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IDrive e2 Object Storage mit AWS S3 oder Google Drive über RcloneView synchronisieren

> IDrive e2 bietet unglaublich günstigen S3-kompatiblen Speicher für 0,004 $/GB/Monat. Doch ohne Desktop-Sync-Client bedeutet die Dateiverwaltung API-Aufrufe oder das Web-UI. RcloneView bietet Ihnen eine vollständige visuelle Oberfläche.

IDrive e2 ist einer der kostengünstigsten S3-kompatiblen Object-Storage-Dienste überhaupt — günstiger als Backblaze B2, Wasabi und AWS S3. Es eignet sich ideal für Backups, Archive und Cold Storage. Doch wie die meisten Object-Storage-Anbieter fehlt IDrive e2 ein nativer Desktop-Client. RcloneView verbindet sich über die S3-API und bietet Ihnen visuelle Dateiverwaltung, Cloud-zu-Cloud-Synchronisation und geplante Automatisierung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum IDrive e2?

| Anbieter | Kosten pro TB/Monat | Egress |
|----------|-------------------|--------|
| IDrive e2 | $4.00 | Kostenlos (3x Speicherplatz) |
| Backblaze B2 | $6.00 | $0.01/GB |
| Wasabi | $6.99 | Kostenlos |
| AWS S3 Standard | $23.00 | $0.09/GB |

Die Preisgestaltung von IDrive e2 macht es zu einer überzeugenden Wahl für alle, die günstigen, zuverlässigen Object Storage benötigen.

## IDrive e2 verbinden

Da IDrive e2 S3-kompatibel ist:

1. Klicken Sie auf **Add Remote** → wählen Sie **Amazon S3**.
2. Wählen Sie **IDrive e2** oder **Other** aus dem S3-Provider-Dropdown.
3. Geben Sie Ihre Zugangsdaten ein:
   - **Access Key** und **Secret Key** aus dem IDrive e2 Dashboard.
   - **Endpoint**: Ihr regionaler Endpunkt (z. B. `https://s3.us-west-1.idrivecloud.io`).
4. Speichern — Ihre e2-Buckets sind nun durchsuchbar.

<img src="/support/images/en/blog/new-remote.png" alt="Add IDrive e2 as S3-compatible remote" class="img-large img-center" />

## Durchsuchen und Verwalten

Zeigen Sie IDrive e2 Buckets neben jeder anderen Cloud an:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse IDrive e2 buckets" class="img-large img-center" />

## Sync-Szenarien

### Google Drive → IDrive e2 (Günstiges Backup)

Nutzen Sie e2 als kostengünstiges Backup für Ihr Google Drive:

1. Erstellen Sie einen Copy-Job: Google Drive → IDrive e2 Bucket.
2. Planen Sie ihn nächtlich mit [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Zahlen Sie nur einen Bruchteil dessen, was Google für dieselben Daten verlangt.

### IDrive e2 → AWS S3 (Cloud-übergreifende Redundanz)

1. Erstellen Sie einen Sync-Job: IDrive e2 → S3 Bucket.
2. Erhalten Sie Redundanz über zwei verschiedene S3-kompatible Anbieter hinweg.

### Lokal/NAS → IDrive e2 (Offsite-Archiv)

1. Erstellen Sie einen Copy-Job: Lokaler Ordner oder NAS → IDrive e2.
2. Perfekt für Offsite-Backups zu minimalen Kosten.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run IDrive e2 sync job" class="img-large img-center" />

## Als lokales Laufwerk einbinden

Greifen Sie auf IDrive e2 wie auf einen gewöhnlichen Ordner zu:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount IDrive e2 as local drive" class="img-large img-center" />

## Automatisieren und Überwachen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule IDrive e2 backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor IDrive e2 transfers" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **IDrive e2 hinzufügen** als S3-kompatibles Remote.
3. **Durchsuchen, einbinden oder synchronisieren** zu jedem beliebigen Ziel.
4. **Planen** für automatisiertes, kostengünstiges Cloud-Backup.

IDrive e2 ist der Budget-König unter den Object-Storage-Anbietern. RcloneView verschafft ihm das Desktop-Erlebnis, das er verdient.

---

**Weiterführende Anleitungen:**

- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Cloud-Speicher als lokales Laufwerk einbinden](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
