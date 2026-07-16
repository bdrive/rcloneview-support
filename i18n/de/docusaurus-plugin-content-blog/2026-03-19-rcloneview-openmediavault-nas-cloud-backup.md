---
slug: rcloneview-openmediavault-nas-cloud-backup
title: "RcloneView auf OpenMediaVault ausführen — Cloud-Backup für Ihr DIY-NAS"
authors:
  - tayson
description: "OpenMediaVault verwandelt jeden PC in ein NAS. Fügen Sie RcloneView über Docker hinzu, um Ihre OMV-Freigaben mit Cloud-Speicher zu synchronisieren – für Offsite-Backups und Multi-Cloud-Verwaltung."
keywords:
  - openmediavault cloud backup
  - openmediavault rclone
  - omv cloud sync
  - openmediavault s3 backup
  - omv rcloneview
  - openmediavault offsite backup
  - omv google drive
  - openmediavault docker rclone
  - diy nas cloud backup
  - omv backup solution
tags:
  - nas
  - docker
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf OpenMediaVault ausführen — Cloud-Backup für Ihr DIY-NAS

> OpenMediaVault (OMV) bietet Ihnen ein leistungsstarkes NAS auf preiswerter Hardware. Aber lokaler Speicher allein ist nicht sicher. Fügen Sie RcloneView hinzu, um Ihre NAS-Daten für die Notfallwiederherstellung in die Cloud zu übertragen.

OpenMediaVault ist das bevorzugte NAS-Betriebssystem für DIY-Bastler — betreiben Sie es auf einem alten PC, einem Raspberry Pi oder speziell dafür gebauter Hardware. Es bietet RAID, SMB/NFS-Freigabe und eine Weboberfläche. Was es nicht bietet, ist ein Cloud-Backup. RcloneView schließt diese Lücke, läuft als Docker-Container auf OMV und synchronisiert Ihre Freigaben mit mehr als 70 Cloud-Anbietern.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum OMV + RcloneView?

Die integrierten Funktionen von OMV verwalten lokalen Speicher gut, aber die Cloud-Integration ist begrenzt. RcloneView ergänzt:

- **70+ Cloud-Anbieter** — Google Drive, S3, B2, Wasabi und mehr
- **Visuelle Dateiverwaltung** — NAS neben Cloud-Speicher durchsuchen
- **Geplante Backups** — automatisierter Offsite-Schutz
- **Verifizierung** — Ordnervergleich bestätigt die Integrität des Backups
- **Verschlüsselung** — Crypt-Remotes für private Backups

## Installation über Docker

OMV unterstützt Docker über das omv-extras-Plugin. Führen Sie RcloneView als Container aus, mit Ihren freigegebenen Ordnern als eingebundene Volumes.

## Wichtige Workflows

### Freigaben in die Cloud sichern

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OMV to cloud backup" class="img-large img-center" />

### Nächtliche Offsite-Backups planen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OMV backup" class="img-large img-center" />

### Backup-Integrität überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OMV backup" class="img-large img-center" />

### Sensible Daten verschlüsseln

Verwenden Sie Crypt-Remotes, um Backups zu verschlüsseln, bevor sie Ihr Netzwerk verlassen.

## Empfohlene Konfiguration

| OMV-Freigabe | Backup-Ziel | Zeitplan |
|-----------|-------------------|----------|
| Dokumente | Google Drive | Alle 6 Stunden |
| Fotos | Backblaze B2 | Nächtlich |
| Medien | Wasabi | Nächtlich |
| Systemkonfiguration | B2 | Wöchentlich |

## Erste Schritte

1. **Docker installieren** auf OMV über omv-extras.
2. **RcloneView bereitstellen** als Container.
3. **Freigaben einbinden** als Container-Volumes.
4. **Cloud-Konten hinzufügen** und Backup-Jobs erstellen.
5. **Planen und verifizieren**.

DIY-NAS, professionelles Cloud-Backup.

---

**Verwandte Anleitungen:**

- [RcloneView in Docker ausführen](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [RcloneView auf TrueNAS ausführen](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [RcloneView auf Unraid ausführen](https://rcloneview.com/support/blog/run-rcloneview-unraid-server-cloud-sync)

<CloudSupportGrid />
