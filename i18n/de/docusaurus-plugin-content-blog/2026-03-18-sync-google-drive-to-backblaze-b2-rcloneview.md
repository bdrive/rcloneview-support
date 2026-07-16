---
slug: sync-google-drive-to-backblaze-b2-rcloneview
title: "Google Drive mit Backblaze B2 synchronisieren — Erschwingliches Cloud-zu-Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Google Drive für die tägliche Arbeit, Backblaze B2 für erschwingliches Backup. Erfahren Sie, wie Sie mit RcloneView ein automatisiertes Cloud-zu-Cloud-Backup von Google Drive zu B2 einrichten."
keywords:
  - google drive to backblaze b2
  - google drive backup b2
  - sync google drive b2
  - google drive cloud backup
  - backblaze b2 backup tool
  - google drive offsite backup
  - google drive b2 sync
  - affordable google drive backup
  - cloud to cloud backup google
  - google drive redundancy
tags:
  - RcloneView
  - google-drive
  - backblaze-b2
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive mit Backblaze B2 synchronisieren — Erschwingliches Cloud-zu-Cloud-Backup mit RcloneView

> Google Drive speichert Ihre Arbeit. Backblaze B2 schützt sie für 6 $/TB/Monat. Zusammen bilden sie eine der kosteneffizientesten Cloud-Backup-Strategien überhaupt.

Google Drive ist der Ort, an dem Ihre Dateien tagtäglich leben. Aber Google Drive allein ist kein Backup — versehentliche Löschungen, kompromittierte Konten und Synchronisationsfehler können Daten zerstören, die Google nicht wiederherstellen kann. Backblaze B2 bietet für 6 $/TB/Monat das Sicherheitsnetz: eine unabhängige Kopie von allem, automatisch aktualisiert durch RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum B2 für das Google-Drive-Backup?

| Faktor | Backblaze B2 |
|--------|-------------|
| Speicherkosten | 6 $/TB/Monat |
| Download-Kosten | 0,01 $/GB |
| Kostenloser Egress | 3x Speichervolumen/Monat |
| Haltbarkeit | 99,999999999 % |
| API | S3-kompatibel |

B2 wurde speziell für Backup-Workloads entwickelt: günstiger Speicher, Pay-as-you-go und S3-kompatibel für universelle Tool-Unterstützung.

## Das Backup einrichten

<img src="/support/images/en/blog/new-remote.png" alt="Connect Google Drive and B2" class="img-large img-center" />

Fügen Sie sowohl Google Drive als auch Backblaze B2 als Remotes in RcloneView hinzu.

## Den Backup-Job erstellen

Öffnen Sie Google Drive in einem Fenster und B2 im anderen. Erstellen Sie einen Copy-Job:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to B2" class="img-large img-center" />

Verwenden Sie **Copy** (nicht Sync), damit aus Google Drive gelöschte Dateien in B2 erhalten bleiben.

## Nächtliche Backups planen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly backup" class="img-large img-center" />

Jeder Durchlauf überträgt nur neue und geänderte Dateien. Tägliche Backups eines typischen Google-Drive-Kontos verbrauchen nur minimale Bandbreite.

## Backup-Integrität überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup" class="img-large img-center" />

## Verschlüsselung hinzufügen

Für sensible Daten legen Sie einen Crypt-Remote über B2. Dateien werden verschlüsselt, bevor sie Ihren Rechner verlassen — Backblaze sieht niemals unverschlüsselte Daten.

## Kostenbeispiel

| Größe von Google Drive | Monatliche B2-Kosten |
|-------------------------|------------------------|
| 100 GB | 0,60 $ |
| 500 GB | 3,00 $ |
| 1 TB | 6,00 $ |
| 5 TB | 30,00 $ |

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Google Drive** und **Backblaze B2** als Remotes hinzufügen.
3. **Einen Copy-Job** für das Backup erstellen.
4. **Nächtliche Durchläufe planen**.
5. **Ruhig schlafen**, im Wissen, dass Ihre Dateien geschützt sind.

Tägliche Arbeit auf Drive. Nächtliches Backup auf B2.

---

**Verwandte Anleitungen:**

- [Dropbox zu Backblaze B2 sichern](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Dropbox mit S3-Backup synchronisieren](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [Cloud-Backups verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
