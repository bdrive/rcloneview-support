---
slug: rcloneview-terminal-rclone-cli-inside-gui
title: "RcloneView Terminal: Die volle Power der rclone CLI in einer GUI nutzen"
authors:
  - tayson
description: "Führe die komplette rclone CLI im Terminal von RcloneView aus -- mit Autovervollständigung, Vollbildmodus und kopierbaren Logs. Keine separate Shell erforderlich."
keywords:
  - rclone terminal
  - rcloneview terminal
  - rclone cli gui
  - rclone commands
  - cloud storage cli tool
  - cloud automation
  - rclone beginners
  - rclone power users
  - cloud devops tools
  - rcloneview
tags:
  - RcloneView
  - cloud-storage
  - sync
  - file-management
  - cli

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Terminal: Die volle Power der rclone CLI in einer GUI nutzen

> Führe jeden rclone-Befehl aus, ohne RcloneView zu verlassen. Das neue Terminal bringt Autovervollständigung, kopierbare Logs und Vollbild-Ausgabe in dasselbe Fenster, in dem du browst, vergleichst und synchronisierst.

RcloneView enthält jetzt ein integriertes Terminal, mit dem du die komplette rclone CLI direkt in der App ausführen kannst -- ohne zusätzliches CMD-, PowerShell- oder Terminal-Fenster. Einsteiger können Befehle mit visuellem Kontext lernen, während Entwickler, Power-User und IT-Administratoren ihre Automatisierungs-Flags, ausführlichen Logs und Skript-Workflows beibehalten können, ohne den Kontext zu wechseln.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Warum die CLI in eine GUI bringen?

- Nicht mehr zwischen einer GUI zum Durchsuchen und einer Shell für erweiterte Flags oder Diagnosen hin- und herspringen.
- rclone-Ausgaben und Logs direkt neben deinen Übertragungen, Mounts und geplanten Jobs behalten.
- Teammitgliedern rclone sicher beibringen -- mit geführten UI-Hinweisen statt leerer Terminals.

## Was ist das RcloneView Terminal?

Das Terminal befindet sich am unteren Rand des RcloneView-Arbeitsbereichs und nutzt dieselben rclone-Binärdateien, die du bereits in der App verwendest. Tippe `rclone` und drücke die Leertaste, um alle unterstützten Befehle anzuzeigen, und führe sie sofort aus -- Windows, macOS und Linux teilen sich dieselbe Erfahrung.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="Terminal tab in RcloneView" class="img-medium img-center" />

## Vorteile für Einsteiger

- Kein Einrichtungsstress: rclone ist bereits gebündelt, sodass du Befehle üben kannst, ohne etwas zu installieren oder Systempfade zu suchen.
- Autovervollständigung macht die Entdeckung einfach -- tippe `rclone `, um die Befehlsliste zu sehen, bevor du etwas ausführst.
- Die Ausgabe bleibt in der App, sodass du sie leichter kopieren, erneut ausführen oder mit dem, was du in der GUI siehst, vergleichen kannst.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="Autocomplete list for rclone commands" class="img-medium img-center" />

## Vorteile für Entwickler & Power-User

- Ein einziger Arbeitsbereich für Mounts, Compare, Scheduler und CLI-Experimente -- kein Kontextwechsel nötig.
- Ausführliche Logs (`-vv`) erfassen, um Cloud-Latenz oder API-Drosselung zu diagnostizieren, und alles mit einem Klick kopieren.
- Remotes schneller mit `rclone config create` konfigurieren, Backends validieren und direkt zu skriptbasierten Jobs übergehen.
- Die erweiterte Ansicht nutzen, um lange Ausgaben oder mehrzeilige Skripte bequem zu lesen.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="Expanded Terminal view" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="Shrink Terminal view" class="img-medium img-center" />
</div>

## Wichtige Funktionen auf einen Blick

- **Automatische Befehlserkennung**: Tippe `rclone` + Leertaste, um jeden Befehl im Kontext zu sehen, bevor du ihn ausführst.
- **Vollbild-Terminal**: Erweitern für lange Auflistungen, verkleinern, wenn du einen Blick auf Compare oder Transfers werfen willst.
- **Kopieren, Einfügen, Alles kopieren**: Logs mit Teammitgliedern oder dem Support teilen, ohne Dateien zu exportieren.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="Copy and paste options in the Terminal" class="img-medium img-center" />

## Praktische Befehle zum sofortigen Ausprobieren

### 1) Speichernutzung eines Remotes prüfen
```bash
rclone about "mygoogle:"
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="rclone about output in RcloneView Terminal" class="img-medium img-center" />

### 2) Alle konfigurierten Remotes anzeigen
```bash
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes in RcloneView Terminal" class="img-medium img-center" />

### 3) Ein neues Remote über die CLI erstellen
```bash
rclone config create mygoogledrive drive
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="Create Google Drive remote with rclone config create" class="img-medium img-center" />

### 4) Ordner vor einer Übertragung in der Vorschau ansehen
```bash
rclone lsf mygoogledrive:Projects --dirs-only --recursive --max-depth 2
```

### 5) Eine Migration mit ausführlichen Logs proben
```bash
rclone sync mygoogledrive:Projects s3backup:Projects --dry-run -vv --progress
```
Nutze `--dry-run`, um Änderungen zu simulieren, und `-vv`, um langsame Backends oder Drosselung zu erkennen, bevor der eigentliche Job läuft.

## Wann GUI und wann Terminal wählen?

- **Nutze die GUI**, um per Drag-and-Drop zwischen Clouds zu wechseln, Unterschiede visuell zu vergleichen, wiederkehrende Jobs zu planen oder Speicher als Laufwerk einzubinden.
- **Nutze das Terminal**, um Backend-Flags zu testen, Ad-hoc-Diagnosen auszuführen oder erweiterte rclone-Befehle zu nutzen, die schneller getippt als geklickt sind.
- **Nutze beides zusammen**: Vorschau mit Compare, Plan mit CLI-Flags anpassen, dann den Workflow als geplanten Job speichern.

## Schnellstart und Sicherheit

1. Öffne den **Terminal**-Tab, tippe `rclone ` und wähle einen Befehl aus der Liste.
2. Beginne mit schreibgeschützten Befehlen (`listremotes`, `lsf`, `about`), bevor du Synchronisations- oder Löschvorgänge ausführst.
3. Für eine geführte Anleitung mit Screenshots siehe [Das Terminal in RcloneView nutzen](/howto/rcloneview-basic/using-terminal-in-rcloneview).

> Profi-Tipp: Destruktive Befehle wie `delete`, `purge` oder ein ungeprüftes `sync` können Daten entfernen. Überprüfe Pfade und Remotes doppelt, bevor du die Eingabetaste drückst.

## Fazit

Das RcloneView Terminal stellt die vollständige rclone CLI neben die visuellen Tools, die du bereits nutzt, sodass Einsteiger schneller lernen und Experten schneller vorankommen können. Probiere es noch heute aus, um deine Cloud-Vorgänge, Automatisierungsexperimente und Debug-Logs an einem Ort zu behalten.

<CloudSupportGrid />
