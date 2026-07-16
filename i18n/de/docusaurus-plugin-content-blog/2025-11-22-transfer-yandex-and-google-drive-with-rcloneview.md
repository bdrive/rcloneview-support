---
slug: transfer-yandex-and-google-drive-with-rcloneview
title: "Dateien zwischen Yandex Disk und Google Drive mit RcloneView übertragen"
authors:
  - tayson
description: "Dateien zwischen Yandex Disk und Google Drive migrieren und synchronisieren mit der GUI von RcloneView – natives Yandex-Login, OAuth für Google, Drag-and-Drop, Vergleichen, Synchronisation und geplante Jobs."
keywords:
  - rcloneview
  - yandex disk
  - google drive
  - cloud migration
  - cloud sync
  - rclone
  - cloud transfer
  - multi cloud
  - cloud to cloud transfer
tags:
  - cloud
  - sync
  - cloud-migration
  - tutorial
  - yandex
  - google-drive
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dateien zwischen Yandex Disk und Google Drive mit RcloneView übertragen

> Verschieben oder synchronisieren Sie Dateien zwischen Yandex Disk ↔ Google Drive, ohne die Kommandozeile zu benutzen.  
> RcloneView bietet nebeneinander angeordnete Explorer-Bereiche, Vergleichen, Synchronisation und geplante Jobs – und übernimmt dabei das Yandex-Browser-Login sowie das Google-OAuth für Sie.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Warum RcloneView für Übertragungen zwischen Yandex und Google Drive verwenden?

- **Natives Yandex-Login über Ihren Browser** (kein WebDAV, keine manuellen Tokens).
- **Sicheres OAuth**-Login für Google Drive.
- **Nebeneinander angeordnete Explorer-Bereiche** für intuitives Drag-and-Drop.
- **Vergleichsmodus (Compare)**, um Unterschiede vor dem Kopieren oder Löschen zu prüfen.
- **Synchronisation** mit Dry-Run, Filtern und Checksummen-Unterstützung.
- **Wiederverwendbare Jobs & Zeitplanung** für wiederkehrende Backups und Automatisierung.
- **Vollständige Fortschrittsübersicht** durch Protokolle, Wiederholungsversuche und Bandbreitensteuerung.

RcloneView baut auf rclone einen visuellen Workflow auf, sodass selbst komplexe Multi-Cloud-Übertragungen mühelos wirken.

---

## Bevor Sie beginnen

- Stellen Sie sicher, dass Sie sich bei Ihrem **Yandex-Konto** anmelden können – die Einrichtung erfolgt über Browser-Login, nicht über WebDAV.
- Prüfen Sie Ihr **Google Drive**-Kontingent und beachten Sie das tägliche Google-Upload-Limit von 750 GB.
- Installieren Sie die neueste RcloneView-Version von:  
  👉 https://rcloneview.com/src/download.html
- Halten Sie bei großen Aufgaben Ihren Computer wach und bevorzugen Sie stabile Netzwerke.

---

## Schritt 1: Ihre Cloud-Remotes hinzufügen

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  

### Yandex Disk verbinden (browserbasiertes Login)

1. Öffnen Sie **Remote → + New Remote**.
2. Wählen Sie **Yandex Disk** als Anbieter aus.
3. Klicken Sie auf **Connect**, wodurch sich eine Yandex-Login-Seite in Ihrem Browser öffnet.
4. Melden Sie sich an und gewähren Sie den Zugriff.
5. Speichern Sie den Remote, sobald RcloneView die erfolgreiche Authentifizierung bestätigt.  

### Google Drive verbinden

1. Klicken Sie erneut auf **+ New Remote**.
2. Wählen Sie **Google Drive**.
3. Drücken Sie **Connect**, schließen Sie das OAuth-Login im Browser ab und erlauben Sie die Berechtigungen.
4. Speichern Sie den Remote.

👉 Anleitung: [Google-Drive-Remote hinzufügen](/howto/#step-2-adding-remote-storage-google-drive-example)

---

## Schritt 2: Beide Clouds im Explorer-Bereich öffnen

1. Wechseln Sie zum **Browse**-Tab.
2. Klicken Sie im linken Bereich auf das **+**-Symbol → wählen Sie **Yandex Disk**.
3. Klicken Sie im rechten Bereich auf das **+**-Symbol → wählen Sie **Google Drive**.
4. Navigieren Sie zu den Ordnern, die Sie verschieben oder synchronisieren möchten.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />  

---

## Vier Möglichkeiten, Dateien zu übertragen

### Methode 1: Drag & Drop zwischen den Explorer-Bereichen

1. Wählen Sie im Yandex-Bereich Dateien oder Ordner aus.
2. Ziehen Sie diese in den Google-Drive-Bereich (oder in die entgegengesetzte Richtung).
3. Verfolgen Sie den Fortschritt unter **Transfer**.  

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />  


👉 Referenz:  
[Remote-Speicher durchsuchen und verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
[Dateien per Drag & Drop übertragen](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)  

---

### Methode 2: Vergleichen, dann kopieren oder löschen

1. Öffnen Sie den Quellordner in Yandex Disk (links) und den Zielordner in Google Drive (rechts).
2. Wählen Sie **Compare**.
3. RcloneView hebt Folgendes hervor:
   - Elemente, die nur auf einer Seite vorhanden sind
   - Elemente, die sich in der Größe unterscheiden
   - Übereinstimmende Dateien
4. Klicken Sie je nach Richtung auf **Copy →** oder **← Copy**.
5. Verwenden Sie **Delete** vorsichtig, wenn Sie Duplikate bereinigen.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />  


👉 Anleitung: [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)  


---

### Methode 3: Synchronisieren oder als Job speichern

1. Wählen Sie einen **Yandex-Ordner** als Quelle und einen **Google-Drive-Ordner** als Ziel.
2. Klicken Sie auf **Sync**.
3. Wählen Sie:
   - Einseitige Synchronisation (Yandex → Google Drive)
   - Einseitige Synchronisation (Google Drive → Yandex)
   - Zweiseitige Synchronisation
4. Sehen Sie sich die geplanten Vorgänge mit Dry-Run in der Vorschau an.
5. Führen Sie die Synchronisation aus, oder klicken Sie auf **Save to Jobs**, um sie später erneut zu verwenden.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  


👉 Weitere Informationen:

- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen und verwalten](/howto/rcloneview-basic/execute-manage-job)

---

### Methode 4: Wiederkehrende Sync-Jobs planen

1. Öffnen Sie **Job Manager → Add Job**.
2. Wählen Sie Yandex als Quelle und Google Drive als Ziel (oder umgekehrt).
3. Legen Sie ein Intervall fest (z. B. täglich, stündlich, wöchentlich).
4. Aktivieren Sie den Job.
5. Überprüfen Sie Protokolle und den Job-Verlauf, um die Ergebnisse einzusehen.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />  

👉 Weitere Informationen: [Job-Zeitplanung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## Tipps für reibungslose Übertragungen

- Verwenden Sie **Dry-Run**, bevor Sie große einseitige Synchronisationen durchführen.
- Die Google-Drive-API kann sehr große Bursts drosseln; reduzieren Sie bei Bedarf die Parallelität.
- Halten Sie RcloneView für geplante Jobs im Hintergrund laufen.

---

## Zusammenfassung

RcloneView macht die Übertragung von Dateien zwischen **Yandex Disk** und **Google Drive** einfach und zuverlässig.  
Mit nativem Login für beide Dienste, visuellen Explorer-Bereichen, Vergleichen, Synchronisation und Jobs können Sie Ihre Multi-Cloud-Workflows migrieren oder pflegen, ohne die Kommandozeile zu benutzen.

<CloudSupportGrid />
