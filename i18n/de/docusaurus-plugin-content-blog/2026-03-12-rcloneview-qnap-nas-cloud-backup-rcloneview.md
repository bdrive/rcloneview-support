---
slug: rcloneview-qnap-nas-cloud-backup-rcloneview
title: "RcloneView mit QNAP NAS nutzen — Cloud-Backup und Multi-Cloud-Synchronisation für Ihr NAS"
authors:
  - tayson
description: "QNAP-NAS-Besitzer können RcloneView für Cloud-Backups zu S3, B2, Google Drive und mehr nutzen. Erfahren Sie, wie Sie Backups von Ihrem QNAP NAS verbinden, synchronisieren und automatisieren."
keywords:
  - qnap cloud backup
  - qnap nas rclone
  - qnap cloud sync
  - qnap s3 backup
  - qnap google drive sync
  - qnap multi cloud
  - qnap nas cloud storage
  - qnap backup tool
  - qnap rcloneview
  - qnap automated backup
tags:
  - qnap
  - nas
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView mit QNAP NAS nutzen — Cloud-Backup und Multi-Cloud-Synchronisation für Ihr NAS

> QNAP-NAS-Geräte speichern Ihre wichtigsten Daten lokal. Doch rein lokale Speicherung bedeutet auch ein rein lokales Risiko — Hardwareausfall, Feuer, Diebstahl oder Wasserschaden können alles zerstören. Cloud-Backup über RcloneView bietet zusätzlichen Offsite-Schutz mit über 70 Cloud-Anbietern.

QNAP NAS bietet integrierte Cloud-Synchronisation über HBS 3 (Hybrid Backup Sync), doch die Unterstützung für Cloud-Anbieter ist im Vergleich zu den über 70 Anbietern von rclone begrenzt. RcloneView, ausgeführt auf einem Desktop oder einem dedizierten, mit Ihrem QNAP verbundenen Gerät, verschafft Ihnen Zugriff auf jeden von rclone unterstützten Anbieter — plus visuelles Management, Ordnervergleich und Batch-Jobs.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## QNAP mit RcloneView verbinden

### Über Netzwerkfreigabe (SMB/CIFS)

Greifen Sie von dem Computer, auf dem RcloneView läuft, auf Ihre QNAP-Freigabeordner zu. Binden Sie Ihre QNAP-Freigaben als Netzlaufwerke ein und nutzen Sie sie anschließend als lokale Quellen in RcloneView-Jobs.

### Über SFTP

Fügen Sie Ihr QNAP als SFTP-Remote hinzu:

1. Aktivieren Sie SFTP auf Ihrem QNAP (Systemsteuerung → Netzwerk & Dateidienste → Telnet/SSH).
2. Fügen Sie in RcloneView ein SFTP-Remote mit der IP-Adresse und den Zugangsdaten Ihres QNAP hinzu.

<img src="/support/images/en/blog/new-remote.png" alt="Add QNAP NAS as remote" class="img-large img-center" />

## Backup-Workflows

### QNAP → Backblaze B2

Kostengünstiges Offsite-Backup für 6 $/TB/Monat:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup QNAP to B2" class="img-large img-center" />

### QNAP → AWS S3

Enterprise-taugliche Datensicherheit für geschäftskritische Daten.

### QNAP → Google Drive

Machen Sie NAS-Dateien über Google Drive für die Zusammenarbeit zugänglich.

### Nächtliche Backups planen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule QNAP backup" class="img-large img-center" />

## Backups überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify QNAP backup" class="img-large img-center" />

## QNAP HBS 3 im Vergleich zu RcloneView

| Funktion | QNAP HBS 3 | RcloneView |
|---------|-----------|------------|
| Cloud-Anbieter | ~15 | 70+ |
| Läuft direkt auf dem NAS | ✅ | Auf verbundenem Gerät |
| Zweigeteilter Explorer | ❌ | ✅ |
| Ordnervergleich | ❌ | ✅ |
| Batch-Jobs | ❌ | ✅ |
| Benachrichtigungen | E-Mail | Slack/Discord/Telegram |
| Verschlüsselte Remotes | Eingeschränkt | ✅ (crypt) |

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Mit QNAP verbinden** über Netzwerkfreigabe oder SFTP.
3. **Cloud-Backup-Ziele hinzufügen**.
4. **Automatisierte Backups planen**.
5. **Mit Ordnervergleich überprüfen**.

Ihre NAS-Daten verdienen Offsite-Schutz.

---

**Verwandte Anleitungen:**

- [RcloneView auf Synology NAS](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
