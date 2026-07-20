---
slug: sync-backblaze-b2-to-onedrive-rcloneview
title: "Backblaze B2 mit OneDrive synchronisieren — Cloud-Backup mit RcloneView"
authors:
  - tayson
description: "Erfahren Sie, wie Sie Dateien mit RcloneView von Backblaze B2 Objektspeicher zu Microsoft OneDrive synchronisieren oder migrieren — ein GUI-basierter Ansatz mit Unterstützung für automatisierte Zeitpläne."
keywords:
  - Backblaze B2 zu OneDrive Synchronisation
  - Backblaze B2 OneDrive RcloneView migrieren
  - Backblaze B2 OneDrive Übertragung
  - B2 zu OneDrive Migrationsanleitung
  - Cloud-Speicher Synchronisationstool
  - Backblaze B2 Backup OneDrive
  - OneDrive aus B2 Migration
  - rclone B2 OneDrive GUI
tags:
  - RcloneView
  - backblaze-b2
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2 mit OneDrive synchronisieren — Cloud-Backup mit RcloneView

> Holen Sie ausgewählte Dateien aus dem Backblaze B2 Kaltspeicher für die aktive Nutzung nach OneDrive — oder migrieren Sie Ihren gesamten B2-Bucket mit einem einzigen RcloneView-Job nach OneDrive.

Backblaze B2 ist ein hervorragendes Ziel für Archivierung und Backup, aber seine S3-kompatible API ist nicht für die tägliche Zusammenarbeit ausgelegt. Wenn Ihr Team auf Dateien in Microsoft 365 zugreifen, Dokumente über SharePoint teilen oder einfach Daten von B2 an einen leichter zugänglichen Ort verschieben muss, ist die Synchronisation mit OneDrive die Lösung. RcloneView macht die Übertragung mit einem visuellen Job-Builder und Echtzeitüberwachung unkompliziert.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Backblaze B2 und OneDrive verbinden

Öffnen Sie in RcloneView **Remote-Tab → Neuer Remote** und fügen Sie zunächst Backblaze B2 hinzu. Geben Sie Ihre Application Key ID und Ihren Application Key ein und legen Sie dann den Bucket-Namen fest. Wählen Sie für OneDrive den Anbieter aus der Liste aus und schließen Sie die OAuth-Anmeldung im Browser mit Ihrem Microsoft-Konto ab. Sobald beide Remotes gespeichert sind, öffnen Sie sie im Dual-Pane-Explorer nebeneinander.

Durchsuchen Sie Ihren B2-Bucket links und Ihr OneDrive rechts. Sie können auf beiden Seiten tief in die Ordnerhierarchien navigieren und die Dateianzahl vergleichen, bevor Sie eine Übertragung starten. Dieser visuelle Bestätigungsschritt verhindert Überraschungen bei umfangreichen Migrationen.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Backblaze B2 and OneDrive remotes in RcloneView" class="img-large img-center" />

## Den Synchronisationsjob konfigurieren und ausführen

Klicken Sie im Home-Tab auf **Sync**, um den Job-Assistenten zu öffnen. Legen Sie den Backblaze-B2-Pfad als Quelle und den OneDrive-Zielordner als Ziel fest. Konfigurieren Sie in Schritt 2 die Anzahl der gleichzeitigen Übertragungen — OneDrive hat API-Ratenbegrenzungen, daher ist es sicherer, mit 4–8 gleichzeitigen Übertragungen zu beginnen, statt das Maximum auszureizen. Aktivieren Sie den Prüfsummenvergleich, wenn die Datenintegrität für Ihren Anwendungsfall entscheidend ist.

Nutzen Sie die Option **Dry Run**, bevor Sie sich auf die vollständige Übertragung festlegen. Dies ist besonders nützlich, wenn Sie selektiv synchronisieren — zum Beispiel, indem Sie in Schritt 3 einen Filter für das **maximale Dateialter** setzen, um nur die Dateien der letzten 90 Tage aus B2 zu holen. Sobald die Ausgabe des Dry Run korrekt aussieht, führen Sie den eigentlichen Job aus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="B2 to OneDrive sync job in progress in RcloneView" class="img-large img-center" />

## Regelmäßige Abrufe von B2 planen

Manche Arbeitsabläufe erfordern eine wiederkehrende Synchronisation von B2 zu OneDrive — zum Beispiel, um jeden Morgen neu archivierte Berichte aus B2 in einen OneDrive-Ordner zu holen, damit Teammitglieder über die Microsoft-365-Oberfläche darauf zugreifen können. Mit einer PLUS-Lizenz übernimmt der Crontab-Planer von RcloneView dies automatisch. Legen Sie den Zeitplan in Schritt 4 des Job-Assistenten fest und wählen Sie die Tage und Uhrzeiten, die zu Ihrem Arbeitsablauf passen.

Der Tab **Job History** zeichnet jeden Lauf auf, sodass Sie bestätigen können, dass jede geplante Synchronisation erfolgreich abgeschlossen wurde, und prüfen können, wie viele Daten übertragen wurden.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Backblaze B2 to OneDrive sync" class="img-large img-center" />

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. Backblaze B2 (Application Key) und OneDrive (OAuth) als Remotes hinzufügen.
3. Einen Sync-Job von B2 zu OneDrive mit passenden Übertragungslimits erstellen.
4. Wiederkehrende Synchronisationen mit einer PLUS-Lizenz für freihändige Automatisierung planen.

Mit RcloneView wird das Verschieben von Daten aus dem dauerhaften Archiv von B2 in die kollaborative Umgebung von OneDrive zu einem routinemäßigen, zuverlässigen Vorgang.

---

**Verwandte Anleitungen:**

- [Backblaze B2 mit Azure Blob Storage über RcloneView synchronisieren](https://rcloneview.com/support/blog/sync-backblaze-b2-to-azure-blob-rcloneview)
- [Backblaze B2 Cloud-Speicher mit RcloneView verwalten](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [OneDrive mit RcloneView zu Backblaze B2 migrieren](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
