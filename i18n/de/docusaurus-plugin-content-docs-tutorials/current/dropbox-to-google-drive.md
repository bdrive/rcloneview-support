---
sidebar_position: 4
description: "Erfahren Sie, wie Sie mit der intuitiven Benutzeroberfläche von RcloneView ganz einfach Dateien zwischen Dropbox und Google Drive übertragen oder synchronisieren – ohne Terminal oder Skripting."
keywords:
  - rcloneview
  - Dropbox
  - google drive
  - Cloud-zu-Cloud-Übertragung
  - Cloud-Übertragung
  - Dateisynchronisation
  - Cloud-Speicher
  - Cloud-Migration
  - Cloud-Synchronisation
  - Cloud-Dateiübertragung
  - rclone
tags:
  - RcloneView
  - dropbox
  - google-drive
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - Sync
  - cloud-to-cloud
date: 2025-07-01
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Anleitung: Übertragung von Dropbox zu Google Drive

In der heutigen digitalen Arbeitswelt ist es üblich, mehrere Cloud-Speicherdienste zu nutzen, um Dateien zu speichern und zu verwalten – sei es für den privaten Gebrauch, die Zusammenarbeit im Team oder die plattformübergreifende Synchronisation.

**Dropbox** ist bekannt für seine Einfachheit und schnelle Dateisynchronisation, besonders bei Teams, während **Google Drive** eine tiefe Integration mit Google Workspace (Docs, Sheets, Gmail usw.) sowie großzügigen kostenlosen Speicherplatz bietet. Wenn Nutzer über einen Dienst hinauswachsen oder Dateien der Einfachheit oder Zusammenarbeit halber zusammenführen möchten, wird die Übertragung von Daten zwischen Cloud-Plattformen unerlässlich.

Das manuelle Herunterladen und erneute Hochladen von Dateien ist zeitaufwendig und fehleranfällig. Genau hier kommt **RcloneView** ins Spiel.

**RcloneView** ist eine grafische Benutzeroberfläche für [Rclone](https://rclone.org), die entwickelt wurde, um Cloud-zu-Cloud-Dateiübertragungen zu vereinfachen, ohne dass Kommandozeilen-Tools erforderlich sind. Mit RcloneView können Sie:

- Dropbox und Google Drive in einer Zwei-Fenster-Oberfläche verbinden und durchsuchen
- Dateien per Drag-and-Drop oder Synchronisationsvorgänge übertragen
- Ordnerunterschiede vor dem Verschieben in der Vorschau ansehen
- Wiederkehrende Übertragungen mithilfe geplanter Jobs automatisieren

Ob Sie den Dienst wechseln, wichtige Daten sichern oder Dateien zwischen Konten synchronisieren möchten – **RcloneView macht Übertragungen von Dropbox zu Google Drive einfach und zuverlässig** – ganz ohne eine einzige Zeile Code zu schreiben.

  <img src="/support/images/en/tutorials/dropbox-to-google-drive-transfer.png" alt="dropbox to google drive transfer" class="img-medium img-center" />
## **Warum RcloneView für Cloud-zu-Cloud-Übertragungen verwenden?**

RcloneView ist ein benutzerfreundliches grafisches Tool, das auf der Rclone-CLI aufbaut. Es bietet leistungsstarke Funktionen mit einer einfachen Oberfläche:

- OAuth-basierte sichere Anmeldung für Dropbox und Google Drive
- Zwei-Fenster-Explorer für einfache Dateinavigation
- Drag-and-Drop-Übertragungen zwischen Remotes
- Ordner vor dem Kopieren vergleichen
- Synchronisationsjobs erstellen und planen

Ob Sie große Datenmengen synchronisieren oder nur ein paar Ordner migrieren möchten, mit RcloneView erledigen Sie die Aufgabe in wenigen Minuten.

## 📙 Dateien von Dropbox zu Google Drive übertragen

### Dropbox- und Google-Drive-Remotes in RcloneView hinzufügen

1. Starten Sie **RcloneView** und klicken Sie im Menü `Remote` auf **`+ New Remote`**.
2. Suchen und wählen Sie im Tab **`Provider`** **Dropbox** aus.
3. Fahren Sie mit der OAuth-Anmeldung fort.
4. Wiederholen Sie dieselben Schritte, um **Google Drive** hinzuzufügen.

👉 Für eine detaillierte Einrichtung siehe:
- [So fügen Sie einen Dropbox-Remote hinzu](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [So fügen Sie einen Google-Drive-Remote hinzu](/howto/#step-2-adding-remote-storage-google-drive-example)

:::important Verbindung mit Dropbox Business
Wenn Sie **Dropbox Business** verwenden, stellen Sie sicher, dass Sie beim Hinzufügen des Remotes den Business-Modus aktivieren.

Scrollen Sie im Tab **`Options`** nach unten und klicken Sie auf **`Advanced Options`**, suchen Sie dann das Feld dropbox_business` und setzen Sie es auf `true`.

:::
### Beide Remotes im Explorer-Bereich öffnen

1. Wechseln Sie zum Tab **Browse** (standardmäßig beim Start aktiv).
2. Klicken Sie im linken Bereich auf `+` und wählen Sie Ihren **Dropbox**-Remote aus.
3. Klicken Sie im rechten Bereich auf `+` und wählen Sie Ihren **Google-Drive**-Remote aus.
4. Sie können nun beide Speicher nebeneinander ansehen und bearbeiten.

<img src="/support/images/en/tutorials/open-dropbox-and-google-drive.png" alt="open dropbox and google drive" class="img-medium img-center" />
## 🔄 Übertragungsmethoden

### 🖱️ **Methode 1: Drag & Drop**

- Ziehen Sie Dateien/Ordner einfach vom Dropbox-Bereich in den Google-Drive-Bereich.
- RcloneView beginnt die Übertragung sofort.
- Verfolgen Sie den Fortschritt im Tab **`Transfer`** Logs.

👉 Mehr erfahren: [Remote-Speicher durchsuchen & verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)

### 🔍 Methode 2: Ordnerinhalte vergleichen, dann kopieren oder löschen

1. Wählen Sie in beiden Explorer-Bereichen die Quell- (z. B. Dropbox) und Zielordner (z. B. Google Drive) aus, die Sie vergleichen möchten.
2. Klicken Sie im Menü `Home` auf die Schaltfläche **`Compare`**, um den Ordnervergleich zu starten.
3. RcloneView hebt Unterschiede zwischen den Ordnern hervor:
       - Dateien, die nur auf einer Seite existieren
       - Dateien mit gleichem Namen, aber unterschiedlicher Größe
       - Identische Dateien
4. Sehen Sie sich die Ergebnisse visuell an und wählen Sie dann die Dateien aus, auf die Sie reagieren möchten.
5. Klicken Sie auf **Copy →**, um von links nach rechts zu kopieren, oder **← Copy** für die entgegengesetzte Richtung.
       Verwenden Sie **Delete**, um ausgewählte Dateien von einer der beiden Seiten zu entfernen.
6. Der Übertragungsfortschritt und die Ergebnisse werden in der Statusleiste und im Log-Tab angezeigt.

  Diese Methode hilft Ihnen, sorgfältig zu vergleichen und zu steuern, was kopiert oder gelöscht wird – so minimieren Sie Fehler und stellen genaue Übertragungen sicher.

  👉 Mehr erfahren: [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)

### 🔁  Methode 3: Synchronisieren oder Job erstellen

1. Wählen Sie in den Explorer-Bereichen den **Dropbox**-Ordner (Quelle) und den **Google-Drive**-Ordner (Ziel) aus.
2. Klicken Sie im Menü **`Home`** auf die Schaltfläche **`Sync`**, um den Synchronisationsdialog zu öffnen.
3. Wählen Sie die gewünschte Synchronisationsrichtung und -optionen aus und starten Sie den Vorgang.
4. Für wiederkehrende oder gespeicherte Aufgaben klicken Sie im Synchronisationsfenster auf **Save as Job**,
       oder gehen Sie über das Menü **`Home`** zu **`Job Manager` → `Add Job`**, um einen geplanten Job zu erstellen.

👉 Mehr erfahren:
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Synchronisationsjobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobs ausführen & verwalten](/howto/rcloneview-basic/execute-manage-job)

### **⏰** Methode 4: Automatischen Synchronisationsjob planen

1. Wählen Sie im Explorer-Bereich den Dropbox-Quellordner und den Google-Drive-Zielordner aus, die Sie automatisch synchronisieren möchten.
2. Öffnen Sie den **`Job Manager`** über das Menü **`Home`** oder **`Remote`** und klicken Sie auf **`Add Job`**.
3. Stellen Sie sicher, dass Ihre Quell- und Zielordner korrekt sind. Sie können sie bei Bedarf erneut auswählen oder ändern.
4. Verwenden Sie den **Schedule Editor**, um festzulegen, wann und wie oft die Synchronisation ausgeführt werden soll (z. B. täglich um Mitternacht).
       RcloneView verfügt über ein integriertes **Vorschau-Tool**, mit dem Sie Ihr Zeitplanmuster simulieren und bestätigen können, bevor Sie es speichern.
5. Speichern und aktivieren Sie den geplanten Job.

Nach der Erstellung läuft der Job **automatisch** gemäß Ihrem Zeitplan – **ohne dass ein Benutzereingriff erforderlich ist**.

Der gesamte Fortschritt und die Ergebnisse sind im Tab **`Job History`** verfügbar, und Sie werden nach Abschluss des Jobs durch Systembenachrichtigungen informiert.

👉 Mehr erfahren: [Jobplanung und -ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

## ✅ Fazit

Mit RcloneView sind Cloud-zu-Cloud-Übertragungen nahtlos und effizient. Egal, ob Sie Backups konsolidieren oder Teams plattformübergreifend synchronisieren – RcloneView hilft Ihnen, schneller zu arbeiten – ganz ohne Terminalbefehle.

Probieren Sie es noch heute aus und vereinfachen Sie Ihre Dropbox-↔-Google-Drive-Dateiabläufe.

---

## 🔗 Verwandte Anleitungen

- [So fügen Sie einen Dropbox-Remote hinzu](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [So fügen Sie einen Google-Drive-Remote hinzu](/howto/#step-2-adding-remote-storage-google-drive-example)
- [Remote-Speicher durchsuchen & verwalten](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Ordnerinhalte vergleichen](/howto/rcloneview-basic/compare-folder-contents)
- [Remote-Speicher synchronisieren](/howto/rcloneview-basic/synchronize-remote-storages)
- [Synchronisationsjobs erstellen](/howto/rcloneview-basic/create-sync-jobs)
- [Jobplanung und -ausführung](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
