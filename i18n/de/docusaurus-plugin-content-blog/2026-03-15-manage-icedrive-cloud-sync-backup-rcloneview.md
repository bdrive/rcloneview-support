---
slug: manage-icedrive-cloud-sync-backup-rcloneview
title: "Icedrive Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView"
authors:
  - tayson
description: "Icedrive bietet günstigen Cloud-Speicher mit einer übersichtlichen Oberfläche, aber begrenzte Synchronisationsoptionen. Nutzen Sie RcloneView, um Icedrive mit Google Drive, S3 und über 70 weiteren Anbietern zu synchronisieren."
keywords:
  - icedrive sync
  - icedrive backup
  - icedrive rclone
  - icedrive file manager
  - icedrive to google drive
  - icedrive alternative sync
  - icedrive cloud management
  - icedrive multi cloud
  - icedrive transfer tool
  - icedrive desktop sync
tags:
  - RcloneView
  - cloud-storage
  - sync
  - backup
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Icedrive Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView

> Icedrive gewinnt durch seine günstigen Tarife und das übersichtliche Design an Beliebtheit. Doch die Synchronisationsmöglichkeiten sind auf die eigenen Apps beschränkt. RcloneView öffnet Icedrive für das breitere Cloud-Ökosystem.

Icedrive hat sich als attraktive Cloud-Speicher-Option etabliert — günstige Preise, Zero-Knowledge-Verschlüsselung in kostenpflichtigen Tarifen und eine moderne Oberfläche. Allerdings sind die Synchronisations- und Integrationsmöglichkeiten von Icedrive auf die eigenen Desktop- und Mobil-Apps beschränkt. Wenn Sie Icedrive mit Google Drive synchronisieren, ein Backup auf S3 anlegen oder Icedrive zusammen mit anderen Cloud-Konten verwalten möchten, schließt RcloneView diese Lücke über die WebDAV-Unterstützung von Icedrive.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Icedrive mit RcloneView verbinden

Icedrive unterstützt WebDAV-Verbindungen in kostenpflichtigen Tarifen. Fügen Sie es als WebDAV-Remote in RcloneView hinzu:

<img src="/support/images/en/blog/new-remote.png" alt="Icedrive über WebDAV hinzufügen" class="img-large img-center" />

Nach der Verbindung erscheint Ihr Icedrive-Speicher im Zwei-Fenster-Explorer neben all Ihren anderen Cloud-Konten.

## Warum RcloneView mit Icedrive verwenden?

### Cloud-übergreifende Synchronisation

Die eigene App von Icedrive synchronisiert nur mit Ihrem lokalen Rechner. Mit RcloneView können Sie Icedrive direkt mit Google Drive, OneDrive, S3, Dropbox oder jedem anderen Anbieter synchronisieren:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Icedrive cloud-übergreifende Synchronisation" class="img-large img-center" />

### Automatisierte Backups

Planen Sie regelmäßige Backups von Icedrive in eine zweite Cloud zur Redundanz:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Icedrive-Backup planen" class="img-large img-center" />

### Multi-Cloud-Verwaltung

Durchsuchen und verwalten Sie Icedrive-Dateien zusammen mit all Ihrem anderen Speicher, ohne die App zu wechseln.

### Backup-Verifizierung

Nutzen Sie den Ordnervergleich, um zu überprüfen, dass Ihre Icedrive-Backups vollständig sind:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Icedrive-Backup verifizieren" class="img-large img-center" />

## Häufige Workflows

### Icedrive als günstiger Speicher, Google Drive für die Zusammenarbeit

Speichern Sie große Dateien und Archive auf Icedrive (günstiger pro TB). Synchronisieren Sie Arbeitsdokumente mit Google Drive für den Team-Zugriff.

### Icedrive auf B2 sichern

Führen Sie ein zweites Backup auf Backblaze B2, falls Icedrive Probleme hat. Geplante nächtliche Synchronisationen halten beide Kopien aktuell.

### Zu oder von Icedrive migrieren

Wechseln Sie von Dropbox oder Google Drive zu Icedrive? Übertragen Sie alles mit dem Zwei-Fenster-Drag-and-Drop von RcloneView.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Icedrive hinzufügen** als WebDAV-Remote (erfordert einen kostenpflichtigen Icedrive-Tarif).
3. **Zusammen durchsuchen** mit Ihren anderen Cloud-Konten.
4. **Synchronisieren und sichern** mit geplanten Jobs.

Günstiger Speicher, unbegrenzte Konnektivität.

---

**Verwandte Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Versteckte Cloud-Speicherkosten](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
