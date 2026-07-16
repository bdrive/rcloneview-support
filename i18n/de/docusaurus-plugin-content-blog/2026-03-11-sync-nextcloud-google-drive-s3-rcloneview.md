---
slug: sync-nextcloud-google-drive-s3-rcloneview
title: "Nextcloud mit Google Drive, S3 und anderen Clouds synchronisieren mit RcloneView"
authors:
  - tayson
description: "Nextcloud ist eine führende selbst gehostete Cloud-Plattform. Erfahren Sie, wie Sie Nextcloud mit Google Drive, AWS S3 oder Backblaze B2 synchronisieren und sichern – mit RcloneView."
keywords:
  - nextcloud sync
  - nextcloud backup cloud
  - nextcloud rclone
  - nextcloud google drive
  - nextcloud s3 backup
  - nextcloud external storage
  - sync nextcloud files
  - nextcloud migration
  - nextcloud multi cloud
  - nextcloud off site backup
tags:
  - RcloneView
  - nextcloud
  - self-hosted
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud mit Google Drive, S3 und anderen Clouds synchronisieren mit RcloneView

> Nextcloud gibt Ihnen volle Kontrolle über Ihre Daten. Doch selbst gehostet bedeutet auch selbst gesichert. RcloneView verbindet Nextcloud mit über 70 Cloud-Anbietern für Off-Site-Backup, Migration und Multi-Cloud-Workflows.

Nextcloud ist die beliebteste selbst gehostete Cloud-Plattform und wird von Millionen Nutzern für Datei-Synchronisation, Zusammenarbeit und datenschutzorientierten Speicher verwendet. Doch wenn Nextcloud auf der eigenen Infrastruktur läuft, sind Sie selbst für Backups, Notfallwiederherstellung und Datenmigration verantwortlich. RcloneView verbindet Nextcloud mit dem Rest des Cloud-Ökosystems.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Nextcloud mit externen Clouds verbinden?

- **Off-Site-Backup** — Wenn Ihr Nextcloud-Server ausfällt, sind Ihre Daten ohne externes Backup verloren.
- **Migration** — Umzug von Google Drive/OneDrive zu Nextcloud oder umgekehrt.
- **Hybrid-Cloud** — Sensible Daten auf Nextcloud, gemeinsam genutzte Daten auf Google Drive.
- **Kundenzustellung** — Kopieren Sie Lieferergebnisse von Nextcloud in die Dropbox oder das OneDrive eines Kunden.
- **Kostenoptimierung** — Archivieren Sie alte Nextcloud-Daten in günstigem Objektspeicher (B2, S3 Glacier).

## Nextcloud in RcloneView einrichten

### Verbindung über WebDAV

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **WebDAV** als Typ.
3. Geben Sie Ihre Nextcloud-WebDAV-URL ein: `https://your-nextcloud.com/remote.php/dav/files/USERNAME/`
4. Geben Sie Ihren Nextcloud-Benutzernamen und Ihr App-Passwort ein.

<img src="/support/images/en/blog/new-remote.png" alt="Add Nextcloud via WebDAV" class="img-large img-center" />

Ihre Nextcloud-Dateien erscheinen jetzt im Zwei-Fenster-Explorer von RcloneView.

## Wichtige Workflows

### 1) Nextcloud → S3 (Off-Site-Backup)

Planen Sie nächtliche Backups von Nextcloud zu AWS S3 oder Backblaze B2:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Nextcloud backup" class="img-large img-center" />

### 2) Google Drive → Nextcloud (Migration)

Migrieren Sie weg von Google hin zu selbst gehosteten Lösungen:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrate Google Drive to Nextcloud" class="img-large img-center" />

### 3) Nextcloud → Google Drive (Freigabe)

Kopieren Sie bestimmte Ordner nach Google Drive, um mit externen Partnern zusammenzuarbeiten.

### 4) Verschlüsseltes Off-Site-Backup

Legen Sie eine Crypt-Schicht darüber für Zero-Knowledge-verschlüsselte Backups an. Selbst Ihr Cloud-Backup-Anbieter kann Ihre Nextcloud-Daten nicht lesen.

## Backups überprüfen

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Nextcloud backup" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Nextcloud hinzufügen** über WebDAV.
3. **Backup-/Sync-Ziele hinzufügen**.
4. **Automatisierte Backups planen**.
5. **Mit Ordnervergleich überprüfen**.

Selbst gehostet und sicher gesichert.

---

**Weiterführende Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Cloud-Backups verschlüsseln](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
