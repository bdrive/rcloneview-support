---
slug: sync-jottacloud-google-drive-external-storage-rcloneview
title: "Jottacloud einfach mit Google Drive oder externem Speicher synchronisieren mit RcloneView"
authors:
  - tayson
description: "Halten Sie Ihre Jottacloud-Dateien synchron mit Google Drive, einer externen Festplatte oder einer anderen Cloud — automatisch und mit visueller Überprüfung — mit RcloneView."
keywords:
  - jottacloud sync
  - jottacloud backup tool
  - jottacloud to google drive
  - jottacloud export
  - jottacloud alternative backup
  - sync jottacloud files
  - jottacloud rclone
  - jottacloud multi-cloud
  - jottacloud external drive
  - jottacloud file transfer
tags:
  - RcloneView
  - jottacloud
  - cloud-storage
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud einfach mit Google Drive oder externem Speicher synchronisieren mit RcloneView

> Sie lieben den unbegrenzten Speicherplatz von Jottacloud, möchten aber ein Backup an anderer Stelle? RcloneView synchronisiert Ihre Jottacloud-Daten mit Google Drive, einer externen Festplatte oder jeder anderen Cloud — im Autopilot-Modus.

Jottacloud ist ein beliebter Cloud-Speicher-Dienst, besonders in den nordischen Ländern, bekannt für seine unbegrenzten Speicherpläne und strengen Datenschutzrichtlinien. Doch sich für alle Daten auf einen einzigen Anbieter zu verlassen, ist riskant. Mit RcloneView können Sie Jottacloud mit Google Drive, externen Festplatten, NAS-Geräten oder jeder anderen Cloud synchronisieren — für Redundanz und Sicherheit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum Jottacloud mit einem anderen Speicher synchronisieren?

- **Redundanz** — Kein Anbieter ist immun gegen Ausfälle, Richtlinienänderungen oder Abschaltungen. Eine zweite Kopie schützt Sie.
- **Plattformübergreifender Zugriff** — Teilen Sie Dateien mit Google-Workspace- oder Microsoft-365-Nutzern, die kein Jottacloud haben.
- **Lokales Backup** — Behalten Sie eine schnell zugängliche Kopie auf einer externen Festplatte oder einem NAS.
- **Bereit für Migration** — Falls Sie jemals den Anbieter wechseln, liegen Ihre Daten bereits an anderer Stelle.

## Jottacloud verbinden

1. Öffnen Sie RcloneView und klicken Sie auf **Add Remote**.
2. Wählen Sie **Jottacloud** aus der Anbieterliste.
3. Authentifizieren Sie sich mit Ihren Jottacloud-Zugangsdaten.
4. Speichern — Ihre Jottacloud-Dateien und -Ordner sind nun durchsuchbar.

<img src="/support/images/en/blog/new-remote.png" alt="Add Jottacloud remote in RcloneView" class="img-large img-center" />

## Durchsuchen und Verwalten

Sehen Sie Ihre gesamte Jottacloud-Bibliothek im Zwei-Fenster-Explorer neben jedem anderen Speicher:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Jottacloud alongside other clouds" class="img-large img-center" />

## Synchronisationsszenarien

### Jottacloud → Google Drive

Halten Sie eine Spiegelung Ihrer Jottacloud-Daten in Google Drive:

1. Erstellen Sie einen Sync-Job: Jottacloud → Google-Drive-Ordner.
2. Planen Sie ihn täglich mit [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Nach der ersten Synchronisation werden nur geänderte Dateien übertragen.

### Jottacloud → Externe Festplatte

Führen Sie ein lokales Offline-Backup:

1. Erstellen Sie einen Copy-Job: Jottacloud → Pfad auf der externen Festplatte.
2. Führen Sie ihn wöchentlich aus oder wann immer Sie die Festplatte anschließen.
3. Nutzen Sie den [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents), um die Vollständigkeit zu überprüfen.

### Jottacloud → AWS S3

Archivieren Sie Jottacloud-Daten in kostengünstigem S3-Speicher:

1. Erstellen Sie einen Copy-Job: Jottacloud → S3-Bucket.
2. Nutzen Sie S3-Lifecycle-Regeln, um ältere Daten in Glacier zu verschieben.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Jottacloud sync job" class="img-large img-center" />

## Automatisieren und Überwachen

Planen Sie Ihre Synchronisation und lassen Sie sich über die Ergebnisse benachrichtigen:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Jottacloud sync" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Jottacloud sync job history" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Jottacloud hinzufügen** als Remote.
3. **Ihr Backup-Ziel hinzufügen** (Google Drive, S3, externe Festplatte).
4. **Einen Sync- oder Copy-Job erstellen** und ihn planen.
5. **Überprüfen** Sie das Ergebnis nach dem ersten Lauf mit Folder Comparison.

Jottacloud ist eine großartige primäre Cloud. RcloneView stellt sicher, dass sie niemals Ihre einzige Kopie ist.

---

**Verwandte Anleitungen:**

- [Remotes durchsuchen & verwalten](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Echtzeit-Übertragungsüberwachung](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
