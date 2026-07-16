---
slug: sync-copy-move-difference-explained-rcloneview
title: "Sync vs. Copy vs. Move — Welche Cloud-Übertragungsoperation solltest du verwenden?"
authors:
  - tayson
description: "Unsicher, wann du Sync, Copy oder Move für Cloud-Übertragungen verwenden solltest? Dieser Leitfaden erklärt die Unterschiede und wann welche Wahl in RcloneView die richtige ist."
keywords:
  - rclone sync vs copy
  - cloud sync vs copy difference
  - when to use sync or copy
  - rclone move command
  - cloud transfer operations
  - sync copy move explained
  - rclone operations guide
  - cloud file operations
  - which cloud sync type
  - safe cloud transfer method
tags:
  - RcloneView
  - sync
  - copy
  - move
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sync vs. Copy vs. Move — Welche Cloud-Übertragungsoperation solltest du verwenden?

> Du möchtest Dateien zwischen Clouds übertragen. RcloneView bietet Sync, Copy und Move. Sie klingen ähnlich, aber die falsche Wahl kann Dateien löschen, die du eigentlich behalten wolltest. Hier erfährst du, wie jede Operation funktioniert und wann du sie einsetzen solltest.

Dies ist eine der wichtigsten Entscheidungen bei der Cloud-Dateiverwaltung. Jede Operation verhält sich unterschiedlich in Bezug auf Dateien, die am Ziel existieren, aber nicht an der Quelle. Wer das versteht, verhindert versehentlichen Datenverlust.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Die drei Operationen

### Copy

**Was es tut**: Kopiert Dateien von der Quelle zum Ziel. Existiert eine Datei am Ziel bereits und ist identisch, wird sie übersprungen. Existiert sie, ist aber unterschiedlich, wird sie überschrieben.

**Was es nicht tut**: Etwas am Ziel löschen. Niemals.

```
Source:      A, B, C
Destination: B, D
After Copy:  B, D, A, C  (D is untouched, A and C are added)
```

### Sync

**Was es tut**: Macht das Ziel identisch zur Quelle. Kopiert neue und geänderte Dateien. **Löscht Dateien vom Ziel, die an der Quelle nicht existieren.**

```
Source:      A, B, C
Destination: B, D
After Sync:  A, B, C  (D is deleted! A and C are added)
```

### Move

**Was es tut**: Wie Copy, aber **löscht Dateien von der Quelle**, nachdem sie erfolgreich übertragen wurden.

```
Source:      A, B, C
Destination: B, D
After Move:
  Source: (empty)
  Destination: B, D, A, C
```

## Kurzübersicht

| Verhalten | Copy | Sync | Move |
|----------|:----:|:----:|:----:|
| Fügt neue Dateien am Ziel hinzu | ✅ | ✅ | ✅ |
| Aktualisiert geänderte Dateien | ✅ | ✅ | ✅ |
| Löscht am Ziel | ❌ | ✅ | ❌ |
| Löscht an der Quelle | ❌ | ❌ | ✅ |
| Sicher für Backups | ✅ | ⚠️ | ❌ |
| Erstellt exaktes Abbild | ❌ | ✅ | ❌ |

## Wann welche Operation verwenden

### Verwende Copy, wenn:

- **Du sicherst Daten** — Du möchtest ein Sicherheitsnetz. Copy löscht niemals am Ziel, also behält das Backup eine Datei, selbst wenn du sie an der Quelle löschst.
- **Erstmigration** — Du verschiebst Daten zum ersten Mal in eine neue Cloud.
- **Dateien hinzufügen** — Du möchtest neue Inhalte hinzufügen, ohne bestehende Dateien zu beeinflussen.
- **Du bist unsicher** — Copy ist die sicherste Standardwahl. Es kann am Ziel keine Daten verlieren.

**Beispiele:**
- Tägliches Backup: Google Drive → Backblaze B2.
- Erstmigration: OneDrive → Google Drive.
- Kundenlieferung: Fertige Dateien per Copy in die Dropbox des Kunden.

### Verwende Sync, wenn:

- **Spiegelung** — Das Ziel soll jederzeit eine exakte Kopie der Quelle sein.
- **Aktive Arbeitsordner** — Du möchtest, dass das Ziel alle Änderungen widerspiegelt, einschließlich Löschungen.
- **Speicherbereinigung** — An der Quelle entfernte Dateien sollen auch aus dem Spiegel entfernt werden.

**Beispiele:**
- Ein NAS-Spiegel auf S3 pflegen (exaktes Replikat).
- Einen Projektordner zwischen zwei Teammitgliedern spiegeln.
- Einen Staging-Server mit einem Produktions-Asset-Ordner synchron halten.

**Warnung**: Sync löscht Dateien. Führe immer zuerst einen **Dry Run** aus, um zu sehen, was gelöscht wird.

### Verwende Move, wenn:

- **Archivierung** — Alte Dateien in günstigen Speicher verschieben und von der teureren Quelle entfernen.
- **Verarbeitungspipeline** — Dateien landen in einem Posteingang, werden verarbeitet und dann ins Archiv verschoben.
- **Speicherplatz freigeben** — Dateien von einem vollen Laufwerk in Cloud-Speicher verschieben und die lokalen Kopien entfernen.

**Beispiele:**
- Dateien, die älter als 90 Tage sind, von Google Drive nach S3 Glacier verschieben.
- Verarbeitete Uploads von einem Staging-Bucket in einen Archiv-Bucket verschieben.
- Fotos von einem vollen Telefon-Backup ins Cloud-Archiv verschieben.

## Das Sicherheitsnetz Dry Run

Bevor du eine Operation ausführst (insbesondere Sync), nutze einen **Dry Run**, um genau zu sehen, was passieren wird:

- Welche Dateien kopiert werden.
- Welche Dateien gelöscht werden (nur Sync).
- Welche Dateien verschoben werden (nur Move).

Diese Vorschau kostet nichts und verhindert Überraschungen.

## Zuerst der Ordnervergleich

Nutze vor jeder Übertragung den Ordnervergleich, um den aktuellen Zustand zu verstehen:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before transferring" class="img-large img-center" />

Dies zeigt:
- Dateien, die an beiden Orten existieren (und ob sie übereinstimmen).
- Dateien, die nur an der Quelle vorkommen.
- Dateien, die nur am Ziel vorkommen.

## Häufige Fehler

### Sync für Backups verwenden

```
Day 1: Sync Google Drive → S3  (all files backed up)
Day 2: Accidentally delete a folder from Google Drive
Day 3: Sync Google Drive → S3  (folder deleted from S3 too!)
```

Verwende **Copy** für Backups, um das zu verhindern.

### Copy verwenden, wenn du einen Spiegel möchtest

```
Day 1: Copy Source → Dest  (files transferred)
Day 2: Delete old files from Source
Day 3: Copy Source → Dest  (old files still on Dest, taking up space)
```

Wenn das Ziel sauber bleiben soll, verwende **Sync**.

### Move verwenden, wenn du beide Kopien behalten möchtest

Move löscht die Quelle. Wenn du Dateien an beiden Orten brauchst, verwende **Copy**.

## Entscheidungs-Flowchart

1. **Brauchst du Dateien an beiden Orten?**
   - Ja → Copy oder Sync.
   - Nein (von der Quelle entfernen) → Move.

2. **Soll das Ziel exakt der Quelle entsprechen?**
   - Ja (einschließlich Löschungen) → Sync.
   - Nein (nur neue Dateien hinzufügen) → Copy.

3. **Handelt es sich um ein Backup?**
   - Ja → Fast immer Copy.

## Erste Schritte

1. **RcloneView herunterladen** von [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Ordner vergleichen**, um den aktuellen Zustand zu verstehen.
3. **Die richtige Operation wählen** basierend auf deinem Ziel.
4. **Zuerst einen Dry Run** durchführen, um Änderungen zu prüfen.
5. **Ausführen** mit Zuversicht.

Die richtige Operation für die richtige Aufgabe. Rate nicht — verstehe.

---

**Weiterführende Anleitungen:**

- [Sync-Jobs erstellen](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Ordnerinhalte vergleichen](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rclone-Filterregeln](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
