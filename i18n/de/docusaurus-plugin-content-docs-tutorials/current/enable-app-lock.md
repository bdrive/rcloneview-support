---
sidebar_position: 13
description: Aktivieren Sie den App-Schutz in RcloneView, um beim Start ein Passwort zu verlangen und Remotes, Übertragungen, Jobs, Mounts und die interne Datenbank zu schützen.
keywords:
  - rcloneview
  - app lock
  - password
  - security
  - rclone_view.db
  - job history
  - transfer history
  - settings
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - password
date: 2025-12-08
author: tayson
---

# App-Schutz verwenden (Passwortschutz)

**App-Schutz** verlangt ein Passwort, wenn RcloneView gestartet oder erneut geöffnet wird, und schützt so Ihre Remotes, Übertragungsdatensätze, Jobs, Mount-Informationen, den Job-Verlauf und die interne Datenbank (`rclone_view.db`). Ideal für gemeinsam genutzte oder firmeneigene PCs, auf die mehrere Benutzer zugreifen können.

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## Warum App-Schutz verwenden?

- Halten Sie RcloneView-Jobs, Mounts und den Übertragungsverlauf privat.  
- Geeignet für gemeinsam genutzte PCs oder Büroumgebungen.  
- Schützen Sie sensible Synchronisations-/Mount-Vorgänge und automatisierte Jobs.  
- Fügt eine zusätzliche Sicherheitsebene hinzu, selbst wenn automatische Jobs im Hintergrund laufen.

## So aktivieren Sie den App-Schutz

### Schritt 1 — Einstellungen öffnen

- Gehen Sie im oberen Menü zu **Settings → General Settings**.  
  <img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open settings menu" />

### Schritt 2 — App-Schutz im Tab „General“ aktivieren

- Aktivieren Sie unter **General** die Option **Enable App Lock**.  
- Geben Sie das gewünschte Passwort ein.  
- Klicken Sie auf **Close**, um zu speichern.  

<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

## Wie der App-Schutz funktioniert

Wenn der App-Schutz aktiviert ist, wird beim Starten von RcloneView oder beim erneuten Öffnen des Fensters vor dem Zugriff ein Passwort abgefragt.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## App-Schutz zurücksetzen (Reset App)

Wenn Sie das Passwort vergessen haben, klicken Sie in der Passwortabfrage auf **Reset App**.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

**Warnung:** Reset App löscht alle internen RcloneView-Daten:

- App-Schutz-Passwort  
- Alle Einstellungswerte  
- Übertragungsverlauf  
- Job-Definitionen  
- Job-Verlauf  

Nicht zurückgesetzt: Die **rclone-Konfiguration** (`rclone.conf`) bleibt erhalten, sodass die Remote-Definitionen intakt bleiben.

## Empfohlene Verwendung

- Gemeinsam genutzte oder öffentliche PCs.  
- Firmen- oder institutionelle Umgebungen.  
- Wenn Sie viele automatisierte Jobs ausführen und Manipulationen verhindern möchten.  
- Wenn Sie Job-/Übertragungsverlauf und interne Daten schützen müssen.

## Zusammenfassung

| Item | Description |
| --- | --- |
| Funktion | Verlangt ein Passwort beim Start/erneuten Öffnen von RcloneView |
| Schützt | Einstellungen, Jobs, Übertragungsverlauf, DB-Datei |
| Auslöser | App-Start oder erneutes Öffnen |
| Zurücksetzen | **Reset App** löscht interne Daten; behält `rclone.conf` |
| Am besten für | Gemeinsam genutzte PCs, Umgebungen mit hohen Sicherheitsanforderungen |

Der App-Schutz ist ein kleiner Schalter mit großer Schutzwirkung. Aktivieren Sie ihn, um Ihre RcloneView-Aktivitäten und Ihren Verlauf privat zu halten.
