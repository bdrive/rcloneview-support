---
slug: backup-opendrive-aws-s3-external-storage-rcloneview
title: "OpenDrive mit RcloneView auf AWS S3 oder externem Speicher sichern"
authors:
  - tayson
description: "Schützen Sie Ihre OpenDrive-Daten, indem Sie sie automatisch und mit visueller Verifizierung auf AWS S3, Google Drive oder eine externe Festplatte sichern — mit RcloneView."
keywords:
  - opendrive backup
  - opendrive sync tool
  - opendrive to s3
  - opendrive to google drive
  - opendrive file manager
  - opendrive rclone
  - opendrive export data
  - opendrive cloud backup
  - opendrive alternative
  - opendrive data protection
tags:
  - opendrive
  - sync
  - aws-s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive mit RcloneView auf AWS S3 oder externem Speicher sichern

> OpenDrive bietet unbegrenzten Speicherplatz zu attraktiven Preisen, aber alle Daten bei einem einzigen Anbieter zu behalten, ist riskant. Mit RcloneView sichern Sie OpenDrive automatisch auf S3, Google Drive oder eine externe Festplatte.

OpenDrive bietet Cloud-Speicher mit Funktionen wie Dateifreigabe, Zusammenarbeit und App-Integrationen. Aber wie jeder Cloud-Dienst sollte es nicht die einzige Kopie Ihrer wichtigen Daten sein. RcloneView verbindet sich mit OpenDrive und ermöglicht automatisierte Backups auf AWS S3, Google Drive, externe Festplatten oder jeden anderen Speicher — und gibt Ihnen damit die Redundanz, die jede gute Backup-Strategie erfordert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum OpenDrive sichern?

- **Einzelner Ausfallpunkt** — Wenn OpenDrive ausfällt oder Sie den Zugriff verlieren, sind Ihre Daten nicht verfügbar.
- **Versehentliches Löschen** — Ohne externes Backup gibt es keinen Rückgängig-Button für dauerhaft gelöschte Dateien.
- **3-2-1-Backup-Regel** — Best Practice besagt: 3 Kopien, 2 verschiedene Medien, 1 extern. OpenDrive ist nur eine Kopie.
- **Migrationsbereitschaft** — Wenn Sie sich entscheiden, den Anbieter zu wechseln, ist Ihr Backup bereits einsatzbereit.

## OpenDrive verbinden

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **OpenDrive** aus der Anbieterliste.
3. Geben Sie Ihre OpenDrive-Zugangsdaten ein.
4. Speichern — Ihre OpenDrive-Dateien sind jetzt durchsuchbar.

<img src="/support/images/en/blog/new-remote.png" alt="Add OpenDrive remote" class="img-large img-center" />

## Durchsuchen und Bewerten

Sehen Sie Ihre OpenDrive-Dateien neben Ihrem Backup-Ziel:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OpenDrive files" class="img-large img-center" />

## Backup-Ziele

### OpenDrive → AWS S3

Für ein langlebiges, kosteneffizientes Backup:

1. Fügen Sie [AWS S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3) als Remote hinzu.
2. Erstellen Sie einen Kopierjob: OpenDrive → S3-Bucket.
3. Verwenden Sie S3 Glacier für Langzeitarchive zu minimalen Kosten.
4. Planen Sie tägliche Ausführungen mit [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).

### OpenDrive → Google Drive

Für ein zugängliches Backup mit Google-Workspace-Integration:

1. Fügen Sie Google Drive über [OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login) hinzu.
2. Erstellen Sie einen Kopierjob: OpenDrive → Google-Drive-Ordner.
3. Planen Sie wöchentliche Ausführungen.

### OpenDrive → externe Festplatte

Für ein Offline-Backup vor Ort:

1. Erstellen Sie einen Kopierjob: OpenDrive → Pfad der externen Festplatte.
2. Ausführen, wenn die Festplatte angeschlossen ist.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OpenDrive backup job" class="img-large img-center" />

## Ihr Backup überprüfen

Nutzen Sie den [Ordnervergleich](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents), um zu bestätigen, dass alles übertragen wurde:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OpenDrive backup" class="img-large img-center" />

## Automatisieren und überwachen

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OpenDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="OpenDrive backup history" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **OpenDrive** und Ihr Backup-Ziel als Remotes hinzufügen.
3. **Kopierjob erstellen** und das erste Backup ausführen.
4. **Überprüfen** mit dem Ordnervergleich.
5. **Planen** für automatische, wiederkehrende Backups.

Ihre Daten verdienen mehr als ein Zuhause. RcloneView macht das Backup von OpenDrive auf S3, Google Drive oder externen Speicher mühelos und überprüfbar.

---

**Verwandte Anleitungen:**

- [AWS S3 und S3-kompatible Speicher hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Remote über browserbasierte Anmeldung (OAuth) hinzufügen](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
