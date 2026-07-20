---
slug: sync-box-to-google-drive-rcloneview
title: "Box mit Google Drive synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Synchronisieren Sie Box mit Google Drive über RcloneView — Dateien übertragen, Backups automatisieren und beide Plattformen mit einer einfachen Cloud-zu-Cloud-GUI aktuell halten."
keywords:
  - Box to Google Drive sync
  - Box to Google Drive migration
  - cloud sync tool
  - RcloneView Box
  - Box backup
  - Google Drive archive
  - cloud-to-cloud sync
  - enterprise cloud transfer
  - Box Google Drive workflow
  - Box content migration
tags:
  - RcloneView
  - box
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box mit Google Drive synchronisieren — Cloud-Backup mit RcloneView

> Box übernimmt Compliance und sichere Freigaben im Unternehmen, während Google Drive die kollaborative Bearbeitung verankert — RcloneView synchronisiert Inhalte direkt zwischen beiden Plattformen, ganz ohne lokalen Zwischenspeicher.

Box wird in Unternehmensumgebungen häufig wegen seiner Compliance-Kontrollen und sicheren Dateifreigabe eingesetzt, während Google Drive kollaborative Echtzeit-Workflows unterstützt. Wenn Teams beide Plattformen nutzen oder sich von Box weg konsolidieren, ist für den Abgleich von Inhalten — oder die Migration von Dateien zwischen Plattformen — ein zuverlässiges Cloud-zu-Cloud-Tool erforderlich. RcloneView verbindet Box und Google Drive direkt, ohne dass ein Download auf die lokale Festplatte erforderlich ist.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box und Google Drive verbinden

Sowohl Box als auch Google Drive nutzen in RcloneView eine OAuth-Browser-Authentifizierung. Gehen Sie zu **Remote-Tab > Neues Remote**, wählen Sie **Box** aus und schließen Sie den Browser-Login ab. Wiederholen Sie den Vorgang für **Google Drive**. Beide Remotes erscheinen anschließend als Tabs im Explorer-Panel und sind sofort durchsuchbar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Google Drive remotes in RcloneView" class="img-large img-center" />

Für **Box for Business**-Konten konfigurieren Sie beim Erstellen des Remotes die Einstellung `box_sub_type` als `enterprise`. Dadurch verbindet sich RcloneView mit dem Box-Konto des Unternehmens statt mit dem persönlichen Speicher und ermöglicht den Zugriff auf freigegebene Ordner und Inhalte im Besitz des Unternehmens.

## Den Synchronisationsjob ausführen

Erstellen Sie im **Job-Manager** einen neuen Synchronisationsjob: Quelle ist Ihr Box-Ordner (oder ein bestimmter Unterordner wie `/Projects/2026`), Ziel ist der gewünschte Google-Drive-Ordner. Die Synchronisation von RcloneView erfolgt standardmäßig einseitig — sie spiegelt die Quelle auf das Ziel, ohne den Quellinhalt zu verändern.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive sync job in RcloneView" class="img-large img-center" />

Für ein Rechtsteam, das abgeschlossene Fallakten von Box zu Google Drive für die Langzeitarchivierung synchronisiert, begrenzt die Filterung nach Dateialter (Max File Age in Job-Einstellungen Schritt 3) die Synchronisation auf nur kürzlich geänderte Dateien — so bleibt die Übertragungsgröße überschaubar. Die **Dry-Run**-Vorschau bestätigt genau, welche Dateien verschoben werden, bevor Daten angefasst werden.

## Automatisierung und Überwachung

Mit einer PLUS-Lizenz stellt die Planung der Box-zu-Google-Drive-Synchronisation sicher, dass beide Plattformen aktuell bleiben. Ein cron-basierter Zeitplan — zum Beispiel jeden Sonntag um Mitternacht — führt die Synchronisation automatisch ohne Nutzereingriff aus.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Box to Google Drive sync in RcloneView" class="img-large img-center" />

Die **1:N-Synchronisation**-Funktion von RcloneView ermöglicht es sogar, von einem Box-Ordner gleichzeitig zu mehreren Google-Drive-Zielen zu synchronisieren — nützlich, um denselben Inhalt sowohl in einem freigegebenen Team-Drive als auch in einem persönlichen Archivordner in einem Job zu sichern. Der **Job-Verlauf** verfolgt jeden Durchlauf mit detaillierten Statistiken: übertragene Dateien, Dauer, Geschwindigkeit und Status.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie das **Box**-Remote (OAuth) und das **Google Drive**-Remote (OAuth) hinzu.
3. Öffnen Sie den **Job-Manager** und erstellen Sie einen Synchronisationsjob von Ihrem Box-Ordner zu Google Drive.
4. Aktivieren Sie die Planung (PLUS), um regelmäßige Synchronisationen zu automatisieren.

Die Synchronisation von Box zu Google Drive über RcloneView sorgt dafür, dass Ihre Inhalte zuverlässig zwischen den Plattformen wandern, während beide ohne manuellen Aufwand organisiert und zugänglich bleiben.

---

**Verwandte Anleitungen:**

- [Box-Cloud-Speicher verwalten — Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Box-zu-Dropbox-Migration ohne Ausfallzeit mit RcloneView](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Box zu SharePoint und OneDrive migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)

<CloudSupportGrid />
