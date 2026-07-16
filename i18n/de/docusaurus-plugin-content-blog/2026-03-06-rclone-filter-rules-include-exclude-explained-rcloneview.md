---
slug: rclone-filter-rules-include-exclude-explained-rcloneview
title: "Rclone-Filterregeln erklärt: Include- und Exclude-Muster für intelligentere Synchronisationen"
authors:
  - tayson
description: "Beherrschen Sie rclones Filterregeln, um nur das zu synchronisieren, was Sie brauchen. Lernen Sie Include-, Exclude-, Filter-From- und Min-/Max-Größen-/Alters-Muster kennen — mit praktischen Beispielen für RcloneView."
keywords:
  - rclone filter rules
  - rclone include exclude
  - rclone exclude folder
  - rclone filter from file
  - rclone sync specific files
  - rclone ignore files
  - rclone exclude pattern
  - rclone filter examples
  - rclone min size max size
  - rclone selective sync
tags:
  - RcloneView
  - rclone
  - filters
  - sync
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone-Filterregeln erklärt: Include- und Exclude-Muster für intelligentere Synchronisationen

> Alles zu synchronisieren ist verschwenderisch. Die falschen Dinge zu synchronisieren ist gefährlich. Mit den Filterregeln von rclone können Sie präzise steuern, was übertragen wird — aber die Syntax kann verwirrend sein. Dieser Leitfaden erklärt alles anhand praktischer Beispiele.

Wenn Sie Dateien zwischen Clouds synchronisieren oder kopieren, wollen Sie selten alles. Vielleicht benötigen Sie nur `.pdf`-Dateien, oder alles außer `.tmp`-Dateien, oder Dateien, die in den letzten 7 Tagen geändert wurden, oder Dateien unter 100 MB. Das Filtersystem von rclone deckt all das ab — und RcloneView lässt Sie diese Filter visuell in Ihren Job-Einstellungen konfigurieren.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wie rclone-Filter funktionieren

Rclone verarbeitet Filterregeln **der Reihe nach, von oben nach unten**. Für jede Datei prüft es die Regeln nacheinander:

1. Wenn eine Regel zutrifft, wird die Datei ein- oder ausgeschlossen (je nach Regel).
2. Wenn keine Regel zutrifft, wird die Datei **standardmäßig eingeschlossen**.

Dieses "Erste Übereinstimmung gewinnt"-Verhalten ist entscheidend zu verstehen. Die Reihenfolge ist wichtig.

## Grundlegende Muster

### Bestimmte Dateien oder Ordner ausschließen

```
--exclude "*.tmp"
--exclude "node_modules/**"
--exclude ".DS_Store"
```

Diese Muster schließen aus:
- Alle `.tmp`-Dateien überall im Baum.
- Den gesamten Ordner `node_modules` und seinen Inhalt.
- Alle `.DS_Store`-Dateien (macOS-Metadaten).

### Nur bestimmte Dateien einschließen

```
--include "*.pdf"
--include "*.docx"
```

Wenn Sie `--include` verwenden, schließt rclone **automatisch alles andere aus**. Also bedeutet `--include "*.pdf"`: "Nur PDFs synchronisieren, nichts anderes."

### Include und Exclude kombinieren

```
--include "*.jpg"
--include "*.png"
--exclude "*"
```

Dies schließt explizit nur JPG- und PNG-Dateien ein. Das abschließende `--exclude "*"` erfasst alles andere.

## Das Flag --filter

Das Flag `--filter` bietet Include und Exclude in einer einzigen Regel:

```
--filter "+ *.pdf"
--filter "+ *.docx"
--filter "- *"
```

Das Präfix `+` bedeutet Einschließen, `-` bedeutet Ausschließen. Dies entspricht separaten `--include`- und `--exclude`-Flags, ist aber kompakter.

## Filter-From-Datei

Für komplexe Regelsätze legen Sie Ihre Filter in einer Datei ab:

```
--filter-from /path/to/filters.txt
```

**filters.txt:**
```
# Include documents
+ *.pdf
+ *.docx
+ *.xlsx

# Include images
+ *.jpg
+ *.png

# Exclude everything else
- *
```

Zeilen, die mit `#` beginnen, sind Kommentare. Dies ist der empfohlene Ansatz für jeden Synchronisationsjob mit mehr als 2-3 Regeln.

## Verzeichnisfilter

### Ein bestimmtes Verzeichnis ausschließen

```
--exclude "backup/**"
```

`**` bedeutet "dieses Verzeichnis und alles darin."

### Nur ein bestimmtes Verzeichnis einschließen

```
--include "/projects/**"
--exclude "*"
```

Dies synchronisiert nur den Ordner `projects` auf der Stammebene.

### Verzeichnisse nach Muster ausschließen

```
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "node_modules/**"
```

Üblich für Entwickler, die Code-Repositories synchronisieren — Versionskontroll- und Abhängigkeitsordner werden übersprungen.

## Größenfilter

### Mindestdateigröße

```
--min-size 1M
```

Überspringt Dateien, die kleiner als 1 MB sind. Nützlich, um Thumbnails oder winzige Cache-Dateien zu ignorieren.

### Maximale Dateigröße

```
--max-size 100M
```

Überspringt Dateien, die größer als 100 MB sind. Nützlich, wenn Sie Dokumente, aber keine Videodateien wollen.

### Größeneinheiten

- `k` oder `K` — Kilobyte
- `M` — Megabyte
- `G` — Gigabyte

Beispiel: `--min-size 500k --max-size 2G` synchronisiert Dateien zwischen 500 KB und 2 GB.

## Altersfilter

### Nur aktuelle Dateien

```
--max-age 7d
```

Synchronisiert nur Dateien, die in den letzten 7 Tagen geändert wurden. Ideal für inkrementelle Backups aktiver Projekte.

### Nur ältere Dateien

```
--min-age 30d
```

Synchronisiert nur Dateien, die sich seit 30 Tagen nicht geändert haben. Nützlich zum Archivieren veralteter Daten.

### Alterseinheiten

- `ms` — Millisekunden
- `s` — Sekunden
- `m` — Minuten
- `h` — Stunden
- `d` — Tage
- `w` — Wochen
- `M` — Monate
- `y` — Jahre

## Praktische Beispiele

### Beispiel 1: Nur Dokumente sichern

Synchronisieren Sie PDFs, Word-Dokumente und Tabellenkalkulationen von Google Drive zu Backblaze B2:

```
--include "*.pdf"
--include "*.docx"
--include "*.xlsx"
--include "*.pptx"
--exclude "*"
```

### Beispiel 2: Große Videodateien überspringen

Synchronisieren Sie alles außer Videodateien über 500 MB:

```
--exclude "*.mp4"
--exclude "*.mov"
--exclude "*.avi"
--exclude "*.mkv"
```

Oder verwenden Sie die Größenfilterung: `--max-size 500M`

### Beispiel 3: Synchronisation eines Entwicklerprojekts

Synchronisieren Sie ein Code-Projekt ohne Abhängigkeiten und Build-Artefakte:

```
--exclude "node_modules/**"
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "dist/**"
--exclude "build/**"
--exclude "*.pyc"
```

### Beispiel 4: Dateien archivieren, die älter als 90 Tage sind

Verschieben Sie alte Dateien von Google Drive nach S3 Glacier:

```
--min-age 90d
```

### Beispiel 5: Foto-Backup (RAW überspringen, JPEG behalten)

```
--include "*.jpg"
--include "*.jpeg"
--include "*.png"
--include "*.heic"
--exclude "*.cr2"
--exclude "*.nef"
--exclude "*.arw"
--exclude "*"
```

## Filter in RcloneView verwenden

Beim Erstellen eines Synchronisations- oder Kopierjobs in RcloneView können Sie Filterregeln in der Jobkonfiguration hinzufügen. Diese werden direkt an rclone übergeben:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure filter rules in RcloneView jobs" class="img-large img-center" />

### Probelauf zur Überprüfung

Verwenden Sie beim Testen neuer Filterregeln immer zuerst einen Probelauf (Dry Run). Dieser zeigt Ihnen genau, welche Dateien ein- oder ausgeschlossen würden, ohne tatsächlich etwas zu übertragen.

### Ordnervergleich mit Filtern

Verwenden Sie den [Ordnervergleich](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents), um den Zustand Ihrer Quelle und Ihres Ziels zu sehen. In Kombination mit Filtern hilft Ihnen dies zu verstehen, was genau synchronisiert wird.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison to verify filter results" class="img-large img-center" />

## Häufige Fehler

### Das abschließende `**` für Verzeichnisse vergessen

```
# Wrong — only excludes a FILE named "logs"
--exclude "logs"

# Right — excludes the logs DIRECTORY and everything in it
--exclude "logs/**"
```

### Einschließen, ohne den Rest auszuschließen

```
# This includes PDFs but doesn't exclude anything else
--include "*.pdf"

# This works — include already implies "exclude everything else"
# But only when using --include alone
```

### Die Reihenfolge ist wichtig

```
# This excludes everything, then tries to include (too late!)
--exclude "*"
--include "*.pdf"

# This works — include first, then exclude the rest
--include "*.pdf"
--exclude "*"
```

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Einen Job erstellen** mit Filterregeln in der Konfiguration.
3. **Zuerst einen Probelauf durchführen**, um zu überprüfen, ob Ihre Filter die richtigen Dateien erfassen.
4. **Den Job ausführen**, sobald Sie sich sicher sind.
5. **Filter-From-Dateien verwenden** für komplexe, wiederverwendbare Regelsätze.

Filter verwandeln ein pauschales "alles synchronisieren" in ein präzises "genau das synchronisieren, was ich brauche." Beherrschen Sie sie einmal, nutzen Sie sie überall.

---

**Verwandte Anleitungen:**

- [Synchronisationsjobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job-Planung](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Bandbreitenlimits festlegen](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
