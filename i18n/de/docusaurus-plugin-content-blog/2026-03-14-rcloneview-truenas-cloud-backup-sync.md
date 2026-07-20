---
slug: rcloneview-truenas-cloud-backup-sync
title: "RcloneView auf TrueNAS für Cloud-Backup und Multi-Cloud-Synchronisation ausführen"
authors:
  - tayson
description: "TrueNAS ist für lokalen Speicher konzipiert. Mit RcloneView erweitern Sie es in die Cloud — sichern Sie Datasets nach S3, synchronisieren Sie Pools mit Google Drive und verwalten Sie Multi-Cloud-Speicher direkt von Ihrem NAS aus."
keywords:
  - truenas cloud backup
  - truenas rclone
  - truenas cloud sync
  - truenas s3 backup
  - truenas google drive
  - truenas offsite backup
  - truenas rcloneview
  - truenas cloud storage
  - freenas cloud sync
  - truenas multi cloud
tags:
  - RcloneView
  - nas
  - platform
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf TrueNAS für Cloud-Backup und Multi-Cloud-Synchronisation ausführen

> TrueNAS bietet mit ZFS absolut zuverlässigen lokalen Speicher. Aber lokaler Speicher allein ist keine Backup-Strategie. Mit RcloneView synchronisieren Sie Ihre NAS-Datasets über einen visuellen Dateimanager in die Cloud.

TrueNAS (früher FreeNAS) ist eines der beliebtesten NAS-Betriebssysteme und wird wegen seiner durch ZFS gewährleisteten Datenintegrität geschätzt. Doch ZFS schützt vor Laufwerksausfällen, nicht vor Bränden, Diebstahl, Ransomware oder Katastrophen, die den gesamten Standort betreffen. Für echten Datenschutz benötigen Sie Offsite-Backups. RcloneView ergänzt Ihr TrueNAS-Setup um eine visuelle Cloud-Verwaltung und macht es einfach, Datasets mit über 70 Cloud-Anbietern zu synchronisieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum TrueNAS + RcloneView?

TrueNAS enthält eine grundlegende Cloud-Sync-Task-Funktion, die jedoch im Umfang begrenzt und schwer zu debuggen ist. RcloneView bietet:

- **Visuelles Datei-Browsing** — sehen Sie Ihre TrueNAS-Dateien neben Ihrem Cloud-Speicher
- **70+ Cloud-Anbieter** — weit mehr, als TrueNAS Cloud Sync nativ unterstützt
- **Ordnervergleich** — überprüfen Sie, ob Backups vollständig und korrekt sind
- **Job-Planung** — flexible Zeitplanung mit Überwachung
- **Verschlüsselte Backups** — Crypt-Remotes für Zero-Knowledge-Verschlüsselung

## Bereitstellungsoptionen

### Docker-Container (empfohlen)

Führen Sie RcloneView als Docker-Container auf TrueNAS SCALE aus. Dies ist der sauberste Ansatz — isoliert vom Host-System und mit einfachen Updates.

### Direkte Installation

Auf TrueNAS SCALE (Linux-basiert) können Sie RcloneView direkt installieren. TrueNAS CORE (FreeBSD-basiert) sollte den Docker-Ansatz über eine VM oder Jail verwenden.

## Wichtige Workflows

### Datasets nach S3 oder B2 sichern

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="TrueNAS to cloud backup" class="img-large img-center" />

Durchsuchen Sie Ihre TrueNAS-Datasets in einem Fensterbereich und den Cloud-Speicher im anderen. Erstellen Sie Sync-Jobs, die kritische Datasets nach Backblaze B2, AWS S3 oder Wasabi sichern.

### Nächtliche Backups planen

Richten Sie automatisierte nächtliche Backups ein, damit Ihre Cloud-Kopie stets aktuell bleibt:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS backup" class="img-large img-center" />

### Backup-Integrität überprüfen

ZFS-Prüfsummen schützen lokale Daten. Nutzen Sie den Ordnervergleich, um zu überprüfen, ob die Cloud-Backups mit Ihrem NAS übereinstimmen:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup" class="img-large img-center" />

### Vor dem Hochladen verschlüsseln

Schützen Sie sensible NAS-Daten mit Crypt-Remotes. Ihr Backup-Anbieter kann die Dateien nicht lesen — nur Sie besitzen die Verschlüsselungsschlüssel.

### Multi-Cloud-Redundanz

Sichern Sie gleichzeitig bei zwei oder mehr Anbietern. Fällt ein Anbieter aus, sind Ihre Daten beim anderen sicher.

## Empfohlene Backup-Strategie

| Datentyp | Cloud-Tier | Zeitplan |
|-----------|-----------|----------|
| Kritische Dokumente | S3 Standard | Alle 6 Stunden |
| Medienbibliothek | Backblaze B2 | Nächtlich |
| Archive | S3 Glacier | Wöchentlich |

## Erste Schritte

1. **RcloneView installieren** per Docker auf TrueNAS SCALE.
2. **Cloud-Konten hinzufügen** im Remote-Manager.
3. **Backup-Jobs erstellen** für kritische Datasets.
4. **Planen und überprüfen** mit dem Ordnervergleich.

ZFS schützt Ihre Daten lokal. RcloneView schützt sie überall sonst.

---

**Verwandte Anleitungen:**

- [RcloneView in Docker ausführen](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [NAS auf mehrere Clouds sichern](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [Cloud-Backups verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
