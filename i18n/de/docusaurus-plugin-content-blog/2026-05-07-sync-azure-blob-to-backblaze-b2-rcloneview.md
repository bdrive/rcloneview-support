---
slug: sync-azure-blob-to-backblaze-b2-rcloneview
title: "Azure Blob Storage mit Backblaze B2 synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Dateien mit RcloneView von Azure Blob Storage zu Backblaze B2 synchronisieren oder migrieren, um Kosten zu sparen, Redundanz zu schaffen und ein automatisiertes Cloud-Backup einzurichten."
keywords:
  - Azure Blob Storage
  - Backblaze B2
  - Cloud-Migration
  - RcloneView
  - Cloud-zu-Cloud-Synchronisation
  - Cloud-Backup
  - Speicherkosten sparen
  - rclone azure b2
tags:
  - RcloneView
  - azure
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Azure Blob Storage mit Backblaze B2 synchronisieren — Cloud-Backup mit RcloneView

> Der Umzug von Daten aus Azure Blob Storage zu Backblaze B2 kann Ihre Speicherkosten drastisch senken — RcloneView macht die Migration und die laufende Synchronisation dank einer geführten grafischen Oberfläche denkbar einfach.

Azure Blob Storage wird häufig für Unternehmensanwendungen genutzt, doch Backblaze B2 bietet deutlich niedrigere Speicherpreise — oft nur einen Bruchteil der Kosten von Azure —, was es als sekundäres Backup-Ziel oder als vollständiges Migrationsziel attraktiv macht. Egal, ob Sie eine einmalige Migration oder eine fortlaufende Synchronisation zur Redundanz wünschen, RcloneView übernimmt beides, ohne dass Kommandozeilen-Kenntnisse erforderlich sind. RcloneView wird mit einer eingebetteten rclone-Binärdatei ausgeliefert, sodass keine zusätzliche Installation nötig ist.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure Blob Storage in RcloneView einrichten

Klicken Sie in RcloneView auf **New Remote** und wählen Sie **Microsoft Azure Blob Storage** aus der Anbieterliste. Sie benötigen Ihren **Storage Account Name** und **Storage Account Key** aus dem Azure-Portal (unter Ihrem Speicherkonto > Access Keys). Optional können Sie auch ein SAS-Token oder eine Connection String verwenden. Nach dem Speichern verbindet sich RcloneView und listet alle Ihre Blob-Container auf.

Wenn Sie mehrere Azure-Speicherkonten verwenden — beispielsweise separate Konten pro Umgebung oder Region —, fügen Sie jedes als eigenen benannten Remote hinzu. RcloneView verwaltet alle davon in derselben Oberfläche, sodass Sie Container vergleichen und Daten problemlos zwischen Konten verschieben können.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Backblaze B2 verbinden

Fügen Sie einen zweiten Remote für Backblaze B2 hinzu, indem Sie erneut auf **New Remote** klicken und **Backblaze B2** auswählen. Geben Sie Ihre **Application Key ID** und Ihren **Application Key** aus dem Backblaze-Dashboard ein. Sie können den Schlüssel für zusätzliche Sicherheit auf einen bestimmten Bucket beschränken. Nach dem Speichern erscheint der B2-Remote im Explorer neben Ihrem Azure-Remote.

Jetzt können Sie beide Remotes im Zweifensterblick (Dual-Pane) nebeneinander öffnen. Ziehen Sie einzelne Dateien oder ganze Ordnerstrukturen per Drag-and-Drop von Azure zu B2 für einmalige Übertragungen. Für Migrationen großer Container ist der Ansatz mit Sync-Jobs zuverlässiger und fortsetzbar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Azure Blob to Backblaze B2 in RcloneView" class="img-large img-center" />

## Den Sync-Job erstellen und planen

Öffnen Sie den **Job Manager** und verwenden Sie den vierstufigen **Job Wizard**, um einen Sync-Job mit Azure Blob als Quelle und Backblaze B2 als Ziel zu erstellen. Führen Sie immer zuerst einen **Dry Run** durch — dieser zeigt eine Vorschau aller Hinzufügungen und Löschungen, ohne Ihre Daten zu verändern. Sobald Sie mit der Vorschau zufrieden sind, führen Sie die eigentliche Synchronisation aus.

Für eine dauerhafte Redundanz können PLUS-Lizenznutzer einen **Zeitplan (Schedule)** hinzufügen, um die Azure-zu-B2-Synchronisation automatisch täglich oder wöchentlich auszuführen. Das **Job History**-Panel protokolliert jeden Lauf mit Dateianzahl und Übertragungsgröße, sodass Sie überprüfen können, ob die Backups erfolgreich abgeschlossen wurden und etwaige Compliance-Anforderungen erfüllt sind.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## Erste Schritte

1. **Laden Sie RcloneView herunter** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Fügen Sie einen **Azure Blob Storage**-Remote mit Ihrem Storage Account Name und Key hinzu.
3. Fügen Sie einen **Backblaze B2**-Remote mit Ihrer Application Key ID und Ihrem Key hinzu.
4. Öffnen Sie beide Remotes im Zweifenster-Explorer und verwenden Sie den **Job Wizard**, um einen Sync-Job zu erstellen.
5. Führen Sie zuerst einen **Dry Run** durch und planen Sie anschließend mit einer PLUS-Lizenz wiederkehrende Synchronisationen.

Die Synchronisation von Azure Blob zu Backblaze B2 über RcloneView ist eine der effizientesten Möglichkeiten, eine kosteneffiziente Cloud-Backup-Strategie aufzubauen, ohne auf Zuverlässigkeit zu verzichten.

---

**Related Guides:**

- [Azure Blob Storage verwalten — Cloud-Synchronisation mit RcloneView](https://rcloneview.com/support/blog/manage-azure-blob-storage-cloud-sync-rcloneview)
- [Backblaze B2 verwalten — Cloud-Synchronisation und Backup mit RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [OneDrive zu Backblaze B2 migrieren mit RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
