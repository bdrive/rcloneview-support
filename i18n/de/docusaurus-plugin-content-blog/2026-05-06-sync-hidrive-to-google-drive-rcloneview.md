---
slug: sync-hidrive-to-google-drive-rcloneview
title: "HiDrive mit Google Drive synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Synchronisieren Sie Ihren Strato HiDrive-Speicher mit Google Drive mithilfe von RcloneView. Automatisieren Sie Cloud-Backups, übertragen Sie Dateien direkt zwischen Anbietern und halten Sie beide Konten synchron."
keywords:
  - sync HiDrive to Google Drive
  - HiDrive Google Drive sync RcloneView
  - Strato HiDrive backup to Google Drive
  - HiDrive cloud migration
  - move files HiDrive Google Drive
  - HiDrive sync tool GUI
  - Google Drive backup from HiDrive
  - RcloneView HiDrive sync
  - HiDrive file transfer tool
  - cloud to cloud sync HiDrive
tags:
  - hidrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive mit Google Drive synchronisieren — Cloud-Backup mit RcloneView

> RcloneView hält Ihr Strato HiDrive und Google Drive automatisch synchron — direkte Cloud-zu-Cloud-Übertragungen mit geplanten Aufgaben und vollständiger Überwachung der Übertragung.

Strato HiDrive wird im deutschsprachigen Raum häufig für sicheren Cloud-Speicher mit starker DSGVO-Konformität genutzt. Teams, die HiDrive parallel zu Google Workspace verwenden, müssen oft Inhalte zwischen den beiden Plattformen synchronisieren – damit Projektdateien in beiden Umgebungen zugänglich bleiben. RcloneView übernimmt diese Synchronisation zuverlässig, verbindet sich mit beiden Anbietern und führt automatisierte Übertragungen nach einem beliebigen von Ihnen festgelegten Zeitplan aus.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive und Google Drive in RcloneView verbinden

Sowohl HiDrive als auch Google Drive nutzen in RcloneView eine OAuth-basierte Authentifizierung. Gehen Sie zu Remote-Tab > Neuer Remote:

- **HiDrive:** Wählen Sie HiDrive aus und schließen Sie die OAuth-Anmeldung mit Ihren Strato HiDrive-Zugangsdaten ab
- **Google Drive:** Wählen Sie Google Drive aus und schließen Sie die browserbasierte OAuth-Authentifizierung ab

RcloneView speichert Tokens sicher und erneuert sie automatisch, wenn sie ablaufen. Öffnen Sie beide Remotes im Zwei-Panel-Explorer, um zu prüfen, was auf jeder Seite vorhanden ist, bevor Sie die Synchronisation konfigurieren.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Den Synchronisationsjob von HiDrive zu Google Drive konfigurieren

Erstellen Sie im Assistenten von RcloneView einen Synchronisationsjob mit HiDrive als Quelle und einem Google Drive-Ordner als Ziel. Für ein Beratungsunternehmen, das Kundenlieferungen in HiDrive speichert und über Google Workspace teilt, sorgt ein täglicher Synchronisationsjob dafür, dass die Google Drive-Kopie nach jedem Arbeitstag aktuell bleibt.

Stellen Sie in den erweiterten Einstellungen die Anzahl gleichzeitiger Übertragungen entsprechend Ihrer Bandbreite ein und aktivieren Sie die **Checksummen**-Überprüfung, wenn die Datenintegrität zwischen den Konten entscheidend ist. Die vordefinierten Filteroptionen können bestimmte Dateitypen (z. B. HiDrive-Thumbnail-Caches oder temporäre Dateien) von der Synchronisation ausschließen.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Automatisierte Synchronisationen planen (PLUS)

Mit einer PLUS-Lizenz können Sie den Synchronisationsjob von HiDrive zu Google Drive so planen, dass er automatisch ausgeführt wird. Ein gängiges Setup: Synchronisieren Sie HiDrive jeden Abend um 19 Uhr mit Google Drive, um die Arbeit des Tages zu erfassen. Nutzen Sie die Funktion **Simulate schedule**, um zu überprüfen, ob Ihr Cron-Ausdruck die erwarteten Ausführungszeiten liefert, bevor Sie ihn aktivieren.

Die Option „Auto Start Schedule on Startup“ sorgt dafür, dass geplante Jobs nach einem Neustart des Rechners fortgesetzt werden – wichtig für Synchronisationsjobs, die auf einer gemeinsam genutzten Workstation laufen.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Synchronisationsstatus und Verlauf überwachen

Der Transfer-Tab von RcloneView zeigt den Synchronisationsfortschritt in Echtzeit. Nach jeder abgeschlossenen Synchronisation zeichnet der Job-Verlauf den Durchlauf auf: übertragene Dateien, verschobene Bytes, Geschwindigkeit und Dauer. Falls die API von Google Drive Anfragen während einer großen Synchronisation drosselt, zeigt das Protokoll Wiederholungsereignisse an – das hilft Ihnen, die Einstellungen für gleichzeitige Übertragungen bei zukünftigen Jobs zu optimieren.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie HiDrive und Google Drive als OAuth-Remotes im Remote-Tab > Neuer Remote hinzu.
3. Erstellen Sie einen Sync- oder Copy-Job von HiDrive zu Ihrem Google Drive-Ordner.
4. Planen Sie automatisierte Durchläufe mit der PLUS-Lizenz und überwachen Sie den Fortschritt im Job-Verlauf.

Die Synchronisation von HiDrive und Google Drive ist mit der automatisierten Synchronisations-Engine von RcloneView unkompliziert – Daten werden direkt in der Cloud verschoben, ganz ohne manuelle Schritte.

---

**Verwandte Anleitungen:**

- [HiDrive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Google Drive-Speicher verwalten — Dateien mit RcloneView synchronisieren und sichern](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [HiDrive mit OneDrive synchronisieren mit RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-onedrive-rcloneview)

<CloudSupportGrid />
