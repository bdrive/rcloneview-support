---
sidebar_position: 9
description: "Ändern Sie den Speicherort, an dem RcloneView seine SQLite-Datenbank (rclone_view.db) ablegt, und wählen Sie einen sicheren, beschreibbaren Ordner für Verlauf, Jobs, Mounts und UI-Status."
keywords:
  - rcloneview
  - database
  - rclone_view.db
  - settings
  - path settings
  - job history
  - transfer history
  - sqlite
  - backup
tags:
  - RcloneView
  - Tutorial
  - settings
  - backup
  - database
date: 2025-12-08
author: tayson
---

# Den Speicherort der Datenbank ändern

RcloneView speichert seinen zentralen Status in einer SQLite-Datei namens **`rclone_view.db`**. Diese Datenbank speichert Ihren Übertragungsverlauf, Job-Definitionen, Mount-Einstellungen, den Job-Ausführungsverlauf und den UI-Status – alles, was die App benötigt, um sich zu „merken, was Sie getan haben“ und den „aktuellen Status“ in der Oberfläche anzuzeigen.

Standardmäßig befindet sich die Datenbank in Ihrem Dokumente-Ordner. Sie können sie an einen anderen beschreibbaren Ort verschieben, etwa auf ein externes Laufwerk oder in einen synchronisierten Backup-Ordner.

<img src="/support/images/en/tutorials/database/database-windows-path.png" class="img-medium img-center" alt="Default database path on Windows" />

## Standard-Datenbankpfad nach Betriebssystem

| Platform | Default path                               |
| -------- | ------------------------------------------ |
| Windows  | `C:\Users\<user>\Documents\rclone_view.db` |
| macOS    | `/Users/<user>/Documents/rclone_view.db`   |
| Linux    | `/home/<user>/Documents/rclone_view.db`    |

## So ändern Sie den Speicherort der Datenbank

Sie können direkt in RcloneView jeden beschreibbaren Ordner (lokal oder extern) auswählen.

### Schritt 1 — Einstellungen öffnen

- Gehen Sie im oberen Menü zu **Settings → General Settings**.  
  <img src="/support/images/en/tutorials/database/database-settings-menu.png" class="img-medium img-center" alt="Open Settings menu" />

### Schritt 2 — Embedded Rclone → Path Settings

- Öffnen Sie im Einstellungsfenster **Embedded Rclone → Path Settings**.
- Klicken Sie auf **Database folder**, um einen neuen Speicherort für `rclone_view.db` auszuwählen.  
  <img src="/support/images/en/tutorials/database/database-settings-dlg.png" class="img-medium img-center" alt="Database folder picker" />

- Verwenden Sie das Ordnersymbol, um zum Zielverzeichnis zu navigieren; RcloneView legt `rclone_view.db` dort ab.

## Hinweise zu Berechtigungen und Pfaden

RcloneView prüft die Schreibberechtigung, indem es eine temporäre Datei im ausgewählten Ordner erstellt. Bestimmte Systemordner blockieren Schreibzugriffe für Standardbenutzer und lösen eine Warnung aus:

- **Windows**: `C:\Program Files`, `C:\Windows`, usw.
- **macOS**: `/Applications`, `/System`, `/usr`, usw.
- **Linux**: `/usr`, `/opt`, `/etc`, usw.

<img src="/support/images/en/tutorials/database/database-settings-warning.png" class="img-medium img-center" alt="Permission warning" />

Wenn Sie diese Warnung sehen, wählen Sie einen anderen Pfad mit vollem Schreibzugriff.

## Empfohlene Speicherorte

- `C:\Users\<user>\Documents`
- `C:\Users\<user>\AppData\Roaming`
- Jeder persönliche Ordner, den Sie besitzen und mit Schreibrechten versehen ist
- Ein externes Laufwerk, das Sie kontrollieren (Schreibzugriff sicherstellen)

Vermeiden Sie langsame oder in der Berechtigung eingeschränkte Speicherorte, und beachten Sie, dass Netzwerkfreigaben zu Latenz führen können.

## Tipps zur Datenbankpflege

- Vermeiden Sie systemgeschützte Ordner.
- Wenn Sie einen Cloud-Sync-Ordner verwenden, bevorzugen Sie Dienste, die kleine Dateien zuverlässig synchronisieren (z. B. OneDrive, Dropbox).
- Sichern Sie `rclone_view.db` regelmäßig.
- Vermeiden Sie Netzwerkpfade mit hoher Latenz für die aktive Datenbank.

## Kurzübersicht

| Item             | Details                                                    |
| ---------------- | ---------------------------------------------------------- |
| Database file    | `rclone_view.db`                                           |
| What it stores   | Transfer history, jobs, mounts, UI state                   |
| Default path     | User Documents folder                                      |
| Change path      | Settings → Embedded Rclone → Path Settings                 |
| Permission check | Temp file write test                                       |
| Best locations   | User-writable folders (Documents, Roaming, external drive) |

Wählen Sie einen stabilen, beschreibbaren Speicherort für `rclone_view.db`, um RcloneView zuverlässig zu halten und Ihren Verlauf zu bewahren.
