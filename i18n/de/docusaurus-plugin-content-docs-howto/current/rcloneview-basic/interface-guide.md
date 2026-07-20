---
sidebar_position: 1
description: " Ein visueller Überblick über das RcloneView-Layout, einschließlich Titelleiste, Hauptmenüs, Datei-Explorer und Übertragungs-Tabs."
keywords:
  - rcloneview
  - rclone GUI
  - Cloud-Dateimanager
  - Verwaltung von Remote-Speicher
  - Datei-Explorer
  - Cloud-zu-Cloud-Übertragung
  - Dateisynchronisation
  - rcloneview Oberfläche
  - rcloneview Layout
  - Symbolleiste
  - Übertragungsstatus
tags:
  - RcloneView
  - UI-guide
  - file-explorer
  - Remote-Storage
  - layout
  - interface
  - cloud-file-transfer
  - Remote-storage-managent
date: 2025-05-27
author: Jay
---
# RcloneView Oberflächenleitfaden

RcloneView bietet ein intuitives Layout, mit dem Benutzer Dateien zwischen lokalem Speicher und Cloud-Remotes durchsuchen, vergleichen und übertragen können. Im Folgenden finden Sie eine Übersicht über jeden Bereich mit detaillierten Erklärungen.

<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="rcloneview user interface" class="img-large img-center" />
## ① Titelleiste

Zeigt den Anwendungsnamen und die Standard-Fensterbedienelemente an:

- `—`: Minimieren
- `□`: Maximieren / Wiederherstellen
- `X`: RcloneView beenden

## ② Hauptmenüleiste

Haupt-Navigationsregister für den Zugriff auf die Kernfunktionen:

- **`Home`** – Werkzeuge für Dateisynchronisation und -vergleich, Jobplanung und Unterstützung mehrerer Fenster
- **`Remote`** – Cloud-Speicher-Remotes hinzufügen, konfigurieren und einbinden
- **`Settings`** – Remote-Verbindungen, allgemeine Einstellungen und Oberflächen-Layout verwalten
- **`Help`** – Zugriff auf Produktsupport, Lizenzaktivierung, Feedback und Update-Prüfungen

## ③ Symbolleiste

Die Symbolleiste ändert sich dynamisch je nach ausgewähltem Menüregister:

  ### Wenn `Home` ausgewählt ist:

| Schaltfläche  | Beschreibung                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `Sync`        | Synchronisiert Dateien und Ordner zwischen den ausgewählten Verzeichnissen in den beiden Explorer-Fenstern |
| `Compare`     | Vergleicht Unterschiede zwischen den ausgewählten Verzeichnissen in zwei Explorer-Fenstern           |
| `Job Manager` | Erstellt und verwaltet wiederkehrende Synchronisationsjobs zwischen häufig verwendeten Remotes     |
| `New Window`  | Öffnet ein neues RcloneView-Fenster, um eine Verbindung zu einer anderen Rclone-Daemon-Instanz herzustellen        |
 
### Wenn `Remote` ausgewählt ist:

<img src="/support/images/en/howto/rcloneview-basic/remote-tab-toolbar.png" alt="remote tab toolbar" class="img-medium img-center" />

| Schaltfläche     | Beschreibung                                                                      |
| ---------------- | ---------------------------------------------------------------------------------- |
| `New Remote`     | Erstellt eine neue Verbindung zu einem Cloud-Speicher-Remote                                |
| `Remote Manager` | Gespeicherte Remotes anzeigen, bearbeiten oder löschen                                              |
| `Mount Manager`  | Bindet ein Remote als lokales Laufwerk ein                                                  |
| `Job Manager`    | Erstellt und verwaltet wiederkehrende Synchronisationsjobs zwischen häufig verwendeten Remotes |
  
### Wenn `Settings` ausgewählt ist:
<img src="/support/images/en/howto/rcloneview-basic/settings-menu-toolbar.png" alt="settings menu toolbar" class="img-medium img-center" />

| Schaltfläche       | Beschreibung                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `Connect Manager`  | Verwaltet und wechselt zwischen eingebetteten oder externen Rclone-Daemon-Verbindungen                                     |
| `General settings` | Konfiguriert Anwendungssprache, Dateipfade, Design, Drag-and-Drop-Verhalten, Optionen für eingebettetes Rclone und mehr. |
| `Layout`           | Wechselt zwischen horizontalem und vertikalem Fensterlayout für die Ordnerbaum- und Dateilistenansicht                   |
| `View count`       | Wechselt zwischen Einzel- und Zweifenster-Ansicht des Datei-Explorers                                                 |

### Wenn `Help` ausgewählt ist:
<img src="/support/images/en/howto/rcloneview-basic/help-menu-toolbar.png" alt="help menu toolbar" class="img-medium img-center" />

| Schaltfläche           | Beschreibung                           |
| ---------------------- | ------------------------------------- |
| `Check for Updates`    | Prüft, ob eine neue Version verfügbar ist   |
| `Feedback`             | Feedback senden oder Probleme melden      |
| `Homepage`             | Besuchen Sie die offizielle RcloneView-Website |
| `Register License Key` | Aktivieren Sie Ihre PLUS-Lizenz            |

## ④ Datei-Explorer-Fenster

Jedes Fenster ermöglicht es Ihnen, lokale Laufwerke oder Cloud-Remotes über eine Register-Oberfläche zu durchsuchen.
Sie können in jedem Fenster unterschiedliche Quellen öffnen und Dateien einfach zwischen ihnen übertragen.

  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-pannel-layout.png" alt="file explorer panel layout" class="img-medium img-center" />
Das Fenster enthält die folgenden Komponenten:

1. **Registerleiste** – Zeigt die aktuelle Verbindung an (z. B. Local Disk, myAwsS3, myGoogleDrive)
2. **Breadcrumb-Pfadleiste** – > Zeigt den aktuellen Ordnerpfad an und unterstützt schnelle Navigation durch Klicken oder Eingabe mit Auto-Vorschlägen.
3. **Fenster-Symbolleiste** – Enthält Schnellaktionen:
	- <img src="/support/icons/alias-icon.png" alt="alias icon" class="inline-icon" /> **Alias erstellen (Favorit)** — Speichert den aktuellen Ordner als Favorit für schnellen Zugriff
	- <img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />**Ordner einbinden** — Bindet den ausgewählten Ordner als lokales Laufwerk ein
	- <img src="/support/icons/settings-icon.png" alt="settings icon" class="inline-icon" /> **Remote-Einstellungen bearbeiten** — Ändert die Konfiguration des verbundenen Remotes
	- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" /> **Aktualisieren** — Lädt den Inhalt des aktuellen Ordners neu
4. **Ordnerbaum** – Ein einklappbarer Ordner-Navigator
5. **Datei-/Ordnerlistenansicht** – Zeigt Inhalte mit Name, Typ, Änderungsdatum und Größe an
6. **Zusammenfassungs-Fußzeile** – Zeigt die Gesamtzahl der Dateien/Ordner und die Gesamtdateigröße an

## ⑤ Übertragungsstatus-Register

Zeigt den Status und den Verlauf von Synchronisations- oder Dateiübertragungsvorgängen an:

| Register        | Beschreibung                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| **`Transfer`**  | Zeigt alle aktiven Übertragungsjobs mit Geschwindigkeit, Fortschritt und verbleibender Zeit an |
| **`Completed`** | Listet alle abgeschlossenen Synchronisations- oder Kopierjobs mit Details wie Zeit, Größe und Job-ID auf               |
| **`Log`**       | Zeigt zeitgestempelte Protokolleinträge mit Zeitstempeln, Jobtypen, Meldungen und Status an               |
## ⑥ Fußzeile

- **Versionsinformationen**: Aktuell laufende Version von RcloneView (z. B. `RcloneView 0.6.301`)
- **Lizenzinformationen**: Zeigt den Lizenztyp an (`FREE License` oder `PLUS License`)
- **Rclone-Verbindungsinformationen**: Zeigt die verbundene rclone-Instanz, Serveradresse und Betriebssystem an
  - Beispiel: `Connected to rclone v1.69.1 (http://127.0.0.1:5582, windows)`
