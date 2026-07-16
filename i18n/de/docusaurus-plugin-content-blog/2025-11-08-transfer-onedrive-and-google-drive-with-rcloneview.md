---
slug: transfer-onedrive-and-google-drive-with-rcloneview
title: "Dateien zwischen OneDrive und Google Drive mit RcloneView übertragen"
authors:
  - tayson
description: "Verschieben Sie Dateien zwischen Microsoft OneDrive und Google Drive ohne Downloads – nutzen Sie RcloneView Drag-and-Drop, Compare, Sync und geplante Jobs für zuverlässige Cloud-zu-Cloud-Übertragungen."
keywords:
  - onedrive to google drive transfer
  - google drive to onedrive migration
  - rcloneview
  - cloud to cloud sync
  - drag and drop transfer
  - scheduled sync jobs
  - compare folders
  - resumable uploads
  - oauth login
tags:
  - RcloneView
  - cloud-migration
  - onedrive
  - google-drive
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dateien zwischen OneDrive und Google Drive mit RcloneView übertragen

> Wechseln Sie zwischen Clouds, ohne Gigabytes erneut herunterzuladen. RcloneView bietet Ihnen einen zweigeteilten Explorer, Compare, Sync und geplante Jobs, damit Verschiebungen zwischen OneDrive und Google Drive schnell und vorhersehbar bleiben – keine CLI erforderlich.


<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## Warum RcloneView für OneDrive ↔ Google Drive nutzen?

- Sichere OAuth-Anmeldungen für beide Clouds; keine Tokens zum Einfügen.
- Fortsetzbare Übertragungen mit Fortschrittsprotokoll, Wiederholungsversuchen und Bandbreitenbegrenzung.
- Zweigeteilter Explorer für Drag-and-Drop-Verschiebungen ohne Skripte.
- Compare hebt neue/geänderte Dateien vor dem Kopieren hervor.
- Einweg- oder Zweiweg-Synchronisation sowie wiederverwendbare Jobs und Zeitplanung.
- Optionaler Trockenlauf (Dry-Run) und Filter, um genau zu steuern, was verschoben wird.

RcloneView legt eine geführte Benutzeroberfläche über rclone, sodass selbst umfangreiche Migrationen zuverlässig bleiben, während Entwickler bei Bedarf weiterhin auf erweiterte Optionen zugreifen können.

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="transfer files between onedrive and google drive" class="img-large img-center" />


## Bevor Sie beginnen

- Melden Sie sich bei beiden Konten an, OneDrive und Google Drive.
- Installieren Sie RcloneView aus dem neuesten Build: [Download](https://rcloneview.com/src/download.html).
- Prüfen Sie Cloud-Kontingente und tägliche API-Limits (Google Drive erzwingt 750 GB/Tag pro Nutzer für Uploads).
- Lassen Sie RcloneView für den besten Durchsatz während langer Jobs laufen und bevorzugen Sie kabelgebundene Netzwerke.

## Schritt 1: Beide Cloud-Remotes verbinden

1. Öffnen Sie **Remote → + New Remote**.
2. Wählen Sie unter **Provider** die Option **OneDrive** und klicken Sie dann auf **Connect**, um die Microsoft-OAuth-Anmeldung abzuschließen.
3. Wiederholen Sie dies für **Google Drive** und schließen Sie den OAuth-Vorgang ab.
4. Bestätigen Sie, dass beide Remotes im Remote Manager erscheinen.

👉 Mehr erfahren: [Add Google Drive Remote](/howto/#step-2-adding-remote-storage-google-drive-example)

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Remote Manager showing connected cloud remotes" class="img-large img-center" />

## Schritt 2: Beide Remotes im Explorer-Bereich öffnen

1. Wechseln Sie zum Tab **Browse**.
2. Klicken Sie im linken Bereich auf **+** und öffnen Sie Ihr **OneDrive**-Remote.
3. Klicken Sie im rechten Bereich auf **+** und öffnen Sie Ihr **Google Drive**-Remote.
4. Navigieren Sie zu den Quell- und Zielordnern, die Sie synchronisieren möchten.


## Vier Wege, um Dateien zu verschieben

### Methode 1: Drag & Drop zwischen den Explorer-Bereichen

1. Wählen Sie Dateien oder Ordner im OneDrive-Bereich aus.
2. Ziehen Sie sie in den Google-Drive-Bereich (oder in die entgegengesetzte Richtung).
3. Verfolgen Sie den Fortschritt im Tab **Transfer**; pausieren/fortsetzen Sie bei Bedarf.

👉 Weitere Details: [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### Methode 2: Vergleichen, dann kopieren oder löschen

1. Öffnen Sie den Quellordner links und den Zielordner rechts.
2. Klicken Sie in der Symbolleiste auf **Compare**.
3. RcloneView hebt eindeutige Dateien, Größenabweichungen und Übereinstimmungen hervor.
4. Wählen Sie die zu verschiebenden Elemente aus und wählen Sie dann **Copy →** oder **← Copy**.
5. Verwenden Sie **Delete** mit Vorsicht, um alte Daten zu bereinigen.

👉 Mehr erfahren: [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare OneDrive and Google Drive folders" class="img-large img-center" />

### Methode 3: Synchronisieren oder als Job speichern

1. Wählen Sie Ihre OneDrive-Quelle und Ihr Google-Drive-Ziel aus.
2. Klicken Sie auf **Sync** und wählen Sie Einweg- (OneDrive → Google Drive) oder Zweiweg-Synchronisation.
3. Prüfen Sie die Vorschau, passen Sie Filter (Einschließen/Ausschließen) an und starten Sie dann.
4. Klicken Sie auf **Save to Jobs**, um dieselbe Synchronisation später erneut zu verwenden.

👉 Mehr erfahren:

- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure sync job between OneDrive and Google Drive" class="img-large img-center" />

### Methode 4: Automatische Sync-Jobs planen

1. Öffnen Sie **Job Manager → Add Job**.
2. Legen Sie **OneDrive** als Quelle und **Google Drive** als Ziel fest (oder umgekehrt).
3. Wählen Sie einen Zeitplan (stündlich, täglich, wöchentlich oder im Cron-Format).
4. Speichern und aktivieren Sie den Job; RcloneView führt ihn automatisch aus.
5. Prüfen Sie Protokolle und Verlauf zur Verifizierung.

👉 Mehr erfahren: [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to Google Drive sync job" class="img-large img-center" />

## Tipps für reibungslose Multi-Cloud-Übertragungen

- Nutzen Sie **Dry-Run** vor großen Synchronisationen, um zu prüfen, was sich ändern wird.
- Stellen Sie bei freigegebenen OneDrive/Drive-Ordnern sicher, dass Sie auf beiden Seiten Bearbeitungsrechte haben.
- Nutzen Sie **Bandbreitenbegrenzungen** während der Arbeitszeit, um Drosselungen zu vermeiden.
- Wenn Google Drive das Limit von 750 GB/Tag erreicht, teilen Sie den Job auf mehrere Tage oder Konten auf.
- Halten Sie den Tab **Transfer** geöffnet, um Wiederholungsversuche und Durchsatz zu verfolgen.

## Zusammenfassung

RcloneView erspart Ihnen das Hin- und Herschieben zwischen Download und erneutem Upload bei **OneDrive** und **Google Drive**. Mit nebeneinander angeordnetem Browsing, Compare, Sync, wiederverwendbaren Jobs und Zeitplanung können Sie einmalige Verschiebungen oder wiederkehrende Backups zuverlässig durchführen – keine Kommandozeile erforderlich.

<CloudSupportGrid />
