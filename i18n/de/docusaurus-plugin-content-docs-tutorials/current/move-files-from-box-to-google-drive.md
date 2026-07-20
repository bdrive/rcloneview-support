---
sidebar_position: 7
description: Erfahren Sie, wie Sie mit der RcloneView-GUI nahtlos Dateien zwischen Box und Google Drive übertragen und synchronisieren – mit Drag-and-Drop, Ordnervergleich und Job-Planung.
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - Box
  - google drive
  - box to google drive
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - box
  - google-drive
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Anleitung: Dateiübertragung zwischen Box und Google Drive

Cloud-Speicher-Plattformen wie **Box** und **Google Drive** bieten jeweils einzigartige Vorteile. Box ist auf Unternehmenskollaboration mit erweiterten Sicherheits- und Workflow-Funktionen zugeschnitten, während Google Drive nahtlos mit Google Workspace zusammenarbeitet und großzügigen kostenlosen Speicherplatz bietet. Die Verwaltung von Dateien auf beiden Plattformen kann jedoch mühsam sein – insbesondere, wenn Sie Daten zwischen ihnen migrieren müssen.

Mit **RcloneView** können Sie ganz einfach **Dateien in beide Richtungen übertragen** zwischen Box und Google Drive – über eine intuitive GUI, ganz ohne Kommandozeile.

  
<img src="/support/images/en/tutorials/transfer-files-between-box-and-google-drive.png" alt="transfer files between box and google drive" class="img-medium img-center" />

## **Warum RcloneView für Multi-Cloud-Übertragungen nutzen?**

RcloneView vereinfacht komplexe Cloud-Übertragungen durch:

- Sichere OAuth-Integration für Box und Google Drive  
- Drag-and-Drop-Dateiübertragungen zwischen Clouds
- Ordnervergleichs-Tools, um Unterschiede vor der Übertragung anzuzeigen  
- Synchronisation und Planung wiederkehrender Übertragungen und Backups
- Dry-Run-Vorschau, Filter und erweiterte Übertragungsoptionen  
- Überwachung der Hintergrundübertragung mit Fortschrittsprotokollen  

Anstatt Dateien manuell herunterzuladen und dann erneut hochzuladen, nutzt RcloneView eine direkte API-basierte Übertragung – das macht Ihren Workflow schneller und zuverlässiger.

## 🔄 Dateien übertragen: Box ↔ Google Drive

### Schritt 1: Ihre Cloud-Remotes verbinden

1. Starten Sie **RcloneView** und wählen Sie im Menü **Remote** die Option **`+ New Remote`**.  
2. Suchen und wählen Sie im Tab **`Provider`** **Box** aus.
3. Schließen Sie die OAuth-Anmeldung wie angefordert ab.
4. Wiederholen Sie denselben Vorgang für **Google Drive**.


👉 Mehr erfahren:  

- [Box-Remote hinzufügen](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [Google-Drive-Remote hinzufügen](/howto/#step-2-adding-remote-storage-google-drive-example)

### Schritt 2: Remotes nebeneinander öffnen

1. Wechseln Sie im Explorer-Bereich zum Tab **Browse**.
2. Klicken Sie in einem Fensterbereich auf das Plus-Symbol `+` und wählen Sie Ihr **Box**-Remote.
3. Klicken Sie im anderen Fensterbereich auf `+` und wählen Sie Ihr **Google Drive**-Remote.
4. Beide Remotes werden nebeneinander angezeigt, sodass Sie einfach zwischen ihnen ziehen, kopieren oder synchronisieren können.

Jetzt können Sie problemlos Übertragungen zwischen ihnen durchführen.

<img src="/support/images/en/tutorials/open-box-and-google-drive-remotes.png" alt="open box and google drive remotes" class="img-medium img-center" />

### 📌 4 Methoden für Dateiübertragungen

RcloneView bietet mehrere flexible Möglichkeiten, Daten von Box zu Google Drive zu verschieben oder zu synchronisieren. Wählen Sie die Methode, die zu Ihrem Workflow passt:

#### 🖱️ Methode 1: Drag & Drop zwischen Explorer-Fensterbereichen

1. Öffnen Sie **RcloneView** und navigieren Sie zum Tab **Browse**.
2. Stellen Sie sicher, dass sowohl das Box- als auch das Google-Drive-Remote nebeneinander sichtbar sind.
3. **Ziehen Sie Dateien oder Ordner** aus dem Box-Fensterbereich und **legen Sie sie** im Google-Drive-Fensterbereich ab.
4. Die Übertragung startet automatisch. Verfolgen Sie den Fortschritt im Tab **`Transfer`**-Protokolle.

Diese intuitive Drag-and-Drop-Oberfläche macht Cloud-zu-Cloud-Übertragungen mühelos – ganz ohne Befehle.

👉 Weitere Details: [Remote-Speicher durchsuchen und verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 Methode 2: Ordnerinhalte vergleichen, kopieren oder löschen

1. Navigieren Sie in beiden Explorer-Fensterbereichen zu den Ordnern, die Sie vergleichen möchten, und wählen Sie diese aus (links: Box, rechts: Google Drive).
2. Klicken Sie im Hauptmenü auf die Schaltfläche **`Compare`**.
3. RcloneView hebt Folgendes hervor:
   - Dateien, die nur auf einer Seite vorhanden sind
   - Dateien mit demselben Namen, aber unterschiedlicher Größe
   - Identische Dateien
4. Wählen Sie Dateien zum Übertragen oder Löschen aus.
5. Um Dateien von links nach rechts zu übertragen, klicken Sie auf **`Copy →`**. Um von rechts nach links zu übertragen, verwenden Sie **`← Copy`**. Um eine Datei zu entfernen, klicken Sie auf **`Delete`**.
6. Fortschritts- und Zusammenfassungsupdates werden in der Statusleiste angezeigt.

Der visuelle Vergleich hilft, Fehler zu vermeiden, und stellt sicher, dass Sie nur das verschieben, was Sie beabsichtigen.

👉 Mehr erfahren: [Anleitung zum Vergleichen von Ordnerinhalten](/howto/rcloneview-basic/compare-folder-contents)

  
#### 🔁 Methode 3: Sync oder Job verwenden

1. Wählen Sie im Explorer-Fensterbereich den **Box**-Ordner und den **Google Drive**-Ordner aus, die Sie synchronisieren möchten.
2. Klicken Sie im `home`-Menü auf die Schaltfläche **`Sync`**.
3. Wählen Sie Synchronisationsoptionen (einseitig oder zweiseitig), sehen Sie sich die Vorschau der Aktionen an und bestätigen Sie.
4. RcloneView führt die Synchronisation aus und zeigt den Fortschritt im Protokoll-Tab **`transfer`** an.

- Für wiederholte oder geplante Übertragungen:
  1. Klicken Sie im Sync-Dialog auf **`Save to Jobs`** oder öffnen Sie **`Job Manager`** → **`Add Job`**.
  2. Konfigurieren Sie Quelle, Ziel und Optionen.
  3. Speichern und manuell ausführen oder einen Zeitplan festlegen.

👉 Mehr erfahren:
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen und verwalten](/howto/rcloneview-basic/execute-manage-job)

  
#### ⏰ Methode 4: Automatischen Sync-Job planen

1. Wählen Sie im Explorer-Fensterbereich die **Box**- und **Google Drive**-Ordner aus, die Sie synchron halten möchten.
2. Öffnen Sie **`Job Manager`** über das Menü **`Home`** oder **`Remote`** und klicken Sie dann auf **`Add Job`**.
3. Bestätigen Sie Ihre Quelle und Ihr Ziel.
4. Verwenden Sie den Zeitplan-Editor, um festzulegen, wann der Job ausgeführt werden soll. Überprüfen Sie Ihren Zeitplan in der Vorschau, bevor Sie speichern.
5. Speichern und den geplanten Job aktivieren.

RcloneView führt die Synchronisation zu den von Ihnen festgelegten Zeiten aus. Details zur Ausführung und Protokolle finden Sie unter **`Job History`**, und Sie erhalten Benachrichtigungen nach Abschluss.

👉 Mehr erfahren: [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

  
## ✅ Zusammenfassung

Ob Sie Daten einmalig migrieren oder eine kontinuierliche Synchronisation aufrechterhalten möchten – RcloneView ermöglicht schnelle, sichere und zuverlässige Dateiübertragungen zwischen Box und Google Drive und macht manuelle Downloads oder Kommandozeilen-Tools überflüssig.

  
Probieren Sie es aus und optimieren Sie Ihre Multi-Cloud-Workflows!

  
## 🔗 Verwandte Anleitungen

- [Wie man ein Box-Remote hinzufügt](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [Wie man ein Google-Drive-Remote hinzufügt](/howto/#step-2-adding-remote-storage-google-drive-example)  
- [Remote-Speicher durchsuchen und verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
- [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)  
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Sync-Jobs erstellen](/howto/rcloneview-basic/create-sync-jobs)  
- [Jobs ausführen und verwalten](/howto/rcloneview-basic/execute-manage-job)  
- [Job-Planung und -Ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

  

<CloudSupportGrid />
