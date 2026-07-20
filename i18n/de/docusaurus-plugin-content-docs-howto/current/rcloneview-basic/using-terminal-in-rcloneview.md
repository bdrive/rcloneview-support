---
sidebar_position: 13
description: Führen Sie rclone-CLI-Befehle direkt im integrierten Terminal von RcloneView aus, um Remotes zu testen, zu verwalten und Probleme zu beheben.
keywords:
  - rcloneview
  - rclone
  - terminal
  - cli
  - remote management
  - troubleshooting
  - rclone config
tags:
  - RcloneView
  - Terminal
  - CLI
  - rclone
  - troubleshooting
date: 2025-12-04
author: tayson
---

# Das Terminal in RcloneView verwenden

RcloneView enthält ein integriertes Terminal, mit dem Sie vollständige `rclone`-CLI-Befehle ausführen können, ohne CMD, PowerShell oder eine System-Shell zu öffnen. Es eignet sich ideal für schnelle Tests, die Verwaltung von Remotes oder das Erfassen von Protokollen, ohne die App zu verlassen.

Diese Anleitung beschreibt, wie Sie das Terminal öffnen, `rclone`-Befehle ausführen, die Ansicht vergrößern/verkleinern und Kopieroptionen zum Teilen von Ergebnissen verwenden.

---

## Das Terminal öffnen

- Klicken Sie unten in RcloneView auf den Tab **`Terminal`**.  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="terminal bottom" class="img-medium img-center" />
- Das Terminal funktioniert wie die Standard-`rclone`-Befehlszeilenschnittstelle und führt Befehle im aktuellen RcloneView-Kontext aus.

---

## Verfügbare rclone-Befehle auflisten

Geben Sie rclone ein und drücken Sie die Leertaste, um automatisch alle unterstützten Befehle anzuzeigen.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="terminal input rclone" class="img-medium img-center" />

---

## Hilfe und Remote-Details anzeigen (`rclone about`)

- Für allgemeine Hilfe zu `about`:  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about.png" alt="terminal input rclone about" class="img-medium img-center" />
- Um Speicherinformationen für einen bestimmten Remote abzurufen (Beispiel: `mygoogle`):
  ```bash
  rclone about "mygoogle:"
  ```
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="terminal input rclone about my google" class="img-medium img-center" />

Beispielergebnis:  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle-result.png" alt="terminal about my google result" class="img-medium img-center" />

---

## Alle konfigurierten Remotes auflisten

Verwenden Sie den Befehl `listremotes`, um zu überprüfen, welche Remotes verfügbar sind:

```bash
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes" class="img-medium img-center" />

---

## Die Terminalansicht vergrößern oder verkleinern

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="terminal expand" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="terminal shrink" class="img-medium img-center" />
</div>

- **Vergrößern**: Wechseln Sie für lange Ausgaben in die Vollbild-Terminalansicht.
- **Verkleinern**: Kehren Sie zum Standardlayout zurück.

---

## Einen Remote über die CLI erstellen (`rclone config create`)

Beispiel: Erstellen Sie einen Google-Drive-Remote namens `mygoogledrive` und überprüfen Sie ihn:

```bash
rclone config create mygoogledrive drive
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="rclone config create drive" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-check.png" alt="rclone config create check" class="img-medium img-center" />

---

## Kopieren, Einfügen und Alles kopieren

Wählen Sie eine beliebige Terminalausgabe aus, um das Kontextmenü zu öffnen, und wählen Sie **Kopieren**, **Einfügen** oder **Alles kopieren**.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="terminal select copy" class="img-medium img-center" />

Dies ist hilfreich, um Protokolle mit dem Support zu teilen oder Ergebnisse in der Dokumentation zu speichern.

---

## Empfohlene Anwendungsfälle

- Testen Sie erweiterte `rclone`-Befehle (`lsf`, `tree`, Backend-Flags), bevor Sie sie automatisieren.
- Validieren Sie Skripte oder serverseitige Befehle innerhalb von RcloneView.
- Verwalten oder erstellen Sie Remotes schnell, wenn der GUI-Pfad langsamer ist.

:::caution Vorsicht bei destruktiven Befehlen
Befehle wie `delete`, `purge` oder falsche `sync`-Flags können Daten dauerhaft entfernen. Überprüfen Sie Pfade und Remotes sorgfältig, bevor Sie sie im Terminal ausführen.
:::

