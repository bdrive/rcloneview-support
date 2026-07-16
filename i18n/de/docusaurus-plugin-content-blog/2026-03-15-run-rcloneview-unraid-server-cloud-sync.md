---
slug: run-rcloneview-unraid-server-cloud-sync
title: "RcloneView auf Unraid ausführen — Cloud-Backup und Multi-Cloud-Synchronisation für Ihren Server"
authors:
  - tayson
description: "Unraid macht Server für Zuhause und kleine Unternehmen einfach. Fügen Sie RcloneView über Docker hinzu, um Ihre Unraid-Freigaben mit Cloud-Speicher zu synchronisieren – für Offsite-Backup und Multi-Cloud-Verwaltung."
keywords:
  - unraid cloud backup
  - unraid rclone
  - unraid cloud sync
  - unraid rcloneview
  - unraid s3 backup
  - unraid google drive
  - unraid offsite backup
  - unraid docker cloud sync
  - unraid backup solution
  - unraid multi cloud
tags:
  - RcloneView
  - nas
  - docker
  - platform
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf Unraid ausführen — Cloud-Backup und Multi-Cloud-Synchronisation für Ihren Server

> Unraid ist hervorragend für lokalen Speicher geeignet. Aber Parity-Laufwerke schützen nicht vor Bränden, Diebstahl oder Ransomware. Fügen Sie RcloneView hinzu, um Ihre Freigaben mit einem visuellen Dateimanager in der Cloud zu sichern.

Unraid ist eine der beliebtesten Serverplattformen für Zuhause und kleine Unternehmen. Der paritätsbasierte Speicher schützt vor Laufwerksausfällen, doch lokaler Schutz allein reicht nicht aus. Für echte Datensicherheit benötigen Sie Offsite-Backups. RcloneView läuft als Docker-Container auf Unraid und ergänzt Ihren Server um visuelle Cloud-Verwaltung und automatisierte Backup-Funktionen.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Unraid + RcloneView?

Die Community Apps von Unraid enthalten grundlegende rclone-Plugins, die jedoch oft nur über die Kommandozeile bedienbar oder in ihrem Funktionsumfang eingeschränkt sind. RcloneView bietet:

- **Visueller Dateibrowser** — sehen Sie Ihre Unraid-Freigaben neben dem Cloud-Speicher
- **70+ Cloud-Anbieter** — verbinden Sie sich von Ihrem Unraid-Server aus mit jeder Cloud
- **Geplante Backups** — automatisieren Sie den Offsite-Schutz
- **Ordnervergleich** — überprüfen Sie die Integrität Ihrer Backups
- **Verschlüsselte Backups** — Crypt-Remotes halten Ihre Daten privat

## Installation über Docker

RcloneView läuft als Docker-Container auf Unraid. Installieren Sie ihn über Community Apps oder konfigurieren Sie den Container manuell.

Binden Sie Ihre Unraid-Freigaben als Volumes ein, damit RcloneView auf Ihre Daten zugreifen kann.

## Wichtige Workflows

### Freigaben in der Cloud sichern

Öffnen Sie Ihre Unraid-Freigaben in einem Bereich und den Cloud-Speicher im anderen. Erstellen Sie Backup-Jobs für kritische Daten:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Unraid to cloud backup" class="img-large img-center" />

### Nächtliche Offsite-Backups planen

Richten Sie automatisierte Backups ein, die jede Nacht ausgeführt werden, während Ihr Server im Leerlauf ist:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Unraid backups" class="img-large img-center" />

### Backup-Integrität überprüfen

Parity schützt lokale Daten. Verwenden Sie den Ordnervergleich, um Cloud-Backups zu überprüfen:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Unraid backup" class="img-large img-center" />

### Sensible Daten verschlüsseln

Verwenden Sie Crypt-Remotes, um Backups zu verschlüsseln, bevor sie Ihren Server verlassen. Ihr Cloud-Anbieter sieht niemals unverschlüsselte Daten.

### Multi-Cloud-Backup-Strategie

Sichern Sie auf zwei Anbieter für maximalen Schutz:

| Freigabe | Primäres Backup | Sekundäres Backup |
|-------|---------------|-----------------|
| Documents | Google Drive | Backblaze B2 |
| Media | Backblaze B2 | Wasabi |
| Photos | Google Photos (via Drive) | S3 |
| Appdata | B2 | S3 Glacier |

## Ihre Backups überwachen

Überprüfen Sie den Job-Verlauf, um sicherzustellen, dass Backups erfolgreich abgeschlossen werden:

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## Erste Schritte

1. **Installieren Sie RcloneView** als Docker-Container auf Unraid.
2. **Binden Sie Ihre Freigaben** als Container-Volumes ein.
3. **Fügen Sie Cloud-Konten** im Remote-Manager hinzu.
4. **Erstellen Sie Backup-Jobs** für kritische Freigaben.
5. **Planen und verifizieren Sie** mit dem Ordnervergleich.

Parity schützt vor Laufwerksausfällen. Cloud-Backups schützen vor allem anderen.

---

**Verwandte Anleitungen:**

- [RcloneView in Docker ausführen](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [RcloneView auf TrueNAS ausführen](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [NAS auf mehrere Clouds sichern](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
