---
slug: transfer-storj-and-google-drive-with-rcloneview
title: "Dateien zwischen Storj und Google Drive mit RcloneView übertragen"
authors:
  - tayson
description: "Verschieben Sie Daten zwischen Storj und Google Drive, ohne sie erneut herunterzuladen – nutzen Sie RcloneView per Drag-and-Drop, Compare, Sync und geplante Jobs mit OAuth und Storj-Access-Grants."
keywords:
  - storj to google drive
  - google drive to storj
  - rcloneview
  - cloud to cloud transfer
  - access grant
  - drag and drop sync
  - scheduled jobs
  - compare folders
  - resumable uploads
  - s3 compatible storage
tags:
  - RcloneView
  - cloud-migration
  - storj
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dateien zwischen Storj und Google Drive mit RcloneView übertragen

> Verschieben Sie Ordner zwischen **Storj** und **Google Drive**, ohne die Kommandozeile zu berühren. RcloneView bietet Ihnen nebeneinander angeordnete Explorer-Fenster, Compare, Sync und geplante Jobs, damit Cloud-zu-Cloud-Übertragungen schnell und vorhersehbar bleiben.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum RcloneView für Storj ↔ Google Drive verwenden?

- OAuth-Anmeldung für Google Drive; Unterstützung von Access Grants für Storj (keine manuelle CLI nötig).
- Multithread-fähige, fortsetzbare Übertragungen mit Fortschrittsprotokollen und Wiederholungsversuchen.
- Zwei-Fenster-Explorer für Drag-and-Drop-Verschiebungen.
- Compare zur Vorschau von Unterschieden vor dem Kopieren oder Löschen.
- Synchronisation mit Filtern und Testlauf (Dry-Run), plus wiederverwendbare Jobs und Zeitplanung.
- Bandbreitenbegrenzung und Drosselungssteuerung für einen reibungslosen Arbeitsablauf.

RcloneView baut auf rclone auf, sodass Sie Zuverlässigkeit und erweiterte Optionen erhalten – ohne Skripte zu schreiben.

## Bevor Sie beginnen

- Halten Sie Ihren **Storj-Access-Grant** bereit (enthält den Verschlüsselungsbereich). Bewahren Sie ihn sicher auf.
- Melden Sie sich bei Google Drive an und beachten Sie das Upload-Limit von 750 GB pro Tag und Benutzer.
- Installieren Sie die neueste RcloneView-Version: [Download](https://rcloneview.com/src/download.html).
- Bevorzugen Sie bei großen Übertragungen eine kabelgebundene Verbindung und lassen Sie RcloneView durchgehend laufen.

## Schritt 1: Verbinden Sie Ihre Cloud-Remotes

1. Öffnen Sie **Remote → + Neues Remote**.
2. Wählen Sie **Storj** und fügen Sie Ihren **Access Grant** ein. (Wenn Sie eine separate Verschlüsselungspassphrase verwenden, fügen Sie diese in den Optionen hinzu.) Speichern Sie das Remote.
3. Wiederholen Sie dies für **Google Drive**, klicken Sie auf **Verbinden** und schließen Sie die OAuth-Anmeldung im Browser ab.
4. Bestätigen Sie, dass beide Remotes im Remote Manager erscheinen.

👉 Mehr erfahren: [Google Drive Remote hinzufügen](/howto/#step-2-adding-remote-storage-google-drive-example)  
👉 Remotes verwalten: [Remote Manager](/howto/rcloneview-basic/remote-manager/)

## Schritt 2: Öffnen Sie beide Remotes im Explorer-Fenster

1. Gehen Sie zu **Durchsuchen**.
2. Klicken Sie im linken Fenster auf **+** und öffnen Sie Ihr **Storj**-Remote.
3. Klicken Sie im rechten Fenster auf **+** und öffnen Sie Ihr **Google Drive**-Remote.
4. Navigieren Sie zu den Quell- und Ziel-Buckets/-Ordnern, die Sie verschieben möchten.


## Vier Methoden für Storj ↔ Google Drive-Übertragungen

### Methode 1: Drag & Drop zwischen den Fenstern

1. Wählen Sie Dateien oder Ordner im Storj-Fenster aus.
2. Ziehen Sie sie in das Google Drive-Fenster (oder umgekehrt).
3. Verfolgen Sie den Fortschritt im Tab **Transfer**; pausieren/fortsetzen Sie nach Bedarf.

👉 Weitere Details: [Remote-Speicher durchsuchen und verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### Methode 2: Vergleichen, dann kopieren oder löschen

1. Öffnen Sie die Quelle links und das Ziel rechts.
2. Klicken Sie auf **Compare**.
3. RcloneView hebt eindeutige Elemente, Größenunterschiede und Übereinstimmungen hervor.
4. Wählen Sie zu verschiebende Elemente aus und wählen Sie dann **Kopieren →** oder **← Kopieren**.
5. Verwenden Sie **Löschen** mit Vorsicht, um Duplikate oder alte Daten zu bereinigen.

👉 Mehr erfahren: [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)

### Methode 3: Synchronisieren oder als Job speichern

1. Wählen Sie Ihre Storj-Quelle und Ihr Google Drive-Ziel aus.
2. Klicken Sie auf **Sync** und wählen Sie Einweg- oder Zweiweg-Synchronisation.
3. Sehen Sie sich die Änderungen in der Vorschau an, passen Sie Filter an (einschließen/ausschließen) und starten Sie dann.
4. Klicken Sie auf **In Jobs speichern**, um die Konfiguration später wiederzuverwenden.

👉 Mehr erfahren:

- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen und verwalten](/howto/rcloneview-basic/execute-manage-job)

### Methode 4: Wiederkehrende Sync-Jobs planen

1. Öffnen Sie **Job Manager → Job hinzufügen**.
2. Legen Sie **Storj** als Quelle und **Google Drive** als Ziel fest (oder umgekehrt).
3. Wählen Sie einen Zeitplan (stündlich, täglich, wöchentlich oder cron-ähnlich).
4. Aktivieren Sie den Job und lassen Sie RcloneView ihn automatisch ausführen.
5. Überprüfen Sie Protokolle und Verlauf, um den Erfolg zu bestätigen.

👉 Mehr erfahren: [Jobplanung und -ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Tipps für reibungslose Übertragungen

- Verwenden Sie **Dry-Run** vor großen Synchronisationen, um zu bestätigen, was sich ändern wird.
- Beschränken Sie bei Storj Ihren Access Grant eng (bucket-spezifisch) für mehr Sicherheit.
- Wenn Uploads stocken, verringern Sie die Parallelität oder setzen Sie Bandbreitenbegrenzungen, um Drosselung zu reduzieren.
- Wenn sich Google Drive dem täglichen Limit nähert, teilen Sie Jobs auf mehrere Tage oder Konten auf.
- Behalten Sie den Tab **Transfer** im Auge für Wiederholungsversuche, Geschwindigkeiten und API-Meldungen.

## Zusammenfassung

RcloneView macht Storj ↔ Google Drive-Migrationen unkompliziert: Remotes verbinden, nebeneinander durchsuchen, vergleichen, synchronisieren oder wiederkehrende Jobs planen – alles ohne die Kommandozeile.

<CloudSupportGrid />
