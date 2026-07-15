---
sidebar_position: 2
description: "Erfahren Sie, wie Sie mit der intuitiven Drag-and-Drop-Oberfläche und dem Job-Scheduler von RcloneView Dateien zwischen Google Drive und OneDrive kopieren, synchronisieren und zeitgesteuert übertragen."
keywords:
  - rcloneview
  - Google Drive zu OneDrive
  - Cloud-zu-Cloud-Übertragung
  - Dateisynchronisation
  - Cloud-Migration
  - Cloud-Speicher
  - Cloud-Synchronisation
  - Onedrive
  - google drive
  - Job-Planung
  - rclone
  - sync
  - geplante Jobs
  - Drag and Drop
tags:
  - RcloneView
  - Tutorial
  - cloud-storage
  - cloud-file-transfer
  - cloud-migration
  - google-drive
  - onedrive
  - Sync
  - job
  - cloud-to-cloud
date: 2025-05-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Anleitung: Übertragung von Google Drive zu OneDrive
  

Cloud-Speicherdienste sind für die Verwaltung von Dokumenten, Medien und Backups unverzichtbar geworden. Zwei der am weitesten verbreiteten Dienste sind **Google Drive** und **Microsoft OneDrive**. Beide bieten großzügigen Speicherplatz, Integration mit Produktivitätstools (Google Workspace und Microsoft 365) sowie breite Plattformunterstützung.

Obwohl beide Plattformen ihre eigenen Cloud-Ökosysteme bereitstellen, bietet **RcloneView** eine zentrale Oberfläche, um Dateien zwischen ihnen zu verwalten, zu übertragen und zu synchronisieren – **ohne komplexe Skripte oder Befehlszeilenoperationen**.

In dieser Anleitung zeigen wir Ihnen Schritt für Schritt, wie Sie **Dateien von Google Drive zu OneDrive übertragen** – mit **RcloneView**, einem GUI-basierten Tool auf Basis von Rclone, das die Verwaltung mehrerer Clouds einfach und leistungsstark macht.

<img src="/support/images/en/tutorials/google-drive-to-ondrive-transfer.png" alt="google drive to ondrive transfer" class="img-medium img-center" />

## **Warum RcloneView für Cloud-zu-Cloud-Übertragungen verwenden?**

RcloneView ist eine leistungsstarke GUI auf Basis der Rclone-Engine, die die Verwaltung von Cloud-Speicher vereinfacht.

- Einfaches Verbinden mehrerer Cloud-Anbieter
- Intuitive Oberfläche zum Übertragen von Dateien per Drag-and-Drop
- Vergleich von Ordnerinhalten vor der Übertragung
- Einfache GUI mit erweiterten Funktionen wie Dry-Run, Filtern und Job-Planung
- Planung wiederkehrender Übertragungen und Backups
- Sichere OAuth-Anmeldung für Google Drive und OneDrive

Im Gegensatz zu herkömmlichen manuellen Download-/Upload-Methoden automatisiert RcloneView den Prozess durch direkte API-basierte Operationen – für reibungslose, unbeaufsichtigte Übertragungen zwischen Cloud-Speichern.

## 📙 Dateien von Google Drive zu OneDrive übertragen


### Google Drive- und OneDrive-Remotes in RcloneView hinzufügen

1. Öffnen Sie **RcloneView** und klicken Sie im Menü **`Remote`** auf **`+ New Remote`**.  
2. Suchen und wählen Sie im Tab **`Provider`** **Google Drive** aus.  
3. Durchlaufen Sie den Assistenten und schließen Sie die OAuth-Anmeldung ab.  
4. Wiederholen Sie denselben Vorgang für **OneDrive**.  

 🔍 Für eine detaillierte Einrichtung siehe:
 - [How to Add Google Drive Remote](/howto/#step-2-adding-remote-storage-google-drive-example)
 - [How to Add OneDrive Remote](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)

### Beide Remotes im Explorer-Bereich öffnen

1. Öffnen Sie **RcloneView** und wechseln Sie im Explorer-Bereich zum **Browse-Tab**.  
2. Klicken Sie in einem Bereich auf das Plus-Symbol `+` in dessen Kopfzeile und wählen Sie Ihren **Google Drive**-Remote aus der Liste.  
3. Klicken Sie im anderen Bereich auf das `+`-Symbol und wählen Sie Ihren **OneDrive**-Remote aus der Liste.  
4. Beide Remotes werden nun nebeneinander angezeigt, sodass Sie Dateien und Ordner zwischen ihnen leicht kopieren, vergleichen, ziehen oder synchronisieren können.  

<img src="/support/images/en/tutorials/open-google-drive-and-onedrive.png" alt="open google drive and onedrive" class="img-medium img-center" />

### 📌 4 Methoden zur Dateiübertragung

RcloneView bietet mehrere leistungsstarke Methoden, um Daten zwischen Google Drive und OneDrive zu verschieben oder zu synchronisieren. Wählen Sie die für Ihren Workflow passende:

#### 🖱️ **Methode 1: Drag & Drop zwischen Explorer-Bereichen**

  
	1. Öffnen Sie **RcloneView** und wechseln Sie zum Tab **Browse** (standardmäßig beim Start angezeigt).  
	2. Stellen Sie sicher, dass beide Cloud-Remotes (Google Drive und OneDrive) nebeneinander im Dual-Pane-Explorer sichtbar sind.  
	3. Ziehen Sie einfach **Dateien oder Ordner** aus dem Google-Drive-Bereich und **legen** Sie sie im OneDrive-Bereich ab.  
	4. Die Übertragung beginnt automatisch über die Rclone-Hintergrund-Engine. Sie können den Fortschritt in Echtzeit im Tab **`Transfer`**-Logs verfolgen.  

  
Diese intuitive Drag-and-Drop-Oberfläche vereinfacht das Verschieben oder Kopieren von Dateien – ohne Befehle.

👉 Mehr erfahren: [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 **Methode 2: Ordnerinhalte vergleichen, kopieren oder löschen**

  
	1. Navigieren Sie in beiden Explorer-Bereichen zu den Ordnern, die Sie vergleichen möchten, und wählen Sie diese aus (links: Google Drive, rechts: OneDrive).  
	2. Klicken Sie im Hauptmenü-Tab auf die Schaltfläche **`Compare`**, um den Ordnervergleich zu starten.  
	3. RcloneView scannt und hebt hervor:  
		- Dateien, die nur auf einer Seite vorhanden sind  
		- Dateien mit demselben Namen, aber unterschiedlicher Größe  
		- Identische Dateien
	4. Wählen Sie die Dateien aus, für die Sie eine Aktion durchführen möchten.  
	5. Um Dateien von links nach rechts zu übertragen, klicken Sie auf die Schaltfläche **`Copy →`**.  
		   Um von rechts nach links zu übertragen, verwenden Sie die Schaltfläche **`← Copy`**.  
		   Um eine Datei aus einem Remote zu entfernen, klicken Sie in dessen Bereich auf die Schaltfläche **`Delete`**.  
	6. Fortschritts- und Zusammenfassungsaktualisierungen erscheinen in der Statusleiste.  


Dieser visuelle Vergleich minimiert Fehler, indem Sie Dateien überprüfen können, **bevor** Sie sie verschieben oder löschen.

👉 Mehr dazu im [Compare Folder Contents guide](/howto/rcloneview-basic/compare-folder-contents)


#### 🔁 **Methode 3: Sync oder Job verwenden**

1. Navigieren Sie im Explorer-Bereich zu dem **Google Drive**-Ordner und dem **OneDrive**-Ordner, die Sie synchronisiert halten möchten, und wählen Sie diese aus.  
2. Klicken Sie im `home`-Menü auf die Schaltfläche **`Sync`**.  
3. Wählen Sie Synchronisationsoptionen (uni- oder bidirektional), sehen Sie sich die Vorschau der Aktionen an und bestätigen Sie.   
4. RcloneView führt die Synchronisation aus und zeigt einen Fortschrittsindikator im Log-Tab **`transfer`** an.   

- Alternativ für wiederholte oder geplante Übertragungen:  

  1. Klicken Sie im Sync-Modalfenster auf **`Save to Jobs`** oder öffnen Sie den **`Job Manager`** → klicken Sie auf **`Add Job`**.   
  2. Konfigurieren Sie Quelle und Ziel und legen Sie die Optionen fest.   
  3. Speichern Sie den Job und führen Sie ihn manuell aus oder planen Sie ihn.  

 👉 Mehr erfahren:  

- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### ⏰ Methode 4: Automatischen Sync-Job planen 

1. Navigieren Sie im Explorer-Bereich zu dem **Google Drive**-Ordner und dem **OneDrive**-Ordner, die Sie synchronisiert halten möchten, und wählen Sie diese aus.  
2. Öffnen Sie den **`Job Manager`** über das Menü **`Home`** oder **`Remote`** und klicken Sie dann auf **`Add Job`**.  
3. Überprüfen Sie die ausgewählte Quelle und das Ziel; passen Sie diese bei Bedarf an.  
4. Verwenden Sie den Zeitplan-Editor, um festzulegen, wann der Job ausgeführt werden soll. RcloneView bietet ein integriertes Simulationstool, mit dem Sie Ihr Zeitplanmuster vor dem Speichern in der Vorschau ansehen können.  
5. Speichern und aktivieren Sie den geplanten Job.   

Nach dem Speichern führt RcloneView die Synchronisation automatisch zu den von Ihnen festgelegten Zeiten aus.  

Ausführungsdetails und Protokolle finden Sie in **`Job History`**, und Sie erhalten eine Benachrichtigung, sobald der Job erfolgreich abgeschlossen wurde.

👉 Mehr erfahren: [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)


## **Fazit**

Die Übertragung von Dateien zwischen Cloud-Diensten wie Google Drive und OneDrive muss nicht kompliziert sein. Mit **RcloneView** genügen dafür wenige Klicks – ohne Befehlszeile.

Diese Methode ist schnell, sicher und zuverlässig, egal ob Sie Gigabytes an persönlichen Dateien verschieben oder Unternehmensdokumente über mehrere Konten hinweg synchronisieren.

 🎯 Probieren Sie RcloneView noch heute aus und gestalten Sie Ihre Multi-Cloud-Verwaltung mühelos.

---

## 🔗 Verwandte Anleitungen

- [How to Add Google Drive Remote](/howto/#step-2-adding-remote-storage-google-drive-example)
- [How to Add OneDrive Remote](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Browse & Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Compare Folder Contents guide](/howto/rcloneview-basic/compare-folder-contents)
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)


<CloudSupportGrid />
