---
slug: run-rcloneview-synology-nas-docker-rcloneview
title: "RcloneView auf Synology NAS ausführen — Cloud-Backup und Synchronisation von Ihrem NAS"
authors:
  - tayson
description: "Verwandeln Sie Ihr Synology NAS in eine Cloud-Backup-Zentrale. Erfahren Sie, wie Sie RcloneView mit Synology NAS für automatisierte Cloud-Synchronisation, Backup und Multi-Cloud-Verwaltung nutzen."
keywords:
  - rcloneview synology nas
  - synology cloud backup
  - synology cloud sync alternative
  - synology rclone
  - synology nas s3 backup
  - synology google drive sync
  - synology multi cloud
  - nas cloud backup tool
  - synology automated backup
  - synology nas cloud manager
tags:
  - RcloneView
  - synology
  - nas
  - backup
  - cloud-storage
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView auf Synology NAS ausführen — Cloud-Backup und Synchronisation von Ihrem NAS

> Ihr Synology NAS speichert Terabytes an unersetzlichen Daten. Synologys integriertes Cloud Sync funktioniert für einfache Setups, aber wenn Sie Multi-Cloud-Verwaltung, Zeitplanung, Ordnervergleich und Stapelverarbeitung benötigen — schließt RcloneView diese Lücken.

Synology NAS-Geräte eignen sich hervorragend für zentralisierten lokalen Speicher, aber ihre Cloud-Integration hat Grenzen. Synology Cloud Sync unterstützt etwa 20 Cloud-Anbieter mit grundlegender Synchronisation. Synology Hyper Backup übernimmt Backups, bietet jedoch keine Multi-Cloud-Dateiverwaltung. RcloneView ergänzt beide mit über 70 Cloud-Anbietern, visueller Dateiverwaltung und erweiterter Automatisierung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum RcloneView für Synology?

### Mehr als Synology Cloud Sync

| Funktion | Synology Cloud Sync | RcloneView |
|---------|-------------------|------------|
| Cloud-Anbieter | ~20 | 70+ |
| Zweispaltiger Datei-Explorer | ❌ | ✅ |
| Ordnervergleich | ❌ | ✅ |
| Cloud-zu-Cloud-Übertragung | ❌ | ✅ |
| Stapeljobs | ❌ | ✅ |
| Slack/Discord-Benachrichtigungen | ❌ | ✅ |
| Filterregeln | Basis | Vollständige rclone-Filter |
| Verschlüsselte Remotes | ❌ | ✅ (crypt) |
| Cloud-Laufwerke einbinden | ❌ | ✅ |
| S3-kompatible Anbieter | Eingeschränkt | Alle |

### Automatische Synology-Erkennung

RcloneView erkennt Synology NAS-Geräte in Ihrem Netzwerk automatisch:

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection" class="img-large img-center" />

Keine manuelle Netzwerkkonfiguration erforderlich.

## Einrichtungsoptionen

### Option 1: RcloneView auf einem Desktop, mit NAS verbunden

Der einfachste Ansatz. Führen Sie RcloneView auf Ihrem Windows-/Mac-/Linux-Desktop aus:

1. Fügen Sie Ihr Synology NAS als Remote hinzu (automatisch erkannt oder über SFTP/WebDAV).
2. Fügen Sie Ihre Cloud-Ziele hinzu (S3, B2, Google Drive usw.).
3. Erstellen Sie Synchronisations-/Kopierjobs zwischen NAS und Cloud.
4. Planen Sie Jobs für die automatische Ausführung.

Dies eignet sich gut für Privatanwender und kleine Büros.

### Option 2: RcloneView auf einem dedizierten Rechner

Nutzen Sie einen Raspberry Pi oder einen alten Laptop als dedizierten Backup-Controller:

1. Installieren Sie RcloneView auf dem dedizierten Rechner.
2. Verbinden Sie sich über eine Netzwerkfreigabe mit dem Synology NAS.
3. Konfigurieren und planen Sie alle Backup-Jobs.
4. Lassen Sie ihn rund um die Uhr laufen.

## Backup-Workflows

### NAS → Cloud (Offsite-Backup)

Der wichtigste Workflow. Sichern Sie Ihr NAS in einem Cloud-Speicher:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup NAS to cloud" class="img-large img-center" />

Empfohlene Ziele:

| NAS-Daten | Cloud-Ziel | Warum |
|----------|-------------|-----|
| Fotos & Videos | Backblaze B2 | Günstig, $6/TB |
| Dokumente | Google Drive | Zugänglich, durchsuchbar |
| Geschäftsdaten | AWS S3 | Langlebig, Enterprise-tauglich |
| Alles (verschlüsselt) | Beliebig + crypt | Zero-Knowledge-Backup |

### Cloud → NAS (lokaler Spiegel)

Behalten Sie lokale Kopien von Cloud-Daten für schnellen Zugriff:

```
Google Drive → NAS/CloudMirror/GoogleDrive/
OneDrive → NAS/CloudMirror/OneDrive/
```

### NAS → NAS (Backup an entferntem Standort)

Wenn Sie NAS-Geräte an zwei Standorten haben, synchronisieren Sie diese über RcloneView mit einem Cloud-Anbieter als Zwischenspeicher.

## Automatisierte Backups planen

Richten Sie nächtliche NAS-Backups ein:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS cloud backup" class="img-large img-center" />

### Empfohlener Zeitplan

| Job | Häufigkeit | Zeit |
|-----|-----------|------|
| Kritische Daten → B2 | Nächtlich | 2:00 Uhr |
| Fotos → Google Drive | Nächtlich | 3:00 Uhr |
| Vollständiges NAS → S3 | Wöchentlich | Samstag Mitternacht |
| Verifizierung (Vergleich) | Wöchentlich | Sonntag 6:00 Uhr |

## Backups verifizieren

Vergleichen Sie den Inhalt des NAS mit dem Cloud-Backup:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify NAS backup against cloud" class="img-large img-center" />

## Verschlüsselte NAS-Backups

Verwenden Sie crypt-Remotes, um Ihre NAS-Daten vor dem Hochladen in den Cloud-Speicher zu verschlüsseln. Der Cloud-Anbieter sieht Ihre unverschlüsselten Dateien nie.

## Stapeljobs für NAS-Administratoren

Automatisieren Sie Ihre gesamte NAS-Backup-Routine:

1. Kopieren Sie /photos → B2.
2. Kopieren Sie /documents → Google Drive.
3. Kopieren Sie /business → S3 (verschlüsselt).
4. Vergleichen Sie alle drei.
5. Benachrichtigen Sie über Slack.

Alles in einem geplanten Stapeljob.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Mit Ihrem Synology NAS verbinden** (automatisch erkannt).
3. **Cloud-Speicher-Remotes hinzufügen**.
4. **Backup-Jobs erstellen und planen**.
5. **Mit dem Ordnervergleich verifizieren**.

Ihre NAS-Daten sind wertvoll. Geben Sie ihnen ein Offsite-Sicherheitsnetz.

---

**Verwandte Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Zeitplanung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Cloud-Backups verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
